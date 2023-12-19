import React from 'react'
import style from '../Main/Main.module.css';
import { useState } from 'react';
import Form from '../Form/Form';
const Main = () => {
 const [Modal,setModal] = useState(false);
 const handleModal = ()=>{
  setModal(!Modal);
  console.log(Modal);
 }

  return (
   <>
  <div className={style.containermain}  onClick={handleModal}>
   <div className={style.content}>
    <p>Looks like you aren't tracking any habits yet, so...<br/>
what do you want to start doing every day? :)</p>
     
   </div>
 
   <div className={style.btn}>
    <button onClick={handleModal}>+ Add Habit</button>
   </div>
  </div>
 { Modal &&
   <Form handleModal={handleModal}/>
   }
   </>
  )
}

export default Main