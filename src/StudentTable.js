import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';



function StudentTable(props) {
    const {  setOpenPopup2,setOpenPopup3, setStudent} = props;

    const url ='https://ap-south-1.aws.data.mongodb-api.com/app/application-0-btquy/endpoint/get/student/data?secret=tanmoy';
  const [data,setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(url);
      setData(request.data);
      //console.log(request);
    }
    fetchData();
  },[url]);

  const edit = (row)=>{

    setStudent(row);

    setOpenPopup2(true);
  }
  const remove = (row)=>{

    
    setStudent(row);

    setOpenPopup3(true);

  }
  return (
    <Tablecontainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple">
            <TableHead >
                <TableRow style={{backgroundColor:"#f1f4f8" }} >
                    <Tablecell><b> No.</b></Tablecell>
                    <Tablecell><b>Student Name</b></Tablecell>
                    <Tablecell><b>Class</b></Tablecell>
                    <Tablecell><b>Result</b></Tablecell>
                    <Tablecell><b>Score</b></Tablecell>
                    <Tablecell><b>Grade</b></Tablecell>
                </TableRow>
            </TableHead>

            <TableBody>
                {data.map((row,i) => (
                <TableRow className='TR'
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {i+1}
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell >{`${row.clas} ${(row.clas>=4)?'th':(row.clas==1)?'st':(row.clas==2)?'nd':'rd'}`}</TableCell>
                    <TableCell ><span className={(row.result==="Passed")?"Pvalue":"Fvalue"}>{row.result}</span></TableCell>
                    <TableCell >{`${row.score}/100`}</TableCell>
                    <TableCell style={{color:`${(row.grade=="Poor")?"#f24643":(row.grade=="Average")?"#2ca4d8":"#2cbf6e"}`}} >{row.grade}</TableCell>
                    <div className="icon">
                    <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=>{edit(row)}} ><CreateIcon className='C' /></button>
                    <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=>{remove(row)}} ><DeleteOutlineIcon className='D'/></button>
                    </div>

                </TableRow>
                 ))}
            </TableBody>
            

        </Table>
    </Tablecontainer>
)
}

export default StudentTable;

const Tablecontainer = styled(TableContainer)`

.TR:hover{
   background-color:#eaedf1;
   .C{
    opacity: 1;
   }
   .D{
    opacity: 1;
   }
}
.icon{
    position: absolute;
    right:150px;
    //top: 500px;
    .C{
        margin: 10px 7px 0 0 ;
        cursor: pointer;
        color:#2a9dce;
        opacity: 0;
    }
    .C:hover{
        color: #9fd62a;
    }
    .D{
        margin: 10px 7px 0 0 ;
        cursor: pointer;
        color:#2a9dce;
        opacity: 0;
    }
    .D:hover{
        color: #9fd62a;

    }
}

.Pvalue{
    margin: 10px 0;
    width: 50px;
    background-color: #2cbf6e;
    padding: 2px 10px;
    border-radius: 15px;
    color: white;
  }
  .Fvalue{
    margin: 10px 0;
    width: 50px;
    background-color: #bf2c2c;
    padding: 2px 10px;
    border-radius: 15px;
    color: white;
  }

  `

  const Tablecell = styled(TableCell)`
    font-size: 20px;
  `