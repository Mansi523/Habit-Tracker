import React from 'react'
import style from "../List/List.module.css";
import { GiCircle } from "react-icons/gi";
const List = () => {
  return (
    <>
    <div className={style.containerlist}>
     <div className="upperlist">
      <div className="upperContent">
        <span>Walk</span>
         <span>9:00 am</span>
      </div>
      <div className="upperlist">
        <div className="containerupperlist">
          <div className="dailycontent">
            <span>Tue</span>
            <span>Nov</span>
            <span>12</span>
            <GiCircle />
          </div>
          <div className="dailycontent">
            <span>Tue</span>
            <span>Nov</span>
            <span>12</span>
            <GiCircle />
          </div>
          <div className="dailycontent">
            <span>Tue</span>
            <span>Nov</span>
            <span>12</span>
            <GiCircle />
          </div>
          <div className="dailycontent">
            <span>Tue</span>
            <span>Nov</span>
            <span>12</span>
            <GiCircle />
          </div>
          <div className="dailycontent">
            <span>Tue</span>
            <span>Nov</span>
            <span>12</span>
            <GiCircle />
          </div>
          <div className="dailycontent">
            <span>Tue</span>
            <span>Nov</span>
            <span>12</span>
            <GiCircle />
          </div>
          <div className="dailycontent">
            <span>Tue</span>
            <span>Nov</span>
            <span>12</span>
            <GiCircle />
          </div>
          
        </div>
      </div>
      </div>
      <div className="lowerbtns">
        <button>+ Add Habit</button>
        <button>Show Daily</button>
      </div>
   
    </div>
    </>
  )
}

export default List