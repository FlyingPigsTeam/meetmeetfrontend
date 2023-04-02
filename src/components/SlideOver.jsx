import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SlideOver = ({ slideover, setslideover, id }) => {
  const title = "Hiking in Mount Doom";
  const description =
    "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century. 'Hiking' is the preferred term in Canada and the United States";
  const startDate = "3/30/2023";
  const endDate = "4/16/2023";
  const roomType = "Premium";
  const isPremium = true;
  const categories = ["sport", "cultural"];
  const member = 31;
  const maxMember = 40;
  const memberList = [
    {
      username: "Matin2001",
      bio: "member of the flying pigs frontend team",
      image_path: "url(....)",
    },
    {
      username: "M_Mirzaei",
      bio: "member of the flying pigs frontend team and loves playing football.he is inteligent",
      image_path: "url(....)",
    },
    {
      username: "AliSoltani",
      bio: "member of the flying pigs frontend team",
      image_path: "url(....)",
    },
    {
      username: "Arian Sabet",
      bio: "member of the flying pigs frontend team",
      image_path: "url(....)",
    },
    {
      username: "Matin2001",
      bio: "member of the flying pigs frontend team",
      image_path: "url(....)",
    },
    {
      username: "Matin2001",
      bio: "member of the flying pigs frontend team",
      image_path: "url(....)",
    },
  ];
  return (
    <div>
      <Transition.Root show={slideover} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setslideover(false);
          }}
        >
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-myGrey py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        {isPremium ? (
                          <div className=" -ml-4 -mt-4 bg-gold text-lg text-navy opacity-90 -rotate-12 font-bold w-36 p-1 z-0 border-myDark1 rounded-2xl">
                            Premium Room
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-2xl font-bold text-myDark1 z-10">
                            {title}
                          </Dialog.Title>
                          <div className="ml-3 flex items-center">
                            <button
                              type="button"
                              className=" mt-2 rounded-md bg-myGrey text-navy hover:text-myGrey hover:bg-navy duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                              onClick={() => {
                                setslideover(false);
                              }}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full m-6 mt-4 flex-1 px-4 sm:px-6">
                        <div className="absolute inset-0">
                          <p className=" truncate text-lg font-normal  text-myDark1">
                            From{" "}
                            <span className="text-myDark1 font-bold">
                              {startDate}
                            </span>{" "}
                            To{" "}
                            <span className="text-myDark1 font-bold">
                              {endDate}
                            </span>
                          </p>
                          <div className="text-myDark2 mt-4 font-normal">
                            {description}
                          </div>
                          {/* <div className="text-myDark1 mt-4">
                            This event is being hold from{" "}
                            <span className="text-xl">{startDate}</span> to <span className="text-xl">{endDate}</span>
                      
                          </div> */}
                          <div className=" text-myDark1 text-xl font-bold mt-2">
                            Categories:
                          </div>
                          {categories.map((item, index) => (
                            <span
                              key={index}
                              className="inline-block flex-shrink-0 mr-2 rounded-lg text-lg bg-myBlueGreen1 px-3 py-1 mt-2 font-medium text-navy"
                            >
                              {item}
                            </span>
                          ))}
                          <div className="  mt-4">
                            <div className=" text-myDark1 text-xl font-bold mb-2">
                              Members:
                            </div>
                            {memberList.map((item, index) =>
                              index < 6 ? (
                                <div
                                  key={index}
                                  className=" grid grid-cols-5 align-middle p-2 items-center hover:bg-myDark1 hover:rounded-lg hover:text-myGrey cursor-pointer duration-200 "
                                >
                                  <img
                                    src={item.image_path}
                                    alt=""
                                    className=" border-2 border-myDark1 hover:border-2 hover:border-myGrey w-14 h-14 rounded-full"
                                  />
                                  <div className=" col-start-2 col-end-6">
                                    <div className=" text-lg font-bold">
                                      {item.username}
                                    </div>
                                    {item.bio.length < 70 ? (
                                      <div className=" opacity-80">
                                        {item.bio}
                                      </div>
                                    ) : (
                                      <div className=" opacity-80">
                                        {item.bio.slice(0, 70)}...
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                ""
                              )
                            )}
                          </div>
                          <div className="h-40 border-darkBlue border-4 rounded-lg p-3 mt-4">
                            Task Part
                          </div>
                          <button
                            type="button"
                            className="w-full items-center rounded-md border-transparent border-2 border-navy hover:border-navy bg-navy h-12 py-1 mt-2 text-lg font-semibold text-myGrey shadow-sm hover:bg-myGrey hover:text-navy duration-300"
                          >
                            Join Event ({maxMember - member} Left)
                          </button>
                          <div className="h-5"></div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SlideOver;
