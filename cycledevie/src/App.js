import React, { Component } from 'react'
import DisplayTime from './Components/DisplayTime/DisplayTime'

export default class App extends Component {
  render() {
    return (
      <div>
        <DisplayTime format ='jsTime'/>
        <DisplayTime format ='phpTime'/>
        <DisplayTime format ='humanTime'/>
        <DisplayTime format ="HrsHumain"/>
      </div>
    )
  }
}
