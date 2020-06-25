import React, { useEffect } from "react";
import axios from "axios";

import '../css/index.css';

const Song = props => {
 console.log("props in song", props);

 const headers = {
    Accept: "Application/json",
    api_key: "6d8508ce78e8606a331a19fb8e03392a7d19e4ac3f98e00d7a14beebf3178d2e"
  };

 useEffect(() => {
    axios
    .get(`https://serpapi.com/search?q=${props.artist} ${props.song.title}&ijn=0&tbm=isch`, {headers})
    .then(res => {
      console.log(res);
      
    })
    .catch(err => {
      console.log(err);
    });
  }, [props.artist]);
 
  return (
    <div className="song">
      <h3>{props.song.title} </h3>
      
    </div>
  );
};


export default Song;