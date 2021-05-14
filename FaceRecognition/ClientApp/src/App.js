/*import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
//import { Home } from './components/Home';
import Historial from './components/Historial/Historial'
import Navbar from '../src/components/Navbar'
import './custom.css'
import Home from '../src/components/pages/Home'
import Categoria from '../src/components/pages/Categoria'
import Miembros from '../src/components/pages/Miembros'


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/categoria' component={Categoria} />
                    <Route path='/miembros' component={Miembros} />
                    <Route path='/historial' component={Historial} />

                </Switch>
                </Router>
        </>
       
        
        );
  }

export default App;
*/

import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Layout } from './components/Layout';
//import { Home } from './components/Home';
import Historial from './components/Historial/Historial'
import Home from '../src/components/pages/Home'
import Categoria from '../src/components/pages/Categoria'
import Miembros from '../src/components/pages/Miembros'
import Camera from '../src/components/pages/WebCam'
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
               
                   
                <Switch>
                    
                        <Route path='/' exact component={Home} />
                        <Route path='/categoria' component={Categoria} />
                        <Route path='/miembros' component={Miembros} />
                        <Route path='/historial' component={Historial} />
                        <Route path='/webCam' component={Camera} />
                    
                    </Switch>
               

            </Layout>
        );
    }
}