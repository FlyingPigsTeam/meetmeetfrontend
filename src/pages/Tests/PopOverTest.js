import React from 'react'
import PopOver from '../../components/PopOver'
const PopOverTest = () => {
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
                <PopOver.Button />
                <PopOver.Popper >
                    <PopOver.Popper.Body >
                        <PopOver.Popper.Body.Default />
                    </PopOver.Popper.Body >
                    <PopOver.Popper.Arrow />
                </PopOver.Popper>
            </PopOver>
        </div>
    )
}

export default PopOverTest