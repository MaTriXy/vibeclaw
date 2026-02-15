# Git — Quick Reference

## Daily Workflow
```bash
git status                    # What's changed?
git add -p                    # Stage interactively
git commit -m "feat: add X"  # Commit
git push                      # Push

git pull --rebase             # Update (clean history)
git stash / git stash pop     # Temp save/restore
```

## Branching
```bash
git checkout -b feat/my-feature   # New branch
git merge main                    # Merge main into branch
git rebase main                   # Rebase onto main
git branch -d feat/my-feature     # Delete merged branch
```

## Undo
```bash
git checkout -- file.txt      # Discard changes
git reset HEAD file.txt       # Unstage
git reset --soft HEAD~1       # Undo commit, keep changes
git reset --hard HEAD~1       # Undo commit, discard changes
git revert abc123             # Create undo commit
```

## Commit Messages (Conventional)
```
feat: add user authentication
fix: resolve null pointer in parser
docs: update API reference
refactor: extract validation logic
test: add unit tests for auth module
chore: update dependencies
perf: optimize database queries
ci: add GitHub Actions workflow
```

## Useful
```bash
git log --oneline -20         # Recent history
git diff --stat               # Changed files summary
git blame file.txt            # Who changed what
git cherry-pick abc123        # Apply specific commit
git bisect start/bad/good     # Find bug commit
```
