import React from "react";
import Player from "../components/Player";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Playlist() {
  const songs = useSelector(state=>state.playlist)
  
  return (
    <div className="bg-black w-full h-screen flex flex-col justify-start items-center md:pt-[100px] pt-[20px] gap-[30px]">
      <Player />
      {!songs.length<1 ? <><h1 className="text-white text-[20px] font-bold">Playlist</h1>
      <div className="w-full h-[%] md:h-[100%] flex flex-col justify-start items-center gap-3 overflow-auto md:pt-[20px]" id="cards">
      {songs.map((s,index)=>
        <Card items={s} key={index} songIndex={s.id-1} />
      )}
      </div></> :
      <div className="text-[25px] font-semibold text-gray-600 flex justify-center items-center gap-2">Your Playlist Is Empty!! </div>}
      
    </div>
  );
}

export default Playlist;
