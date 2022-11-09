import React from 'react'
import Header from '../layout/Header/Header'
import Sidebar from '../layout/Sidebar'
import Stock from './Stock'
import StockMarkets from './StockMarkets'
import TopStock from './TopStock'

const Marketing = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <div className='content'>
                <Header />
                <TopStock />
                <StockMarkets />

            </div>
        </div>
    )
}

export default Marketing