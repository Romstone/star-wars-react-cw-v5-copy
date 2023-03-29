
import React, {Component} from 'react';
import styles from './contact.module.css';
import {baseUrl, period} from "../utils/constants";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {

        let planets = JSON.parse(localStorage.getItem('planets'));
        if(!planets || (Date.now()-planets.time) > period){
            fetch(`${baseUrl}planets`)
                .then(response => response.json())
                .then(data => data.map(item => item.name))
                .then(planetsList => {

                    this.setState({planets: planetsList});
                    let info = {
                        planetsList: planetsList,
                        time: Date.now()
                    }
                    localStorage.setItem('planets',JSON.stringify(info));
                })
                .catch(e => console.log(e.message))
        }else this.setState({planets: planets.planetsList});
    }

    render() {
        return (
            <div className={`${styles.container} m-2`}>
                {(this.state.planets)&&
                    <form>

                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                        <label htmlFor="planet">Country</label>
                        <select id="planet" name="planet">
                            {this.state.planets.map((item, index) =>
                                <option value={item} key={index}>{item}</option>
                            )}
                        </select>

                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."/>

                        <input type="submit" value="Submit"/>

                    </form>}
            </div>
        );
    }
}

export default Contact;
