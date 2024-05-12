import "./Jobs.css";
import jobImg from "../../Assest/image.png";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import config from "Constants/enviroment";
import { Box, CircularProgress, Skeleton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NewHeader from "Components/NewHeader/NewHeader";

const Jobs = () => {
  const [Jobs, setJobs] = useState([]);
  const [searchJobs, setSearchJobs] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${config.baseUrl}/api/Opportunity`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setJobs(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const hanldeSearch = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.trim() === "") {
      // إذا كانت قيمة البحث فارغة، لا تقم بأي عملية
      setSearchJobs([]);
      return;
    }

    const matchedJobs = Jobs.filter((job) => {
      const { title, organizationFullName } = job;
      return (
        title.includes(searchTerm) || organizationFullName.includes(searchTerm)
      );
    });

    if (matchedJobs.length > 0) {
      // قم بتخزين الوظائف المطابقة في متغير حالة جديد أو قم بأي عملية أخرى تحتاجها
      console.log(matchedJobs);
      setSearchJobs(matchedJobs);
    } else {
      // لا توجد وظائف مطابقة
      console.log("لا توجد وظائف مطابقة");
    }
  };

  return (
    <div>
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
              onChange={hanldeSearch}
            />
          </Box>
        </div>
      </nav>
      <section className="py-5 mb-5">
        {searchJobs.length > 0 ? (
          <div className="container">
            <div className="recent-work-header row text-center pb-5">
              <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">
                Search Jobs
              </h2>
            </div>
            {Loading ? (
              <Box sx={{ margin: "40px 80px" }}>
                <Skeleton
                  sx={{ bgcolor: "#2710ab40", borderRadius: "30px" }}
                  variant="rectangular"
                  width={"200px"}
                  height={200}
                />
              </Box>
            ) : (
              <div className="row gy-5 g-lg-5 mb-4">
                {searchJobs.map((item) => (
                  <JobCard data={item} name={item.title} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
        <div className="container">
          <div className="recent-work-header row text-center pb-5">
            <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">
              Available Jobs
            </h2>
          </div>
          {Loading ? (
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Skeleton
                sx={{
                  bgcolor: "#2710ab40",
                  borderRadius: "30px",
                  margin: "20px 20px",
                }}
                variant="rectangular"
                width={"300px"}
                height={300}
              />
              <Skeleton
                sx={{
                  bgcolor: "#2710ab40",
                  borderRadius: "30px",
                  margin: "20px 20px",
                }}
                variant="rectangular"
                width={"300px"}
                height={300}
              />
              <Skeleton
                sx={{
                  bgcolor: "#2710ab40",
                  borderRadius: "30px",
                  margin: "20px 20px",
                }}
                variant="rectangular"
                width={300}
                height={300}
              />
            </Box>
          ) : (
            <div className="row gy-5 g-lg-5 mb-4">
              {Jobs.map((item) => (
                <JobCard data={item} name={item.title} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
