import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { opportunitiesApi } from "./service/job-info";
import formReducer from "./formSlice";

export const store = configureStore({
    reducer: {
        [opportunitiesApi.reducerPath]: opportunitiesApi.reducer,
        form: formReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(opportunitiesApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;