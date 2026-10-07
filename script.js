// ============================================================
// MY STORE - COMPLETE SCRIPT
// 20 PRODUCTS
// LOCAL PRODUCT IMAGES
// CART + WISHLIST + SEARCH + SORT
// LOGIN + SIGNUP
// CHECKOUT + ORDERS
// TRACKING + INVOICE
// REVIEWS + RATINGS
// COUPONS + STOCK
// ============================================================


// ============================================================
// PRODUCTS
// ============================================================

const products = [

    {
        id: 1,
        name: "Samsung Galaxy Smartphone",
        price: 14999,
        oldPrice: 17999,
        rating: 4.5,
        discount: 17,
        category: "Mobiles",
        stock: 10,
        image: "./product1.jpg"
    },

    {
        id: 2,
        name: "iPhone 15",
        price: 59999,
        oldPrice: 69999,
        rating: 4.7,
        discount: 14,
        category: "Mobiles",
        stock: 8,
        image: "./product2.jpg"
    },

    {
        id: 3,
        name: "Redmi Note Smartphone",
        price: 12999,
        oldPrice: 15999,
        rating: 4.3,
        discount: 19,
        category: "Mobiles",
        stock: 15,
        image: "./product3.jpg"
    },

    {
        id: 4,
        name: "HP Laptop",
        price: 49999,
        oldPrice: 57999,
        rating: 4.4,
        discount: 14,
        category: "Electronics",
        stock: 7,
        image: "./product4.jpg"
    },

    {
        id: 5,
        name: "Dell Laptop",
        price: 55999,
        oldPrice: 64999,
        rating: 4.5,
        discount: 14,
        category: "Electronics",
        stock: 6,
        image: "./product5.jpg"
    },

    {
        id: 6,
        name: "Wireless Headphones",
        price: 1999,
        oldPrice: 2999,
        rating: 4.2,
        discount: 33,
        category: "Audio",
        stock: 20,
        image: "./product6.jpg"
    },

    {
        id: 7,
        name: "Bluetooth Speaker",
        price: 2499,
        oldPrice: 3499,
        rating: 4.1,
        discount: 29,
        category: "Audio",
        stock: 12,
        image: "./product7.jpg"
    },

    {
        id: 8,
        name: "Smart Watch",
        price: 2499,
        oldPrice: 3999,
        rating: 4.4,
        discount: 38,
        category: "Watches",
        stock: 18,
        image: "./product8.jpg"
    },

    {
        id: 9,
        name: "Premium Analog Watch",
        price: 3499,
        oldPrice: 4999,
        rating: 4.6,
        discount: 30,
        category: "Watches",
        stock: 9,
        image: "./product9.jpg"
    },

    {
        id: 10,
        name: "Men's Casual Shirt",
        price: 899,
        oldPrice: 1499,
        rating: 4.2,
        discount: 40,
        category: "Fashion",
        stock: 25,
        image: "./product10.jpg"
    },

    {
        id: 11,
        name: "Women's Kurti",
        price: 799,
        oldPrice: 1299,
        rating: 4.3,
        discount: 38,
        category: "Fashion",
        stock: 30,
        image: "./product11.jpg"
    },

    {
        id: 12,
        name: "Men's Running Shoes",
        price: 1499,
        oldPrice: 2499,
        rating: 4.4,
        discount: 40,
        category: "Fashion",
        stock: 14,
        image: "./product12.jpg"
    },

    {
        id: 13,
        name: "Cotton Bedsheet",
        price: 699,
        oldPrice: 1199,
        rating: 4.1,
        discount: 42,
        category: "Home",
        stock: 22,
        image: "./product13.jpg"
    },

    {
        id: 14,
        name: "Table Lamp",
        price: 999,
        oldPrice: 1599,
        rating: 4.3,
        discount: 38,
        category: "Home",
        stock: 16,
        image: "./product14.jpg"
    },

    {
        id: 15,
        name: "Kitchen Mixer",
        price: 2999,
        oldPrice: 3999,
        rating: 4.5,
        discount: 25,
        category: "Home",
        stock: 11,
        image: "./product15.jpg"
    },

    {
        id: 16,
        name: "Remote Control Car",
        price: 1299,
        oldPrice: 1999,
        rating: 4.2,
        discount: 35,
        category: "Toys",
        stock: 19,
        image: "./product16.jpg"
    },

    {
        id: 17,
        name: "Kids Building Blocks",
        price: 599,
        oldPrice: 999,
        rating: 4.4,
        discount: 40,
        category: "Toys",
        stock: 24,
        image: "./product17.jpg"
    },

    {
        id: 18,
        name: "Gaming Keyboard",
        price: 1799,
        oldPrice: 2499,
        rating: 4.5,
        discount: 28,
        category: "Electronics",
        stock: 13,
        image: "./product18.jpg"
    },

    {
        id: 19,
        name: "Wireless Mouse",
        price: 699,
        oldPrice: 999,
        rating: 4.3,
        discount: 30,
        category: "Electronics",
        stock: 21,
        image: "./product19.jpg"
    },

    {
        id: 20,
        name: "Power Bank",
        price: 1199,
        oldPrice: 1799,
        rating: 4.2,
        discount: 33,
        category: "Electronics",
        stock: 17,
        image: "./product20.jpg"
    }

];


// ============================================================
// STORAGE
// ============================================================

function loadStorage(key, defaultValue) {

    try {

        const data = localStorage.getItem(key);

        if (!data) {
            return defaultValue;
        }

        return JSON.parse(data);

    } catch (error) {

        console.log("Storage error:", error);

        return defaultValue;

    }

}


function saveStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.log("Save error:", error);

    }

}


// ============================================================
// STOCK
// ============================================================

let stock = loadStorage(
    "myStock",
    {}
);


function initializeStock() {

    let changed = false;

    products.forEach(product => {

        const current =
            Number(stock[product.id]);

        if (
            !Number.isFinite(current) ||
            current < 0
        ) {

            stock[product.id] =
                product.stock;

            changed = true;

        } else {

            stock[product.id] =
                Math.floor(current);

        }

    });

    if (changed) {

        saveStorage(
            "myStock",
            stock
        );

    }

}


function getAvailableStock(id) {

    const value =
        Number(stock[id]);

    if (!Number.isFinite(value)) {
        return 0;
    }

    return Math.max(
        0,
        Math.floor(value)
    );

}


function saveStock() {

    saveStorage(
        "myStock",
        stock
    );

}


function getStockHTML(product) {

    const available =
        getAvailableStock(product.id);


    if (available <= 0) {

        return `
            <div
                class="stock-status"
                style="
                    color:#d32f2f;
                    font-weight:bold;
                    margin:8px 0;
                "
            >
                🔴 Out of Stock
            </div>
        `;

    }


    if (available <= 3) {

        return `
            <div
                class="stock-status"
                style="
                    color:#ef6c00;
                    font-weight:bold;
                    margin:8px 0;
                "
            >
                🟠 Only ${available} left!
            </div>
        `;

    }


    return `
        <div
            class="stock-status"
            style="
                color:#168a3a;
                font-weight:bold;
                margin:8px 0;
            "
        >
            🟢 In Stock (${available})
        </div>
    `;

}


// ============================================================
// DATA
// ============================================================

let cart =
    loadStorage(
        "myCart",
        []
    );


let orders =
    loadStorage(
        "myOrders",
        []
    );


let wishlist =
    loadStorage(
        "myWishlist",
        []
    );


let reviews =
    loadStorage(
        "myReviews",
        []
    );


let users =
    loadStorage(
        "myUsers",
        []
    );


let currentUser =
    loadStorage(
        "currentUser",
        null
    );


let currentCategory =
    "all";


let currentSort =
    "default";


let selectedRating =
    0;


let appliedCoupon =
    "";


let discountAmount =
    0;


