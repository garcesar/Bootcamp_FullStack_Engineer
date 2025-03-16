import React from 'react'
import '../assets/styles/css/styles.css'
import { Route } from 'react-router'

export default function Home() {
  return (
    <main>
        <div id="mainCarousel" class="carousel slide main-carousel" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>

                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>

                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>

                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="src/assets/images/carousel1.jpg" class="d-block w-100" alt="carousel1" />

                    <div class="carousel-caption d-none d-sm-block">
                    <h5>Bienvenidos a Servicesuy</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis laborum tempore ex molestiae cumque perferendis sint
                        sapiente explicabo officia ratione?.
                    </p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="/assets/images/carousel2.jpg" class="d-block w-100" alt="carousel2" />
                </div>

                <div class="carousel-item">
                    <img src="/assets/images/carousel3.jpg" class="d-block w-100" alt="carousel3" />
                </div>

                <div class="carousel-item">
                    <img src="src/assets/images/carousel4.jpg" class="d-block w-100" alt="carousel4" />
                </div>
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            
            <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        
        <section class="product-gallery">
            <h2 class="section-title">PRODUCTOS</h2>
            <div class="product-container">
                    <article class="card-main">
                        <div class="card-content">
                            <img src="src/assets/images/products/product1.png" alt="product" class="card-image"></img>
                            <div class="card-details">
                                <h3 class="card-title">Memoria RAM Crucial</h3>
                                <p class="card-price">$99.99</p>
                            </div>
                            <div class="card-buttom">
                                <a href="/product-detail.html" class="card-add"> Comprar </a>
                            </div>
                        </div>
                    </article>
                    <article class="card-main">
                        <div class="card-content">
                            <img src="src/assets/images/products/product2.png" alt="product" class="card-image"></img>
                            <div class="card-details">
                                <h3 class="card-title">Disco duro SSD Kingston</h3>
                                <p class="card-price">$99.99</p>
                            </div>
                            <div class="card-buttom">
                                <a href="#" class="card-add"> Comprar </a>
                            </div>
                        </div>
                    </article>
                    <article class="card-main">
                        <div class="card-content">
                            <img src="src/assets/images/products/product3.png" alt="product" class="card-image"></img>
                            <div class="card-details">
                                <h3 class="card-title">Disco duro M2 Crucial</h3>
                                <p class="card-price">$99.99</p>
                            </div>
                            <div class="card-buttom">
                                <a href="#" class="card-add"> Comprar </a>
                            </div>
                        </div>
                    </article>
                    <article class="card-main">
                        <div class="card-content">
                            <img src="src/assets/images/products/product4.png" alt="product" class="card-image"></img>
                            <div class="card-details">
                                <h3 class="card-title">Mouse Gammer</h3>
                                <p class="card-price">$99.99</p>
                            </div>
                            <div class="card-buttom">
                                <a href="#" class="card-add"> Comprar </a>
                            </div>
                        </div>
                    </article>
                <article class="card-main">
                    <div class="card-content">
                        <img src="src/assets/images/products/product5.png" alt="product" class="card-image"></img>
                        <div class="card-details">
                            <h3 class="card-title">Nintendo Switch</h3>
                            <p class="card-price">$99.99</p>
                        </div>
                        <div class="card-buttom">
                            <a href="#" class="card-add"> Comprar </a>
                        </div>
                    </div>
                </article>
                <article class="card-main">
                    <div class="card-content">
                        <img src="src/assets/images/products/product6.png" alt="product" class="card-image"></img>
                        <div class="card-details">
                            <h3 class="card-title">Teclado Gammer</h3>
                            <p class="card-price">$99.99</p>
                        </div>
                        <div class="card-buttom">
                            <a href="#" class="card-add"> Comprar </a>
                        </div>
                    </div>
                </article>
                <article class="card-main">
                    <div class="card-content">
                        <img src="src/assets/images/products/product7.png" alt="product" class="card-image"></img>
                        <div class="card-details">
                            <h3 class="card-title">Auriculares</h3>
                            <p class="card-price">$99.99</p>
                        </div>
                        <div class="card-buttom">
                            <a href="#" class="card-add"> Comprar </a>
                        </div>
                    </div>
                </article>
                <article class="card-main">
                    <div class="card-content">
                        <img src="src/assets/images/products/product8.png" alt="product" class="card-image"></img>
                        <div class="card-details">
                            <h3 class="card-title">Monitor Soneview</h3>
                            <p class="card-price">$99.99</p>
                        </div>
                        <div class="card-buttom">
                            <a href="#" class="card-add"> Comprar </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section class="banner-services-gallery">
            <div class="banner-services">
                <div class="inner-div">
                    <span class="icon-print"></span>
                    <img class="services-picture" src="src/assets/images/icons/shipping.png" alt=""></img>
                    <p>ENVIOS GRATUITOS</p>
                    <a href="/contact.html">¡Contactanos!</a>
                </div>
            </div>
            <div class="banner-services">
                <div class="inner-div">
                    <span class="icon-print"></span>
                    <img class="services-picture" src="src/assets/images/icons/services-tech.png" alt=""></img>
                    <p>SERVICIO TECNICO</p>
                    <a href="/contact.html">¡Contactanos!</a>
                </div>
            </div>
            <div class="banner-services">
                <div class="inner-div">
                    <span class="icon-print"></span>
                    <img class="services-picture" src="src/assets/images/icons/pedidos.png" alt=""></img>
                    <p>AGENDA TU PEDIDO</p>
                    <a href="/contact.html">¡Contactanos!</a>
                </div>
            </div>
        </section>
    </main>
  )
}