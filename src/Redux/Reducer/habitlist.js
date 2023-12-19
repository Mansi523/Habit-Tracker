import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {db} from "../../Firebase";
import { collection, addDoc,onSnapshot } from "firebase/firestore"; 
// function for adding habit

export const handleAddHabit = createAsyncThunk("habittracker/handleAddHabit",async(habit)=>{
   
     
        try {
          const docRef = await addDoc(collection(db, "habit"), {
            title:habit.title,
            description:habit.description,
            show:false,
            target:0,
            date:new Date(),
            day:habit.day,
          });
          console.log("Document written with ID: ", docRef);

          return {success:true,
                  message:"created successfully",
          }
        } catch (error) {
          throw new Error(error);
        }
     }
)

// functin for fetching habit

export const fetchHabit = createAsyncThunk("habittracker/fetchHabit", async () => {
  try {
    const habit = await new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(collection(db, "habit"), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        resolve(data);
      });

      // Handle errors or cleanup here
    });

    return habit;
  } catch (error) {
    throw new Error(error);
  }
});



const initialState={
    habit:[],
    Isloading:false,
    Error:null,
};
const habit = createSlice({
     name:"habittracker",
     initialState,
    reducers:{
    
    },
    extraReducers:(builder)=>{
      builder.addCase(handleAddHabit.pending,(state,action)=>{
        state.Isloading=true;
        state.Error=null;
      });
      builder.addCase(handleAddHabit.fulfilled,(state,action)=>{
        state.Isloading=false;
        state.Error=null;
      });
      builder.addCase(handleAddHabit.rejected,(state,action)=>{
        state.Isloading=true;
        state.Error=action.error;
      });


      builder.addCase(fetchHabit.pending,(state,action)=>{
        state.Isloading=true;
        state.Error=null;
      });
      builder.addCase(fetchHabit.fulfilled,(state,action)=>{
        state.Isloading=false;
        state.Error=null;
        state.habit=action.payload;
        console.log("***",action.payload);
      });
      builder.addCase(fetchHabit.rejected,(state,action)=>{
        state.Isloading=true;
        state.Error=action.error;
      });
    }

})

export const habitReducer = habit.reducer;