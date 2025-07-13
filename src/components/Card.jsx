import { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { MdPlaylistAdd } from "react-icons/md";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdPlaylistRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AddSong, RemoveSong } from "../Redux/PlaylistSice";
import { AddLikedSong, RemoveLikedSong } from "../Redux/LikedSlice";

function Card({ items, songIndex }) {

    const {playSong, setIndex} = useContext(dataContext)

    const dispatch = useDispatch()
    const songs = useSelector(state=>state.playlist)
    const songInPlaylistExists = songs.some((song)=>song.songIndex===songIndex)

    const likedSong = useSelector(state=>state.liked)
    const songsInLikedExists = likedSong.some((song)=>song.songIndex===songIndex)
  return (
    <>
      <div className="flex w-[90%] h-[70px] md:h-[110px] bg-blue-950 rounded-lg text-white md:p-[6px] 
      p-[5px] justify-center items-center hover:bg-blue-900 hover:-translate-y-1 transition-all duration-300 ease-in-out">

        <div className="flex justify-start items-center
         gap-[20px] w-[70%] h-[100%] cursor-pointer " 
         onClick={()=>{
         setIndex(songIndex)
         playSong()
         }}>
          <div>
            <img
              src={items.image}
              alt="card_img"
              className="w-[60px] max-h-[60px] md:w-[100px] md:max-h-[100px] rounded-lg"
            />
          </div>
          <div className="text-[16px] md:text-[20px] ">
            <div className="text-[1em] font-semibold">{items.name}</div>
            <div className="text-[0.7em] font-semibold text-gray-400">
              {items.singer}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-[20px] w-[30%] h-[100%] text-[15px] md:text-[20px]">
          {!songInPlaylistExists && (<div onClick={()=>dispatch(AddSong({...items,songIndex}))}>
            <MdPlaylistAdd className="text-[1.5em] cursor-pointer" />
          </div>)}
         
         {songInPlaylistExists && (<div onClick={()=>dispatch(RemoveSong(items,songIndex))}>
            <MdPlaylistRemove className="text-[1.5em] cursor-pointer" />
          </div>)}
                
          {!songsInLikedExists && (<div onClick={()=>dispatch(AddLikedSong({...items,songIndex}))}>
            <IoIosHeartEmpty className="text-[1.2em] cursor-pointer" />
          </div>)} 

          {songsInLikedExists && (<div onClick={()=>dispatch(RemoveLikedSong(items,songIndex))}>
            <IoMdHeart className="text-[1.2em] cursor-pointer text-red-600" />
          </div>)}

          
        </div>
      </div>
    </>
  );
}

export default Card;
