const articles = [
  {
    title: "Créer un portfolio moderne",
    link: "article1.html",
    date: "Août 2025"
  },
  {
    title: "Comprendre GitHub Actions",
    link: "article2.html",
    date: "Juillet 2025"
  }
];

const ul = document.getElementById("article-list");

articles.forEach(article => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${article.link}">${article.title}</a> <em>(${article.date})</em>`;
  ul.appendChild(li);
});
