/**
 * productos.routes.js
 * Rutas del modulo de productos.
 *
 * Se usa el Router de Express para separar la logica de rutas
 * del archivo principal app.js. Asi el proyecto queda ordenado
 * y cada modulo tiene su propio archivo.
 */

const express = require("express");
const router = express.Router();

// Base de datos simulada en memoria (para efectos academicos)
const productos = [
  { id: 1, nombre: "Teclado mecanico", precio: 180000 },
  { id: 2, nombre: "Mouse inalambrico", precio: 90000 },
  { id: 3, nombre: "Monitor 24 pulgadas", precio: 650000 },
];

// GET /api/productos -> lista todos los productos
router.get("/", (req, res) => {
  res.json({
    total: productos.length,
    datos: productos,
  });
});

// GET /api/productos/:id -> consulta un producto por su id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(producto);
});

// POST /api/productos -> agrega un producto nuevo
router.post("/", (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || precio === undefined) {
    return res.status(400).json({
      error: "Los campos nombre y precio son obligatorios",
    });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

module.exports = router;
