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

// Layanan Instagram
const containerFollsInstagramIndonesia = document.querySelector(
    ".instagram-folls-indonesia"
);

const arrTitleFollsInstagramIndonesia = [
    "100 Followers Indonesia",
    "200 Followers Indonesia",
    "500 Followers Indonesia",
    "1.000 Followers Indonesia",
    "2.000 Followers Indonesia",
    "3.000 Followers Indonesia",
    "4.000 Followers Indonesia",
    "5.000 Followers Indonesia",
];

const arrPriceFollsInstagramIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

const containerLikesInstagramIndonesia = document.querySelector(
    ".instagram-likes-indonesia"
);

const arrTitleLikesInstagramIndonesia = [
    "100 Likes Indonesia",
    "200 Likes Indonesia",
    "300 Likes Indonesia",
    "400 Likes Indonesia",
    "500 Likes Indonesia",
    "600 Likes Indonesia",
    "700 Likes Indonesia",
    "800 Likes Indonesia",
];

const arrPriceLikesInstagramIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerInstagram = document.createElement("div");
    containerInstagram.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuInstagramIndonesia = document.createElement("div");

    const ImageInstagramIndonesia = document.createElement("img");
    ImageInstagramIndonesia.src = "./../public/images/instagram.png";
    ImageInstagramIndonesia.classList.add("w-20");

    const childDuaInstagramIndonesia = document.createElement("div");
    childDuaInstagramIndonesia.classList.add("w-full");

    const titleInstagramFollsIndonesia = document.createElement("h4");
    titleInstagramFollsIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleInstagramFollsIndonesia.innerText = arrTitleFollsInstagramIndonesia[i];

    const priceInstagramIndonesia = document.createElement("p");
    priceInstagramIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceInstagramIndonesia.innerText = arrPriceFollsInstagramIndonesia[i];

    containerFollsInstagramIndonesia.appendChild(containerInstagram);
    containerInstagram.appendChild(childSatuInstagramIndonesia);
    childSatuInstagramIndonesia.appendChild(ImageInstagramIndonesia);
    containerInstagram.appendChild(childDuaInstagramIndonesia);
    childDuaInstagramIndonesia.appendChild(titleInstagramFollsIndonesia);
    childDuaInstagramIndonesia.appendChild(priceInstagramIndonesia);
}

for (let i = 0; i < 8; i++) {
    const containerInstagram = document.createElement("div");
    containerInstagram.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuInstagramIndonesia = document.createElement("div");

    const ImageInstagramIndonesia = document.createElement("img");
    ImageInstagramIndonesia.src = "./../public/images/instagram.png";
    ImageInstagramIndonesia.classList.add("w-20");

    const childDuaInstagramIndonesia = document.createElement("div");
    childDuaInstagramIndonesia.classList.add("w-full");

    const titleInstagramIndonesia = document.createElement("h4");
    titleInstagramIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleInstagramIndonesia.innerText = arrTitleLikesInstagramIndonesia[i];

    const priceInstagramIndonesia = document.createElement("p");
    priceInstagramIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceInstagramIndonesia.innerText = arrPriceLikesInstagramIndonesia[i];

    containerLikesInstagramIndonesia.appendChild(containerInstagram);
    containerInstagram.appendChild(childSatuInstagramIndonesia);
    childSatuInstagramIndonesia.appendChild(ImageInstagramIndonesia);
    containerInstagram.appendChild(childDuaInstagramIndonesia);
    childDuaInstagramIndonesia.appendChild(titleInstagramIndonesia);
    childDuaInstagramIndonesia.appendChild(priceInstagramIndonesia);
}

const containerViewsInstagramIndonesia = document.querySelector(
    ".instagram-views-indonesia"
);

const arrTitleViewsInstagramIndonesia = [
    "100 Views Indonesia",
    "200 Views Indonesia",
    "300 Views Indonesia",
    "400 Views Indonesia",
    "500 Views Indonesia",
    "600 Views Indonesia",
    "700 Views Indonesia",
    "800 Views Indonesia",
];

const arrPriceViewsInstagramIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerInstagram = document.createElement("div");
    containerInstagram.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuInstagramIndonesia = document.createElement("div");

    const ImageInstagramIndonesia = document.createElement("img");
    ImageInstagramIndonesia.src = "./../public/images/instagram.png";
    ImageInstagramIndonesia.classList.add("w-20");

    const childDuaInstagramIndonesia = document.createElement("div");
    childDuaInstagramIndonesia.classList.add("w-full");

    const titleInstagramIndonesia = document.createElement("h4");
    titleInstagramIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleInstagramIndonesia.innerText = arrTitleViewsInstagramIndonesia[i];

    const priceInstagramIndonesia = document.createElement("p");
    priceInstagramIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceInstagramIndonesia.innerText = arrPriceViewsInstagramIndonesia[i];

    containerViewsInstagramIndonesia.appendChild(containerInstagram);
    containerInstagram.appendChild(childSatuInstagramIndonesia);
    childSatuInstagramIndonesia.appendChild(ImageInstagramIndonesia);
    containerInstagram.appendChild(childDuaInstagramIndonesia);
    childDuaInstagramIndonesia.appendChild(titleInstagramIndonesia);
    childDuaInstagramIndonesia.appendChild(priceInstagramIndonesia);
}

// Layanan Tiktok
const containerFollsTiktokIndonesia = document.querySelector(
    ".tiktok-folls-indonesia"
);

const arrTitleFollsTiktokIndonesia = [
    "100 Followers Indonesia",
    "200 Followers Indonesia",
    "500 Followers Indonesia",
    "1.000 Followers Indonesia",
    "2.000 Followers Indonesia",
    "3.000 Followers Indonesia",
    "4.000 Followers Indonesia",
    "5.000 Followers Indonesia",
];

const arrPriceFollsTiktokIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerTiktok = document.createElement("div");
    containerTiktok.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuTiktokIndonesia = document.createElement("div");

    const ImageTiktokIndonesia = document.createElement("img");
    ImageTiktokIndonesia.src = "./../public/images/Tiktok.png";
    ImageTiktokIndonesia.classList.add("w-20");

    const childDuaTiktokIndonesia = document.createElement("div");
    childDuaTiktokIndonesia.classList.add("w-full");

    const titleTiktokIndonesia = document.createElement("h4");
    titleTiktokIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleTiktokIndonesia.innerText = arrTitleFollsTiktokIndonesia[i];

    const priceTiktokIndonesia = document.createElement("p");
    priceTiktokIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceTiktokIndonesia.innerText = arrPriceFollsTiktokIndonesia[i];

    containerFollsTiktokIndonesia.appendChild(containerTiktok);
    containerTiktok.appendChild(childSatuTiktokIndonesia);
    childSatuTiktokIndonesia.appendChild(ImageTiktokIndonesia);
    containerTiktok.appendChild(childDuaTiktokIndonesia);
    childDuaTiktokIndonesia.appendChild(titleTiktokIndonesia);
    childDuaTiktokIndonesia.appendChild(priceTiktokIndonesia);
}

const containerLikesTiktokIndonesia = document.querySelector(
    ".tiktok-likes-indonesia"
);

const arrTitleLikesTiktokIndonesia = [
    "100 Likes Indonesia",
    "200 Likes Indonesia",
    "300 Likes Indonesia",
    "400 Likes Indonesia",
    "500 Likes Indonesia",
    "600 Likes Indonesia",
    "700 Likes Indonesia",
    "800 Likes Indonesia",
];

const arrPriceLikesTiktokIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerTiktok = document.createElement("div");
    containerTiktok.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuTiktokIndonesia = document.createElement("div");

    const ImageTiktokIndonesia = document.createElement("img");
    ImageTiktokIndonesia.src = "./../public/images/Tiktok.png";
    ImageTiktokIndonesia.classList.add("w-20");

    const childDuaTiktokIndonesia = document.createElement("div");
    childDuaTiktokIndonesia.classList.add("w-full");

    const titleTiktokIndonesia = document.createElement("h4");
    titleTiktokIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleTiktokIndonesia.innerText = arrTitleLikesTiktokIndonesia[i];

    const priceTiktokIndonesia = document.createElement("p");
    priceTiktokIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceTiktokIndonesia.innerText = arrPriceLikesTiktokIndonesia[i];

    containerLikesTiktokIndonesia.appendChild(containerTiktok);
    containerTiktok.appendChild(childSatuTiktokIndonesia);
    childSatuTiktokIndonesia.appendChild(ImageTiktokIndonesia);
    containerTiktok.appendChild(childDuaTiktokIndonesia);
    childDuaTiktokIndonesia.appendChild(titleTiktokIndonesia);
    childDuaTiktokIndonesia.appendChild(priceTiktokIndonesia);
}

