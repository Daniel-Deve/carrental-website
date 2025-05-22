
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });

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
