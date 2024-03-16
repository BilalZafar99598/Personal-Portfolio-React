import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-20">
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
