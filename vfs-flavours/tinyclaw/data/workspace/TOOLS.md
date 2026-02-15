# TOOLS.md — TinyClaw Tools

## Agent Communication

| Tool | Description |
|------|-------------|
| `[@agent: msg]` | Send message to specific agent |
| `[@a,b,c: msg]` | Fan-out same message to multiple agents |
| `[@agent: msg] [@other: msg]` | Different messages to different agents |

## File System

| Tool | Description |
|------|-------------|
| `fs.read(path)` | Read file contents |
| `fs.write(path, content)` | Write/create file |
| `fs.list(dir)` | List directory |
| `fs.rm(path)` | Delete file/dir |

## Channel Messaging

| Tool | Description |
|------|-------------|
| `[send_file: /path]` | Send file to user's channel |
| `chat.send(msg)` | Send proactive message |

## Scheduling

| Tool | Description |
|------|-------------|
| `schedule.create(cron, agent, msg)` | Create scheduled task |
| `schedule.list()` | List scheduled tasks |
| `schedule.delete(id)` | Remove scheduled task |

## Browser Automation

| Tool | Description |
|------|-------------|
| `browser.navigate(url)` | Open URL |
| `browser.screenshot()` | Capture screenshot |
| `browser.click(ref)` | Click element |
| `browser.fill(ref, text)` | Fill input |
| `browser.snapshot()` | Get page elements |

## Image Generation

| Tool | Description |
|------|-------------|
| `imagegen.create(prompt)` | Generate image |
| `imagegen.edit(path, prompt)` | Edit existing image |

## Notes

- Agent messages are processed via file-based queue
- All channels (Discord/Telegram/WhatsApp) share agent conversations
- File exchange via `.tinyclaw/files/` directory
