# TinyClaw 🦞

**Multi-agent, Multi-team, Multi-channel, 24/7 AI assistant**

## What is TinyClaw?

TinyClaw runs multiple teams of AI agents that collaborate simultaneously with isolated workspaces. Agents communicate via Discord, Telegram, and WhatsApp.

## Architecture

```
┌─────────────────────────────────────────┐
│           Message Channels               │
│   (Discord, Telegram, WhatsApp)          │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│          File-based Queue                │
│  incoming/ → processing/ → outgoing/    │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│       Parallel Agent Processing          │
│  coder │ writer │ reviewer │ designer   │
│  (each with isolated workspace)          │
└─────────────────────────────────────────┘
```

## Key Features

- **Multi-agent** — isolated agents with specialized roles
- **Multi-team** — agents hand off work via chain execution
- **Multi-channel** — Discord, WhatsApp, Telegram simultaneously
- **Parallel processing** — agents work concurrently
- **Persistent sessions** — context across restarts
- **Heartbeat monitoring** — proactive check-ins
- **File exchange** — send/receive files across channels
- **Scheduled tasks** — cron-based automation

## Quick Start

```bash
# Install
curl -fsSL https://raw.githubusercontent.com/jlia0/tinyclaw/main/scripts/remote-install.sh | bash

# Start (runs setup wizard)
tinyclaw start

# Send a message
tinyclaw send "@dev fix the auth bug"

# Watch team work
tinyclaw team visualize dev
```

## Links

- GitHub: https://github.com/jlia0/tinyclaw
- Discord: https://discord.gg/jH6AcEChuD
