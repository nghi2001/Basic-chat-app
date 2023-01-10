import {
    configureStore
} from '@reduxjs/toolkit';
import MoneyReducer from '../reducer/Money';
import RoomReducer from '../reducer/Room';
import PickMenuReducer from '../reducer/PickMenu';
export const store = configureStore({
    reducer: {
        MoneyReducer,
        RoomReducer,
        PickMenuReducer
    }
})