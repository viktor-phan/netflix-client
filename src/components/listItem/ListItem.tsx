import "./listItem.scss";

import React, { useEffect, useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export const ListItem = ({ index, item }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState<any>({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzlmOGM0MWQ3OGYxYWFiYmQzN2M0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ0ODI0NSwiZXhwIjoxNjM1NzA3NDQ1fQ.cVwe-Qwybvwl6yogBChcttaP0t5dRQbOtd4I2Vb8lqY",
          },
        });
        setMovie(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch", state: { movie: movie } }}>
      <div
        className="listItem"
        style={{ left: (isHovered as any) && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            {/* trailer */}
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}+</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
