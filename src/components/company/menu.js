import React from 'react';
import {
    SideNav,
    SideNavItems,
    SideNavLink,
} from '@carbon/react';

const Manual = () => {
    return (
        <div className='manual' >
        <SideNav
            isFixedNav
            expanded
            aria-label="Side navigation"
            className="manual">
            <SideNavItems>
                <SideNavLink href="/services">Services</SideNavLink>
                <SideNavLink href="/shop">Shop</SideNavLink>
                <SideNavLink href="/success">Success</SideNavLink>
                <SideNavLink href="/contact">Contact</SideNavLink>
                <SideNavLink href="/appointment">Appointments</SideNavLink>
                <SideNavLink href="/news">News</SideNavLink>
                <SideNavLink href="/">Home</SideNavLink>
            </SideNavItems>
        </SideNav>
        </div> 
    );
};

export default Manual;
