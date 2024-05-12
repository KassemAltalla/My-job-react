import { useEffect, useState } from "react";
import "./AdminOrg.css";
import OrgCard from "Components/OrgCard/OrgCard";
import axios from "axios";
import config from "Constants/enviroment";
import { useNavigate } from "react-router-dom";
import NewHeader from "Components/NewHeader/NewHeader";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

const AdminOrg = () => {
  const [OrganizationData, setOrganizatioData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${config.baseUrl}/api/Organization`)
      .then((res) => {
        console.log(res.data);
        setOrganizatioData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (Org) => {
    // Handle edit functionality
    console.log("Editing Org:", Org);
    navigate("/editorg", { state: Org });
  };

  const handleDelete = (Org) => {
    // Handle delete functionality
    console.log("Deleting person:", Org);
    axios
      .delete(`${config.baseUrl}/api/Organization/${Org.id}`)
      .then((res) => {
        console.log("تم حذف بنجاح");
        console.log(res.data);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("حدث خطأ أثناء حذف  ");
        console.log(err);
      });
  };
  return (
    <div>
      <NewHeader />
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
      ) : (
        <div></div>
      )}

      {OrganizationData.map((item) => (
        <OrgCard Org={item} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default AdminOrg;
