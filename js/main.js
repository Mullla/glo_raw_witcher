document.addEventListener("DOMContentLoaded", () => {
  const mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".arrow",
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
      },
    },
  });

  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".header");

  const overlay = document.querySelector(".overlay");
  const demo = document.querySelector(".demo-modal");
  const demoBtns = document.querySelectorAll(".demo-btn");
  const modalBtn = document.querySelector(".modal-btn");

  overlay.style.display = "none";
  demo.style.display = "none";

  for (let i = 0; i < demoBtns.length; i++) {
    demoBtns[i].addEventListener("click", () => {
      overlay.style.display = "block";
      demo.style.display = "flex";
    });
  }

  modalBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    demo.style.display = "none";
  });

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("menu-button-active");
    menu.classList.toggle("header-active");
  });
});
