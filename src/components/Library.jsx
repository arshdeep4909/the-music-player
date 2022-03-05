import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs, setSongs, currentSong, setCurrentSong }) {
  return (
    <div className="library">
      <h2>library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
