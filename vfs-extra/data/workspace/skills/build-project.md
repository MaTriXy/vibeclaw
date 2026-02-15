# Skill: Build Project

## Trigger
User wants to create a new project, app, or component from scratch.

## Process
1. Clarify requirements (ask only if genuinely ambiguous)
2. Choose appropriate tech stack
3. Create project structure first
4. Implement core functionality
5. Add error handling and edge cases
6. Write usage examples

## Project Structure Template
```
project-name/
├── README.md           # What, why, how
├── package.json        # Dependencies & scripts
├── src/
│   ├── index.ts        # Entry point
│   ├── types.ts        # Type definitions
│   └── utils.ts        # Shared utilities
├── tests/
│   └── index.test.ts   # Tests
└── examples/
    └── basic.ts        # Usage example
```

## Guidelines
- Start with the simplest working version
- Use TypeScript by default (unless user prefers JS)
- Include a README with setup and usage
- Add JSDoc comments on exports
- Make it copy-paste ready
