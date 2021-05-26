import React, { Component } from 'react'
import bg3 from './bg3.jpeg'
import './show.css'


class Show3 extends Component {

    constructor() {
        super()
        this.state = {
            message: ''

        }
    } 

    render() {
        return ( 
            <div class="show">
            <img id="bg3" src={bg3}></img>
            <div class="showbox">
            <h2>Arena Online</h2>
            <p>A browser based game incorporating animated sprites and character progression.</p>
            </div>
            <button className="exbtn">
                <a href="https://github.com/Kapitolos/ArenaOnline" id="gitlink" type="button" class="btn btn-primary" target="_blank">GitHub</a>
                </button>
                <h3 className="langlist">Flask/Python/PostgreSQL/HTML/CSS/JS</h3>
            </div>
        )
    }
}

export default Show3