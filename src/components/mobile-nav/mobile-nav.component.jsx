import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {toggleSignInSignUp } from '../../redux/modal/modal.actions';
import {selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as HomeSvg } from '../../svgicon/home.svg';
import { ReactComponent as EventSvg } from '../../svgicon/server.svg';
// import { ReactComponent as PlaceSvg } from '../../svgicon/map.svg';
import { ReactComponent as AboutSvg } from '../../svgicon/info.svg';
import { ReactComponent as UserSvg } from '../../svgicon/user.svg';

import './mobile-nav.styles.scss';

const MobileNav = ({ toggleSignSignOut, currentUser }) => (
    <div className='mobile-nav'>
        <div className='nav top-nav'>
            <NavLink exact activeClassName='active-nav' to='/' className='logo'><p>Koora</p></NavLink>           
            <div className='user-pop'>
                <NavLink to='/about'><AboutSvg className='svg-icon' /></NavLink>               
            </div>
        </div>
        <div className='nav bottom-nav'>
            <NavLink exact activeClassName='active-nav' className='logoSvg' to='/'><HomeSvg /></NavLink> 
            <NavLink activeClassName='active-nav' className='logoSvg' to='/events'><EventSvg /></NavLink> 
            <NavLink activeClassName='active-nav' className='logoSvg' to='/about'><AboutSvg/></NavLink>     
            {                
                !currentUser ?
                    <UserSvg className='logoSvg' onClick={() => toggleSignSignOut()}/>
                    :
                    <NavLink activeClassName='active-nav' className='logoSvg' to='/profile'><UserSvg /></NavLink>
                }
        </div>
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleSignSignOut : () => dispatch(toggleSignInSignUp())
})


export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);