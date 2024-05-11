document.addEventListener("DOMContentLoaded", function () {
  const headerLinks = document.querySelectorAll("nav-link");
  headerLinks.forEach((link) => {
    link.addEventListener("click", function(event) { //wtf javascript
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});