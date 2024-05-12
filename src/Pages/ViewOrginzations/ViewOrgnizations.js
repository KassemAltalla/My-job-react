import {  Header, OrgnizationTable } from 'Components copy'
import React from 'react'
import './ViewOrgnization.css'
import { TopOfNewsPage } from 'sections'
import NewHeader from 'Components/NewHeader/NewHeader'
const ViewOrgnizations = () => {
  return (
    <>
      <NewHeader />
      <div>
        <TopOfNewsPage
          img={require("../../Assest/banner-bg-01.jpg")}
          title="Orgnizations"
          valid={true}
          content="this page for view Orgnizations "
        />
      </div>

      <h2> Orgnizations</h2>

      <div className="container-fluid org-table">
        <OrgnizationTable />
      </div>
    </>
  );
}

export default ViewOrgnizations