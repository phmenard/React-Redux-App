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
    <div className="artist-container">
      
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
               setNewArtistText("");
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
      artist: state.artist      
    };
};

const mapDispatchToProps = { changeArtist };

export default connect(mapStateToProps,mapDispatchToProps)(Artist);
