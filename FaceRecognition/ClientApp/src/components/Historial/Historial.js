import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card, Text, Tabs, Tab, Image } from 'react-bootstrap';
import { Container, Row, Col} from 'reactstrap';
import './Historial.css'
import { Layout } from '../Layout';
export default function Historial() {

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

    const histroryInfo=[{
        id: "1",
        texto: "hola, hoy ingreso Sobeida 3 veces",
        imagen:"https://www.petclic.es/wikipets/wp-content/uploads/sites/default/files/library/dalmata_-_razas_de_perro.jpg"
    }, {
            id: "2",
            texto: "hola, hoy ingreso Carlos 3 veces"
        }, {
            id: "3",
            texto: "hola, hoy ingreso Jean Carlos 3 veces"
        }];
    const histroryInfo2 = [{
        id: "1",
        texto: "hola, hoy ingreso este desconocido 3 veces",
        imagen:"https://www.petclic.es/wikipets/wp-content/uploads/sites/default/files/library/dalmata_-_razas_de_perro.jpg"
    }, {
        id: "2",
            texto: "hola, hoy ingreso este desconocido  2 veces"
    }, {
        id: "3",
            texto: "hola, hoy ingreso este desconocido  1 veces"
    }];


const renderCard = (card, index) => {

    return (
        <>
            
        <Card key={index}>
           
            
            <Card.Body>
                <Card.Title>{card.texto}</Card.Title>
                <div className="divc">
                    <Image src={card.imagen} roundedCircle />
                </div>
                <Card.Text>
                    {card.texto}
                </Card.Text>
            </Card.Body>
                </Card>
           </>

    );
};

    const renderCardDesconocido = (card, index) => {

        return (

            <Card key={index} ClassName="box">
               
                <Card.Body>
                    <Card.Title>{card.texto}</Card.Title>
                    <div className="divc">
                        <Image src={card.imagen} roundedCircle />
                    </div>
                    <Card.Text>
                        {card.texto}
                    </Card.Text>
                </Card.Body>
            </Card>

        );
    };

    function ControlledTabs() {
        const [key, setKey] = useState('home');

        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Miembros">
                    
                    {histroryInfo.map(renderCard)}
                </Tab>
                <Tab eventKey="profile" title="Desconocidos">
                  
                    {histroryInfo2.map(renderCardDesconocido)}
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


