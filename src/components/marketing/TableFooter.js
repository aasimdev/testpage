import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const TableFooter = () => {
    return (
        <div className='tablefooter'>
            <div className='rowsshowing'>
                <p>Showing rows 1 - 50 out of 6549</p>
            </div>
            <div className='tabpagination'>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            previous
                            >
                            <BsFillCaretLeftFill />
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" className='current'>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            next
                        >
                            <BsFillCaretRightFill />
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    )
}

export default TableFooter