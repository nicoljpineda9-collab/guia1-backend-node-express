# guia1-backend-node-express

Proyecto backend desarrollado con **Node.js** y **Express**, creado como evidencia de la guía específica de **Git y control de versiones**.

## Descripción del proyecto

Esta API expone un conjunto de rutas sencillas que permiten comprobar el funcionamiento del servidor y consultar un listado de productos almacenado en memoria. El objetivo principal no es la complejidad de la aplicación, sino demostrar el uso correcto del control de versiones: commits con mensajes claros, uso de `.gitignore`, trabajo con ramas y publicación del repositorio en GitHub.

## Tecnologías utilizadas

| Herramienta        | Uso dentro del proyecto                          |
| ------------------ | ------------------------------------------------ |
| Node.js            | Entorno de ejecución de JavaScript en el servidor |
| Express            | Framework para crear el servidor y las rutas      |
| Git                | Control de versiones local                        |
| GitHub             | Repositorio remoto y publicación del proyecto     |
| Visual Studio Code | Editor de código                                  |

## Estructura de carpetas

```
guia1-backend-node-express/
├── src/
│   ├── routes/
│   │   └── productos.routes.js
│   └── app.js
├── .gitignore
├── package.json
└── README.md
```

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/usuario/guia1-backend-node-express.git

# 2. Entrar a la carpeta
cd guia1-backend-node-express

# 3. Instalar las dependencias
npm install

# 4. Ejecutar el servidor
npm start
```

El servidor queda disponible en `http://localhost:3000`.

## Rutas disponibles

| Método | Ruta                 | Descripción                          |
| ------ | -------------------- | ------------------------------------ |
| GET    | `/`                  | Verifica que el servidor está activo |
| GET    | `/saludo`            | Devuelve un mensaje de bienvenida    |
| GET    | `/api/productos`     | Lista todos los productos            |
| GET    | `/api/productos/:id` | Consulta un producto por su id       |
| POST   | `/api/productos`     | Registra un producto nuevo           |

### Ejemplo de respuesta de `/saludo`

```json
{
  "mensaje": "Bienvenido al backend con Node.js y Express"
}
```

## Control de versiones

El repositorio contiene como mínimo cinco commits con mensajes descriptivos, un archivo `.gitignore` que excluye `node_modules/` y `.env`, y el uso de ramas de trabajo (`feature-productos`, `feature-saludo`) fusionadas con la rama `main`.

## Autor

Nombre del estudiante — Programa de Desarrollo de Software.
