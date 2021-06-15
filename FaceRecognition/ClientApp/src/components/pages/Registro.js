
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Card, InputGroup, Form, Col } from 'react-bootstrap';
import './Registro.css'
import { LoginService } from "../../firebase/login"
import { useHistory } from "react-router-dom";
const funcionesService = new LoginService();
function Registro() {

    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [funcionesFirebase, setFuncionesListFirebase] = useState("");
    const [estado, setEstado] = useState(false);
    let history = useHistory();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
       
    };
    function message() {
        console.log(name + " " + apellido + " " + username + " " + email + " " + contrasena)
        //alert('Usuario creado');
    }


    const functionRegister = async () => {
        console.log(name + " " + apellido + " " + username + " " + email + " " + contrasena)
        await funcionesService.adduser(name, apellido, username, email, contrasena).then((lista) => {
            console.log("probando funci")
            console.log(lista)
            if (lista == true) {
                setEstado(true)
                console.log("usuario agregado correctamente")
                console.log(estado)
            } else {
                setEstado(false)
                console.log("usuario no se agrego")
                setFuncionesListFirebase(lista)
                
            }


        }).catch((error) => {
            console.log(error)
        });

        console.log(funcionesFirebase)
        return
    }

    const signInFunction = () => {
        // Now in the sign in callback

        history.push("/home");


    }

    return (

        <div className='card1' >
            <Card className='card'>
                <div style={{margin:"15px"}}>
                    <h1 className='h1'>Registro</h1>
                    <Form noValidate validated={validated} onClick={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label style={{ color: "#000" }} >Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                    defaultValue="Mark"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label style={{ color: "#000" }}>Apellido</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Apellido"
                                    defaultValue="Otto"
                                    value={apellido}
                                    onChange={event => setApellido(event.target.value)}
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label style={{ color: "#000" }}>Usuario</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        value={username}
                                        onChange={event => setUsername(event.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Elija su nombre de usuario.
            </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                      
                            <Form.Group controlId="validationCustom03">
                            <Form.Label style={{ color: "#000" }}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required value={email}
                                onChange={event => setEmail(event.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Ingrese un email valido.
                                </Form.Control.Feedback>
                            </Form.Group>
                           
                            
                        
                        <Form.Group>
                            <Form.Label style={{ color: "#000" }} >Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" required value={contrasena}
                                onChange={event => setContrasena(event.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                Ingresar contraseña.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <div className="buttons">
                            <div className="but">

                                <Button variant="contained" style={{ backgroundColor: "#e32b24", color: "#fff" }} component={Link} to="/" >Cancelar</Button>

                            </div>
                            <Button variant="contained" type="submit" style={{ backgroundColor: "#5FA4B5", color: "#fff" }} onClick={() => { functionRegister() }} component={Link} to="/">Guardar</Button>


                        </div>
                    </Form>
                </div>
               
            </Card>
        </div>

    )
}

export default Registro
