import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import React, {Component} from 'react';
import {characters, defaultHero} from "../utils/constants";
import {logDOM} from "@testing-library/react";

class Home extends Component
{
    getKey = () =>
    {
        let key = this.props.match.params.hero;
        if(!characters.includes(key))
            key = defaultHero;
        return key;
    }
    componentDidMount()
    {
        const key = this.getKey();
        this.props.changeHero(key);
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        try
        {
            console.log(prevProps);
            const key = this.getKey();
            if (key !== prevProps.match.params.hero)
                this.props.changeHero(key);
        } catch (e)
        {
            console.log(e.message);
        }

    }

    render()
    {
        const key = this.getKey();
        return (
            <main className="clearfix">
                <Hero hero={key}/>
                <Friends hero={key} changeHero={this.props.changeHero}/>
                <FarGalaxy/>
            </main>
        );
    }
}

export default Home;

// const Home = (props) =>
// {
//     return (
//         <main className="clearfix">
//             <Hero hero={props.hero}/>
//             <Friends hero={props.hero} changeHero={props.changeHero}/>
//             <FarGalaxy/>
//         </main>
//     );
// };
//
// export default Home;