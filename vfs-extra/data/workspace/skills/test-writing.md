# Skill: Write Tests

## Trigger
User asks for tests, wants to add testing, or shares code that needs tests.

## Process
1. Identify what to test (functions, components, APIs)
2. Choose test framework (vitest, jest, node:test)
3. Write tests covering: happy path, edge cases, errors
4. Include setup/teardown if needed

## Test Structure
```typescript
import { describe, it, expect } from 'vitest';

describe('functionName', () => {
  it('should handle the basic case', () => {
    expect(fn('input')).toBe('expected');
  });

  it('should handle edge cases', () => {
    expect(fn('')).toBe('default');
    expect(fn(null)).toThrow();
  });

  it('should handle errors gracefully', () => {
    expect(() => fn(invalid)).toThrow('specific error');
  });
});
```

## Coverage Targets
- All exported functions
- Happy path (normal inputs)
- Edge cases (empty, null, undefined, boundary values)
- Error paths (invalid inputs, failures)
- Async behavior (if applicable)

## Guidelines
- Tests should be readable as documentation
- One assertion per test when possible
- Use descriptive test names
- Don't test implementation details — test behavior
- Mock external dependencies, not internal logic
