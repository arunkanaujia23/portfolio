import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components'
import Education from "./components/Education"
import Footer from "./components/Footer"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" >
          <Navbar />
        
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Education/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0" >
          <Contact/>
          <StarsCanvas/>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
