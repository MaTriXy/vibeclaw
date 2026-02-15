# Skill: Refactor

## Trigger
User wants to improve existing code structure, performance, or readability.

## Process
1. Understand the current code and its purpose
2. Identify refactoring opportunities
3. Apply changes incrementally
4. Verify behavior is preserved
5. Explain each change

## Refactoring Patterns
- **Extract function** — long functions → smaller, named pieces
- **Remove duplication** — DRY without over-abstracting
- **Simplify conditionals** — early returns, guard clauses
- **Improve naming** — clear, descriptive, consistent
- **Reduce nesting** — flatten with early returns or extraction
- **Type safety** — add TypeScript types where missing
- **Error handling** — replace silent fails with proper handling
- **Modern syntax** — update to current JS/TS idioms

## Guidelines
- Don't change behavior unless asked
- Show before/after for each change
- Explain the benefit of each refactor
- Keep changes small and reviewable
- Don't refactor for the sake of it — every change needs a reason
