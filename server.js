const express = require("express");
const app = express();

// Autorise les requêtes depuis n'importe où (pour simplifier)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Répond à l’URL "/api"
app.get("/api", (req, res) => {
    res.json({ message: "Bonjour depuis le serveur ! 🚀" });
});

// Démarrer le serveur
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
