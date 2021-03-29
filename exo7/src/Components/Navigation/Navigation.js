import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'

export default class Navigation extends Component {
    auClick = ()=>{
        console.log('je clique une fois')
    }
    auSurvole = ()=>{
        console.log('je survole');
    }
    dblClick = ()=>{
        console.log("dbl survole");
    }
    render() {
        return (
            <div>
                <nav className="mahad">
                    <ul >
                        <li><button onClick={()=>this.auClick()} className="text-white p-2 m-3">Link 1</button></li>
                        <li><button onMouseOver={()=>this.auSurvole()} className="text-white p-2" >Link 2</button></li>
                        <li><button onDoubleClick={()=>this.dblClick()} className="text-white p-2" >Link 3</button></li>
                    </ul>
                    <SearchBar/>
                </nav>
            </div>
        )
    }
}
