import React, { Component } from 'react'

export default class article extends Component {
    render() {
        return (
            <div>
                <p className="text-center">Ici il y a {this.props.leProduits}, il coute {this.props.price} <button onClick={(e)=>this.props.rendre(e)} className="btn btn-danger"> Rendre </button> </p>
            </div>
        )
    }
}
