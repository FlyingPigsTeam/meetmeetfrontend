import React, { useContext } from "react";
import { useState } from "react";
import { usePopper } from "react-popper";

import { PopOverContext, PopOverProvider } from "../context/PopOverContext";
import  classNames  from "../utils/classNames";

export default function PopOver({ children, popperConfigs }) {

    return (
        <>
            <PopOverProvider popperConfig={buildOptions(popperConfigs)}>
                {children}
                {/* <div
                    ref={setReferenceElement}
                    className="flex"
                >
                    <PopOver.Button />
                    <PopOver.Popper styles={styles.popper} attributes={attributes.popper}>
                        <PopOver.Popper.Body />
                        <PopOver.Popper.Arrow ref={setArrowElement} styles={styles.arrow} />
                    </PopOver.Popper>
                </div> */}
            </PopOverProvider>
        </>
    );
}

PopOver.Button = function PPButton({Click}) {
    const {
        referenceElement, setReferenceElement,
        popperElement, setPopperElement,
        arrowElement, setArrowElement,
        styles, attributes
    } = useContext(PopOverContext);
    console.log("BUtton",styles.arrow)
    return (
        <>
            <button
                type='button'
                className="btn mt-[20%] bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                ref={setReferenceElement}
                onClick={Click}
            >
                Basic Popover
            </button>

        </>
    );
};

PopOver.Popper = function PPopper({ children }) {
    const {
        referenceElement, setReferenceElement,
        popperElement, setPopperElement,
        arrowElement, setArrowElement,
        styles, attributes
    } = useContext(PopOverContext);
    console.log("PPopper",styles.arrow)
    return (
        <>
            <div
                className={classNames("popper-root show")}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                <div className="popper-box max-w-xs">
                    {children}
                </div>
            </div>

        </>
    );
};

PopOver.Popper.Body = function PBody({ children }) {

    return (
        <>
            <div className="rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700">
                {children}
            </div>
        </>
    );
};
PopOver.Popper.Body.Default = function PBody() {
    return (
        <>
            <h3
                className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
            >
                UI/UX Design
            </h3>
            <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mt-3 flex space-x-2">
                <a
                    href="#"
                    className="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                    Tag 1
                </a>
                <a
                    href="#"
                    className="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                    Tag 2
                </a>
                <a
                    href="#"
                    className="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                    Tag 3
                </a>
            </div>
            <p className="mt-3 text-xs text-slate-400 dark:text-navy-300">
                Lorem ipsum dolor sit amet, elit.
            </p>
        </>
    );

}

PopOver.Popper.Arrow = function PArrow() {
    const {
        referenceElement, setReferenceElement,
        popperElement, setPopperElement,
        arrowElement, setArrowElement,
        styles, attributes
    } = useContext(PopOverContext);
    return (
        <>

            <div className="h-4 w-4"
                ref={setArrowElement}
                style={styles.arrow}
                {...attributes.arrow}
                data-popper-arrow
                
            >

                <svg
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-4 w-4"
                    fill="currentColor"
                >
                    <path
                        className="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        className="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                </svg>
            </div>
        </>
    );

}

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


