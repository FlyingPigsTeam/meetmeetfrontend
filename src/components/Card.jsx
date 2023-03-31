import {
  InformationCircleIcon,
  PlayCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import SlideOver from "./SlideOver";


const Card = (props) => {
    const id = "1111"
  const data = props.info;
  const [slideover, setslideover] = useState(false)
  console.log(slideover)
  return (
    <div>
      <div className="col-span-1 rounded-lg bg-darkBlue shadow-navy shadow-lg">
        <div className="flex items-center justify-between p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-3xl font-bold text-myGrey basis-11/12">
                {data.name}
              </h3>
              <div className="grid grid-cols-2 text-2xl text-myGrey">
                <span>{data.member}</span>
                <UsersIcon className="mt-1.5" />
              </div>
            </div>
            {data.categories.map((item) => (
              <span className="inline-block flex-shrink-0 mr-2 rounded-full text-lg bg-myBlueGreen1 px-3 py-1 mt-2 font-medium text-navy">
                {item}
              </span>
            ))}
            <p className="mt-4 truncate text-md text-myGrey">
              from <span className="text-myGrey">{data.startDate}</span> to{" "}
              <span className="text-myGrey">{data.endDate}</span>
            </p>
          </div>
        </div>
        <div className="pl-6 pb-6">
          <SlideOver slideover={slideover} setslideover={setslideover} id={id}/>
          <button
            onClick={() => {setslideover(true)}}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-myGrey px-4 py-2 text-sm font-medium text-navy shadow-sm hover:bg-navy hover:text-myGrey duration-300"
          >
            <InformationCircleIcon
              className="-ml-1 mr-2 h-5 w-5"
              aria-hidden="true"
            />
            More Info!
          </button>
          <button
            type="button"
            className="inline-flex ml-3 items-center rounded-md border border-transparent bg-myGrey px-4 py-2 text-sm font-medium text-navy shadow-sm hover:bg-navy hover:text-myGrey focus:bg-navy focus:text-myGrey duration-300"
          >
            <PlayCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Join Event{" "}
            <span className="ml-1 text-amber-400">
              ({data.maxMember - data.member} Left)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
