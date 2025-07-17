import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:'',
    password:'',
    isLoading:false,
    error:null,
    disable:true,
    modal:false,
    logged:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setEmail:(state,action)=>{
            state.email = action.payload
        },
        setPassword:(state,action)=>{
            state.password = action.payload
        },
        setIsLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        setDisable:(state,action)=>{
            state.disable = action.payload
        },
        setModal:(state,action)=>{
            console.log(action.payload)
            state.modal = action.payload
        },
        setLogged:(state,action)=>{
            state.logged = action.payload
        }
    }
})

export const {setEmail,setPassword,setIsLoading,setError,setDisable,setModal,setLogged} = authSlice.actions
export default authSlice.reducer;

//