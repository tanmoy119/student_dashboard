import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
//import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props ;
  return (
    <Dialog open={openPopup}>
      
        <DialogC>
          
          {children}
          <button className="btn" onClick={()=>{setOpenPopup(false)}}>CANCEL</button>
          
        </DialogC>
        
    </Dialog>
   
  )
}

export default Popup;


const DialogC=styled(DialogContent)`

.btn{
  background-color: white;
  border: 1px solid #2ca4d8;
  font-size: 16px;
  color: #2ca4d8;
  border-radius: 10px;
  padding: 11px;
  position: absolute;
  left:280px;
  bottom: 45px;
  cursor: pointer;
}

`



