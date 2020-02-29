import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../assets/styles/style.css';

export default function Nav({ onMenuToggle = () => {} }) {
  const [submenu, toggleSubmenu] = useState(false);

  const showGallery = e => {
    toggleSubmenu(!submenu);
  };

  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          {submenu ? (
            <div id="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={e => {
                      // console.log({ submenu });
                      e.preventDefault();
                      showGallery();
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/ritratti" className="submenu">
                    Ritratti
                  </Link>
                </li>
                <li>
                  <Link to="/eventi" className="submenu">
                    Eventi
                  </Link>
                </li>
                <li>
                  <Link to="/ilresto" className="submenu">
                    Il Resto
                  </Link>
                </li>
                <li>
                  <Link to="/video" className="submenu">
                    Video
                  </Link>
                </li>
                <li>
                  <Link to="/chisono">Chi Sono</Link>
                </li>
                <li>
                  <Link to="/contatti">Contatti</Link>
                </li>
              </ul>
              <a
                className="close"
                onClick={e => {
                  e.preventDefault();
                  onMenuToggle();
                }}
                href="#menu"
              >
                {''}
              </a>
            </div>
          ) : (
            <div id="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={e => {
                      // console.log({ submenu });
                      e.preventDefault();
                      showGallery();
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/chisono">Chi Sono</Link>
                </li>
                <li>
                  <Link to="/contatti">Contatti</Link>
                </li>
              </ul>
              <a
                className="close"
                onClick={e => {
                  e.preventDefault();
                  onMenuToggle();
                }}
                href="#menu"
              >
                {''}
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
