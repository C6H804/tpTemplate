import { creerAvis } from "./_avis.js";

export function initFormulaire(formElement, template, container) {
    formElement.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const message = document.getElementById("message").value.trim();

        if (nom && message) {
            const nouvelAvis = {nom, message};
            creerAvis(nouvelAvis, template, container);
            formElement.reset();
        }
    });
}