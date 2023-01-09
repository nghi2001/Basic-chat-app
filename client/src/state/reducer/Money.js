import { createSlice} from '@reduxjs/toolkit';

const init = {
    value: 0
}
export const MoneySlice = createSlice({
    initialState: init,
    name: "money",
    reducers:{
        addMoney: (state, payload) => {
            console.log(payload.payload, state.value);
            state.value += Number(payload.payload)
        }
    }
})

export const {addMoney} = MoneySlice.actions
export default MoneySlice.reducer