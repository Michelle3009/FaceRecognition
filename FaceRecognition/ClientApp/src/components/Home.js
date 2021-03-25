import React, { Component, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props){
        super(props)
        this.state = {
            left: false
        }
    }
    changeState(action) {
        this.setState({left: action})
    }
    toggleDrawer = (open)=>(event)=> {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.changeState(open);

    };
    list(anchor) {
        return(
        <div
            role="presentation"
            onClick={this.toggleDrawer( false)}
            onKeyDown={this.toggleDrawer( false)}>
            <List>
                {['Miembros', 'Parentesco', 'Registro de personas', 'Cerrar sesión'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>)
    }
    render() {
        return (
            <div>
                <React.Fragment key={"left"} >
                    <Button onClick={this.toggleDrawer(true)}>Left</Button>
                    <Drawer anchor={"left"} open={this.state.left} onClose={this.toggleDrawer( false)}>
                        {this.list("left")}
                    </Drawer>
                </React.Fragment>
            </div >
        );
    }
  }

