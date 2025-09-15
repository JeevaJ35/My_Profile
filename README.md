# Jeeva Advanced Portfolio (React + Node)

A production-ready developer portfolio with:
- **React + Vite + Tailwind + Framer Motion**
- **Node/Express API** for contact form (Nodemailer, rate-limiting, Helmet, CORS)
- **Dark/Light** theme toggle (saved in localStorage)
- **AI Widget** (local rule-based Q&A)
- CV embedded as **/resume.pdf** (already included)

## 1) Setup

### Client
```bash
cd client
npm install
npm run dev
```

### Server
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your SMTP credentials and allowed CORS origins
npm run dev
```

### Connect client to server
In `client`, create `.env` (no quotes):
```
VITE_API_URL=http://localhost:8080
```

## 2) Build & Deploy
- **Client**: Deploy `client` to Vercel/Netlify.
- **Server**: Deploy `server` to Render/Railway/EC2. Set env vars from `.env.example`.
- Update `VITE_API_URL` with your server URL and rebuild the client.

## 3) Customize Content
Edit `client/src/data/profile.json` to update name, links, highlights, experience, projects and skills.
Replace `client/public/resume.pdf` if you have a newer CV.

## 4) Notes
- Keep the server secret keys in environment variables.
- To change styling, tweak `tailwind.config.js` and `src/index.css`.
