import React from "react";

function LibrarySong({
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  audioRef,
  setIsPlaying,
}) {
  //Event Handlers
  // const playSongHandler = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //     setIsPlaying(!isPlaying);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  const songSelecteHandler = async () => {
    await setCurrentSong(song);
    libraryPlaySongHandler();

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

  const libraryPlaySongHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    } else if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
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
