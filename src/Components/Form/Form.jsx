import React from 'react'
// imported css for the list componenet
import style from "../List/List.module.css";
// imported useDispatch from react-redux.
import {useDispatch} from "react-redux";
// imported useState,useEffect from react.
import { useState, useEffect } from 'react';
// imported handleAddHabit.
import {handleAddHabit} from "../../Redux/Reducer/habitlist";
// imported swal from seetalert2
import Swal from 'sweetalert2';
// imported editHabit.
import {editHabit} from "../../Redux/Reducer/habitlist";

const Form = ({handleModal,setModal,Edit,setEdit}) => {
  // created dispatch from useDispatch
  const dispatch = useDispatch();
  // created useState for Title and Discription
  const [Title,setTitle]=useState("");  
  const [Discription,setDiscription]=useState("");

// useEffect for setting the value in setTitle and setDiscription when we click on the edit icon  
  useEffect(()=>{
    if(Edit){
      setTitle(Edit.title);
      setDiscription(Edit.description);
    }
  },[Edit])

  // updateHabit for dispatching editHabit and empting the values in the states 
    
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

  // handleSave for deting the the values date wise and monthwise in the habitlist
  const handleSave=()=>{
      const habitData = [];
      
      for (let i = 0; i < 7; i++) {
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + i);
        habitData.push({
          date: formatDate(nextDate),
          day: getDayName(nextDate.getDay()),
          status:"nutral",
          // currentDate:nextDate,
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
  // modal for entering the text and description.
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
