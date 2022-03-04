import React from "react";

function Song({ songs, currentSong }) {
  return (
    <div className="song-container">
      <h1 className="song-cover">
        <img src={currentSong.cover} alt="" />
      </h1>
      <h1 className="song-name">{currentSong.name}</h1>
      <h1 className="song-artist">{currentSong.artist}</h1>
    </div>
  );
}

export default Song;
