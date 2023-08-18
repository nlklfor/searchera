import Header from "./components/Header/Header";
import './App.scss';
import Demo from "./components/Demo/Demo";
import Sponsors from "./components/Sponsors/Sponsors";
import Possibilieties from "./components/Possibilities/Possibilities";

function App() {
    return (
        <div className="App">
            <Header/>
            <Demo/>
            <Sponsors />
            <Possibilieties />
        </div>
    );
}

export default App;
