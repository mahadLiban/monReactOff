import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
           <div>
               {
                   this.props.format === "monH1jsp" &&
                   <h1>
                       Ceci est mon H1 avec mon props
                    </h1>
               }
               {
                   this.props.format === "monH2" &&
                   <h2>
                       Ceci est mon h2 qui confirme que j'ai compris
                   </h2>
               }
           </div>
        )
    }
}
