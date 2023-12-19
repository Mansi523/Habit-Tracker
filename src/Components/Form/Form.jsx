import React from 'react'
import style from "../List/List.module.css";
import {useDispatch} from "react-redux";
import { useState } from 'react';
import {handleAddHabit} from "../../Redux/Reducer/habitlist";
import Swal from 'sweetalert2';
const Form = ({handleModal,setModal}) => {
  const dispatch = useDispatch();
  const [Title,setTitle]=useState("");  
  const [Discription,setDiscription]=useState("");
  const handleSave=()=>{
      const habitData = [];
      
      for (let i = 0; i < 7; i++) {
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + i);
    
        habitData.push({
          date: formatDate(nextDate),
          day: getDayName(nextDate.getDay()),
          status:"nutral",
          
        });
      }
    
      console.log(habitData);
     
      function getDayName(dayIndex) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayIndex];
      }
      
      function formatDate(date) {
        const dayOfMonth = date.getDate();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = monthNames[date.getMonth()];
        
        return `${dayOfMonth} ${monthName}`;
      }
   const habit ={title:Title,
    description:Discription,
    day:habitData,
  }     
    dispatch(handleAddHabit(habit));
    Swal.fire("SweetAlert2 is working!");
    setTitle("");
    setDiscription("");
    setModal(false);
  }
  return (
    <div className={style.Modalform}>
    <div className={style.overlay} >
      <div className={style.inputs}>
      <input className={style.inputfield} type ="text" value={Title} placeholder='Enter Habit title' onChange={(e)=>setTitle(e.target.value)}/>
      <input className={style.inputfield} type ="text" value={Discription} placeholder='Description' onChange={(e)=>setDiscription(e.target.value)}/>
      </div>
    <div className={style.btnsdiv}>
     <button className={style.cancelmodal} onClick={handleModal}>Cancel</button>
     <button className={style.savemodal} onClick={handleSave}>Save</button>
     </div>
    </div>
 </div>
  )
}

export default Form
