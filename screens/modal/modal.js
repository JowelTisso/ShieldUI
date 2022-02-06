const modal = document.querySelector("#modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const btnShowModal = document.querySelector("#btn-modal");

const hideModal = () => {
  if (modal.classList.contains("show-modal")) {
    modal.classList.add("hide-modal");
    modal.classList.remove("show-modal");
  }
};

modalBackdrop.addEventListener("click", hideModal);

const showModal = () => {
  if (modal.classList.contains("hide-modal")) {
    modal.classList.add("show-modal");
    modal.classList.remove("hide-modal");
  }
};

btnShowModal.addEventListener("click", showModal);
