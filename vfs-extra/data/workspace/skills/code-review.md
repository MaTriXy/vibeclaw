# Skill: Code Review

## Trigger
User shares code and asks for review, feedback, or improvements.

## Process
1. Read the code completely before commenting
2. Check for: bugs, security issues, performance, readability, maintainability
3. Prioritize findings: critical → important → nice-to-have
4. Suggest specific fixes with code snippets
5. Note what's done well (not just problems)

## Output Format
```
## 🔴 Critical
- [issue]: [explanation] → [fix]

## 🟡 Important  
- [issue]: [explanation] → [fix]

## 🟢 Good
- [what's done well]

## 💡 Suggestions
- [optional improvements]
```

## Guidelines
- Be constructive, not just critical
- Explain WHY something is an issue
- Provide working fix code, not just descriptions
- Consider the context (prototype vs production)
