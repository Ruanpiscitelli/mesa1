import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Habilitar compressão gzip/deflate
app.use(compression());

// Servir arquivos estáticos com cache
app.use(express.static(path.join(__dirname, '../dist'), {
  maxAge: '30d',
  immutable: true
}));

// Todas as outras rotas retornam o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 