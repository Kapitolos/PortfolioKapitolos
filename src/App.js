import './App.css';
import Tv from './tv';
import About from './about'
import Contact from './contact'
import Header from './header'
import Intro from './intro'
import React, { useState, useRef, useEffect, Component } from 'react';
import Particles from 'react-particles-js';



class App extends Component {  
  constructor() {
    super()
    this.myRef= React.createRef();
    // this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
    this.myRef4 = React.createRef();
    this.state = {
        message: "Empty Tv"

    }
} 

 showtv = () => {
  const tvwork = this.myRef.current
  tvwork.classList.toggle("tvshow");
  const tvabout = this.myRef3.current
  tvabout.classList.remove("aboutshow");
  const tvcontact = this.myRef4.current
  tvcontact.classList.remove("contactshow");
}

showabout = () => {
  const tvabout = this.myRef3.current
  tvabout.classList.toggle("aboutshow");
  const tvwork = this.myRef.current
  tvwork.classList.remove("tvshow");
  const tvcontact = this.myRef4.current
  tvcontact.classList.remove("contactshow");
}

showcontact = () => {
  const tvcontact = this.myRef4.current
  tvcontact.classList.toggle("contactshow");
  const tvabout = this.myRef3.current
  tvabout.classList.remove("aboutshow");
  const tvwork = this.myRef.current
  tvwork.classList.remove("tvshow");
}

  render() {
    return (
    <div id="AppWrapper">
                <Particles className="particles"
                params={{
                    polygon: {
                        enable: true,
                        color: '#9C0412',
                        blur: 5,
                        type: 'inside',
                    }
                }} />
      <Header/>
      <Intro/>
       <div id="buttons">         
      <button className="worksbutton" onClick={this.showtv}>Works</button>
      <button className="aboutbutton" onClick={this.showabout}>About</button>
      <button className="contactbutton" onClick={this.showcontact}>Contact</button>
        </div>
      
        <div id="tvshow" className="tvhide" ref={this.myRef}>
        <Tv/>
        </div>
        <div className="abouthide" ref={this.myRef3}>
        <About />
        </div>
        <div className="contacthide" ref={this.myRef4}>
          <Contact />
          </div>
         </div>
  );
}
}

export default App;
