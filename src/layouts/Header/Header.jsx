import { Link } from 'react-router-dom';
import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header class="header">
        <div class="header-img">
            <a href="index.html"><img class="nav-logo" src="src/assets/images/logo.png" alt="servicesuy-logo"></img></a>
        </div>
        
        // Arreglar el nav
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
                    <li>
                    <Link to="/">Principal</Link>
                    </li>
                    <li>
                    <Link to="/register">Registro</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contacto</Link>
                    </li>
                    <li>
                    <Link to="/about">Acerca de nosotros</Link>
                    </li>
                    <li>
                    <Link to="/admin-products">Admin Productos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <div class="user-info">
            <div class="cart-container">
                <img class="cart-picture" src="src/assets/images/cart.png" alt="cart-img"></img>
            </div>
            <div class="avatar-container">
                <img class="user-picture" src="src/assets/images/user.png" alt="user-img"></img>
            </div>
        </div>
    </header>
  )
}