Autor: Bruno Hase
Version: 2.0
letzte Änderung: 28.01.2026


## Was kann die App?

-  Aufgaben hinzufügen
-  Aufgaben löschen
-  Anzahl der Aufgaben zählen

##  Dateien

```
simple-todo/
├── index.html    # HTML-Struktur
├── style.css     # Design
└── script.js     # JavaScript
```
---

## Code erklärt

### Wie funktioniert das Hinzufügen?

```javascript
function aufgabeHinzufuegen() {
    // 1. Hole das Eingabefeld
    var eingabe = document.getElementById("neueAufgabe");
    
    // 2. Hole den Text aus dem Feld
    var text = eingabe.value;
    
    // 3. Prüfe ob etwas eingegeben wurde
    if (text == "") {
        alert("Bitte gib eine Aufgabe ein!");
        return;
    }
    
    // 4. Erstelle ein neues Listen-Element
    var neuesElement = document.createElement("li");
    neuesElement.textContent = text;
    
    // 5. Füge es zur Liste hinzu
    var liste = document.getElementById("liste");
    liste.appendChild(neuesElement);
}



