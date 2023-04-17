/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SliderForEditting({ slideover, setslideover, id }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  function handleDifficultyChange(event) {
    setSelectedDifficulty(event.target.value);
  }
  return (
    <Transition.Root show={slideover} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setslideover(false);
        }}
      >
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-96 max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white pb-6 shadow-xl">
                    <div className="px-4 sm:px-6 bg-slate-150 p-4 dark:bg-navy-800">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-medium text-slate-700 dark:text-navy-100">
                          Edit Task
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => {
                              setslideover(false);
                            }}
                            className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div
                          className="h-full border-2 border-dashed border-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                      <div class="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto p-4">
                        <label class="block">
                          <span>Task Title</span>
                          <input
                            class="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            placeholder="Enter todo title"
                            type="text"
                          />
                        </label>
                        <label class="block">
                          <span>Task Description</span>
                          <textarea
                            class="form-input mt-1.5 h-24 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            placeholder="Enter todo title"
                            type="text"
                          />
                        </label>
                        <label class="block z-40">
                          <span>Difficulty:</span>
                          <select
                            //x-init="$el._x_tom = new Tom($el)"
                            class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            //multiple
                            value={selectedDifficulty}
                            onChange={handleDifficultyChange}
                            placeholder="Select difficulty of the task"
                            //autocomplete="off"
                          >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </select>
                        </label>
                        <label class="block z-40">
                          <span>Assigned To:</span>
                          <select
                            //x-init="$el._x_tom = new Tom($el)"
                            class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            //multiple
                            value={selectedDifficulty}
                            onChange={handleDifficultyChange}
                            placeholder="Select difficulty of the task"
                            //autocomplete="off"
                          >
                            <option value=""></option>
                          </select>
                        </label>
                      </div>
                      <div class="flex items-center justify-between mt-20 xl:mt-52 py-3 px-4">
                        <button class=" z-20 grid h-10 w-full items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm bg-primary text-slate-100 hover:opacity-80 dark:text-navy-900 duration-300">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
