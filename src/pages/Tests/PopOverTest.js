import React, { useState } from 'react'
import PopOver from '../../components/PopOver'
import { usePopper } from 'react-popper';
const PopOverTest = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });
    const [show, setShow] = useState(true);

    const toggle = () => setShow(cur => !cur);
    return (
        <div>


            <PopOver popperConfigs={
                {
                    offset: 12,
                    placement: 'right-start',
                    modifiers: [
                        { name: 'flip', options: { fallbackPlacements: ['bottom', 'top'] } },
                        { name: 'preventOverflow', options: { padding: 10 } }
                    ]
                }
            }>
                <PopOver.Button Click={toggle} />
                {show &&
                    <PopOver.Popper >
                        <PopOver.Popper.Body >
                            <PopOver.Popper.Body.Default />
                        </PopOver.Popper.Body >
                        <PopOver.Popper.Arrow />
                    </PopOver.Popper>}
            </PopOver>
            {/* <div>
                <button type="button" ref={setReferenceElement} onClick={toggle}>
                    Reference element
                </button>

                {show && <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                    Popper element
                    <div ref={setArrowElement} style={styles.arrow} />
                </div>}
            </div> */}
        </div>

    )
}

export default PopOverTest