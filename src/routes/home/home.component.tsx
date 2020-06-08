import React from 'react';
import { Container } from './home.styles';
import { useDispatch, useSelector } from '@/store';
import { counterActions } from '@/modules/counter/counter.redux';
import {
    selectCounterFetchedData,
    selectCounterValue,
} from '@/modules/counter/counter.selectors';
import { fetchSomething } from '@/modules/counter/counter.sideEffects';

interface Props {}

export const Home = () => {
    const dispatch = useDispatch();
    const fetchedDataFromStore = useSelector(selectCounterFetchedData);
    const counterValue = useSelector(selectCounterValue);

    console.log('fetchedDataFromStore: ', fetchedDataFromStore);

    const handleOnClick = async () => {
        const fetchedDataFromHere = await dispatch(fetchSomething(2));
        console.log('fetchedDataFromHere: ', fetchedDataFromHere);
        dispatch(counterActions.increment());
    };

    return (
        <Container>
            <button onClick={handleOnClick}>Download</button>
            <div>{counterValue}</div>
            <hr />
            <section>{JSON.stringify(fetchedDataFromStore)}</section>
        </Container>
    );
};
