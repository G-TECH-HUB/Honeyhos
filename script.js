const openNavBtn = document.getElementById("open-nav");
const closeNavBtn = document.getElementById("close-nav");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

openNavBtn.addEventListener("click", () => {
  nav.classList.add("open");
  header.classList.add("nav-open");
});

closeNavBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  header.classList.remove("nav-open");
});

// Close dropdowns when another one opens (optional)
const detailsElements = document.querySelectorAll("nav details");
detailsElements.forEach((currentDetails) => {
  currentDetails.addEventListener("toggle", function () {
    if (this.open) {
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== currentDetails && otherDetails.open) {
          otherDetails.removeAttribute("open");
        }
      });
    }
  });
});
