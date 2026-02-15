# OpenClaw — Quick Reference

## What is OpenClaw?

OpenClaw is an AI agent platform with a gateway architecture. Agents connect to a gateway server which handles sessions, chat, tool execution, and multi-agent coordination.

## Gateway Protocol

WebSocket JSON-RPC over `ws://host:port`

### Connection Flow
1. Client opens WebSocket
2. Server sends `connect.challenge` event with nonce
3. Client signs nonce with Ed25519 and sends `connect` request
4. Server responds with hello payload

### Message Format
```json
// Request
{ "type": "req", "id": "1", "method": "status", "params": {} }

// Response  
{ "type": "res", "id": "1", "ok": true, "payload": { ... } }

// Event
{ "type": "event", "event": "chat", "payload": { "state": "delta", "message": { "content": "..." } } }
```

### Key Methods
| Method | Description |
|--------|-------------|
| `connect` | Authenticate and connect |
| `status` | Get gateway status |
| `sessions.list` | List all sessions |
| `chat.send` | Send a chat message |
| `chat.history` | Get session chat history |
| `agents.list` | List agents |
| `agent.identity.get` | Get agent identity |
| `agents.files.list` | List agent files |
| `agents.files.get` | Read agent file |
| `skills.status` | List skills and status |
| `cron.list` | List cron jobs |
| `logs.tail` | Get recent logs |
| `system-presence` | List connected clients |
| `usage.cost` | Get usage/cost metrics |

### Chat Streaming
Chat responses stream via events:
```
state: "delta"  → partial content
state: "final"  → complete
state: "error"  → failed
state: "aborted" → cancelled
```

## Agent Workspace

Each agent has a workspace directory:
```
/data/workspace/
├── SOUL.md       # Agent personality & role
├── AGENTS.md     # Workspace instructions
├── USER.md       # User preferences
├── TOOLS.md      # Available tools
├── MEMORY.md     # Persistent memory
├── HEARTBEAT.md  # Health/status
└── shared/       # Shared across agents
    ├── WORKING.md
    └── WORKFLOW.md
```

## Multi-Agent

OpenClaw supports agent squads:
- **Lead agent** — coordinates the team
- **Specialist agents** — handle specific domains
- Communication via `clawe` CLI
- Shared workspace for collaboration
