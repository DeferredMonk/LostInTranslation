import { createSlice } from "@reduxjs/toolkit";

/**
 * This function creates translation reducer and actions for it.
 * @returns {{translation: String}} translation: String
 */
export const translationSlice = createSlice({
    name: 'translation',
    initialState : {
        translation: ''
    },
    reducers: {
        translate: (state, action) => {
            state.translation= action.payload
        },
        clearTranslation:  (state, action) => {
            state.translation= ''
        }
    }
})

export const { translate, clearTranslation } = translationSlice.actions
export default translationSlice.reducer