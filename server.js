import http from 'node:http';
import { salutation } from './app.js';

// Version de l'appli : le serveur la recevra au déploiement (numéro du commit)
const version = process.env.APP_VERSION || 'dev';

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(`${salutation('Rahim')}\nVersion déployée : ${version}\n`);
}).listen(3000, () => console.log('Serveur prêt sur http://localhost:3000'));