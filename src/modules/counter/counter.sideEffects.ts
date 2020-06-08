import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSomething = createAsyncThunk(
    'counter/fetchSomething',
    async (limit: number, thunkAPI) => {
        try {
            const response: Body = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
            );

            return await response.json();
        } catch (error) {
            return { error };
        }
    }
);
