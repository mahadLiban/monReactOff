import React, { Component } from 'react'

export default class Header extends Component {

    currentPage ="heure"
    formarTime = "phpTime"
    onNavigationParent = (destination)=>{
        this.currentPage = destination;
        console.log(this.currentPage);
    }
    handleClick = (format)=>{
        console.log(format);
        this.formatTime = format;
    }

    render() {
        return (
            <header>
                {this.currentPage == "heure" && 
                    <div>
                        
                        <button onClick={()=> this.handleClick("jsTime")}>JavaScript</button>
                        <button onClick={()=> this.handleClick("phpTime")}>PHP</button>
                        <button onClick={()=> this.handleClick("humainTime")}>Humain</button>
                    </div>
                }
            </header>
        )
    }
}
