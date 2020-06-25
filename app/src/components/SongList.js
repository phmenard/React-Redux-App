import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions";
import Song from "./Song";

import '../css/index.css';

const SongList = props => {
    console.log("props in songlist", props);
  useEffect(() => {
    // run action creator when the component mounts
    props.getSongs(props.artist);
    console.log(props.artist);
  }, [props.artist] );

  if (props.isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="slContainer">
        <h4>Song List for {props.artist} </h4>
    <div className="songList">
      
      {props.songs.length >= 1 ? (
        <>
          {props.songs.map((song, i) => (
            <Song key={i} song={song} artist={props.artist}/>
          ))}
        </>
      ) : (
        <p>Nothing to see here.</p>
      )}
    </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    artist: state.artist,  
    songs: state.songs,
    isLoading: state.isLoading,
    error: state.error
  };
};

const mapDispatchToProps = { getSongs  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);