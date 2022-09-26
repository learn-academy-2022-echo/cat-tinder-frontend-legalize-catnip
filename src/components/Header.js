import React from "react"
import { NavLink, Nav, NavItem } from 'reactstrap'

const Header = () => {
    return (
        <Nav fill pills>
            <NavItem>
                <NavLink color="info" active href="/">
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
                <NavLink href="https://www.youtube.com/watch?v=nsveYu-IDLg">
                    Pickup tips
                </NavLink>
            </NavItem>
        </Nav>
    )
}


export default Header
