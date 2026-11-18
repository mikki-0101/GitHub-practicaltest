
document.addEventListener("DOMContentLoaded", function () {

    // Welcome Message
    console.log("Welcome to Mohit's Portfolio!");

    // Automatic Current Year
    const footer = document.querySelector("footer");

    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `
            <p>Made By Mohit | © ${year} All Rights Reserved.</p>
        `;
    }

    // Smooth Scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
