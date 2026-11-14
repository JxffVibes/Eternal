
// =================================
// PROJECT ETERNAL.exe
// MAIN INTERACTIONS
// =================================

const enterButton = document.getElementById("enterButton");

const entrance = document.querySelector(".entrance");

const siteContent = document.getElementById("siteContent");


// ENTRAR A NUESTRO MUNDO

enterButton.addEventListener("click", () => {

    entrance.style.display = "none";

    siteContent.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

