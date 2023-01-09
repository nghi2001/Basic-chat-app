import { configureStore } from '@reduxjs/toolkit';
import MoneyReducer from '../reducer/Money';
import RoomReducer from '../reducer/Room';

export const store = configureStore({
    reducer: {
        MoneyReducer,
        RoomReducer
    }
})