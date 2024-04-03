import React from "react";
import { useSelector } from "react-redux";

const SongDisplay = () => {
  const song = useSelector((state) => state.song);
  return (
    <div>
      {song && (
        <div>
          <h1>{song.title}</h1>
          <h4>{song.artist}</h4>
          <h4>{song.genre}</h4>
          <h4>{song.release_year}</h4>
        </div>
      )}
    </div>
  );
};

export default SongDisplay;
