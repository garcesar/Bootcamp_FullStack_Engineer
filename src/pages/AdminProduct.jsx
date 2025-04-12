import React from "react"

export default function AdminProduct() {
  return (
    <main>
      <section className="admin-products-section">
        <div className="admin-products-header">
          <h2>Administrar Productos</h2>
          <button className="add-product-btn">Añadir Producto</button>
        </div>

        <table className="products-table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                img: "product1.png",
                nombre: "Memoria RAM Crucial",
                desc: "Memoria RAM de alta velocidad",
                precio: "$99.99"
              },
              {
                img: "product2.png",
                nombre: "Disco duro SSD Kingston",
                desc: "Disco duro de estado sólido",
                precio: "$99.99"
              },
              {
                img: "product3.png",
                nombre: "Disco duro M2 Crucial",
                desc: "Disco duro M2 de alta velocidad",
                precio: "$299.99"
              },
              {
                img: "product4.png",
                nombre: "Mouse Gammer",
                desc: "Mouse Gammer con DPI ajustable",
                precio: "$199.99"
              },
              {
                img: "product5.png",
                nombre: "Consola Switch",
                desc: "Consola nitendeo Switch",
                precio: "$89.99"
              },
              {
                img: "product6.png",
                nombre: "Teclado Mecánico",
                desc: "Teclado mecánico retroiluminado",
                precio: "$49.99"
              },
              {
                img: "product7.png",
                nombre: "Auriculares deportivos",
                desc: "Auriculares deportivos con bluetooh",
                precio: "$79.99"
              },
              {
                img: "product8.png",
                nombre: "Monitor Soneview",
                desc: "Monitor Soneview",
                precio: "$59.99"
              }
            ].map((p, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={`/assets/images/products/${p.img}`}
                    alt={`product${index + 1}`}
                    className="product-image"
                  />
                </td>
                <td>{p.nombre}</td>
                <td>{p.desc}</td>
                <td>{p.precio}</td>
                <td>
                  <button className="edit-btn">Editar</button>
                  <button className="delete-btn">Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
