import React, { useState } from 'react'
import PopOver from '../../components/PopOver'
import classNames from '../../utils/classNames';
import { usePopper } from 'react-popper';
import PopOverContext from '../../context/PopOverContext';
import Avatar200x200 from "../../assets/images/200x200.png";

const PopOverTest = () => {
    const [show, setShow] = useState(true);
    console.log(show);
    const toggle = () => { setShow(cur => !cur); console.log(show); };
    return (
        <div>


            {/* <PopOver
                Show={show}
                popperConfigs={
                    {
                        offset: 12,
                        placement: 'right-start',
                        modifiers: [
                            { name: 'flip', options: { fallbackPlacements: ['bottom', 'top'] } },
                            { name: 'preventOverflow', options: { padding: 10 } }
                        ]
                    }
                }>
                <PopOverContext.Consumer >

                    {
                        ({ referenceElement, setReferenceElement,
                            popperElement, setPopperElement,
                            arrowElement, setArrowElement,
                            styles, attributes, Show }) => (
                            <>
                                <button
                                    type='button'
                                    className="btn mt-[20%] bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                                    ref={setReferenceElement}
                                    onClick={toggle}
                                >
                                    Basic Popover
                                </button>
                                <div
                                    className={classNames("popper-root", Show && "show")}
                                    ref={setPopperElement}
                                    style={styles.popper}
                                    {...attributes.popper}
                                >
                                    <div className="popper-box max-w-xs">
                                        <div className="rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700">
                                            <PopOver.Popper.Body.Default />
                                        </div>
                                        <PopOver.Popper.Arrow />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </PopOverContext.Consumer>
            </PopOver> */}


            {/* <PopOver.Popper   >
                    <PopOver.Popper.Body >
                        <PopOver.Popper.Body.Default />
                    </PopOver.Popper.Body >
                    <PopOver.Popper.Arrow />
                </PopOver.Popper> */}

            <PopOver Show={show} popperConfigs={{ placement: 'right-end', offset: 12 }}>
                <PopOverContext.Consumer >

                    {
                        ({ referenceElement, setReferenceElement,
                            popperElement, setPopperElement,
                            arrowElement, setArrowElement,
                            styles, attributes, Show }) => (
                            <>
                                <button
                                    onClick={toggle}
                                    ref={setReferenceElement}
                                    className="avatar h-12 w-12 mt-[30%]"
                                >
                                    <img
                                        className="rounded-full"
                                        src={Avatar200x200}
                                        alt="avatar"
                                    />
                                    <span
                                        className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"
                                    ></span>
                                </button>
                                <div
                                    className={classNames("popper-root fixed", Show && "show")}
                                    ref={setPopperElement}
                                    style={styles.popper}
                                    {...attributes.popper}
                                >
                                    <div
                                        className="popper-box w-64 rounded-lg border text-left border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700"
                                    >
                                        <div
                                            className="flex items-center space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800"
                                        >
                                            <div className="avatar h-14 w-14">
                                                <img
                                                    className="rounded-full"
                                                    src="images/200x200.png"
                                                    alt="avatar"
                                                />
                                            </div>
                                            <div>
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                                                >
                                                    Travis Fuller
                                                </a>
                                                <p className="text-xs text-slate-400 dark:text-navy-300">
                                                    Product Designer
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col pt-2 pb-5">
                                            <a
                                                href="#"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning text-white"
                                                >
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
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Profile
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Your profile setting
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-info text-white"
                                                >
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
                                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Messages
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Your messages and tasks
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-white"
                                                >
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
                                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Team
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Your team activity
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-error text-white"
                                                >
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
                                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Activity
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Your activity and events
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-success text-white"
                                                >
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
                                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Settings
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Webapp settings
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="mt-3 px-4">
                                                <button
                                                    className="btn h-9 w-full space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                        />
                                                    </svg>
                                                    <span>Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </PopOverContext.Consumer>


            </PopOver>

        </div >

    )
}

export default PopOverTest