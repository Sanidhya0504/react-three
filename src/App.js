import "./App.css";
import Navigation from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SphereComp from "./components/sphere";

function App() {
  return (
    <div>
      <Navigation />
      <SphereComp />
    </div>
  );
}

export default App;
