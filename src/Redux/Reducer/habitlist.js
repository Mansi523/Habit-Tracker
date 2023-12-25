// imported createSlice and createAsyncThunk from redux toolkit.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// imported db from firebase.
import { db } from "../../Firebase";
// imported collection,addDoc,onSnapshot,deleteDoc,doc,updateDoc from firebase firestore.
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// function for adding habit -[post]

export const handleAddHabit = createAsyncThunk(
  "habittracker/handleAddHabit",
  async (habit) => {
    try {
      const data = {
        title: habit.title,
        description: habit.description,
        show: false,
        target: 0,
        date: new Date().toLocaleTimeString(),
        day: habit.day,
      };
      const docRef = await addDoc(collection(db, "habit"), data);
      console.log("Document written with ID: ", docRef.id);

      return { ...data, id: docRef.id };
    } catch (error) {
      throw new Error(error);
    }
  }
);

// functin for fetching habit -[get]

export const fetchHabit = createAsyncThunk(
  "habittracker/fetchHabit",
  async () => {
    try {
      const habit = await new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(collection(db, "habit"), (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log("fetchhabit", data);
          resolve(data);
        });

        // Handle errors or cleanup here
      });

      return habit;
    } catch (error) {
      throw new Error(error);
    }
  }
);

// function for deleting habit -[delete]
export const deleteHabit = createAsyncThunk(
  "habittracker/deleteHabit",
  async (id) => {
    try {
      console.log("delete", id);
      await deleteDoc(doc(db, "habit", id));
      return id;
    } catch (error) {
      throw new Error(error);
    }
  }
);

// funtion for showing one habit at a time -[update].
export const showHabit = createAsyncThunk(
  "habittracker/showHabit",
  async (habit) => {
    console.log("showhabit", habit);
    try {
      const washingtonRef = doc(db, "habit", habit.id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        show: !habit.show,
      });
      return habit;
    } catch (error) {
      throw new Error(error);
    }
  }
);

// funtion for editing habit-[update].
export const editHabit = createAsyncThunk(
  "habittracker/editHabit",
  async (habit) => {
    try {
      console.log("**", habit);
      const washingtonRef = doc(db, "habit", habit.id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        title: habit.title,
        description: habit.description,
      });
      return habit;
    } catch (error) {
      throw new Error(error);
    }
  }
);

// funtion for changing the status of the habit-[update].
export const selectHabit = createAsyncThunk(
  "habittracker/selectHabit",
  async (habit) => {
    try {
      console.log("kuch ajib", habit);
      const washingtonRef = doc(db, "habit", habit.id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        day: habit.updateDay,
        target: habit.target,
      });
      return habit;
    } catch (error) {
      throw new Error(error);
    }
  }
);

// initialState.
const initialState = {
  habit: [],
  Isloading: false,
  Error: null,
};

// created habit from createSlice.
const habit = createSlice({
  name: "habittracker",
  initialState,
  reducers: {},
  // extrareducer for handild the api calls
  extraReducers: (builder) => {
    // buider function for handleAddHabit

    builder.addCase(handleAddHabit.pending, (state, action) => {
      state.Isloading = true;
      state.Error = null;
    });
    builder.addCase(handleAddHabit.fulfilled, (state, action) => {
      state.Isloading = false;
      state.habit = [...state.habit, action.payload];
      state.Error = null;
    });
    builder.addCase(handleAddHabit.rejected, (state, action) => {
      state.Isloading = true;
      state.Error = action.error;
    });

    // builder function for fetchHabit with three states pending,fulfilled and rejected.

    builder.addCase(fetchHabit.pending, (state, action) => {
      state.Isloading = true;
      state.Error = null;
    });
    builder.addCase(fetchHabit.fulfilled, (state, action) => {
      state.Isloading = false;
      state.Error = null;
      state.habit = action.payload;
    });
    builder.addCase(fetchHabit.rejected, (state, action) => {
      state.Isloading = true;
      state.Error = action.error;
    });

    // builder function for deleteHabit with three states pending,fulfilled and rejected.

    builder.addCase(deleteHabit.pending, (state, action) => {
      state.Isloading = true;
      state.Error = null;
    });
    builder.addCase(deleteHabit.fulfilled, (state, action) => {
      state.Isloading = false;
      state.Error = null;
      state.habit = state.habit.filter((h, i) => h.id !== action.payload);
    });
    builder.addCase(deleteHabit.rejected, (state, action) => {
      state.Isloading = true;
      state.Error = action.error;
    });

    // builder function for showHabit with three states pending,fulfilled and rejected.

    builder.addCase(showHabit.pending, (state, action) => {
      state.Isloading = true;
      state.Error = null;
    });
    builder.addCase(showHabit.fulfilled, (state, action) => {
      state.Isloading = false;
      state.Error = null;
      state.habit = state.habit.map((h, i) => {
        if (h.id === action.payload.id) {
          return { ...h, show: !action.payload.show };
        }
        return h;
      });
    });
    builder.addCase(showHabit.rejected, (state, action) => {
      state.Isloading = true;
      state.Error = action.error;
    });

    // builder function for editHabit with three states pending,fulfilled and rejected.

    builder.addCase(editHabit.pending, (state, action) => {
      state.Isloading = true;
      state.Error = null;
    });
    builder.addCase(editHabit.fulfilled, (state, action) => {
      state.Isloading = false;
      state.Error = null;
      state.habit = state.habit.map((h, i) => {
        if (h.id === action.payload.id) {
          return {
            ...h,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return h;
      });
    });
    builder.addCase(editHabit.rejected, (state, action) => {
      state.Isloading = true;
      state.Error = action.error;
    });

    // builder function for selectHabit with three states pending,fulfilled and rejected.

    builder.addCase(selectHabit.pending, (state, action) => {
      state.Isloading = true;
      state.Error = null;
    });
    builder.addCase(selectHabit.fulfilled, (state, action) => {
      state.Isloading = false;
      state.Error = null;
      state.habit = state.habit.map((h, i) => {
        if (h.id === action.payload.id) {
          return {
            ...h,
            day: action.payload.updateDay,
            target: action.payload.target,
          };
        }
        return h;
      });
    });
    builder.addCase(selectHabit.rejected, (state, action) => {
      state.Isloading = true;
      state.Error = action.error;
    });
  },
});

export const habitReducer = habit.reducer;
