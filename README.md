# API Movies 🎬

API de filmes usando Node.js, TypeScript, Express e Prisma.

---

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL

---

## 📦 Instalação

npm install

---

## ⚙️ Configuração do banco

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/movies_db"

---

## 🧱 Rodar migrations (Prisma)

npx prisma migrate dev

---

## ▶️ Rodar o projeto

modo desenvolvimento:

npm run dev

modo produção:

npm start

---

## 📌 Rotas

GET /movies
Lista todos os filmes

POST /movies
Cria um novo filme

Exemplo de body:

{
  "title": "Matrix",
  "description": "Um hacker descobre a verdade sobre a realidade",
  "releaseYear": 1999
}

---

## 🛠️ Scripts úteis

npx prisma studio

npx prisma generate

---

## 📁 Estrutura do projeto

src/
 ├─ controllers/
 ├─ repositories/
 ├─ routes/
 ├─ server.ts

---

## 👨‍💻 Autor

Projeto criado para estudo de backend com Prisma + Express.