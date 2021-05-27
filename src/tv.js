import React, { Component }  from 'react'
import Show from './Show';
import Show2 from './Show2';
import Show3 from './Show3';
import Show4 from './Show4';
import Showstart from './showstart';
import './tv.css'


class Tv extends Component {

    constructor() {
        super()
        this.state = {
            message: <Showstart />

        }
    } 

    changemessage1 = () => {
        this.setState({message: <Show/>});
      }
    
      changemessage2 = () => {
        this.setState({message: <Show2/>});
      }
      changemessage3 = () => {
        this.setState({message: <Show3/>});
      }
      changemessage4 = () => {
        this.setState({message: <Show4/>});
      }

    render() {
        return (
            <div>
            <div id="tv">
            <h1 id="tvmessage">
                {this.state.message}
            </h1>
            </div>
            <div id="show1wrap">
     <button className="show1" type="button" onClick={this.changemessage1}>
                    Inventory Cost Calculator
    </button>
    </div>
    <div id="show2wrap">
    <button className="show2" type="button" onClick={this.changemessage2}> 
                    Who Is Human?
    </button>
    </div>
    <div id="show3wrap">
    <button className="show3" type="button" onClick={this.changemessage3}>
                    RPG
    </button>
    </div>
    <div id='show4wrap'>
    <button className="show4" type="button" onClick={this.changemessage4}>
                    Discord Bot
    </button>
    </div>  
    </div>
         
        )
    }
}

export default Tv