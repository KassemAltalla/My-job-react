import React from "react";
import "./SeekerHome.css";
import Header from "Components/Header/Header";
import Jobs from "Pages/Jobs/Jobs";
import { Link } from "react-router-dom";
import NewHeader from "Components/NewHeader/NewHeader";

const SeekerHome = () => {
  return (
    <div>
      <NewHeader />
      <Jobs />
    </div>
  );
};

export default SeekerHome;
