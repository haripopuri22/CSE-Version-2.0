import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="head-box">
      <header id="header">
        <div className="clear wrap">
          <div className="logo fl">
            <a href="" title="计算机科学与技术系英文">
              <img
                className="logo1"
                src="https://img.collegedekhocdn.com/media/img/institute/logo/1455104624.jpg"
              />
            </a>
          </div>
        </div>
      </header>
      <nav className={`animenu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <label for="menu-toggle" class="menu-toggle">
            <i class="fas fa-bars"></i>
          </label>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
        </div>
        <ul className="animenu__nav wrap">
          <li className="parent-menu">
            <Link to="/" className="icon" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li className="parent-menu">
            <Link  to="/About" onClick={handleMenuToggle}>
              About
            </Link>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/About" onClick={handleMenuToggle}>
                  Vision and Mission
                </Link>
              </li>
              <li>
                <Link to="/POs" onClick={handleMenuToggle}>
                  POs, PEOs, PSOs
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link to="/People" onClick={handleMenuToggle}>
              People
            </Link>
          </li>
          <li className="parent-menu">
            <Link to="/ResearchAreas" className="mobile-line-break" onClick={handleMenuToggle}>
              Research Areas
            </Link>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/ResearchAreas" onClick={handleMenuToggle}>
                  Areas
                </Link>
              </li>
              <li>
                <Link to="/Project" onClick={handleMenuToggle}>
                  Project
                </Link>
              </li>
              <li>
                <Link to="/Publications" onClick={handleMenuToggle}>
                  Publications
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link to="/Course" className="mobile-line-break" onClick={handleMenuToggle}>
              Student Zone
            </Link>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/Course" onClick={handleMenuToggle}>
                  Course
                </Link>
              </li>
              <li>
                <Link to="/AluminiNetwork" onClick={handleMenuToggle}>
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link to="/Gallery" onClick={handleMenuToggle}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/StudentSection" onClick={handleMenuToggle}>
                  Student Section
                </Link>
              </li>
              <li>
                <Link to="/Activities" onClick={handleMenuToggle}>
                  Activities
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link to="/Placements" onClick={handleMenuToggle}>
              Placements
            </Link>
          </li>
          <li className="parent-menu">
            <Link to="/ContactUs" onClick={handleMenuToggle}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  }