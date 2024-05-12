import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  styled,
} from "@mui/material";
import "./EditOrg.css";
import { useEffect, useState } from "react";
import usePost from "CostomHook/usePost";
import axios from "axios";
import config from "Constants/enviroment";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import NewHeader from "Components/NewHeader/NewHeader";

const EditOrg = () => {
  const endPoint = "api/Organization";
  const [FullName, setFullName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Specialty, setSpecialty] = useState("");
  const [About, setAbout] = useState("");
  const [pictureId, setPictureId] = useState(0);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const location = useLocation();
  const Org = location.state;

  useEffect(() => {
    setFullName(Org.fullName);
    setEmail(Org.email);
    setAbout(Org.about);
    setPassword(Org.password);
    setPhone(Org.phoneNumber);
    setSpecialty(Org.specialty);
  }, [Org]);

  const handleTextChange1 = (event) => {
    setFullName(event.target.value);
  };
  const handleTextChange2 = (event) => {
    setPhone(event.target.value);
  };
  const handleTextChange3 = (event) => {
    setEmail(event.target.value);
  };
  const handleTextChange4 = (event) => {
    setPassword(event.target.value);
  };
  const handleTextChange5 = (event) => {
    setSpecialty(event.target.value);
  };
  const handleTextChange6 = (event) => {
    setAbout(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Fetch data using the textValue
    const data = {
      fullName: FullName,
      email: Email,
      password: Password,
      phoneNumber: Phone,
      specialty: Specialty,
      about: About,
      pictureId: "",
    };

    await axios
      .put(`${config.baseUrl}/${endPoint}/${Org.id}`, data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate("/admin");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="signUpOrg">
      <NewHeader />
      <h1 className="signupTitle">Edit for Organization</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "80%", alignSelf: "center" }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <h2>Organization Full Name :</h2>
            <TextField
              sx={{ marginBottom: 4, width: "90%" }}
              required
              id="filled-required"
              label="Full Name"
              variant="filled"
              value={FullName}
              onChange={handleTextChange1}
            />
          </Grid>
          <Grid xs={6}>
            <h2>Phone Number :</h2>
            <TextField
              sx={{ marginBottom: 4, width: "90%" }}
              required
              id="filled-required"
              label="Phone Number"
              variant="filled"
              value={Phone}
              onChange={handleTextChange2}
            />
          </Grid>
          <Grid xs={6}>
            <h2>Email :</h2>
            <TextField
              sx={{ marginBottom: 4, width: "90%" }}
              required
              id="filled-required"
              label="Email"
              variant="filled"
              value={Email}
              onChange={handleTextChange3}
            />
          </Grid>
          <Grid xs={6}>
            <h2>Password :</h2>
            <TextField
              sx={{ marginBottom: 4, width: "90%" }}
              required
              id="filled-required"
              label="Password"
              variant="filled"
              value={Password}
              onChange={handleTextChange4}
            />
          </Grid>
          <Grid xs={6}>
            <h2>Specialty :</h2>
            <TextField
              sx={{ marginBottom: 4, width: "90%" }}
              required
              id="filled-required"
              label="Specialty"
              variant="filled"
              value={Specialty}
              onChange={handleTextChange5}
            />
          </Grid>
          <Grid xs={6}>
            <h2>About :</h2>
            <TextField
              sx={{ marginBottom: 4, width: "90%" }}
              required
              id="filled-required"
              label="About"
              variant="filled"
              value={About}
              onChange={handleTextChange6}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          sx={{ width: "20%", alignSelf: "flex-end" }}
          variant="contained"
        >
          {Loading ? <CircularProgress color="inherit" /> : "Edit Organization"}
        </Button>
      </Box>
    </div>
  );
};

export default EditOrg;
