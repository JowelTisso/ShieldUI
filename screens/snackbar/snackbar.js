const btnLeading = document.querySelector("#btn-leading");
const btnBaseline = document.querySelector("#btn-baseline");
const closeBtn = document.querySelector("#sb-close-btn");
const snackbar = document.querySelector("#snackbar");
const snackbarMsg = document.querySelector("#snackbar-msg");

btnLeading.addEventListener("click", () => {
  if (!snackbar.classList.contains("show-snackbar")) {
    snackbar.classList.add("show-snackbar");
  }
  if (!snackbar.classList.contains("sb-leading")) {
    snackbar.classList.add("sb-leading");
  }
});

btnBaseline.addEventListener("click", () => {
  if (!snackbar.classList.contains("show-snackbar")) {
    snackbar.classList.add("show-snackbar");
  }
  if (snackbar.classList.contains("sb-leading")) {
    snackbar.classList.remove("sb-leading");
  }
});

closeBtn.addEventListener("click", () => {
  if (snackbar.classList.contains("show-snackbar")) {
    snackbar.classList.remove("show-snackbar");
  }
});
