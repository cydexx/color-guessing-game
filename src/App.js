import Footer from "./components/Footer";
import Game from "./components/Game";
import GameModeBar from "./components/GameModeBar";
import Header from "./components/Header";
import "./css/main.css";
function App() {
  return (
    <div className="App">
      <Header />
      <GameModeBar />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
