document.addEventListener("DOMContentLoaded", function() {
    const icon = document.querySelector(".icon");
    const navigation = document.querySelector(".navigation");

    icon.addEventListener("click", function() {
        navigation.classList.toggle("active");
    });
});
