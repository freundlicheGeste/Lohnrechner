# 💰 Lohn- & Netto-Rechner BW (2026)

Ein moderner, schlanker Brutto-Netto-Rechner, speziell optimiert für Baden-Württemberg. Diese Web-App hilft dabei, verschiedene Jobangebote oder Gehaltsstufen direkt miteinander zu vergleichen.

## 🚀 Features

- **Präzise Berechnung:** Kalkulation auf Basis der Steuerdaten 2026 (Steuerklasse 4, BW).
- **Vergleichs-Modus:** Wähle zwei gespeicherte Berechnungen aus, um sofort die Differenz im Netto und Brutto zu sehen.
- **PWA Ready:** Kann als App auf dem Smartphone installiert werden (Offline-fähig dank Service Worker).
- **Dark Mode:** Automatische Unterstützung für helles und dunkles Design.
- **Echtzeit-Analyse:** Sofortige Aktualisierung aller Werte (Brutto, Netto, SV-Beiträge) während der Eingabe.
- **Detaillierte Aufschlüsselung:** Transparente Darstellung der Abzüge für Renten-, Kranken-, Pflege- und Arbeitslosenversicherung sowie Lohnsteuer.
- **Smartphone-Optimiert:** - Automatisches Markieren der Felder bei Fokus.
  - Schließen der Tastatur bei "Enter".
  - Clean Design ohne störende Up/Down-Pfeile.

## 🛠 Technische Details
- **Offline-First:** Dank Service Worker voll einsatzfähig ohne Internetverbindung.
- **Datenschutz:** 100% lokale Berechnung im Browser. Es werden keine Daten an Server übertragen.
- **Installation:** Kann direkt über den Browser ("Zum Startbildschirm hinzufügen") als App installiert werden.

## 🛡️ Sicherheits- & Komfortfeatures

Um die Datenqualität und Nutzererfahrung hoch zu halten, wurden folgende Mechanismen integriert:

* **Duplicate Check:** Die App verhindert das mehrfache Speichern identischer Werte. So bleibt die Gehaltsliste übersichtlich und frei von Dubletten.
* **Intelligenter Import:** Beim Importieren von Backups werden nur Einträge hinzugefügt, die weder über ihre ID noch über ihre exakten Werte bereits existieren.
* **Fokussierter Vergleich:** Es können maximal **zwei Einträge** gleichzeitig markiert werden. Dies stellt sicher, dass der Vergleichsbanner immer präzise und lesbar bleibt.
* **Sitzungsbasiertes Löschen:** Beim Löschen mehrerer Einträge kann die Bestätigung für die aktuelle Sitzung deaktiviert werden, um schneller aufräumen zu können. Nach einem Neuladen ist der Schutz automatisch wieder aktiv.
* **Reine Datenhaltung:** In der Datenbank werden nur numerische Rohwerte gespeichert, während die Formatierung (Währungen etc.) erst dynamisch bei der Anzeige erfolgt.

## 🛠️ Installation & Nutzung

1. Lade alle Dateien (`index.html`, `manifest.json`, `sw.js`, `lohnrechner.png`) auf deinen Webspace oder GitHub Pages hoch.
2. Öffne die URL deiner GitHub Pages Seite im mobilen Browser.
3. Wähle im Browsermenü (drei Punkte) den Punkt **"App installieren"** oder **"Zum Startbildschirm hinzufügen"**.
4. Nutze den Rechner wie eine native App direkt von deinem Homescreen.

## 💾 Daten-Backup
Über die Export- und Import-Buttons in der Listenansicht können die gespeicherten Vergleiche jederzeit als `.json` Datei gesichert und auf anderen Geräten wiederhergestellt werden.

---

## ⚖️ Disclaimer
Dieser Rechner dient der allgemeinen Information und stellt eine Simulation dar. Trotz sorgfältiger Programmierung (Basis 2026) können Rundungsdifferenzen zu offiziellen Lohnabrechnungen auftreten. Er ersetzt keine steuerliche Beratung.

*Hinweis: Dies ist ein privates Projekt. Alle Berechnungen sind ohne Gewähr und dienen der groben Orientierung.*
