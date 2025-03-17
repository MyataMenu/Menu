document.addEventListener("DOMContentLoaded", () => {
    const menuItemsContainer = document.getElementById("menu-items");
    const searchInput = document.getElementById("search");
    const menuTitle = document.getElementById("menu-title");

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    fetch("data/menu.json")
        .then(response => response.json())
        .then(data => {
            if (category) {
                menuTitle.textContent = data.categories[category].name;
                loadMenu(data.categories[category].items);
            }
        });

    function loadMenu(items) {
        menuItemsContainer.innerHTML = "";
        items.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <strong>${item.price} ₽</strong>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".menu-item").forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();
            item.style.display = name.includes(query) ? "block" : "none";
        });
    });
});
