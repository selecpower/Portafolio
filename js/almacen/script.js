let posicionScrollY = 0;
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[data-carousel]");
  carousels.forEach((carrusel) => {
    carrusel.querySelectorAll(".img-proyecto").forEach((img) => {
      img.addEventListener("click", () => abrirModal(img));
    });
  });
});

function abrirModal(img) {
  const modal = document.getElementById("modalImagen");
  const modalImg = document.getElementById("imgAmpliada");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modal.scrollIntoView({ behavior: "smooth" });
  modalImg.src = img.src;
  caption.textContent = img.alt;
}

function cerrarModal() {
  const modal = document.getElementById("modalImagen");
  modal.style.display = "none";
}