const DELIVERY_CHARGE =
    40;


const coupons = {

    SAVE10: 10,

    SAVE20: 20,

    WELCOME: 15

};


// ============================================================
// IMAGE SYSTEM
// ============================================================

function setLocalImagePaths() {

    products.forEach(product => {

        product.image =
            `./product${product.id}.jpg`;

    });

}


function createImageFallback(productName) {

    const safeName =
        String(productName || "Product")
            .replace(/[<>&"]/g, "");


    const svg = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="350"
            viewBox="0 0 500 350"
        >

            <rect
                width="500"
                height="350"
                fill="#f5f5f5"
            />

            <circle
                cx="250"
                cy="130"
                r="55"
                fill="#2874f0"
                opacity="0.12"
            />

            <text
                x="250"
                y="150"
                text-anchor="middle"
                font-size="50"
            >
                🛍️
            </text>

            <text
                x="250"
                y="230"
                text-anchor="middle"
                font-family="Arial"
                font-size="20"
                font-weight="bold"
                fill="#333"
            >
                ${safeName}
            </text>

            <text
                x="250"
                y="265"
                text-anchor="middle"
                font-family="Arial"
                font-size="15"
                fill="#777"
            >
                My Store
            </text>

        </svg>

    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );

}


// ============================================================
// AUTH
// ============================================================

function openAuth() {

    const modal =
        document.getElementById(
            "authModal"
        );

    if (!modal) {
        return;
    }

    showLogin();

    const message =
        document.getElementById(
            "authMessage"
        );

    if (message) {

        message.innerText = "";

        message.className =
            "auth-message";

    }

    modal.style.display =
        "flex";

}


function closeAuth() {

    const modal =
        document.getElementById(
            "authModal"
        );

    if (modal) {

        modal.style.display =
            "none";

    }

}


function showLogin() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );

    const signupForm =
        document.getElementById(
            "signupForm"
        );

    const title =
        document.getElementById(
            "authTitle"
        );

    const subtitle =
        document.getElementById(
            "authSubtitle"
        );

    const switchText =
        document.getElementById(
            "authSwitchText"
        );

    const switchButton =
        document.getElementById(
            "authSwitchBtn"
        );


    if (loginForm) {
        loginForm.style.display =
            "block";
    }


    if (signupForm) {
        signupForm.style.display =
            "none";
    }


    if (title) {
        title.innerText =
            "🔐 Login";
    }


    if (subtitle) {
        subtitle.innerText =
            "Login to continue shopping";
    }


    if (switchText) {
        switchText.innerText =
            "Don't have an account?";
    }


    if (switchButton) {

        switchButton.innerText =
            "Create Account";

        switchButton.onclick =
            showSignup;

    }

}


function showSignup() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );

    const signupForm =
        document.getElementById(
            "signupForm"
        );

    const title =
        document.getElementById(
            "authTitle"
        );

    const subtitle =
        document.getElementById(
            "authSubtitle"
        );

    const switchText =
        document.getElementById(
            "authSwitchText"
        );

    const switchButton =
        document.getElementById(
            "authSwitchBtn"
        );


    if (loginForm) {
        loginForm.style.display =
            "none";
    }


    if (signupForm) {
        signupForm.style.display =
            "block";
    }


    if (title) {
        title.innerText =
            "📝 Create Account";
    }


    if (subtitle) {
        subtitle.innerText =
            "Create your account to continue";
    }


    if (switchText) {
        switchText.innerText =
            "Already have an account?";
    }


    if (switchButton) {

        switchButton.innerText =
            "Login";

        switchButton.onclick =
            showLogin;

    }

}


function setAuthMessage(
    message,
    type
) {

    const element =
        document.getElementById(
            "authMessage"
        );


    if (!element) {
        return;
    }


    element.innerText =
        message;


    element.className =
        "auth-message " +
        (type || "");

}


function signupUser(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "signupName"
        )?.value.trim() || "";


    const email =
        document.getElementById(
            "signupEmail"
        )?.value.trim().toLowerCase() || "";


    const phone =
        document.getElementById(
            "signupPhone"
        )?.value.trim() || "";


    const password =
        document.getElementById(
            "signupPassword"
        )?.value || "";


    const confirmPassword =
        document.getElementById(
            "signupConfirmPassword"
        )?.value || "";


    if (
        !name ||
        !email ||
        !phone ||
        !password
    ) {

        setAuthMessage(
            "Please fill all fields.",
            "error"
        );

        return;

    }


    if (
        !/^[0-9]{10}$/.test(phone)
    ) {

        setAuthMessage(
            "Please enter a valid 10 digit mobile number.",
            "error"
        );

        return;

    }


    if (
        password.length < 6
    ) {

        setAuthMessage(
            "Password must contain at least 6 characters.",
            "error"
        );

        return;

    }


    if (
        password !==
        confirmPassword
    ) {

        setAuthMessage(
            "Passwords do not match.",
            "error"
        );

        return;

    }


    const existing =
        users.find(
            user =>
                String(user.email)
                    .toLowerCase() ===
                email
        );


    if (existing) {

        setAuthMessage(
            "An account with this email already exists.",
            "error"
        );

        return;

    }


    const newUser = {

        id: Date.now(),

        name: name,

        email: email,

        phone: phone,

        password: password

    };


    users.push(newUser);


    saveStorage(
        "myUsers",
        users
    );


    currentUser = {

        id: newUser.id,

        name: newUser.name,

        email: newUser.email,

        phone: newUser.phone

    };


    saveStorage(
        "currentUser",
        currentUser
    );


    updateAuthUI();

    syncUserToCheckout();


    setAuthMessage(
        "✅ Account created successfully!",
        "success"
    );


    setTimeout(
        closeAuth,
        700
    );

}


function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "loginEmail"
        )?.value.trim().toLowerCase() || "";


    const password =
        document.getElementById(
            "loginPassword"
        )?.value || "";


    const user =
        users.find(
            item =>
                String(item.email)
                    .toLowerCase() ===
                    email &&
                item.password ===
                    password
        );


    if (!user) {

        setAuthMessage(
            "❌ Invalid email or password.",
            "error"
        );

        return;

    }


    currentUser = {

        id: user.id,

        name: user.name,

        email: user.email,

        phone: user.phone

    };


    saveStorage(
        "currentUser",
        currentUser
    );


    updateAuthUI();

    syncUserToCheckout();


    setAuthMessage(
        "✅ Login successful!",
        "success"
    );


    setTimeout(
        closeAuth,
        700
    );

}


function logoutUser() {

    currentUser = null;


    saveStorage(
        "currentUser",
        null
    );


    updateAuthUI();


    alert(
        "👋 Logged out successfully."
    );

}


function updateAuthUI() {

    const loginBtn =
        document.getElementById(
            "loginBtn"
        );


    const userArea =
        document.getElementById(
            "userArea"
        );


    const userNameDisplay =
        document.getElementById(
            "userNameDisplay"
        );


    if (currentUser) {

        if (loginBtn) {
            loginBtn.style.display =
                "none";
        }


        if (userArea) {
            userArea.style.display =
                "flex";
        }


        if (userNameDisplay) {

            userNameDisplay.innerText =
                "👋 " +
                currentUser.name;

        }

    } else {

        if (loginBtn) {
            loginBtn.style.display =
                "";
        }


        if (userArea) {
            userArea.style.display =
                "none";
        }


        if (userNameDisplay) {
            userNameDisplay.innerText =
                "";
        }

    }

}


function syncUserToCheckout() {

    if (!currentUser) {
        return;
    }


    const name =
        document.getElementById(
            "customerName"
        );


    const email =
        document.getElementById(
            "customerEmail"
        );


    const phone =
        document.getElementById(
            "customerPhone"
        );


    if (
        name &&
        !name.value.trim()
    ) {
        name.value =
            currentUser.name || "";
    }


    if (
        email &&
        !email.value.trim()
    ) {
        email.value =
            currentUser.email || "";
    }


    if (
        phone &&
        !phone.value.trim()
    ) {
        phone.value =
            currentUser.phone || "";
    }

}


