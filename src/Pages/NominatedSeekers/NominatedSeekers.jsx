// @ts-nocheck
import config from "Constants/enviroment";
import axios from "axios";
import { useState, useEffect } from "react";
import "./NominatedSeekers.css";
import { Box, Skeleton } from "@mui/material";
import NewHeader from "Components/NewHeader/NewHeader";
import { TopOfNewsPage } from "sections";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";

const columns = [
  { field: "similarity", headerName: "Similarity", width: 140 },
  { field: "fullName", headerName: "First name", width: 130 },
  { field: "email", headerName: "Email", width: 160 },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 130,
  },
  {
    field: "about",
    headerName: "About",
    width: 450,
  },
  {
    field: "specialty",
    headerName: "Specialty",
    description: "This column has a value getter and is not sortable.",
    width: 130,
  },

  {
    field: "cvLink",
    headerName: "CV",
    width: 150,
    renderCell: (params) => {
      const cvData = params.row.cv;
      // فك تشفير الملف المشفر
      const decodedData = atob(cvData);

      // تحويل النص المفكوك إلى مصفوفة من البايتات
      const byteArray = new Uint8Array(decodedData.length);
      for (let i = 0; i < decodedData.length; i++) {
        byteArray[i] = decodedData.charCodeAt(i);
      }

      // إنشاء رابط لتنزيل الملف
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const downloadUrl = URL.createObjectURL(blob);

      return (
        <a href={downloadUrl} download="cv.pdf">
          CV
        </a>
      );
    },
  },
];

const NominatedSeekers = () => {
  const [Seekers, setSeekers] = useState([]);
  const [Rows, setRows] = useState([]);
  const [Loading, setLoading] = useState(false);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${config.baseUrl}/api/Opportunity/recommend-seekers/opportunity-id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        setSeekers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (Seekers) {
      const newData = Seekers.map((item) => ({
        id: item.seeker.id,
        similarity: item.similarity,
        fullName: item.seeker.fullName,
        phoneNumber: item.seeker.phoneNumber,
        email: item.seeker.email,
        about: item.seeker.about,
        specialty: item.seeker.specialty,
        cv: item.seeker.cv,
      }));

      // تحديث قيمة similarity لتعرض رقمين بعد الفاصلة فقط
      newData.forEach((item) => {
        item.similarity = item.similarity.toFixed(2);
      });

      // رتب المصفوفة تنازليًا بناءً على قيمة similarity
      newData.sort((a, b) => b.similarity - a.similarity);
      setRows(newData);
    }
  }, [Seekers]);

  return (
    <div>
      <NewHeader />
      <div>
        <TopOfNewsPage
          img={require("../../Assest/banner-bg-01.jpg")}
          title="Seekers"
          valid={true}
          content="this page for view Nominated Seekers "
        />
      </div>
      <h2> Nominated Seekers</h2>
      {Loading ? (
        <Box sx={{ margin: "40px 80px" }}>
          <Skeleton
            sx={{ bgcolor: "#2710ab40", borderRadius: "30px" }}
            variant="rectangular"
            width={"100%"}
            height={360}
          />
        </Box>
      ) : (
        <div className="container-fluid table-seekers">
          <div
            className="table-seeker"
            style={{ height: "70vh", display: "flex", alignItems: "center" }}
          >
            <DataGrid
              rows={Rows}
              // @ts-ignore
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NominatedSeekers;
