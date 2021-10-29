import { AcUnit } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Featured } from "../../components/featured/Featured";
import { List } from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import "./home.scss";
const Home = ({ type }: any) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzlmOGM0MWQ3OGYxYWFiYmQzN2M0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ0ODI0NSwiZXhwIjoxNjM1NzA3NDQ1fQ.cVwe-Qwybvwl6yogBChcttaP0t5dRQbOtd4I2Vb8lqY",
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => {
        return <List list={list} />;
      })}
    </div>
  );
};
export default Home;
