import ViewSeekers from "Pages/ViewSeekers/ViewSeekers";
import AdminOrg from "../Pages/AdminOrg/AdminOrg";
import AdminSeeker from "../Pages/AdminSeeker/AdminSeeker";
import Login from "../Pages/Login/Login";
import Opportunity from "../Pages/Opportunity/Opportunity";
import OrgSingup from "../Pages/OrgSingup/OrgSingup";
import SeekerHome from "../Pages/SeekerHome/SeekerHome";
import SeekerSignup from "../Pages/SeekerSignup/SeekerSignup";
import Root from "../Root";
import {
  HashRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import ViewOrgnizations from "Pages/ViewOrginzations/ViewOrgnizations";
import ViewOpportunity from "Pages/ViewOpportunity/ViewOpportunity";
import Orgnization from "Pages/Ognization/Orgnization";
import InsertOpportunity from "Pages/InsertOpportunity/InsertOpportunity";
import AdminHome from "Pages/AdminHome/AdminHome";
import EditOppertunity from "Pages/EditOpportunity/EditOpportunity";
import EditSeeker from "Pages/EditSeeker/EditSeeker";
import EditOrg from "Pages/EditOrg/EditOrg";
import NominatedSeekers from "Pages/NominatedSeekers/NominatedSeekers";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/",
//         element: <Login />,
//       },
//       {
//         path: "/Home",
//         element: <SeekerHome />,
//       },
//       {
//         path: "/orgsingup",
//         element: <OrgSingup />,
//       },
//       {
//         path: "/seekersignup",
//         element: <SeekerSignup />,
//       },
//       {
//         path: "/opportunity",
//         element: <Opportunity />,
//       },
//       {
//         path: "/viewseekers",
//         element: <ViewSeekers />,
//       },
//       {
//         path: "/vieworgnization",
//         element: <ViewOrgnizations />,
//       },
//       {
//         path: "/viewopportunity",
//         element: <ViewOpportunity />,
//       },
//       {
//         path: "/orgnization",
//         element: <Orgnization />,
//       },
//       {
//         path: "/insertopportunity",
//         element: <InsertOpportunity />,
//       },
//       {
//         path: "/editopportunity",
//         element: <EditOppertunity />,
//       },
//       {
//         path: "/editseeker",
//         element: <EditSeeker />,
//       },
//       {
//         path: "/editorg",
//         element: <EditOrg />,
//       },
//       {
//         path: "/admin",

//         children: [
//           {
//             path: "",
//             element: <AdminHome />,
//           },
//           {
//             path: "seeker",
//             element: <AdminSeeker />,
//           },
//           {
//             path: "organization",
//             element: <AdminOrg />,
//           },
//         ],
//       },
//       {
//         path: "*",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

///////////////////////////////

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<SeekerHome />} />
        <Route path="/orgsingup" element={<OrgSingup />} />
        <Route path="/seekersignup" element={<SeekerSignup />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/viewseekers" element={<ViewSeekers />} />
        <Route path="/vieworgnization" element={<ViewOrgnizations />} />
        <Route path="/viewopportunity" element={<ViewOpportunity />} />
        <Route path="/orgnization" element={<Orgnization />} />
        <Route path="/insertopportunity" element={<InsertOpportunity />} />
        <Route path="/editopportunity" element={<EditOppertunity />} />
        <Route path="/editseeker" element={<EditSeeker />} />
        <Route path="/editorg" element={<EditOrg />} />
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/adminseeker" element={<AdminSeeker />} />
        <Route path="/adminorganization" element={<AdminOrg />} />
        <Route path="/nominatedseekers" element={<NominatedSeekers />} />
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default Router;
