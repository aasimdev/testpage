import React from 'react'
import Chip from '../constant/Chip'

// Icons
import greenFireImage from '../../assets/images/green-fire.svg'
import rocketImage from '../../assets/images/rocket.svg'

const MarketCap = ({ranktitle}) => {
    return (
        <div className='marketcap'>
            <div className='ranktitle'>{ranktitle}</div>
            <div className='ranklist'>
                <Chip color="green" icon={greenFireImage} title="Today's" rank="lps" />
                <Chip color="red" icon={rocketImage} title="Today's" rank="lps" />
                <Chip title="Penny stocks" />
            </div>
        </div>
    )
}

export default MarketCap