import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer:{
        login: (state, action) => {
            state.status = true,
            state.userData = action.payload
        },
        logout: (state) => {
            state.state = false,
            state.userData = null
        }
    }
})

// Exporting individual actions of the slice
export const {login, logout} = authSlice.actions
export default authSlice.reducer()