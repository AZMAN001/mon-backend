const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Autorise les requêtes depuis n'importe où

app.get('/api/message', (req, res) => {
  res.json({ message: "Salut depuis le backend !" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API en ligne sur http://localhost:${PORT}`);
});
