import { createSlice } from '@reduxjs/toolkit';
import { fetchEffect, fetchAction } from './counter.sideEffects';

interface CounterState {
    counterValue: number;
    fetching: boolean;
    error: Record<string, unknown> | null;
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
            builder.addCase(fetchAction.type, (state) => {
                return state;
            });
            builder.addCase(fetchEffect.pending, (state) => {
                return { ...state, fetching: true };
            });
            builder.addCase(fetchEffect.fulfilled, (state, action: any) => {
                return {
                    ...state,
                    fetching: false,
                    error: null,
                    fetchedData: action.payload.data,
                };
            });
            builder.addCase(fetchEffect.rejected, (state, action: any) => {
                return {
                    ...state,
                    fetching: false,
                    error: action.payload.error,
                };
            });
            // [fetchEffect.pending.type]: (state) => ({
            //     ...state,
            //     fetching: true,
            // }),
            // [fetchEffect.fulfilled.type]: (state) => ({
            //     ...state,
            //     fetching: false,
            //     error: null,
            // }),
            // [fetchEffect.rejected.type]: (state, action) => ({
            //     ...state,
            //     fetching: false,
            //     error: action.error,
            // }),
        },
    }
);
