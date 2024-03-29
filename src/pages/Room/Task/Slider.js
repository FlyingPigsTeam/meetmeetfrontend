import React from "react";

const Slider = () => {
  return (
    <div>
      <div x-show="showDrawer" x-data="{showDrawer:false}">
        <div
          className="fixed inset-0 z-[100] bg-slate-900/60 transition-opacity duration-200"
          x-show="showDrawer"
        ></div>
        <div className="fixed right-0 top-0 z-[101] h-full w-80">
          <div
            className="flex h-full w-full transform-gpu flex-col bg-white transition-transform duration-200 dark:bg-navy-700"
            x-show="showDrawer"
          >
            <div className="flex h-14 items-center justify-between bg-slate-150 p-4 dark:bg-navy-800">
              <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
                Edit Todo
              </h3>
              <div className="-mr-1.5 flex items-center space-x-2.5">
                <input
                  x-effect="showDrawer && setTimeout(() => showDrawer && $el.__x_tippy.show(), 500)"
                  className="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  type="checkbox"
                />
                <div className="flex">
                  <button
                    x-data="{isImportant:false}"
                    className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      x-show="!isImportant"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <svg
                      x-show="isImportant"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5.5 w-5.5 text-primary dark:text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      //style="display: none"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                  <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto p-4">
              <label className="block">
                <span>Todo Title</span>

                <input
                  className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter todo title"
                  type="text"
                  value="Design UI"
                />
              </label>

              <label className="block">
                <span>Tags:</span>
                <select
                  x-init="$el._x_tom = new Tom($el)"
                  className="mt-1.5 w-full"
                  multiple
                  placeholder="Select the tags"
                  autoComplete="off"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Update" selected>
                    Update
                  </option>
                </select>
              </label>

              <div>
                <span>Due date:</span>
                <label className="relative mt-1.5 flex">
                  <input
                    x-init="$el._x_flatpickr = flatpickr($el,{defaultDate: '2020-01-05'})"
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Choose date..."
                    type="text"
                  />
                  <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </label>
              </div>

              <label className="block">
                <span>Assigned to:</span>
                <select
                  className="mt-1.5 w-full"
                  x-init="$el._x_tom = new Tom($el, pages.tomSelect.assignedTodo)"
                  placeholder="Pick some links..."
                ></select>
              </label>

              <div>
                <span>Description</span>
                <div className="mt-1.5 w-full">
                  <div
                    className="h-36"
                    x-init="$el._x_quill = new Quill($el,{
                    modules : {
                      toolbar: [
                        ['bold', 'italic', 'underline'],
                        [
                          { list: 'ordered' },
                          { list: 'bullet' },
                          { header: 1 },
                          { background: [] },
                        ],
                      ],
                    },
                    placeholder: 'Enter your content...',
                    theme: 'snow',
                  })"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis incidunt nostrum repellat.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-150 py-3 px-4 dark:border-navy-600">
              <div className="flex space-x-1">
                <button className="btn h-8 w-8 rounded-full p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
              <button className="btn min-w-[7rem] bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
