import "./watch.scss";
import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";

export const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video src="asdf" className="video" autoPlay  controls />
    </div>
  );
};
