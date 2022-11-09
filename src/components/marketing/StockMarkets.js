import React, { useState } from 'react'
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'

import flag from '../../assets/images/flag.png'
import globe from '../../assets/images/globe.png'
import Stock from './Stock'

const StockMarkets = () => {
    const [activeTab, setActiveTab] = useState('usa');
    return (
        <>
            <div className='stocksTabs'>
                <h4>All stocks</h4>
                <button className={activeTab == 'usa' ? 'active' : ''} onClick={() => setActiveTab('usa')}>
                    <div className='stocksTabs__wr'>
                        <div className='stocksTabs__icon'>
                            <img src={flag} alt="flag" />
                        </div>
                        USA stocks
                    </div>
                </button>
                <button className={activeTab == 'nonusa' ? 'active' : ''} onClick={() => setActiveTab('nonusa')}>
                    <div className='stocksTabs__wr'>
                        <div className='stocksTabs__icon'>
                            <img src={globe} alt="globe" />
                        </div>
                        Non-USA stocks
                    </div>
                </button>
            </div>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="usa">
                    <Stock heading="USA Heading will be here" ranktitle="Market cap rank"/>
                </TabPane>
                <TabPane tabId="nonusa">
                    <Stock heading="No USA Stocks Heading will be here" ranktitle="Market non USA cap rank" />
                </TabPane>
            </TabContent>
        </>
    )
}

export default StockMarkets