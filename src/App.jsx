import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Carrossel from "./components/Carrossel"
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"
import Nav from "./components/Nav"

function App() {

  return (
    <main className="bg-gray-600">
      <Nav/>
      <Banner/>
      <Carrossel/>
      <Cards/>
      <Formulario/>
      <Footer/>
    </main>
  )
}

export default App
