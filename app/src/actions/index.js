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

    
};