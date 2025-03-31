document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = "&uarr;";
  backToTopBtn.className = "back-to-top";
  backToTopBtn.title = "Kembali ke atas";
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = document.querySelector("nav").offsetHeight;

        const targetPosition =
          targetSection.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition - navbarHeight - 20,
          behavior: "smooth",
        });

        history.pushState(null, null, targetId);
      }
    });
  });
});
