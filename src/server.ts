import express from 'express';
import compression from 'compression';
import expressStaticGzip from 'express-static-gzip';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de compressão
app.use(compression());

// Cache headers
const cacheTime = 86400000 * 30; // 30 dias
app.use((req, res, next) => {
  if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|ico|woff2)$/)) {
    res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  }
  next();
});

// Servir arquivos estáticos com gzip
app.use('/', expressStaticGzip(path.join(__dirname, '../dist'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  serveStatic: {
    maxAge: cacheTime
  }
}));

// Fallback para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 