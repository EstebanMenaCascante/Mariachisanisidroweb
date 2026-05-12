const { copyFileSync, existsSync } = require("node:fs");
const { resolve } = require("node:path");

const indexPath = resolve("dist", "index.html");
const notFoundPath = resolve("dist", "404.html");

if (!existsSync(indexPath)) {
  console.error("No existe dist/index.html. Ejecuta npm run build primero.");
  process.exit(1);
}

copyFileSync(indexPath, notFoundPath);
console.log("Se copió dist/index.html a dist/404.html");
