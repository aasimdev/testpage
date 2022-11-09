import React from 'react'
import StockItem from '../constant/StockItem'

import metaImg from '../../assets/images/meta.png'
import appleImg from '../../assets/images/apple.png'
import teslaImg from '../../assets/images/tesla.png'

const TopStock = () => {
    return (
        <div className='topstocks'>
            <StockItem logo={metaImg} title="META" market="$175.23" float="+$19.25" floatCurrent="+13.51%" volume="up" />
            <StockItem logo={appleImg} title="AAPL" market="$135.23" float="-$1.25" floatCurrent="-0.51%" volume="down" />
            <StockItem logo={teslaImg} title="TSLA" market="$335.23" float="-$600.25" floatCurrent="-66.51%" volume="down" />
            <StockItem logo={appleImg} title="AAPL" market="$135.23" float="-$1.25" floatCurrent="-0.51%" volume="down" />
            <StockItem logo={metaImg} title="META" market="$175.23" float="+$19.25" floatCurrent="+13.51%" volume="up" />
            <StockItem logo={teslaImg} title="TSLA" market="$335.23" float="-$600.25" floatCurrent="-66.51%" volume="down" />
        </div>

    )
}

export default TopStock