import React, { Component } from "react";
import {characters, defaultHero, friends, period} from "../utils/constants";

class AboutMe extends Component
{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount()
  {
      let key = this.props.match.params.hero;
      if (!characters.includes(key))
      {
          key = this.props.hero;
      }
      let hero = JSON.parse(localStorage.getItem(key));
      if (!hero || Date.now() - hero.time > period) {
          fetch(friends[key].url)
              .then((response) => response.json())
              .then((data) => {
                  this.setState({ hero: data });
                  let hero = {
                      heroInfo: data,
                      time: Date.now(),
                  };
              localStorage.setItem(key, JSON.stringify(hero));
            });
        } else this.setState({ hero: hero.heroInfo });
      this.props.changeHero(key);
  }

  render()
  {
      return this.state.hero ? (
          <div className={"m-2"}>
              <p>name: {this.state.hero.name}</p>
              <p>height: {this.state.hero.height}</p>
              <p>birth year: {this.state.hero.birth_year}</p>
              <p>gender: {this.state.hero.gender}</p>
              <p>mass: {this.state.hero.mass}</p>
              <p>hair color: {this.state.hero.hair_color}</p>
              <p>skin color: {this.state.hero.skin_color}</p>
              <p>eye color: {this.state.hero.eye_color}</p>
          </div>
      ) : (
          <p>WAIT A MOMENT....</p>
      );
  }
}

export default AboutMe;
