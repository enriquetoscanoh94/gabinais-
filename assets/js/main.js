/* ===========================================================
   Gabinais Painting — interactions
   Simple, dependency-free JS.
   =========================================================== */

// ---- current year in footer ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- header background on scroll ----
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---- mobile menu ----
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

/* ===========================================================
   Language (EN / ES)
   =========================================================== */
const I18N = {
  en: {
    "nav.work": "Work",
    "nav.ba": "Before & After",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.kicker": "Painting contractor · (209) Central Valley, CA",
    "hero.title1": "Flawless finishes,",
    "hero.title2": "inside and out.",
    "hero.sub": "Interior & exterior painting for homes and businesses. Sharp lines, honest work, and competitive prices — start to spotless finish.",
    "cta.estimate": "Get a free estimate",
    "cta.call": "Call (209) 689-9040",
    "cta.request": "Request your estimate",
    "services.title": "What we do",
    "services.sub": "Residential and commercial painting, done with a contractor's care and a finisher's eye for detail.",
    "offer1.title": "Interior & Exterior",
    "offer1.text": "Walls, ceilings, trim, cabinets, siding and stucco — prepped properly and coated to last.",
    "offer2.title": "Commercial & Residential",
    "offer2.text": "From single rooms and whole homes to offices and storefronts, on a schedule that works for you.",
    "offer3.title": "Quality Work",
    "offer3.text": "Clean masking, straight edges and even coverage. We leave the site tidy and the finish flawless.",
    "offer4.title": "Competitive Prices",
    "offer4.text": "Fair, upfront quotes with no surprises. Free estimates on every project.",
    "work.title": "Recent work",
    "work.sub": "A look at finished interiors and exteriors from around the valley.",
    "ba.title": "Before & after",
    "ba.sub": "Real projects, from tired and dated to clean and finished. Same room, same house — just repainted.",
    "ba.before": "Before",
    "ba.after": "After",
    "ba.p1": "Exterior — fresh color",
    "ba.p2": "Kitchen cabinets — gray",
    "ba.p3": "Exterior — full repaint",
    "ba.p4": "Kitchen cabinets — sage green",
    "ba.p5": "Exterior — door & entryway",
    "about.title": "Painters you can hand the keys to",
    "about.p1": "Gabinais Painting is a local interior and exterior painting crew serving homes and businesses across the (209). We show up on time, protect your space, and treat every wall like it's our own.",
    "about.p2": "The result is what you see in our work: crisp lines, clean coverage, and a finish that holds up. Quality work at a competitive price — and a free estimate before you commit to anything.",
    "about.pt1": "Free, no-pressure estimates",
    "about.pt2": "Careful prep & clean job sites",
    "about.pt3": "Residential & commercial",
    "contact.title": "Let's get your project quoted",
    "contact.sub": "Tell us what you're painting and we'll give you a straight, competitive price. Free estimates, no obligation.",
    "contact.call": "Call or text",
    "contact.fb": "Message us on",
    "contact.or": "or reach us directly",
    "form.name": "Name",
    "form.name.ph": "Your name",
    "form.phone": "Phone",
    "form.phone.ph": "(209) 000-0000",
    "form.service": "Project type",
    "form.opt.interior": "Interior painting",
    "form.opt.exterior": "Exterior painting",
    "form.opt.both": "Interior & exterior",
    "form.opt.commercial": "Commercial project",
    "form.opt.other": "Something else",
    "form.details": "Details",
    "form.details.ph": "Tell us a bit about the space, rooms, colors, timing…",
    "form.send": "Send on WhatsApp",
    "form.note": "Opens WhatsApp with your details ready to send — no account needed to fill this out.",
    "footer.area": "Central Valley, California",
    "footer.tag": "Interior & exterior · commercial & residential.",
    "cap.interior": "Interior",
    "cap.exterior": "Exterior",
  },
  es: {
    "nav.work": "Trabajos",
    "nav.ba": "Antes y Después",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "hero.kicker": "Contratista de pintura · (209) Valle Central, CA",
    "hero.title1": "Acabados impecables,",
    "hero.title2": "por dentro y por fuera.",
    "hero.sub": "Pintura interior y exterior para casas y negocios. Líneas limpias, trabajo honesto y precios competitivos — de principio a un acabado impecable.",
    "cta.estimate": "Cotización gratis",
    "cta.call": "Llama al (209) 689-9040",
    "cta.request": "Pide tu cotización",
    "services.title": "Lo que hacemos",
    "services.sub": "Pintura residencial y comercial, con el cuidado de un contratista y el ojo de un buen acabador.",
    "offer1.title": "Interior y Exterior",
    "offer1.text": "Paredes, techos, molduras, gabinetes, siding y estuco — bien preparados y con un acabado que dura.",
    "offer2.title": "Comercial y Residencial",
    "offer2.text": "Desde una habitación o la casa completa hasta oficinas y locales, en el horario que te acomode.",
    "offer3.title": "Trabajo de Calidad",
    "offer3.text": "Enmascarado limpio, bordes rectos y cobertura pareja. Dejamos el lugar limpio y el acabado impecable.",
    "offer4.title": "Precios Competitivos",
    "offer4.text": "Cotizaciones justas y claras, sin sorpresas. Estimados gratis en cada proyecto.",
    "work.title": "Trabajos recientes",
    "work.sub": "Un vistazo a interiores y exteriores terminados en la región.",
    "ba.title": "Antes y después",
    "ba.sub": "Proyectos reales, de lo viejo y desgastado a lo limpio y terminado. El mismo cuarto, la misma casa — solo repintados.",
    "ba.before": "Antes",
    "ba.after": "Después",
    "ba.p1": "Exterior — nuevo color",
    "ba.p2": "Gabinetes de cocina — gris",
    "ba.p3": "Exterior — fachada renovada",
    "ba.p4": "Gabinetes de cocina — verde salvia",
    "ba.p5": "Exterior — puerta y acceso",
    "about.title": "Pintores a los que les confías las llaves",
    "about.p1": "Gabinais Painting es un equipo local de pintura interior y exterior que atiende casas y negocios en toda la zona del (209). Llegamos a tiempo, protegemos tu espacio y tratamos cada pared como si fuera nuestra.",
    "about.p2": "El resultado es lo que ves en nuestro trabajo: líneas nítidas, cobertura limpia y un acabado que aguanta. Trabajo de calidad a precio competitivo — y un estimado gratis antes de que te comprometas a nada.",
    "about.pt1": "Estimados gratis y sin presión",
    "about.pt2": "Preparación cuidadosa y lugar limpio",
    "about.pt3": "Residencial y comercial",
    "contact.title": "Coticemos tu proyecto",
    "contact.sub": "Cuéntanos qué vas a pintar y te damos un precio claro y competitivo. Estimados gratis, sin compromiso.",
    "contact.call": "Llama o escribe",
    "contact.fb": "Escríbenos por",
    "contact.or": "o contáctanos directo",
    "form.name": "Nombre",
    "form.name.ph": "Tu nombre",
    "form.phone": "Teléfono",
    "form.phone.ph": "(209) 000-0000",
    "form.service": "Tipo de proyecto",
    "form.opt.interior": "Pintura interior",
    "form.opt.exterior": "Pintura exterior",
    "form.opt.both": "Interior y exterior",
    "form.opt.commercial": "Proyecto comercial",
    "form.opt.other": "Otra cosa",
    "form.details": "Detalles",
    "form.details.ph": "Cuéntanos del espacio, cuartos, colores, fechas…",
    "form.send": "Enviar por WhatsApp",
    "form.note": "Abre WhatsApp con tus datos listos para enviar — no necesitas cuenta para llenarlo.",
    "footer.area": "Valle Central, California",
    "footer.tag": "Interior y exterior · comercial y residencial.",
    "cap.interior": "Interior",
    "cap.exterior": "Exterior",
  },
};

