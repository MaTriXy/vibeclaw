# Skill: Scheduling

## Trigger
User wants to schedule recurring tasks, reminders, or periodic agent work.

## Creating Tasks

Write a JSON message to the queue:

```json
{
  "id": "unique-id",
  "channel": "schedule",
  "sender_id": "cron",
  "sender_name": "Scheduler",
  "agent_id": "coder",
  "message": "Run the daily test suite and report results",
  "timestamp": "2026-02-15T09:00:00Z"
}
```

## Cron Patterns

| Pattern | Description |
|---------|-------------|
| `*/5 * * * *` | Every 5 minutes |
| `0 * * * *` | Every hour |
| `0 9 * * *` | Daily at 9am |
| `0 9 * * 1-5` | Weekdays at 9am |
| `0 0 * * 0` | Weekly on Sunday |
| `0 0 1 * *` | Monthly |

## Examples

### Daily standup
```
Schedule: 0 9 * * 1-5
Agent: coder
Message: "Run standup: check git activity, list open PRs, report blockers"
```

### Hourly monitoring
```
Schedule: 0 * * * *
Agent: reviewer
Message: "Check error logs and alert if error rate > 1%"
```

## Guidelines
- Keep scheduled messages actionable
- Include success/failure criteria
- Use heartbeat for simple periodic checks
- Use cron for complex scheduling
