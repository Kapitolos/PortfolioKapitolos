import React, { Component }  from 'react'
import link from './link.png'

class Contact extends Component {
  render() {
    return  (  
    <div id="contactinfo">
      <p>Contact Info</p>
      <div className='email'>
    <a className="emailbutton" href="mailto:thomasmgibson@gmail.com" target="_blank">
    <img src="https://img.icons8.com/ios-filled/50/000000/email-open.png"/></a>
    <br></br>
    <span>thomasmgibson@gmail.com</span>
    </div>
    <br></br>
    <a className="linkedininfo" href="https://www.linkedin.com/in/thomas-gibson-5b10261b7/">
      <img id="linkcontactpng" src={link}></img>
      <br></br>
      <span>Linkedin</span>
    </a>
    </div>
    
  
  )
  }
}

export default Contact