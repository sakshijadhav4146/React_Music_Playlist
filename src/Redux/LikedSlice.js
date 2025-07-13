import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
    name:"liked",
    initialState:[],
       reducers:{
        AddLikedSong:(state,action)=>{
            const exists=state.find((song)=>song.songIndex === action.payload.songIndex)
            if(exists){
                return
            }
            else{
                state.push(action.payload)
            }
           
        },
        RemoveLikedSong:(state,action)=>{
            return state.filter((song)=>song.songIndex !== action.payload.songIndex);
        }
    }
})

export const {AddLikedSong,RemoveLikedSong} = likedSlice.actions

export default likedSlice.reducer