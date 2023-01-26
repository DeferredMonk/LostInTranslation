import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../reducers/userSlice.js"
import userListReducer from "../reducers/userListSlice.js"
import translationReducer from "../reducers/translationSlice.js"

export default configureStore({
    reducer: {
        userList: userListReducer,
        user: userReducer,
        translation: translationReducer
    }
})