import "./App.scss";
import Instructions from "./components/instructions/Instructions";
import Nutrition from "./components/nutrition/Nutrition";

function App() {
  return (
    <>
      <main className="card">
        <Instructions />
        <Nutrition />
      </main>
    </>
  );
}

export default App;
