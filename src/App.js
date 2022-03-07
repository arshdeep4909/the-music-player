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
  const [libraryStatus, setLibraryStatus] = useState(false);

  //Event Handlers
  const playSongHandler = async () => {
    if (isPlaying) {
      await audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      await audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  // updating the state as the song is playing
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songsInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="app">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
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
        playSongHandler={playSongHandler}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
