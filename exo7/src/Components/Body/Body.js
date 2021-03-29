import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation.js'
import Article from "../Article/Article.js"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "bootstrap/dist/js/bootstrap"
export default class Body extends Component {

    nombreArticles=3

    mesArticles=(e)=>{
        console.log(e);
    }


    render() {
        if (this.nombreArticles<2) {
            return(
                <div>
                    <h1 className="monH1Body">Pas assez fratte</h1>
                    <Article titre={(r)=> this.mesArticles(r)}/> 
                </div>
                )
        } else {
            return (
                <div>
                    <Header />
                    <Article titre={(r)=> this.mesArticles(r)}/> 

             </div>
                )}}
        
         
            }