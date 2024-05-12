import { SeekerTable } from "Components copy";
import "./ViewSeekers.css";
import { TopOfNewsPage } from "sections";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "Constants/enviroment";
import NewHeader from "Components/NewHeader/NewHeader";
import { Box, CircularProgress, Skeleton } from "@mui/material";
const ViewSeekers = () => {
  const [Opportunities, setOpportunities] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const orgId = localStorage.getItem("orgId");
  const [filteredApplicantsState, setFilteredApplicantsState] = useState([]);
  const [seeker, setSeeker] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Loading2, setLoading2] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading2(true);
    axios
      .get(`${config.baseUrl}/api/Opportunity`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setOpportunities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${config.baseUrl}/api/OpportunitySeeker`)
      .then((res) => {
        setLoading2(false);
        console.log(res.data);
        setApplicants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filteredOpportunities = Opportunities.filter(
      (job) => job.organizationId == orgId
    );
    const filteredApplicants = [];
    filteredOpportunities.forEach((job) => {
      const jobApplicants = job.applicantsIds.filter((applicantId) =>
        job.applicantsIds.includes(applicantId)
      );
      jobApplicants.forEach((applicantId) => {
        const applicantInfo = applicants.find(
          (applicant) => applicant.id === applicantId
        );
        filteredApplicants.push({
          jobTitle: job.title,
          applicantId: applicantId,
          applicantInfo: applicantInfo,
        });
      });
    });
    console.log(filteredApplicants);
    setFilteredApplicantsState(filteredApplicants);
  }, [Opportunities, applicants]);

  useEffect(() => {
    const newVariable = filteredApplicantsState
      .filter((applicant) => applicant.applicantInfo) // تجاهل الـ applicants التي ليس لديها applicantInfo
      .map((applicant, index) => {
        const { jobTitle, applicantInfo } = applicant;

        const fullName = applicantInfo.fullName;
        const phoneNumber = applicantInfo.phoneNumber;
        const email = applicantInfo.email;
        const specialty = applicantInfo.specialty;
        const practicalExperienceMonthsNumber =
          applicantInfo.practicalExperienceMonthsNumber;
        const volunteerExperienceMonthsNumber =
          applicantInfo.volunteerExperienceMonthsNumber;
        const cv = applicantInfo.cv;

        return {
          id: index + 1,
          jobTitle,
          fullName,
          phoneNumber,
          email,
          specialty,
          practicalExperienceMonthsNumber,
          volunteerExperienceMonthsNumber,
          cv,
        };
      });
    console.log(newVariable);
    setSeeker(newVariable);
  }, [filteredApplicantsState]);

  return (
    <div>
      <NewHeader />
      <div>
        <TopOfNewsPage
          img={require("../../Assest/banner-bg-01.jpg")}
          title="Seekers"
          valid={true}
          content="this page for view seekers that was appiled to work in this company"
        />
      </div>
      <h2> Seekers</h2>
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
      ) : Loading2 ? (
        <Box sx={{ margin: "40px 80px" }}>
          <Skeleton
            sx={{ bgcolor: "#2710ab40", borderRadius: "30px" }}
            variant="rectangular"
            width={"100%"}
            height={460}
          />
          
        </Box>
      ) : (
        <div className="container-fluid table-seekers">
          <SeekerTable rows={seeker} />
        </div>
      )}
    </div>
  );
};

export default ViewSeekers;
