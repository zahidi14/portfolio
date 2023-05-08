import axios from "axios";
import { useEffect, useState } from "react";
import backgr from "../asset/ProjectBack.svg";
import Card from "../misc/Card";
import Pagination from "../misc/Pagination";

const Project = () => {
  const [card, setCard] = useState([]);
  // const [load, setLoad] = useState(true);
  const [curCard, setCurCard] = useState(1);
  const [totCard] = useState(6);

  const indexLast = curCard * totCard;
  const indexFirst = indexLast - totCard;
  const curRec = card.slice(indexFirst, indexLast);

  const nPages = Math.ceil(card.length / totCard);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/zahidi14/portfolio/project/")
      .then((response) => setCard(response.data))

      .catch((error) => console.error(error));
  }, []);
  console.log({ t: card.name });

  return (
    <section
      id="project"
      style={{
        background: `url(${backgr}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="header">
          <h1>Project</h1>
        </div>
        <div className="row">
          <div className="card-wrap">
            <Card card={curRec} />
          </div>
        </div>
        <div className="row">
          <Pagination
            nPages={nPages}
            curCard={curCard}
            setCurCard={setCurCard}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
