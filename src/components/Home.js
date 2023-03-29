import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import React, {Component} from 'react';
import {characters, defaultHero} from "../utils/constants";

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
        const key = this.getKey();
        if (key !== prevProps.hero)
            this.props.changeHero(key);
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