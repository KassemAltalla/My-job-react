import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./NewHeader.css";
import { useNavigate } from "react-router-dom";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const NewHeader = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // العودة إلى الصفحة السابقة
  };

  const handleGoHome = () => {
    navigate("/"); // العودة إلى الصفحة الرئيسية
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <button onClick={handleGoHome} className="btn btn-primary">
            Login{" "}
          </button>
          <div className="LogoTitle">
            <GroupsOutlinedIcon sx={{ fontSize: 50 }} />
            My Job
          </div>
          <button onClick={handleGoBack} className="btn btn-primary">
            Back{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NewHeader;
