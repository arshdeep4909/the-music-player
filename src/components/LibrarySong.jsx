import React from "react";

function LibrarySong({ song }) {
  return (
    <div className="library-song">
      <img src={song.cover} alt="album-cover" />
      <div className="song-description">
        <h3 className="song-name">{song.name}</h3>
        <h4 className="song-artist">{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
