import React from "react"

export default function Register() {
  return (
    <main>
      <section className="register-section">
        <h2>Registro de Usuario</h2>
        <form
          action="/submit-registration"
          method="POST"
          encType="multipart/form-data"
        >
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
            <label htmlFor="password">Contraseña *</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength="8"
              maxLength="20"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Repetir contraseña *</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              minLength="8"
              maxLength="20"
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Fecha de nacimiento *</label>
            <input type="date" id="birthdate" name="birthdate" required />
          </div>

          <div className="form-group">
            <label htmlFor="country">Provincia *</label>
            <select id="country" name="country" required>
              <option value="">Seleccione una opción</option>
              <option value="montevideo">Montevideo</option>
              <option value="canelones">Canelones</option>
              <option value="maldonado">Maldonado</option>
              <option value="colonia">Colonia</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">Imagen</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>

          <div className="form-group">
            <label htmlFor="observations">Comentarios</label>
            <textarea
              id="observations"
              name="observations"
              maxLength="500"
              rows="4"
              placeholder="Escribe tus comentarios aquí..."
            ></textarea>
          </div>

          <button type="submit">Registrarse</button>
        </form>
      </section>
    </main>
  )
}
