import React, { useContext } from "react";
import { songsData } from "../songs";
import { dataContext } from "../context/UserContext";
import { FaPause, FaPlay } from "react-icons/fa6";

function Player() {

  const {playingSong, playSong, pauseSong,index} = useContext(dataContext)

  return (
    <>
      <div
        className="w-[100%] md:w-[60%] h-[100px] bg-blue-200 md:bg-white
   fixed bottom-[55px] md:bottom-0 rounded-t-4xl shadow-lg flex pt-[10px] md:items-center md:p-[20px] z-20"
      >
        <div
          className="flex justify-start items-start
         gap-[20px] w-[80%] h-[100%] cursor-pointer pl-[30px] "
        >
          <div>
            <img
              src={songsData[index].image}
              alt="card_img"
              className="w-[60px] max-h-[60px] md:w-[80px] md:max-h-[70px] rounded-lg object-fill"
            />
          </div>
          <div className="text-[16px] md:text-[25px] ">
            <div className="text-[1em] font-bold">{songsData[index].name}</div>
            <div className="text-[0.7em] font-semibold text-gray-600">
              {songsData[index].singer}
            </div>
          </div>
        </div>

        <div className="w-[20%] h-[100%] md:flex justify-center items-center">
        {!playingSong ? (
          <div className="text-2xl hover:text-gray-700 m-[14px] " onClick={playSong}>
            <FaPlay />
          </div>
        ) : (
          <div className="text-2xl hover:text-gray-700 m-[14px]" onClick={pauseSong}>
            <FaPause />
          </div>
        )}
        </div>
      </div>
    </>
  );
}

export default Player;
