import { Box, TextField } from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <nav
      id="main_nav"
      className="navbar navbar-expand-lg navbar-light bg-white shadow"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler-success"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
