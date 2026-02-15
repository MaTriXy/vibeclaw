# Team: Dev 🚀

## Configuration
- **ID**: dev
- **Name**: Development Team
- **Leader**: coder
- **Agents**: coder, reviewer, writer

## How It Works

```
User: "@dev fix the auth bug"
         │
         ▼
   ┌─────────────┐
   │  @coder      │  ← Leader receives first
   │  "Fixed bug" │
   └──────┬──────┘
          │ [@reviewer: please review]
          ▼
   ┌─────────────┐
   │  @reviewer   │
   │  "LGTM!"    │
   └──────┬──────┘
          │ [@writer: document the changes]
          ▼
   ┌─────────────┐
   │  @writer     │
   │  "Docs done" │
   └─────────────┘
         │
         ▼
   Aggregated response → User
```

## Routing

| Message | Routed To |
|---------|-----------|
| `@dev fix bug` | coder (leader) |
| `@coder fix bug` | coder (direct) |
| `@reviewer check PR` | reviewer (direct) |

## Guidelines

- Leader receives team-addressed messages first
- Agents can chain to teammates via `[@agent: msg]`
- Parallel fan-out supported for independent tasks
- All branches resolve before aggregated response
