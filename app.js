import { portfolio } from "./portfolio.js";

const byId = (id) => document.getElementById(id);

byId("hero-title").innerHTML = `<span class="hero-name">${escapeHtml(portfolio.name)}.</span><br />${escapeHtml(portfolio.title)}`;
byId("hero-intro").textContent = portfolio.introduction;
byId("hero-stack").textContent = portfolio.stack;
byId("about-copy").textContent = portfolio.about;
byId("skills-list").innerHTML = portfolio.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("");
byId("tools-list").innerHTML = portfolio.tools.map((tool) => `<li>${escapeHtml(tool)}</li>`).join("");
byId("current-year").textContent = new Date().getFullYear();
byId("cv-label").textContent = portfolio.cv ? "CV disponible en PDF" : "CV PDF à ajouter";
byId("service-list").innerHTML = portfolio.services.map((service) => `
  <article class="service-card">
    <div class="service-meta"><span>${escapeHtml(service.number)}</span><span aria-hidden="true">↗</span></div>
    <h3>${escapeHtml(service.title)}</h3>
    <p>${escapeHtml(service.summary)}</p>
    <ul>${service.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>
    <a class="service-link" href="#contact">Parlons de votre projet <span aria-hidden="true">↗</span></a>
  </article>
`).join("");
byId("learning-year").textContent = portfolio.training.year;
byId("learning-instructor").textContent = portfolio.training.instructor;
byId("learning-list").innerHTML = portfolio.training.topics.map((item) => `
  <article class="learning-card">
    <span class="learning-number">${escapeHtml(item.number)}</span>
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.summary)}</p>
  </article>
`).join("");
if (portfolio.cv) {
  byId("cv-link").href = portfolio.cv;
  byId("cv-link").download = "CV.pdf";
  byId("cv-link").textContent = "Télécharger mon CV ↗";
}

byId("project-list").innerHTML = portfolio.projects.map((project) => `
  <article class="project-card">
    <div class="project-meta"><span class="project-number">${escapeHtml(project.number)} / ${String(portfolio.projects.length).padStart(2, "0")}</span><span>${escapeHtml(project.category)}</span></div>
    <h3>${escapeHtml(project.title)}</h3>
    <p>${escapeHtml(project.summary)}</p>
    <div class="project-bottom">
      <div class="project-tags">${project.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}</div>
      ${project.url ? `<a class="project-link" href="${escapeAttribute(project.url)}" target="_blank" rel="noreferrer" aria-label="Voir ${escapeAttribute(project.title)}">↗</a>` : ""}
    </div>
  </article>
`).join("");

const contacts = [
  ["E-mail", portfolio.email ? `mailto:${portfolio.email}` : "", portfolio.email || "À renseigner"],
  ["LinkedIn", portfolio.linkedin, portfolio.linkedin ? "Profil professionnel" : "Lien à renseigner"],
  ["GitHub", portfolio.github, portfolio.github ? "Projets & code" : "AnisMwgli"]
];
byId("contact-links").innerHTML = contacts.map(([label, url, detail]) => url
  ? `<a href="${escapeAttribute(url)}"${url.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}><span>${escapeHtml(label)}</span><span>${escapeHtml(detail)} ↗</span></a>`
  : `<div class="contact-placeholder"><span>${escapeHtml(label)}</span><span>${escapeHtml(detail)}</span></div>`
).join("");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function escapeAttribute(value) {
  return escapeHtml(value);
}