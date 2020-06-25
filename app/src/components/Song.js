import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions";

const Song = props => {
 console.log("props in song", props);
 return (
    <>
      <h1>{props.song.title} </h1>
      
    </>
  );
};

/*const mapStateToProps = state => {
  return {
    artist: state.artist,  
    songs: state.songs,
    isLoading: state.isLoading,
    error: state.error
  };
};*/

//const mapDispatchToProps = { getSongs  };

/*export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);*/

export default Song;