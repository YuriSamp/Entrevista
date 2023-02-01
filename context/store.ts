import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter';
import navbarReducer from './features/navbar';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
