import React, { Component } from 'react'
import DisplayTime from "./displayTime/DisplayTime"
export default class App extends Component {
    state = {
        tabl : ["j'essaye","un","truc","pour","voir"]

    }
    laLong = ()=>{
       let long = this.state.tabl.length 
       console.log(long);
       return ("long")

    }
    removeEl = ()=>{
        

        let newLong=[...this.state.tabl]

        newLong.pop()
        this.setState({
            tabl : newLong
        })
        setTimeout(() => {
            if (this.state.tabl.length===1) {
            document.querySelector('body').style.backgroundColor = "orange"
            

        }  else if (this.state.tabl.length===0) {
            document.querySelector('body').style.backgroundColor = "red"

        }
        }, 0);
       
        
    }

    render() {
        return (
            <div>
                <p>
                    <button  onClick ={()=>this.laLong()}>la longueur du bouton frrr</button>
                    <button> {this.state.tabl.length} </button>
                    <button onClick={()=> this.removeEl()}> essaye </button>
                </p>
                <DisplayTime format ='jsTime'/>
                <DisplayTime format ='phpTime'/>
                <DisplayTime format ='humanTime'/>

            </div>
        )
    }
}

