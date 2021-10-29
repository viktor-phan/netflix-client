import "./watch.scss";
import React from "react";
import { withRouter } from "react-router";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location: any = useLocation();
  console.log(location);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        src={location.state.movie.video}
        className="video"
        autoPlay
        controls
      />
    </div>
  );
};
export default Watch;
