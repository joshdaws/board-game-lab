# Azul

## Quick Stats

- **Players:** 2-4
- **Time:** 30-45 min
- **Weight:** 1.77/5

## Mechanics

- Tile Drafting
- Pattern Building
- Set Collection
- Open Drafting

## Categories

- Abstract Strategy
- Puzzle

## Rulebook

See `rulebooks/96-azul.pdf`

## Design Notes

Designer: Michael Kiesling. Published by Plan B Games (2017).

### Theme Integration

Azul draws its name and visual identity from the azulejos — the ornamental
ceramic tiles that Portuguese King Manuel I commissioned after visiting the
Alhambra palace in southern Spain. The game asks players to draft tiles and
assemble them into a mosaic wall, evoking the work of artisan tile layers
decorating royal palaces. The theme is thin by narrative standards but
remarkably effective through material design: the tiles themselves are weighty
Bakelite pieces with satisfying tactile properties, and the five colors
correspond to traditional Portuguese tile patterns. You feel like a craftsman
arranging physical materials, not pushing cardboard.

Where the theme does genuine mechanical work is in the wall pattern itself.
The 5x5 grid on each player board features a fixed color arrangement where
each color appears exactly once per row and once per column — a Latin square.
This mirrors the geometric constraints of real azulejo installation, where
artisans had to plan tile placement to create repeating but non-adjacent
patterns. The constraint is not arbitrary; it is the puzzle that real tile
layers solved. Kiesling translated an artisan's spatial planning problem into
a game of drafting and placement optimization, and the physical heft of the
components bridges the gap between abstract mechanism and tangible craft.

The factory displays — circular arrangements of four random tiles each —
evoke workshops producing batches of tiles in a ceramics factory. When you
select tiles from a factory, the unchosen tiles slide to the center of the
table, forming a growing communal pool. This models the inefficiency and
waste inherent in artisan production: you take what you need, and the
remainders accumulate for others to pick through. It is a simple spatial
metaphor that makes the draft legible to new players within seconds.

### Core Loop

The game plays over multiple rounds, each divided into three phases:

**Phase 1 — Factory Offer (Drafting)**

1. DISPLAY SETUP: Each round, fill 2N+1 factory displays with 4 random tiles
   drawn from a bag (N = number of players). So 2 players use 5 factories,
   3 players use 7, 4 players use 9.
2. TILE SELECTION: On your turn, choose one of two options:
   a) Pick ALL tiles of one color from a single factory display. Push all
      remaining tiles from that factory to the center of the table.
   b) Pick ALL tiles of one color from the center of the table. The first
      player to take from the center also takes the first-player marker
      (which occupies a floor line slot, costing points).
3. PATTERN LINE PLACEMENT: Place your drafted tiles on one of five pattern
   lines (rows of length 1-5 on the left side of your board). All tiles in
   a pattern line must be the same color. You cannot place a color on a
   pattern line if that color already appears in the corresponding row of
   your wall.
4. OVERFLOW: Any tiles that cannot legally be placed go to the floor line,
   which imposes escalating negative points (-1, -1, -2, -2, -2, -3, -3).

Drafting continues around the table until all tiles have been taken from
all factories and the center.

**Phase 2 — Wall Tiling (Scoring)**

1. For each completed pattern line (fully filled with tiles), move exactly
   one tile to the corresponding position on the wall grid. Discard the
   remaining tiles from that pattern line to the lid of the box.
2. Score each newly placed wall tile: 1 point if isolated, or count the
   length of contiguous horizontal and vertical lines it connects to (score
   both directions separately, then sum).
3. Incomplete pattern lines remain for the next round — their tiles carry
   over.
4. Subtract floor line penalties. Reset the floor line.

**Phase 3 — Preparing the Next Round**

If no player has completed a horizontal row on the wall, the player with
the starting player marker refills all factory displays with 4 tiles
from the bag. If the bag is empty, refill it from the lid of the box.

**End Game**: The game ends at the conclusion of the round in which any
player completes a horizontal row on their wall. Bonus scoring: +2 per
completed row, +7 per completed column, +10 for placing all 5 tiles of
one color.

### Key Design Patterns

ALL-OR-NOTHING DRAFTING: The most important design decision in Azul is that
you must take ALL tiles of your chosen color from a factory or center — not
one, not some, all of them. This single rule generates the game's entire
decision space. Taking three blue tiles when you only need one means two go
to your floor line. The draft is never clean; it is always a compromise
between what you want and what you are forced to absorb. Kiesling
understood that constrained choice is more interesting than free choice.
The all-or-nothing rule transforms a simple selection into a risk
calculation: how much waste can I tolerate to get what I need?

