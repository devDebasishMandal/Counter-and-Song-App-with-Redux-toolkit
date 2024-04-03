import "./App.css";
import Counter from "./components/Counter";
import SongDisplay from "./components/SongDsiplay";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <div
        style={{
          width: "1200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SongList />
        <SongDisplay />
      </div>
    </div>
  );
}

export default App;
