import './App.css';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import WorkFlow from './components/WorkFlow';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 justify-center items-center">
      <Hero />
      <Feature />
      <WorkFlow />
      <Pricing />
      </div>
    </>
  );
}

export default App;
