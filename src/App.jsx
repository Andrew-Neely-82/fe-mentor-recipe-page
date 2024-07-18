import omelette from "./assets/image-omelette.jpeg";
import Preparation from "./components/Preparation";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import Hero from "./components/Hero";
import "./App.scss";

function App() {
  return (
    <>
      <main className="card">
        <img src={omelette} alt="Cooked Omelette on a plate" />
        <Hero />
        <Preparation />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </main>
    </>
  );
}

export default App;
