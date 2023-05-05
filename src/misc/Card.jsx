const Card = ({ card }) => {
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
            <a target="_blank" rel="noopener noreferrer" href={list.link}>
              Visit
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
