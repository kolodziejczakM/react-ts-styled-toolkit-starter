import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { fetchSomething } from './counter.sideEffects';

interface CounterState {
    counterValue: number;
    fetching: boolean;
    error: SerializedError | null;
    fetchedData: Record<string, unknown> | null;
}

export const { reducer: counterReducer, actions: counterActions } = createSlice(
    {
        name: 'counter',
        initialState: {
            counterValue: 0,
            fetching: false,
            error: null,
            fetchedData: null,
        } as CounterState,
        reducers: {
            increment: (state) => ({
                ...state,
                counterValue: state.counterValue + 1,
            }),
            decrement: (state) => ({
                ...state,
                counterValue: state.counterValue - 1,
            }),
        },
        extraReducers: (builder) => {
            builder.addCase(fetchSomething.pending, (state) => {
                return { ...state, fetching: true };
            });
            builder.addCase(fetchSomething.fulfilled, (state, action) => {
                return {
                    ...state,
                    fetching: false,
                    error: null,
                    fetchedData: action.payload,
                };
            });
            builder.addCase(fetchSomething.rejected, (state, action) => {
                return {
                    ...state,
                    fetching: false,
                    error: action.error,
                };
            });
        },
    }
);
