import loadPriceSim from "./priceSimulator.js";
loadPriceSim();
import { creerAvis } from "./components/_avis.js";
import { initFormulaire } from "./components/_formulaire.js";

const avisData = [
    { nom: "test", message: "Test de message 1"},
    { nom: "test2", message: "Test de message 2"}
];

const avisListe = document.getElementById("avis_liste");
const avisForm = document.getElementById("avis_form");
const avisTemplate = document.getElementById("avis_template");

avisData.forEach(avis => creerAvis(avis, avisTemplate, avisListe));

initFormulaire(avisForm, avisTemplate, avisListe);
// FORMULAIRE ----------------------------------:
// Récupérer le formulaire et le div des erreurs
const form = document.querySelector(".form-contact");
const errorDiv = document.getElementById("errorMessages");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Effacer les erreurs précédentes
  errorDiv.innerHTML = "";

  // Récupérer les valeurs des champs
  const nom = form.nom.value.trim();
  const prenom = form.prenom.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  let errors = [];

  // Validation simple
  if (!nom) errors.push("Votre nom est obligatoire.");
  if (!prenom) errors.push("Votre prénom est obligatoire.");
  if (!email) {
    errors.push("Votre email est obligatoire.");
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Votre email n'est pas valide.");
  }
  if (!message) errors.push("Votre message est obligatoire.");

  if (errors.length > 0) {
    // Afficher les erreurs dans le DOM
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    // Créer la modale dynamiquement
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <p>Merci ${prenom}, votre message a été envoyé !</p>
        <button id="closeModal">Fermer</button>
      </div>
    `;
    document.body.appendChild(modal);

    // Fermer la modale
    document.getElementById("closeModal").addEventListener("click", () => {
      modal.remove();
      form.reset(); // Réinitialiser le formulaire
    });
  }
});
// FIN FORMULAIRE ----------------------------------
