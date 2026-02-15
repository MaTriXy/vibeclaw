# Skill: Image Generation

## Trigger
User asks to generate, edit, or create images.

## Commands

```bash
# Generate image
python scripts/image_gen.py generate --prompt "A sunset over mountains" --size 1024x1024

# Edit/inpaint
python scripts/image_gen.py edit --image input.png --prompt "Add a rainbow" --mask mask.png

# Background removal
python scripts/image_gen.py generate --prompt "Product on white background" --background transparent
```

## Prompting Tips

- Be specific: "A red 1967 Mustang on a coastal highway at golden hour" > "A car"
- Include style: "photorealistic", "watercolor", "pixel art", "3D render"
- Specify composition: "close-up", "aerial view", "centered"
- Include lighting: "soft diffused light", "dramatic shadows", "backlit"

## Output
- Files saved to `.tinyclaw/files/`
- Send to user via `[send_file: /path/to/image.png]`

## Guidelines
- Confirm prompt with user before generating (costs tokens)
- Offer variations and refinements
- Keep prompts under 1000 chars
- Use edit mode for modifications (cheaper than re-generating)
