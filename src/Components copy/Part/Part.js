import React from 'react';
import './Part.css';
import { useNavigate } from 'react-router-dom';

const Part = ({ name, description, img, endpoint }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-3">
      <a
        className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        onClick={() => navigate(`/${endpoint}`)}
      >
        <img className="recent-work-img card-img" src={img} alt="Card imaging" />
        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
          <div className="recent-work-content text-start mb-3 ml-3 text-dark">
            <h3 className="card-title light-300">{name}</h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Part;