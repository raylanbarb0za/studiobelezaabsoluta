document.getElementById("link-inicio").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = window.location.pathname;
});

const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  links.classList.toggle("open");
  toggle.classList.toggle("open"); // adiciona a classe ao botão
});

links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.classList.remove("open"); //aqui remove
  });
});

function setupInfiniteScroll() {
  const track = document.querySelector(".strip-track");
  const items = Array.from(track.children);
  const halfCount = items.length / 2;
  let width = 0;
  const gap = parseFloat(getComputedStyle(track).gap) || 0;

  for (let i = 0; i < halfCount; i++) {
    width += items[i].getBoundingClientRect().width + gap;
  }

  track.style.setProperty("--scroll-distance", `${width}px`);
}

window.addEventListener("load", setupInfiniteScroll);
window.addEventListener("resize", setupInfiniteScroll);
