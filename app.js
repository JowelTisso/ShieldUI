const btnInstall = document.querySelector("#btn-install");
const installSec = document.querySelector("#install-sec");

btnInstall.addEventListener("click", () => {
  installSec.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});
