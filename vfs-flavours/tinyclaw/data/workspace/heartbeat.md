# Heartbeat

Check for:

1. Pending tasks in the queue
2. Agent errors or stuck processes
3. Unread messages across channels
4. Scheduled task results

Take action if needed. Report status.

## Interval

Default: every 60 minutes

## Actions

- If tasks pending > 5 minutes: escalate
- If agent error: restart and notify
- If unread messages: process or acknowledge
- If scheduled task failed: retry once, then alert
