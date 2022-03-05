import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs }) {
  return (
    <div className="library">
      <h2>library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
}

export default Library;
