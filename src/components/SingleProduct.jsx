import React from "react";

export default function SingleProduct({img,script,title}) {
  return (
    <div className="w-[250px] flex flex-col gap-3">
      <img src={img} alt="product" />

      <div className="  flex flex-col mt-1 ">
        <p className="text-md gap regular relative w-fit text-black-120 font-medium p-1">
          {title}
          <span className=" h-1 text-gray-100 flex justify-center absolute bottom-0 w-full flex-col items-center bg-yellow-120">
            .
          </span>
        </p>
      </div>
      <p className="max-w-full">
        {script}
      </p>
    </div>
  );
}
