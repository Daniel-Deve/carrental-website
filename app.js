

   function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }



//scroll button
    document.addEventListener("DOMContentLoaded", function () {
        const scrollBtn = document.getElementById("scrollTop");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollBtn.style.display = "block"; // Show button when scrolling down
            } else {
                scrollBtn.style.display = "none"; // Hide button at top
            }
        });
    });
