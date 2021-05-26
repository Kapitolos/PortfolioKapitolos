import React, { Component }  from 'react'
import git from './git.png'
import link from './link.png'


class Header extends Component {

    constructor(props) {
        super(props)
        this.myRef2 = React.createRef();
    
        }
    


    headermove = () => {
        const header = this.myRef2.current
        header.classList.toggle("header");
      }

    render() {
      return  (  

       <div> 
      {/* <button className="headerbutton" onClick={this.headermove}>Header Move</button> */}
 
      <div className="header" ref={this.myRef2}>
      <h1>THOMAS GIBSON</h1>
      <h2>Junior Full Stack Web Developer</h2>
      <div id="headericons">
      <a href="https://github.com/Kapitolos/">
          <img src={git}  className="git"></img>
      </a>
      <a href="https://www.linkedin.com/in/thomas-gibson-5b10261b7/">
          <img src={link}  className="link"></img>
      </a>
      </div>
    </div>
    </div>
      
      );
    }
    }
    
    export default Header;