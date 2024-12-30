import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../modules/counterSlice";
import cardReducer from "../modules/cardSlice"
import cartReducer from "../modules/cartSlice"

export const store = configureStore({
    reducer: {
        counter: counterReduser,
        card: cardReducer,
        cart: cartReducer,
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
> 