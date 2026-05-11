document.getElementById("year").textContent = new Date().getFullYear();

// Email obfuscation — decoded at runtime so the address never appears in static HTML
const _eEl = document.getElementById("contactEmail");
const _email = atob(_eEl.dataset.b64);
_eEl.textContent = _email;
document.getElementById("emailBtn").href = "mailto:" + _email + "?subject=Contacto%20desde%20portafolio";

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));

// Mobile nav close on link click
const navLinks = document.querySelectorAll("#navLinks .nav-link");
const navCollapse = document.getElementById("navLinks");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navCollapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });
});

// ── i18n ─────────────────────────────────────────────────────────────────────
const T = {
  es: {
    "nav.home": "Inicio",
    "nav.interests": "Intereses",
    "nav.contact": "Contacto",
    "nav.portfolio": "Ver portafolio",
    "nav.toggler": "Abrir menú",
    "nav.theme": "Cambiar tema",
    "hero.greeting": "¡Hola!",
    "hero.bio": "Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad de los Andes (Bogotá). Busco oportunidades en el mundo laboral para seguir con mi aprendizaje y poder aportar en equipos que ayuden a cambiar el mundo.",
    "hero.contact-btn": "Contactarme",
    "hero.projects-btn": "Ver proyectos",
    "hero.tech": "Tecnologías: Docker, AWS (Lambda, SageMaker, API Gateway), GCP (Compute Engine, Cloud Run), Azure DevOps, PostgreSQL, MongoDB.",
    "interests.title": "Áreas de interés",
    "interests.subtitle": "Algunas de las cosas en las que disfruto trabajar.",
    "interests.ml.title": "Machine Learning",
    "interests.ml.desc": "Modelado, evaluación y despliegue de modelos con PyTorch y scikit-learn.",
    "interests.data.title": "Análisis de datos",
    "interests.data.desc": "Dashboards, estadística aplicada e inferencia (intervalos de confianza, pruebas de hipótesis).",
    "interests.frontend.title": "Frontend",
    "interests.frontend.desc": "Interfaces limpias y responsivas con HTML, CSS, Bootstrap, React y Angular.",
    "interests.pm.title": "Gerencia de proyectos",
    "interests.pm.desc": "Planeación, coordinación y seguimiento de proyectos tecnológicos usando enfoques ágiles, gestión de riesgos y trabajo colaborativo.",
    "interests.quantum.title": "Computación cuántica",
    "interests.quantum.desc": "Interés en Qiskit y Pennylane, con énfasis en información cuántica y criptografía.",
    "interests.fintech.title": "Tecnología financiera",
    "interests.fintech.desc": "Interés en sistemas financieros digitales, arquitectura de plataformas bancarias y analítica de datos aplicada al sector fintech.",
    "projects.title": "Proyectos",
    "projects.subtitle": "Una selección breve de trabajos recientes.",
    "project.microai.title": "MicroAI – Agente IA para Microcrédito",
    "project.microai.desc": "Agente de IA conversacional para apoyar la toma de decisiones sobre el despliegue estratégico de un producto de microcrédito digital en departamentos de Colombia. Integra análisis de datos, índice de oportunidad multidimensional, mapas coropléticos interactivos y búsqueda web en tiempo real.",
    "project.goatly.title": "Goatly – Ocasional Jobs Platform",
    "project.goatly.desc": "Aplicación móvil centralizada para gestionar vacantes ocasionales en UniAndes. Reúne ofertas en un solo lugar, permite crear un perfil profesional digital, postularse en un clic, entre otras cosas optimizando todo el proceso que se lleva actualmente.",
    "project.medialpes.title": "Clinical & Environmental Analytics Dashboard",
    "project.medialpes.desc": "Dashboards para indicadores de salud ambiental en Bogotá, con modelo multidimensional, ETL y analítica descriptiva e inferencial con parámetros configurables.",
    "project.epilepsy.title": "Refractory Epilepsy Diagnostic Support",
    "project.epilepsy.desc": "Arquitectura cloud para integrar EEG y MRI, priorizando escalabilidad, disponibilidad y seguridad. El sistema permite centralizar información clínica para facilitar el análisis y apoyar la toma de decisiones en el diagnóstico de epilepsia refractaria.",
    "project.banking.title": "Transactional Banking System",
    "project.banking.desc": "Sistema bancario en Java Spring Boot con Oracle SQL y MongoDB, CRUD completo, reglas de negocio y concurrencia (aislamientos y anomalías). Incluye manejo de transacciones, y simulación de operaciones financieras en un entorno distribuido.",
    "contact.title": "Contacto",
    "contact.email-btn": "Enviar email",
  },
  en: {
    "nav.home": "Home",
    "nav.interests": "Interests",
    "nav.contact": "Contact",
    "nav.portfolio": "View portfolio",
    "nav.toggler": "Open menu",
    "nav.theme": "Toggle theme",
    "hero.greeting": "Hello!",
    "hero.bio": "I'm a Systems and Computing Engineering student at Universidad de los Andes (Bogotá). I'm looking for professional opportunities to keep learning and contribute to teams that help change the world.",
    "hero.contact-btn": "Contact me",
    "hero.projects-btn": "View projects",
    "hero.tech": "Technologies: Docker, AWS (Lambda, SageMaker, API Gateway), GCP (Compute Engine, Cloud Run), Azure DevOps, PostgreSQL, MongoDB.",
    "interests.title": "Areas of interest",
    "interests.subtitle": "Some of the things I enjoy working on.",
    "interests.ml.title": "Machine Learning",
    "interests.ml.desc": "Modeling, evaluation and deployment of models with PyTorch and scikit-learn.",
    "interests.data.title": "Data Analysis",
    "interests.data.desc": "Dashboards, applied statistics and inference (confidence intervals, hypothesis testing).",
    "interests.frontend.title": "Frontend",
    "interests.frontend.desc": "Clean and responsive interfaces with HTML, CSS, Bootstrap, React and Angular.",
    "interests.pm.title": "Project Management",
    "interests.pm.desc": "Planning, coordination and tracking of technology projects using agile approaches, risk management and collaborative work.",
    "interests.quantum.title": "Quantum Computing",
    "interests.quantum.desc": "Interest in Qiskit and Pennylane, with emphasis on quantum information and cryptography.",
    "interests.fintech.title": "Financial Technology",
    "interests.fintech.desc": "Interest in digital financial systems, banking platform architecture and data analytics applied to the fintech sector.",
    "projects.title": "Projects",
    "projects.subtitle": "A brief selection of recent work.",
    "project.microai.title": "MicroAI – AI Agent for Microcredit",
    "project.microai.desc": "Conversational AI agent to support decision-making on the strategic deployment of a digital microcredit product across Colombian departments. Integrates data analysis, a multidimensional opportunity index, interactive choropleth maps, and real-time web search.",
    "project.goatly.title": "Goatly – Occasional Jobs Platform",
    "project.goatly.desc": "Centralized mobile app to manage occasional job listings at UniAndes. Aggregates opportunities in one place, lets users build a digital professional profile, and apply in one click — streamlining the entire hiring process.",
    "project.medialpes.title": "Clinical & Environmental Analytics Dashboard",
    "project.medialpes.desc": "Dashboards for environmental health indicators in Bogotá, with a multidimensional model, ETL pipeline and descriptive/inferential analytics with configurable parameters.",
    "project.epilepsy.title": "Refractory Epilepsy Diagnostic Support",
    "project.epilepsy.desc": "Cloud architecture integrating EEG and MRI data, prioritizing scalability, availability and security. The system centralizes clinical information to support analysis and decision-making in refractory epilepsy diagnosis.",
    "project.banking.title": "Transactional Banking System",
    "project.banking.desc": "Banking system in Java Spring Boot with Oracle SQL and MongoDB. Full CRUD, business rules and concurrency handling (isolation levels and anomalies). Includes transaction management and financial operation simulation in a distributed environment.",
    "contact.title": "Contact",
    "contact.email-btn": "Send email",
  }
};

let lang = localStorage.getItem("lang") || "es";

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (T[l][key] !== undefined) el.textContent = T[l][key];
  });
  document.querySelectorAll("[data-i18n-label]").forEach(el => {
    const key = el.dataset.i18nLabel;
    if (T[l][key] !== undefined) el.setAttribute("aria-label", T[l][key]);
  });
  const btn = document.getElementById("langToggle");
  btn.textContent = l === "es" ? "EN" : "ES";
  btn.title = l === "es" ? "Switch to English" : "Cambiar a español";
  localStorage.setItem("lang", l);
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "es" ? "en" : "es");
});

// ── Dark mode ─────────────────────────────────────────────────────────────────
let theme = localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function applyTheme(t) {
  theme = t;
  document.documentElement.setAttribute("data-theme", t);
  const icon = document.querySelector("#themeToggle i");
  if (icon) icon.className = t === "dark" ? "bi bi-sun" : "bi bi-moon";
  localStorage.setItem("theme", t);
}

document.getElementById("themeToggle").addEventListener("click", () => {
  applyTheme(theme === "light" ? "dark" : "light");
});

applyTheme(theme);
applyLang(lang);
