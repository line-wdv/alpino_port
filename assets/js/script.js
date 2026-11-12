// ===== DATA PROJECT (edit di sini) =====
// Tambah project dengan menyalin format di bawah. Kosongkan array jika belum ada.
// Contoh:
// { name: "Nama Project", description: "Deskripsi singkat.", stack: ["HTML","CSS","PHP"],
//   image:  "assets/images/projects/nama.jpg", demo: "https://link-demo", source: "https://github.com/USERNAME/repo" }
const projects = [
  {
    name: "Tampilan Halaman Login Facebook",
    description: "Latihan membuat ulang tampilan halaman login Facebook.",
    stack: ["HTML", "CSS"],
    image: "assets/images/projects/pino.jpeg"
  }
];

document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
const setMenu = open => { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// Render projects
const grid = document.getElementById("projectGrid");
if (projects.length) {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  grid.innerHTML = projects.map(p => `
    <article class="pcard">
      ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)} thumbnail" loading="lazy">` : `<div class="thumb"></div>`}
      <div><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p>
      <div class="tags">${(p.stack || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p.demo ? `<a class="lnk" href="${esc(p.demo)}" target="_blank" rel="noopener">Live Demo</a>` : ""}
      ${p.source ? `<a class="lnk" href="${esc(p.source)}" target="_blank" rel="noopener">Source Code</a>` : ""}</div>
    </article>`).join("");
}

// Reveal + active nav
const reveal = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));
const links = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
