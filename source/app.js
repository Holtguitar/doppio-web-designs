const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const buttonAboutMe = ".button__about-me";
const headerLinks = ".header-links";
const nav = document.querySelector(".header-links");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const contactUs = document.querySelector(".click-contact");

// Smooth scrolling from links to sections
function smoothScroll(el) {
  document.querySelector(el).addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav-links")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
}

smoothScroll(buttonAboutMe);
smoothScroll(headerLinks);

function toggleButton() {
  navList.classList.toggle("show");
}

// hamburgerButton.addEventListener('click', toggleButton);

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

contactUs.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", function () {
  if (!modal.classList.contains("hidden")) {
    closeModal();
  }
});
