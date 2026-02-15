# Skill: Browser Automation

## Trigger
User needs to interact with websites — navigate, fill forms, click, screenshot, scrape.

## Commands

```bash
# Navigate
agent-browser navigate "https://example.com"

# Screenshot
agent-browser screenshot

# Get page elements (compact refs)
agent-browser snapshot

# Click element by ref
agent-browser click ref:btn-submit

# Fill input
agent-browser fill ref:input-email "user@example.com"

# Extract text
agent-browser text ref:main-content

# Wait for element
agent-browser wait ref:loading-spinner --hidden
```

## Patterns

### Login Flow
```bash
agent-browser navigate "https://app.example.com/login"
agent-browser fill ref:email "user@example.com"
agent-browser fill ref:password "secret"
agent-browser click ref:submit
agent-browser wait ref:dashboard
agent-browser screenshot
```

### Data Extraction
```bash
agent-browser navigate "https://example.com/data"
agent-browser snapshot  # Get element refs
agent-browser text ref:table-body  # Extract content
```

## Guidelines
- Always take a screenshot after key actions
- Use snapshot refs (compact) over CSS selectors
- Handle auth with session persistence
- Rate limit requests to avoid blocks
