import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopNavBar() {
    const [visible, setVisible] = useState(false);

    const handleMenuClick = () => {
        setVisible(!visible);
    };

    const menu = (
        <Menu style={{width:"150px"}}>
            <Menu.SubMenu key="2" title="Software">
                <Menu.Item key="2-1">
                    <Link to="/Java">Java</Link>
                </Menu.Item>
                <Menu.Item key="2-2">
                    <Link to="/Sailpoint">SailPoint Dev & Support</Link>
                </Menu.Item>
                <Menu.Item key="2-3">
                    <Link to="/WebApplicaiton">Web Dev & Support</Link>
                </Menu.Item>
                <Menu.Item key="2-4">
                    <Link to="/CloudSupport">Infra Cloud Support</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="3" title="GeoSpatial">
                <Menu.Item key="3-1">
                    <Link to="/GIS&Mapping">GIS & Mapping</Link>
                </Menu.Item>
                <Menu.Item key="3-2">
                    <Link to="/Telecommunication">Telecommunication</Link>
                </Menu.Item>
                <Menu.Item key="3-3">
                    <Link to="/Utilities">Utilities</Link>
                </Menu.Item>
                <Menu.Item key="3-4">
                    <Link to="/OilGas">Oil & Gas</Link>
                </Menu.Item>
                <Menu.Item key="3-5">
                    <Link to="/BuildingInfrastructure">Building Infrastructure</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4">
                <Link to="/ManPower">Staff Recruiting</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Navbar style={{ background: "#000" }} expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="/">AdvitServices</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="text-white glow" href="/"><span className="text-white glow">Home</span></Nav.Link>
                        <Nav.Link className="text-white glow" href="/About"><span className="text-white glow">About us</span></Nav.Link>
                        <Dropdown
                            overlay={menu}
                            onVisibleChange={setVisible}
                            visible={visible}
                            onClick={handleMenuClick}
                        >
                            <Nav.Link className="text-white glow" style={{ cursor: 'pointer' }}><span className="text-white glow">Services</span></Nav.Link>
                        </Dropdown>
                        <Nav.Link className="text-white glow" href="/Contact"><span className="text-white glow">Contact Us</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavBar;