// ============================================================
// RATING
// ============================================================

function getProductAverageRating(
    productId
) {

    const list =
        reviews.filter(
            review =>
                Number(review.productId) ===
                Number(productId)
        );


    if (list.length > 0) {

        const total =
            list.reduce(
                (sum, review) =>
                    sum +
                    Number(review.rating),
                0
            );


        return (
            total /
            list.length
        );

    }


    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    return product
        ? Number(product.rating || 0)
        : 0;

}


// ============================================================
// SORT
// ============================================================

function sortProductList(list) {

    const sorted =
        [...list];


    if (
        currentSort ===
        "priceLow"
    ) {

        sorted.sort(
            (a, b) =>
                Number(a.price) -
                Number(b.price)
        );

    }


    else if (
        currentSort ===
        "priceHigh"
    ) {

        sorted.sort(
            (a, b) =>
                Number(b.price) -
                Number(a.price)
        );

    }


    else if (
        currentSort ===
        "nameAZ"
    ) {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    else if (
        currentSort ===
        "nameZA"
    ) {

        sorted.sort(
            (a, b) =>
                b.name.localeCompare(
                    a.name
                )
        );

    }


    else if (
        currentSort ===
        "ratingHigh"
    ) {

        sorted.sort(
            (a, b) =>
                getProductAverageRating(b.id) -
                getProductAverageRating(a.id)
        );

    }


    return sorted;

}


// ============================================================
// DISPLAY PRODUCTS
// ============================================================

function displayProducts(list) {

    const container =
        document.getElementById(
            "products"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        "";


    const sortedList =
        sortProductList(
            list || []
        );


    if (
        sortedList.length === 0
    ) {

        container.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:50px;
                "
            >

                <h2>
                    No products found
                </h2>

            </div>

        `;

        return;

    }


    sortedList.forEach(
        product => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product";


            const isWishlisted =
                wishlist.includes(
                    Number(product.id)
                );


            const productReviews =
                reviews.filter(
                    review =>
                        Number(review.productId) ===
                        Number(product.id)
                );


            const averageRating =
                getProductAverageRating(
                    product.id
                );


            const availableStock =
                getAvailableStock(
                    product.id
                );


            const stockHTML =
                getStockHTML(
                    product
                );


            const cartItem =
                cart.find(
                    item =>
                        Number(item.id) ===
                        Number(product.id)
                );


            const cartQuantity =
                cartItem
                    ? Number(cartItem.quantity)
                    : 0;


            const canAdd =
                availableStock >
                cartQuantity;


            card.innerHTML = `

                <img

                    src="${product.image}"

                    alt="${product.name}"

                    loading="lazy"

                    onclick="
                        openProductDetails(
                            ${product.id}
                        )
                    "

                    style="
                        cursor:pointer;
                        display:block;
                        width:100%;
                        height:220px;
                        object-fit:contain;
                        background:#f5f5f5;
                    "

                    onerror="
                        this.onerror=null;
                        this.src=createImageFallback('${product.name.replace(/'/g, "\\'")}');
                    "

                >


                <h2

                    onclick="
                        openProductDetails(
                            ${product.id}
                        )
                    "

                    style="
                        cursor:pointer;
                    "

                >
                    ${product.name}
                </h2>


                <div class="price">

                    ₹${Number(
                        product.price
                    ).toLocaleString(
                        "en-IN"
                    )}

                </div>


                ${
                    product.oldPrice
                        ? `

                            <div
                                style="
                                    color:#777;
                                    font-size:13px;
                                "
                            >

                                <s>
                                    ₹${Number(
                                        product.oldPrice
                                    ).toLocaleString(
                                        "en-IN"
                                    )}
                                </s>

                                <span
                                    style="
                                        color:green;
                                        font-weight:bold;
                                        margin-left:5px;
                                    "
                                >
                                    ${product.discount}% off
                                </span>

                            </div>

                        `
                        : ""
                }


                <div class="product-rating">

                    ⭐ ${averageRating.toFixed(1)}

                    <span>

                        ${
                            productReviews.length > 0
                                ? `(${productReviews.length} review${productReviews.length > 1 ? "s" : ""})`
                                : "(Initial Rating)"
                        }

                    </span>

                </div>


                ${stockHTML}


                <button

                    type="button"

                    class="wishlist-btn"

                    onclick="
                        toggleWishlist(
                            ${product.id}
                        )
                    "

                >

                    ${
                        isWishlisted
                            ? "❤️ Remove Wishlist"
                            : "🤍 Add to Wishlist"
                    }

                </button>


                <button

                    type="button"

                    class="add-btn"

                    onclick="
                        addToCart(
                            ${product.id}
                        )
                    "

                    ${
                        availableStock <= 0 ||
                        !canAdd
                            ? "disabled"
                            : ""
                    }

                >

                    ${
                        availableStock <= 0
                            ? "❌ Out of Stock"
                            : !canAdd
                                ? "✅ Max Stock Added"
                                : "🛒 Add to Cart"
                    }

                </button>


                <button

                    type="button"

                    class="buy-now-btn"

                    onclick="
                        quickBuyNow(
                            ${product.id}
                        )
                    "

                    ${
                        availableStock <= 0
                            ? "disabled"
                            : ""
                    }

                >

                    ${
                        availableStock <= 0
                            ? "❌ Out of Stock"
                            : "⚡ Buy Now"
                    }

                </button>

            `;


            container.appendChild(
                card
            );

        }
    );

}


// ============================================================
// FILTER
// ============================================================

function getFilteredProducts() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    let result =
        products.filter(
            product => {

                const name =
                    product.name
                        .toLowerCase();


                const category =
                    product.category
                        .toLowerCase();


                return (
                    name.includes(search) ||
                    category.includes(search)
                );

            }
        );


    if (
        currentCategory !==
        "all"
    ) {

        result =
            result.filter(
                product =>
                    product.category ===
                    currentCategory
            );

    }


    return result;

}


// ============================================================
// SEARCH
// ============================================================

function searchProducts() {

    displayProducts(
        getFilteredProducts()
    );

}


function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        function () {

            displayProducts(
                getFilteredProducts()
            );

        }
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Enter"
            ) {

                searchProducts();

            }

        }
    );

}


// ============================================================
// CATEGORY
// ============================================================

function filterProducts(
    category
) {

    currentCategory =
        category;


    displayProducts(
        getFilteredProducts()
    );

}


// ============================================================
// SORT
// ============================================================

function sortProducts() {

    const select =
        document.getElementById(
            "sortProducts"
        );


    if (!select) {
        return;
    }


    currentSort =
        select.value;


    displayProducts(
        getFilteredProducts()
    );

}


// ============================================================
// CART
// ============================================================

function addToCart(id) {

    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(id)
        );


    if (!product) {
        return;
    }


    const available =
        getAvailableStock(
            product.id
        );


    if (available <= 0) {

        alert(
            "❌ This product is out of stock."
        );

        return;

    }


    const existing =
        cart.find(
            item =>
                Number(item.id) ===
                Number(product.id)
        );


    const quantity =
        existing
            ? Number(existing.quantity)
            : 0;


    if (
        quantity >=
        available
    ) {

        alert(
            `Only ${available} item(s) available in stock.`
        );

        return;

    }


    if (existing) {

        existing.quantity =
            quantity + 1;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveStorage(
        "myCart",
        cart
    );


    updateCart();


    displayProducts(
        getFilteredProducts()
    );


    alert(
        product.name +
        " added to cart! 🛒"
    );

}


function increaseQuantity(index) {

    const item =
        cart[index];


    if (!item) {
        return;
    }


    const available =
        getAvailableStock(
            item.id
        );


    if (
        Number(item.quantity) >=
        available
    ) {

        alert(
            `Only ${available} item(s) available.`
        );

        return;

    }


    item.quantity++;


    updateCart();


    displayProducts(
        getFilteredProducts()
    );

}


function decreaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    if (
        Number(cart[index].quantity) > 1
    ) {

        cart[index].quantity--;

    } else {

        cart.splice(
            index,
            1
        );

    }


    updateCart();


    displayProducts(
        getFilteredProducts()
    );

}


function removeFromCart(index) {

    if (!cart[index]) {
        return;
    }


    cart.splice(
        index,
        1
    );


    updateCart();


    displayProducts(
        getFilteredProducts()
    );

}


function openCart() {

    updateCart();


    const modal =
        document.getElementById(
            "cartModal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }

}


function closeCart() {

    const modal =
        document.getElementById(
            "cartModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// UPDATE CART
// ============================================================

function updateCart() {

    saveStorage(
        "myCart",
        cart
    );


    const cartCount =
        document.getElementById(
            "cartCount"
        );


    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    const quantity =
        cart.reduce(
            (total, item) =>
                total +
                Number(
                    item.quantity || 0
                ),
            0
        );


    if (cartCount) {

        cartCount.innerText =
            quantity;

    }


    if (
        !cartItems ||
        !cartTotal
    ) {

        return;

    }


    cartItems.innerHTML =
        "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                🛒 Your cart is empty

            </div>

        `;


        cartTotal.innerHTML =
            "0";


        return;

    }


    cart.forEach(
        (item, index) => {

            const itemTotal =
                Number(item.price) *
                Number(item.quantity);


            const available =
                getAvailableStock(
                    item.id
                );


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "cart-item";


            div.innerHTML = `

                <div class="cart-product">

                    <strong>
                        ${item.name}
                    </strong>

                    <div class="cart-price">

                        ₹${Number(
                            item.price
                        ).toLocaleString(
                            "en-IN"
                        )}

                    </div>

                    <small
                        style="
                            color:#168a3a;
                            font-weight:bold;
                        "
                    >

                        📦 ${available} available

                    </small>

                </div>


                <div class="quantity-control">

                    <button
                        type="button"
                        onclick="
                            decreaseQuantity(
                                ${index}
                            )
                        "
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        type="button"
                        onclick="
                            increaseQuantity(
                                ${index}
                            )
                        "
                        ${
                            Number(item.quantity) >=
                            available
                                ? "disabled"
                                : ""
                        }
                    >
                        +
                    </button>

                </div>


                <div class="item-total">

                    ₹${itemTotal.toLocaleString(
                        "en-IN"
                    )}

                </div>


                <button

                    type="button"

                    class="remove-btn"

                    onclick="
                        removeFromCart(
                            ${index}
                        )
                    "

                >
                    🗑️
                </button>

            `;


            cartItems.appendChild(
                div
            );

        }
    );


    const subtotal =
        cart.reduce(
            (total, item) =>
                total +
                (
                    Number(item.price) *
                    Number(item.quantity)
                ),
            0
        );


    if (
        appliedCoupon &&
        coupons[appliedCoupon]
    ) {

        discountAmount =
            Math.round(
                subtotal *
                coupons[appliedCoupon] /
                100
            );

    } else {

        discountAmount =
            0;

    }


    const delivery =
        subtotal > 0
            ? DELIVERY_CHARGE
            : 0;


    const total =
        Math.max(
            0,
            subtotal +
            delivery -
            discountAmount
        );


    cartTotal.innerHTML = `

        <div class="cart-summary">

            <div>

                <span>
                    Subtotal
                </span>

                <strong>
                    ₹${subtotal.toLocaleString(
                        "en-IN"
                    )}
                </strong>

            </div>


            <div style="color:green;">

                <span>
                    Discount
                </span>

                <strong>
                    -₹${discountAmount.toLocaleString(
                        "en-IN"
                    )}
                </strong>

            </div>


            <div>

                <span>
                    Delivery
                </span>

                <strong>
                    ₹${delivery.toLocaleString(
                        "en-IN"
                    )}
                </strong>

            </div>


            ${
                appliedCoupon
                    ? `

                        <div
                            style="
                                color:#2874f0;
                                margin-top:8px;
                            "
                        >

                            🎟️ Coupon:

                            <strong>
                                ${appliedCoupon}
                            </strong>

                            <button
                                type="button"
                                onclick="clearCoupon()"
                                style="
                                    margin-left:8px;
                                    border:none;
                                    background:none;
                                    color:red;
                                    cursor:pointer;
                                "
                            >
                                ✕
                            </button>

                        </div>

                    `
                    : ""
            }


            <hr>


            <div class="grand-total">

                <span>
                    Grand Total
                </span>

                <strong>

                    ₹${total.toLocaleString(
                        "en-IN"
                    )}

                </strong>

            </div>

        </div>

    `;

}


// ============================================================
// COUPON
// ============================================================

function applyCoupon() {

    const input =
        document.getElementById(
            "couponCode"
        );


    const message =
        document.getElementById(
            "couponMessage"
        );


    if (!input || !message) {
        return;
    }


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (!code) {

        message.innerText =
            "Please enter a coupon code.";

        message.className =
            "coupon-message error";

        return;

    }


    if (!coupons[code]) {

        appliedCoupon =
            "";

        discountAmount =
            0;


        message.innerText =
            "❌ Invalid coupon code!";

        message.className =
            "coupon-message error";


        updateCart();

        return;

    }


    const subtotal =
        cart.reduce(
            (total, item) =>
                total +
                (
                    Number(item.price) *
                    Number(item.quantity)
                ),
            0
        );


    if (subtotal <= 0) {

        message.innerText =
            "Add products to cart first.";

        message.className =
            "coupon-message error";

        return;

    }


    appliedCoupon =
        code;


    discountAmount =
        Math.round(
            subtotal *
            coupons[code] /
            100
        );


    message.innerText =
        `✅ ${code} applied! You saved ₹${discountAmount}`;


    message.className =
        "coupon-message success";


    updateCart();

}


function clearCoupon() {

    appliedCoupon =
        "";

    discountAmount =
        0;


    const input =
        document.getElementById(
            "couponCode"
        );


    const message =
        document.getElementById(
            "couponMessage"
        );


    if (input) {
        input.value =
            "";
    }


    if (message) {

        message.innerText =
            "";

        message.className =
            "coupon-message";

    }


    updateCart();

}


// ============================================================
// CHECKOUT
// ============================================================

function checkout() {

    if (!currentUser) {

        closeCart();

        openAuth();


        setAuthMessage(
            "🔐 Please login or create an account before checkout.",
            "error"
        );

        return;

    }


    if (cart.length === 0) {

        alert(
            "Your cart is empty! 🛒"
        );

        return;

    }


    syncUserToCheckout();


    closeCart();


    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }

}


