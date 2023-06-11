import React from 'react';
import classNames from '../../../utils/classNames';
import PopOverContext from '../../../context/PopOverContext';
import PopOver from "../../../components/PopOver";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useClickOutside } from '@mantine/hooks';

const MemberActions = ({ user }) => {
    const navigate = useNavigate();
    const { idroom } = useParams();


    const ConvertRole = (member) => {
        const result =
            member.is_owner === true &&
                member.is_member === true &&
                member.request_status === 3
                ? "Owner"
                : member.is_member === true && member.is_owner === false
                    ? "Member"
                    : member.request_status === 0 &&
                        member.is_member === false &&
                        member.is_owner === false
                        ? "Pending"
                        : "WTF USER ROLE";
        if (result === "WTF USER ROLE") {
            console.log("🚀Members.js:131 ~ ConvertRole", result);
        }
        return result;
    };
    const actionsDetails = {
        Accept: {
            actionName: "Accept",
            iconPath: (
                <>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </>
            ),
            action: async (requestId) => {
                const acceptUser = async () => {
                    const { data } = await axios
                        .put(
                            `/api/my-rooms/${idroom}/requests?request_id=${requestId}`,
                            { is_member: true, request_status: 2 },
                        )
                        .then((response) => response);
                    console.log("memberAccept", data);
                };
                await acceptUser();
                navigate(0);
            },
        },
        Kick: {
            actionName: "Kick",
            iconPath: (
                <>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </>
            ),
            action: async (requestId) => {

                const deleteUser = async () => {
                    const { data } = await axios
                        .delete(
                            `/api/my-rooms/${idroom}/requests?request_id=${requestId}`
                        )
                        .then((response) => response);
                    console.log("memberKick", data);
                };
                await deleteUser();
                navigate(0);
            },
        },

        Reject: {
            actionName: "Reject",
            iconPath: (
                <>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </>
            ),
            action: async (requestId) => {

                const deleteUser = async () => {
                    const { data } = await axios
                        .delete(
                            `/api/my-rooms/${idroom}/requests?request_id=${requestId}`
                        )
                        .then((response) => response);
                    console.log("memberReject", data);
                };
                await deleteUser();
                navigate(0);
            },
        },
    };
    const roleDetails = {
        Owner: {
            Title: "Owner",
            ListBadge: (
                <>
                    <div className="badge rounded-full border border-secondary text-secondary dark:border-secondary-light dark:text-secondary-light">
                        Owner
                    </div>
                </>
            ),
            Actions: [],
        },
        Member: {
            Title: "Member",
            ListBadge: (
                <>
                    <div className="badge rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light">
                        Member
                    </div>
                </>
            ),
            Actions: ["Kick"],
        },
        Pending: {
            Title: "Pending",
            ListBadge: (
                <>
                    <div className="badge rounded-full border border-info text-info">
                        Pending
                    </div>
                </>
            ),
            Actions: ["Accept", "Reject"],
        },
    };

    const [show, setShow] = React.useState(false);
    console.log(show);
    const toggle = () => { setShow(cur => !cur); console.log(show); };
    const popperOutClick = useClickOutside(()=>setShow(false));
    return (
        <>

            <PopOver
                Show={show}
                popperConfigs={
                    { placement: 'bottom-end', offset: 4 }
                }>
                <PopOverContext.Consumer >
                    {
                        ({ referenceElement, setReferenceElement,
                            popperElement, setPopperElement,
                            arrowElement, setArrowElement,
                            styles, attributes, Show }) => (
                            <>
                                <div className="inline-flex">

                                    <button
                                        ref={setReferenceElement}
                                        onClick={toggle}
                                        class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div
                                        className={classNames("popper-root", Show && "show")}
                                        ref={setPopperElement}
                                        style={styles.popper}
                                        {...attributes.popper}
                                    // :class="isShowPopper && 'show'"
                                    >
                                        <div
                                            class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                                            ref={popperOutClick}
                                        >
                                            <ul>
                                                {roleDetails[ConvertRole(user)].Actions.map(
                                                    (action, index) => (

                                                        <li id={`action-item-${index}`}
                                                            onClick={() => actionsDetails[action].action(user.id)}
                                                            className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="mt-px h-4.5 w-4.5"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            >
                                                                {actionsDetails[action].iconPath}
                                                            </svg>
                                                            <span>
                                                                {" "}
                                                                {
                                                                    actionsDetails[action]
                                                                        .actionName
                                                                }
                                                            </span>
                                                        </li>

                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    }
                </PopOverContext.Consumer>
            </PopOver>

        </>
    )
}

export default MemberActions