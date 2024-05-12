import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./SeekerTable.css";
import useGet from "CostomHook/useGet";
import config from "Constants/enviroment";
import { Button } from "@mui/material";
import axios from "axios";
const columns = [
  { field: "jobTitle", headerName: "Job Title" },
  { field: "fullName", headerName: "First name", width: 130 },
  { field: "email", headerName: "Email", width: 160 },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 130,
  },
  {
    field: "specialty",
    headerName: "Specialty",
    description: "This column has a value getter and is not sortable.",
    width: 130,
  },
  {
    field: "practicalExperienceMonthsNumber",
    headerName: "Practical Experience",
    type: "number",
    width: 150,
  },
  {
    field: "volunteerExperienceMonthsNumber",
    headerName: "Volunteer Experience",
    type: "number",
    width: 150,
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

const rows = [
  {
    id: 1,
    FullName: "Snow",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Jon",
    Specialty: 35,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 2,
    FullName: "Lannister",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Cersei",
    Specialty: 42,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 3,
    FullName: "Lannister",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Jaime",
    Specialty: 45,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 4,
    FullName: "Stark",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Arya",
    Specialty: 16,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 5,
    FullName: "Targaryen",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Daenerys",
    Specialty: null,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 6,
    FullName: "Melisandre",
    Email: "email.mail@gmail.com",
    PhoneNumber: null,
    Specialty: 150,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 7,
    FullName: "Clifford",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Ferrara",
    Specialty: 44,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 8,
    FullName: "Frances",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Rossini",
    Specialty: 36,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
  {
    id: 9,
    FullName: "Roxie",
    Email: "email.mail@gmail.com",
    PhoneNumber: "Harvey",
    Specialty: 65,
    PracticalExperienceMonthsNumber: 120,
    VolunteerExperienceMonthsNumber: 50,
  },
];

export default function SeekerTable(props) {
  return (
    <div
      className="table-seeker"
      style={{ height: "70vh", display: "flex", alignItems: "center" }}
    >
      <DataGrid
        rows={props.rows}
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
  );
}
