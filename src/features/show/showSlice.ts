import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import debounce from 'debounce-promise';
import { initialState } from './initialState';

// Generates pending, fulfilled and rejected action types
export const fetchShowBySearchKeyword = createAsyncThunk(
  'shows/fetchShowBySearchKeyword',
  debounce(async (keyword: string, thunkAPI) => {
    const response = await axios
      .get(`https://api.tvmaze.com/search/shows?q=${keyword}`)
      .then((response) => response.data);
    return response;
  }, 400)
);

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShowBySearchKeyword.pending, (state) => {
      state.loading = true;
      state.status = 'pending';
    });
    builder.addCase(
      fetchShowBySearchKeyword.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.show = action.payload;
        state.error = '';
        state.status = 'idle';
      }
    );
    builder.addCase(fetchShowBySearchKeyword.rejected, (state, action) => {
      state.loading = false;
      state.show = initialState.show;
      if (action.payload) {
        // FOR TESTING ERROR HANDLING
        state.error = action?.payload;
      } else {
        state.error = action.error.message || 'Something went wrong';
      }

      state.status = 'failed';
    });
  }
});

export default showSlice.reducer;
