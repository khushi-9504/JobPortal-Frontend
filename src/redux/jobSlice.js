import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
    singleJob: null,
    allAdminJobs: [],
    searchJobByText: "",
    allAppliedJobs: [],
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
    setAllAdminJobs(state, action) {
      state.allAdminJobs = action.payload;
    },
    searchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs(state, action) {
      state.allAppliedJobs = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setSearchedQuery,
  setAllAdminJobs,
  searchJobByText,
  setAllAppliedJobs,
} = jobSlice.actions;

export default jobSlice.reducer;
