import React from 'react'
import '../assets/styles/css/styles.css'

export default function Home() {
  return (
    <main>
      <div id="mainCarousel" className="carousel slide main-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/assets/images/carousel1.jpg" className="d-block w-100" alt="carousel1" />
            <div className="carousel-caption d-none d-sm-block">
              <h5>Bienvenidos a Servicesuy</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum tempore ex molestiae cumque perferendis sint sapiente explicabo officia ratione?.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/carousel2.jpg" className="d-block w-100" alt="carousel2" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/carousel3.jpg" className="d-block w-100" alt="carousel3" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/images/carousel4.jpg" className="d-block w-100" alt="carousel4" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="product-gallery">
        <h2 className="section-title">PRODUCTOS</h2>
        <div className="product-container">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <article className="card-main" key={i}>
              <div className="card-content">
                <img src={`src/assets/images/products/product${i}.png`} alt="product" className="card-image" />
                <div className="card-details">
                  <h3 className="card-title">Producto {i}</h3>
                  <p className="card-price">$99.99</p>
                </div>
                <div className="card-buttom">
                  <a href="#" className="card-add"> Comprar </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="banner-services-gallery">
        {[
          { img: "shipping.png", text: "ENVIOS GRATUITOS" },
          { img: "services-tech.png", text: "SERVICIO TECNICO" },
          { img: "pedidos.png", text: "AGENDA TU PEDIDO" }
        ].map((service, index) => (
          <div className="banner-services" key={index}>
            <div className="inner-div">
              <span className="icon-print"></span>
              <img className="services-picture" src={`src/assets/images/icons/${service.img}`} alt="" />
              <p>{service.text}</p>
              <a href="/contact.html">¡Contactanos!</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
