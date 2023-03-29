import React from 'react';
import {friends} from "../utils/constants";

const Hero = (props) =>
{
    return (
        <section className="left float-start w-25 m-2 row">
            <img className="col-12" src={friends[props.hero].img}/>
        </section>
    );
};

export default Hero;