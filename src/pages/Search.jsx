import Player from "../components/Player";
import { IoSearchSharp } from "react-icons/io5";
import { songsData } from "../songs";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { IoMdMusicalNote } from "react-icons/io";

function Search() {
  const [input, setInput] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);

  useEffect(() => {
    const filterval = songsData.filter(
      (song) =>
        song.name.toLowerCase().includes(input.toLowerCase()) ||
        song.singer.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredValue(filterval);
  }, [input]);

  return (
    <div className="bg-black w-full h-screen flex flex-col justify-start items-center md:pt-[100px] pt-[20px] gap-[30px]">
      <Player />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] md:max-w-[60%] h-[60px] bg-gray-800 
      rounded-4xl flex justify-center items-center gap-[20px] p-[14px] md:p-0"
      >
        <IoSearchSharp className="text-gray-400 text-xl" />
        <input
          type="text"
          className="w-[90%] h-[100%] rounded-4xl outline-none border-0 
        text-white p-[10px] text-[18px]"
          placeholder="Search Your Favorite Music.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {input ? (
        <div
          className="w-[100%] h-[65%] md:h-[100%] flex flex-col justify-start items-center p-[10px] gap-5 overflow-auto"
          id="cards"
        >
          {filteredValue.map((items, index) => (
            <Card key={index} items={items} songIndex={items.id-1}/>
          ))}
        </div>
      ) : (
        <div className="text-[25px] font-semibold text-gray-600 flex justify-center items-center gap-2">
          Search songs <IoMdMusicalNote className="text-[25px] mt-2"/>
        </div>
      )}
    </div>
  );
}

export default Search;
