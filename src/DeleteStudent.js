import React from 'react'
import styled from 'styled-components';
import axios from 'axios';


function DeleteStudent(props) {
 const { setOpenPopup, student } = props;


 
 

  const onSubmit = async (event)=>{
    event.preventDefault();
    console.log(student._id);

     await axios({
      method: 'delete',
      url: `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-btquy/endpoint/delete/student/data?secret=tanmoy&id=${student._id}`,
      headers: {}, 
      data: {
      }
    });
    console.log("delete");
    setOpenPopup(false);
  }


  return (
   <Container>
      <div className="form">
        <form onSubmit={onSubmit}>
        <div className="" style={{fontSize:"26px",marginBottom:"30px",color:"black"}}>
        <span>Remove student</span>
        </div><hr />
        <div className="" style={{margin:"30px 0 30px 0", color:"black",fontSize:"24px"}}>
        <span className=''>Are you sure you want to remove the current student from the list?</span>
        </div>
        <div className="" style={{margin:"20px 0 30px 0", display:"flex", flexDirection:"column"}}>
        <span className='title'>STUDENT NAME</span>
        <span className='' style={{margin:"8px 0 0px 0"}}><i>{student.name}</i></span>
        </div>
        <div className="" style={{margin:"20px 0 30px 0", display:"flex", flexDirection:"column"}}>
        <span className='title'>CLASS</span>
        
        <span className='' style={{margin:"8px 0 0px 0"}}><i>{`${student.clas} ${(student.clas>=4)?'th':(student.clas===1)?'st':(student.class===2)?'nd':'rd'}`}</i></span>
        </div><hr />

        
        <button className="btn1" type='submit'>REMOVE</button>
       


        </form>
      </div>

   </Container>
  )
}

export default DeleteStudent;

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
          background-color: #f24643;
          border: none;
          font-size: 16px;
          color:white;
          border-radius: 10px;
          padding: 12px;
          margin: 20px 0 0 350px;
          cursor: pointer;
      }
      .btn1:hover{
        background-color: #e61f1f;
      }

     

  }


`