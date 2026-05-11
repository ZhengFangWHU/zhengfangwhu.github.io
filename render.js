(function () {
  const data = siteData;
  const topVenues = ["CCS", "USENIX Security", "S&P", "NDSS", "ICML"];

  function escapeHtml(value) {
    const span = document.createElement("span");
    span.textContent = value || "";
    return span.innerHTML;
  }

  function linkHtml(label, url, primary) {
    const klass = primary ? "btn" : "btn btn-outline";
    return `<a class="${klass}" href="${escapeHtml(url)}">${escapeHtml(label)}</a>`;
  }

  function emphasizeName(authors) {
    let escaped = escapeHtml(authors);
    const names = ["Zheng Fang", "Z Fang"];
    names.forEach((name) => {
      const safeName = escapeHtml(name);
      escaped = escaped.replaceAll(safeName, `<span class="author-me">${safeName}</span>`);
    });
    return escaped;
  }

  function formatVenue(venue) {
    let escaped = escapeHtml(venue);
    topVenues.forEach((venueName) => {
      const safeVenue = escapeHtml(venueName);
      escaped = escaped.replaceAll(safeVenue, `<span class="venue-rank">${safeVenue}</span>`);
    });
    return escaped;
  }

  document.title = `${data.name} - Homepage`;
  document.getElementById("nav-logo").textContent = data.name;
  document.getElementById("profile-name").textContent = data.name;
  document.getElementById("profile-title").textContent = data.title;
  document.getElementById("profile-affiliation").textContent = data.affiliation;
  document.getElementById("profile-bio").textContent = data.bio;
  document.getElementById("footer-text").textContent = data.footerText;

  document.getElementById("profile-links").innerHTML = data.links
    .map((item) => linkHtml(item.label, item.url, item.primary))
    .join("");

  document.getElementById("research-list").innerHTML = data.research
    .map(
      (item) => `
        <article class="research-item">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("publications-note").textContent = data.publicationsNote;
  document.getElementById("publication-container").innerHTML = data.publications
    .filter((group) => group.papers.length > 0)
    .map((group) => {
      const papers = group.papers
        .map((paper) => {
          const links = Object.entries(paper.links || {})
            .filter(([, url]) => url)
            .map(([label, url]) => `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>`)
            .join(" · ");
          return `
            <li class="pub-item">
              <span class="pub-title">${escapeHtml(paper.title)}</span>
              <span class="pub-authors">${emphasizeName(paper.authors)}</span>
              <span class="pub-venue">${formatVenue(paper.venue)}</span>
              ${paper.citations ? `<span class="pub-citations">${escapeHtml(paper.citations)}</span>` : ""}
              ${links ? `<span class="pub-links">${links}</span>` : ""}
            </li>
          `;
        })
        .join("");

      return `
        <div class="pub-year">${escapeHtml(group.year)}</div>
        <ul class="pub-list">${papers}</ul>
      `;
    })
    .join("");

  document.getElementById("contact-list").innerHTML = data.contact
    .map((item) => {
      const value = item.url
        ? `<a href="${escapeHtml(item.url)}">${escapeHtml(item.value)}</a>`
        : escapeHtml(item.value);
      return `<div class="contact-item"><strong>${escapeHtml(item.label)}:</strong> ${value}</div>`;
    })
    .join("");
})();
