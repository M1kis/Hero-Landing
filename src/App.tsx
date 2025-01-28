import About from './components/About'
import ContactForm from './components/ContactForm'
import Entities from './components/Entities'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Motos from './components/Motos'
import Services from './components/Services'
import Whatsapp from './components/Whatsapp'

function App() {

  return (
    <div className='bg-base-200 min-h-screen'>
      <Header />
      <Hero />
      <Motos />
      <About/>
      <Entities/>
      <Services/>
      <ContactForm/>
      <Footer/>
      <Whatsapp/>
    </div>
  )
}

export default App
