import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {StarWarsContext} from "../utils/starWarsContext";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (

        <nav>
            <ul className="position-fixed list-unstyled d-inline">
                <Link to={`/${homePage}`}>
                    <li className="border border-light rounded-pill btn btn-danger">Home</li>
                </Link>
                <Link to={`/${aboutMePage}`}>
                    <li className="border border-light rounded-pill btn btn-danger">About me</li>
                </Link>
                <Link to={`/${starWarsPage}`}>
                    <li className="border border-light rounded-pill btn btn-danger">Star Wars</li>
                </Link>
                <Link to={`/${contactPage}`}>
                    <li className="border border-light rounded-pill btn btn-danger">Contact</li>
                </Link>

            </ul>
        </nav>

    );
};

export default Navigation;