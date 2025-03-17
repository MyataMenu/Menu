document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelector(".categories");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    // Прокрутка колесиком мышки
    categories.addEventListener("wheel", (e) => {
        e.preventDefault();
        categories.scrollLeft += e.deltaY * 2; // Ускоренный скролл
    });

    // Прокрутка кнопками
    leftBtn.addEventListener("click", () => {
        categories.scrollLeft -= 200; // Прокрутка влево
    });

    rightBtn.addEventListener("click", () => {
        categories.scrollLeft += 200; // Прокрутка вправо
    });
});
