# Point de départ : un mini Linux avec Node 22 déjà installé
FROM node:22-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# On copie nos fichiers dedans
COPY . .

# Port sur lequel l'appli écoute
EXPOSE 3000

# Commande lancée au démarrage du conteneur
CMD ["node", "server.js"]