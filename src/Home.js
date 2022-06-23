import React, { useState } from 'react';
import styled from "styled-components";
import AddStudent from './AddStudent';
import Popup from './Popup';
import StudentTable from "./StudentTable";

function Home() {

    const [openPopup1, setOpenPopup1] = useState(false);
    const [openPopup2, setOpenPopup2] = useState(false);
    const [student, setStudent] = useState();
  return (
    <Container>
        <div className="main">
    <div className="header">
      <span>Students</span>
      <button className="btn1" onClick={()=>{setOpenPopup1(true)}}>+ADD</button>
    </div>
    <div className="studenttbl">
    <StudentTable openPopup= {openPopup2}
      setOpenPopup= {setOpenPopup2}
      setStudent={setStudent} />
    </div>
 
    
      
     
       
        
        <Popup
      openPopup= {openPopup1}
      setOpenPopup= {setOpenPopup1}
      >
         <AddStudent title="Add Student" student={false}  url1='no' setOpenPopup= {setOpenPopup1} />

        </Popup>
        <Popup
      openPopup= {openPopup2}
      setOpenPopup = {setOpenPopup2}
      >
         <AddStudent title="Edit Student" url1="null" setOpenPopup= {setOpenPopup2} student={student} />

        </Popup>
       
       </div>
    </Container>  
  );
}

export default Home;

const Container = styled.div`
height:100%;
width:100%;
.main{
    margin: 0 80px;

    .studenttbl{
        border: 1px solid #d3d6db;
        border-radius: 25px;
    }
}

  .header{
    display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 70px 0 50px 0;
   font-size: 30px;

    .btn1{
      background-color: #2ca4d8;
      border: none;
      font-size: 16px;
      color:white;
      border-radius: 10px;
      padding: 12px 12px 12px 18px;
      //margin: 20px 0 0 350px;
      cursor: pointer;
  }
  .btn1:hover{
    background-color: #32baf5;
  }
  }






`

