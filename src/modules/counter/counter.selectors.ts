import { createSelector } from 'reselect';
import { AppState } from '@/store';

export const selectCounter = (state: AppState) => state.counter;

export const selectCounterFetchedData = createSelector(
    selectCounter,
    (counter) => counter.fetchedData
);

export const selectCounterValue = createSelector(
    selectCounter,
    (counter) => counter.counterValue
);
