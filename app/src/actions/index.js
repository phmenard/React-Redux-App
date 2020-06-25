import axios from "axios";

export const CHANGE_ARTIST = "CHANGE_ARTIST";

export const changeArtist = (artist) => {
    return {
        type: CHANGE_ARTIST,
        payload: artist
    };
};

export const getSongs = (artist) => dispatch => {
    dispatch({ type: "FETCHING_SONGS" });
    axios
      .get(`https://www.songsterr.com/a/ra/songs/byartists.json?artists=${artist}`)
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCHING_SONG_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
}
