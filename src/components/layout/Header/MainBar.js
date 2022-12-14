import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

// Profile
import faceImage from '../../../assets/images/face.png'

const MainBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className='mainbar'>
            <div className='mainbar__time'>
                <div className='mainbar__time__item'>
                    <p>Market closes in <span> 1hr 30min 20sec</span></p>
                </div>
                <div className='mainbar__time__item'>
                    <p>Fri, Aug 26</p>
                </div>
                <div className='mainbar__time__item'>
                    <p>2:45 PM EST</p>
                </div>
            </div>
            <div className='mainbar__action'>
                <div className='mainbar__notification'>
                    <a href='#'>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.58244 3.41756C2.83595 4.16405 2.37469 5.19523 2.37456 6.33408L2.3737 7.78159C2.37361 8.6011 2.20574 9.40738 1.89142 10.1562L11.1048 10.1552C10.7907 9.40647 10.6233 8.60059 10.623 7.78072L10.6232 6.33249C10.6234 4.38673 9.27431 2.76031 7.46158 2.32635C7.53283 2.14049 7.54877 1.938 7.50748 1.74331C7.46618 1.54862 7.36942 1.37006 7.22887 1.22917C7.03553 1.03582 6.77327 0.927212 6.49981 0.927241C6.22634 0.927271 5.96407 1.03593 5.77068 1.22932C5.6301 1.37024 5.5333 1.54883 5.49197 1.74353C5.45063 1.93822 5.46653 2.14071 5.53774 2.32655C4.78562 2.50659 4.11155 2.88845 3.58244 3.41756ZM1.02338 11.0726C0.950869 11.1452 0.901638 11.2377 0.88198 11.3384C0.862322 11.439 0.873129 11.5433 0.913021 11.6377C0.952912 11.7322 1.02008 11.8126 1.10592 11.8687C1.19177 11.9248 1.2924 11.954 1.39495 11.9526L5.34945 11.9522C5.22759 12.194 5.18496 12.4681 5.22762 12.7354C5.27028 13.0028 5.39606 13.2499 5.58711 13.4417C5.82879 13.6834 6.15661 13.8192 6.49844 13.8191C6.84027 13.8191 7.16811 13.6833 7.40985 13.4415C7.60117 13.2498 7.72727 13.0028 7.77024 12.7354C7.81321 12.468 7.77088 12.1939 7.64924 11.952L11.6023 11.9516C11.6709 11.953 11.7391 11.9406 11.8028 11.9154C11.8666 11.8901 11.9247 11.8523 11.9737 11.8043C12.0227 11.7563 12.0616 11.699 12.0882 11.6357C12.1148 11.5725 12.1285 11.5046 12.1285 11.436C12.1285 11.3674 12.1148 11.2995 12.0882 11.2363C12.0617 11.173 12.0228 11.1158 11.9738 11.0678C11.9248 11.0197 11.8667 10.982 11.8029 10.9567C11.7392 10.9315 11.671 10.9192 11.6024 10.9206L1.39506 10.9217C1.32617 10.9207 1.25778 10.9336 1.19394 10.9595C1.1301 10.9855 1.07211 11.0239 1.02338 11.0726Z" fill="white" fillOpacity="0.87" />
                        </svg>
                    </a>
                </div>
                <div className='mainbar__dropdown'>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            <div className='profileFace'>
                                <img src={faceImage} alt="Profile image" />
                            </div>
                            <p>Good afternoon, <span>T!</span></p>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Profile</DropdownItem>
                            <DropdownItem>Log out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default MainBar