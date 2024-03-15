import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-20">
        <Home/>
        <About/>
        <Services/>
      </div>
    </div>
  )
}

export default App
