import React, { Component } from 'react'

export default class Article extends Component {

    banane = 2
    render() {
        return (
        
            <div className='container m-5 mahad1'>
                <div className="row">
                    <div className="col-6 mb-5">
                    <img src="./img/laTartine.png" alt=""/>
                    </div>
                    <div className="col-6">
                        <h4 className="text-success">Mon premier article</h4>
                        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta accusamus veniam aliquam ex a at laborum minima voluptas. Harum beatae cupiditate suscipit quasi magni velit ipsam provident est, ad nostrum culpa, in optio numquam asperiores!</p>
                        <button onClick={()=>this.props.titre(this.banane)}>bouton</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ">
                    <img src="./img/laTartine.png" alt=""/>
                    </div>
                    <div className="col-6">
                        <h4 className="text-success">Mon premier article</h4>
                        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta accusamus veniam aliquam ex a at laborum minima voluptas. Harum beatae cupiditate suscipit quasi magni velit ipsam provident est, ad nostrum culpa, in optio numquam asperiores!</p>
                        <button onClick={()=>this.props.titre(this.banane)}>bouton</button>
                    </div>
                </div>
            </div>
        )
    }
}
