import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Dictionary defaultKeyword="mystery" />{" "}
      </main>
      <footer>
        Coded by{" "}
        <a href="https://github.com/RRachelvd" target="_blank" rel="noreferrer">
          Rachèl van Dijkhorst
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/RRachelvd/dictionary-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>
        and hosted on{" "}
        <a
          href="https://dictionary-inspiration.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
