import { Header } from "Components copy";
import OpportunityTable from "Components copy/OpportunityTable/OpportunityTable";
import React, { useEffect, useState } from "react";
import "./ViewOpportunity.css";
import { TopOfNewsPage } from "sections";
import config from "Constants/enviroment";
import axios from "axios";
import NewHeader from "Components/NewHeader/NewHeader";
import { Box, Skeleton } from "@mui/material";

const ViewOpportunity = () => {
  const [Opportunities, setOpportunities] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${config.baseUrl}/api/Opportunity`)
      .then((res) => {
        console.log(res.data);
        setOpportunities(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NewHeader />
      <div>
        <TopOfNewsPage
          img={require("../../Assest/banner-bg-01.jpg")}
          title="Opportunity"
          valid={true}
          content="this page for view opportunities for this companey"
        />
      </div>

      <h2> Opportunities</h2>

      {Loading ? (
        <Box sx={{ margin: "40px 80px" }}>
          <Skeleton
            sx={{ bgcolor: "#2710ab40", borderRadius: "30px" }}
            variant="rectangular"
            width={"100%"}
            height={460}
          />
        </Box>
      ) : (
        <div className="oper-table">
          <OpportunityTable rows={Opportunities} />
        </div>
      )}
    </>
  );
};

export default ViewOpportunity;
