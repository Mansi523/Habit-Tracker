import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import List from './Components/List/List';
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect} from 'react';
import { fetchHabit } from './Redux/Reducer/habitlist';
function App() {
  const [Modal,setModal] = useState(false);
  const dispatch = useDispatch(fetchHabit);
  const{habit}=useSelector((state)=>state.habitReducer);
  
  const handleModal = ()=>{
   setModal(!Modal);
   console.log(Modal);
  }
useEffect(()=>{
dispatch(fetchHabit());
},[dispatch])
  console.log("new",habit);
  return (
    <>
<Navbar/>


{
   habit?.length>0?
   <List handleModal={handleModal}
   Modal={Modal}
   setModal={setModal}
   />:<Main
   handleModal={handleModal}
   Modal={Modal}
   setModal={setModal}
   />

}
  
    </>
  );
}

export default App;
