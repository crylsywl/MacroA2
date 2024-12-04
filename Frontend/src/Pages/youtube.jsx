import React from "react";
import ReactPlayer from "react-player";

const YouTubeVideo = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <ReactPlayer
        url="https://youtu.be/kHk0FfG9Voc?si=cdrZaODHCiuU7RXH"
        controls
        width="560px"
        height="315px"
      />
    </div>
  );
};

export default YouTubeVideo;
