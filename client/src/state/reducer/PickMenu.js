import {
    createSlice
} from '@reduxjs/toolkit';

const init = {
    value: 0
}

export const PickMenuSlice = createSlice({
    initialState: init,
    name: "PinkMenu",
    reducers: {
        pick: (state, payload) => {
            state.value = Number(payload.payload)
        }
    }
})

export const {
    pick
} = PickMenuSlice.actions;
export default PickMenuSlice.reducer;