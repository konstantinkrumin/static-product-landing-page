import React from "react";

export default function IFrame(props) {
  return (
    <iframe
      id="video"
      title="video"
      src={props.video_src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
