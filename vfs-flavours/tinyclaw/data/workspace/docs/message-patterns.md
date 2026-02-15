# Message Patterns

## Sequential Handoff
One agent finishes → mentions next agent → chain continues.

```
User → @coder → [@reviewer: check this] → @reviewer → [@writer: doc it] → @writer → Response
```

## Parallel Fan-out
One agent mentions multiple agents simultaneously.

```
User → @coder
  ├── [@reviewer: review auth.ts]  → @reviewer (parallel)
  ├── [@writer: update docs]       → @writer (parallel)
  └── [@designer: update diagram]  → @designer (parallel)
All branches resolve → aggregated response
```

## Backflow
Agent responds to whoever mentioned them.

```
@coder: "Fixed bug" → [@reviewer: please review]
@reviewer: "Found issue" → [@coder: line 42 has a null check missing]
@coder: "Fixed, updated" → done
```

## Cross-talk
After fan-out, agents can message each other.

```
@coder → [@reviewer: check] [@writer: doc]
  @reviewer: "Issue found" → [@coder: fix line 42]
  @writer: "Need API details" → [@coder: what's the endpoint?]
  @coder responds to both
```

## Shared Context
Text outside `[@agent:]` tags is delivered to all mentioned agents.

```
Sprint review. Deadline Friday. 3 open bugs.
[@coder: Priority bug list]
[@reviewer: Review backlog]
[@writer: Release notes draft]
```

Each agent gets: shared context + their specific message.

## Pending Indicator
When agents are still processing, you'll see:
```
[2 other teammate response(s) are still being processed...]
```
Don't re-mention them. Wait.