let lang = localStorage.getItem("gab-lang") || "en";

function applyLang(next) {
  lang = next;
  localStorage.setItem("gab-lang", lang);
  document.documentElement.lang = lang;

  // text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (I18N[lang][key]) el.placeholder = I18N[lang][key];
  });

  // toggle button state
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });

  // carousel captions
  document.querySelectorAll(".slide figcaption").forEach((cap) => {
    const type = cap.dataset.type;
    cap.textContent = I18N[lang]["cap." + type];
  });
}

document.querySelectorAll(".lang-toggle button").forEach((b) => {
  b.addEventListener("click", () => applyLang(b.dataset.lang));
});

// ---- reveal on scroll ----
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 4) * 70 + "ms";
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

/* ===========================================================
   Gallery carousel  (manual only — no autoplay)
   =========================================================== */
const PHOTOS = [
  { src: "assets/gallery/g01.jpg", type: "interior" },
  { src: "assets/gallery/g02.jpg", type: "exterior" },
  { src: "assets/gallery/g03.jpg", type: "interior" },
  { src: "assets/gallery/g04.jpg", type: "exterior" },
  { src: "assets/gallery/g05.jpg", type: "interior" },
  { src: "assets/gallery/g06.jpg", type: "exterior" },
  { src: "assets/gallery/g07.jpg", type: "interior" },
  { src: "assets/gallery/g08.jpg", type: "exterior" },
  { src: "assets/gallery/g09.jpg", type: "interior" },
  { src: "assets/gallery/g10.jpg", type: "exterior" },
  { src: "assets/gallery/g11.jpg", type: "interior" },
  { src: "assets/gallery/g12.jpg", type: "exterior" },
  { src: "assets/gallery/g13.jpg", type: "interior" },
  { src: "assets/gallery/g14.jpg", type: "exterior" },
  { src: "assets/gallery/g15.jpg", type: "interior" },
  { src: "assets/gallery/g16.jpg", type: "exterior" },
  { src: "assets/gallery/g17.jpg", type: "interior" },
  { src: "assets/gallery/g18.jpg", type: "exterior" },
  { src: "assets/gallery/g19.jpg", type: "interior" },
  { src: "assets/gallery/g20.jpg", type: "exterior" },
  { src: "assets/gallery/g21.jpg", type: "interior" },
  { src: "assets/gallery/g22.jpg", type: "interior" },
  { src: "assets/gallery/g23.jpg", type: "interior" },
  { src: "assets/gallery/g24.jpg", type: "interior" },
];

