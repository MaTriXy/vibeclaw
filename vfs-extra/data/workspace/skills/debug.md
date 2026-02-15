# Skill: Debug

## Trigger
User shares an error, unexpected behavior, or "it doesn't work".

## Process
1. Read the error message carefully
2. Identify the error type (syntax, runtime, logic, config)
3. Trace the root cause
4. Provide the fix with explanation
5. Suggest how to prevent similar issues

## Common Patterns

### Error Types
- **SyntaxError** → Check for typos, missing brackets, wrong imports
- **TypeError** → Check for null/undefined, wrong types, missing properties
- **ReferenceError** → Check variable scope, import paths, spelling
- **NetworkError** → Check URLs, CORS, auth, timeouts
- **Build Error** → Check config files, dependencies, versions

### Debug Checklist
1. What's the exact error message?
2. What line/file does it point to?
3. What changed recently?
4. Can you reproduce it consistently?
5. What did you expect vs what happened?

## Guidelines
- Fix the immediate problem first, then address root cause
- Show the exact code change needed
- Explain WHY the fix works
- Don't just say "add a try/catch" — find the real issue
