import { createSlice } from '@reduxjs/toolkit'
import { fetchMagnetAsync } from './magnetActions';

const initialState = {
    isLoading: false,
    error: null,
  
};

const magnetSlice = createSlice({
    name: 'magnet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMagnetAsync.pending, (state) => {
                state.isLoading = 'true';
            })
            .addCase(fetchMagnetAsync.fulfilled, (state, { payload }) => {
                state.isLoading = 'false';
            })
            .addCase(fetchMagnetAsync.rejected, (state, { payload }) => {
                state.isLoading = 'false';
                state.error = payload;
            });
    },
});

export default magnetSlice.reducer;
