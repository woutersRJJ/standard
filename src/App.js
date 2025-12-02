import './App.css';
import './services/firestore'
import {Banner} from "./components/Banner";
import {Legends} from "./components/Legends";

function App() {
  return (
    <div className="App">
        <Banner/>
        <Legends />
    </div>
  );
}

export default App;
