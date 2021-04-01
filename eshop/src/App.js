import React, { Component } from 'react'
import Article from './components/Article'
export default class App extends Component {
  state = {
    argent : 20,
    panier : [],
    mesProduits : [
      {
        nom : "Coca",
        prix : 1,
        // stock :`Stock :  ${stocki} unités`,
        
        xy : "unités",
        stock : 5,
      },
      {
        nom : "Fanta",
        prix : 1.5,
        // stock :`Stock :  ${stocki} unités`,
        xy : "unités",
        stock : 5,
      },
      {
        nom : "Ice",
        prix : 2,
        // stock :`Stock :  ${stocki} unités`,
        stock : 5,
      },
      
    ],  
  }
  acheter = (i)=>{
    if (this.state.mesProduits[i].stock !== 0 && this.state.argent >= this.state.mesProduits[i].prix) {
      let x = this.state
      x.argent -= x.mesProduits[i].prix
      x.mesProduits[i].stock--
      x.panier.push(x.mesProduits[i])
      this.setState({x})

    }
  }
  rendre = (i)=>{
    let x = this.state;

    x.argent += x.panier[i].prix;
    x.mesProduits[x.mesProduits.indexOf(x.panier[i])].stock++
    x.panier.splice(i, 1)

    this.setState({x})
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3 className='text-danger text-center mb-5 mt-5'>Mon Argent : {this.state.argent} $</h3>
          <div className="d-flex">
          {
          this.state.mesProduits.map ((e,i)=>{
            return(
              <div key={i} className="card ms-5 border-5 border-success mb-5 text-center" style={{width: '18rem'}}>
              <img src="./img/RealPngLipton.png" className="card-img-top" alt="canFanta" />        
                <div className={e.stock===1? "bg-warning" : e.stock ===0 ?"bg-danger" : ""}>
                  <h5 className="card-title">{e.nom}</h5>
                  <p className="card-text">Prix : {e.prix} $</p>
                  <p className="card-text">{e.stock} </p>
                  <a onClick={()=>this.acheter(i)} className={`btn btn-success mb-3 ${e.stock===0 || this.state.argent<e.prix ? '' : '' }`}>{e.stock ===0 ? "rupture de stock" : " Acheter"}</a>
                  
                </div>
              </div>

              
            )
          })
        }
          </div>
        </div> 
        <h3 className="container text-center text-success">
          Panier : 
        </h3>
        {
          this.state.panier.map((e,i)=>{
            let eleArtcl= this.state.panier[i]
            return (
            <Article key={i} leProduits={eleArtcl.nom} rendre={()=>this.rendre(i)}/>
              )
          })
        }
        

      </div>
    )
  }
}


