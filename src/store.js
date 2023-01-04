import { createSlice,configureStore } from '@reduxjs/toolkit'


const initialState = {
  value: {
    username:''
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
      
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialState.value
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer


export const store = configureStore({
    reducer:{
        user: userSlice.reducer,
    },
})