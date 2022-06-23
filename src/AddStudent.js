import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
let url;


function AddStudent(props) {
 const {title, setOpenPopup, url1, student } = props;
 //console.log(student._id);
 if (url1=="null") {
  console.log("hit");
   url=`http://localhost:5000/post/edit/data?key=tanmoy&id=${student._id}`                    
 }else{
  url=`http://localhost:5000/post/student/data?key=tanmoy`
 }

  const [data,setData] = useState({
    name:(student.name)?student.name:"",
    class:(student.class)?student.class:"",
    score:(student.score)?student.score:"",
    result:(student.result)?student.result:"",
    grade:student.grade?student.grade:""

  })

  const inputEvent = (R)=>{
    
    const {name,value} = R.target;
  
    setData((prevalue)=>{
      
      //console.log(prevalue);
      return {
          ...prevalue,
          [name]: value

      };
    })

    setData((pv)=>{
     // console.log(pv);
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
    console.log(url);

     await axios({
      method: 'post',
      url: url,
      headers: {}, 
      data: {
        name: data.name,
        class: data.class,
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
        <input onChange={inputEvent} type="text" name='name' value={data.name} />
        </div>
        <div className="" style={{margin:"20px 0 30px 0"}}>
        <span className='title'>CLASS*</span>
        <input onChange={inputEvent} type="text" name='class' value={data.class} />
        <span className='title'><i>Please input value between 1 & 12</i></span>
        </div>
        <div className="" style={{margin:"20px 0 30px 0"}}>
        <span className='title'>SCORE*</span>
        <input onChange={inputEvent} type="number" name='score' value={data.score} />
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
      //background-color: yellow;
     
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