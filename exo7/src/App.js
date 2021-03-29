import Header from './Components/Header/Header.js'
import Navigation from './Components/Navigation/Navigation.js'
import Article from "./Components/Article/Article"
import Body from "./Components/Body/Body.js"
import Footer from "./Components/Footer/Footer.js"
import "bootstrap/dist/js/bootstrap"

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Body />
      <Footer />
     
    </div>
  );
}

export default App;
