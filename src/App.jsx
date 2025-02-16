import './App.css'
import { Footer } from './components/share/Footer';
import { Navbar } from './components/share/Navbar';

function App() {

  return (
    <>
      <main className="font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top ">
        <Navbar/>
        <Footer/>
      </main>
    </>
  )
}

export default App;
