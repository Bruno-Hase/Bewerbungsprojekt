// Zähler für die Anzahl der Aufgaben
let aufgabenZaehler = 0;

// Funktion: Neue Aufgabe hinzufügen
function aufgabeHinzufuegen() {
    var eingabe = document.getElementById("neueAufgabe");
    var text = eingabe.value;

    if (text == "") {
        alert("Bitte gib eine Aufgabe ein!");
        return;
    }

    var liste = document.getElementById("liste");
    var neuesElement = document.createElement("li");
    neuesElement.textContent = text;

    var loeschenButton = document.createElement("button");
    loeschenButton.textContent = "Löschen";

    loeschenButton.onclick = function() {
        liste.removeChild(neuesElement);
        aufgabenZaehler--;
        zaehlerAktualisieren();
    };

    neuesElement.appendChild(loeschenButton);
    liste.appendChild(neuesElement);

    eingabe.value = "";
    aufgabenZaehler++;
    zaehlerAktualisieren();
}

// Zähler aktualisieren
function zaehlerAktualisieren() {
    document.getElementById("anzahl").textContent = aufgabenZaehler;
}

// Enter-Taste für Hinzufügen
document.addEventListener("DOMContentLoaded", function() {
    var eingabe = document.getElementById("neueAufgabe");
    eingabe.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            aufgabeHinzufuegen();
        }
    });
});

