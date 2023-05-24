import React from 'react'
import { usePopper } from "react-popper";
const PopOverContext = React.createContext(null);
const PopOverProvider = ({
    children,
    Show,
    popperConfig
}) => {
    const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);
    const [arrowElement, setArrowElement] = React.useState(null);
    const { styles, attributes } = usePopper(
        referenceElement,
        popperElement,
        popperConfig
    );
    const contextValue = {
        Show,
        referenceElement, setReferenceElement,
        popperElement, setPopperElement,
        arrowElement, setArrowElement,
        styles, attributes
    };
    return (
        <PopOverContext.Provider value={contextValue}>
            {children}
        </PopOverContext.Provider>
    );
}
export default PopOverContext;
export { PopOverProvider, PopOverContext };