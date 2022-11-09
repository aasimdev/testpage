import React from 'react'

const Chip = ({ icon, title, rank, color, vip }) => {
    return (
        <div className='chip'
            style={{ borderColor: color == "green" ? "rgba(30, 200, 118, 0.5)" : color == "red" ? "rgba(244, 67, 54, 0.5)" : color == "yellow" ? "#EDA044" : "#333333" }}>
            {icon &&
                <div className='chip__icon'>
                    <img src={icon} alt="chip alt" />
                </div>
            }
            <p 
            style={{ color: vip ? "#EDA044" : "rgba(255, 255, 255, 0.87)", fontStyle: vip ? "italic" : "normal" }}>{title} {rank && <span>{rank}</span>}</p>
        </div>
    )
}

export default Chip