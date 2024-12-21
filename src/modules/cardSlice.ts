import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface CardState {
//     value: Array<ObjectType>
// }

interface ObjectType {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {rate: number, count: number};
    title: string;
}

const state: Array<ObjectType> = []