function closeCheckout() {

    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// QUICK BUY
// ============================================================

function quickBuyNow(id) {

    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(id)
        );


    if (!product) {
        return;
    }


    const available =
        getAvailableStock(
            product.id
        );


    if (available <= 0) {

        alert(
            "❌ This product is out of stock."
        );

        return;

    }


    if (!currentUser) {

        openAuth();


        setAuthMessage(
            "🔐 Please login before buying this product.",
            "error"
        );

        return;

    }


    cart = [

        {
            ...product,

            quantity: 1

        }

    ];


    appliedCoupon =
        "";


    discountAmount =
        0;


    saveStorage(
        "myCart",
        cart
    );


    updateCart();


    syncUserToCheckout();


    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }

}


// ============================================================
// PLACE ORDER
// ============================================================

function placeOrder(event) {

    if (event) {
        event.preventDefault();
    }


    if (!currentUser) {

        closeCheckout();

        openAuth();


        setAuthMessage(
            "🔐 Please login before placing your order.",
            "error"
        );

        return;

    }


    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;

    }


    const problem =
        cart.find(
            item =>
                Number(item.quantity) >
                getAvailableStock(
                    item.id
                )
        );


    if (problem) {

        alert(
            `❌ ${problem.name} has only ${getAvailableStock(problem.id)} item(s) available.`
        );

        updateCart();

        return;

    }


    const name =
        document.getElementById(
            "customerName"
        )?.value.trim() || "";


    const phone =
        document.getElementById(
            "customerPhone"
        )?.value.trim() || "";


    const email =
        document.getElementById(
            "customerEmail"
        )?.value.trim() || "";


    const house =
        document.getElementById(
            "house"
        )?.value.trim() || "";


    const street =
        document.getElementById(
            "street"
        )?.value.trim() || "";


    const city =
        document.getElementById(
            "city"
        )?.value.trim() || "";


    const pincode =
        document.getElementById(
            "pincode"
        )?.value.trim() || "";


    const address =
        [
            house,
            street,
            city,
            pincode
        ]
            .filter(Boolean)
            .join(", ");


    if (
        !name ||
        !phone ||
        !email ||
        !address
    ) {

        alert(
            "Please fill all delivery details."
        );

        return;

    }


    const paymentInput =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!paymentInput) {

        alert(
            "Please select a payment method."
        );

        return;

    }


    const payment =
        paymentInput.value;


    const subtotal =
        cart.reduce(
            (total, item) =>
                total +
                (
                    Number(item.price) *
                    Number(item.quantity)
                ),
            0
        );


    const discount =
        appliedCoupon &&
        coupons[appliedCoupon]
            ? Math.round(
                subtotal *
                coupons[appliedCoupon] /
                100
            )
            : 0;


    const delivery =
        DELIVERY_CHARGE;


    const total =
        Math.max(
            0,
            subtotal +
            delivery -
            discount
        );


    const orderNumber =
        Math.floor(
            100000 +
            Math.random() *
            900000
        );


    const items =
        cart.map(
            item => ({

                id: item.id,

                name: item.name,

                price:
                    Number(item.price),

                quantity:
                    Number(item.quantity)

            })
        );


    const order = {

        id:
            "ORD" +
            orderNumber,

        userEmail:
            currentUser.email,

        customer:
            name,

        phone:
            phone,

        email:
            email,

        address:
            address,

        payment:
            payment,

        subtotal:
            subtotal,

        delivery:
            delivery,

        discount:
            discount,

        coupon:
            appliedCoupon,

        total:
            total,

        items:
            items,

        status:
            "Order Placed",

        date:
            new Date().toLocaleString(
                "en-IN"
            )

    };


    orders.push(order);


    saveStorage(
        "myOrders",
        orders
    );


    items.forEach(
        item => {

            stock[item.id] =
                Math.max(
                    0,
                    getAvailableStock(item.id) -
                    Number(item.quantity)
                );

        }
    );


    saveStock();


    const orderId =
        document.getElementById(
            "orderId"
        );


    const orderAmount =
        document.getElementById(
            "orderAmount"
        );


    if (orderId) {

        orderId.innerText =
            "Order ID: #" +
            order.id;

    }


    if (orderAmount) {

        orderAmount.innerText =
            "Total Amount: ₹" +
            total.toLocaleString(
                "en-IN"
            );

    }


    cart = [];


    appliedCoupon =
        "";


    discountAmount =
        0;


    saveStorage(
        "myCart",
        cart
    );


    updateCart();


    displayProducts(
        getFilteredProducts()
    );


    displayOrders();


    closeCheckout();


    const success =
        document.getElementById(
            "successModal"
        );


    if (success) {

        success.style.display =
            "flex";

    }

}


