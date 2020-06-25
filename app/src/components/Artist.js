import React, { useState } from "react";
import { connect } from "react-redux";
import { changeArtist } from "../actions";
import SongList from "./SongList";

const Artist = (props) => {
  const [newArtistText, setNewArtistText] = useState("");
 
  const handleChanges = e => {
    setNewArtistText(e.target.value);
  };

  return (
    <div>
      
          <input
            className="title-input"
            type="text"
            name="newArtist"
            value={newArtistText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
               props.changeArtist(newArtistText);
            }}
          >
            Update artist
          </button>

          <div>
              {props.artist ? <SongList /> : ""}
          </div>
        
    </div>
  );
};

const mapStateToProps = state => {
  return { 
      artist: state.artist,
      songs: state.songs,
      isLoading: state.isLoading
    };
};

const mapDispatchToProps = { changeArtist };

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
