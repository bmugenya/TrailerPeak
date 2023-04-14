import { configureStore  } from '@reduxjs/toolkit'
import register from "./features/register/registerSlice"
import user from './features/user/userSlice'


const store = configureStore({
  reducer: {
    register,
    user
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export default store