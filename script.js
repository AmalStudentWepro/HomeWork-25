document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("active");
});

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
});

document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", function() {
        let answer = this.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});
