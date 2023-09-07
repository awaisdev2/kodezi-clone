import Nav from "./components/Nav";
import './App.css';
import Hero from "./components/Hero";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <div className="hero-section pb-32">
      <Nav />
      <Hero />
      </div>
      <Intro />
    </>
  );
}

export default App;
