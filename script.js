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

});
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("header-video");
    if (video) {
        video.playbackRate = 3.5; // Ускоряем видео в 1.5 раза
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");

    // Добавляем эффект перед уходом со страницы
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");

            // Проверяем, чтобы ссылка не вела на якорь (#)
            if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
                event.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 400); // Время должно совпадать с CSS (0.4s)
            }
        });
    });
});
