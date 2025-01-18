import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface ObjectType {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {rate: number, count: number};
    title: string;
}

const initialState: ObjectType[] = []

const cardSlice = createSlice({
    name: 'card',
    initialState,

    reducers: {
        // @ts-expect-error Type mismatch due to Redux Toolkit behavior
        setCards: (state, action: PayloadAction<ObjectType[]>) => {
            return action.payload;
        }
    }
})

export const {setCards} = cardSlice.actions;
export default cardSlice.reducer;

export const selectCard = (state: RootState) => state.card;

