import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import Flatpickr from "react-flatpickr";
import React, { useRef, useState, useEffect, useContext } from "react";
import Tom from "tom-select";

import AuthContext from "../../context/AuthContext";

import Avatar200x200 from "../../assets/images/200x200.png";

const AddRoomFrom = ({ setModalOpen, ...restProps }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const authTokens = useContext(AuthContext).authTokens;

  // TODO: HANDLE VALID CATEGORIES
  const categories = [
    { value: "cinema", label: "cinema" },
    { value: "sport", label: "sport" },
  ];

  const sampleValidJson4API = {
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
        name: "cinema",
      },
      {
        name: "sport",
      },
    ],
    main_picture_path: "__",
    link: "link",
  };

  // Create Flatpickr DatePicker Ref
  const fp = useRef(null);
  const [dateRange, setDateRange] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      room_type: false,
      is_premium: false,
      open_status: false,
      password: "",
      maximum_member_count: 0,
      categories: [],
      dateRange: dateRange,
      // start_date: "",
      // end_date: "",
      main_picture_path: "__",
      link: "link",
    },
    validationSchema: yup.object().shape({
      title: yup
        .string()
        .max(100, "Title must be at most 100 characters")
        .required("Required"),
      description: yup.string().required("Required"),
      open_status: yup
        .boolean()
        .oneOf([true, false], "Please update open/close status")
        .required("Required"),
      is_premium: yup
        .boolean()
        .oneOf([true, false], "Please update premium/normal status")
        .required("Required"),
      room_type: yup
        .boolean()
        .oneOf([true, false], "Please update public/private status")
        .required("Required"),
      password: yup
        .string()
        .min(8, "Must be at least 8 characters.")
        .max(32, "Must be 32 characters or less.")
        .required("Required"),
      maximum_member_count: yup
        .number("It's not a number")
        .oneOf([25, 40, 50], "Please select a valid number from the list")
        .required("Required"),
      categories: yup
        .array()
        .min(1, "Please select at least one category")
        .required("Required"),
      dateRange: yup
        .array()
        .min(2, "Please select a start and end date")
        .test(
          "start-end-dates",
          "End date must be after start date",
          (value) => {
            const [start, end] = value;
            return start && end ? end > start : true;
          }
        ),
    }),
    onSubmit: async (values) => {
      // TODO: CREATE API PROXY + ACCELRATORS
      const { data } = await axios
        .post(
          `http://127.0.0.1:8000/api/rooms`,
          {
            title: values.title,
            description: values.description,
            room_type: values.room_type ? 1 : 0,
            is_premium: values.is_premium ? 1 : 0,
            open_status: values.open_status ? 1 : 0,
            password: values.password,
            maximum_member_count: values.maximum_member_count,
            categories: values.categories?.map((item) => {
              return { name: item };
            }),
            start_date: values.dateRange[0].toISOString(),
            end_date: values.dateRange[1].toISOString(),
            main_picture_path: "__",
            link: "link",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + authTokens.access,
            },
          }
        )
        .then((response) => response);
      console.log(data);
      setModalOpen(false);
      // TODO : NAVIGATE AFTER SUBMITION
      // TODO : IS SUBMITTING HANDLE
      // TODO : SPINNER COMPONENT
      // TODO : ERROR HANDLING : Cards + Catch Server swal
      // TODO : TOASTIFY : Room Added successfully
      navigate(0);
    },
  });

  // Create & Config TomSelect
  //1
  const selectCustom = useRef(null);
  useEffect(() => {
    const selectOptions = new Tom(selectCustom.current, {
      valueField: "value",
      labelField: "label",
      options: categories,
      items: [],
      placeholder: "Select some Categories",
      hidePlaceholder: true,
      onBlur: () => {
        formik.setFieldTouched("categories", true);
        formik.validateForm();
      },
      onChange: (value) => {
        formik.setFieldValue("categories", value);
        formik.validateForm();
      },
    });

    return () => {
      selectOptions.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
        <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Add Room
        </h2>
        <div className="flex justify-center space-x-2">
          {/* <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                        Cancel
                    </button>
                    <button className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                        Save
                    </button> */}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-4 sm:p-5">
          <div className="flex flex-col">
            <span className="text-base text-left font-medium text-slate-600 dark:text-navy-100">
              Avatar
            </span>
            <div className="avatar mt-1.5 h-20 w-20">
              <img
                className="mask is-squircle"
                src={Avatar200x200}
                alt="avatar"
              />
              <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
                <button className="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-left">
              <span>Title</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Title"
                  type="text"
                  value={formik.values.title}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="title"
                  id="title"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
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
              {formik.touched.title && formik.errors.title && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.title}
                </span>
              )}
            </label>
            {/* Check BOXES */}
            <label className="block text-left">
              <span>Password</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="password"
                  id="password"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
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
                <button
                  className="absolute right-1 flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  onClick={() => setShowPassword((curr) => !curr)}
                >
                  {/* <svg fill="currentColor" className="h-4.5 w-4.5" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path
                                            fill-rule="evenodd"
                                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg> */}
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.5 w-4.5"
                      viewBox="0 0 20 20"
                      fill="none"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-4.5 w-4.5"
                      viewBox="0 0 20 20"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
              </span>
              {formik.touched.password && formik.errors.password && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.password}
                </span>
              )}
            </label>
            <label className="block text-left">
              <span>Select Categories</span>
              <select
                ref={selectCustom}
                className="mt-1.5 w-full"
                autoComplete="off"
                multiple
                id="categories"
                name="categories"
              >
                {categories.map((item) => (
                  <option value={item.value} selected={item.selected}>
                    {item.label}
                  </option>
                ))}
              </select>
              {formik.touched.categories && formik.errors.categories && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.categories}
                </span>
              )}
            </label>
            <label className="block text-left">
              <span>Max members</span>
              <select
                value={formik.values.maximum_member_count}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="maximum_member_count"
                id="maximum_member_count"
                className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
              >
                <option>Corporate event</option>
                <option>25</option>
                <option>40</option>
                <option>50</option>
              </select>
              {formik.touched.maximum_member_count &&
                formik.errors.maximum_member_count && (
                  <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                    {formik.errors.maximum_member_count}
                  </span>
                )}
            </label>
            <label className="block text-left">
              <span>Start Date & End Date</span>
              <span className="relative mt-1.5 flex">
                <Flatpickr
                  ref={fp}
                  options={{
                    mode: "range",
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    // defaultDate: ["2016-10-10", "2016-10-20"],
                    onChange: (selectedDates) => {
                      formik.setFieldValue("dateRange", selectedDates);
                      setDateRange(selectedDates);
                      formik.validateForm();
                    },
                    onClose: () => {
                      formik.setFieldTouched("dateRange", true);
                      formik.validateForm();
                    },
                  }}
                  render={({ defaultValue, value, ...props }, ref) => {
                    return (
                      <input
                        defaultValue={defaultValue}
                        ref={ref}
                        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Choose date..."
                        type="text"
                        onChange={() => console.log(fp)}
                      />
                    );
                  }}
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
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
              {formik.touched.dateRange && formik.errors.dateRange && (
                <span className="text-tiny+ text-left text-error mt-1 ">
                  {formik.errors.dateRange}
                </span>
              )}
            </label>
            <label className="block text-left">
              <span>Description</span>
              <span className="relative mt-1.5 flex">
                <textarea
                  rows="2"
                  placeholder=" Enter Text"
                  className="form-textarea resize-none w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="description"
                  id="description"
                ></textarea>
              </span>
              {formik.touched.description && formik.errors.description && (
                <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                  {formik.errors.description}
                </span>
              )}
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 py-7 px-2">
              <label className="inline-flex items-center space-x-2">
                <input
                  className="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-primary checked:!bg-none checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                  value={formik.values.room_type}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="room_type"
                  id="room_type"
                />
                <span>Public</span>
                {formik.touched.room_type && formik.errors.room_type && (
                  <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                    {formik.errors.room_type}
                  </span>
                )}
              </label>{" "}
              <label className="inline-flex items-center space-x-2">
                <input
                  className="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-info checked:!bg-none checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                  type="checkbox"
                  value={formik.values.open_status}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="open_status"
                  id="open_status"
                />
                <span>Open</span>
                {formik.touched.open_status && formik.errors.open_status && (
                  <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                    {formik.errors.open_status}
                  </span>
                )}
              </label>
              <label className="inline-flex items-center space-x-2">
                <input
                  className="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-secondary checked:!bg-none checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-secondary-light dark:checked:before:bg-white"
                  type="checkbox"
                  value={formik.values.is_premium}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="is_premium"
                  id="is_premium"
                />
                <span>Premium</span>
                {formik.touched.is_premium && formik.errors.is_premium && (
                  <span className="text-tiny+ text-left text-error mt-1 line-clamp-1">
                    {formik.errors.is_premium}
                  </span>
                )}
              </label>
              {/* RadioBox */}
              {/* <label className="inline-flex items-center space-x-2">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="basic_filled"
                type="radio"
              />
              <p>Primary</p>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                name="basic_filled"
                type="radio"
              />
              <p>Secondary</p>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-info checked:!bg-info hover:!border-info focus:!border-info dark:border-navy-500 dark:bg-navy-900"
                name="basic_filled"
                type="radio"
              />
              <p>Info</p>
            </label> */}
            </div>
          </div>

          {/* <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
                <div>
                  <h3 className="text-base font-medium text-slate-600 dark:text-navy-100">
                    Linked Accounts
                  </h3>
                  <p className="text-xs+ text-slate-400 dark:text-navy-300">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12">
                        <img src="images/100x100.png" alt="logo" />
                      </div>
                      <p className="font-medium line-clamp-1">
                        Sign In with Google
                      </p>
                    </div>
                    <button className="btn h-8 rounded-full border border-slate-200 px-3 text-xs+ font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                      Connect
                    </button>
                  </div>
                </div> */}
        </div>
        <div className="flex flex-col items-center space-y-4 border-t border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
          <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
            {/* Room Setting */}
          </h2>
          <div className="flex justify-center space-x-2">
            {/* <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
              Cancel
            </button> */}

            <button
              id="submit"
              type="submit"
              disabled={formik.isSubmitting}
              className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              {formik.isSubmitting ? (
                <>
                  <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"></div>
                </>
              ) : (
                "Add Room"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRoomFrom;
