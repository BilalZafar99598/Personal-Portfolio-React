import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-20">
        <Home/>
        <About/>
      </div>
    </div>
  )
}

export default App
