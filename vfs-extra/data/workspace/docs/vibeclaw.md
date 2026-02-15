# Vibeclaw

**vibeclaw.dev** — Run OpenClaw in your browser.

## What is Vibeclaw?

Vibeclaw is a browser-based sandbox and gateway dashboard for OpenClaw. It lets you:

1. **Boot a sandbox** — Run an OpenClaw agent entirely in the browser using almostnode containers
2. **Connect to live gateways** — View and interact with real OpenClaw instances via WebSocket
3. **Chat with AI** — Free models via OpenRouter, no API key needed

## Architecture

```
┌─────────────────────────────────────┐
│  Browser                            │
│  ┌─────────────┐  ┌──────────────┐  │
│  │  almostnode  │  │  Chat UI     │  │
│  │  container   │←→│  (OpenRouter)│  │
│  │  (VFS)       │  │              │  │
│  └─────────────┘  └──────────────┘  │
│         ↕                            │
│  ┌─────────────────────────────────┐ │
│  │  Gateway Dashboard              │ │
│  │  (BroadcastChannel bridge)      │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

## Tech Stack

- **almostnode** — In-browser Node.js-like container runtime
- **OpenRouter** — AI model proxy (server-side key, free models only)
- **Vite** — Build tooling
- **Netlify** — Hosting + serverless functions
- **Fly.io** — WebSocket relay server

## Key Files

- `/openclaw/gateway.mjs` — OpenClaw gateway bundle
- `/data/workspace/` — Agent workspace (SOUL, TOOLS, USER configs)
- `/data/workspace/skills/` — Skill definitions
- `/clawe/cli.mjs` — Clawe CLI tool

## Links

- Site: https://vibeclaw.dev
- GitHub: https://github.com/jasonkneen/vibeclaw
- OpenClaw: https://openclaw.ai
- almostnode: https://github.com/nicholasgriffintn/almostnode
