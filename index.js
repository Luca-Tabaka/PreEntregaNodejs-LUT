import { getProducts, createProduct, deleteProduct } from "./productos.js";
const [, , method, route, ...args] = process.argv; // consigo los argumentos pasados por terminal
const [ recurso, id] = route ? route.split("/") : []; // desestructuro los argumentos para obtener productos y idProducto, si no hay idProducto, se asigna vacio (get y delete)

async function run() {
  try {
    if (method === "GET") {
      const productos = await getProducts(id);
      console.log(productos);

    } else if (method === "POST") {
      const [title, price, category] = args;
      const nuevoProducto = await createProduct(title, price, category);
      console.log(nuevoProducto);

    } else if (method === "DELETE") {
      const borrado = await deleteProduct(id);
      console.log(borrado);
    }
  } catch (error) {
    console.error(error);
  }
}

run();
