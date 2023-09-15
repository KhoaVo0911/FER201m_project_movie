import React, { Component } from "react";
import { Films } from "./ListOfFilm";
import PresentationFilms from "./PresentationFilms";

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: Films
        };
    }
    render () {
        return <PresentationFilms films={this.state.films}/>
    }
}

export default Main;