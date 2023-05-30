import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tom from "tom-select";
import AuthContext from "../context/AuthContext";
import Avatar200x200 from "../assets/images/200x200.png";


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
                const response = await fetch(`http://127.0.0.1:8000/api/my-rooms/${idroom}/requests?username=${member}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                    // body: JSON.stringify(member),
                });
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
            maxItems: 10,
            plugins: ['remove_button'],
            valueField: "id",
            searchField: "username",
            labelField: "username",
            // options: items,
            // items: [],
            placeholder: "Select some members",
            onChange: (value) => {
                setSelectedMembers(value.split(','));
                setmember(value.split(','));
            },

            load: function (query, callback) {
                const url = `http://127.0.0.1:8000/api/my-rooms/${idroom}/requests?show_members=1&username=${encodeURIComponent(
                    query
                )}`;
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                })
                    .then(async (response) => {
                        const data = await response.json();
                        console.log(data);
                        // console.log(data);
                        console.log(data[0].id);
                        // data.forEach((item) => {
                            
                        //     dictionary[item.username] = item.order;
                        // });

                        // const filteredData = data.filter((item) => {
                        //     return !members.some((member) => member.member.username === item.username);
                        // });
                        callback(data);
                    })

            },

            render: {
                option: function (item, escape) {
                    return `<div class="flex space-x-3 bg-primary">
                        <div class="avatar w-8 h-8">
                            <img class="rounded-full" src="${escape(
                        item.picture_path
                    )}" alt="avatar"/>
                        </div>
                        <div class="flex flex-col">
                            <span>${escape(item.first_name)} ${escape(item.last_name)}</span>
                            <span class="text-xs opacity-80"> ${escape(
                        item.username
                    )}</span>
                        </div>
                    </div>`;
                },
                item: function (item, escape) {
                    return `<span class="badge rounded-full bg-primary dark:bg-accent text-white p-px mr-2">
                        <span class="avatar w-6 h-6">
                            <img class="rounded-full" src="${escape(
                        item.picture_path
                    )}" alt="avatar"/>

                        </span>
                        <span class="mx-2">${escape(item.first_name)} ${escape(item.last_name)}</span>
                    </span>`;
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
                >
                </input>
            </label>

        </div>
    );
};
export default AutoComplete;

