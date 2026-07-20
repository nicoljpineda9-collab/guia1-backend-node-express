/**
 * app.js
 * Punto de entrada del proyecto backend.
 *
 * Aqui se crea el servidor con Express, se registran los middlewares
 * generales y se conectan las rutas de la aplicacion.
 */

const express = require("express");
const productosRoutes = require("./routes/productos.routes");

// 1. Se crea la aplicacion de Express
const app = express();

// 2. Middleware: permite recibir y leer datos en formato JSON
app.use(express.json());

// 3. Ruta raiz: sirve para comprobar que el servidor esta activo
app.get("/", (req, res) => {
  res.json({
    proyecto: "guia1-backend-node-express",
    estado: "servidor activo",
    version: "1.0.0",
  });
});

// 4. Ruta de saludo (reto de nivel medio de la guia)
app.get("/saludo", (req, res) => {
  res.json({
    mensaje: "Bienvenido al backend con Node.js y Express",
  });
});

// 5. Rutas del modulo de productos, agrupadas bajo el prefijo /api/productos
app.use("/api/productos", productosRoutes);

// 6. Manejo de rutas inexistentes (error 404)
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    ruta: req.originalUrl,
  });
});

// 7. Levantar el servidor en el puerto configurado
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});

module.exports = app;
