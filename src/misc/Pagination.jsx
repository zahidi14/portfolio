import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ nPages, curCard, setCurCard }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const next = () => {
    console.log("aman");
    if (curCard !== nPages) setCurCard(curCard + 1);
  };
  const prev = () => {
    console.log("disni aman");
    if (curCard !== 1) setCurCard(curCard - 1);
  };

  //   const Bootstrap = () => {
  //     return (
  //       <nav>
  //         <ul className="pagination justify-content-center">
  //           <li className="page-item">
  //             <button className="page-link" onClick={prev} href='"#"'>
  //               <FontAwesomeIcon icon={faCircleChevronLeft} />
  //             </button>
  //           </li>
  //           {pageNumbers.map((pgNumber) => (
  //             <li
  //               key={pgNumber}
  //               className={`page-item ${curCard === pgNumber ? "active" : ""} `}
  //             >
  //               <button
  //                 onClick={() => setCurCard(pgNumber)}
  //                 className="page-link"
  //                 href='"#"'
  //               >
  //                 {pgNumber}
  //               </button>
  //             </li>
  //           ))}
  //           <li className="page-item">
  //             <button className="page-link" onClick={next} href='"#"'>
  //               <FontAwesomeIcon icon={faCircleChevronRight} />
  //             </button>
  //           </li>
  //         </ul>
  //       </nav>
  //     );
  //   };

  const SimpleFlex = () => {
    return (
      <div>
        <div> currentPage : {curCard} </div>

        <div className="paginate-ctn">
          <div className="round-effect" onClick={prev}>
            {" "}
            &lsaquo;{" "}
          </div>

          <div className="round-effect" onClick={next}>
            {" "}
            &rsaquo;{" "}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-container">
      <SimpleFlex />
    </div>
  );
};

export default Pagination;
