// 1. Mobile menu toggle
const panelAll = document.querySelector(".panel-all");
const panelOps = document.querySelector(".panel-ops");

panelAll.addEventListener("click", () => {
    panelOps.classList.toggle("show-panel");
});


// 2. Show alert when clicking "Click here to go to Amazon"
const amazonLink = document.querySelector(".hero-msg a");

amazonLink.addEventListener("click", () => {
    window.open("https://www.amazon.in", "_blank");
});

// 3. Back to top smooth scroll
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 4. Add example dynamic cart count (you can replace with actual logic)
const navCart = document.querySelector(".nav-cart");
let cartCount = 0;

navCart.addEventListener("click", () => {
    cartCount++;
    navCart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
});
