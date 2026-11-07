# Streamnet Vercel Streaming Backend API

A serverless streaming backend for Streamnet (Web & Android TV).

## API Endpoints

- `GET /api/stream?tmdb=693134&type=movie`: Resolves multi-server video streams for movies.
- `GET /api/stream?tmdb=94605&type=tv&season=1&episode=1`: Resolves multi-server video streams for TV series and anime episodes.
- `GET /api/hls?url=URL_HERE`: Proxies HLS streams with CORS headers.

## Deployment to Vercel

### Option 1: Using Vercel CLI (1 Command)
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub
1. Push this `vercel-backend` directory to a new GitHub repository.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository and click **Deploy**.
4. Copy your new Vercel deployment URL (e.g. `https://streamnet-backend.vercel.app`).
