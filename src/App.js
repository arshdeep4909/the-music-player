import React, { useState } from "react";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import Library from "./components/Library";
//Import Data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[7]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Nav />
      <Song songs={songs} currentSong={currentSong} />
      <Player
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
