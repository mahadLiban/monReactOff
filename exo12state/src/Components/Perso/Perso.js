import React, { Component } from 'react'

export default class Perso extends Component {
    render() {
        return (
            <div>
                <p>
                    Moi c'est {this.props.nom},{this.props.prenom},{this.props.age}
                </p>
            </div>
        )
    }
}
