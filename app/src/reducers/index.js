const initialState = {
    artist: '',
    songs: [],
    isLoading: false,
    error: ""
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case "CHANGE_ARTIST":
            
            return {
                ...state,
                artist: action.payload,
                songs: [],
                isLoading: true,
                error: ""
                
            }
            
        case "LOADING_ARTIST":
            return {
                ...state,
                isLoading: true
            }

        case "FETCHING_SONG_SUCCESS":
            console.log(action.payload)
            return {
                ...state,
                artist: state.artist,
                songs: [...state.songs, ...action.payload],
                isLoading: false,
                error: ""
                
            }     

        default:
            return state;
            


    }

    
}

export default appReducer;