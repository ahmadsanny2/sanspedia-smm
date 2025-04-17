function toggleMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
}

document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", function () {
        document
            .querySelectorAll(".tab-btn")
            .forEach((btn) =>
                btn.classList.remove("bg-blue-500", "text-white")
            );
        this.classList.add("bg-blue-500", "text-white");

        document
            .querySelectorAll(".tab-content")
            .forEach((tab) => tab.classList.add("hidden"));
        document
            .querySelector("#" + this.dataset.tab)
            .classList.remove("hidden");
    });
});

