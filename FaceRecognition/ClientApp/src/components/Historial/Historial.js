import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


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

export default function Historial() {
    const classes = useStyles();
    console.log("odiooooooooooooooooooooooooooooooooooooooooooooooooooo")
    return (
        <>
            <Card>
                <Card.Img variant="top" src="perro.jpg" />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <Image src="perro.jpg" thumbnail />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="perro.jpg" />
            </Card>
        </>
    );
}

