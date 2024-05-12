import React from "react";
import "./Departments.css";
import { Part } from "Components copy";
const Departments = () => {
  return (
    <>
      <section className="container overflow-hidden py-5">
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
          <Part
            img={require("../../Assest/images/services-01.jpg")}
            name={"Seekers"}
            description={
              "this is the Part for who seekers was applied for jobs"
            }
            endpoint={"viewseekers"}
          />
          <Part
            img={require("../../Assest/images/services-06.jpg")}
            name={"Opportunity"}
            description={
              "this is the Part for which opportunity related to this company"
            }
            endpoint={"viewopportunity"}
          />
          <Part
            img={require("../../Assest/images/services-05.jpg")}
            name={"Add Opportunity"}
            description={"this is the Part for insert opportunity"}
            endpoint={"insertopportunity"}
          />
        </div>
      </section>
    </>
  );
};

export default Departments;
