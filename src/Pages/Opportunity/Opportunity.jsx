import "./Opportunity.css";
import img1 from "../../Assest/work.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "Constants/enviroment";
import { useState } from "react";
import NewHeader from "Components/NewHeader/NewHeader";

const Opportunity = () => {
  const [apply, setApply] = useState(false);
  const [Loading, setLoading] = useState(false);
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const handleApplyNowClick = () => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    data.applicantsIds = [...data.applicantsIds, userId];

    axios
      .put(`${config.baseUrl}/api/Opportunity/${data.id}`, data)
      .then((response) => {
        setApply(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <NewHeader />
      <h2 className="job-title">{data.title}</h2>
      <div className="job-info">
        <div className="imgPart">
          <img src={img1} alt="" />
        </div>
        <div className="infoPart">
          <h3>Job requirements : </h3>
          <div className="job-dates">
            <span className="start-date">
              <ArrowForwardIosIcon /> Start Date:{" "}
              <span className="date-value">{data.startDate}</span>
            </span>
            <span className="end-date">
              / End Date: <span className="date-value">{data.endDate}</span>
            </span>
          </div>
          <div className="job-details">
            <span className="job-type">
              <ArrowForwardIosIcon />
              Type:{" "}
              <span className="type-value">
                {data.type === 0 ? "Work" : "Volunteer"}
              </span>
            </span>
            <span className="months-number">
              <ArrowForwardIosIcon />
              Months: <span className="months-value">{data.monthsNumber}</span>
            </span>
            <span className="organization">
              <ArrowForwardIosIcon />
              Organization:{" "}
              <span className="org-value">{data.organizationFullName}</span>
            </span>
            <span className="organization">
              <ArrowForwardIosIcon />
              About Opportunity :{" "}
              <span className="org-value">{data.about}</span>
            </span>
          </div>
          <button
            className="custom-button"
            onClick={handleApplyNowClick}
            disabled={apply ? true : false}
          >
            {apply ? "Done" : Loading ? "Loading ..." : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
