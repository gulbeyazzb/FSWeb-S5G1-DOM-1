const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN

  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const Items = document.querySelectorAll("nav a");
Items.forEach((item, i) => {
  item.setAttribute("id", `nav-item-${i + 1}`);
  item.setAttribute("class", "italic");
});

const item1 = document.getElementById("nav-item-1");
item1.textContent = "Servisler";

const item2 = document.getElementById("nav-item-2");
item2.textContent = "Ürünler";

const item3 = document.getElementById("nav-item-3");
item3.textContent = "Vizyon";

const item4 = document.getElementById("nav-item-4");
item4.textContent = "Özellikler";

const item5 = document.getElementById("nav-item-5");
item5.textContent = "Hakkımızda";

const item6 = document.getElementById("nav-item-6");
item6.textContent = "İletişim";

document.querySelector(".cta h1").textContent = "Bu DOM Mükemmel";

const button = document.querySelector(".cta-text button");
button.textContent = "Başlayın";

document
  .querySelector("#logo-img")
  .setAttribute("src", "http://localhost:9000/img/logo.png");

document
  .querySelector("#cta-img")
  .setAttribute("src", "http://localhost:9000/img/cta.png");

const content = document.querySelectorAll(".main-content .text-content");

content[0].querySelector("h4").textContent = "Özellikler";
content[0].querySelector("p").textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
content[1].querySelector("h4").textContent = "Hakkında";
content[1].querySelector("p").textContent =
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document
  .querySelector("#middle-img")
  .setAttribute("src", "http://localhost:9000/img/accent.png");

const bottom_content = document.querySelectorAll(
  ".bottom-content .text-content"
);

bottom_content[0].querySelector("h4").textContent = "Servisler";
bottom_content[0].querySelector("p").textContent =
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottom_content[1].querySelector("h4").textContent = "Ürünler";
bottom_content[1].querySelector("p").textContent =
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottom_content[2].querySelector("h4").textContent = "Vizyon";
bottom_content[2].querySelector("p").textContent =
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelector(".contact h4").textContent = "İletişim";

document.querySelectorAll(".contact p")[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";

document.querySelectorAll(".contact p")[1].textContent = "+90 (123) 456-7899";

document.querySelectorAll(".contact p")[2].textContent =
  "satis@birsirketsitesi.com.tr";

document.querySelector("footer a").setAttribute("class", "bold");

document.querySelector("footer a").textContent =
  "Copyright Bir Şirket Sitesi 2022";
