import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './OrgnizationTable.css'
import useGet from 'CostomHook/useGet';
import config from 'Constants/enviroment';
const columns = [
    { field: 'Id', headerName: 'ID' },
    { field: 'FullName', headerName: 'First name', width: 130 },
    { field: 'Email', headerName: 'Email', width: 160 },
    { field: 'PhoneNumber', headerName: 'Phone Number', width: 130 },
    { field: 'Specialty', headerName: 'Specialty', description: 'This column has a value getter and is not sortable.', width: 130 },
];

const rows = [
    { id: 1,Id: 1, FullName: 'Snow', Email: "email.mail@gmail.com", PhoneNumber: 'Jon', Specialty: 35, },
    { id: 2,Id: 2, FullName: 'Lannister', Email: "email.mail@gmail.com", PhoneNumber: 'Cersei', Specialty: 42, },
    { id: 3,Id: 3, FullName: 'Lannister', Email: "email.mail@gmail.com", PhoneNumber: 'Jaime', Specialty: 45, },
    { id: 4,Id: 4, FullName: 'Stark', Email: "email.mail@gmail.com", PhoneNumber: 'Arya', Specialty: 16, },
    { id: 5,Id: 5, FullName: 'Targaryen', Email: "email.mail@gmail.com", PhoneNumber: 'Daenerys', Specialty: null, },
    { id: 6,Id: 6, FullName: 'Melisandre', Email: "email.mail@gmail.com", PhoneNumber: null, Specialty: 150, },
    { id: 7,Id: 7, FullName: 'Clifford', Email: "email.mail@gmail.com", PhoneNumber: 'Ferrara', Specialty: 44, },
    { id: 8,Id: 8, FullName: 'Frances', Email: "email.mail@gmail.com", PhoneNumber: 'Rossini', Specialty: 36, },
    { id: 9,Id: 9, FullName: 'Roxie', Email: "email.mail@gmail.com", PhoneNumber: 'Harvey', Specialty: 65, },
];

export default function OrgnizationTable() {
    const [data,loading]=useGet(config.OrgnizationOpportunity)
    return (
        <div className="table-ornization" style={{ height: "70vh", display: "flex", alignItems: "center" }}>
            <DataGrid
                rows={data && data ||rows}
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