import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
let url;


function AddStudent(props) {
 const {title, setOpenPopup, url1, student } = props;

 if (url1=="null") {
  console.log("hit");
   url=`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-btquy/endpoint/edit/student/data?secret=tanmoy&id=${student._id}`                    
 }else{
  url=`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-btquy/endpoint/post/student/data?secret=tanmoy`
 }

  const [data,setData] = useState({
    name:(student.name)?student.name:"",
    clas:(student.clas)?student.clas:"",
    score:(student.score)?student.score:"",
    result:(student.result)?student.result:"",
    grade:student.grade?student.grade:""

  })

  const inputEvent = (R)=>{
    
    const {name,value} = R.target;
  
    setData((prevalue)=>{
      
      
      return {
          ...prevalue,
          [name]: value

      };
    })

    setData((pv)=>{
      let result="-"
      let grade="-"
      
      if (pv.score<=30) {
         result="Failed";
         grade="Poor";

      }else if (pv.score<=75) {
         result="Passed";
         grade="Average";

      } else {
         result="Passed";
         grade="Excelent";
      }

      return {
        ...pv,
        [name]: value,
        result:result,
        grade:grade

    };
    })
  }

  const onSubmit = async (event)=>{
    event.preventDefault();
   

     await axios({
      method: 'post',
      url: url,
      headers: {}, 
      data: {
        name: data.name,
        clas: data.clas,
        result: data.result,
        score: data.score,
        grade: data.grade
      }
    });
    console.log("submit");
    setOpenPopup(false);
  }


  return (
   <Container>
      <div className="form">
        <form onSubmit={onSubmit}>
        <div className="" style={{fontSize:"24px",marginBottom:"30px"}}>
        <span>{title}</span>
        </div><hr />
        <div className="" style={{margin:"30px 0 30px 0"}}>
        <span className='title'>STUDENT NAME*</span>
        <input onChange={inputEvent} type="text" name='name' value={data.name} required />
        </div>
        <div className="" style={{margin:"20px 0 30px 0"}}>
        <span className='title'>CLASS*</span>
        <input onChange={inputEvent} type="number" name='clas' value={data.clas} required min="1" max="12" />
        <span className='title'><i>Please input value between 1 & 12</i></span>
        </div>
        <div className="" style={{margin:"20px 0 30px 0"}}>
        <span className='title'>SCORE*</span>
        <input onChange={inputEvent} type="number" name='score' value={data.score} required min="0" max="100" />
        <span className='title'><i>Please input value between 0 & 100</i></span>
        </div>

        <div className="" style={{margin:"30px 0 20px 0",display:"flex", flexDirection:"column"}}>
        <span className='title'>RESULT</span>
        <span className={(data.result==="Passed")?"Pvalue":"Fvalue"}>{data.result}</span>
        </div>

        <div className="" style={{margin:"10px 0 30px 0",display:"flex", flexDirection:"column"}}>
        <span className='title'>GRADE</span>
        <span className='Gvalue'>{data.grade}</span>
        </div><hr />

        
        <button className="btn1" type='submit'>CONFIRM</button>
       


        </form>
      </div>

   </Container>
  )
}

export default AddStudent;

const Container = styled.div`
width: 530px;
//height: 800px;
background-color: white;
border-radius: 20px;

  .form{
      padding: 25px 25px;
      
     
      input{
        margin: 10px 0 0 0;
        border: 1px solid #7f878a;
        border-radius: 10px;
        width: 100%;
        height: 30px;
        font-size: 16px;
        color: #242424;
        background-color: none;
      }
      .title{
        color: #7f878a;
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
      .Gvalue{
        color:#2cbf6e;
      }
      .btn1{
          background-color: #2ca4d8;
          border: none;
          font-size: 16px;
          color:white;
          border-radius: 10px;
          padding: 12px;
          margin: 20px 0 0 350px;
          cursor: pointer;
      }
      .btn1:hover{
        background-color: #32baf5;
      }

     

  }


`
