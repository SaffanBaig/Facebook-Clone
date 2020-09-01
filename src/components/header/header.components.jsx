import React from 'react'
import './header.styles.css'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {ReactComponent as FbLogo} from '../../assets/images/fb-logo.svg';

function Header() {
    return (
        <div className='header'>
            <div className="header-left">
                <FbLogo className='fb-logo'/>
                <div className="header-input">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header-middle">
                <div className="header-option">
                    <HomeIcon fontsize="large" />
                </div>
                <div className="header-option">
                    <FlagIcon fontsize="large" />
                </div>
                <div className="header-option">
                    <SubscriptionsOutlinedIcon fontsize="large" />
                </div>
                <div className="header-option">
                    <StorefrontOutlinedIcon fontsize="large" />
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontsize="large" />
                </div>
            </div>
            <div className="header-right"></div>
        </div>
    )
}

export default Header;
