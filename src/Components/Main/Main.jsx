import React from 'react'
// imported the css for the main.
import style from '../Main/Main.module.css';
// imported form component
import Form from '../Form/Form';

const Main = ({Modal,setModal,handleModal}) => {

  return (
   <>
{/* front page of the habit tracker */}
  <div className={style.containermain} onClick={handleModal}>
   <div className={style.content}>
    <p>Looks like you aren't tracking any habits yet, so...<br/>
what do you want to start doing every day? :)</p>
     
   </div>
 {/* add habit button for adding habits */}
   <div className={style.btn}>
    <button onClick={handleModal}>+ Add Habit</button>
   </div>
  </div>
{/* modal for entering the text and discription */}
 { Modal &&
   <Form handleModal={handleModal}
   setModal={setModal}
   />
 
   }
   </>
  )
}

export default Main