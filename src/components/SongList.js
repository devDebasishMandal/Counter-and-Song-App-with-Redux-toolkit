import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectedSong } from '../redux/features/song/songSlice';
import songList from '../data/songlist';


const SongList =()=>{


 const dispatch= useDispatch();


    return (
      <div>
        <h1>Song List</h1>
        <ul>
          {songList.map((song) => (
            <li onClick={()=>dispatch(selectedSong(song))} key={song.id} style={{listStyle:'none'}}>
              <h3>{song.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
}



export default SongList;