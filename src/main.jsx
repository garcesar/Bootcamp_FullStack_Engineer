import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/Router.jsx'
import Header from './layouts/Header/Header.jsx'
import Footer from './layouts/Footer/Footer.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)