import { Header } from "Components copy";
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../Constants/enviroment";
import { AddOppertunity, TopOfNewsPage } from "sections";
import "./EditOpportunity.css";
import { useLocation, useNavigate } from "react-router-dom";
import NewHeader from "Components/NewHeader/NewHeader";
import { CircularProgress } from "@mui/material";

const EditOppertunity = () => {
  const [type, setType] = useState(0);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [Loading, setLoading] = useState(false);

  const [Opportunities, setOpportunities] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/api/Opportunity`)
      .then((res) => {
        console.log(res.data);
        setOpportunities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const opportunity = Opportunities.find((item) => item.id === id);
  useEffect(() => {
    if (opportunity) {
      setTitle(opportunity.title);
      setAbout(opportunity.about);
      setStartDate(opportunity.startDate);
      setEndDate(opportunity.endDate);
      setType(opportunity.type);
    }
  }, [opportunity]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(Number(event.target.value));
  };

  const handlePostData = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (opportunity) {
      // تعديل البيانات المطلوبة
      const modifiedOpportunity = {
        id: opportunity.id,
        title: title,
        about: about,
        startDate: startDate,
        endDate: endDate,
        type: type,
        organizationFullName: opportunity.organizationFullName,
        organizationId: opportunity.organizationId,
        applicantsIds: opportunity.applicantsIds,
      };

      await axios
        .put(`${config.baseUrl}/api/Opportunity/${id}`, modifiedOpportunity)
        .then((res) => {
          console.log(res.data);
          navigate("/viewopportunity");
          setTitle("");
          setAbout("");
          setStartDate("");
          setEndDate("");

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);

          setLoading(false);
        });
    }
  };
  return (
    <div>
      <NewHeader />
      <div>
        <TopOfNewsPage
          img={require("../../Assest/banner-bg-01.jpg")}
          title="Edit Opportunity"
          valid={true}
          content="this page for Edit opportunities for this companey"
        />
      </div>
      <div className="add-opportunity">
        <div className="opportunity-list">
          <div></div>
          <div className="add-opportunity-form">
            <form onSubmit={handlePostData}>
              <h2>Opportunity Name :</h2>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Title"
                className="input-field"
              />
              <h2>About Opportunity :</h2>
              <input
                type="text"
                name="about"
                value={about}
                onChange={handleAboutChange}
                placeholder="About"
                className="input-field"
              />
              <h2>Start Date :</h2>
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                placeholder="startDate"
                className="input-field"
              />
              <h2>End Date :</h2>
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                placeholder="endDate"
                className="input-field"
              />
              <h2> Work Type :</h2>
              <div>
                <select value={type} onChange={handleTypeChange}>
                  <option value={0}>Work</option>
                  <option value={1}>Volunteer</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary mt-4 w-25">
                {Loading ? <CircularProgress color="inherit" /> : "Edit"}
              </button>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EditOppertunity;
