import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import Library from "./components/Library";
//Import Data
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[7]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songsInfo, setSongInfo] = useState({
    currentTime: "",
    duration: "",
  });

  //Event Handlers
  // updating the state as the song is playing
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songsInfo, currentTime: current, duration: duration });
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const toggleSongHandler = () => {
    setIsPlaying(isPlaying);
    audioRef.current.play();
  };

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
        setSongInfo={setSongInfo}
        songsInfo={songsInfo}
        audioRef={audioRef}
        playSongHandler={playSongHandler}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      >
        {" "}
      </audio>
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        toggleSongHandler={toggleSongHandler}
      />
    </div>
  );
}

export default App;
