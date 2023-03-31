import {
  EnvelopeIcon,
  InformationCircleIcon,
  PhoneIcon,
  PlayCircleIcon,
  PlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Card = (props) => {
  const data = props.info;
  console.log(props);
  return (
    <div>
      <div
        key={data.name}
        className="col-span-1 rounded-lg bg-white shadow"
      >
        <div className="flex items-center justify-between p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-3xl font-bold text-gray-900 basis-11/12">
                {data.name}
              </h3>
              <div className="grid grid-cols-2 text-2xl">
                <span>{data.member}</span>
                <UsersIcon className="mt-1" />
              </div>
            </div>
            {data.categories.map((item) => (
              <span className="inline-block flex-shrink-0 mr-2 rounded-full text-lg bg-green-100 px-3 py-1 mt-2 font-medium text-green-800">
                {item}
              </span>
            ))}
            <p className="mt-4 truncate text-md text-gray-500">
              from <span className="text-black">{data.startDate}</span> to{" "}
              <span className="text-black">{data.endDate}</span>
            </p>
          </div>
        </div>
        <div className="pl-6 pb-6"> 
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-green-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <InformationCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            More Info!
          </button>
          <button
            type="button"
            className="inline-flex ml-3 items-center rounded-md border border-transparent bg-green-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlayCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Join Event <span className="ml-1 text-amber-400">({data.maxMember-data.member} Left)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
