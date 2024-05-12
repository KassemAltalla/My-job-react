import React from "react";
import { Link, useNavigate } from "react-router-dom";

import jobImg from "../../Assest/image.png";
import NewHeader from "Components/NewHeader/NewHeader";

const AdminHome = () => {
  const navigate = useNavigate();
  const handleAdminSeeker = () => {
    navigate("/adminseeker");
  };
  const handleAdminOrg = () => {
    navigate("/adminorganization");
  };
  
  return (
    <div className="container">
      <NewHeader />
      <div className="recent-work-header row text-center pb-5">
        <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Admin Home</h2>
      </div>
      <div className="row gy-5 g-lg-5 mb-4">
        <div className="col-md-4 mb-3" onClick={handleAdminSeeker}>
          <Link
            to=""
            className="recent-work card border-0 shadow-lg overflow-hidden"
          >
            {}
            <img className="recent-work-img card-img" src={jobImg} alt="" />
            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 className="card-title light-300">
                  <div>Seeker</div>
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-3" onClick={handleAdminOrg}>
          <Link
            to=""
            className="recent-work card border-0 shadow-lg overflow-hidden"
          >
            {}
            <img className="recent-work-img card-img" src={jobImg} alt="" />
            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 className="card-title light-300">
                  <div>Organization</div>
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
