import React from 'react'
import style from "../List/List.module.css";
import {useDispatch} from "react-redux";
import { useState, useEffect } from 'react';
import {handleAddHabit} from "../../Redux/Reducer/habitlist";
import Swal from 'sweetalert2';
import {editHabit} from "../../Redux/Reducer/habitlist";
const Form = ({handleModal,setModal,Edit,setEdit}) => {
  const dispatch = useDispatch();
  const [Title,setTitle]=useState("");  
  const [Discription,setDiscription]=useState("");


  useEffect(()=>{
    if(Edit){
      setTitle(Edit.title);
      setDiscription(Edit.description);
    }
  },[Edit])

  const updateHabit =()=>{
    const data = {
      ...Edit,title:Title,description:Discription,
    }
  dispatch(editHabit(data));
  setTitle("");
  setDiscription("");
  setEdit(null);
  handleModal();
  }

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
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[dayIndex];
      }
      
      function formatDate(date) {
        const dayOfMonth = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

// function for handling cancel function
const cancelHabit=()=>{
  setTitle("");
  setDiscription("");
  setEdit(null);
  handleModal();
}

  return (
    <div className={style.Modalform}>
    <div className={style.overlay} >
      <div className={style.inputs}>
      <input className={style.inputfield} type ="text" value={Title} placeholder='Enter Habit title' onChange={(e)=>setTitle(e.target.value)}/>
      <input className={style.inputfield} type ="text" value={Discription} placeholder='Description' onChange={(e)=>setDiscription(e.target.value)}/>
      </div>
    <div className={style.btnsdiv}>
     <button className={style.cancelmodal}  onClick={()=>{Edit?cancelHabit():handleModal()}}>Cancel</button>
     <button className={style.savemodal} onClick={()=>{Edit?updateHabit():handleSave()}}>{Edit?"Update":"Save"}</button>
     </div>
    </div>
 </div>
  )
}

export default Form
