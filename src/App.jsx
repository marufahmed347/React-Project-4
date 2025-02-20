import './App.css'
import { Hero } from './components/home/Hero';
import { Footer } from './components/share/Footer';
import { Navbar } from './components/share/Navbar';

function App() {

  return (
    <>
      <main className="font-nunito-sans bg-[url('hero-bg.png')] min-h-svh bg-no-repeat bg-top ">
        <Navbar/>
        <Hero/>
        <Footer/>
      </main>
    </>
  )
}

export default App;
