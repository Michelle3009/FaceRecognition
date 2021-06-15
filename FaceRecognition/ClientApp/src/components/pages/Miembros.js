import React, { useEffect, useState } from 'react'
import '../Styles/miembros.css';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import { getMembersService, uploadImagesMembers } from '../../firebase/members.service'
import { Alert } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import derecha from '../../assets/derecha.png';
import izquierda from '../../assets/izquierda.png';
import arriba from '../../assets/arriba.png';
import abajo from '../../assets/abajo.png';
import inclinaDer from '../../assets/inclinaDer.png';
import inclinaIzq from '../../assets/inclinaIzq.png';
import frente from '../../assets/frente.png';
import { createMember } from '../../firebase/members.service'
import { Layout } from '../Layout';
export default function Miembros() {

    const [name, setName] = useState("");
    const [divSelected, setDivSelected] = useState(0)
    const [ListImages, setListImages] = useState([])
    const [open, setOpen] = useState(false)
    const [estado, setEstado] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        
    

    
    Data()
    }, []);
    const Data = async () => {
        await getMembersService().then((result) => {
            console.log(result)
            setData(result)
            
        }).catch((error) => {
            console.log(error)
        })

    }
    const changeName = (e, newName, images) => {
        setName(newName)
        setDivSelected(e.target.id)
        setListImages(images)
        if (divSelected == 0) {
            document.getElementById(e.target.id).className = "divMiembros clickMiembros"
        } else if (e.target.id != divSelected) {
            document.getElementById(divSelected).className = "divMiembros"
            document.getElementById(e.target.id).className = "divMiembros clickMiembros"
        }
    }
    const Refresh = () => {
        Data()

    }
    const Alerts = (item) => {
        setEstado(item)
        setTimeout(Cambiar, 2000);
    }
    const Cambiar = () => {
        setEstado(false)
      
    }
    const handleClose = () => {
        setOpen(false)
    }
    const openModal = () => {
        setOpen(true)
    }
    return (
        <>
            <Layout>
                {estado ? < Alert variant={'success'}> Miembro correctamente creado</Alert> : ""} 
        <div className="containerDivMiembros">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description">
                        <ModalContainer estado={Alerts} refresh={Refresh} close={handleClose}></ModalContainer>

            </Modal>
            <div className="containerMiembros">
                <div className="headerDiv">
                    <label className="title">Miembros</label>
                    <button className="create" onClick={openModal}>+ Crear</button>
                </div>
                {data.map(
                    (element) => {
                        return (
                            <div className={`divMiembros`} key={element.id} id={element.id} onClick={(e) => changeName(e, element.nombre, element.imagenes)}>
                                <Icon className="fas fa-user" color="primary" />
                                <div className="miembro">
                                    <p className="nombre">{element.nombre}</p>
                                    <p className="parentesco" >{element.parentesco}</p>
                                </div>
                            </div>)

                    })}
            </div>
            <div className="containerInfo">
                <div className="containerData">
                    {name == "" ? <p> </p> : <div className="containerDataName"><p>{name}</p></div>}
                    <div className="containerImage">
                        {ListImages.map((image) => {
                            return (<img src={image} key={image} height="200px" width="200px" style={{ margin: '10px 5px' }} />)
                        })}
                    </div>
                </div>
            </div>
                </div>
            </Layout>
            </>

    )
}

