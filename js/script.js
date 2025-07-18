let indice = 0;

function moverCarrusel(direccion) {
  const imagenes = document.querySelectorAll(".carrusel-img");
  imagenes[indice].classList.remove("active");
  indice = (indice + direccion + imagenes.length) % imagenes.length;
  imagenes[indice].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".carrusel-img");
  if (imgs.length) imgs[0].classList.add("active");
});

function abrirModal(img) {
  const modal = document.getElementById("modalImagen");
  const modalImg = document.getElementById("imgAmpliada");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.textContent = img.alt;
}

function cerrarModal() {
  document.getElementById("modalImagen").style.display = "none";
}

// Cierra modal al hacer clic fuera de la imagen
window.onclick = function (event) {
  const modal = document.getElementById("modalImagen");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
