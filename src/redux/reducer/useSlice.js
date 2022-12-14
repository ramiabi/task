import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    data:{
        name:"",
         email:"",
          password:"", 
          dob:"", 
          mobile:""
        },
        details:[],
        isLoggedIn:false,
        isRegIn:false,

}
const useSlice = createSlice(
    {
        name:'useSlice',
        initialState,
        reducers:{
            RegIn:(state,action)=>{
                console.log(action.payload)
                state.details=[...state.details,action.payload]
                console.log(action.payload)
                state.isRegIn=true
            },
            
            LogIn:(state,action)=>{
                console.log(action.payload)
                state.data = state.details.find(e => e.email===action.payload.email&&e.password===action.payload.password)
                console.log(action.payload)
                state.isLoggedIn=true
            },

            LogOut:(state)=>{
                console.log(state)
                state.data={}
                console.log("logout")
                state.isLoggedIn=false
            },
            Delete:(state,action)=>{
                state.data={}
            }
        }
    }
)
export const {RegIn, LogIn,LogOut,Delete}=useSlice.actions
export default useSlice.reducer