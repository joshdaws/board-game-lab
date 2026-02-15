# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Board Game Lab is a knowledge base for AI-assisted board game design. It studies the top 25 ranked games on BoardGameGeek to extract design patterns, mechanic taxonomies, and reusable insights. There is no application code, build system, or tests — this is a structured Markdown + PDF research repository.

## Repository Structure

- `games/` — One Markdown file per game, numbered by BGG rank (01-25). `index.md` tracks the research status of each game.
- `rulebooks/` — Source PDF rulebooks corresponding to each game (gitignored, not committed).
- `mechanics/` — `index.md` has mechanic frequency counts across all 25 games; `categories.md` has theme/category frequency.
- `knowledge/` — `design-patterns.md` synthesizes cross-cutting insights from the full dataset.

## Game File States

Each game file exists in one of two states:

1. **Stub** — Quick Stats, Mechanics list, Categories, Rulebook reference, and `_Placeholder for future analysis._` under Design Notes. (~35 lines)
2. **Enriched** — Full design analysis added under Design Notes, including: Theme Integration, Core Loop, Key Design Patterns, Tension Architecture / Decision Space, and sometimes Scaling Notes or Accessibility Analysis. (~100-250 lines)

Games #1-10 have been enriched. Games #11-25 are stubs awaiting analysis.

## Enrichment Workflow

When enriching a game file:
1. Read the corresponding PDF rulebook from `rulebooks/`
2. Preserve the existing stub structure (Quick Stats, Mechanics, Categories, Rulebook reference)
3. Replace the placeholder under `## Design Notes` with analysis sections
4. Focus on **designer intent and design patterns**, not rules summaries — the goal is extractable design wisdom, not a how-to-play guide
5. Use the enriched games (#1-10) as structural templates for consistency

## Conventions

- Game files are named `NN-slug.md` matching their BGG rank position
- Cross-references use relative paths (e.g., `rulebooks/01-brass-birmingham.pdf`)
- Commit messages follow the pattern: `Enrich <Game Name> (#N) with comprehensive design analysis`
- The `games/index.md` status column should be updated when a game moves from Pending to enriched (currently all show "Pending" — this is stale)
