export function creerAvis(avis, template, container) {
  const clone = template.content.cloneNode(true);

  const article = clone.querySelector(".avis");

  article.querySelector(".avis_nom").textContent = avis.nom;
  article.querySelector(".avis_message").textContent = avis.message;

  const btnSupprimer = article.querySelector(".supprimer_btn");
  btnSupprimer.addEventListener("click", function () {
    article.remove();
  });

  container.prepend(article);
}
