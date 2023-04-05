import React, { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Flatpickr from "react-flatpickr";
import Tom from "tom-select";

import Avatar200x200 from "../../../assets/images/200x200.png";

const InformationForm = ({ Title, ...props }) => {
  const sampleJson = {
    title: "soltaniali208040gmail.com",
    description: "this is a test !11",
    start_date: "2018-03-29T00:00:00Z",
    end_date: "2018-03-29T00:00:00Z",
    room_type: 1,
    is_premium: 1,
    open_status: 1,
    password: "asdqwe@r",
    maximum_member_count: 50,
    categories: [
      {
        name: "Cinema",
      },
      {
        name: "sport",
      },
    ],
    main_picture_path: "__",
    link: "link",
  };
  const selectCustom = useRef(null);

  useEffect(() => {
    const selectOptions = new Tom(selectCustom.current);
    return () => {
      selectOptions.destroy();
    };
  }, []);

  const handleSubmit = () => {
    const selectedValues = selectCustom.current.value;
    console.log(selectedValues);
  };
  const fp = useRef(null);
  const [showPassword,setShowPassword]=useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      room_type: "",
      link: "",
      main_picture_path: "",
      password: "",
      description: "",
      maximum_member_count: "",
      is_premium: "",
      open_status: "",
      categories: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Required"),
      last_name: yup.string().required("Required"),
      link: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
      username: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
      password: yup
        .string()
        .min(8, "Must be at least 8 characters.")
        .max(32, "Must be 32 characters or less.")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, {
          message:
            "Must have at least one lowercase letter, one uppercase letter & one digit",
        })
        .required("Required"),
      repeat_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Required"),
      acceptPrivacyPolicy: yup
        .boolean()
        .oneOf([true], "Please accept the privacy policy")
        .required("Please accept the privacy policy"),
    }),
    onSubmit: async (values, e) => {
      //   registerUser(values);
      //   await delay(4000);
      //e.preventDefault();
      console.log(values);
    },
  });
  return (
    <>
      <div class="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
        <h2 class="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          {Title + " Room"}
        </h2>
        <div class="flex justify-center space-x-2">
          {/* <button class="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
            Cancel
          </button>
          <button class="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
            Save
          </button> */}
        </div>
      </div>
      <div class="p-4 sm:p-5">
        <div class="flex flex-col">
          <span class="text-base text-left font-medium text-slate-600 dark:text-navy-100">
            Avatar
          </span>
          <div class="avatar mt-1.5 h-20 w-20">
            <img class="mask is-squircle" src={Avatar200x200} alt="avatar" />
            <div class="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
              <button class="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label class="block text-left">
            <span>Title</span>
            <span class="relative mt-1.5 flex">
              <input
                class="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter Title"
                type="text"
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </span>
            </span>
          </label>
          {/* Check BOXES */}
          <label class="block text-left">
            <span>Password</span>
            <span class="relative mt-1.5 flex">
              <input
                class="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter Password"
                type="password"
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </span>
            </span>
          </label>
          <label class="block text-left">
            <span>Select Categories</span>
            <select
              ref={selectCustom}
              className="mt-1.5 w-full"
              placeholder="Select an option..."
              autocomplete="off"
              multiple
            >
              <option value="">Example: Art</option>
              <option value="AL">Alabama</option>
              <option value="AR">Arkansas</option>
              <option value="CA" selected>
                California
              </option>
              <option value="CO">Colorado</option>
            </select>
          </label>
          <label class="block text-left">
            <span>Max members</span>
            <select class="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
              <option >Corporate event</option>
              <option>25</option>
              <option>40</option>
              <option>50</option>
            </select>
          </label>
          <label class="block text-left">
            <span>Start Date & End Date</span>
            <span class="relative mt-1.5 flex">
              <Flatpickr
                ref={fp}
                options={{
                  mode: "range",
                  enableTime: true,
                  // dateFormat: "Y-m-d",
                  // defaultDate: ["2016-10-10", "2016-10-20"],
                  onChange: function (selectedDates, dateStr, instance) {
                    console.log(selectedDates, dateStr);
                  },
                }}
                render={({ defaultValue, value, ...props }, ref) => {
                  return (
                    <input
                      defaultValue={defaultValue}
                      ref={ref}
                      class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Choose date..."
                      type="text"
                      onChange={() => console.log(fp)}
                    />
                  );
                }}
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </span>
            </span>
          </label>
          <label class="block text-left">
            <span>Description</span>
            <span class="relative mt-1.5 flex">
              <textarea
                rows="2"
                placeholder=" Enter Text"
                class="form-textarea resize-none w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              ></textarea>
            </span>
          </label>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 py-7 px-2">
            <label class="inline-flex items-center space-x-2">
              <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-primary checked:!bg-none checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
              />
              <span>Private</span>
            </label>{" "}
            <label class="inline-flex items-center space-x-2">
              <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-info checked:!bg-none checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
              />
              <span>Open</span>
            </label>
            <label class="inline-flex items-center space-x-2">
              <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-secondary checked:!bg-none checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-secondary-light dark:checked:before:bg-white"
                type="checkbox"
              />
              <span>Premium</span>
            </label>
            {/* RadioBox */}
            {/* <label class="inline-flex items-center space-x-2">
              <input
                class="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="basic_filled"
                type="radio"
              />
              <p>Primary</p>
            </label>
            <label class="inline-flex items-center space-x-2">
              <input
                class="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                name="basic_filled"
                type="radio"
              />
              <p>Secondary</p>
            </label>
            <label class="inline-flex items-center space-x-2">
              <input
                class="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-info checked:!bg-info hover:!border-info focus:!border-info dark:border-navy-500 dark:bg-navy-900"
                name="basic_filled"
                type="radio"
              />
              <p>Info</p>
            </label> */}
          </div>
        </div>
        {/* <div class="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
                <div>
                  <h3 class="text-base font-medium text-slate-600 dark:text-navy-100">
                    Linked Accounts
                  </h3>
                  <p class="text-xs+ text-slate-400 dark:text-navy-300">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div class="flex items-center justify-between pt-4">
                    <div class="flex items-center space-x-4">
                      <div class="h-12 w-12">
                        <img src="images/100x100.png" alt="logo" />
                      </div>
                      <p class="font-medium line-clamp-1">
                        Sign In with Google
                      </p>
                    </div>
                    <button class="btn h-8 rounded-full border border-slate-200 px-3 text-xs+ font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                      Connect
                    </button>
                  </div>
                </div> */}
      </div>
      <div class="flex flex-col items-center space-y-4 border-t border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
        <h2 class="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          {/* Room Setting */}
        </h2>
        <div class="flex justify-center space-x-2">
          <button class="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
            Cancel
          </button>
          <button class="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
            {Title === "Add" ? "Add Room" : "Save"}
          </button>
        </div>
      </div>
    </>
  );
};

export default InformationForm;
