import { Link } from "react-router-dom"
import React from 'react'
import Button from '@material-ui/core/Button';
import { Card, InputGroup, Form } from 'react-bootstrap';
import './login.css'
function Login() {

    

    return (

        <div className='card1' >
            <Card className='card'>
                <div >
                    <h1 className='h1'>Login</h1>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <div className="label">
                                <Form.Label>Usuario</Form.Label>
                            </div>
                            <div className="input">
                                <Form.Control type="email" placeholder="Ingrese el nombre de usuario" />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <div className="label">
                                <Form.Label>Contraseña</Form.Label>
                            </div>
                            <div className="input">
                            <Form.Control type="password" placeholder="Contraseña" />
                            </div>
                        </Form.Group>
                    </Form>
                </div>
                <div className="buttons">
                    <div className="but">

                        <Button variant="contained" style={{ backgroundColor: "#5FA4B5", color:"#fff" }} component={Link} to="/registro" >Registro</Button>{''}
                        
                    </div>
                    <Button variant="contained" style={{ backgroundColor: "#75B693", color: "#fff" }}  component={Link} to="/home" >Login</Button>{' '}
                    
                    
                </div>
            </Card>
        </div>

    )
}

export default Login
