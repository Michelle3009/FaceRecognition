import React, { useState } from 'react'
import '../Styles/miembros.css';
import Icon from '@material-ui/core/Icon';

const data = [{
    id: 1, nombre: "Stephanie Segura", parentesco: "Madre", images: ["https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg",
    "https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg"]
}, { id: 2, nombre: "Diego Chacón", parentesco: "Padre", images: [] },
    { id: 3, nombre: "Alejandro Urbina", parentesco: "Hija", images: [] }, { id: 4, nombre: "Alejandro Urbina", parentesco: "Hija", images: []}]

export default function Miembros() {

    const [name, setName] = useState("");
    const [divSelected, setDivSelected] = useState(0)
    const [classNameMiembros, setClassNameMiembros] = useState("")
    const [ListImages, setListImages] = useState([])
    const changeName= (e, newName, images)=>{
        setName(newName)
        setDivSelected(e.target.id)
        setListImages(images)
        if (divSelected == 0) {
            console.log(e.target.id)
            document.getElementById(e.target.id).className = "divMiembros clickMiembros"
        }else if (e.target.id != divSelected) {
            document.getElementById(divSelected).className = "divMiembros"
            document.getElementById(e.target.id).className = "divMiembros clickMiembros"
        }
    }
    return (
    <div className="containerDivMiembros">
        <div className="containerMiembros">
                <div className="headerDiv">
                    <label className="title">Miembros</label>
            </div>
            {data.map(
                (element) => {
                    return (
                        <div className={`divMiembros`} key={element.id} id={element.id} onClick={(e)=>changeName(e, element.nombre, element.images)}>
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
                    {name == "" ? <p> </p> : <p>{name}</p>}
                    <div className="containerImage">
                        {ListImages.map((image) => {
                            return (<img src={image} height="200px" width="200px" style={{ margin: '10px 5px'}} />)
                        })}
                    </div>
                </div>
        </div>
     </div>
    )
}