// ============================================================
// SUCCESS
// ============================================================

function closeSuccess() {

    const modal =
        document.getElementById(
            "successModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// ORDERS
// ============================================================

function displayOrders() {

    const container =
        document.getElementById(
            "ordersList"
        );


    if (!container) {
        return;
    }


    if (!currentUser) {

        container.innerHTML = `

            <div
                style="
                    text-align:center;
                    padding:25px;
                "
            >

                <h3>
                    🔐 Please Login
                </h3>

                <p>
                    Login to view your orders.
                </p>

                <button
                    type="button"
                    class="auth-submit-btn"
                    onclick="
                        closeOrders();
                        openAuth();
                    "
                >
                    🔐 Login / Signup
                </button>

            </div>

        `;

        return;

    }


    const userOrders =
        orders.filter(
            order =>
                String(order.userEmail)
                    .toLowerCase() ===
                String(currentUser.email)
                    .toLowerCase()
        );


    if (
        userOrders.length === 0
    ) {

        container.innerHTML = `

            <p>
                No orders yet.
            </p>

        `;

        return;

    }


    container.innerHTML =
        "";


    userOrders
        .slice()
        .reverse()
        .forEach(
            order => {

                const cancelled =
                    order.status ===
                    "Order Cancelled";


                const paymentName =
                    order.payment === "cod"
                        ? "Cash on Delivery"
                        : "UPI";


                const itemsHTML =
                    (order.items || [])
                        .map(
                            item => `

                                <div
                                    style="
                                        display:flex;
                                        justify-content:space-between;
                                        gap:10px;
                                        padding:7px 0;
                                        border-bottom:1px solid #ddd;
                                    "
                                >

                                    <span>

                                        ${item.name}
                                        × ${item.quantity}

                                    </span>

                                    <strong>

                                        ₹${(
                                            Number(item.price) *
                                            Number(item.quantity)
                                        ).toLocaleString(
                                            "en-IN"
                                        )}

                                    </strong>

                                </div>

                            `
                        )
                        .join("");


                container.innerHTML += `

                    <div class="order-card">

                        <h3>
                            📦 Order #${order.id}
                        </h3>


                        <p>
                            Customer:
                            ${order.customer || "Customer"}
                        </p>


                        <p>
                            📱 Phone:
                            ${order.phone || "Not available"}
                        </p>


                        <p>
                            📧 Email:
                            ${order.email || "Not available"}
                        </p>


                        <p>
                            📍 Address:
                            ${order.address || "Not available"}
                        </p>


                        <p>
                            Date:
                            ${order.date}
                        </p>


                        <p>
                            Payment:
                            ${paymentName}
                        </p>


                        <h4>
                            🛍️ Products
                        </h4>


                        <div>
                            ${itemsHTML}
                        </div>


                        <hr>


                        <p>
                            Subtotal:
                            ₹${Number(
                                order.subtotal || 0
                            ).toLocaleString(
                                "en-IN"
                            )}
                        </p>


                        ${
                            Number(order.discount || 0) > 0
                                ? `

                                    <p style="color:green;">

                                        🎟️ Coupon:
                                        <strong>
                                            ${order.coupon}
                                        </strong>

                                    </p>

                                    <p style="color:green;">

                                        Discount:
                                        <strong>
                                            -₹${Number(
                                                order.discount
                                            ).toLocaleString(
                                                "en-IN"
                                            )}
                                        </strong>

                                    </p>

                                `
                                : ""
                        }


                        <p>

                            Delivery:
                            ₹${Number(
                                order.delivery || 0
                            ).toLocaleString(
                                "en-IN"
                            )}

                        </p>


                        <strong>

                            Total:
                            ₹${Number(
                                order.total || 0
                            ).toLocaleString(
                                "en-IN"
                            )}

                        </strong>


                        ${
                            cancelled

                                ? `

                                    <p
                                        class="order-status cancelled"
                                    >
                                        ❌ Order Cancelled
                                    </p>

                                    <div class="order-actions">

                                        <button
                                            type="button"
                                            class="invoice-btn"
                                            onclick="
                                                openInvoice(
                                                    '${order.id}'
                                                )
                                            "
                                        >
                                            🧾 View Invoice
                                        </button>

                                    </div>

                                `

                                : `

                                    <p class="order-status">

                                        🟢
                                        ${order.status}

                                    </p>


                                    <div class="order-actions">

                                        <button
                                            type="button"
                                            class="track-order-btn"
                                            onclick="
                                                openTracking(
                                                    '${order.id}'
                                                )
                                            "
                                        >
                                            🚚 Track Order
                                        </button>


                                        <button
                                            type="button"
                                            class="cancel-order-btn"
                                            onclick="
                                                cancelOrder(
                                                    '${order.id}'
                                                )
                                            "
                                        >
                                            ❌ Cancel Order
                                        </button>


                                        <button
                                            type="button"
                                            class="invoice-btn"
                                            onclick="
                                                openInvoice(
                                                    '${order.id}'
                                                )
                                            "
                                        >
                                            🧾 View Invoice
                                        </button>

                                    </div>

                                `

                        }

                    </div>

                `;

            }
        );

}


function openOrders() {

    displayOrders();


    const modal =
        document.getElementById(
            "ordersModal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }

}


function closeOrders() {

    const modal =
        document.getElementById(
            "ordersModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// CANCEL ORDER
// ============================================================

function cancelOrder(
    orderId
) {

    const order =
        orders.find(
            item =>
                item.id ===
                orderId
        );


    if (!order) {

        alert(
            "Order not found!"
        );

        return;

    }


    if (
        order.status ===
        "Order Cancelled"
    ) {

        alert(
            "This order is already cancelled."
        );

        return;

    }


    if (
        !confirm(
            "Are you sure you want to cancel this order?"
        )
    ) {

        return;

    }


    order.status =
        "Order Cancelled";


    order.cancelledDate =
        new Date().toLocaleString(
            "en-IN"
        );


    saveStorage(
        "myOrders",
        orders
    );


    displayOrders();


    alert(
        "❌ Order cancelled successfully."
    );

}


// ============================================================
// TRACKING
// ============================================================

function openTracking(
    orderId
) {

    const order =
        orders.find(
            item =>
                item.id ===
                orderId
        );


    if (!order) {

        alert(
            "Order not found!"
        );

        return;

    }


    if (
        order.status ===
        "Order Cancelled"
    ) {

        alert(
            "Cancelled orders cannot be tracked."
        );

        return;

    }


    const idElement =
        document.getElementById(
            "trackingOrderId"
        );


    if (idElement) {

        idElement.innerText =
            "Order ID: #" +
            order.id;

    }


    const modal =
        document.getElementById(
            "trackingModal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }

}


function closeTracking() {

    const modal =
        document.getElementById(
            "trackingModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// WISHLIST
// ============================================================

function toggleWishlist(
    id
) {

    id =
        Number(id);


    const index =
        wishlist.indexOf(id);


    if (index === -1) {

        wishlist.push(id);

        alert(
            "❤️ Added to Wishlist"
        );

    } else {

        wishlist.splice(
            index,
            1
        );

        alert(
            "💔 Removed from Wishlist"
        );

    }


    saveStorage(
        "myWishlist",
        wishlist
    );


    displayProducts(
        getFilteredProducts()
    );


    displayWishlist();

}


function displayWishlist() {

    const container =
        document.getElementById(
            "wishlistItems"
        );


    if (!container) {
        return;
    }


    const list =
        products.filter(
            product =>
                wishlist.includes(
                    Number(product.id)
                )
        );


    if (list.length === 0) {

        container.innerHTML = `

            <p>
                ❤️ Your Wishlist is empty
            </p>

        `;

        return;

    }


    container.innerHTML =
        "";


    list.forEach(
        product => {

            const available =
                getAvailableStock(
                    product.id
                );


            const rating =
                getProductAverageRating(
                    product.id
                );


            container.innerHTML += `

                <div class="wishlist-item">

                    <img

                        src="${product.image}"

                        alt="${product.name}"

                        width="80"

                        height="80"

                        style="
                            object-fit:contain;
                            background:#f5f5f5;
                        "

                        onerror="
                            this.onerror=null;
                            this.src=createImageFallback('${product.name.replace(/'/g, "\\'")}');
                        "

                    >


                    <div style="flex:1;">

                        <strong>
                            ${product.name}
                        </strong>


                        <p>

                            ₹${Number(
                                product.price
                            ).toLocaleString(
                                "en-IN"
                            )}

                        </p>


                        <p
                            style="
                                color:#f5a623;
                                font-weight:bold;
                            "
                        >

                            ⭐ ${rating.toFixed(1)}

                        </p>


                        ${
                            available > 0

                                ? `

                                    <p
                                        style="
                                            color:#168a3a;
                                        "
                                    >
                                        🟢 ${available} in stock
                                    </p>

                                `

                                : `

                                    <p
                                        style="
                                            color:#d32f2f;
                                            font-weight:bold;
                                        "
                                    >
                                        🔴 Out of Stock
                                    </p>

                                `
                        }


                        <button

                            type="button"

                            class="add-btn"

                            onclick="
                                addToCart(
                                    ${product.id}
                                )
                            "

                            ${
                                available <= 0
                                    ? "disabled"
                                    : ""
                            }

                        >
                            🛒 Add to Cart
                        </button>


                        <button

                            type="button"

                            class="wishlist-btn"

                            onclick="
                                toggleWishlist(
                                    ${product.id}
                                )
                            "

                        >
                            💔 Remove
                        </button>

                    </div>

                </div>

            `;

        }
    );

}


function openWishlist() {

    displayWishlist();


    const modal =
        document.getElementById(
            "wishlistModal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }

}


function closeWishlist() {

    const modal =
        document.getElementById(
            "wishlistModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// PRODUCT DETAILS
// ============================================================

function openProductDetails(
    id
) {

    id =
        Number(id);


    const product =
        products.find(
            item =>
                Number(item.id) ===
                id
        );


    if (!product) {

        alert(
            "Product not found!"
        );

        return;

    }


    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (!modal) {

        alert(
            "Product details modal not found!"
        );

        return;

    }


    const image =
        document.getElementById(
            "detailsImage"
        );


    const name =
        document.getElementById(
            "detailsName"
        );


    const price =
        document.getElementById(
            "detailsPrice"
        );


    const description =
        document.getElementById(
            "detailsDescription"
        );


    const quantity =
        document.getElementById(
            "detailsQuantity"
        );


    if (image) {

        image.src =
            product.image;

        image.alt =
            product.name;

        image.onerror =
            function () {

                this.onerror =
                    null;

                this.src =
                    createImageFallback(
                        product.name
                    );

            };

    }


    if (name) {

        name.innerText =
            product.name;

    }


    if (price) {

        price.innerText =
            "₹" +
            Number(
                product.price
            ).toLocaleString(
                "en-IN"
            );

    }


    if (description) {

        description.innerText =
            "High quality " +
            product.name +
            " suitable for everyday use. Enjoy great quality and value.";

    }


    if (quantity) {

        quantity.value =
            1;

        quantity.min =
            1;

        quantity.max =
            Math.max(
                1,
                getAvailableStock(
                    product.id
                )
            );

    }


    modal.dataset.productId =
        String(product.id);


    const stockElement =
        document.getElementById(
            "detailsStock"
        );


    if (stockElement) {

        stockElement.innerHTML =
            getStockHTML(
                product
            );

    }


    selectedRating =
        0;


    selectRating(0);


    const review =
        document.getElementById(
            "productReview"
        );


    if (review) {

        review.value =
            "";

    }


    displayReviews(
        product.id
    );


    modal.style.display =
        "flex";

}


function closeProductDetails() {

    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// DETAILS QUANTITY
// ============================================================

function increaseDetailsQuantity() {

    const input =
        document.getElementById(
            "detailsQuantity"
        );


    if (!input) {
        return;
    }


    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    const id =
        modal
            ? Number(
                modal.dataset.productId
            )
            : 0;


    const available =
        getAvailableStock(id);


    const current =
        Number(input.value) || 1;


    if (
        current >=
        available
    ) {

        alert(
            `Only ${available} item(s) available.`
        );

        return;

    }


    input.value =
        current + 1;

}


function decreaseDetailsQuantity() {

    const input =
        document.getElementById(
            "detailsQuantity"
        );


    if (!input) {
        return;
    }


    const current =
        Number(input.value) || 1;


    if (current > 1) {

        input.value =
            current - 1;

    }

}


// ============================================================
// ADD DETAILS TO CART
// ============================================================

function addDetailsToCart() {

    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (!modal) {
        return;
    }


    const id =
        Number(
            modal.dataset.productId
        );


    const product =
        products.find(
            item =>
                Number(item.id) ===
                id
        );


    if (!product) {
        return;
    }


    const quantity =
        Math.max(
            1,
            Math.floor(
                Number(
                    document.getElementById(
                        "detailsQuantity"
                    )?.value || 1
                )
            )
        );


    const available =
        getAvailableStock(id);


    if (
        quantity >
        available
    ) {

        alert(
            `Only ${available} item(s) available.`
        );

        return;

    }


    const existing =
        cart.find(
            item =>
                Number(item.id) ===
                id
        );


    const existingQuantity =
        existing
            ? Number(existing.quantity)
            : 0;


    if (
        existingQuantity +
        quantity >
        available
    ) {

        alert(
            `You can add only ${
                Math.max(
                    0,
                    available -
                    existingQuantity
                )
            } more item(s).`
        );

        return;

    }


    if (existing) {

        existing.quantity +=
            quantity;

    } else {

        cart.push({

            ...product,

            quantity:
                quantity

        });

    }


    saveStorage(
        "myCart",
        cart
    );


    updateCart();


    displayProducts(
        getFilteredProducts()
    );


    alert(
        product.name +
        " added to cart! 🛒"
    );


    closeProductDetails();

}


// ============================================================
// BUY NOW FROM DETAILS
// ============================================================

function buyNow() {

    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (!modal) {
        return;
    }


    if (!currentUser) {

        closeProductDetails();

        openAuth();


        setAuthMessage(
            "🔐 Please login before buying this product.",
            "error"
        );

        return;

    }


    const id =
        Number(
            modal.dataset.productId
        );


    const product =
        products.find(
            item =>
                Number(item.id) ===
                id
        );


    if (!product) {
        return;
    }


    const quantity =
        Math.max(
            1,
            Math.floor(
                Number(
                    document.getElementById(
                        "detailsQuantity"
                    )?.value || 1
                )
            )
        );


    const available =
        getAvailableStock(id);


    if (
        quantity >
        available
    ) {

        alert(
            `Only ${available} item(s) available.`
        );

        return;

    }


    cart = [

        {
            ...product,

            quantity:
                quantity

        }

    ];


    appliedCoupon =
        "";


    discountAmount =
        0;


    saveStorage(
        "myCart",
        cart
    );


    updateCart();


    syncUserToCheckout();


    closeProductDetails();


    const checkoutModal =
        document.getElementById(
            "checkoutModal"
        );


    if (checkoutModal) {

        checkoutModal.style.display =
            "flex";

    }

}


// ============================================================
// REVIEWS
// ============================================================

function selectRating(
    rating
) {

    selectedRating =
        Number(rating);


    const stars =
        document.querySelectorAll(
            "#starRating button"
        );


    stars.forEach(
        (star, index) => {

            if (
                index <
                selectedRating
            ) {

                star.classList.add(
                    "selected"
                );

            } else {

                star.classList.remove(
                    "selected"
                );

            }

        }
    );

}


function setRating(
    rating
) {

    selectRating(
        rating
    );

}


function submitReview() {

    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    const input =
        document.getElementById(
            "productReview"
        );


    if (
        !modal ||
        !input
    ) {
        return;
    }


    if (!currentUser) {

        openAuth();


        setAuthMessage(
            "🔐 Please login to submit a review.",
            "error"
        );

        return;

    }


    const productId =
        Number(
            modal.dataset.productId
        );


    if (!selectedRating) {

        alert(
            "Please select a rating ⭐"
        );

        return;

    }


    const text =
        input.value.trim();


    if (!text) {

        alert(
            "Please write a review."
        );

        return;

    }


    reviews.push({

        id:
            Date.now(),

        productId:
            productId,

        userEmail:
            currentUser.email,

        userName:
            currentUser.name,

        rating:
            selectedRating,

        text:
            text,

        date:
            new Date().toLocaleString(
                "en-IN"
            )

    });


    saveStorage(
        "myReviews",
        reviews
    );


    input.value =
        "";


    selectedRating =
        0;


    selectRating(0);


    displayReviews(
        productId
    );


    displayProducts(
        getFilteredProducts()
    );


    alert(
        "✅ Review submitted successfully!"
    );

}


function displayReviews(
    productId
) {

    const container =
        document.getElementById(
            "reviewsList"
        );


    if (!container) {
        return;
    }


    const list =
        reviews.filter(
            review =>
                Number(review.productId) ===
                Number(productId)
        );


    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (list.length === 0) {

        const rating =
            product
                ? Number(product.rating)
                : 0;


        container.innerHTML = `

            <h3>
                💬 Customer Reviews
            </h3>

            <div class="review-summary">

                ⭐ ${rating.toFixed(1)} / 5

                <span>
                    Initial Rating
                </span>

            </div>

            <p>
                No customer reviews yet.
                Be the first to review!
            </p>

        `;

        return;

    }


    const average =
        getProductAverageRating(
            productId
        );


    container.innerHTML = `

        <h3>
            💬 Customer Reviews
        </h3>

        <div class="review-summary">

            ⭐ ${average.toFixed(1)} / 5

            <span>
                (${list.length} review${list.length > 1 ? "s" : ""})
            </span>

        </div>

    `;


    list
        .slice()
        .reverse()
        .forEach(
            review => {

                const rating =
                    Number(
                        review.rating
                    );


                const stars =
                    "★".repeat(
                        rating
                    ) +
                    "☆".repeat(
                        5 - rating
                    );


                container.innerHTML += `

                    <div class="review-card">

                        <div class="review-stars">

                            ${stars}

                        </div>


                        <p>
                            ${review.text}
                        </p>


                        <strong>

                            👤
                            ${review.userName || "Customer"}

                        </strong>


                        <br>


                        <small>
                            ${review.date}
                        </small>

                    </div>

                `;

            }
        );

}


// ============================================================
// INVOICE
// ============================================================

function openInvoice(
    orderId
) {

    const order =
        orders.find(
            item =>
                item.id ===
                orderId
        );


    if (!order) {

        alert(
            "Order not found!"
        );

        return;

    }


    const itemsHTML =
        (order.items || [])
            .map(
                item => {

                    const total =
                        Number(item.price) *
                        Number(item.quantity);


                    return `

                        <tr>

                            <td>
                                ${item.name}
                            </td>

                            <td>
                                ${item.quantity}
                            </td>

                            <td>
                                ₹${Number(
                                    item.price
                                ).toLocaleString(
                                    "en-IN"
                                )}
                            </td>

                            <td>
                                ₹${total.toLocaleString(
                                    "en-IN"
                                )}
                            </td>

                        </tr>

                    `;

                }
            )
            .join("");


    const payment =
        order.payment === "cod"
            ? "Cash on Delivery"
            : "UPI";


    const invoiceWindow =
        window.open(
            "",
            "_blank",
            "width=850,height=750"
        );


    if (!invoiceWindow) {

        alert(
            "Please allow pop-ups to view the invoice."
        );

        return;

    }


    invoiceWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <meta charset="UTF-8">

            <title>
                Invoice - ${order.id}
            </title>

            <style>

                * {
                    box-sizing:border-box;
                }

                body {

                    margin:0;

                    padding:30px;

                    font-family:Arial,sans-serif;

                    background:#f5f5f5;

                }

                .invoice {

                    max-width:800px;

                    margin:auto;

                    background:white;

                    padding:35px;

                    border-radius:8px;

                }

                .header {

                    display:flex;

                    justify-content:space-between;

                    border-bottom:
                        2px solid #2874f0;

                    padding-bottom:15px;

                    margin-bottom:20px;

                }

                .store-name {

                    color:#2874f0;

                    font-size:28px;

                    font-weight:bold;

                }

                .invoice-title {

                    font-size:24px;

                    font-weight:bold;

                }

                table {

                    width:100%;

                    border-collapse:collapse;

                    margin-top:20px;

                }

                th,
                td {

                    border:1px solid #ddd;

                    padding:10px;

                }

                th {

                    background:#f1f3f6;

                }

                .summary {

                    width:300px;

                    margin-left:auto;

                    margin-top:20px;

                }

                .row {

                    display:flex;

                    justify-content:space-between;

                    padding:7px;

                }

                .total {

                    border-top:2px solid #222;

                    font-size:20px;

                    font-weight:bold;

                    padding-top:12px;

                }

                .print {

                    display:block;

                    margin:25px auto 0;

                    padding:12px 25px;

                    border:none;

                    background:#2874f0;

                    color:white;

                    border-radius:5px;

                    cursor:pointer;

                }

                @media print {

                    body {

                        background:white;

                        padding:0;

                    }

                    .invoice {

                        box-shadow:none;

                    }

                    .print {

                        display:none;

                    }

                }

            </style>

        </head>

        <body>

            <div class="invoice">

                <div class="header">

                    <div>

                        <div class="store-name">

                            🛍️ My Store

                        </div>

                        <p>
                            Thank you for shopping with us!
                        </p>

                    </div>

                    <div>

                        <div class="invoice-title">
                            INVOICE
                        </div>

                        <div>
                            Order:
                            <strong>
                                #${order.id}
                            </strong>
                        </div>

                    </div>

                </div>


                <p>
                    <strong>Customer:</strong>
                    ${order.customer || "Customer"}
                </p>


                <p>
                    <strong>Phone:</strong>
                    ${order.phone || "Not available"}
                </p>


                <p>
                    <strong>Email:</strong>
                    ${order.email || "Not available"}
                </p>


                <p>
                    <strong>Address:</strong>
                    ${order.address || "Not available"}
                </p>


                <p>
                    <strong>Payment:</strong>
                    ${payment}
                </p>


                <p>
                    <strong>Status:</strong>
                    ${order.status || "Order Placed"}
                </p>


                <table>

                    <thead>

                        <tr>

                            <th>
                                Product
                            </th>

                            <th>
                                Qty
                            </th>

                            <th>
                                Price
                            </th>

                            <th>
                                Total
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        ${itemsHTML}

                    </tbody>

                </table>


                <div class="summary">

                    <div class="row">

                        <span>
                            Subtotal
                        </span>

                        <strong>
                            ₹${Number(
                                order.subtotal || 0
                            ).toLocaleString(
                                "en-IN"
                            )}
                        </strong>

                    </div>


                    <div class="row">

                        <span>
                            Discount
                        </span>

                        <strong
                            style="color:green;"
                        >
                            -₹${Number(
                                order.discount || 0
                            ).toLocaleString(
                                "en-IN"
                            )}
                        </strong>

                    </div>


                    <div class="row">

                        <span>
                            Delivery
                        </span>

                        <strong>
                            ₹${Number(
                                order.delivery || 0
                            ).toLocaleString(
                                "en-IN"
                            )}
                        </strong>

                    </div>


                    <div class="row total">

                        <span>
                            Grand Total
                        </span>

                        <strong>
                            ₹${Number(
                                order.total || 0
                            ).toLocaleString(
                                "en-IN"
                            )}
                        </strong>

                    </div>

                </div>


                <button
                    type="button"
                    class="print"
                    onclick="window.print()"
                >
                    🖨️ Print Invoice
                </button>

            </div>

        </body>

        </html>

    `);


    invoiceWindow.document.close();

}


// ============================================================
// CLOSE MODAL WHEN CLICK OUTSIDE
// ============================================================

window.addEventListener(
    "click",
    function (event) {

        const modalIds = [

            "cartModal",

            "checkoutModal",

            "ordersModal",

            "wishlistModal",

            "authModal",

            "productDetailsModal",

            "successModal",

            "trackingModal"

        ];


        modalIds.forEach(
            id => {

                const modal =
                    document.getElementById(
                        id
                    );


                if (
                    modal &&
                    event.target ===
                    modal
                ) {

                    modal.style.display =
                        "none";

                }

            }
        );

    }
);


// ============================================================
// GLOBAL FUNCTIONS
// ============================================================

window.openAuth =
    openAuth;

window.closeAuth =
    closeAuth;

window.showLogin =
    showLogin;

window.showSignup =
    showSignup;

window.loginUser =
    loginUser;

window.signupUser =
    signupUser;

window.logoutUser =
    logoutUser;

window.openCart =
    openCart;

window.closeCart =
    closeCart;

window.checkout =
    checkout;

window.closeCheckout =
    closeCheckout;

window.placeOrder =
    placeOrder;

window.closeSuccess =
    closeSuccess;

window.openOrders =
    openOrders;

window.closeOrders =
    closeOrders;

window.cancelOrder =
    cancelOrder;

window.openTracking =
    openTracking;

window.closeTracking =
    closeTracking;

window.openInvoice =
    openInvoice;

window.openWishlist =
    openWishlist;

window.closeWishlist =
    closeWishlist;

window.toggleWishlist =
    toggleWishlist;

window.addToCart =
    addToCart;

window.increaseQuantity =
    increaseQuantity;

window.decreaseQuantity =
    decreaseQuantity;

window.removeFromCart =
    removeFromCart;

window.filterProducts =
    filterProducts;

window.sortProducts =
    sortProducts;

window.searchProducts =
    searchProducts;

window.openProductDetails =
    openProductDetails;

window.closeProductDetails =
    closeProductDetails;

window.closeDetails =
    closeProductDetails;

window.increaseDetailsQuantity =
    increaseDetailsQuantity;

window.decreaseDetailsQuantity =
    decreaseDetailsQuantity;

window.addDetailsToCart =
    addDetailsToCart;

window.buyNow =
    buyNow;

window.quickBuyNow =
    quickBuyNow;

window.applyCoupon =
    applyCoupon;

window.clearCoupon =
    clearCoupon;

window.selectRating =
    selectRating;

window.setRating =
    setRating;

window.submitReview =
    submitReview;

window.displayReviews =
    displayReviews;


// ============================================================
// START WEBSITE
// ============================================================

function startWebsite() {

    // IMPORTANT:
    // FORCE LOCAL IMAGE PATHS

    setLocalImagePaths();


    // STOCK

    initializeStock();


    // SEARCH

    setupSearch();


    // LOGIN UI

    updateAuthUI();


    // CHECKOUT USER DATA

    syncUserToCheckout();


    // PRODUCTS

    displayProducts(
        getFilteredProducts()
    );


    // CART

    updateCart();


    // ORDERS

    displayOrders();


    // WISHLIST

    displayWishlist();


    // SORT

    const sortSelect =
        document.getElementById(
            "sortProducts"
        );


    if (sortSelect) {

        sortSelect.value =
            currentSort;

    }

}


// ============================================================
// START
// ============================================================

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        startWebsite
    );

} else {

    startWebsite();

}
