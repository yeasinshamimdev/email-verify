import { createSlice } from '@reduxjs/toolkit';

export type JobIdState = {
  job_id: string;
};

const initialState: JobIdState = {
  job_id: '',
};

export const bulkSlice = createSlice({
  name: 'bulk',
  initialState,
  reducers: {
    setBulk: (state, action) => {
      state.job_id = action.payload;
    },
  },
});

export const { setBulk } = bulkSlice.actions;

export default bulkSlice.reducer;
