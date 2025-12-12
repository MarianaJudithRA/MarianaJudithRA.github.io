const products = [
        { name: "Bolsa Olimba", price: 1500, img: "https://ss511.liverpool.com.mx/sm/1186377482.jpg", cat: "accesorios" },
        { name: "Smartwatch", price: 2550, img: "https://ss376.liverpool.com.mx/xl/1103639243.jpg", cat: "electronica" },
        { name: "Perfume", price: 3550, img: "https://ss701.liverpool.com.mx/xl/1026103556_2p.jpg", cat: "mujer" },
        { name: "Pijama unisex", price: 649, img: "https://ss473.liverpool.com.mx/xl/1184575783.jpg", cat: "niños y niñas" },
        { name: "Tenis Nike", price: 900, img: "https://ss550.liverpool.com.mx/sm/1091098853.jpg", cat: "hombre" },
        { name: "iPhone 14 PRO MAX", price: 123900, img: "https://ss632.liverpool.com.mx/sm/1148580576.jpg", cat: "electronica" },
        { name: "Chamarra", price: 850, img: "https://ss271.liverpool.com.mx/sm/1160633022.jpg", cat: "hombre" },
        { name: "Blush líquido", price: 269, img: "https://ss706.liverpool.com.mx/sm/1154305293.jpg", cat: "belleza" },
        { name: "Bota ", price: 2100, img: "https://ss550.liverpool.com.mx/xl/1183547631_4p.jpg", cat: "mujer" },
        { name: "Sudadera ", price: 300, img: "https://ss448.liverpool.com.mx/xl/1159543826.jpg", cat: "niños y niñas" },
        { name: "Sala familiar", price: 13000, img: "https://ss101.liverpool.com.mx/sm/1161678577.jpg", cat: "hogar" },
        { name: "Globo terraqueo", price: 1000, img: "https://ss365.liverpool.com.mx/xl/1086855093.jpg", cat: "libreria y papeleria" },
        { name: "Anillo", price: 2800, img: "https://ss566.liverpool.com.mx/sm/1157705101.jpg", cat: "mujer" },
        { name: "Lapicera", price: 200, img: "https://ss327.liverpool.com.mx/xl/1181893938.jpg", cat: "niños y niñas" },
        { name: "Audifonos", price: 1000, img: "https://ss632.liverpool.com.mx/xl/1142203282.jpg", cat: "electronica" },
        { name: "Colchon", price: 2000, img: "https://ss111.liverpool.com.mx/sm/1105476023.jpg.jpg", cat: "hogar" },  
        { name: "Libro love de Ana", price: 500, img:"https://ss365.liverpool.com.mx/xl/1181425870.jpg", cat:"libreria y papeleria"},
        { name: "Vestido", price: 869, img: "https://ss555.liverpool.com.mx/sm/1142546721.jpg", cat: "mujer" },
        { name: "Calculadora cientifica", price: 299, img: "https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/calc/product/scientific/F/FX/FX8/fx-82LAPLUS-2PK/assets/fx-82LAPLUS-2PK_Seq1.jpg.transform/main-visual-sp/image.jpg", cat:"libreria y papeleria" },
        { name: "Gorra", price: 450, img: "https://ss201.liverpool.com.mx/xl/1188431646.jpg", cat: "hombre" },
        { name: "Perfume Chanel", price: 3000, img: "https://ss701.liverpool.com.mx/xl/1033317782.jpg", cat: "hombre" },
        { name: "Tablet Samsung", price: 2800, img: "https://ss628.liverpool.com.mx/sm/1183948063.jpg", cat: "electronica" },
        { name: "Juego de cocina", price: 1800, img: "https://ss623.liverpool.com.mx/xl/1184526391.jpg", cat: "hogar" },
        { name: "Lentes de sol", price: 1600, img: "https://ss514.liverpool.com.mx/xl/1177572850.jpg", cat: "hombre" },
        { name: "Estampas hello kitty", price: 100, img: "https://ss365.liverpool.com.mx/xl/1179423053.jpg", cat: "libreria y papeleria" },
        { name: "Skincare", price: 2300, img: "https://ss706.liverpool.com.mx/xl/1189764312.jpg", cat: "belleza" },
        { name: "Comic Spiderman", price: 900, img: "https://ss365.liverpool.com.mx/xl/1188108667.jpg", cat: "libreria y papeleria" },
        { name: "Camara fotografica", price: 7000, img: "https://ss627.liverpool.com.mx/xl/1165128482.jpg", cat: "electronica" },
        { name: "Arbol de navidad", price: 999, img: "https://ss322.liverpool.com.mx/xl/1142652141.jpg", cat: "hogar" },
        { name: "Pulsera de plata", price: 541, img: "https://ss377.liverpool.com.mx/xl/1186042073_2p.jpg", cat: "mujer" },
        { name: "Zapato escolar", price: 600, img: "https://ss459.liverpool.com.mx/xl/1182189102.jpg", cat: "niños y niñas" },
        { name: "Pinturas acrilicas", price: 800, img: "https://ss327.liverpool.com.mx/xl/1170286924.jpg", cat: "libreria y papeleria" },
        { name: "Playera", price: 791, img: "https://ss261.liverpool.com.mx/xl/1185097575.jpg", cat: "hombre" },
        { name: "Bocina", price: 899, img: "https://ss630.liverpool.com.mx/xl/1179935461.jpg", cat: "electronica" },
        { name: "Chamarra", price: 800, img: "https://ss553.liverpool.com.mx/xl/1186035778.jpg", cat: "ropa" },  
        { name: "Regadera baño", price: 427, img: "https://ss343.liverpool.com.mx/xl/1159803313.jpg", cat: "hogar" },
        { name: "Agenda", price: 300, img: "https://ss365.liverpool.com.mx/xl/1186782930.jpg", cat: "libreria y papeleria" },
        { name: "Perfume Ariana Grande", price: 1200, img: "https://ss701.liverpool.com.mx/xl/1078849378.jpg", cat: "mujer" },
        { name: "Shampoo hidratante", price: 721, img: "https://ss706.liverpool.com.mx/xl/1053645719_1p.jpg", cat: "belleza" },
        { name: "Dijes", price: 3200, img: "https://ss571.liverpool.com.mx/xl/1104537762.jpg", cat: "accesorios" },
        { name: "Proyector", price: 7000, img: "https://ss629.liverpool.com.mx/xl/1120728535_1p.jpg", cat: "electronica" },
        { name: "Falda", price: 300, img: "https://ss540.liverpool.com.mx/xl/1185695891.jpg", cat: "mujer" },
        { name: "Labial", price: 289, img: "https://ss702.liverpool.com.mx/xl/1116635115.jpg", cat: "belleza" },
        { name: "Cartera", price: 756, img: "https://ss213.liverpool.com.mx/xl/1134151427.jpg", cat: "hombre" },
        { name: "Base", price: 200, img: "https://ss702.liverpool.com.mx/xl/1152703984.jpg", cat: "belleza" },
        { name: "Guitarra electrica", price: 13000, img: "https://ss631.liverpool.com.mx/xl/1168686419.jpg", cat: "electronica" },
        { name: "Termo", price: 200, img: "https://ss514.liverpool.com.mx/xl/1187199146.jpg", cat: "hogar" },
        { name: "Collar", price: 200, img: "https://ss571.liverpool.com.mx/xl/1116957201.jpg", cat: "mujer" },
        { name: "Jeans", price: 550, img: "https://ss224.liverpool.com.mx/xl/1177313498.jpg", cat: "hombre" },
        { name: "Sandalias", price: 450, img: "https://ss550.liverpool.com.mx/xl/1169334885.jpg", cat: "mujer" },
        { name: "Funda para celular", price: 280, img: "https://ss637.liverpool.com.mx/xl/1142610589.jpg", cat: "mujer" },
        { name: "Pantalla", price: 15900, img: "https://ss629.liverpool.com.mx/xl/1177377976.jpg", cat: "electronica" },
        { name: "Playera polo", price: 500, img: "https://ss251.liverpool.com.mx/xl/1102772918.jpg", cat: "hombre" },
        { name: "Bicicleta", price: 4000, img: "https://ss424.liverpool.com.mx/xl/1152291678.jpg", cat: "niños y niñas" },
        { name: "Zapato formal", price: 699, img: "https://ss237.liverpool.com.mx/xl/1086746041.jpg", cat: "hombre" },
        { name: "Boina", price: 390, img: "https://ss514.liverpool.com.mx/xl/1155040846_2p.jpg", cat: "mujer" },
        { name: "Control remoto", price: 256, img: "https://ss629.liverpool.com.mx/xl/1172228204_1p.jpg", cat: "electronica" },
        { name: "Mascara de pestañas", price: 200, img: "https://ss702.liverpool.com.mx/xl/1152333346.jpg", cat: "belleza" },
        { name: "Estampas de la NFL", price: 90, img: "https://ss365.liverpool.com.mx/xl/1188752787.jpg", cat: "libreria y papeleria" },
        { name: "Colcha", price: 900, img: "https://ss356.liverpool.com.mx/xl/1135636378.jpg", cat: "hogar" },
        { name: "Chaleco", price: 450, img: "https://ss271.liverpool.com.mx/xl/1185740401.jpg", cat: "hombre" },
        { name: "Tenis deportivos", price: 769, img: "https://ss203.liverpool.com.mx/xl/1185234702.jpg", cat: "mujer" },
        { name: "Audifonos", price: 900, img: "https://ss637.liverpool.com.mx/xl/1172795451_1p.jpg", cat: "electronica" },
        { name: "Lonchera ", price: 900, img: "https://ss417.liverpool.com.mx/xl/1136523097.jpg", cat: "niños y niñas" },
        { name: "Libro Yo antes de ti ", price: 500, img: "https://ss365.liverpool.com.mx/xl/1049322492.jpg", cat: "libreria y papeleria" },
        { name: "Espejo redondo", price: 1200, img: "https://ss161.liverpool.com.mx/xl/1149309965.jpg", cat: "hogar" },
        { name: "Alaciadora", price: 569, img: "https://ss706.liverpool.com.mx/xl/1070201735.jpg", cat: "belleza" },
        { name: "Collar caballero", price: 873, img: "https://ss213.liverpool.com.mx/xl/1182881470_3p.jpg", cat: "hombre" },
        { name: "Licuadora", price: 2900, img: "https://ss625.liverpool.com.mx/xl/1174774427.jpg", cat: "hogar" },
        { name: "Locion unisex", price: 350, img: "https://ss701.liverpool.com.mx/xl/1177331321.jpg", cat: "niños y niñas" },
        { name: "Cartera dama", price: 500, img: "https://ss511.liverpool.com.mx/xl/1185068796.jpg", cat: "mujer" },
        { name: "Paleta de sombras", price: 380, img: "https://ss702.liverpool.com.mx/xl/1168054111.jpg", cat: "belleza" },
        { name: "Top deportivo", price: 500, img: "https://ss205.liverpool.com.mx/xl/1177631619_1p.jpg", cat: "mujer" },
        { name: "Locion", price: 900, img: "https://ss701.liverpool.com.mx/xl/1116305875.jpg", cat: "hombre" },
        { name: "Plumones", price: 500, img: "https://ss327.liverpool.com.mx/xl/1156086068.jpg", cat: "libreria y papeleria" },
        { name: "Pans deportivo", price: 678, img: "https://ss205.liverpool.com.mx/xl/1169679739.jpg", cat: "hombre" },
        { name: "Estampas Dragon Ball", price: 700, img: "https://ss365.liverpool.com.mx/xl/1184235834.jpg", cat: "libreria y papeleria" },
        { name: "Chamarra", price: 1200, img: "https://ss553.liverpool.com.mx/xl/1182662450.jpg", cat: "mujer" },
        { name: "Short", price: 250, img: "https://ss205.liverpool.com.mx/xl/1144162326.jpg", cat: "hombre" },
        { name: "Camisa casual", price: 200, img: "https://ss450.liverpool.com.mx/xl/1090580912.jpg", cat: "niños y niñas" },
        { name: "Libreta", price: 100, img: "https://ss365.liverpool.com.mx/xl/1188229359.jpg", cat: "libreria y papeleria" },
        { name: "Mascarilla", price: 100, img: "https://ss706.liverpool.com.mx/xl/1065776371_1p.jpg", cat: "belleza" },
        { name: "Comedor", price: 4500, img: "https://ss101.liverpool.com.mx/xl/1168014569.jpg", cat: "hogar" },
        { name: "Cargador para celular", price: 379, img: "https://ss637.liverpool.com.mx/xl/1147698913.jpg", cat: "electronica" },
        { name: "Dron", price: 5600, img: "https://ss627.liverpool.com.mx/xl/1178426512.jpg", cat: "electronica" },
        { name: "Mouse inalambrico", price: 419, img: "https://ss637.liverpool.com.mx/xl/1185257726_1p.jpg", cat: "electronica" },
        { name: "Comic Superman", price: 355, img: "https://ss365.liverpool.com.mx/xl/1162893668.jpg", cat: "libreria y papeleria" },
        { name: "Control xbox", price: 3000, img: "https://ss423.liverpool.com.mx/xl/1188439205_2p.jpg", cat: "electronica" },
        { name: "Vestido para niña ", price: 1500, img: "https://img.kwcdn.com/product/fmket/6aadf06e1c18278e9c97f1ae87ce0555.jpg?imageView2/2/w/800/q/70/format/avif", cat: "niños y niñas" },
        { name: "Crema facial", price: 289, img: "https://ss702.liverpool.com.mx/xl/1163797883.jpg", cat: "belleza" },
        { name: "Rizadora", price: 500, img: "https://ss706.liverpool.com.mx/xl/1065015150.jpg", cat: "belleza" },
        { name: "Esmalte para uñas", price: 50, img: "https://ss706.liverpool.com.mx/xl/1148235933_1p.jpg", cat: "belleza" },
        { name: "Juguete play doh", price: 1200, img: "https://ss424.liverpool.com.mx/xl/1057525238.jpg", cat: "niños y niñas" },
        { name: "Gel para cejas", price: 100, img: "https://ss706.liverpool.com.mx/xl/1182912308_1p.jpg", cat: "belleza" },
        { name: "Bolsa para niña", price: 500, img: "https://ss479.liverpool.com.mx/xl/1187053915.jpg", cat: "niños y niñas" },
        { name: "Brillo labial", price: 45, img: "https://ss706.liverpool.com.mx/xl/1158722379.jpg", cat: "belleza" },
        { name: "Libro de matematicas", price: 765, img: "https://ss365.liverpool.com.mx/xl/1139823351.jpg", cat: "libreria y papeleria" },
        { name: "Iluminador", price: 80, img: "https://ss706.liverpool.com.mx/xl/1154024031.jpg", cat: "belleza" },
        { name: "Juego de toallas", price: 400, img: "https://ss351.liverpool.com.mx/xl/1039487647.jpg", cat: "hogar" },
        { name: "Almohadas", price: 1200, img: "https://ss356.liverpool.com.mx/xl/1152446906.jpg", cat: "hogar" }, 
        { name: "Tapete", price: 100, img: "https://ss121.liverpool.com.mx/xl/1172736790.jpg", cat: "hogar" },
        { name: "Chamarra", price: 300, img: "https://ss450.liverpool.com.mx/xl/1179425960.jpg", cat: "niños y niñas" },
        { name: "Set de vasos", price: 1000, img: "https://ss623.liverpool.com.mx/xl/1176753311.jpg", cat: "hogar" },
        { name: "Set Boligrafo", price: 300, img: "https://ss377.liverpool.com.mx/xl/1112242291.jpg", cat: "libreria y papeleria" },
        { name: "Juguete robot friend", price: 700, img: "https://ss424.liverpool.com.mx/xl/1142436414.jpg", cat: "niños y niñas" },
        { name: "Set kit para niña", price: 100, img: "https://ss479.liverpool.com.mx/xl/1168967710.jpg", cat: "niños y niñas" },
        { name: "Set de maletas", price: 3500, img: "https://ss323.liverpool.com.mx/xl/1152599664.jpg", cat: "hogar" },
        { name: "Gorra box layer", price: 1000, img: "https://ss425.liverpool.com.mx/xl/1162071013.jpg", cat: "niños y niñas" },
        { name: "Pijamada de terror", price: 389, img: "https://ss365.liverpool.com.mx/xl/1184238981.jpg", cat: "libreria y papeleria" },
        { name: "Alcancia estrella", price: 389, img: "https://ss157.liverpool.com.mx/xl/1168257712.jpg", cat: "libreria y papeleria" },

    ];

    const productContainer = document.getElementById("productContainer");
    const searchInput = document.getElementById("searchInput");
    const cartBtn = document.getElementById("cartBtn");
    const cartPanel = document.getElementById("cartPanel");
    const overlay = document.getElementById("overlay");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    
    // FAVORITOS
    const favBtn = document.getElementById("favBtn");
    const favPanel = document.getElementById("favPanel");
    const favItems = document.getElementById("favItems");
    const favCount = document.getElementById("favCount");
    
    let cart = [];
    let favorites = [];
    let currentCategory = "todo"; // Categoría por defecto
    
    /* ---------------- MOSTRAR PRODUCTOS ---------------- */
    function displayProducts(list) {
        productContainer.innerHTML = "";
    
        list.forEach(product => {
            const isFav = favorites.some(f => f.name === product.name);
    
            productContainer.innerHTML += `
                <div class="product-card">
                    <button class="fav-btn-heart ${isFav ? 'active' : ''}" onclick="toggleFav('${product.name}', this)">❤️</button>
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toLocaleString("es-MX")}</p>
                    <button class="add-btn" onclick="addToCart('${product.name}')">Agregar</button>
                </div>
            `;
        });
    }
    
    displayProducts(products);
    
    /* ---------------- BUSCAR PRODUCTOS ---------------- */
    searchInput.addEventListener("input", e => {
        const text = e.target.value.toLowerCase();
    
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(text)
        );
    
        displayProducts(filtered);
    });
    
    /* ---------------- FILTROS ---------------- */
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".cat-btn.active").classList.remove("active");
            btn.classList.add("active");
    
            currentCategory = btn.dataset.cat; // guardamos la categoría actual
    
            displayProducts(
                currentCategory === "todo"
                    ? products
                    : products.filter(p => p.cat === currentCategory)
            );
        });
    });
    
    /* ---------------- ABRIR / CERRAR PANEL CARRITO ---------------- */
    cartBtn.addEventListener("click", () => {
        cartPanel.classList.add("open");
        overlay.classList.add("show");
    });
    
    overlay.addEventListener("click", () => {
        cartPanel.classList.remove("open");
        favPanel.classList.remove("open");
        overlay.classList.remove("show");
    });
    
    /* ---------------- ABRIR PANEL FAVORITOS ---------------- */
    favBtn.addEventListener("click", () => {
        favPanel.classList.add("open");
        overlay.classList.add("show");
    });
    
    /* ---------------- CARRITO ---------------- */
    function addToCart(name) {
        const product = products.find(p => p.name === name);
        const exists = cart.find(item => item.name === name);
    
        if (exists) {
            exists.qty++;
        } else {
            cart.push({ ...product, qty: 1 });
        }
    
        updateCart();
    }
    
    function updateCart() {
        cartItems.innerHTML = "";
    
        let total = 0;
        let count = 0;
    
        cart.forEach(item => {
            total += item.price * item.qty;
            count += item.qty;
    
            cartItems.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}">
                    <div style="flex-grow:1;">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toLocaleString("es-MX")} c/u</p>
                        <div class="qty-controls">
                            <button onclick="changeQty('${item.name}', -1)">–</button>
                            <span>${item.qty}</span>
                            <button onclick="changeQty('${item.name}', 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart('${item.name}')">Quitar</button>
                    </div>
                </div>
            `;
        });
    
        cartTotal.textContent = total.toLocaleString("es-MX");
        cartCount.textContent = count;
    }
    
    function changeQty(name, amount) {
        const item = cart.find(p => p.name === name);
        if (!item) return;
    
        item.qty += amount;
    
        if (item.qty <= 0) {
            cart = cart.filter(p => p.name !== name);
        }
    
        updateCart();
    }
    
    function removeFromCart(name) {
        cart = cart.filter(p => p.name !== name);
        updateCart();
    }
    
    /* ---------------- FAVORITOS ---------------- */
    function toggleFav(name, btn) {
        const product = products.find(p => p.name === name);
        const exists = favorites.find(f => f.name === name);
    
        if (exists) {
            favorites = favorites.filter(f => f.name !== name);
            btn.classList.remove("active");
        } else {
            favorites.push(product);
            btn.classList.add("active");
        }
    
        // Animación de latido
        btn.classList.add("animated");
        setTimeout(() => btn.classList.remove("animated"), 300);
    
        updateFavorites();
    
        displayProducts(
            currentCategory === "todo"
                ? products
                : products.filter(p => p.cat === currentCategory)
        );
    }
    
    function updateFavorites() {
        favItems.innerHTML = "";
    
        favorites.forEach(item => {
            favItems.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}">
                    <div style="flex-grow:1;">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toLocaleString("es-MX")}</p>
                        <button class="remove-btn" onclick="toggleFav('${item.name}', this)">Quitar</button>
                    </div>
                </div>
            `;
        });
    
        favCount.textContent = favorites.length;
    }
    
    /* ---------------- MODAL LOGIN ---------------- */
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementById("closeLogin");
    
    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
        overlay.classList.add("show");
    });
    
    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
        overlay.classList.remove("show");
    });
    
    window.addEventListener("click", e => {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
            overlay.classList.remove("show");
        }
    });

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
        overlay.classList.add("show");
    });
    
    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
        overlay.classList.remove("show");
    });
    
    overlay.addEventListener("click", () => {
        loginModal.style.display = "none";
        overlay.classList.remove("show");
    });

// Botón de pagar del carrito
const payBtn = document.querySelector('.cart-panel .pay-btn');

payBtn.addEventListener('click', () => {
    // Crear el toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = '¡Gracias por tu compra!';

    // Añadir al body
    document.body.appendChild(toast);

    // Limpiar el carrito
    cart = [];
    updateCart();

    // Quitar el toast después de 2.5 segundos
    setTimeout(() => {
        toast.remove();
    }, 2500);

    // Opcional: cerrar el panel del carrito
    const cartPanel = document.getElementById('cartPanel');
    cartPanel.classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
});