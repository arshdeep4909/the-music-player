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
  toggleSongHandler,
}) {
  return (
    <div className="library">
      <h2 onClick={() => audioRef.current.play()}>library</h2>
      <div>
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
            toggleSongHandler={toggleSongHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
