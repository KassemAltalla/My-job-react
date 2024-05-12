import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import config from "../../Constants/enviroment";
import "./AddOpportunity.css";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Addopportunity = () => {
  const [image, setImage] = useState(null);
  const [editingopportunity, setEditingopportunity] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [opportunity, setopportunity] = useState([]);
  const [newopportunity, setNewopportunity] = useState({
    title: "",
    startDate: "",
    endDate: "",
    organizationFullName: "",
    type: 0,
    organizationId: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewopportunity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddopportunity = () => {
    if (!newopportunity.title || !newopportunity.startDate) return;
    setopportunity((prevopportunity) => [...prevopportunity, newopportunity]);
  };

  const handleDeleteopportunity = (id) => {
    const updatedopportunity = opportunity.filter(
      (opportunity) => opportunity.id !== id
    );
    setopportunity(updatedopportunity);
  };

  const handleEditStart = (id) => {
    setEditingopportunity(id);
  };

  const handleEditChange = (event, id, field) => {
    const updatedopportunity = opportunity.map((opportunity) => {
      if (opportunity.id === id) {
        return {
          ...opportunity,
          [field]: event.target.value,
        };
      }
      return opportunity;
    });
    setopportunity(updatedopportunity);
  };

  const handleEditEnd = async (id) => {
    const opportunityToUpdate = opportunity.find(
      (opportunity) => opportunity.id === id
    );
    if (!opportunityToUpdate) return;
    const formData = new FormData();
    formData.append("title", newopportunity.title);
    formData.append("startDate", newopportunity.startDate);
    formData.append("endDate", newopportunity.endDate);

    formData.append("type", "0");
    formData.append(
      "organizationFullName",
      newopportunity.organizationFullName
    );
    formData.append("orgnizationId", newopportunity.organizationId);

    await axios
      .put(`${config.baseUrl}/${config.Opportunity}`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setEditingopportunity(null);
  };

  const [type, setType] = useState(0);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
    const data = {
      title: title,
      about:about,
      startDate: startDate,
      endDate: endDate,
      type: type,
      organizationFullName: localStorage.getItem("fullName"),
      organizationId: localStorage.getItem("orgId"),
    };

    await axios
      .post(`${config.baseUrl}/api/Opportunity`, data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate("/orgnization");
        setTitle("");
        setAbout("")
        setStartDate("");
        setEndDate("");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="opportunity-list">
      <h2>opportunity List</h2>
      <div className="add-opportunity-form">
        <form onSubmit={handlePostData}>
          <h2>Opportunity Name :</h2>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Opportunity Name"
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
          <h2>Work Type :</h2>
          <div>
            <select value={type} onChange={handleTypeChange}>
              <option value={0}>Work</option>
              <option value={1}>Volunteer</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-4 w-25">
            {Loading ? <CircularProgress color="inherit"/> : "Add"}
          </button>
        </form>
      </div>
      <div className="opportunity-list">
        {opportunity &&
          opportunity.map((opportunity) => (
            <div key={opportunity.id} className="opportunity-item">
              {editingopportunity === opportunity.id ? (
                <div className="edit-mode">
                  <input
                    type="text"
                    value={opportunity.title}
                    onChange={(e) =>
                      handleEditChange(e, opportunity.id, "title")
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    value={opportunity.startDate}
                    onChange={(e) =>
                      handleEditChange(e, opportunity.id, "startDate")
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    value={opportunity.type}
                    onChange={(e) =>
                      handleEditChange(e, opportunity.id, "type")
                    }
                    className="input-field"
                  />
                  <input
                    type="file"
                    onChange={uploadImage}
                    className="input-field"
                  />
                  <button
                    className="btn-save"
                    onClick={() => handleEditEnd(opportunity.id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="view-mode">
                  <h4>{opportunity.title}</h4>
                  <p>{opportunity.startDate}</p>
                  <p>{opportunity.type}</p>
                  <img
                    src={opportunity.image}
                    width={"200px"}
                    height={"100px"}
                    alt="opportunity"
                  />
                  <div className="edit-delete-icons">
                    <FaEdit
                      className="edit-icon"
                      onClick={() => handleEditStart(opportunity.id)}
                    />
                    <FaTrash
                      className="delete-icon"
                      onClick={() => handleDeleteopportunity(opportunity.id)}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Addopportunity;
