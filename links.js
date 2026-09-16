// Isi URL Anda di sini sebelum dipublikasikan.
const profileLinks = {
  linkedin: "https://www.linkedin.com/in/daf2a/",
  website: "https://www.daf2a.com/",
  portfolio: "https://www.daf2a.com/portfolio/?sort=date-desc",
  github: "https://github.com/daf2a",
  instagram: "https://www.instagram.com/daf2a_/",
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const url = profileLinks[link.dataset.link];

  if (!url) {
    link.href = "#";
    link.setAttribute("aria-disabled", "true");
    link.title = "Tautan belum diisi";
    link.addEventListener("click", (event) => event.preventDefault());
    return;
  }

  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
});
