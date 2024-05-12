import { useEffect, useState } from "react";
import "./SeekerSignup.css";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "Constants/enviroment";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import NewHeader from "Components/NewHeader/NewHeader";

const SeekerSignup = () => {
  const endPoint = "api/OpportunitySeeker";

  const [FullName, setFullName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Specialty, setSpecialty] = useState("");
  const [About, setAbout] = useState("");
  const [pictureId, setPictureId] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
  const [selectedFile, setSelectedFile] = useState("");
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const handleSubmit = async (event, file) => {
    event.preventDefault();
    setLoading(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      const fileDataUrl = e.target.result;

      if (typeof fileDataUrl === "string") {
        // إزالة بادئة الـ Data URL
        const base64Data = fileDataUrl.substring(fileDataUrl.indexOf(",") + 1);

        // قم بإنشاء الكائن الذي يحتوي على البيانات المرسلة إلى الخادم
        const data = {
          fullName: FullName,
          email: Email,
          password: Password,
          phoneNumber: Phone,
          specialty: Specialty,
          about: About,
          experiencesIds: [],
          picture: pictureId,
          cv: base64Data, // استخدم النص المشفر Base64 المقتطع
        };

        try {
          const response = await axios.post(
            `${config.baseUrl}/${endPoint}`,
            data
          );
          console.log(response.data);
          setLoading(false);
          navigate("/");
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
      } else {
        // إضافة منطق هنا في حالة عدم تحديد ملف
      }
    };

    // قم بقراءة الملف كـ Data URL
    reader.readAsDataURL(file);
  };
  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      handleSubmit(event, selectedFile);
    } else {
      // إضافة منطق هنا في حالة عدم تحديد ملف
    }
  };
  return (
    <div className="signUpOrg">
      <NewHeader />
      <h1 className="signupTitle">Sign Up for Opportunity Seeker</h1>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        sx={{ width: "80%", alignSelf: "center" }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
          <h2>Seeker Full Name :</h2>
            <TextField
              sx={{ marginBottom: 4, width: "90%" }}
              required
              id="filled-required"
              label="Full Name"
              variant="filled"
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
              onChange={handleTextChange6}
            />
          </Grid>

          <Grid xs={6}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={onChangeHandler} />
            </Button>
          </Grid>
        </Grid>
        <Button
          type="submit"
          sx={{ width: "20%", alignSelf: "flex-end", marginTop: "20px" }}
          variant="contained"
        >
          {Loading ? <CircularProgress color="inherit"/> : "Create New user"}
        </Button>
      </Box>
    </div>
  );
};

export default SeekerSignup;
