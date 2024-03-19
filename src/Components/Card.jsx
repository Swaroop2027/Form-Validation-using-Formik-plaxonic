import React from "react";

const Card = ({ title, body }) => {
  return (
    <div className="bg-gray-200 p-5 rounded-[5px] mb-5 w-[30%] shadow-lg hover:scale-110 hover:hover:shadow-md hover:bg-[linear-gradient(#2a00b7,_#42006c)] hover:text-white">
      <h1 className="font-serif text-xl font-semibold capitalize">{title}</h1>
      <div className="bg-slate-700 w-full h-1 rounded-md"></div>
      <p className="font-serif mt-2">{body}</p>
    </div>
  );
};

export default Card;

// style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
