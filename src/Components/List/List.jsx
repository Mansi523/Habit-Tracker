import React from 'react'
import style from "../List/List.module.css";
import { GiCircle } from "react-icons/gi";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from 'react';
const List = ({handleModal,setModal,Modal}) => {
  const [Isstatus,setIsstatus] = useState(false);
const handleStatus = ()=>{
setIsstatus(!Isstatus);
}
  return (
    <>
    <div className={style.containerlist}>
     <div className={style.upperlist}>
      <div className={style.upperContent}>
        <span className={style.heading}>Walk</span>
         <span className={style.timing}>9:00 am</span>
      </div>
      <div className={style.upperlistcontent}>
      {
        Isstatus
        ?
        <div className={style.containerupperlist}>
        <div className={style.dailycontent}>
          <span className={style.days}>Tue</span>
          <span className={style.months}>1 Nov</span>
          <div className={style.icons}>
          <GiCircle fontSize={20}/>
          </div>
        </div>
        <div className={style.dailycontent}>
          <span className={style.days}>Wed</span>
          <span className={style.months}>2 Nov</span>
         <div className={style.icons}>
          <GiCircle fontSize={20}/>
          </div>
        </div>
        <div className={style.dailycontent}>
          <span className={style.days}>Thu</span>
          <span className={style.months}>3 Nov</span>
          <div className={style.icons}>
          <GiCircle fontSize={20}/>
          </div>
        </div>
        <div className={style.dailycontent}>
          <span className={style.days}>Fri</span>
          <span className={style.months}>4 Nov</span>
          <div className={style.icons}>
          <GiCircle fontSize={20}/>
          </div>
        </div>
        <div className={style.dailycontent}>
          <span className={style.days}>Sat</span>
          <span className={style.months}>5 Nov</span>
          <div className={style.icons}>
          <GiCircle fontSize={20}/>
          </div>
        </div>
        <div className={style.dailycontent}>
          <span className={style.days}>Sun</span>
          <span className={style.months}>6 Nov</span>
          <div className={style.icons}>
          <GiCircle fontSize={20}/>
          </div>
        </div>
        <div className={style.dailycontent}>
          <span className={style.days}>Mon</span>
          <span className={style.months}>7 Nov</span>
          <div className={style.icons}>
          <GiCircle fontSize={20}/>
          </div>
        </div>
        <div className={style.deletediv}>
        <RiDeleteBin6Line fontSize={20}/>
        </div>
      </div>
      :  
      <div className={style.containermonthly}>
          <div className={style.datemonthly}>
            <span className={style.monthspan}>Nov 3</span>
          </div>
          <div className={style.discrptionmonthly}>
            <span>walk at 9</span>
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
        <button onClick={handleModal}>+ Add Habit</button>
        <button onClick={handleStatus}>Show Daily</button>
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

export default List