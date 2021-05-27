import React, { Component }  from 'react'
import flask from './flask.png'
import reactpic from './reactpic.png'
import python from './python.png'
import trinity from './trinity.png'
import postgresql from './postgresql.png'

class Intro extends Component {
    render() {
        return  (  
            <div>
            <div className="intro">
            <div className="intropics">
            <img id="flaskpicintro" src={flask}></img>
            <img id="trinityintro" src={trinity}></img>
            <img id="reactpicintro" src={reactpic}></img>
            <img id="pythonintro" src={python}></img>
            <img id="postgresqlintro" src={postgresql}></img>
            </div>
            </div>
            </div>
        )
    }
}

export default Intro