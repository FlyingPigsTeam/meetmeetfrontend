

import React, { useRef, useState, useEffect, useContext } from "react";
import Tom from "tom-select";
import AuthContext from "../context/AuthContext";

const AutoComplete = ({ members }) => {
    console.log(members);
    const { authTokens } = useContext(AuthContext);

    const [selectedMembers, setSelectedMembers] = useState([]);
    const selectCustom = useRef(null);

    const handlePostData = async () => {
        try {
            const newMembers = selectedMembers.map(({ id, ...rest }) => rest);
            const response = await fetch("http://127.0.0.1:8000/api/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify(newMembers),
            });
            const data = await response.json();
            //   onUpdate(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const selectOptions = new Tom(selectCustom.current, {
            labelField: "username",
            valueField: "id",
            searchField: "username",
            options: members.map(({ id, ...rest }) => rest),
            items: [],
            placeholder: "Select some members",
            hidePlaceholder: true,
            onBlur: () => { },
            onChange: (value) => {
                setSelectedMembers(value);
            },
        });

        return () => {
            selectOptions.destroy();
        };
    }, [members]);

    return (
        <div>
            <label className="block text-left">
                <span>Select Members</span>
                <select
                    ref={selectCustom}
                    className="mt-1.5 w-full"
                    autoComplete="off"
                    multiple
                >
                    {members.map(({ id, ...rest }) => (
                        <option
                            className="flex space-x-3"
                            key={id}
                            value={id}
                            selected={rest.selected}
                        >
                            <div className="avatar w-8 h-8">
                                <img
                                    className="rounded-full"
                                    src={rest.picture_path}
                                    alt="avatar"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span>{rest.username}</span>
                                <span className="text-xs opacity-80">{rest.bio}</span>
                            </div>
                        </option>
                    ))}
                </select>
            </label>
            <button
                className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                onClick={handlePostData}
            >
                Post
            </button>
        </div>
    );
};

export default AutoComplete;


// valueField: "id",
//     searchField: "title",
//     options: [
//       {
//         id: 1,
//         name: "John Doe",
//         job: "Web designer",
//         src: "images/200x200.png",
//       },
//       {
//         id: 2,
//         name: "Emilie Watson",
//         job: "Developer",
//         src: "images/200x200.png",
//       },
//       {
//         id: 3,
//         name: "Nancy Clarke",
//         job: "Software Engineer",
//         src: "images/200x200.png",
//       },
//     ],
//     placeholder: "Select the author",
//     render: {
//       option: function (data, escape) {
//         return <div class="flex space-x-3">
//                       <div class="avatar w-8 h-8">
//                         <img class="rounded-full" src="${escape(
//                           data.src
//                         )}" alt="avatar"/>
//                       </div>
//                       <div class="flex flex-col">
//                         <span> ${escape(data.name)}</span>
//                         <span class="text-xs opacity-80"> ${escape(
//                           data.job
//                         )}</span>
//                       </div>
//                     </div>;
//       },
//       item: function (data, escape) {
//         return <span class="badge rounded-full bg-primary dark:bg-accent text-white p-px mr-2">
//                       <span class="avatar w-6 h-6">
//                         <img class="rounded-full" src="${escape(
//                           data.src
//                         )}" alt="avatar">
//                       </span>
//                       <span class="mx-2">${escape(data.name)}</span>
//                     </span>;
//       },
//     },