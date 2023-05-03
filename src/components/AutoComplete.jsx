import React, { useRef, useState, useEffect, useContext } from "react";
import Tom from "tom-select";
const AutoComplete = () => {
    const listofmembers = [
        {
            id: 1,
            name: "John Doe",
            job: "Web designer",
            src: "images/200x200.png",
        },
        {
            id: 2,
            name: "Emilie Watson",
            job: "Developer",
            src: "images/200x200.png",
        },
        {
            id: 3,
            name: "Nancy Clarke",
            job: "Software Engineer",
            src: "images/200x200.png",
        }
    ];

    const [members, setMembers] = useState([]);
    const selectCustom = useRef(null);
    useEffect(() => {
        const selectOptions = new Tom(selectCustom.current, {
            labelField: "name",
            valueField: "id",
            searchField: "name",
            options: listofmembers,
            items: [],
            placeholder: "Select some Categories",
            hidePlaceholder: true,
            onBlur: () => {

            },
            onChange: (value) => {

            },
            // render: {
            //             option: function (data, escape) {
            //                 return <div class="flex space-x-3">
            //                             <div class="avatar w-8 h-8">
            //                                 <img class="rounded-full" src="${escape(
            //                                 data.src
            //                                 )}" alt="avatar"/>
            //                             </div>
            //                             <div class="flex flex-col">
            //                                 <span> ${escape(data.name)}</span>
            //                                 <span class="text-xs opacity-80"> ${escape(
            //                                 data.job
            //                                 )}</span>
            //                             </div>
            //                             </div>;
            //             },
            //           item: function (data, escape) {
            //             return <span class="badge rounded-full bg-primary dark:bg-accent text-white p-px mr-2">
            //                           <span class="avatar w-6 h-6">
            //                             <img class="rounded-full" src="${escape(
            //                               data.src
            //                             )}" alt="avatar"/>

            //                           </span>
            //                           <span class="mx-2">${escape(data.name)}</span>
            //                         </span>;
            //           },
            //         },
        });

        return () => {
            selectOptions.destroy();
        };
    }, []);

    return (
        <div>
            <label className="block text-left">
                <span>Select Categories</span>
                <select
                    ref={selectCustom}
                    className="mt-1.5 w-full"
                    autoComplete="off"
                    multiple

                >
                    {/* {listofmembers.map((item) => (
                        <option value={item.name} selected={item.selected}>
                            {item.label}
                        </option>
                    ))} */}
                    {listofmembers.map((item) => (
                        <option class="flex space-x-3" value={item.id} selected={item.selected}>
                            <div class="avatar w-8 h-8">
                                <img class="rounded-full" src={(
                                    item.src
                                )} alt="avatar" />
                            </div>
                            <div class="flex flex-col">
                                <span> {(item.name)}</span>
                                <span class="text-xs opacity-80"> {(
                                    item.job
                                )}</span>
                            </div>
                        </option>
                    ))}
                </select>


            </label>
        </div>);
}
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