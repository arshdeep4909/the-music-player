import React from "react";

function LibrarySong({ song, songs, setSongs, currentSong, setCurrentSong }) {
  //Event Handlers
  const songSelecteHandler = () => {
    setCurrentSong(song);

    //ADD active stage
    const newSongs = songs.map((element) => {
      if (element.id === song.id) {
        return {
          ...element,
          active: true,
        };
      } else {
        return {
          ...element,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  return (
    <div
      onClick={songSelecteHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
      // if the song is active then add className selected
    >
      <img src={song.cover} alt="album-cover" />
      <div className="song-description">
        <h3 className="song-name">{song.name}</h3>
        <h4 className="song-artist">{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
