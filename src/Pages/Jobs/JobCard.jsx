import "./Jobs.css";
import jobImg from "../../Assest/image.png";
import { Link, useNavigate } from "react-router-dom";

const JobCard = (props) => {
  const navigate = useNavigate();
  const data = props.data;

  const handleNavigate = () => {
    navigate("/opportunity", { state: data });
  };

  return (
    <div className="col-md-4 mb-3" onClick={handleNavigate}>
      <Link
        to=""
        className="recent-work card border-0 shadow-lg overflow-hidden"
      >
        {}
        <img className="recent-work-img card-img" src={jobImg} alt="" />
        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
          <div className="recent-work-content text-start mb-3 ml-3 text-dark">
            <h3 className="card-title light-300">
              <div>{props.name}</div>
              <div className=" light-100 card-subtitle ">
                {props.data.organizationFullName}
              </div>
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
