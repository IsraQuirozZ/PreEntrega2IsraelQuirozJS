// Formulario para logearte, una vez logeado se quita el popup, es solo una simulación.
// Después crearé una página para el logeo
const loginPopup = document.querySelector(".loginPopup");
const loginForm = document.querySelector(".loginForm");
const userInput = document.querySelector("#user");
const passwordInput = document.querySelector("#password");
const user = {
    user: "IsraQuirozZ",
    password: "1234",
};

// Función que guarda en el localStorage el usuario y su contraseña
function toLocalS(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
    return localStorage.getItem(clave);
}

// Para entrar necesitas:
//     user: "IsraQuirozZ",
//     password: "1234",
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userInput.value === "" || passwordInput.value === "") {
        alert("Llena el formulario");
    } else if (
        userInput.value !== user.user &&
        passwordInput.value !== user.password
    ) {
        alert("Usuario y contraseña incorrecta");
    } else if (userInput.value !== user.user) {
        alert("Usuario incorrecto");
    } else if (passwordInput.value !== user.password) {
        alert("Contraseña Incorrecta");
    } else {
        toLocalS("usuario", user);
        loginPopup.style.display = "none";
    }
});

function productCard(products) {
    const productsLayout = document.querySelector(".productsLayout");
    products.forEach((product) => {
        const productContainer = document.createElement("div");
        productContainer.className = "productContainer";
        productContainer.innerHTML = `
            <img src="${product.img}" alt="${product.category}" class="productImg">
            <div class="productInfo">
                <h2>${product.product}</h2>
                <p>${product.description}</p>
                <div class="productPriceDetails">
                    <p>€${product.price}</p>
                    <button class="btn productBtn">Add to Cart</button>
                </div>
            </div>
        `;
        productsLayout.appendChild(productContainer);
    });
}

// FILTRADO POR OFERTAS
function filterByOffer(products) {
    const byOffer = products.filter((product) => product.offer);
    const filteredProducts = [];
    byOffer.forEach((product) => {
        filteredProducts.push(product);
    });
    productCard(filteredProducts);
}

// FILTRO POR CATEGORÍA MÁQUINA
function filterByMachines(products) {
    const byMaquinas = products.filter(
        (product) => product.category === "maquinas"
    );
    const filteredProducts = [];
    byMaquinas.forEach((product) => {
        filteredProducts.push(product);
    });
    productCard(filteredProducts);
}

// FILTRO POR CATEGORÍA PIELES
function filterByPieles(products) {
    const byPieles = products.filter((product) => product.category === "pieles");
    const filteredProducts = [];
    byPieles.forEach((product) => {
        filteredProducts.push(product);
    });
    productCard(filteredProducts);
}

// FILTRO POR CATEGORÍA TINTAS
function filterByTintas(products) {
    const byPieles = products.filter((product) => product.category === "tintas");
    const filteredProducts = [];
    byPieles.forEach((product) => {
        filteredProducts.push(product);
    });
    productCard(filteredProducts);
}

// Función que filtra dependiendo el botón apretado
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((btn) => {
        if (value.toUpperCase() === btn.innerText.toUpperCase()) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    if (value == "todo") {
        productCard(productos);
    } else if (value == "ofertas") {
        filterByOffer(productos);
    } else if (value == "maquinas") {
        filterByMachines(productos);
    } else if (value == "pieles") {
        filterByPieles(productos);
    } else if (value == "tintas") {
        filterByTintas(productos);
    }
}

const all = document.querySelector("#todo");
const offer = document.querySelector("#ofertas");
const maquinas = document.querySelector("#maquinas");
const pieles = document.querySelector("#pieles");
const tintas = document.querySelector("#tintas");

const productsLayout = document.querySelector(".productsLayout");
// Eventos para Mostrar los productos dependiendo el filtrado
all.addEventListener("click", () => {
    productsLayout.innerHTML = "";
    filterProduct("todo");
});

offer.addEventListener("click", () => {
    productsLayout.innerHTML = "";
    filterProduct("ofertas");
});
maquinas.addEventListener("click", () => {
    productsLayout.innerHTML = "";
    filterProduct("maquinas");
});
pieles.addEventListener("click", () => {
    productsLayout.innerHTML = "";
    filterProduct("pieles");
});
tintas.addEventListener("click", () => {
    productsLayout.innerHTML = "";
    filterProduct("tintas");
});

window.onload = () => {
    filterProduct("todo");
};