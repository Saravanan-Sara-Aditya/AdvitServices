import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
function TopNavBar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const handleMenuClick = () => {
        setMenuVisible(!menuVisible); // Toggle the menu visibility
    };

    const handleMenuItemClick = () => {
        setMenuVisible(false); // Close the menu when a menu item is clicked
        setNavbarExpanded(false); // Close the navbar toggle
    };

    const menu = (
        <Menu style={{ width: "150px" }}>
            <Menu.SubMenu key="2" title="Software">
                <Menu.Item key="2-1">
                    <Link  target="_parent" to="/Java" onClick={handleMenuItemClick}>Java</Link>
                </Menu.Item>
                <Menu.Item key="2-2">
                    <Link  target="_parent" to="/Sailpoint" onClick={handleMenuItemClick}>SailPoint Dev & Support</Link>
                </Menu.Item>
                <Menu.Item key="2-3">
                    <Link  target="_parent" to="/WebApplicaiton" onClick={handleMenuItemClick}>Web Dev & Support</Link>
                </Menu.Item>
                <Menu.Item key="2-4">
                    <Link  target="_parent" to="/CloudSupport" onClick={handleMenuItemClick}>Infra Cloud Support</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="3" title="GeoSpatial">
                <Menu.Item key="3-1">
                    <Link  target="_parent" to="/GIS&Mapping" onClick={handleMenuItemClick}>GIS & Mapping</Link>
                </Menu.Item>
                <Menu.Item key="3-2">
                    <Link  target="_parent" to="/Telecommunication" onClick={handleMenuItemClick}>Telecommunication</Link>
                </Menu.Item>
                <Menu.Item key="3-3">
                    <Link  target="_parent" to="/Utilities" onClick={handleMenuItemClick}>Utilities</Link>
                </Menu.Item>
                <Menu.Item key="3-4">
                    <Link  target="_parent" to="/OilGas" onClick={handleMenuItemClick}>Oil & Gas</Link>
                </Menu.Item>
                <Menu.Item key="3-5">
                    <Link  target="_parent" to="/BuildingInfrastructure" onClick={handleMenuItemClick}>Building Infrastructure</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4">
                <Link  target="_parent" to="/ManPower" onClick={handleMenuItemClick}>Staff Recruiting</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Navbar
            style={{ background: "#000", position: "fixed", zIndex: "1000", top: "0", width: "100%" }}
            expand="lg"
            expanded={navbarExpanded}
            onToggle={() => setNavbarExpanded(!navbarExpanded)}
        >
            <Container>
                <Navbar.Brand className="text-white" href="/">
                    <img src={logo} width="80px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="text-white glow" href="/"><span className="text-white glow">Home</span></Nav.Link>
                        <Nav.Link className="text-white glow" href="/About"><span className="text-white glow">About us</span></Nav.Link>
                        <Dropdown
                            overlay={menu}
                            visible={menuVisible}
                            onVisibleChange={setMenuVisible}
                        >
                            <Nav.Link className="text-white glow" style={{ cursor: 'pointer' }}>
                                <span className="text-white glow" onClick={handleMenuClick}>Services</span>
                            </Nav.Link>
                        </Dropdown>
                        <Nav.Link className="text-white glow" href="/Contact"><span className="text-white glow">Contact Us</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavBar;
