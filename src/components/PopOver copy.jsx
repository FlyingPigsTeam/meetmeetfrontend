import React from "react";
import { useState, useEffect, useContext } from "react";
import { usePopper } from "react-popper";

const PopOver = () => {

    return (
        <>
            <div
                x-data="usePopper({
       offset: 12,
       placement: 'right-start',
       modifiers: [
          {name: 'flip', options: {fallbackPlacements: ['bottom','top']}},
          {name: 'preventOverflow', options: {padding: 10}}
       ]
    })"
                // @click.outside="isShowPopper && (isShowPopper = false)"
                class="flex"
            >
                <button
                    class="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    x-ref="popperRef"
                //   @click="isShowPopper = !isShowPopper"
                >
                    Basic Popover
                </button >
                <div
                    x-ref="popperRoot"
                    class="popper-root"
                // : class="isShowPopper && 'show'"
                >

                    <div class="popper-box max-w-xs">
                        <div
                            class="rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700"
                        >
                            <h3
                                class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
                            >
                                UI/UX Design
                            </h3>
                            <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <div class="mt-3 flex space-x-2">
                                <a
                                    href="#"
                                    class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    Tag 1
                                </a>
                                <a
                                    href="#"
                                    class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    Tag 2
                                </a>
                                <a
                                    href="#"
                                    class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    Tag 3
                                </a>
                            </div>
                            <p class="mt-3 text-xs text-slate-400 dark:text-navy-300">
                                Lorem ipsum dolor sit amet, elit.
                            </p>
                        </div>
                        <div class="h-4 w-4" data-popper-arrow>
                            <svg
                                viewBox="0 0 16 9"
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute h-4 w-4"
                                fill="currentColor"
                            >
                                <path
                                    class="text-slate-150 dark:text-navy-600"
                                    d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                                />
                                <path
                                    class="text-white dark:text-navy-700"
                                    d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}

export default PopOver;



// import { createPopper } from "@popperjs/core";

// export default (userOptions = {}) => ({
//     popperInstance: null,
//     options: buildOptions(userOptions),
//     isShowPopper: false,
//     init() {
//         this.$nextTick(
//             () =>
//             (this.popperInstance = createPopper(
//                 this.$refs.popperRef,
//                 this.$refs.popperRoot,
//                 this.options
//             ))
//         );
//         this.$watch("isShowPopper", (val) => val && this.popperInstance.update());

//         Alpine.effect(
//             () => Alpine.store("breakpoints").name && (this.isShowPopper = false)
//         );
//     },
// });

const buildOptions = (options) => {
    const config = {
        placement: options.placement ?? "auto",
        strategy: options.strategy ?? "fixed",
        onFirstUpdate: options.onFirstUpdate ?? function () { },

        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, options.offset ?? 0],
                },
            },
        ],
    };

    if (options.modifiers) config.modifiers.push(...options.modifiers);

    return config;
};


