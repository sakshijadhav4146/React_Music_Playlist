import { BiSolidPlaylist } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <div
        className="w-full h-[80px] fixed bottom-0 md:top-0 bg-black text-white flex justify-around
       md:justify-center p-[10px] items-center gap-7 z-30 rounded-t-4xl"
      >
        <Link to={"/"}>
          <FaHome className="w-[25px] h-[25px] hover:text-blue-400" />
        </Link>
        <Link to={"/search"}>
          <FaSearch className="w-[25px] h-[25px] hover:text-blue-400" />
        </Link>
        <Link to={"/playlist"}>
          <BiSolidPlaylist className="w-[25px] h-[25px] hover:text-blue-400" />
        </Link>
        <Link to={"/liked"}>
          <IoHeart className="w-[25px] h-[25px] hover:text-red-600" />
        </Link>
      </div>
    </>
  );
}

export default Nav;
