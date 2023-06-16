function readMore() {
  var dots = document.querySelector(".dots");
  var more = document.querySelector(".more");
  var btn = document.querySelector(".btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerHTML = "Показать все";
    buttonArrow.classList.remove("rotate-180");
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    btn.innerHTML = "Скрыть";
    buttonArrow.classList.add("rotate-180");
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
