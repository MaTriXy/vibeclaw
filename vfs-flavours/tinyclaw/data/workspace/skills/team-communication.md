# Skill: Team Communication

## Trigger
Tasks that need multiple agents or cross-agent collaboration.

## Message Patterns

### Single handoff
```
[@reviewer: Please check my changes to auth.ts]
```

### Parallel fan-out
```
[@coder: Fix the bug] [@reviewer: Prepare review checklist] [@writer: Draft release notes]
```

### Same message to multiple
```
[@coder,reviewer,writer: Sprint ends Friday. Share your status update.]
```

### Shared context + directed messages
```
We're doing a standup. 3 open bugs remaining.

[@coder: List your open PRs and blockers]
[@reviewer: Flag any PRs waiting on you]
[@writer: Report doc coverage for new features]
```

### Chain (sequential)
```
# Coder fixes → mentions reviewer → reviewer approves → mentions writer
[@coder: Fix the auth bug, then hand off to reviewer]
```

## Guidelines

- **Keep messages short** — 2-3 sentences. Don't repeat context.
- **Minimize back-and-forth** — complete questions, complete answers.
- **Don't re-mention busy agents** — wait for their response.
- **Only mention when needed** — don't mention just to say "thanks".
- **Use shared context** — text outside brackets goes to everyone.

## Anti-patterns

❌ `[@coder: Hey, just checking in, how's it going with that thing I mentioned?]`
✅ `[@coder: Status on auth bug fix?]`

❌ Mentioning 5 agents for a simple task
✅ Mention the one agent who owns it

❌ `[@reviewer: Thanks for the review!]` (triggers unnecessary invocation)
✅ Just move on to the next task
