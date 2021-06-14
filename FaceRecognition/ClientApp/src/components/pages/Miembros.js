import React, { useEffect, useState } from 'react'
import '../Styles/miembros.css';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import { getMembersService, uploadImagesMembers } from '../../firebase/members.service'
import { createMember } from '../../firebase/members.service'
export default function Miembros() {

    const [name, setName] = useState("");
    const [divSelected, setDivSelected] = useState(0)
    const [ListImages, setListImages] = useState([])
    const [open, setOpen] = useState(false)

    const [data, setData] = useState([]);

    useEffect(() => {
        getMembersService().then((result) => {
            console.log(result)
            setData(result)
        }).catch((error) => {
            console.log(error)
        })
        
    }, [data])

    const changeName= (e, newName, images)=>{
        setName(newName)
        setDivSelected(e.target.id)
        setListImages(images)
        if (divSelected == 0) {
            document.getElementById(e.target.id).className = "divMiembros clickMiembros"
        }else if (e.target.id != divSelected) {
            document.getElementById(divSelected).className = "divMiembros"
            document.getElementById(e.target.id).className = "divMiembros clickMiembros"
        }
    }
    const handleClose = () => {
        setOpen(false)
    }
    const openModal = () => {
         setOpen(true)
    }
    return (
        <div className="containerDivMiembros">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <ModalContainer close={handleClose}></ModalContainer>

            </Modal>
        <div className="containerMiembros">
            <div className="headerDiv">
                    <label className="title">Miembros</label>
                    <button className="create" onClick={openModal}>+ Crear</button>
            </div>
            {data.map(
                (element) => {
                    return (
                        <div className={`divMiembros`} key={element.id} id={element.id} onClick={(e)=>changeName(e, element.nombre, element.imagenes)}>
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
                            return (<img src={image} key={image} height="200px" width="200px" style={{ margin: '10px 5px'}} />)
                        })}
                    </div>
                </div>
        </div>
     </div>
    )
}

function ModalContainer(props) {
    console.log(props)
    const [images, setImages] = useState([])
    const [name, setName] = useState('');
    const [family, setFamily] = useState('')
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
                console.log('AÑADIDO')
                closeModal()
            }).catch((error) => {
                console.log(error)
            })

        }).catch((error) => {
            console.log(error)
        })
    };
    const handleChangeFamily=(e)=>{
        setFamily(e.target.value)
    }
    const handleChangeName =(e)=> {
        setName(e.target.value)
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{
                display: 'flex', background: 'white', borderRadius: '20px', justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column', padding: '20px', position: 'relative'
            }}>
                <strong style={{ marginBottom: '20px' }}> Ingrese los siguientes datos</strong>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input placeholder="Nombre" onChange={handleChangeName} style={{ marginBottom:'20px' }} />
                    <input placeholder="Parentesco" onChange={handleChangeFamily}/>
                    <div style={{flexDirection: 'column', width: '400px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '160px', overflowY: 'auto', alignItems: 'center' }}>
                            {images.length != 0 ? images.map((item) => {
                                return (<div style={{ margin: '5px', height: "120px", width: "120px", alignItems:'center', display:'flex' }}><img src={item} style={{ height: "100px", width: "100px" }} /></div>)
                            }) : <div style={{
                                height: '100px', width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                borderColor: 'gray', borderWidth: '1px', borderStyle: 'solid'
                            }}>
                                    <p style={{ color: 'gray' }}>Imagen</p>
                                </div>
                            }</div>
                        <SelectImage getImage={getImage}></SelectImage>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <button style={{ background: 'red', color: 'white', borderStyle: 'none', margin: '5px', borderRadius: '10px' }}
                        onClick={()=>closeModal()} >Cancelar</button>
                    <button style={{ background: 'green', color: 'white', borderStyle: 'none', margin: '5px', borderRadius: '10px' }}
                        onClick={()=>createMembers()}>Crear</button>
                </div>
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
            <div>
                <button onClick={fileSelect}>+ Añadir imagen</button>
                <input id='inputSelect' type="file" style={{display:'none'} } onChange={select} />
            </div>    
        )
    }