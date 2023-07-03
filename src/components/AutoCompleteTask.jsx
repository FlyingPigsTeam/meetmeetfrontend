import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tom from "tom-select";
import AuthContext from "../context/AuthContext";
import Avatar200x200 from "../assets/images/200x200.png";
import { BASEURL } from "../data/BASEURL";

const AutoComplete = ({ setmember }) => {
  const { idroom } = useParams();
  console.log(idroom);
  // console.log(members);
  const { authTokens } = useContext(AuthContext);
  const dictionary = {};
  const [selectedMembers, setSelectedMembers] = useState([]);
  const navigate = useNavigate();
  const selectCustom = useRef(null);

  const handleSubmit = async () => {
    console.log(selectedMembers);
    try {
      for (let member of selectedMembers) {
        console.log(member);
        const response = await fetch(
          BASEURL + `/api/my-rooms/${idroom}/requests?username=${member}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authTokens.access}`,
            },
            // body: JSON.stringify(member),
          }
        );
        const data = await response.json();

        console.log(data);
      }
      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // const selectOptions = new Tom(selectCustom.current, {
    const selectOptions = new Tom("#user_autocomplete", {
      // labelField: "first_name",
      maxItems: 5,
      plugins: ["remove_button"],
      valueField: "id",
      searchField: "username",
      labelField: "username",
      // options: items,
      // items: [],
      placeholder: "Select some members",
      onChange: (value) => {
        setSelectedMembers(value.split(","));
        setmember(value.split(","));
      },

      load: function (query, callback) {
        const url =
          BASEURL +
          `/api/my-rooms/${idroom}/requests?show_members=1&username=${encodeURIComponent(
            query
          )}`;
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }).then(async (response) => {
          const data = await response.json();
          console.log(data);
          // console.log(data);
          //console.log(data[0].id);
          // data.forEach((item) => {

          //     dictionary[item.username] = item.order;
          // });

          // const filteredData = data.filter((item) => {
          //     return !members.some((member) => member.member.username === item.username);
          // });
          callback(data);
        });
      },

      render: {
        option: function (item, escape) {
          var html = '<div class="flex space-x-3 dark:bg-primary bg-slate-100">';
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
    </div>
  );
};
export default AutoComplete;
