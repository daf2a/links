// Isi URL Anda di sini sebelum dipublikasikan.
const profileLinks = {
  linkedin: "https://www.linkedin.com/in/daf2a/",
  portfolio: "https://www.daf2a.com/portfolio/?sort=date-desc",
  github: "https://github.com/daf2a",
  resume: "https://www.daf2a.com/my_cv/main_cv.pdf",
  instagram: "https://www.instagram.com/daf2a_/",
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const url = profileLinks[link.dataset.link];

  if (!url) {
    if (!link.getAttribute("href")) {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      link.title = "Tautan belum diisi";
      link.addEventListener("click", (event) => event.preventDefault());
    }
    return;
  }

  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
});
