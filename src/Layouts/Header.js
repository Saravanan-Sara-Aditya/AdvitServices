import React from 'react';
import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopNavBar() {
    const menu = (
        <Menu>

            <Menu.SubMenu key="2" title="Software">
                <Link target="_parent" to="/Java">
                    <Menu.Item key="2-1">Java</Menu.Item>
                </Link>
                <Link target="_parent" to="/Sailpoint">
                    <Menu.Item key="2-2">SailPoint Dev & Support</Menu.Item>
                </Link>
                <Link target="_parent" to="/WebApplication">
                    <Menu.Item key="2-3">Web Dev & Support</Menu.Item>
                </Link>
                <Link target="_parent" to="/CloudSupport">
                    <Menu.Item key="2-4">Infra Cloud Support</Menu.Item>
                </Link>

            </Menu.SubMenu>

            <Menu.SubMenu key="3" title="GeoSpatial">
                <Link target="_parent" to="/GIS&Mapping">
                    <Menu.Item key="3-1">GIS & Mapping</Menu.Item>
                </Link>
                <Link target="_parent" to="/Telecommunication">
                    <Menu.Item key="3-2">Telecommunication</Menu.Item>
                </Link>
                <Link target="_parent" to="/Utilities">
                    <Menu.Item key="3-3">Utilities</Menu.Item>
                </Link>
                <Link target="_parent" to="/OilGas">
                    <Menu.Item key="3-4">Oil & Gas</Menu.Item>
                </Link>
                <Link target="_parent" to="/BuildingInfrastructure">
                    <Menu.Item key="3-5">Building Infrastructure</Menu.Item>
                </Link>
            </Menu.SubMenu>
            <Link target="_parent" to="/ManPower">
                <Menu.Item key="4">Staff Recruiting</Menu.Item>
            </Link>

        </Menu>
    );

    return (
        <Navbar style={{ background: "#000" }} expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="/">AdvitServices</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link target="_parent" href="/"><span className='text-white glow'>Home</span></Nav.Link>
                        <Nav.Link target="_parent" className="text-white " href="/About"><span className='text-white glow'>About us</span></Nav.Link>
                        <Dropdown overlay={menu}>
                            <Nav.Link className="text-white " onClick={e => e.preventDefault()} style={{ color: 'white' }}><span className='text-white glow'>Services</span></Nav.Link>
                        </Dropdown>
                        <Nav.Link target="_parent" className="text-white " href="/Contact"><span className='text-white glow'>Contact us</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavBar;
