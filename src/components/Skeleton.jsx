import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "../utils/classNames";
import Avatar200x200 from "../assets/images/200x200.png";
import PopOver from "./PopOver";
import PopOverContext from "../context/PopOverContext";

const Skeleton = ({ members, sofa = false }) => {
  const [activeMemberIndex, setActiveMemberIndex] = useState(-1);
  const popoverRef = useRef(null);

  const handleMemberHover = sofa
    ? (index) => {}
    : (index) => {
        setActiveMemberIndex(index);
      };

  const handleMemberLeave = sofa
    ? (index) => {}
    : () => {
        setActiveMemberIndex(-1);
      };

  return (
    <div>
      <div className="flex flex-wrap justify-center -space-x-2">
        {members.map((item, index) => (
          <div
            className="avatar h-8 w-8 hover:z-10 relative"
            key={index}
            onMouseEnter={() => handleMemberHover(index)}
            onMouseLeave={handleMemberLeave}
          >
            {activeMemberIndex !== index && (
              <>
                {item.picture_path &&
                item.picture_path !== "" &&
                item.picture_path !== "__" ? (
                  <img
                    className="rounded-full ring ring-white dark:ring-navy-700"
                    src={item.picture_path}
                    alt="avatar"
                  />
                ) : (
                  <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                    {item.first_name[0] + item.last_name[0]}
                  </div>
                )}
              </>
            )}

            {activeMemberIndex === index && (
              <PopOver
                show={index === activeMemberIndex}
                popperConfigs={{
                  offset: 12,
                  placement: "top",
                  modifiers: [
                    { name: "preventOverflow", options: { padding: 10 } },
                  ],
                }}
                key={index}
              >
                <PopOverContext.Consumer>
                  {({
                    referenceElement,
                    setReferenceElement,
                    popperElement,
                    setPopperElement,
                    arrowElement,
                    setArrowElement,
                    styles,
                    attributes,
                  }) => (
                    <>
                      <div
                        className={classNames(
                          "popper-root fixed",
                          index === activeMemberIndex && "show"
                        )}
                        ref={setPopperElement}
                        style={styles.popper}
                        {...attributes.popper}
                      >
                        {/* <div class="max-w-xs">
  <div class="bg-white shadow-xl rounded-lg py-3">
      <div class="photo-wrapper p-2"></div> */}

                        <div className="popper-box w-64 rounded-lg border text-left border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700">
                          <div className="items-left space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800">
                            <div className="avatar h-14 w-14 hover:z-10 relative">
                              {item.picture_path &&
                              item.picture_path !== "" &&
                              item.picture_path !== "__" ? (
                                <img
                                  className="rounded-full ring ring-white dark:ring-navy-700"
                                  src={item.picture_path}
                                  alt="avatar"
                                />
                              ) : (
                                <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                                  {item.first_name[0] + item.last_name[0]}
                                </div>
                              )}
                            </div>
                            <div className="p-2">
                              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                                {item.userName}
                              </h3>

                              <table className="text-xs my-3">
                                <tbody>
                                  <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">
                                      First name
                                    </td>
                                    <td className="px-2 py-2">
                                      {item.first_name}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">
                                      Last name
                                    </td>
                                    <td className="px-2 py-2">
                                      {" "}
                                      {item.last_name}
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">
                                      Description
                                    </td>
                                    <td className="px-2 py-2">{item.bio}</td>
                                  </tr>
                                </tbody>
                              </table>

                              {/* <div className="text-center my-3">
        <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
      </div> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        ref={setReferenceElement}
                        className="avatar h-8 w-8 hover:z-10 relative"
                        key={index}
                        onMouseEnter={() => handleMemberHover(index)}
                        onMouseLeave={handleMemberLeave}
                      >
                        {item.picture_path &&
                        item.picture_path !== "" &&
                        item.picture_path !== "__" ? (
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src={item.picture_path}
                            alt="avatar"
                          />
                        ) : (
                          <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                            {item.first_name[0] + item.last_name[0]}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </PopOverContext.Consumer>
              </PopOver>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
