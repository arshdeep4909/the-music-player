import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  audioRef,
  setIsPlaying,
  playSongHandler,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2 onClick={() => audioRef.current.play()}>library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            songs={songs}
            setSongs={setSongs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            playSongHandler={playSongHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
