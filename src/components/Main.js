import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {
  aboutMePage,
  contactPage,
  homePage,
  starWarsPage,
} from "../utils/constants";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = (props) =>
{
    return (
        <Switch>
            <Route path={["/", `/${homePage}`, `/${homePage}/:hero`]} exact
                render={(routeProps) =>
                    <Home {...routeProps} changeHero={props.changeHero}/>}/>

            <Route path={[`/${aboutMePage}`,`/${aboutMePage}/:hero`]} exact
                render={(routeProps) =>
                    <AboutMe {...routeProps} changeHero={props.changeHero} hero={props.hero}/>}/>

            <Route path={`/${starWarsPage}`} exact component={StarWars} />
            <Route path={`/${contactPage}`} exact component={Contact} />
            <Route component={ErrorPage} />
        </Switch>
    );
};

export default Main;
