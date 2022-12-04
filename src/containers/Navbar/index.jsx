import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import "./style.css"

const Navbar = () => {
  return (
    <div>
      <Nav className="nav-container">
        <NavItem>
          <NavLink href="/main">Data pull</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main/dashboard">Dashboard</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink href="/main/datastore">Datastore</NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink href="/main/upload">Upload</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Navbar
