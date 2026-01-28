// ==========================================
// EINFACHE TO-DO LISTE - NUR GRUNDLAGEN!
// ==========================================

// Zähler für die Anzahl der Aufgaben
let aufgabenZaehler = 0;

// Funktion: Neue Aufgabe hinzufügen
function aufgabeHinzufuegen() {
    // Hole das Eingabefeld
    var eingabe = document.getElementById("neueAufgabe");
    
    // Hole den eingegebenen Text
    var text = eingabe.value;
    
    // Prüfe ob etwas eingegeben wurde
    if (text == "") {
        alert("Bitte gib eine Aufgabe ein!");
        return;
    }
    
    // Hole die Liste
    var liste = document.getElementById("liste");
    
    // Erstelle ein neues Listen-Element
    var neuesElement = document.createElement("li");
    
    // Setze den Text
    neuesElement.textContent = text;
    
    // Erstelle einen Löschen-Button
    var loeschenButton = document.createElement("button");
    loeschenButton.textContent = "Löschen";
    
    // Was passiert beim Klick auf Löschen?
    loeschenButton.onclick = function() {
        // Lösche das Element
        liste.removeChild(neuesElement);
        
        // Zähler verringern
        aufgabenZaehler = aufgabenZaehler - 1;
        
        // Zähler aktualisieren
        zaehlerAktualisieren();
    };
    
    // Füge den Button zum Listen-Element hinzu
    neuesElement.appendChild(loeschenButton);
    
    // Füge das Listen-Element zur Liste hinzu
    liste.appendChild(neuesElement);
    
    // Leere das Eingabefeld
    eingabe.value = "";
    
    // Zähler erhöhen
    aufgabenZaehler = aufgabenZaehler + 1;
    
    // Zähler aktualisieren
    zaehlerAktualisieren();
}

// Funktion: Zähler aktualisieren
function zaehlerAktualisieren() {
    var zaehlerElement = document.getElementById("anzahl");
    zaehlerElement.textContent = aufgabenZaehler;
}

// Wenn Enter-Taste gedrückt wird
document.addEventListener("DOMContentLoaded", function() {
    var eingabe = document.getElementById("neueAufgabe");
    
    eingabe.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            aufgabeHinzufuegen();
        }
    });
});
