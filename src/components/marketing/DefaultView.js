import React from 'react'

// Icons
import vipImage from '../../assets/images/vip.svg'
import Chip from '../constant/Chip'

const DefaultView = () => {
    return (
        <div className='dfltView'>
            <div className='ranktitle'>Default view</div>
            <div className='ranklist'>
                <Chip color="yellow" icon={vipImage} title="Lorem ipsum" vip={true} />
            </div>
        </div>

    )
}

export default DefaultView