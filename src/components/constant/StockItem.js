import React from 'react'

const StockItem = ({ logo, title, market, float, floatCurrent, volume }) => {
    return (
        <div className='stockitem'>
            <div className='stockitem__title'>
                <div className='stockitem__icon'>
                    <img src={logo} alt={title} />
                </div>
                <h6>{title}<span>{market}</span></h6>
            </div>
            <p style={{ color: volume == "down" ? "#F44336" : "#1EC876" }}>{float} ({floatCurrent})</p>
        </div >
    )
}

export default StockItem