import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Tabs, Tab, Image} from 'react-bootstrap';
import './Historial.css'
import { HistorialService } from "../../firebase/historial"
import { Layout } from '../Layout';


const funcionesService = new HistorialService();
export default function Historial() {
    const [funcionesFirebase, setFuncionesListFirebase] = useState("");
    const [funcionesFirebase2, setFuncionesListFirebase2] = useState("");
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);

   useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
      
       async function Data() {
       await funcionesService.getSearchResult().then((lista) => {
            console.log("datos")

           console.log(lista)
           
           setFuncionesListFirebase(lista)
           setState(true)
           console.log(state)
       }).catch((error) => {
           console.log(error)
       });

       console.log(funcionesFirebase)
      
       }
       Data()
   }, []);

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador

        async function Data2() {
            await funcionesService.getSearchResult2().then((lista) => {
                console.log("datos")

                console.log(lista)

                setFuncionesListFirebase2(lista)
                setState2(true)
                console.log(state2)
            }).catch((error) => {
                console.log(error)
            });

            console.log(funcionesFirebase2)

        }
        Data2()
    }, []);


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));   
const renderCard = (card, index) => {
    return (
        <>
            <Card key={index} style={{ backgroundColor: "#fff", dispay:"flex", justifyContent: "center" }} ClassName="box">
           
            
                <Card.Body >
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}> 
                <Card.Title>{card.nombre}</Card.Title>
                <div className="divc">
                        <Image src={card.imagen} rounded  width="200" height="200" />
                </div>
                <Card.Text>
                        {card.descripcion}
                 </Card.Text>
                </div>
            </Card.Body>
            </Card>
        
           </>
    );
};
    const renderCardDesconocido = (card, index) => {
        return (
            <>
                <Card key={index} style={{ backgroundColor: "#fff", justify:"center"}} ClassName="box">
               
                    <Card.Body>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}> 
                    <Card.Title>{card.nombre}</Card.Title>
                    <div className="divc">
                            <Image src={card.imagen} rounded width="200" height="200" />
                    </div>
                    <Card.Text>
                            {card.descripcion}
                            </Card.Text>
                        </div>
                </Card.Body>
            </Card>
                </>
        );
    };

    function ControlledTabs() {
        const [key, setKey] = useState('home');
        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                <Tab eventKey="home" title="Miembros">
                    {state ? <div class="ite" >
                        {funcionesFirebase.map(renderCard)}
                    </div> : "no hay datos"}
                </Tab>
                <Tab eventKey="profile" title="Desconocidos">
                    {state2 ? <div class="ite" >
                        {funcionesFirebase2.map(renderCardDesconocido)}
                    </div> : "no hay datos"}
                </Tab>
            </Tabs>
        );
    }
    return (
        <>
            <Layout>
                    <ControlledTabs />
                </Layout>
        </>
    );
}


