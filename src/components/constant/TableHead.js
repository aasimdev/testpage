import React from 'react'

const TableHead = () => {
    return (

        <tr>
            <th colSpan={2}>
                <div className='text-end'>
                    #
                </div>
            </th>
            <th>
                Ticket
            </th>
            <th>
                Name
            </th>
            <th>
                <div className='text-end'>
                    MARKET CAP
                </div>
            </th>
            <th>
                PRICE
            </th>
            <th>
                % P/L, 1D
            </th>
            <th>
                % P/L, 1D
            </th>
            <th>
                VOL, 1D
            </th>
            <th>
                USD VOL
            </th>
            <th>
                FLOAT
            </th>
            <th>
                % P/L, 30D
            </th>
            <th>
                % P/L, YTD
            </th>
            <th>
                Last 30 Days
            </th>
            <th>
                ATH
            </th>
            <th>
                FLOW
            </th>
            <th>
                COUNTRY
            </th>
        </tr>
    )
}

export default TableHead