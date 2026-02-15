# JavaScript/TypeScript Patterns — Quick Reference

## Modern JS

### Destructuring
```js
const { name, age = 25 } = user;
const [first, ...rest] = items;
const { data: { users } } = await fetchAPI();
```

### Optional Chaining & Nullish Coalescing
```js
const name = user?.profile?.name ?? 'Anonymous';
const count = response?.data?.items?.length ?? 0;
```

### Array Methods
```js
// Transform
const names = users.map(u => u.name);
const adults = users.filter(u => u.age >= 18);
const total = prices.reduce((sum, p) => sum + p, 0);

// Search
const found = users.find(u => u.id === id);
const exists = users.some(u => u.admin);
const allValid = items.every(i => i.valid);

// Flatten
const all = nested.flat(Infinity);
const mapped = items.flatMap(i => i.tags);
```

### Async Patterns
```js
// Parallel
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);

// Race with timeout
const result = await Promise.race([
  fetchData(),
  new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 5000))
]);

// Sequential with reduce
const results = [];
for (const item of items) {
  results.push(await process(item));
}

// Error handling
try {
  const data = await fetch(url).then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  });
} catch (err) {
  console.error('Fetch failed:', err.message);
}
```

### Classes
```js
class EventEmitter {
  #listeners = new Map();
  
  on(event, fn) {
    const fns = this.#listeners.get(event) ?? [];
    fns.push(fn);
    this.#listeners.set(event, fns);
    return () => fns.splice(fns.indexOf(fn), 1); // unsubscribe
  }
  
  emit(event, ...args) {
    for (const fn of this.#listeners.get(event) ?? []) fn(...args);
  }
}
```

## TypeScript

### Utility Types
```ts
Partial<T>       // All props optional
Required<T>      // All props required
Pick<T, K>       // Select specific props
Omit<T, K>       // Remove specific props
Record<K, V>     // Key-value map
ReturnType<F>    // Function return type
Awaited<T>       // Unwrap Promise
```

### Patterns
```ts
// Discriminated unions
type Result<T> = { ok: true; data: T } | { ok: false; error: string };

// Type guards
function isUser(x: unknown): x is User {
  return typeof x === 'object' && x !== null && 'id' in x;
}

// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Mapped types
type Readonly<T> = { readonly [P in keyof T]: T[P] };
```

## Node.js

### File System
```js
import { readFile, writeFile, readdir, mkdir } from 'fs/promises';

const content = await readFile('file.txt', 'utf8');
await writeFile('output.json', JSON.stringify(data, null, 2));
await mkdir('dir/sub', { recursive: true });
```

### HTTP Server
```js
import { createServer } from 'http';

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/api/data' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Listening on :3000'));
```

### WebSocket
```js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = JSON.parse(data);
    ws.send(JSON.stringify({ echo: msg }));
  });
});
```
