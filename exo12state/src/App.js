import React, { Component } from 'react'
import Perso from "./Components/Perso/Perso"
export default class App extends Component {
  state = {
    personnage : [
      {
        nom: "Arthure",
        prenom : "Snow",
        age : "25ans",

      },
      {
        nom: "azer",
        prenom : "royal",
        age : "21ans",

      },
      {
        nom: "elodie",
        prenom : "Marine",
        age : "5ans",

      }
    ]
  }
  changerNom=()=>{
    let mesPersos = [...this.state.personnage]
    mesPersos[0].prenom = "Said"
    mesPersos[0].nom = "Antoine"
    mesPersos[0].age ="34ans"

    mesPersos[1].prenom = "Iop"
    mesPersos[1].nom = "feu"
    mesPersos[1].age ="31ans"

    mesPersos[2].prenom = "Eca"
    mesPersos[2].nom = "terre"
    mesPersos[2].age ="24ans"
    this.setState({
      personnage: mesPersos
    })
  }
  render() {
    return (
      <div> 
        <Perso 
          nom={this.state.personnage[0].nom}
          prenom={this.state.personnage[0].prenom}
          age = {this.state.personnage[0].age}
        />
        <Perso 
          nom={this.state.personnage[1].nom}
          prenom={this.state.personnage[1].prenom}
          age = {this.state.personnage[1].age}
        />
        <Perso 
          nom={this.state.personnage[2].nom}
          prenom={this.state.personnage[2].prenom}
          age = {this.state.personnage[2].age}
        />
        <button onClick={()=>{this.changerNom()}}>Change Name</button>

      </div>
    )
  }
}
