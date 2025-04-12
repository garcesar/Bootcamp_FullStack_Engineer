import React from 'react'

export default function ProductDetail() {
  return (
    <main>
      <section className="product-detail-section">
        <div className="product-detail-container">
          <div className="product-detail-image">
            <img src="/assets/images/products/product1.png" alt="product-detail-image" />
          </div>

          <div className="product-info">
            <h1>Memoria RAM Crucial</h1>

            <p className="product-price">$99.99</p>

            <p className="product-description">
              La Memoria RAM Crucial de 8GB DDR4 es ideal para mejorar el rendimiento de tu computadora. Con una
              velocidad de 2400 MHz, esta memoria garantiza una respuesta rápida y eficiente en tus tareas diarias y
              aplicaciones más exigentes. Compatible con una amplia gama de sistemas, es una actualización perfecta
              para cualquier PC.
            </p>

            <div className="product-quantity">
              <label htmlFor="quantity">Cantidad:</label>
              <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" />
            </div>

            <div className="product-coupon">
              <label htmlFor="coupon">Cupón de descuento:</label>
              <input type="text" id="coupon" name="coupon" placeholder="Ingresa tu cupón" />
            </div>

            <div className="product-buttons">
              <button className="add-to-cart-btn">Añadir al carrito</button>
              <button className="buy-now-btn">Comprar ahora</button>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-more">
        <h2>Detalles del Producto</h2>
        <p>
          La Memoria RAM Crucial de 8GB DDR4 es una excelente opción para aquellos que buscan mejorar el rendimiento de
          su computadora. Esta memoria ofrece una velocidad de 2400 MHz, lo que garantiza una respuesta rápida y
          eficiente en una variedad de tareas, desde la navegación web hasta la ejecución de aplicaciones más exigentes.
        </p>
        <p>
          Esta memoria es compatible con una amplia gama de sistemas, lo que la convierte en una actualización perfecta
          para cualquier PC. Además, su diseño compacto y eficiente permite una fácil instalación, incluso en espacios
          reducidos.
        </p>
        <p>
          La Memoria RAM Crucial está diseñada para ofrecer una alta fiabilidad y durabilidad, lo que asegura un
          rendimiento consistente a lo largo del tiempo. Con su capacidad de 8GB, esta memoria es ideal para usuarios
          que necesitan ejecutar múltiples aplicaciones simultáneamente sin experimentar ralentizaciones.
        </p>
        <p>
          Para más información técnica sobre la Memoria RAM Crucial, puedes visitar el siguiente enlace:{' '}
          <a href="https://www.crucial.com/memory/ddr4/ct8g4dfs824a" target="_blank" rel="noopener noreferrer">
            Referencia Técnica de Crucial
          </a>.
        </p>
      </section>
    </main>
  )
}
