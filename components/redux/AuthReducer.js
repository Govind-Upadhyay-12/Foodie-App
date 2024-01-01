import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice=createSlice({
    name:"Auth",
    initialState:{
        UserData:null,
     },
     reducers:{
        setUserData:(state,action)=>{
            state.UserData=action.payload
        }
     }

})
export const{setUserData}=AuthSlice.actions;
export default AuthSlice.reducer