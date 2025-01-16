import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface CartType {
    id: number;
    title: string;
    url: string;
    price: number;
    quality: number;
}


const initialState: Array<CartType> = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action:PayloadAction<CartType> ) => {
            const existingItem = state.find(item => item.id === action.payload.id);

            
            if(existingItem) {
                existingItem.quality += action.payload.quality;
            } else {
                state.push(action.payload);
            }
        },

        deleteCart: (state, action:PayloadAction<number>) => {

            const removeItem = findCartItem(state, action.payload);

            if(removeItem) {
                const index = state.indexOf(removeItem);
                state.splice(index, 1);
            }
        },

        incrementQuality: (state, action:PayloadAction<number>) => {

            const existingItem = findCartItem(state, action.payload);
            if(existingItem) existingItem.quality += 1;
        },

        decrementQuality: (state, action:PayloadAction<number>) => {

            const existingItem = findCartItem(state, action.payload)
            if(existingItem) existingItem.quality -= 1;
        },

        setQualityCart: (state, action: PayloadAction<{ id: number; quality: number }>) => {

            const existingItem = state.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quality = action.payload.quality;
            }
        }
    }
})

const findCartItem = (state: Array<CartType>, id: number) => {
    return state.find(item => item.id === id);
};

export const {addToCart, deleteCart, incrementQuality, decrementQuality, setQualityCart} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;