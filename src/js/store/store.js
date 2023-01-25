import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../reducers/userSlice.js"
import userListReducer from "../reducers/userListSlice.js"

export default configureStore({
    reducer: {
        userList: userListReducer,
        user: userReducer
    }
})