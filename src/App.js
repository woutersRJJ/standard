import './App.css';
import './services/firestore'
import {Banner} from "./components/Banner";
import {Legends} from "./components/Legends";
import {Players} from "./components/Players";

function App() {
  return (
    <div className="App">
        <Banner/>
        <Legends />
        <Players />
    </div>
  );
}

export default App;
