import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions";
import Song from "./Song";

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
    <>
      <h4>Song List</h4>
      {props.songs.length >= 1 ? (
        <ol type="1">
          {props.songs.map(song => (
            <Song song={song} />
          ))}
        </ol>
      ) : (
        <p>Nothing to see here.</p>
      )}
    </>
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