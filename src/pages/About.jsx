import React from 'react'

export default function About() {
  return (
    <main>
      <section className="about-section">
        <h2>Acerca de Nosotros</h2>
        <p>
          Este proyecto es una tienda en línea desarrollada para proporcionar una experiencia de compra fácil y
          conveniente para nuestros clientes. Nuestro objetivo es ofrecer productos de alta calidad a precios
          competitivos.
        </p>
        <p>Desarrollado por: César García</p>
        <blockquote>
          "Nuestra misión es brindar la mejor experiencia de compra en línea, con un enfoque en la satisfacción del
          cliente y la calidad del producto."
        </blockquote>
        <div className="student-card">
          <img
            src="src/assets/images/profile.jpg"
            alt="student-avatar"
            className="student-avatar"
          />
          <div className="student-info">
            <h3>César García</h3>
            <p>Desarrollador Web</p>
          </div>
        </div>
      </section>
    </main>
  )
}
