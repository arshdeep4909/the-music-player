import React, { useState } from "react";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
//Import Data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, SetCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Nav />
      <Song songs={songs} currentSong={currentSong} />
      <Player
        songs={songs}
        SetCurrentSong={SetCurrentSong}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
