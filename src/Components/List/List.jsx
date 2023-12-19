import React from 'react'
import style from "../List/List.module.css";
import { GiCircle } from "react-icons/gi";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState,useEffect } from 'react';
import Form from '../Form/Form';
import { useDispatch,useSelector } from 'react-redux';
import {fetchHabit} from "../../Redux/Reducer/habitlist"; 
const List = ({handleModal,setModal,Modal}) => {
  const [Isstatus,setIsstatus] = useState(false);
  const dispatch = useDispatch();
const handleStatus = ()=>{
setIsstatus(!Isstatus);
}

// habit fetched 


useEffect(()=>{
dispatch(fetchHabit());
},[dispatch])
// const{habit,Isloading,Error}=useSelector((state)=>state.habitReducer);
const habit =useSelector((state)=>state.habitReducer);

console.log(habit,"[][]][]--");
  return (
    <>
    <div className={style.containerlist}>
      {habit?.map((habit,index)=>(
        <>
      <div className={style.upperlist}>
      <div className={style.upperContent}>
        <span className={style.heading}>{habit.title}</span>
         <span className={style.timing}>{habit.date}</span>
      </div>
      <div className={style.upperlistcontent}>
      {
        Isstatus
        ?
        <div className={style.containerupperlist}>
          {
        habit.day.map((d,index)=>(
            <div className={style.dailycontent}>
            <span className={style.days}>{d.day}</span>
            <span className={style.months}>{d.date}</span>
            <div className={style.icons}>
            <GiCircle fontSize={20}/>
            </div>
          </div>

           ))

          }

        <div className={style.deletediv}>
        <RiDeleteBin6Line fontSize={20}/>
        </div>
      </div>
      :  
      <div className={style.containermonthly}>
          <div className={style.datemonthly}>
            <span className={style.monthspan}>{habit.day[0].date}</span>
          </div>
          <div className={style.discrptionmonthly}>
            <span>{habit.description}</span>
          </div>
          <div className={style.iconsformonthly}>
          <div className={style.iconedit}>
          <MdOutlineModeEdit fontSize={20} />
          </div>
          <div className={style.iconedit}>
          <RiDeleteBin6Line fontSize={20} />
          </div>
          </div>
        </div>
      } 
       
      </div>
      </div>
      
      <div className={style.lowerbtns}>
        <button onClick={handleStatus}>Show Daily</button>
      </div>

      </>
        ))
      }


      {/* add habit button */}

      <div className={style.lowerbtns2}>
        <button onClick={handleModal}>+ Add Habit</button>
      </div>
    </div>
    { Modal &&
    <Form handleModal={handleModal}
          setModal={setModal}
    />

   }
    </>
  )
}

export default List

// [
// {
//  day:mondayl,
//  status:neutral,
    //  date:xyz,

// }

// ]