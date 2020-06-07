import { createSelector } from 'reselect';
import { AppState } from '@/store';

export const selectCounter = (state: AppState) => state.counter;
