import { createSlice} from '@reduxjs/toolkit';

const init = {
    value: ""
}
export const RoomSlice = createSlice({
    initialState: init,
    name: "room",
    reducers:{
        pickRoom: (state, payload) => {
            console.log(payload);
            state.value = payload.payload
        },
        // addMoney: (state, payload) => {
        //     console.log(payload.payload, state.value);
        //     state.value += Number(payload.payload)
        // }
    }
})

export const {pickRoom} = RoomSlice.actions
export default RoomSlice.reducer