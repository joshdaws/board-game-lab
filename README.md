# Board Game Lab

AI-assisted board game design knowledge base and eventual design skill.

Built by studying the top 125 ranked games on BoardGameGeek to extract design patterns, mechanic taxonomies, and reusable insights for game designers.

## Repository Structure

```
games/          125 game analysis files (Markdown), one per BGG-ranked game
rulebooks/      Source PDF rulebooks (gitignored — see Downloading Rulebooks below)
mechanics/      Mechanic and category frequency taxonomies across all 125 games
knowledge/      Cross-cutting design pattern synthesis
scripts/        Utility scripts
```

## Downloading Rulebooks

Rulebook PDFs are gitignored and not included in the repository. To download them after cloning:

```bash
# Download all available rulebooks (~100 of 125 have direct URLs)
./scripts/download-rulebooks.sh

# Download a specific range
./scripts/download-rulebooks.sh 26 50

# Re-download everything (overwrites existing files)
./scripts/download-rulebooks.sh --force
```

About 20 rulebooks require manual download because their publishers use session-gated CDNs or Dropbox links. The script will list these with instructions. Check the [BGG files section](https://boardgamegeek.com/) for each game to find official PDFs.

**Note:** Kingdom Death: Monster (#92) does not have a free rulebook PDF — the publisher sells it separately.

See `rulebooks/sources.md` for the full source URL list and known issues.

## Design Skill

The repository includes a Claude Code skill (`.claude/skills/board-game-design/`) that turns the knowledge base into an interactive design tool. It provides three commands:

| Command | Purpose |
|---------|---------|
| `/design [concept]` | Guided design session — interviews you about theme, weight, player count, then suggests archetypes, mechanics, and comparable games. Can generate a full design document. |
| `/design-critique <concept>` | Analyze a game concept against proven patterns — identifies strengths, gaps, comparable games, and gives actionable recommendations. |
| `/design-mechanics [mechanic]` | Explore a specific mechanic — frequency data, proven combinations, exemplar games, and integration guidance. |

All recommendations are grounded in the 125-game dataset with specific citations.

## Game Analysis Format

Each game file contains:

- **Quick Stats** — Player count, play time, BGG weight rating
- **Mechanics** — Primary mechanic tags
- **Categories** — Theme/genre categories
- **Design Notes** — In-depth analysis covering:
  - Theme Integration — How theme shapes mechanics
  - Core Loop — Turn/round structure with specific rules
  - Key Design Patterns — Reusable design insights with generalizable principles
  - What Makes It #N — Why this game earns its ranking position
