import React from 'react';
import './App.css';

import Header from '../src/components/header/header';

import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import Footer from "./components/footer/footer";
import {Link} from "@material-ui/core";

class App extends React.Component {
    render() {
        return (
            <div className='app'>

                <Header brand='Финансовый агрегатор'/>

                <main className='main'>
                    <Switch>
                        <Route path='/region/:code' component={ProjectPage} />
                        <Route exact path='/' component={HomePage} />
                        <Redirect to='/' />
                    </Switch>
                    <Footer footerInfo='ВКР'/>
                </main>
            </div>
        );
    }
}

export default App;