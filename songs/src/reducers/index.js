import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "I want it that way", duration: "2:33" },
    { title: "fly", duration: "3:15" },
    { title: "drive alone", duration: "4:22" }
  ];
};

const selectedSongReducer = (seletedSong = null, action) => {
  if (action.type === "SONG_SLECTED") {
    return action.payload;
  }
  return seletedSong;
};


export default combineReducers({
  songs:songsReducer,
  seletedSong:selectedSongReducer
})

