import './App.css';
import HeroSection from './assets/Components/HeroSection';
import AboutSection from './assets/Components/AboutSection';
import ServicesSection from './assets/Components/ServicesSection';
import CalloutSection from './assets/Components/CalloutSection';
import PortfolioSection from './assets/Components/PortfolioSection';
import ActionSection from './assets/Components/ActionSection';
import Map from './assets/Components/Map';
import Footer from './assets/Components/Footer';

function App() {
  return (
    <>
      {/* hero */}
      <HeroSection/>
      {/* about */}
      <AboutSection/>
      {/* services */}
      <ServicesSection/>
      {/* callout */}
      <CalloutSection/>
      {/* portfolio */}
      <PortfolioSection/>
      {/* call to action */}
      <ActionSection/>
      {/* map */}
      <Map/>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default App
