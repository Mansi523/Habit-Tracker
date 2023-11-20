import React from 'react'
import style from '../Main/Main.module.css';
import { useState } from 'react';
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
     <div className={style.Modalform}>
        <div className={style.overlay} >
          <div className={style.inputs}>
          <input className={style.inputfield} type ="text" placeholder='Enter Habit title'/>
          <input className={style.inputfield} type ="text" placeholder='Description'/>
          </div>
        <div className={style.btnsdiv}>
         <button className={style.cancelmodal} onClick={handleModal}>Cancel</button>
         <button className={style.savemodal}>Save</button>
         </div>
        </div>
     </div>
   }
   </>
  )
}

export default Main