// imported app.css
import "./App.css";
import { Toaster } from "react-hot-toast";
// imported the navbar components
import { Navbar } from "./Components/Navbar/Navbar";
// imported the main and the list components
import Main from "./Components/Main/Main";
import List from "./Components/List/List";
// imported the useDispatch and the UseSelector from react redux.
import { useDispatch, useSelector } from "react-redux";
// imported useState and useEffect from react.
import { useState, useEffect } from "react";
// imported fetchhabit.
import { fetchHabit } from "./Redux/Reducer/habitlist";
function App() {
  // created useState for Modals and setModal.
  const [Modal, setModal] = useState(false);
  // dispached  fetchhabit from useDispatch.
  const dispatch = useDispatch(fetchHabit);
  // taken habit from useSelector function.
  const { habit } = useSelector((state) => state.habitReducer);
  // handleModal function for the Modal.
  const handleModal = () => {
    setModal(!Modal);
    console.log(Modal);
  };
  // useEffect function for dispatching the fetchHabit and passing dispatch as the function.
  useEffect(() => {
    dispatch(fetchHabit());
  }, [dispatch]);

  return (
    <>
      {/* navbar component */}
      <Navbar />
      {
        //  List and Main components rendered whenever there is habit.length>0.
        habit?.length > 0 ? (
          <List handleModal={handleModal} Modal={Modal} setModal={setModal} />
        ) : (
          <Main handleModal={handleModal} Modal={Modal} setModal={setModal} />
        )
      }

      <Toaster />
    </>
  );
}

export default App;
