<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
=======
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter'
import todoSlice from "./slices/todo";
//reducers is the one which handle events 

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//in context to redux every feature is a slice  
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
