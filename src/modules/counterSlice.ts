import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface CouterState {
    value: number
}

const initialState: CouterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },

        decrement: (state, action:PayloadAction<number | undefined>) => {
            const amount = action.payload ?? 1;
            state.value -= amount;
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer

export const selectCount = (state: RootState) => state.counter.value;