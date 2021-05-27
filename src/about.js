import React, { Component }  from 'react'
import headshot from './headshot.jpg'
import flask from './flask.png'
import reactpic from './reactpic.png'
import python from './python.png'
import trinity from './trinity.png'
import postgresql from './postgresql.png'

class About extends Component {
    render() {
      return  (  
      <div id="aboutpage">
          <div className="aboutbox">
      <p className="aboutblurb">Originally from Nova Scotia Canada where I graduated Dalhousie University with a Bachelor Of Arts, I am currenlty residing in Toronto
      where I completed Udemy's Zero To Mastery courses for both Python and Web Development.
      </p>
      <h4>Skillset</h4>
      <div className="aboutpics">
      <img id="flaskpic" src={flask}></img>
            <img id="trinity" src={trinity}></img>
            <img id="reactpic" src={reactpic}></img>
            <img id="python" src={python}></img>
            <img id="postgresql" src={postgresql}></img>
            <br></br>
            <img id="face" src={headshot}></img>
            </div>
      </div>
      </div>
    
    )
    }
  }

  export default About