const containerViewsTiktokIndonesia = document.querySelector(
    ".tiktok-views-indonesia"
);

const arrTitleViewsTiktokIndonesia = [
    "100 Views Indonesia",
    "200 Views Indonesia",
    "300 Views Indonesia",
    "400 Views Indonesia",
    "500 Views Indonesia",
    "600 Views Indonesia",
    "700 Views Indonesia",
    "800 Views Indonesia",
];

const arrPriceViewsTiktokIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerTiktok = document.createElement("div");
    containerTiktok.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuTiktokIndonesia = document.createElement("div");

    const ImageTiktokIndonesia = document.createElement("img");
    ImageTiktokIndonesia.src = "./../public/images/Tiktok.png";
    ImageTiktokIndonesia.classList.add("w-20");

    const childDuaTiktokIndonesia = document.createElement("div");
    childDuaTiktokIndonesia.classList.add("w-full");

    const titleTiktokIndonesia = document.createElement("h4");
    titleTiktokIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleTiktokIndonesia.innerText = arrTitleViewsTiktokIndonesia[i];

    const priceTiktokIndonesia = document.createElement("p");
    priceTiktokIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceTiktokIndonesia.innerText = arrPriceViewsTiktokIndonesia[i];

    containerViewsTiktokIndonesia.appendChild(containerTiktok);
    containerTiktok.appendChild(childSatuTiktokIndonesia);
    childSatuTiktokIndonesia.appendChild(ImageTiktokIndonesia);
    containerTiktok.appendChild(childDuaTiktokIndonesia);
    childDuaTiktokIndonesia.appendChild(titleTiktokIndonesia);
    childDuaTiktokIndonesia.appendChild(priceTiktokIndonesia);
}

// Layanan Youtube
const containerSubscribersYoutubeIndonesia = document.querySelector(
    ".youtube-subscribers-indonesia"
);

const arrTitleSubscribersYoutubeIndonesia = [
    "100 Subscribers Indonesia",
    "200 Subscribers Indonesia",
    "500 Subscribers Indonesia",
    "1.000 Subscribers Indonesia",
    "2.000 Subscribers Indonesia",
    "3.000 Subscribers Indonesia",
    "4.000 Subscribers Indonesia",
    "5.000 Subscribers Indonesia",
];

const arrPriceSubscribersYoutubeIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerYoutube = document.createElement("div");
    containerYoutube.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuYoutubeIndonesia = document.createElement("div");

    const ImageYoutubeIndonesia = document.createElement("img");
    ImageYoutubeIndonesia.src = "./../public/images/Youtube.png";
    ImageYoutubeIndonesia.classList.add("w-20");

    const childDuaYoutubeIndonesia = document.createElement("div");
    childDuaYoutubeIndonesia.classList.add("w-full");

    const titleYoutubeIndonesia = document.createElement("h4");
    titleYoutubeIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleYoutubeIndonesia.innerText = arrTitleSubscribersYoutubeIndonesia[i];

    const priceYoutubeIndonesia = document.createElement("p");
    priceYoutubeIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceYoutubeIndonesia.innerText = arrPriceSubscribersYoutubeIndonesia[i];

    containerSubscribersYoutubeIndonesia.appendChild(containerYoutube);
    containerYoutube.appendChild(childSatuYoutubeIndonesia);
    childSatuYoutubeIndonesia.appendChild(ImageYoutubeIndonesia);
    containerYoutube.appendChild(childDuaYoutubeIndonesia);
    childDuaYoutubeIndonesia.appendChild(titleYoutubeIndonesia);
    childDuaYoutubeIndonesia.appendChild(priceYoutubeIndonesia);
}

const containerLikesYoutubeIndonesia = document.querySelector(
    ".youtube-likes-indonesia"
);

