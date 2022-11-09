import React from 'react'
import DefaultView from './DefaultView'
import MarketCap from './MarketCap'
import StockTable from './StockTable'
import TableFooter from './TableFooter'

import { FaShare } from "react-icons/fa";


const Stock = ({ heading, ranktitle }) => {
    return (
        <div className='stock'>
            <div className='stock__text'>
                <h5>{heading}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <MarketCap ranktitle={ranktitle} />
            <DefaultView />
            <div className='stock__table'>
                <StockTable />
                <TableFooter />
            </div>
            <div className='stockShare'>
                <a href='#'>
                    SHARE <FaShare />
                </a>
            </div>
        </div>
    )
}

export default Stock