import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import List from './Components/List/List';
import { useState } from 'react';
function App() {
  const [Modal,setModal] = useState(false);
  const handleModal = ()=>{
   setModal(!Modal);
   console.log(Modal);
  }
  const arr = [1,2,3,4,5];

  return (
    <>
<Navbar/>


{
   arr.length>0?
   <List handleModal={handleModal}
   Modal={Modal}
   setModal={setModal}
   />:<Main/>

}
  
    </>
  );
}

export default App;
