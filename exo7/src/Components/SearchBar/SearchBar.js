import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="mySearch">
                <label className="text-white" htmlFor="type=text">Search : </label>
                <input type="text"/>
                <button>Ok</button>
            </div>
        )
    }
}
