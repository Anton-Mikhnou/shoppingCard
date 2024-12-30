import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface CartType {
    id: number;
    quality: number;
}


const initialState: Array<CartType> = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action:PayloadAction<{id:number, quality:number}> ) => {
            const {id, quality} = action.payload;

            const existingItem = state.find(item => item.id === id);
            
            if(existingItem) {
                existingItem.quality += quality;
            } else {
                state.push({id, quality});
            }
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;