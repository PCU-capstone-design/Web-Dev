import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'; //npm install @mui/x-data-grid
import {useEffect, useState} from 'react';

// 미완성
const columns = [
    { field: 'rank', headerName: '순위', width: 200 },
    {
        field: 'firstName',
        headerName: '단어',
        width: 200,
        editable: false,
    },
    {
        field: 'age',
        headerName: '조회수',
        type: 'number',
        width: 200,
        editable: false,
    },

];


const rows = [
    { id: 1,  firstName: 'Jon', age: 35, rank: null },
    { id: 2,  firstName: 'Cersei', age: 42, rank: null },
    { id: 3,  firstName: 'Jaime', age: 45, rank: null },
    { id: 4,  firstName: 'Arya', age: null, rank: null },
    { id: 5,  firstName: 'Daenerys', age: 100, rank: null  },
    { id: 6,  firstName: 'hi', age: 150, rank: null },
    { id: 7, firstName: 'Ferrara', age: 44, rank: null },
    { id: 8,  firstName: 'Rossini', age: 36, rank: null },
    { id: 9,  firstName: 'Harvey', age: 65, rank: null },
    { id: 10,  firstName: 'a', age: 35, rank: null },
    { id: 11,  firstName: 'b', age: 42, rank: null },
    { id: 12,  firstName: 'c', age: 45, rank: null },
    { id: 13,  firstName: 'd', age: null, rank: null },
    { id: 14,  firstName: 'e', age: 100, rank: null  },
    { id: 15,  firstName: 'f', age: 150, rank: null },
    { id: 16, firstName: 'g', age: 44, rank: null },
    { id: 17,  firstName: 'h', age: 36, rank: null },
    { id: 18,  firstName: 'i', age: 65, rank: null },
];






export default function Ranking() {

    const [id, SetId] = useState(   []);
    const a= []


    const Rank = () => {
        for(let i = 0; i < rows.length; i++)
        {

            a.push(i);
            console.log(a);
            //rows[i].rank = i;
            rows[i].rank = i;
        }
        SetId([a, ...id]);
        console.log(id)
    }
    useEffect(() => {
        Rank();

    }, []);
    console.log(id);
    return (
        <div style={{  height: 800, width: '55%', margin:"20px auto"}}

        >

            <DataGrid
                rows={rows}

                columns={columns}
                pageSize={12}
                rowsPerPageOptions={[4]}

                disableSelectionOnClick
            />

        </div>
    );
}