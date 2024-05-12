import React, { useState } from "react";
import "./Login.css";
import img from "./undraw_remotely_2j6y.svg";
import { CircularProgress, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "Constants/enviroment";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const Login = () => {
  const endPoint = "api/User/Login";

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setEmail(event.target.value);
  };
  const handleTextChange2 = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Fetch data using the textValue
    if (Email == "admin" && Password == "admin") {
      navigate("/admin");
      return;
    }
    setLoading(true);
    const data = {
      email: Email,
      password: Password,
    };

    await axios
      .post(`${config.baseUrl}/${endPoint}`, data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.userType === "Organization") {
          localStorage.setItem("orgId", res.data.id);
          localStorage.setItem("fullName", res.data.fullName);
          navigate("/orgnization");
        } else {
          localStorage.setItem("userId", res.data.id);
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="LoginTitle">
        <GroupsOutlinedIcon sx={{ fontSize: 80 }} />
        My Job
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>Sign In</h3>
                  </div>

                  <form action="#" method="post">
                    <h2>Email :</h2>
                    <TextField
                      sx={{ marginBottom: 4, width: "400px" }}
                      required
                      id="filled-required"
                      label="Email"
                      variant="filled"
                      onChange={handleTextChange}
                    />
                    <h2>Password :</h2>
                    <TextField
                      sx={{ width: 400, marginBottom: 4 }}
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="filled"
                      onChange={handleTextChange2}
                    />

                    <input
                      type="submit"
                      value={Loading ? "Loading ... " : "Log In"}
                      className="btn btn-block btn-primary"
                      onClick={handleSubmit}
                    />
                  </form>

                  <div className="SingBtn mb-4">
                    <p>or signup</p>

                    <NavLink to={"/orgsingup"}>
                      <input
                        type="button"
                        value="Organization"
                        className="btn btn-block btn-primary btnSign"
                      />
                    </NavLink>
                    <NavLink to={"/seekersignup"}>
                      <input
                        type="button"
                        value="Opportunity seeker"
                        className="btn btn-block btn-primary btnSign"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
