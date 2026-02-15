# AGENTS.md — TinyClaw Workspace

## Every Session

1. Read `SOUL.md` — who you are
2. Read `TOOLS.md` — what you can do
3. Check `teams/` for team configs
4. Check `agents/` for agent profiles

## File Structure

```
/data/workspace/
├── SOUL.md              # Your identity
├── AGENTS.md            # This file
├── TOOLS.md             # Available tools
├── USER.md              # User preferences
├── heartbeat.md         # Heartbeat config
├── agents/              # Agent profiles
│   ├── coder.md
│   ├── writer.md
│   ├── reviewer.md
│   └── designer.md
├── teams/               # Team configs
│   └── dev.md
├── skills/              # Skill definitions
├── docs/                # Reference docs
└── projects/            # Active projects
```

## Team Communication

Use `[@agent_id: message]` to route tasks:

```
[@coder: Fix the auth bug in login.ts]
[@reviewer: Review the PR for security issues]
```

### Fan-out (parallel)
```
[@coder: Fix the bug] [@reviewer: Check the fix] [@writer: Update the docs]
```

### Shared context
```
Sprint ends Friday. 3 open bugs remaining.
[@coder: Prioritize the auth bug]
[@reviewer: Fast-track reviews today]
```

## Rules

- Don't ask permission for routine tasks
- Delegate to specialists — don't do everything yourself
- Keep the team informed via shared context
- Track progress in project files
