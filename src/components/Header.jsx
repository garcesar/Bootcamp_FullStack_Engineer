import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-img">
        <Link to="/">
          <img className="nav-logo" src="src/assets/images/logo.png" alt="servicesuy-logo" />
        </Link>
      </div>

      {/* Navbar de navegación */}
      <nav className="navbar-header navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-item">
              <li><Link to="/">Principal</Link></li>
              <li><Link to="/register">Registro</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/about">Acerca de nosotros</Link></li>
              <li><Link to="/admin-products">Admin Productos</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="user-info">
        <div className="cart-container">
          <img className="cart-picture" src="src/assets/images/cart.png" alt="cart-img" />
        </div>
        <div className="avatar-container">
          <img className="user-picture" src="src/assets/images/user.png" alt="user-img" />
        </div>
      </div>
    </header>
  )
}