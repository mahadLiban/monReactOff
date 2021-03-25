import React from 'react';
import Navigation from "../navigation/navigation"
class Header extends React.Component {
    currentPage ="J'ai capté"
    render() {
        let dateCourante = new Date()
        let tempsJavaScript = dateCourante.getTime()
        let tempsPHP = tempsJavaScript/1000
        return (
            <header className="App-header">
                <Navigation />
                {/* {this.currentPage} */}
                <p>
                    temps Java : {tempsJavaScript} mili
                </p>
                <p>
                    temps PHP : {tempsPHP} secondes
                </p>
                <p>
                    Date pour un humain : {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
                </p>
            </header>
        )
    }
}

export default Header;
