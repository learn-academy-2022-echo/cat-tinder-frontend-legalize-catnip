import React from "react"
import { NavLink, Nav, NavItem } from 'reactstrap'

const Header = () => {
    return (
        <Nav fill pills>
            <NavItem>
                <NavLink active href="/">
                    Cat Tinder
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="CatIndex">
                    See the Cats
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="CatNew">
                    Add a cat
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    Adopt a cat
                </NavLink>
            </NavItem>
        </Nav>
    )
}


export default Header
