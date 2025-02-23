import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProduct from './components/FeaturedProduct';
import BestSeller from './components/BestSeller';

function App() {
  return(
    <div>
      <Header />
      <Hero />
      <BestSeller />
      <FeaturedProduct />
    </div>
  )
}

export default App
