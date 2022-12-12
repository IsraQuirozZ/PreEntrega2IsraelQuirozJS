// E-commerce (Simulación de filtrado de Productos)
// Productos (array de objetos):
// id / producto / imagen / descripción / precio / oferta / categoría / subcategoría
// id / product / img / description / price / offer / category / subcategory
// Poder filtrar productos: (A-Z), (Z-A), (Categoria), (Subcategoría), (Ofertas)
// 1) Descuento del 10% a un producto - Aplicarlo al filtrado por offerta
// 2) Preguntar si quiere filtrar por oferta
// 3) Filtrar productos por categoría ('maquinas', 'pieles', 'tintas')
// 4) Filtrar productos por subcategorías ('pen', 'bobinas', 'rotativas', 'complementos', 'kits')
// 5) Ordenar productos alfabéticamente (A-Z)
// 6) Ordenar productos alfabéticamente (Z-A)
// 7) Buscar un producto

// 1) Aplica descuento de 10% a todos los productos que tienen oferta
function offerDiscount(products) {
    let discount = 10;
    products.forEach((product) => {
        if (product.offer) {
            product.price = product.price - (discount * product.price) / 100;
        }
    });
    return products;
}
offerDiscount(productos);

// Eliminar para entregas posteriores
console.log("FILTO POR OFERTAS");
console.log("-------------------------------------------------------\n");
// 2)
function filterOffer(products) {
    let byOffer = confirm("Desea filtrar los productos con oferta?");
    // filteredProducts no será necesaria cuando implementemos DOM.
    let filteredProducts = [];
    if (byOffer) {
        const filterByOffer = products.filter((product) => product.offer);

        filterByOffer.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola nombre y precio de cada producto:
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // Nota: Para poder implementar esto con DOM sería conveniente
        // hacer el return de filterByOffer para así poder manipular cada
        // una de las propiedades de los objetos del array.
        // return filterByOffer;
    } else {
        // Mostrar por consola cada nombre de cada producto
        products.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola nombre y precio de cada producto
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // return products;
    }
}

// console.log(filterOffer(productos));
// Eliminar para entregas posteriores
console.log("-------------------------------------------------------\n");
console.log("FILTRO POR CATEGORÍA");
console.log("-------------------------------------------------------\n");

// 3)
function filterCategory(products) {
    const categories = ["MAQUINAS", "PIELES", "TINTAS"];
    alert("No presionar en Cancelar cuando te pidan la categoría");
    // Si presionamos cancelar, el valor de category será null y lanzará un error
    // pues no existe el método .toUpperCase() para valores nulos
    let category = prompt(
        '¿Qué categoría desea ver ("Maquinas", "Pieles", "Tintas")?:'
    ).toUpperCase();
    // filteredProducts no será necesaria cuando implementemos DOM.
    let filteredProducts = [];

    if (categories.includes(category)) {
        console.log(category);
        const filterByCategory = products.filter(
            (product) => product.category === category.toLowerCase()
        );

        filterByCategory.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // Nota: Para poder implementar esto con DOM sería conveniente
        // hacer el return de filterByCategory para así poder manipular cada
        // una de las propiedades de los objetos del array.
        // return filterByCategory;
    } else {
        console.log("PRODUCTOS");
        products.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // return products;
    }
}

// console.log(filterCategory(productos));
// Eliminar para entregas posteriores
console.log("-------------------------------------------------------\n");
console.log("FILTRO POR SUBCATEGORÍA");
console.log("-------------------------------------------------------\n");
// 4)
function filterSubcategory(products) {
    const subcategories = ["PEN", "BOBINAS", "ROTATIVAS", "COMPLEMENTOS", "KITS"];
    alert("No presionar en Cancelar cuando te pidan la subcategoría");
    // Si presionamos cancelar, el valor de subcategory será null y lanzará un error
    // pues no existe el método .toUpperCase() para valores nulos
    let subcategory = prompt(
        '¿Qué subcategoría desea ver ("Pen", "Bobinas", "Rotativas", "Complementos", "Kits")?:'
    ).toUpperCase();
    // filteredProducts no será necesaria cuando implementemos DOM
    let filteredProducts = [];

    if (subcategories.includes(subcategory)) {
        console.log(subcategory);
        const filterBySubategory = products.filter(
            (product) => product.subcategory === subcategory.toLowerCase()
        );
        filterBySubategory.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // Nota: Para poder implementar esto con DOM sería conveniente
        // hacer el return de filterBySubcategory para así poder manipular cada
        // una de las propiedades de los objetos del array.
        // return filterBySubcategory;
    } else {
        console.log("PRODUCTOS");
        products.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // return products;
    }
}

// console.log(filterSubcategory(productos));
// Eliminar para entregas posteriores
console.log("-------------------------------------------------------\n");
console.log("ORDEN ALFABÉTICO (A-Z)");
console.log("-------------------------------------------------------\n");

// 5)
function sortAZ(products) {
    let byAZ = confirm("¿Ordenar alfabéticamente (A-Z)?");
    let filteredProducts = [];
    if (byAZ) {
        const sortByAZ = products.sort((a, b) => {
            if (a.product == b.product) {
                return 0;
            }
            if (a.product < b.product) {
                return -1;
            }
            return 1;
        });
        sortByAZ.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // Nota: Para poder implementar esto con DOM sería conveniente
        // hacer el return de filterBySubcategory para así poder manipular cada
        // una de las propiedades de los objetos del array.
        // return sortByAZ;
    } else {
        products.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // return products;
    }
}

// console.log(sortAZ(productos));

// Eliminar para entregas posteriores
console.log("-------------------------------------------------------\n");
console.log("ORDEN ALFABÉTICO (Z-A)");
console.log("-------------------------------------------------------\n");
// 6)
function sortZA(products) {
    let byZA = confirm("¿Ordenar alfabéticamente (Z-A)?");
    let filteredProducts = [];
    if (byZA) {
        const sortByZA = products.sort((a, b) => {
            if (a.product == b.product) {
                return 0;
            }
            if (a.product < b.product) {
                return 1;
            }
            return -1;
        });
        sortByZA.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // Nota: Para poder implementar esto con DOM sería conveniente
        // hacer el return de filterBySubcategory para así poder manipular cada
        // una de las propiedades de los objetos del array.
        // return sortByZA;
    } else {
        products.forEach((product) => {
            filteredProducts.push(product.product);
            // Código para mostrar por consola cada producto y su precio
            console.log(`${product.product} - €${product.price}`);
        });
        // Regresar array con solo los nombres de los productos:
        return filteredProducts;
        // return products;
    }
}

// console.log(sortZA(productos));

// 7)
function searchProduct(products) {
    let search = prompt("¿Que producto desea buscar?:").toUpperCase();
    let productsName = [];
    products.forEach((product) => {
        productsName.push(product.product);
    });
    if (productsName.includes(search)) {
        const searchedProduct = products.find(
            (product) => product.product === search
        );
        // return searchedProduct;
        return `${searchedProduct.product} - €${searchedProduct.price}`;
    }
    return `Lo sentimos no se encuentra el producto que buscas: ${search}`;
}

console.log(searchProduct(productos));