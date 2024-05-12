import { useEffect, useState } from "react";
import "./EditSeeker.css";
import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import config from "Constants/enviroment";
import NewHeader from "Components/NewHeader/NewHeader";

const EditSeeker = () => {
  const endPoint = "api/OpportunitySeeker";

  const [FullName, setFullName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Specialty, setSpecialty] = useState("");
  const [About, setAbout] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const person = location.state;

  useEffect(() => {
    setFullName(person.fullName);
    setEmail(person.email);
    setAbout(person.about);
    setPassword(person.password);
    setPhone(person.phoneNumber);
    setSpecialty(person.specialty);
  }, [person]);

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
      experiencesIds: person.experiencesIds,
      pictureId: person.pictureId,
      cv: person.cv,
    };

    await axios
      .put(`${config.baseUrl}/${endPoint}/${person.id}`, data)
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
      <h1 className="signupTitle">Edit Opportunity Seeker</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "80%", alignSelf: "center" }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"center"}
          >
            <h2>Seeker Full Name :</h2>
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
          <Grid
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"center"}
          >
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
          <Grid
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"center"}
          >
            <h2>Email : </h2>
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
          <Grid
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"center"}
          >
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
          <Grid
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"center"}
          >
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
          <Grid
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"center"}
          >
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
          sx={{
            width: "20%",
            alignSelf: "flex-end",
            right: "-40%",
            marginBottom: "40px",
          }}
          variant="contained"
        >
          {Loading ? <CircularProgress color="inherit" /> : "Edit user"}
        </Button>
      </Box>
    </div>
  );
};

export default EditSeeker;
