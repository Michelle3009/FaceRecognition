
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Card, InputGroup, Form, Col } from 'react-bootstrap';
import './Registro.css'
function Registro() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
       
    };
    function message() {
        alert('Usuario creado');
    }
    return (

        <div className='card1' >
            <Card className='card'>
                <div >
                    <h1 className='h1'>Registro</h1>
                    <Form noValidate validated={validated} onClick={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Usuario</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Elija su nombre de usuario.
            </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                      






                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" required />
                                <Form.Control.Feedback type="invalid">
                                    Ingrese un email valido.
                                </Form.Control.Feedback>
                            </Form.Group>
                           
                            
                        
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" required />
                            <Form.Control.Feedback type="invalid">
                                Ingresar contraseña.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <div className="buttons">
                            <div className="but">

                                <Button variant="contained" color="primary" component={Link} to="/" >Cancelar</Button>

                            </div>
                            <Button variant="contained" type="submit" color="green" onClick={message} component={Link} to="/">Guardar</Button>


                        </div>
                    </Form>
                </div>
               
            </Card>
        </div>

    )
}

export default Registro
