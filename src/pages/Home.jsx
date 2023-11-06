import './Home.css';
import Card from "../components/HintCard/HintCard.jsx";
import VirtualGallery from "../components/VirtualGallery/VirtualGallery.jsx";

const Home = () => { // Home component
  return (
      <>
          <section className="homeHero">
              <Card />
              <VirtualGallery />
          </section>
      </>
  );
}

export default Home; // Export Home component