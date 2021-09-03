import React from 'react'
import { HeaderLink, HeaderLinkProps, links, makeProps } from '../Header/header-links';
import NavItem from './NavItem';

const NavLinks = ({isLoggedIn}) => {
    return (
        <>
        {
            links.map(
                (link: HeaderLink) => {
                    const props: HeaderLinkProps = makeProps(link);
                    if (link.onlyLoggedIn && !isLoggedIn) return null;
                    
                    if (!props.isDropdown) {
                        return <NavItem key={props.label} {...props} />
                    } else {
                        return (
                        <NavItem key={props.label} {...props}>
                            {link.subLinks.map(
                                (sublink: HeaderLink) => {
                                    const props: HeaderLinkProps = makeProps(sublink);

                                    return <NavItem key={props.label} {...props} darkText={true}/>
                                }
                            )}
                        </NavItem>
                        )
                    }
                }
            )
        }  
        </>
    )
}

export default NavLinks
