import React from "react";

const Search = ({onChange, text}) => {
  return (
    <>
      
      <div className="">
        <input
          type={text}
          placeholder="Search Project......"
          className="outline-none max-sm:w-[20rem] w-[30rem] text-center search-border rounded-xl py-3 bg-[#0f0f1a] text-white"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Search;
