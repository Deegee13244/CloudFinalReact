import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

const Navbar = () => {
  return (
    <div>
      <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="/main">Main</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main/datastore">Datastore</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Navbar
