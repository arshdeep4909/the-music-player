import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player({
  currentSong,
  songs,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songsInfo,
  playSongHandler,
  setSongs,
  activeSongHandler,
}) {
  //State

  //Event Handlers

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex(
      (element) => element.id === currentSong.id
    );

    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]); // this means
      // that once it reaches the songs length set index back to 0
      activeSongHandler(songs[(currentIndex + 1) % songs.length]);

      if (isPlaying) {
        await audioRef.current.play();
      }
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeSongHandler(songs[songs.length - 1]);
        if (isPlaying) {
          await audioRef.current.play();
        }
      } else {
        await setCurrentSong(songs[currentIndex - 1]);
        activeSongHandler(songs[currentIndex - 1]);
        await audioRef.current.play();
      }
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songsInfo, currentTime: e.target.value });
  };

  //formating seconds to minutes and seconds
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songsInfo.currentTime)}</p>
        <div className="track">
          <input
            min={0}
            max={songsInfo.duration || 0} //using OR operator to add default value to avoid errors
            value={songsInfo.currentTime}
            onChange={dragHandler} // everytime we drag the range bar this function runs
            type="range"
          />
        </div>

        <p>{songsInfo.duration ? getTime(songsInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
