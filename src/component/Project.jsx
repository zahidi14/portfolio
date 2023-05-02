import axios from "axios";
import { useEffect, useState } from "react";

const Project = () => {
  const [card, setCard] = useState([]);
  const [load, setLoad] = useState(true);
  const [curCard, setCurCard] = useState(1);
  const [totCard] = useState(6);

  const indexLast = curCard * totCard;
  const indexFirst = indexLast - totCard;
  const curRec = card.slice(indexFirst, indexLast);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/zahidi14/portfolio/project/")
      .then((response) => setCard(response.data))
      .catch((error) => console.error(error));
  }, []);
  console.log({ t: card.name });
  const List = () => {
    return card.map((list) => {
      return (
        <div
          className="col"
          key={list.id}
          style={{
            background: `url(${list.img}) no-repeat center `,
            backgroundSize: "cover",
          }}
        >
          <div className="hov-card fm">
            <div className="card-content">
              <h3>{list.name}</h3>
              <h4>{list.code}</h4>
              <p>{list.desc}</p>
              <a target="_blank" rel="noopener noreferrer" href="FeMentor/fm1/">
                Visit
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section id="project" className="project">
      <div className="container">
        <div className="header">
          <h2>Project</h2>
        </div>
        <div className="row">
          <div className="card-wrap">
            <List />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