NEGATIVE SCORING AS PUNISHMENT FOR GREED: The floor line is not merely a
tiebreaker — it is the primary restraint on aggressive drafting. Penalties
escalate from -1 to -3 per tile, with seven slots totaling up to -14 points
in a single round. In a game where a good round might score 10-15 points,
a full floor line can erase an entire round's progress. This creates a
visceral risk calculation on every draft pick. The floor line is what makes
Azul a game of tension rather than optimization: you are not maximizing
points, you are managing the damage of imperfect choices.

HATE-DRAFTING AS EMERGENT STRATEGY: Because the tile pools are shared and
visible, experienced players quickly learn to take tiles not because they
want them but because an opponent needs them. The all-or-nothing rule makes
hate-drafting especially effective: taking three red tiles you do not need
forces them onto your floor line, but it also denies an opponent who needed
exactly those reds to complete a critical pattern line. The game never
mentions this strategy in its rules; it emerges naturally from the
transparency of shared pools and the constraint of all-or-nothing selection.
This is a hallmark of elegant design — deep interaction arising from simple,
orthogonal rules.

FACTORY DISPLAYS AS DIMINISHING SHARED POOLS: Each factory starts with
exactly four tiles. As players draft from factories, unchosen tiles cascade
into the center, creating an ever-growing communal pool. Early in the round,
you have many small, contained choices (pick from specific factories). Late
in the round, you face one massive pool with many colors, and the all-or-
nothing rule becomes increasingly punishing because color groups in the
center tend to be large. The round's texture shifts from surgical selection
to damage control. This natural arc — from precision to desperation — is
hardwired into the structure without requiring any explicit timer or
escalation mechanism.

WALL PATTERN AS CONSTRAINED PLACEMENT PUZZLE: The wall's Latin square
arrangement (each color once per row, once per column) means every
placement permanently constrains future options. Placing blue in row 3
means blue can never appear in row 3 again, and the specific column
position is fixed by the wall's pre-printed pattern. Players must think
several rounds ahead: which pattern lines they fill now determines which
wall positions they can target later. The wall transforms a drafting game
into a spatial puzzle, and the constraint escalates as the game progresses
— early placements are flexible, late placements are forced.

FIRST-PLAYER TOKEN AS TEMPO COST: The first player to take tiles from the
center of the table claims the first-player marker for the next round.
Going first is a significant advantage — you get first pick from full
factories. But the marker occupies a floor line slot, imposing a -1 penalty.
This is an elegant mechanism for pricing turn order. In many games, first
player advantage is either free or randomly assigned. Kiesling makes you
pay for it with points, and the payment is visible to all players, creating
a mini-game of timing: when is going first worth the cost?

ROUND STRUCTURE AS TWO-PHASE RHYTHM: The clean separation between drafting
(interactive, tense, social) and scoring (solitary, spatial, mathematical)
gives each round a satisfying dramatic arc. The drafting phase is
confrontational and unpredictable — you never know exactly what will be
available when your turn comes back. The scoring phase is contemplative
and precise — you calculate adjacency bonuses and floor penalties. This
alternation between tension and resolution is a rhythm that keeps casual
players engaged without exhausting them. The 30-minute playtime is not
accidental; it is a product of this efficient two-phase structure.

ACCESSIBILITY THROUGH VISUAL AND TACTILE DESIGN: Azul's design extends
beyond mechanics to the physical experience. The tiles are chunky, colorful,
and satisfying to handle. The board layout is immediately legible — pattern
lines on the left, wall on the right, floor at the bottom. No hidden
information, no text on components, no complex iconography. The game can
be taught in under five minutes because the physical components communicate
the rules: tiles go on lines, lines fill walls, overflow goes to the floor.
This is industrial design serving game design, and it is why Azul succeeds
as a gateway game where many abstracts fail.

### What Makes It #96

Azul demonstrates that weight and depth are not the same thing. At 1.77/5
complexity, it is one of the lightest games in any serious collection, yet
the all-or-nothing drafting rule generates meaningful decisions, emergent
interaction, and genuine tension in every round. Kiesling's achievement is
compression: he found the minimum viable mechanism that produces maximum
strategic texture. The hate-draft, the floor line calculus, the wall
constraint, the tempo cost of the first-player token — these are not
bolted-on systems but natural consequences of a single elegant drafting
rule. Azul is the proof that a game does not need complexity to be
interesting; it needs constraints that force interesting choices.
