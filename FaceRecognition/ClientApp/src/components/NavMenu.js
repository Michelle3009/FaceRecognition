import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavMenu.css';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import { SidebarData } from '../components/SidebarData'

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
     //let history = useHistory();
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
                          <NavbarBrand className="navBarBrand" tag={Link} to="#">
                        <Button color="link" size="lg" onClick={() => this.openLeftBar()}><FontAwesomeIcon icon={faBars} /></Button>Administrador monitoreo </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                  <ul className="navbar-nav flex-grow">
                                  <NavItem> <NavLink tag={Link} className="text-dark" to="#">Cuenta</NavLink> </NavItem>
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
    list(anchor) {
        
        return (
            <div className="bar"
                role="presentation"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}>
                <List className="items">
                    {SidebarData.map((item, index) => (
                        <ListItem button key={index} className={item.cName} >
                            <Link to={item.path}>
                                {item.icon}
                                <span className="icon">{item.title}</span>

                            </Link>
                        </ListItem>
                    ))}
                </List>
                {/*<Divider />*/}
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

