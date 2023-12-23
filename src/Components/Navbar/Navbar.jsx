import React from 'react'
// imported css for the navbar
import style from '../Navbar/Navbar.module.css';
// exported the navbar component
export const Navbar = () => {
  return (
 <>
 {/* navbar of the app */}
 <div className={style.NavContent}>
    <div className={style.heading}><span>Habit Tracker</span></div>
 </div>
 
 </>
  )
}
