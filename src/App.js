import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React, {Component} from 'react';
import {defaultHero} from "./utils/constants";


class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {hero: defaultHero}
    }

    changeHero = hero =>
    {
        this.setState({hero});
    }

    render()
    {
        return (
            <div className={'container-fluid'}>
                <Header hero={this.state.hero}/>
                <Main changeHero={this.changeHero} hero={this.state.hero}/>
                <Footer/>
            </div>
        );
  }
}

export default App;

