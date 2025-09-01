/* Tableau des questions/réponses */
const faqData = [
    { question: "Comment puis-je passer une commande ?", answer: "Vous pouvez passer commande directement sur notre site via le panier." },
    { question: "Quels sont les délais de livraison ?", answer: "Les délais varient entre 3 et 5 jours ouvrés en France." },
    { question: "Quels moyens de paiement acceptez-vous ?", answer: "Nous acceptons les cartes bancaires, PayPal et Apple Pay." },
    { question: "Puis-je retourner un article ?", answer: "Oui, vous disposez de 14 jours pour nous renvoyer votre article." },
    { question: "Où puis-je contacter le service client ?", answer: "Vous pouvez nous écrire via le formulaire de contact ou par email support@site.com." }
];

/* Selection du container */
const faqContainer = document.getElementById("faq-container");

/* Génération dynamique des question/réponses */
faqData.forEach(item => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");

    const question = document.createElement("div");
    question.classList.add("faq-question");

    const text = document.createElement("span");
    text.textContent = item.question;

    const icon = document.createElement("span");
    icon.classList.add("faq-icon");
    icon.textContent = "▶";

    question.appendChild(text);
    question.appendChild(icon);

    const answer = document.createElement("div");
    answer.classList.add("faq-answer");
    answer.textContent = item.answer;

    /* Toggle affichage au clic */
    question.addEventListener("click", () => {
        const isActive = faqItem.classList.contains("active");

        /* Fermer toutes les réponses */
        document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));

        /* Ouvrir la réponse cliquée si elle n'étais pas active*/
        if (!isActive) {
            faqItem.classList.add("active");
        }
    });

    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    faqContainer.appendChild(faqItem);
});

/* filtrage dynamique */
const searchInput = document.getElementById("faq-search");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    document.querySelectorAll(".faq-item").forEach(item => {
        const questionText = item.querySelector(".faq-question span").textContent.toLowerCase();
        if (questionText.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});