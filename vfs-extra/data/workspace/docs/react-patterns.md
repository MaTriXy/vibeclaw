# React Patterns — Quick Reference

## Components

### Function Component
```tsx
interface Props {
  title: string;
  count?: number;
  children: React.ReactNode;
  onClick: (id: string) => void;
}

export function Card({ title, count = 0, children, onClick }: Props) {
  return (
    <div className="card" onClick={() => onClick(title)}>
      <h2>{title} ({count})</h2>
      {children}
    </div>
  );
}
```

### Hooks

```tsx
// State
const [items, setItems] = useState<Item[]>([]);
const [query, setQuery] = useState('');

// Derived state (no useState needed)
const filtered = useMemo(() => 
  items.filter(i => i.name.includes(query)), 
  [items, query]
);

// Effects
useEffect(() => {
  const controller = new AbortController();
  fetchData(controller.signal).then(setItems);
  return () => controller.abort(); // cleanup
}, []);

// Refs
const inputRef = useRef<HTMLInputElement>(null);
useEffect(() => inputRef.current?.focus(), []);

// Callbacks (stable reference)
const handleClick = useCallback((id: string) => {
  setItems(prev => prev.filter(i => i.id !== id));
}, []);
```

### Custom Hooks
```tsx
function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try { return JSON.parse(localStorage.getItem(key) ?? '') }
    catch { return initial }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(url, { signal: ctrl.signal })
      .then(r => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [url]);

  return { data, error, loading };
}
```

### Patterns

```tsx
// Compound components
<Select value={v} onChange={setV}>
  <Select.Option value="a">Alpha</Select.Option>
  <Select.Option value="b">Beta</Select.Option>
</Select>

// Render props
<DataProvider render={(data) => <List items={data} />} />

// HOC
const withAuth = (Component) => (props) => {
  const user = useAuth();
  if (!user) return <Redirect to="/login" />;
  return <Component {...props} user={user} />;
};

// Context
const ThemeContext = createContext<Theme>('light');
const useTheme = () => useContext(ThemeContext);
```

## Next.js

### App Router
```tsx
// app/page.tsx — Server Component (default)
export default async function Page() {
  const data = await db.query('SELECT * FROM posts');
  return <PostList posts={data} />;
}

// app/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html><body>{children}</body></html>;
}

// Client component
'use client';
export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// Server Actions
async function createPost(formData: FormData) {
  'use server';
  await db.insert({ title: formData.get('title') });
  revalidatePath('/posts');
}
```
