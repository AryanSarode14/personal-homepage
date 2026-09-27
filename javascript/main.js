document.querySelectorAll(".toggle-details").forEach((button) => {
  button.addEventListener("click", () => {
    const details = document.getElementById(button.dataset.target);
    const isHidden = details.classList.toggle("d-none");
    button.textContent = isHidden ? "Show details" : "Hide details";
  });
});
