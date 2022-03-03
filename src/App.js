import React from "react";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Song />
      <Player />
    </div>
  );
}

export default App;
