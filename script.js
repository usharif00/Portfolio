document.addEventListener("DOMContentLoaded", function () {
    const certificatesSection = document.querySelector(".certificates-container");

    function slideUpOnScroll() {
        const sectionPosition = certificatesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Trigger point

        if (sectionPosition < screenPosition) {
            certificatesSection.classList.add("slide-up");
            window.removeEventListener("scroll", slideUpOnScroll); // Remove event after animation triggers
        }
    }

    window.addEventListener("scroll", slideUpOnScroll);
});
