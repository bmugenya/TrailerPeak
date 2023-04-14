import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMagnet } from './magnetApi'


export const fetchMagnetAsync = createAsyncThunk(
    '/magnet',
    async ({}, {rejectWithValue }) => {
        try {
            const response = await fetchMagnet();
            return response;
        } catch(error) {
            console.log(error)
            if (error) {
                return rejectWithValue(error)
            } else {
                return rejectWithValue(error)
            }
        }
    }
);