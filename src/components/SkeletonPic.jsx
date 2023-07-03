import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "../utils/classNames";
import Avatar200x200 from "../assets/images/200x200.png";
import PopOver from "./PopOver";
import PopOverContext from "../context/PopOverContext";

const SkeletonPic = ({ item }) => {
  //   const [activeMemberIndex, setActiveMemberIndex] = useState(-1);
  //   const popoverRef = useRef(null);

  //   const handleMemberHover = (index) => {
  //     setActiveMemberIndex(index);
  //   };

  //   const handleMemberLeave = () => {
  //     setActiveMemberIndex(-1);
  //   };

  return (
    <div>
      <div className="avatar h-8 w-8 hover:z-10 relative">
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
      </div>
    </div>
  );
};

export default SkeletonPic;
