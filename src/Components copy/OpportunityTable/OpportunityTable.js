import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./OpportunityTable.css";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import config from "Constants/enviroment";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const rows = [
  {
    id: 1,
    Id: 1,
    Title: "Snow",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Jon",
    MonthsNumber: 35,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 2,
    Id: 1,
    Title: "Lannister",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Cersei",
    MonthsNumber: 42,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 3,
    Id: 1,
    Title: "Lannister",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Jaime",
    MonthsNumber: 45,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 4,
    Id: 1,
    Title: "Stark",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Arya",
    MonthsNumber: 16,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 5,
    Id: 1,
    Title: "Targaryen",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Daenerys",
    MonthsNumber: null,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 6,
    Id: 1,
    Title: "Melisandre",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: null,
    MonthsNumber: 150,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 7,
    Id: 1,
    Title: "Clifford",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Ferrara",
    MonthsNumber: 44,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 8,
    Id: 1,
    Title: "Frances",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Rossini",
    MonthsNumber: 36,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
  {
    id: 9,
    Id: 1,
    Title: "Roxie",
    StartDate: new Date().getUTCDate(),
    EndDate: new Date().getUTCDate(),
    Type: "Harvey",
    MonthsNumber: 65,
    OrganizationFullName: "ahmad co",
    OrganizationId: 123,
  },
];

export default function OpportunityTable(props) {
  const columns = [
    { field: "title", headerName: "Title", width: 180 },
    { field: "about", headerName: "About", width: 280 },
    { field: "startDate", headerName: "Start Date", width: 160 },
    { field: "endDate", headerName: "End Date", width: 130 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "monthsNumber", headerName: "Months Number", width: 130 },
    {
      field: "organizationFullName",
      headerName: "Organization Full Name",
      width: 160,
    },

    {
      field: "NomintedSeekers",
      headerName: "Nominted Seekers",
      width: 160,
      renderCell: (params) => (
        <IconButton
          aria-label="Edit"
          onClick={() => handleSeeker(params.row.id)}
        >
          <PersonIcon />
        </IconButton>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <IconButton aria-label="Edit" onClick={() => handleEdit(params.row.id)}>
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <IconButton
          aria-label="Delete"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const handleDelete = (id) => {
    axios
      .delete(`${config.baseUrl}/api/Opportunity/${id}`)
      .then((res) => {
        console.log("تم حذف فرصة  بنجاح");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("حدث خطأ أثناء حذف فرصة ");
        console.log(err);
      });
    window.location.reload();
  };

  const [jobs, setJobs] = useState([]);
  const orgId = localStorage.getItem("orgId");

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/editopportunity", { state: id });
  };

  const handleSeeker = (id) => {
    navigate("/nominatedseekers", { state: id });
  };

  useEffect(() => {
    const filteredJobs = props.rows.filter(
      // eslint-disable-next-line eqeqeq
      (job) => job.organizationId == orgId
    );
    const updatedJobs = filteredJobs.map((job) => {
      if (job.type === 0) {
        return { ...job, type: "work" };
      } else {
        return { ...job, type: "Volunteer" };
      }
    });
    setJobs(updatedJobs);
  }, [orgId, props]);

  return (
    <div
      className="table-ornization"
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        width: "200vh",
        margin: "50px",
      }}
    >
      <DataGrid
        rows={jobs}
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
