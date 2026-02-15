# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Board Game Lab is a knowledge base for AI-assisted board game design. It studies the top 150 ranked games on BoardGameGeek to extract design patterns, mechanic taxonomies, and reusable insights. There is no application code, build system, or tests — this is a structured Markdown + PDF research repository.

## Repository Structure

- `games/` — One Markdown file per game, numbered by BGG rank (01-150). `index.md` tracks the research status of each game.
- `rulebooks/` — Source PDF rulebooks (gitignored, not committed). Games #1-25 have direct-download PDFs; most games #26-150 were enriched from designer knowledge without rulebook PDFs.
- `mechanics/` — `index.md` has mechanic frequency counts across all 150 games; `categories.md` has theme/category frequency.
- `knowledge/` — `design-patterns.md` synthesizes cross-cutting insights from the full 150-game dataset, including weight distribution, 15 core design insights, 8 design archetypes, and mechanic combination analysis.

## Game File Format

All 150 game files are enriched. Each file contains:

- **Quick Stats** — Players, Time, Weight
- **Mechanics** — Bulleted list of BGG mechanics
- **Categories** — Bulleted list of BGG categories
- **Rulebook** — Reference to `rulebooks/NN-slug.pdf`
- **Design Notes** — Designer/publisher attribution, followed by:
  - **Theme Integration** — 2-3 paragraphs on how theme is expressed through mechanics
  - **Core Loop** — Detailed turn structure with numbered steps
  - **Key Design Patterns** — 5-8 patterns, each as UPPERCASE NAME: analytical paragraph
  - **What Makes It #NN** — Concluding paragraph on what distinguishes the game

Files typically run 170-270 lines.

## Enrichment Workflow

When enriching a new game file:
1. If a rulebook PDF is available in `rulebooks/`, read it for accuracy
2. Preserve the stub structure (Quick Stats, Mechanics, Categories, Rulebook reference)
3. Replace the placeholder under `## Design Notes` with analysis sections
4. Focus on **designer intent and design patterns**, not rules summaries — the goal is extractable design wisdom, not a how-to-play guide
5. Use existing enriched games as structural templates for consistency
6. After enriching, update `games/index.md` status to "Enriched"
7. After batch enrichments, update `mechanics/index.md`, `mechanics/categories.md`, and `knowledge/design-patterns.md` to reflect the expanded dataset

## Board Game Design Skill

A Claude Code skill lives at `.claude/skills/board-game-design/`. It provides three slash commands:

- **`/design [concept]`** — Interactive design session: interviews the user or analyzes a provided concept, classifies archetype, suggests mechanics, finds comparable games, and can generate a design document
- **`/design-critique <concept>`** — Analyzes a game concept against the knowledge base for strengths, gaps, and actionable recommendations
- **`/design-mechanics [mechanic]`** — Deep-dives a mechanic: frequency tier, proven combinations, exemplar games, and application guidance

The skill's `references/` directory contains a game index (all 150 games with archetype classifications), plus copies of the design patterns, mechanics taxonomy, and categories taxonomy. The `assets/` directory has a game design document template.

## Conventions

- Game files are named `NN-slug.md` matching their BGG rank position
- Cross-references use relative paths (e.g., `rulebooks/01-brass-birmingham.pdf`)
- Commit messages follow the pattern: `Enrich games #N-M with comprehensive design analysis`
- The `games/index.md` status column tracks each game as "Pending" or "Enriched"
