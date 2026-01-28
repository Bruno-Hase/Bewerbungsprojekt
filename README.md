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

##  Was zeigt dieses Projekt?

### HTML-Grundlagen:
 Grundstruktur (`<html>`, `<head>`, `<body>`)
 Überschriften (`<h1>`)
 Eingabefeld (`<input>`)
 Button (`<button>`)
 Liste (`<ul>`, `<li>`)
 IDs (`id="..."`)

### CSS-Grundlagen:
 Farben einstellen
 Abstände (padding, margin)
 Layout (flexbox)
 Hover-Effekte (`:hover`)
 Border und Schatten

### JavaScript-Grundlagen:
 **Variablen** - `var`, `let`
 **Funktionen** - `function name() { ... }`
 **If-Bedingung** - `if (text == "") { ... }`
 **DOM zugreifen** - `document.getElementById()`
 **Elemente erstellen** - `document.createElement()`
 **Text setzen** - `.textContent = "..."`
 **Elemente hinzufügen** - `.appendChild()`
 **Elemente löschen** - `.removeChild()`
 **Event-Listener** - `.addEventListener()` **Rechnen** - `zahl + 1`, `zahl - 1`

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



