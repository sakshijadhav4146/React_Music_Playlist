import React, { useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../songs";
import musicImg from "../assets/musicanim.webp";
import { ImNext, ImPrevious } from "react-icons/im";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { dataContext } from "../context/UserContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import Card from "../components/Card";
import Player from "../components/Player";

function Home() {
  const {
    audioRef,
    playSong,
    pauseSong,
    playingSong,
    nextSong,
    previousSong,
    index,
  } = useContext(dataContext);

  const [range, setRange] = useState(0);

  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;
      let progressPercentage = (currentTime / duration) * 100 || 0;
      setRange(progressPercentage);
      if (progress.current) {
        progress.current.style.width = `${progressPercentage}%`;
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
  }, []);

  const handleRange = (e) => {
    let newRange = e.target.value;
    setRange(newRange);
    let duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * newRange) / 100;
  };

  let progress = useRef(null);

  return (
    <>
      <div className="w-full h-screen bg-black flex relative overflow-hidden">
        <MdKeyboardArrowDown
          className="text-white absolute  top-[30px] left-[8%] 
        text-[30px] md:hidden"
          onClick={() => setArrow((prev) => !prev)}
        />
        {!arrow ? (
          <>
            <div
              className=" w-full md:w-[50%] h-full text-white text-xl font-semibold flex justify-start items-center
         pt-[20px] md:pt-[125px] flex-col gap-[30px]"
            >
              <h1>Now Playing</h1>
              <div className="w-[80%] md:w-[250px] h-[300px] rounded-2xl overflow-hidden relative">
                <img
                  src={songsData[index].image}
                  alt="poster"
                  className="w-full h-full object-cover"
                />
                {playingSong ? (
                  <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center">
                    <img src={musicImg} alt="" className="w-[40%]" />
                  </div>
                ) : null}
              </div>
              <div>
                <div className="text-3xl font-extrabold">
                  {songsData[index].name}
                </div>
                <div className="text-sm text-center text-gray-500 pt-2">
                  {songsData[index].singer}
                </div>
              </div>

              <div className="w-[50%] flex justify-center items-center relative rounded-4xl ">
                <input
                  type="range"
                  className="appearance-none w-[100%] h-1 bg-gray-600 rounded-4xl"
                  value={range}
                  onChange={handleRange}
                />
                <div
                  className={`bg-blue-500 h-[100%] absolute left-0 rounded-4xl`}
                  ref={progress}
                ></div>
              </div>
              <div className="flex gap-3 cursor-pointer">
                <div
                  className="text-3xl hover:text-gray-500"
                  onClick={() => previousSong()}
                >
                  <ImPrevious />
                </div>
                {!playingSong ? (
                  <div
                    className="text-3xl hover:text-gray-500"
                    onClick={playSong}
                  >
                    <FaCirclePlay />
                  </div>
                ) : (
                  <div
                    className="text-3xl hover:text-gray-500"
                    onClick={pauseSong}
                  >
                    <FaCirclePause />
                  </div>
                )}
                <div
                  className="text-3xl hover:text-gray-500"
                  onClick={() => nextSong()}
                >
                  <ImNext />
                </div>
              </div>
            </div>

            <div
              className=" w-[100%] md:w-[50%] h-full md:flex flex-col hidden md:gap-3 pt-[120px] overflow-auto pb-[20px]"
              id="cards"
            >
              {songsData.map((items, index) => (
                <Card items={items} key={index} songIndex={items.id - 1} />
              ))}
            </div>
          </>
        ) : (
          <div className=" w-[100%] md:w-[50%] h-[80%] items-center flex flex-col gap-3 mt-[70px] 
          overflow-auto pb-[90px] relative">
            <Player />
            {songsData.map((items, index) => (
              <Card items={items} key={index} songIndex={items.id - 1} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
