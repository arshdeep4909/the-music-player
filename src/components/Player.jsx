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
  SetCurrentSong,
  isPlaying,
  setIsPlaying,
}) {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songsInfo, setSongInfo] = useState({
    currentTime: "",
    duration: "",
  });
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex(
      (element) => element.id === currentSong.id
    );

    if (direction === "skip-forward") {
      await SetCurrentSong(songs[(currentIndex + 1) % songs.length]); // this means
      // that once it reaches the songs length set index back to 0
      if (isPlaying) {
        audioRef.current.play();
      }
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await SetCurrentSong(songs[songs.length - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }
      } else {
        await SetCurrentSong(songs[currentIndex - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }
      }
    }
  };
  // updating the state as the song is playing
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songsInfo, currentTime: current, duration: duration });
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
        <input
          min={0}
          max={songsInfo.duration || 0}
          value={songsInfo.currentTime}
          onChange={dragHandler}
          type="range"
          className="track"
        />
        <p>{getTime(songsInfo.duration)}</p>
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
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      >
        {" "}
      </audio>
    </div>
  );
}

export default Player;
