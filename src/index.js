function showA() {
  var aside = document.querySelector(".aside");
  var section = document.querySelector(".content-main");
  section.style.opacity = "0.1";
  aside.style.left = "0px";
}

function cancelA() {
  var aside = document.querySelector(".aside");
  var section = document.querySelector(".content-main");
  section.style.opacity = "1";

  aside.style.left = "-440px";
}
function showSidebar() {
  var sidebar = document.querySelector(".sidebar-call");
  var section = document.querySelector(".content-main");
  var aside = document.querySelector(".aside");

  var screenWidth = window.innerWidth;

  if (screenWidth >= 1440) {
    sidebar.style.left = "1000px";
  } else if (screenWidth <= 320) {
    sidebar.style.left = "0px";
  }

  section.style.opacity = "0.1";
  aside.style.opacity = "0.1";
}

function cancelSide() {
  var sidebar = document.querySelector(".sidebar-call");
  var section = document.querySelector(".content-main");
  var aside = document.querySelector(".aside");
  aside.style.opacity = "1";
  section.style.opacity = "1";
  sidebar.style.left = "-550px";
}

function showFeedback() {
  var sidebar = document.querySelector(".sidebar-main");
  var section = document.querySelector(".content-main");
  var aside = document.querySelector(".aside");

  var screenWidth = window.innerWidth;

  if (screenWidth >= 1440) {
    sidebar.style.left = "1000px";
  } else if (screenWidth <= 320) {
    sidebar.style.left = "0px";
  }

  section.style.opacity = "0.1";
  aside.style.opacity = "0.1";
}

function cancelFeedback() {
  var sidebar = document.querySelector(".sidebar-main");
  var section = document.querySelector(".content-main");
  var aside = document.querySelector(".aside");
  aside.style.opacity = "1";
  section.style.opacity = "1";
  sidebar.style.left = "-550px";
}



function readMore() {
  var dots = document.querySelector(".dots");
  var more = document.querySelector(".more");
  var btn = document.querySelector(".btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerHTML = "Показать все";
    buttonArrowElse.classList.remove("rotate-180");
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    btn.innerHTML = "Скрыть";
    buttonArrowElse.classList.add("rotate-180");
  }
}

function readInfo() {
  let novis = document.querySelector(".novis");
  let showInfo = document.querySelector(".showInfo");
  let button = document.querySelector(".button");

  if (novis.style.display === "none") {
    showInfo.style.display = "none";
    novis.style.display = "inline";

    button.innerHTML = "Показать все";
    buttonArrowRep.classList.remove("rotate-180");
  } else {
    novis.style.display = "none";
    showInfo.style.display = "inline";
    button.innerHTML = "Скрыть";
    buttonArrowRep.classList.add("rotate-180");
  }
}

var swiper2 = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});

var swiper1 = new Swiper(".swiper__container-brand", {
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
});

var swiper3 = new Swiper(".swiper-container-price", {
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true,
  },
});
