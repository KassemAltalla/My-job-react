import { Header } from "Components copy";
import React from "react";
import { AddOppertunity, TopOfNewsPage } from "sections";
import "./InsertOpportunity.css";
import NewHeader from "Components/NewHeader/NewHeader";
const InsertOppertunity = () => {
  return (
    <>
      <NewHeader />
      <div>
        <TopOfNewsPage
          img={require("../../Assest/banner-bg-01.jpg")}
          title="Add Opportunity"
          valid={true}
          content="this page for insert opportunities for this companey"
        />
      </div>
      <div className="add-opportunity">
        <AddOppertunity />
      </div>
    </>
  );
};

export default InsertOppertunity;
