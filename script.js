// Сначала создаём заглушки
document.querySelectorAll(".category").forEach(cat => {
    const id = cat.getAttribute("data-category");
    if (!document.getElementById(id)) {
        const div = document.createElement("div");
        div.className = "menu-category";
        div.id = id;
        div.style.display = "none";
        div.textContent = `Заглушка для категории "${id}"`;
        document.body.appendChild(div);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category"); // Все кнопки категорий
    const menuCategories = document.querySelectorAll(".menu-category"); // Все секции меню
    const categoriesContainer = document.querySelector(".categories"); // Контейнер с категориями

    // Скрываем все категории при загрузке
    menuCategories.forEach(menu => {
        menu.classList.remove("active");
        menu.style.display = "none";
    });

    categories.forEach(category => {
        category.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category"); // Получаем имя категории
            const activeMenu = document.getElementById(selectedCategory); // Находим соответствующий блок

            if (activeMenu) {
                // Скрываем все категории перед показом нужной
                menuCategories.forEach(menu => {
                    menu.classList.remove("active");
                    menu.style.display = "none";
                });

                // Показываем выбранную категорию
                activeMenu.style.display = "block";
                setTimeout(() => activeMenu.classList.add("active"), 10);
                activeMenu.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                console.error(`Элемент с id="${selectedCategory}" не найден.`);
            }
        });
    });

    // Горизонтальный скролл категорий при наведении
    categoriesContainer.addEventListener("wheel", function (event) {
        if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return; // Оставляем вертикальную прокрутку
        this.scrollBy({ left: event.deltaY * 0.5, behavior: "smooth" });
        event.preventDefault();
    });

    // Видео ускорение (если видео остался)
    const video = document.getElementById("header-video");
    if (video) {
        video.playbackRate = 3.5;
    }
});
