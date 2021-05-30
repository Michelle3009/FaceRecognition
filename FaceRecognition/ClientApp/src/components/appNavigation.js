import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Layout } from './Layout';
//import { Home } from './components/Home';
import Historial from '../components/Historial/Historial'
import Home from '../components/pages/Home'
import Categoria from '../components/pages/Categoria'
import Miembros from '../components/pages/Miembros'
import Camera from '../components/pages/WebCam'

import Registro from '../components/pages/Registro'
import '../custom.css'


export default class AppNavigation extends Component {
    static displayName = AppNavigation.name;

    render() {
        return (
            <>
            
                <Layout>


                    <Switch>

                        <Route path='/home' exact component={Home}/>
                         
                      
                        <Route path='/categoria' component={Categoria} />
                        <Route path='/miembros' component={Miembros} />
                        <Route path='/historial' component={Historial} />
                        <Route path='/webCam' component={Camera} />
                        <Route path='/registro' component={Registro} />
                    </Switch>



                </Layout>

            </>

        );
    }
}
