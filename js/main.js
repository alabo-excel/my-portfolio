var bars = document.getElementById("bars");
var header = document.getElementById("header-mobile");
var toggle = document.getElementById('toggle')


bars.addEventListener("click", () => {
    if (header.style.display == "block") {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }
});

// toggle.addEventListener('click', () => {
//     var element = document.body;
//     element.classList.toggle('light-mode')
// })