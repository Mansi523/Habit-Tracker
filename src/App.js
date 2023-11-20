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
  return (
    <>
<Navbar/>

<Main/>
    {/* <List handleModal={handleModal}
    Modal={Modal}
    setModal={setModal}
    /> */}
    </>
  );
}

export default App;
