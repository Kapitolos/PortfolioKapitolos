import React, { Component } from 'react'
import './show.css'
import bg1 from './bg1.jpeg'

class Show extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: ''

        }
    } 

    render() {
        return (
            <div className="show">
            <img id="bg1" src={bg1}></img>
            <div class="showbox">
            <h2>Inventory Cost Calculator For Skincare Company</h2>
            <p>This inventory is for my fiances skincare company. It utilizes object oriented programming to track each ingredient by its cost and ratio as it pertains to each product to provide the total cost to make of any order.</p>
            </div>
            <button className="exbtn" id="exbtn1">
            <a href="https://beesbutterinventory.herokuapp.com/" id="weblink" type="button" class="btn btn-primary" target="_blank">Website</a>
            </button>
            <button className="exbtn" id="exbtn2">
            <a href="https://github.com/Kapitolos/beesbutterinventory" id="gitlink" type="button" class="btn btn-primary" target="_blank">GitHub</a>
            </button>
            <h3 className="langlist">Flask/Python/HTML/CSS/JS</h3>
            </div>
        )
    }
}

export default Show