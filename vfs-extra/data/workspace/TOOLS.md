# TOOLS.md — Available Tools

## File System

| Tool | Description |
|------|-------------|
| `fs.read(path)` | Read file contents |
| `fs.write(path, content)` | Write/create file |
| `fs.list(dir)` | List directory contents |
| `fs.mkdir(path)` | Create directory |
| `fs.rm(path)` | Delete file or directory |
| `fs.exists(path)` | Check if path exists |
| `fs.stat(path)` | Get file metadata |

## Code Execution

| Tool | Description |
|------|-------------|
| `exec(cmd)` | Execute shell command |
| `exec.node(code)` | Run Node.js code |
| `exec.python(code)` | Run Python code (if available) |

## Communication

| Tool | Description |
|------|-------------|
| `chat.send(msg)` | Send message to user |
| `chat.ask(question)` | Ask user a question and wait |

## Workspace

| Tool | Description |
|------|-------------|
| `workspace.save()` | Persist workspace state |
| `workspace.load()` | Load saved state |
| `workspace.export()` | Export as downloadable archive |

## Notes

- All file paths are relative to `/data/workspace/` unless absolute
- Execution is sandboxed — no network, no system access
- File writes are in-memory only (lost on page refresh unless saved)
