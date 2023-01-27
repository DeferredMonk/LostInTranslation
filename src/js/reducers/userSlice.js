import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userName) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/translations`
    );
    if (response.ok) {
      const jsonObject = await response.json();
      const result = jsonObject.find((user) => user.username === userName);
      return { result };
    }
    return new Promise.reject();
  }
);

export const patchData = createAsyncThunk("user/patchData", async (toPatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/translations/${toPatch.id}`,
    {
      method: "PATCH",
      headers: {
        "X-API-Key": process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ translations: toPatch.translations }),
    }
  );
  if (response.ok) {
    let result = await response.json();
    result = result.translations;
    return { result };
  }
  return new Promise.reject();
});

export const clearData = createAsyncThunk("user/clearData", async (toPost) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/translations/${toPost.id}`,
    {
      method: "PUT",
      headers: {
        "X-API-Key": process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: toPost.username, translations: [] }),
    }
  );
  if (response.ok) {
    let result = await response.json();
    result = result.translations;
    return { result };
  }
  return new Promise.reject();
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    translations: [],
    id: null,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.username = "";
      state.translations = [];
      state.id = null;
      window.localStorage.setItem("user", "");
      window.location.href = "/"
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.username = action.payload.result.username;
      state.translations = action.payload.result.translations;
      state.id = action.payload.result.id;
      window.localStorage.setItem("user", action.payload.result.username);
      
    },
    [fetchUser.rejected]: (state, action) => {
      state.error = action.error;
    },
    [patchData.fulfilled]: (state, action) => {
      state.translations = action.payload.result;
    },
    [patchData.rejected]: (state, action) => {
      state.error = action.error;
    },
    [clearData.fulfilled]: (state, action) => {
      state.translations = action.payload.result;
    },
    [clearData.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
