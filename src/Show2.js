import React, { Component } from 'react'
import bg2 from './bg2.jpeg'
import './show.css'


class Show2 extends Component {

    constructor() {
        super()
        this.state = {
            message: ''

        }
    } 

    render() {
        return (
            <div class="show">
            <img id="bg2" src={bg2}></img>
            <div class="showbox">
            <h2>Who Is Human?</h2>
            <p>Utilizing several API's to request and generate nine faces, names and occupations with only one actual human in their midst to be chosen for logged in users to add a point to their total score.</p>
            </div>
            <button className="exbtn" id="exbtn1">
                <a href="https://whoishuman.herokuapp.com/" target="_blank">Website</a>
            </button>
            <button className="exbtn" id="exbtn2">
            <a href="https://github.com/Kapitolos/WhoIsHuman.git" id="gitlink" type="button" class="btn btn-primary" target="_blank">GitHub</a>
            </button>
            <h3 className="langlist">Flask/Python/PostgreSQL/HTML/CSS/JS</h3>
            </div>
        )
    }
}

export default Show2