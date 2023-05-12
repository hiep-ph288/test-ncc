const toggleButton = document.querySelector(".toggle-button");
const sidebar = document.querySelector(".category");

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});
