import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <nav
      id="main_nav"
      className="navbar navbar-expand-lg navbar-light bg-white shadow"
    >
      <div className="container d-flex justify-content-center align-items-center">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "rgb(222,222,222)",
            borderRadius: "10px",
            padding: "10px 15px",
          }}
        >
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            sx={{ width: "500px" }}
            id="input-with-sx"
            label="Search"
            variant="standard"
          />
        </Box>
      </div>
    </nav>
  );
};

export default Header;
