import React from 'react'

export default function Contact() {
  return (
    <main>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-map">
            <h2>Nuestra Ubicación</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6c5b0a1e7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611819392743!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación del negocio"
            ></iframe>
          </div>

          <div className="contact-form">
            <h2>Contacto</h2>
            <form action="/submit-contact" method="POST">
              <div className="form-group">
                <label htmlFor="full-name">Nombre completo *</label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  required
                  minLength="3"
                  maxLength="50"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength="100"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength="500"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
