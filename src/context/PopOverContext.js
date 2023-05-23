import React from 'react'
import { usePopper } from "react-popper";
const PopOverProvider = React.createContext(null);
const PopOverContext = ({
    children,
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
        referenceElement, setReferenceElement,
        popperElement, setPopperElement,
        arrowElement, setArrowElement,
        styles, attributes
    };
    return (
        <PopOverProvider.Provider value={{
            referenceElement, setReferenceElement,
            popperElement, setPopperElement,
            arrowElement, setArrowElement,
            styles, attributes
        }}>
            {children}
        </PopOverProvider.Provider>
    );
}
export default PopOverContext;
export { PopOverProvider, PopOverContext };