export const CHANGE_ARTIST = "CHANGE_ARTIST";

export const changeArtist = (song) => {
    return {
        type: CHANGE_ARTIST,
        payload: {
            artist: song.artist,
            id: song.id,
            title: song.title
                        
        }
    };

    export const getSongs = (artist) => dispatch => {
        dispatch({ type: "FETCHING_SONGS" });
        axios
          .get(`https://www.songsterr.com/a/ra/songs.json?pattern=${artist}`)
          .then(res => {
            console.log(res);
            dispatch({ type: "FETCHING_SONG_SUCCESS", payload: res });
          })
          .catch(err => {
            console.log(err);
          });

    
};