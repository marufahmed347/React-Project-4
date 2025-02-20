import './App.css'
import { Hero } from './components/home/Hero';
import { ProblemSolution } from './components/home/ProblemSolution';
import { Reviews } from './components/home/Reviews';
import { Footer } from './components/share/Footer';
import { Navbar } from './components/share/Navbar';

function App() {

  return (
    <>
      <main className="font-nunito-sans bg-[url('hero-bg.png')] min-h-svh bg-no-repeat bg-top ">
        <Navbar/>
        <Hero/>
        <ProblemSolution/>
        <Reviews/>
        <Footer/>
        
      </main>
    </>
  )
}

export default App;
