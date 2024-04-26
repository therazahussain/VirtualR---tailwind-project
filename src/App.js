import './App.css';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 justify-center items-center">
      <Hero />
      <Feature />
      </div>
    </>
  );
}

export default App;
