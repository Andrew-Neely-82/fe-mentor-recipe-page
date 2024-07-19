import omelette from "./assets/image-omelette.jpeg";
import Hero from "./components/Hero";
import { recipePageData } from "./data/data,js";
import Preparation from "./components/Preparation";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import "./App.scss";

function App() {
  return (
    <>
      <main className="card">
        <img src={omelette} alt="Cooked Omelette on a plate" />
        <Hero data={recipePageData} />
        <Preparation data={recipePageData} />
        <Ingredients data={recipePageData} />
        <hr />
        <Instructions data={recipePageData} />
        <hr />
        <Nutrition data={recipePageData} />
      </main>
    </>
  );
}

export default App;
