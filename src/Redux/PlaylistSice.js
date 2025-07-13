import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name:"playlist",
    initialState:[],
    reducers:{
        AddSong:(state,action)=>{
            const exists=state.find((song)=>song.songIndex === action.payload.songIndex)
            if(exists){
                return
            }
            else{
                state.push(action.payload)
            }
           
        },
        RemoveSong:(state,action)=>{
            return state.filter((song)=>song.songIndex !== action.payload.songIndex);
        }
    }
})

export const {AddSong,RemoveSong} = playlistSlice.actions

export default playlistSlice.reducer