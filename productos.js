const url = "https://fakestoreapi.com/products"; // siempre trabaja sobre productos

const request = async (url, options = {}) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Error al realizar la solicitud.`);
    }
    return await response.json();
}


export async function getProducts(idProducto){
    if (idProducto) {
        const urlProducto = `${url}/${idProducto}`;// obtengo la url de un producto
        return await request(urlProducto);
    }
    return await request(url); // sino devuelvo todos
}

export async function createProduct(title, price, category){
    if (!title || !price || !category) {
        throw new Error("Faltan datos para crear el producto.");
    }
    const creacion = await request((url), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            price,
            category
        })
    });
    return creacion;
}

export async function deleteProduct(idProducto){
    if (!idProducto) {
        throw new Error("Se requiere un ID de producto para eliminar.");
    }
    const urlProducto = `${url}/${idProducto}`; 
    const borrado = await request(urlProducto, {
        method: 'DELETE'
    });
    return borrado;
}
