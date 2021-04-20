import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavMenu.css';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
     let history = useHistory();
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true, 
        leftBar: false
    };
  }

  toggleNavbar () {
    this.setState({
        collapsed: !this.state.collapsed,
        leftBar: this.state.leftBar
    });
  }
    openLeftBar = () => {
        this.setState({
            collapsed: this.state.collapsed, leftBar: true
        })
        
    }
    closeLeftBar = (evt) => {
        this.setState({
            collapsed: this.state.collapsed, leftBar: false
        })
    }

  render () {
      return (
          <div>
              {this.state.leftBar && <LeftBar stateLeft={this.closeLeftBar} />}
          <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
              <Container>
                 <NavbarBrand className="navBarBrand" tag={Link} to="/">
                        <Button color="link" size="lg" onClick={() => this.openLeftBar()}><FontAwesomeIcon icon={faBars} /></Button>Administrador monitoreo </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                  <ul className="navbar-nav flex-grow">
                    <NavItem> <NavLink tag={Link} className="text-dark" to="/">Cuenta</NavLink> </NavItem>
                  </ul>
                </Collapse>
              </Container>
            </Navbar>
            </header>
      </div>
    );
  }
}


export class LeftBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            left:  true
        }
    }
    
    changeState(action) {
        this.setState({ left: action })
        
        
    }
    sendFather = () => {
        const { stateLeft } = this.props
        stateLeft();
    }
   
    toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.sendFather();
        this.changeState(open);

    };
    goTo(page) {
        history = useHistory();
        console.log(page)
        history.push("/home");
    }
    list(anchor) {
        
        return (
            <div
                role="presentation"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}>
                <List>
                    {['Miembros', 'Categoria','Registro de personas', 'Cerrar sesión'].map((text, index) => (
                        <ListItem button key={text} onClick={() => this.goTo(text)}>
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
                    <Drawer anchor={"left"} open={this.state.left} onClose={this.toggleDrawer(false)} >
                        {this.list("left")}
                    </Drawer>
                </React.Fragment>
            </div >
        );
    }
}

