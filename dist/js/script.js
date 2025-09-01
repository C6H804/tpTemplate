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