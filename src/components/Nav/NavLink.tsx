import React from 'react';
import Link from 'next/link';
import {Button} from '@material-ui/core';

const NavLink = ({href, children, className}) => {
    return (
        <Button className={className} color="inherit">
            <Link href={href}>
                <a href={href}>  
                    {children}
                </a>
            </Link>
        </Button>
    )
}

export default NavLink
