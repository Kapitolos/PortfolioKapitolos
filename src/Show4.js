import React, { Component } from 'react'
import bg4 from './bg4.jpeg'
import './show.css'


class Show4 extends Component {

    constructor() {
        super()
        this.state = {
            message: ''

        }
    } 

    render() {
        return (
            <div class="show">
            <img id="bg4" src={bg4}></img>
            <div class="showbox">
            <h2>Discord Bot</h2>
            <p>A virtual grandmother that hates swearing, can tell you about the weather and suggest some great dinner recipe's too!</p>
            </div>
            <button className="exbtn">
            <a href="https://github.com/Kapitolos/Old-Ma-The-Discord-Bot" id="gitlink" type="button" class="btn btn-primary" target="_blank">GitHub</a>
            </button>
            <h3 className="langlist">Python</h3>
            </div>
        )
    }
}

export default Show4