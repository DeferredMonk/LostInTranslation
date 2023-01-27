import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  'userList/fetchData',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/translations`);
    if (response.ok) {
        const jsonObject = await response.json();
        const result = jsonObject.map(element => element.username)
        return {result}
    }
    return new Promise.reject()
  }
)

export const postData = createAsyncThunk(
    'userList/postData',
    async (toPost) => {
        
        const response = await fetch(`${process.env.REACT_APP_API_URL}/translations`, {
        method: "POST",
        headers: {
            "X-API-Key": process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(toPost),
        })
        if (response.ok) {
            const jsonObject = await response.json();
            const result = jsonObject.username
            return {result};
        }
        return new Promise.reject()
    }
)

export const userListSlice = createSlice({
    name:'userList',
    initialState: {
        users: [],
        error: null
    },
    reducers: {
    },
    extraReducers: {
        [fetchData.fulfilled]: (state, action) => {
            state.users = action.payload.result
        },
        [fetchData.rejected]: (state, action) => {
            state.error = action.error
        },
        [postData.fulfilled]: (state, action) => {
            state.users.push(action.payload.result)
        },
        [postData.rejected]: (state, action) => {
            state.error = action.error
        }
    }
})

export const { } = userListSlice.actions
export default userListSlice.reducer