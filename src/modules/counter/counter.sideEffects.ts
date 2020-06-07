import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchAction = createAction('fetch');

export const fetchEffect = createAsyncThunk(
    fetchAction.type,
    async (limit: number, thunkAPI) => {
        try {
            const response: Body = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
            );

            const { data } = await response.json();
            return { data };
        } catch (error) {
            return { error };
        }
    }
);
