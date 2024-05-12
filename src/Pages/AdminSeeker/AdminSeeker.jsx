import SeekerCard from "Components/SeekerCard/SeekerCard";
import "./AdminSeeker.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "Constants/enviroment";
import { useNavigate } from "react-router-dom";
import NewHeader from "Components/NewHeader/NewHeader";
import { Box, Skeleton } from "@mui/material";

const data = [
  {
    id: 0,
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123456789",
    specialty: "Software Engineering",
    about:
      "I am a passionate software engineer with experience in web development.",
    practicalExperienceMonthsNumber: 24,
    volunteerExperienceMonthsNumber: 6,
  },
  {
    id: 1,
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987654321",
    specialty: "Data Science",
    about:
      "I am a data scientist with expertise in machine learning and data analysis.",
    practicalExperienceMonthsNumber: 36,
    volunteerExperienceMonthsNumber: 12,
  },
  {
    id: 2,
    fullName: "Michael Johnson",
    email: "michael.johnson@example.com",
    phoneNumber: "555555555",
    specialty: "Graphic Design",
    about:
      "I am a creative graphic designer with a passion for visual communication.",
    practicalExperienceMonthsNumber: 48,
    volunteerExperienceMonthsNumber: 0,
  },
  {
    id: 3,
    fullName: "Sarah Williams",
    email: "sarah.williams@example.com",
    phoneNumber: "444444444",
    specialty: "Marketing",
    about:
      "I am a marketing professional with experience in digital marketing strategies.",
    practicalExperienceMonthsNumber: 60,
    volunteerExperienceMonthsNumber: 6,
  },
  {
    id: 4,
    fullName: "David Brown",
    email: "david.brown@example.com",
    phoneNumber: "777777777",
    specialty: "Finance",
    about:
      "I am a finance expert with a strong background in financial analysis and planning.",
    practicalExperienceMonthsNumber: 72,
    volunteerExperienceMonthsNumber: 0,
  },
];

const AdminSeeker = () => {
  const [personsData, setPersonsData] = useState([]);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const handleDelete = (person) => {
    // Handle delete functionality
    console.log("Deleting person:", person);
    axios
      .delete(`${config.baseUrl}/api/OpportunitySeeker/${person.id}`)
      .then((res) => {
        console.log("تم حذف فرصة الباحث بنجاح");
        console.log(res.data);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("حدث خطأ أثناء حذف فرصة الباحث");
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${config.baseUrl}/api/OpportunitySeeker`)
      .then((res) => {
        console.log(res.data);
        setPersonsData(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleEdit = (person) => {
    // Handle edit functionality
    console.log("Editing person:", person);
    navigate("/editSeeker", { state: person });
  };

  return (
    <div>
      <NewHeader />
      {Loading ? (
        <Box sx={{ margin: "40px 80px" }}>
          <Skeleton
            sx={{ bgcolor: "#2710ab40", borderRadius: "30px" }}
            variant="rectangular"
            width={"100%"}
            height={260}
          />
          <Skeleton
            sx={{ bgcolor: "#2710ab40", borderRadius: "30px" }}
            variant="rectangular"
            width={"100%"}
            height={260}
          />
        </Box>
      ) : (
        <div></div>
      )}
      {personsData.map((item) => (
        <SeekerCard person={item} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default AdminSeeker;
