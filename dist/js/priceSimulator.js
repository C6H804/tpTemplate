import createElement from "./components/_CreateElement.js";

let priceData = {
    colors: [
        { color: "black", price: 0, selected: true },
        { color: "white", price: 0, selected: false },
        { color: "red", price: 10, selected: false },
        { color: "blue", price: 10, selected: false },
        { color: "green", price: 10, selected: false },
        { color: "gold", price: 100, selected: false }
    ],
    size: [
        { size: "mini", price: 0, selected: false },
        { size: "standard", price: 50, selected: true },
        { size: "maxi", price: 100, selected: false }
    ],
    storage: [
        { storage: "64 Go", price: 0, selected: true },
        { storage: "128 Go", price: 50, selected: false },
        { storage: "256 Go", price: 100, selected: false },
        { storage: "512 Go", price: 200, selected: false },
        { storage: "1024 Go", price: 300, selected: false }
    ],
    warranty: [
        { warranty: "0 mois", price: 0, selected: true },
        { warranty: "12 mois", price: 50, selected: false },
        { warranty: "24 mois", price: 90, selected: false },
        { warranty: "36 mois", price: 120, selected: false },
        { warranty: "48 mois", price: 150, selected: false }
    ],
    basePrice: 500,
};

export default function loadPriceSim() {
    updatePrice();
    let target = document.getElementById("priceSimForm");
    const colorsDiv = loadColors(priceData.colors);
    const sizeSelect = loadSize(priceData.size);
    const storageDiv = loadStorage(priceData.storage);
    const warrantySelect = loadWarranty(priceData.warranty);
    target.appendChild(colorsDiv);
    target.appendChild(sizeSelect);
    target.appendChild(storageDiv);
    target.appendChild(warrantySelect);

}
function loadWarranty(warrantyData) {
    const warrantySelect = createElement("select", { id: "warrantySelect" });
    warrantyData.forEach((e, i) => {
        let warrantyOption = createElement("option", { value: e.warranty });
        warrantyOption.innerText = `${e.warranty}`;
        if (e.selected) warrantyOption.selected = true;
        warrantySelect.appendChild(warrantyOption);
    });
    warrantySelect.addEventListener("change", (event) => {
        updateWarranty(event);
    });
    return warrantySelect;
}

function updateWarranty(event) {
    event.preventDefault();
    priceData.warranty.forEach(w => w.selected = false);
    const selectedWarranty = priceData.warranty.find(w => w.warranty === event.target.value);
    if (selectedWarranty) selectedWarranty.selected = true;
    updatePrice();
}


function loadStorage(storageData) {
    const storageButtonsDiv = createElement("div", { id: "storageButtonsDiv" });
    storageData.forEach((e, i) => {
        let storageButton = createElement("button", { class: `storageButton ${e.storage.split(' ')[0]}` });
        storageButton.innerText = `${e.storage}`;
        if (e.selected) storageButton.classList.add("active");
        storageButton.addEventListener("click", (event) => {
            updateStorage(event);
        });
        storageButtonsDiv.appendChild(storageButton);
    });
    return storageButtonsDiv;
}

function updateStorage(event) {
    event.preventDefault();
    priceData.storage.forEach(s => s.selected = false);
    document.querySelectorAll(".storageButton").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    const selectedStorage = priceData.storage.find(s => s.storage === event.target.innerText);
    if (selectedStorage) selectedStorage.selected = true;
    updatePrice();
}


function loadSize(sizeData) {
    const sizeSelect = createElement("select", { id: "sizeSelect" });
    sizeData.forEach((e, i) => {
        let sizeOption = createElement("option", { value: e.size });
        sizeOption.innerText = `${e.size}`;
        if (i === 1) sizeOption.selected = true;
        sizeSelect.appendChild(sizeOption);
    });
    sizeSelect.addEventListener("change", (event) => {
        updateSize(event);
    });
    return sizeSelect;

}
function updateSize(event) {
    event.preventDefault();
    priceData.size.forEach(s => s.selected = false);
    priceData.size.find(s => s.size === event.target.value).selected = true;
    updatePrice();
}

function loadColors(colorsData) {
    const colorButtonsDiv = createElement("div", { id: "colorButtonsDiv" });
    colorsData.forEach((e, i) => {
        let colorButton = createElement("button", { class: `colorButton ${e.color}` });
        colorButton.innerText = e.color;
        if (i === 0) colorButton.classList.add("active");
        colorButton.addEventListener("click", (event) => {
            updateColors(event);
        });
        colorButtonsDiv.appendChild(colorButton);
    });
    return colorButtonsDiv;
}



function updateColors(event) {
    event.preventDefault();
    priceData.colors.forEach(c => c.selected = false);
    document.querySelectorAll(".colorButton").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    priceData.colors.find(c => c.color === event.target.innerText).selected = true;
    updatePrice();
}

function updatePrice() {
    let price = priceData.basePrice
        + priceData.colors.find(c => c.selected).price
        + priceData.size.find(s => s.selected).price
        + priceData.storage.find(s => s.selected).price
        + priceData.warranty.find(w => w.selected).price;
    document.getElementById("price").innerText = `Prix : ${price}€`;
}