import React from 'react'
import { Table } from 'reactstrap'
import TableHead from '../constant/TableHead'

// Icon
import { BsFillCaretDownFill, BsFillCaretUpFill, BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";

// image
import teslaImage from '../../assets/images/tesla.png'
import appleImage from '../../assets/images/apple.png'
import graphImage from '../../assets/images/graph.png'
import flagImage from '../../assets/images/flag.png'

const StockTable = () => {
    const data = [
        {
            volumn: 2,
            volumflow: "up",
            ticker: {
                icon: teslaImage,
                ticketTitle: 'TSLA'
            },
            title: "Tesla, Inc.",
            marketcap: "$2.99T",
            price: "$898.04",
            pl1d: "8.45%",
            pl1dflow: "up",
            chg1d: "$12.45",
            chg1dflow: "up",
            vol1d: "14.551M",
            usdvol: "$13.05B",
            float: "12.55M",
            pl30d: "23.75%",
            pl30dflow: "up",
            plytd: "9.12%",
            plytdflow: "down",
            lastdays: graphImage,
            ath: "$1247.11",
            flow: "CALLS",
            flowscale: "up",
            country: {
                flag: flagImage,
                name: "USA"
            }
        },
        {
            volumn: 1,
            volumflow: 'down',
            ticker: {
                icon: appleImage,
                ticketTitle: 'AAPL'
            },
            title: "Apple, Inc.",
            marketcap: "$1.52T",
            price: "$125.04",
            pl1d: "4.12%",
            pl1dflow: "down",
            chg1d: "$16.45",
            chg1dflow: "down",
            vol1d: "4.521M",
            usdvol: "$1.05B",
            float: "3.12M",
            pl30d: "13.42%",
            pl30dflow: "down",
            plytd: "3.22%",
            plytdflow: "up",
            lastdays: graphImage,
            ath: "$124.51",
            flow: "PUTS",
            flowscale: "down",
            country: {
                flag: flagImage,
                name: "USA"
            }
        },
        {
            volumn: 2,
            volumflow: "up",
            ticker: {
                icon: teslaImage,
                ticketTitle: 'TSLA'
            },
            title: "Tesla, Inc.",
            marketcap: "$2.99T",
            price: "$898.04",
            pl1d: "8.45%",
            pl1dflow: "up",
            chg1d: "$12.45",
            chg1dflow: "up",
            vol1d: "14.551M",
            usdvol: "$13.05B",
            float: "12.55M",
            pl30d: "23.75%",
            pl30dflow: "up",
            plytd: "9.12%",
            plytdflow: "down",
            lastdays: graphImage,
            ath: "$1247.11",
            flow: "CALLS",
            flowscale: "up",
            country: {
                flag: flagImage,
                name: "USA"
            }
        },
        {
            volumn: 2,
            volumflow: "up",
            ticker: {
                icon: appleImage,
                ticketTitle: 'TSLA'
            },
            title: "Tesla, Inc.",
            marketcap: "$2.99T",
            price: "$898.04",
            pl1d: "8.45%",
            pl1dflow: "up",
            chg1d: "$12.45",
            chg1dflow: "up",
            vol1d: "14.551M",
            usdvol: "$13.05B",
            float: "12.55M",
            pl30d: "23.75%",
            pl30dflow: "up",
            plytd: "9.12%",
            plytdflow: "down",
            lastdays: graphImage,
            ath: "$1247.11",
            flow: "CALLS",
            flowscale: "up",
            country: {
                flag: flagImage,
                name: "USA"
            }
        },


    ]
    return (
        <Table dark responsive>
            <thead>
                <TableHead />
            </thead>
            <tbody>
                {data &&
                    data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <div style={{ color: item.volumflow == "up" ? "#1EC876" : "#F44336" }}>
                                        {item.volumflow == "up" ?
                                            <BsFillCaretUpFill /> : <BsFillCaretDownFill />} {item.volumn}
                                    </div>
                                </td>
                                <td>
                                    {index}
                                </td>
                                <td>
                                    {item.ticker &&
                                        <div className='ticker'>
                                            <div className='ticker__icon'>
                                                <img src={item.ticker.icon} alt={item.ticker.ticketTitle} />
                                            </div>
                                            <div className='ticker__badge'>
                                                {item.ticker.ticketTitle}
                                            </div>
                                        </div>
                                    }
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.marketcap}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    <div style={{ color: item.pl1dflow == "up" ? "#1EC876" : "#F44336" }}>
                                        {item.pl1dflow == "up" ?
                                            <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                                        {item.pl1d}
                                    </div>
                                </td>
                                <td>
                                    <div style={{ color: item.chg1dflow == "up" ? "#1EC876" : "#F44336" }}>
                                        {item.chg1dflow == "up" ?
                                            <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                                        {item.chg1d}
                                    </div>
                                </td>
                                <td>{item.vol1d}</td>
                                <td>{item.usdvol}</td>
                                <td>{item.float}</td>
                                <td>
                                    <div style={{ color: item.pl30dflow == "up" ? "#1EC876" : "#F44336" }}>
                                        {item.pl30dflow == "up" ?
                                            <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                                        {item.pl30d}
                                    </div>
                                </td>
                                <td>
                                    <div style={{ color: item.plytdflow == "up" ? "#1EC876" : "#F44336" }}>
                                        {item.plytdflow == "up" ?
                                            <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                                        {item.plytd}
                                    </div>
                                </td>
                                <td>
                                    <img src={item.lastdays} alt="graph" />
                                </td>
                                <td> {item.ath}</td>
                                <td>
                                    <div style={{ color: item.flowscale == "up" ? "#1EC876" : "#F44336" }}>
                                        {item.flowscale == "up" ?
                                            <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
                                        {item.flow}
                                    </div>
                                </td>
                                <td>
                                    {item.country &&
                                        <div className='country'>
                                            <div className='country__icon'>
                                                <img src={item.country.flag} alt={item.country.name} />
                                            </div>
                                            {item.country.name}
                                        </div>
                                    }
                                </td>
                            </tr>
                        )
                    })}

            </tbody>
        </Table>
    )
}

export default StockTable