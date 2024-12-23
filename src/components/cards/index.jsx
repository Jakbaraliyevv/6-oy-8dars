import React from "react";

function Card({ id, img, yozuvchi, title, name, old, price, deletMutation }) {
  return (
    <div className="border-gray-500 border-[1px] w-[300px] h-[450px] relative ">
      <img className="w-full h-[220px]" src={img} alt="" />
      <div className="py-5 pl-4 flex flex-col gap-2">
        <p>{yozuvchi}</p>
        <h3 className="text-[red]">{name}</h3>
        <p>{title}</p>
      </div>
      <div className="absolute bottom-2  w-full px-4">
        <button
          onClick={() => deletMutation.mutate(id)}
          className="bg-red-500 rounded-md text-[#FFF] w-full"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
