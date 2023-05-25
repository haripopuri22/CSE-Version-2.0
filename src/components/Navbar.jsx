import * as React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
      <nav class="animenu">
        <ul class="animenu__nav wrap">
          <li>
            <Link to="/" className="navbar-logo">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About">About</Link>
            <div class="jt"></div>
            <ul class="animenu_nav_child">
              <li>
                <Link to="/About">Vision and Mission</Link>
              </li>
              <li>
                <Link to="/POs">POs,PEOs,PSOs</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/People">People</Link>
          </li>
          <li>
            <Link to="/ResearchAreas">Research Areas</Link>

            <div class="jt"></div>
            <ul class="animenu_nav_child">
              <li>
                <Link to="/ResearchAreas">Areas</Link>
              </li>
              <li>
                <Link to="/Project">Project</Link>
              </li>
              <li>
                <Link to="/Publications">Publications</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Course">Student Zone</Link>

            <div class="jt"></div>
            <ul class="animenu_nav_child">
              <li>
                <Link to="/Course">Course</Link>
              </li>
              <li>
                <Link to="/AluminiNetwork"> Alumini Newtwork</Link>
              </li>
              <li>
                <Link to="/Gallary"> Gallery</Link>
              </li>
              <li>
                <Link to="/StudentSection">Student Section</Link>
              </li>
              <li>
                <Link to="/Activities">Activities</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Placements">Placements</Link>
          </li>
          <li>
            <Link to="/ContactUs">ContactUs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
