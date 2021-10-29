import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

export const Featured = ({ type }: any) => {
  const [content, setContent] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzlmOGM0MWQ3OGYxYWFiYmQzN2M0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ0ODI0NSwiZXhwIjoxNjM1NzA3NDQ1fQ.cVwe-Qwybvwl6yogBChcttaP0t5dRQbOtd4I2Vb8lqY",
          },
        });
        setContent(res.data[0]);
        setIsLoading(false);
        console.log(content)
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      {!isLoading ? (
        <>
          <img width="100%" src={content.img} alt="" />
          <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="desc">{content.desc}</span>

            <div className="buttons">
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
              <button className="more">
                <InfoOutlined />
                <span>Info</span>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