const arrTitleLikesYoutubeIndonesia = [
    "100 Likes Indonesia",
    "200 Likes Indonesia",
    "300 Likes Indonesia",
    "400 Likes Indonesia",
    "500 Likes Indonesia",
    "600 Likes Indonesia",
    "700 Likes Indonesia",
    "800 Likes Indonesia",
];

const arrPriceLikesYoutubeIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerYoutube = document.createElement("div");
    containerYoutube.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuYoutubeIndonesia = document.createElement("div");

    const ImageYoutubeIndonesia = document.createElement("img");
    ImageYoutubeIndonesia.src = "./../public/images/Youtube.png";
    ImageYoutubeIndonesia.classList.add("w-20");

    const childDuaYoutubeIndonesia = document.createElement("div");
    childDuaYoutubeIndonesia.classList.add("w-full");

    const titleYoutubeIndonesia = document.createElement("h4");
    titleYoutubeIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleYoutubeIndonesia.innerText = arrTitleLikesYoutubeIndonesia[i];

    const priceYoutubeIndonesia = document.createElement("p");
    priceYoutubeIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceYoutubeIndonesia.innerText = arrPriceLikesYoutubeIndonesia[i];

    containerLikesYoutubeIndonesia.appendChild(containerYoutube);
    containerYoutube.appendChild(childSatuYoutubeIndonesia);
    childSatuYoutubeIndonesia.appendChild(ImageYoutubeIndonesia);
    containerYoutube.appendChild(childDuaYoutubeIndonesia);
    childDuaYoutubeIndonesia.appendChild(titleYoutubeIndonesia);
    childDuaYoutubeIndonesia.appendChild(priceYoutubeIndonesia);
}

const containerViewsYoutubeIndonesia = document.querySelector(
    ".youtube-views-indonesia"
);

const arrTitleViewsYoutubeIndonesia = [
    "100 Views Indonesia",
    "200 Views Indonesia",
    "300 Views Indonesia",
    "400 Views Indonesia",
    "500 Views Indonesia",
    "600 Views Indonesia",
    "700 Views Indonesia",
    "800 Views Indonesia",
];

const arrPriceViewsYoutubeIndonesia = [
    "Rp8.500",
    "Rp17.000",
    "Rp25.500",
    "Rp34.000",
    "Rp42.500",
    "Rp51.000",
    "Rp59.500",
    "Rp68.000",
];

for (let i = 0; i < 8; i++) {
    const containerYoutube = document.createElement("div");
    containerYoutube.classList.add(
        "flex",
        "lg:hover:scale-105",
        "border",
        "border-blue-500",
        "shadow-md",
        "items-center",
        "gap-5",
        "min-w-[300px]",
        "sm:min-w-0",
        "transition-all",
        "ease-in",
        "duration-200",
        "p-1",
        "rounded"
    );

    const childSatuYoutubeIndonesia = document.createElement("div");

    const ImageYoutubeIndonesia = document.createElement("img");
    ImageYoutubeIndonesia.src = "./../public/images/Youtube.png";
    ImageYoutubeIndonesia.classList.add("w-20");

    const childDuaYoutubeIndonesia = document.createElement("div");
    childDuaYoutubeIndonesia.classList.add("w-full");

    const titleYoutubeIndonesia = document.createElement("h4");
    titleYoutubeIndonesia.classList.add(
        "text-sm",
        "text-center",
        "font-semibold"
    );
    titleYoutubeIndonesia.innerText = arrTitleViewsYoutubeIndonesia[i];

    const priceYoutubeIndonesia = document.createElement("p");
    priceYoutubeIndonesia.classList.add(
        "text-blue-500",
        "text-sm",
        "text-end",
        "mt-5"
    );
    priceYoutubeIndonesia.innerText = arrPriceViewsYoutubeIndonesia[i];

    containerViewsYoutubeIndonesia.appendChild(containerYoutube);
    containerYoutube.appendChild(childSatuYoutubeIndonesia);
    childSatuYoutubeIndonesia.appendChild(ImageYoutubeIndonesia);
    containerYoutube.appendChild(childDuaYoutubeIndonesia);
    childDuaYoutubeIndonesia.appendChild(titleYoutubeIndonesia);
    childDuaYoutubeIndonesia.appendChild(priceYoutubeIndonesia);
}