function ModalContainer(props) {
    console.log(props)
    const [images, setImages] = useState([])
    const [name, setName] = useState('');
    const [family, setFamily] = useState('')
    const [openGuide, setOpenGuide] = useState(false)
    const [estados, setEstados] = useState(false);
    const getImage = (file) => {
        console.log(file)
        const newImages = images.concat(file)
        console.log(newImages[0])
        setImages(newImages)
    }
    const closeModal = () => {
        const { close } = props;
        close()
    }
    const createMembers = () => {
        createMember(name, family, []).then((result) => {
            uploadImagesMembers(images, result).then((res) => {
                setEstados(true)
                console.log(estados)
                const { refresh } = props
                refresh()
                const { estado } = props
                estado(true)
                closeModal()
                
             

            }).catch((error) => {
                console.log(error)
            })

        }).catch((error) => {
            console.log(error)
        })
    };
    const handleChangeFamily = (e) => {
        setFamily(e.target.value)
    }
    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleClose = () => {
        setOpenGuide(false)
    }
    const openModalGuide = () => {
        setOpenGuide(true)
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
           
            <div style={{
                display: 'flex', background: 'white', borderRadius: '20px', justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column', padding: '20px', position: 'relative'
            }}>
                <strong style={{ marginBottom: '10px' }}> Ingrese los siguientes datos</strong>
                <Modal open={openGuide} onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    maxWidth="md" >
                    <ModalGuide close={handleClose}></ModalGuide>
                </Modal>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    
                    <input placeholder="Nombre" onChange={handleChangeName} style={{ marginBottom: '10px' }} />
                    <input placeholder="Parentesco" onChange={handleChangeFamily} />
                    <div style={{ flexDirection: 'column', width: '400px', borderTopColor: 'gray', borderTopWidth: '1px', borderTopStyle: 'solid', marginTop: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '150px', overflowY: 'auto', alignItems: 'center' }}>
                            {images.length != 0 ? images.map((item) => {
                                return (
                                    <div style={{ margin: '5px', height: "130px", width: "120px", alignItems: 'center', display: 'flex' }}>
                                        <img src={item} style={{ height: "100px", width: "100px" }} /></div>)
                            }) : <div style={{
                                height: '100px', width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                borderColor: 'gray', borderWidth: '1px', borderStyle: 'solid'
                            }}>
                                    <p style={{ color: 'gray' }}>Sin Imagen</p>
                                </div>
                            }

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', width: '100%', alignItems: 'center' }}>
                            <p style={{ fontSize: '15px', color: 'darkgray', alignSelf: 'center' }}>*Debe añadir 7 imagenes</p>
                            <button style={{
                                display: 'flex', position: 'absolute', right: '10px', borderStyle: 'none', background: 'white',
                                color: 'darkblue', borderRadius: '10px', fontSize: '20px', textDecoration: 'underline'
                            }} onClick={() => openModalGuide()}>Guía </button></div>
                        <SelectImage getImage={getImage}></SelectImage>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <button style={{ background: 'red', color: 'white', borderStyle: 'none', margin: '5px', borderRadius: '10px' }}
                        onClick={() => closeModal()} >Cancelar</button>
                    <button style={{ background: 'green', color: 'white', borderStyle: 'none', margin: '5px', borderRadius: '10px' }}
                        onClick={() => createMembers()}>Crear</button>
                </div>
            </div>
        </div>
    )
}
function ModalGuide(props) {
    const classes = useStyles();
    const closeModal = () => {
        const { close } = props;
        close()
    }
    const list = [{ position: 'De frente', image: frente },
    { position: 'Lado derecha', image: derecha },
    { position: 'Lado Izquierdo', image: izquierda },
    { position: 'Abajo', image: abajo },
    { position: 'Arriba', image: arriba },
    { position: 'Inclinada a la derecha', image: inclinaDer },
    { position: 'Inclinada a la iquierda', image: inclinaIzq }
    ]

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{
                display: 'flex', background: 'white', borderRadius: '20px', justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column', padding: '20px', position: 'relative', width: '500px'
            }}>
                <strong style={{ marginBottom: '10px' }}>Guía sobre las fotos a subir</strong>
                <p>Debe añadir 7 imágenes diferentes de su cara, cómo se muestra en las imágenes</p>

                <div style={{ display: 'flex', flexDirection: 'row', height: '180px', overflowY: 'auto', alignItems: 'center', width: '400px' }}>
                    {list.length != 0 ? list.map((item) => {
                        return (<div style={{ margin: '5px', height: "190px", width: "170px", alignItems: 'center', display: 'flex' }}>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}${item.image}`} style={{ height: "150px", width: "150px" }} />
                                <p style={{ fontSize: '13PX' }}>{item.position}</p>
                            </div>
                        </div>)
                    }) : <div style={{
                        height: '150px', width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'gray', borderWidth: '1px', borderStyle: 'solid'
                    }}>
                            <p style={{ color: 'gray' }}>Sin Imagen</p>
                        </div>
                    }</div>
                <button style={{ background: 'darkblue', color: 'white', borderStyle: 'none', margin: '5px', borderRadius: '10px' }}
                    onClick={() => closeModal()} >Aceptar</button>
            </div>
        </div>
    )
}
function SelectImage(props) {

    const fileSelect = () => {
        document.getElementById('inputSelect').click()
    }
    const select = (event) => {
        const fileUrl = URL.createObjectURL(event.target.files[0])
        const { getImage } = props
        getImage(fileUrl)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', borderBottomColor: 'gray', borderBottomWidth: '1px', borderBottomStyle: 'solid', paddingBottom: '10px' }}>
            <button onClick={fileSelect} className='addImage'>+ Añadir imagen</button>
            <input id='inputSelect' type="file" style={{ display: 'none' }} onChange={select} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));
