import React, { Component }  from 'react'
import Show from './Show';
import Show2 from './Show2';
import Show3 from './Show3';
import Show4 from './Show4';

class Showbuttons extends Component {

    constructor() {
        super()
        this.state = {
            message: "Test"

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

    render () {
    return(

        <div>
      <div id="show1wrap">
      <button id="show1" type="button" onClick={this.changemessage1}>
                     Inventory Cost Calculator
     </button>
     </div>
     <div id="show2wrap">
     <button id="show2" type="button" onClick={this.changemessage2}> 
                     Who Is Human?
     </button>
     </div>
     <div id="show3wrap">
     <button id="show3" type="button" onClick={this.changemessage3}>
                     RPG
     </button>
     </div>
     <div id='show4wrap'>
     <button id="show4" type="button" onClick={this.changemessage4}>
                     Discord Bot
     </button>
     </div>   
     </div>
        )
    }
}

export default Showbuttons