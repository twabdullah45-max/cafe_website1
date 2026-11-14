// --- Global State ---
let cart = [];

// --- Menu Items Data ---
const menuItems = [
    { id: 1, name: "Artisan Espresso", price: 3.50, category: "coffee", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Classic Cappuccino", price: 4.50, category: "coffee", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Creamy Cafe Latte", price: 4.75, category: "coffee", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Caramel Macchiato", price: 5.25, category: "coffee", img: "https://images.unsplash.com/photo-1485808194679-56ad6502133f?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Mocha Frappuccino", price: 5.50, category: "coffee", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Americano Black Coffee", price: 3.75, category: "coffee", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Vanilla Sweet Cream Cold Brew", price: 5.00, category: "coffee", img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Turkish Strong Coffee", price: 4.00, category: "coffee", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Blueberry Scone", price: 3.50, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Classic Butter Croissant", price: 3.25, category: "pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "Chocolate Fudge Pastry", price: 4.50, category: "pastries", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "Red Velvet Slice", price: 4.80, category: "pastries", img: "https://images.unsplash.com/photo-1586788680340-10e60ef47bce?auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "Almond Danish Pastry", price: 3.90, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "New York Cheesecake Slice", price: 5.50, category: "pastries", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },
    { id: 15, name: "Cinnamon Roll with Glaze", price: 4.00, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80" },
    { id: 16, name: "Avocado Toast", price: 9.50, category: "lunch", img: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "Chicken Club Sandwich", price: 13.00, category: "lunch", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "Crispy French Fries", price: 4.50, category: "lunch", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80" },
    { id: 19, name: "Grilled Cheese Panini", price: 8.50, category: "lunch", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "Chicken Burger & Fries", price: 11.00, category: "lunch", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
    { id: 21, name: "Iced Caramel Macchiato", price: 5.25, category: "drinks", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80" },
    { id: 22, name: "Oreo Chocolate Shake", price: 5.75, category: "drinks", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 23, name: "Fresh Mint Lemonade", price: 4.00, category: "drinks", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
    { id: 24, name: "Strawberry Smoothie", price: 5.00, category: "drinks", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80" }
];

// --- Render Menu ---
function displayMenu(items) {
    const grid = document.getElementById("menu-grid");
    if (!grid) return;
    grid.innerHTML = "";
    items.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <div>
                    <img src="${item.img}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price.toFixed(2)}</p>
                </div>
                <button onclick="addToCart(${item.id})">ADD TO CART</button>
            </div>
        `;
    });
}

function filterMenu(category) {
    document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
    if (event && event.target) event.target.classList.add("active");

    if (category === "all") {
        displayMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        displayMenu(filtered);
    }
}

function searchMenu() {
    const searchInput = document.getElementById("search-input");
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase();
    const filtered = menuItems.filter(item => item.name.toLowerCase().includes(query));
    displayMenu(filtered);
}

// --- Cart Management ---
function addToCart(id) {
    const product = menuItems.find(item => item.id === id);
    if (product) {
        cart.push(product);
        updateCartUI();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) cartCount.innerText = cart.length;

    const cartItemsDiv = document.getElementById("cart-items");
    if (!cartItemsDiv) return;
    
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <div class="cart-item-row">
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
            </div>
        `;
    });

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    }

    const totalPriceEl = document.getElementById("total-price");
    if (totalPriceEl) totalPriceEl.innerText = total.toFixed(2);
}

function openCart() {
    updateCartUI();
    const modal = document.getElementById("cart-modal");
    if (modal) modal.style.display = "flex";
}

function closeCart() {
    const modal = document.getElementById("cart-modal");
    if (modal) modal.style.display = "none";
}

// --- Order Submission ---
async function placeOrder(e) {
    if (e) e.preventDefault();
    
    if (cart.length === 0) {
        alert("Please add at least one item to your cart!");
        return;
    }
    
    const nameInput = document.getElementById("cust-name");
    const addressInput = document.getElementById("cust-address");
    
    const name = nameInput ? nameInput.value : "";
    const address = addressInput ? addressInput.value : "";
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const orderData = { name, address, items: cart, total };

    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();
        if (response.ok) {
            alert(`Shukriya ${name}! Aapka order successfully place ho gaya hai. (Order ID: ${result.orderId})`);
            cart = [];
            updateCartUI();
            closeCart();
            const form = document.getElementById("order-form");
            if (form) form.reset();
        } else {
            alert("Error: " + (result.error || "Something went wrong"));
        }
    } catch (err) {
        console.error("Network error:", err);
        alert("Server se connection nahi ho saka.");
    }
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    displayMenu(menuItems);
    
    // Automatic Form Submit Listener attach karna taake button dabane par order save ho
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", placeOrder);
    }
});