const track = document.getElementById("track");
const dotsWrap = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const idxEl = document.getElementById("carIndex");
const totalEl = document.getElementById("carTotal");

let current = 0;

PHOTOS.forEach((photo, i) => {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = `
    <figure>
      <img src="${photo.src}" alt="Finished ${photo.type} painting project by Gabinais Painting"
           loading="${i === 0 ? "eager" : "lazy"}" />
      <figcaption data-type="${photo.type}"></figcaption>
    </figure>`;
  track.appendChild(slide);

  const dot = document.createElement("button");
  dot.setAttribute("role", "tab");
  dot.setAttribute("aria-label", `Photo ${i + 1}`);
  dot.addEventListener("click", () => goTo(i));
  dotsWrap.appendChild(dot);
});

totalEl.textContent = PHOTOS.length;

function update() {
  track.style.transform = `translateX(-${current * 100}%)`;
  idxEl.textContent = current + 1;
  [...dotsWrap.children].forEach((d, i) =>
    d.setAttribute("aria-selected", i === current ? "true" : "false")
  );
}
function goTo(i) {
  current = (i + PHOTOS.length) % PHOTOS.length;
  update();
}
const next = () => goTo(current + 1);
const prev = () => goTo(current - 1);

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// keyboard
document.getElementById("carousel").addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

// touch / swipe
let startX = 0, dragging = false;
const viewport = document.querySelector(".carousel-viewport");
viewport.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
viewport.addEventListener("touchend", (e) => {
  if (!dragging) return;
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 45) (dx < 0 ? next() : prev());
  dragging = false;
}, { passive: true });

update();

// apply saved / default language last (captions now exist)
applyLang(lang);

/* ===========================================================
   WhatsApp form → opens chat with a pre-filled message
   =========================================================== */
const WA_NUMBER = "12096899040"; // (209) 689-9040
const waForm = document.getElementById("waForm");
if (waForm) {
  waForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = I18N[lang];
    const name = document.getElementById("waName").value.trim();
    const phone = document.getElementById("waPhone").value.trim();
    const serviceSel = document.getElementById("waService");
    const service = t["form.opt." + serviceSel.value] || serviceSel.value;
    const details = document.getElementById("waMsg").value.trim();

    const intro = lang === "es"
      ? "Hola Gabinais Painting, me gustaría una cotización."
      : "Hi Gabinais Painting, I'd like a free estimate.";

    const lines = [intro, ""];
    if (name) lines.push(`${t["form.name"]}: ${name}`);
    if (phone) lines.push(`${t["form.phone"]}: ${phone}`);
    lines.push(`${t["form.service"]}: ${service}`);
    if (details) lines.push(`${t["form.details"]}: ${details}`);

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}
