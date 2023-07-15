import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tom from "tom-select";
import AuthContext from "../context/AuthContext";
import Avatar200x200 from "../assets/images/200x200.png";
import axios from "axios";
import { BASEURL } from "../data/BASEURL";
import { useAddRoomMembers } from "../api/endpoints/useRoomMembers";

const AutoComplete = () => {
  const { idroom } = useParams();
  const { authTokens } = useContext(AuthContext);

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectNew, setSelectedNew, addRoomMembersMutation] = useAddRoomMembers(idroom);

  const handleSubmit = async () => {
    try {
      await addRoomMembersMutation.mutateAsync(idroom, selectedMembers);
      setSelectedNew([])
      tomselect.clear()

    } catch (error) {
      console.error("error", error);
    }
  };


  const selectCustom = useRef(null);
  const [tomselect, settomselect] = useState(null)
  useEffect(() => {
    const selectOptions = new Tom(selectCustom.current, {

      // const selectOptions = new Tom("#user_autocomplete", {
      // labelField: "first_name",
      maxItems: 10,
      plugins: ["remove_button"],
      valueField: "username",
      searchField: "username",
      // options: items,
      // items: [],
      placeholder: "Select some members",
      onChange: (value) => {
        // setSelectedMembers(value.split(","));
        setSelectedNew(value.split(","));
      },
      load: function (query, callback) {
        var url =
          `${BASEURL}/api/my-rooms/${idroom}/requests?show_members=1&username=` +
          encodeURIComponent(query);
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        })
          .then(async response => {
            const data = await response.json();
            // console.log("response", data);
            callback(data);
          }).catch(() => {
            callback();
          });
        // .then(async (response) => {
        //   const data = await response.json();
        //   console.log(data);
        //   const filteredData = data.filter((item) => {
        //     return !members.some(
        //       (member) => member.member.username === item.username
        //     );
        //   });
        //   callback(filteredData);
        // });
      },

      render: {
        option: function (item, escape) {
          // return `<div class="flex space-x-3">
          //               <div class="avatar w-8 h-8">
          //                   <img class="rounded-full" src="${escape(
          //   item.picture_path
          // )}" alt="avatar"/>
          //               </div>
          //               <div class="flex flex-col">
          //                   <span>${escape(item.first_name)} ${escape(
          //   item.last_name
          // )}</span>
          //                   <span class="text-xs opacity-80"> ${escape(
          //   item.username
          // )}</span>
          //               </div>
          //           </div>`;
          var html =
            '<div class="flex space-x-3">';
          if (
            item.picture_path &&
            item.picture_path !== "" &&
            item.picture_path !== "__"
          ) {
            html +=
              '<div class="avatar w-8 h-8">' +
              '<img class="rounded-full" src="' +
              item.picture_path +
              '" alt="avatar" />' +
              "</div>";
          } else {
            html +=
              '<div class="avatar w-8 h-8">' +
              '<div class="is-initial rounded-full bg-info text-xs+ uppercase text-white">' +
              item.first_name[0] +
              item.last_name[0] +
              "</div>" +
              "</div>";
          }

          html +=
            '<div class="flex flex-col">' +
            "<span>" +
            escape(item.first_name) +
            " " +
            escape(item.last_name) +
            "</span>" +
            '<span class="text-xs opacity-80">' +
            escape(item.username) +
            "</span>" +
            "</div>" +
            "</div>";

          return html;
        },
        item: function (item, escape) {
          // return `<span class="badge rounded-full bg-primary dark:bg-accent text-white p-px mr-2">
          //               <span class="avatar w-6 h-6">
          //                   <img class="rounded-full" src="${escape(
          //   item.picture_path
          // )}" alt="avatar"/>

          //               </span>
          //               <span class="mx-2">${escape(item.first_name)} ${escape(
          //   item.last_name
          // )}</span>
          //           </span>`;
          var html =
            '<span class="badge rounded-full bg-primary dark:bg-accent text-white p-px mr-2">';

          if (
            item.picture_path &&
            item.picture_path !== "" &&
            item.picture_path !== "__"
          ) {
            html +=
              '<span class="avatar w-6 h-6">' +
              '<img class="rounded-full" src="' +
              escape(item.picture_path) +
              '" alt="avatar"/>' +
              "</span>";
          } else {
            html +=
              '<span class="avatar w-6 h-6">' +
              '<div class="is-initial rounded-full bg-info text-xs uppercase text-white">' +
              item.first_name[0] +
              item.last_name[0] +
              "</div>" +
              "</span>";
          }

          html +=
            '<span class="mx-2">' +
            escape(item.first_name) +
            " " +
            escape(item.last_name) +
            "</span>" +
            "</span>";

          return html;
        },
      },
    });
    settomselect(selectOptions)


    return () => {
      selectOptions.destroy();
    };
  }, []);


  return (
    <div>
      <label className="block text-left">
        <span>Select Members</span>
        <input
          ref={selectCustom}
          id={"user_autocomplete"}
          className="mt-1.5 w-full"
          autoComplete="off"
          multiple
        ></input>
      </label>
      <button
        className="flex right-0 btn min-w-[7rem] rounded-full mt-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
        onClick={handleSubmit}
      >
        Add Members
      </button>
    </div>
  );
};
export default AutoComplete;
