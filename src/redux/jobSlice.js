import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
    singleJob: null,
  },

  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
      console.log(action.payload);
    },

    setSingleJob(state, action) {
      state.singleJob = action.payload;
    },
    setSearchedQuery(state, action) {
      state.searchedQuery = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob, setSearchedQuery } = jobSlice.actions;

export default jobSlice.reducer;
