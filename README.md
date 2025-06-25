# 📊 Trackfluence

> Suivi multi-réseaux pour créateurs et PME – centralisez vos statistiques, analysez vos concurrents.

## 📁 Structure du projet (Monorepo)

```
trackfluence/
├── frontend/       # Application React ou Next.js
├── backend/        # API Node.js avec Express
├── .gitignore
├── README.md
└── package.json    # Pour la gestion de scripts globaux
```

---

## 🚀 Installation

### 1. Cloner le repo

```bash
git clone https://github.com/ton-utilisateur/trackfluence.git
cd trackfluence
```

### 2. Lancer le backend (Node.js + Express)

```bash
cd backend
npm install
npm run dev
```

Par défaut, le backend tourne sur `http://localhost:5000`

### 3. Lancer le frontend (React)

```bash
cd ../frontend
npm install
npm start
```

Par défaut, le frontend tourne sur `http://localhost:3000`

---

## ⚙️ Technologies

### Frontend

* React (ou Next.js)
* Tailwind CSS ou Shadcn/UI
* Chart.js ou Recharts

### Backend

* Node.js + Express
* MongoDB (via Mongoose) ou PostgreSQL
* JWT pour l'authentification

---

## 🔑 .env exemples

### Backend (`backend/.env`)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trackfluence
JWT_SECRET=supersecretkey
YOUTUBE_API_KEY=ta_cle_api
```

### Frontend (`frontend/.env`)

```
REACT_APP_API_URL=http://localhost:5000
```

---

## ✅ TODO (MVP)

* [ ] Authentification utilisateur
* [ ] Connexion API YouTube & Instagram
* [ ] Dashboard stats personnelles
* [ ] Ajout manuel de concurrents
* [ ] Affichage graphique (followers, vues, top posts)
* [ ] Déploiement (Vercel + Render ou Railway)

---

## ✨ Nom du projet : `Trackfluence`

> Nom inspiré de "track" (suivre) et "influence" (créateurs et marques).
