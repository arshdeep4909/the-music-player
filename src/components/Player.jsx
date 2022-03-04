import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
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

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex(
      (element) => element.id === currentSong.id
    );

    if (direction === "skip-forward") {
      console.log(currentIndex);
      SetCurrentSong(songs[(currentIndex + 1) % songs.length]); // this means
      // that once it reaches the songs length set index back to 0
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        console.log(currentIndex);
        SetCurrentSong(songs[songs.length - 1]);
      } else {
        console.log(currentIndex);
        SetCurrentSong(songs[currentIndex - 1]);
      }
    }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" className="track" />
        <p>End Time</p>
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
          icon={faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}>
        {" "}
      </audio>
    </div>
  );
}

export default Player;
