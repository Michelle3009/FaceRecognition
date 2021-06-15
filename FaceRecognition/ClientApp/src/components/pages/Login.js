import { Link } from "react-router-dom"
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Card, InputGroup, Form, Alert} from 'react-bootstrap';
import './login.css'
import { LoginService } from "../../firebase/login"
import { useHistory } from "react-router-dom";
const funcionesService = new LoginService();
function Login() {
    const [username, setUsername]= useState("");
    const [contrasena, setContrasena] = useState("");
    const [funcionesFirebase, setFuncionesListFirebase] = useState("");
    const [estado, setEstado] = useState(false);
    let history = useHistory();
    const functionLogin = async () => {
        console.log(username + " " + contrasena)
        await funcionesService.getSearchResult(username, contrasena).then((lista) => {
            console.log("probando funci")
            console.log(lista)
            if (lista.length == 0) {
                setEstado(true)
                console.log("usuario no existe o datos incorrectos")
                console.log(estado)
            } else {
                setEstado(false)
                console.log("usuario correctamente ingresado")
                setFuncionesListFirebase(lista)
                signInFunction()
            }


        }).catch((error) => {
            console.log(error)
        });

        console.log(funcionesFirebase)
        return
    }

    const signInFunction = () => {
        // Now in the sign in callback

        history.push("/miembros");


    }


    return (
        <>
            {estado ? <Alert variant={'danger'}> Usuario incorrecto o datos invalidos</Alert> : ""}
        <div className='card1' >
            <Card className='card'>
                <div >
                    <h1 className='h1'>Login</h1>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <div className="label">
                                <Form.Label style={{ color: "#000" }}>Usuario</Form.Label>
                            </div>
                            <div className="input">
                                <Form.Control value={username} type="email" placeholder="Ingrese el nombre de usuario" onChange={event => setUsername(event.target.value)} />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <div className="label">
                                <Form.Label style={{ color: "#000" }}>Contraseña</Form.Label>
                            </div>
                            <div className="input">
                                <Form.Control value={contrasena} type="password" placeholder="Contraseña" onChange={event => setContrasena(event.target.value)}/>
                            </div>
                        </Form.Group>
                    </Form>
                    </div>
                    <Button variant="link" component={Link} style={{
                        color: "#1882E3", textDecorationLine:"underline"
                    }} to="/registro" >¿Todavía no te has registrado? Registro</Button>{''}
                <div className="buttons">
                    <Button variant="contained" style={{ backgroundColor: "#75B693", color: "#fff" }} onClick={() => { functionLogin() }}>Login</Button>{' '}


                </div>
            </Card>
        </div>
        </>
      
    )
}

export default Login
