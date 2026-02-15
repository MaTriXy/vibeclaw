# API Design — Quick Reference

## REST Conventions

```
GET    /api/users          → List users
GET    /api/users/:id      → Get user
POST   /api/users          → Create user
PUT    /api/users/:id      → Replace user
PATCH  /api/users/:id      → Update user fields
DELETE /api/users/:id      → Delete user
```

### Response Format
```json
// Success
{ "data": { "id": "1", "name": "Alice" }, "meta": { "requestId": "abc" } }

// List
{ "data": [...], "meta": { "total": 100, "page": 1, "limit": 20 } }

// Error
{ "error": { "code": "NOT_FOUND", "message": "User not found", "details": {} } }
```

### Status Codes
| Code | Use |
|------|-----|
| 200 | Success |
| 201 | Created |
| 204 | No Content (delete) |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 429 | Rate Limited |
| 500 | Server Error |

## WebSocket Patterns

```js
// JSON-RPC style
{ "type": "req", "id": "1", "method": "subscribe", "params": { "channel": "updates" } }
{ "type": "res", "id": "1", "ok": true, "payload": {} }
{ "type": "event", "event": "update", "payload": { "item": {...} } }
```

## Authentication

### JWT
```
Authorization: Bearer eyJhbGciOiJIUzI1NiI...
```

### API Key
```
X-API-Key: sk_live_abc123
# or
Authorization: Bearer sk_live_abc123
```

## Rate Limiting Headers
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000
Retry-After: 60
```
