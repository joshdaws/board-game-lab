# Cartographers

## Quick Stats

- **Players:** 1-100
- **Time:** 30-45 min
- **Weight:** 1.89/5

## Mechanics

- Bingo
- Enclosure
- End Game Bonuses
- Grid Coverage
- Paper-and-Pencil
- Pattern Building

## Categories

- Fantasy
- Territory Building

## Rulebook

See `rulebooks/179-cartographers.pdf`

## Design Notes

Designer: Jordy Adan. Published by Thunderworks Games (2019).

### Theme Integration

Cartographers places players in the role of royal mapmakers charting the
northern reaches of Queen Gimnax's kingdom. Each player has a blank 11x11 grid
representing unexplored wilderness, and over the course of the game they fill
it in by drawing terrain types --- forests, villages, farmlands, water, and
monster-infested wastelands --- as exploration cards reveal what has been
discovered. The cartographic theme is more than decoration: it provides the
logical framework for why players are drawing shapes on paper, why terrain
types matter, and why the queen's edicts (scoring conditions) change each
season. You are not just filling in a grid; you are mapping a frontier for
a monarch who has specific priorities about what kind of territory she values.

The seasonal structure reinforces the exploration narrative. The game plays
across four seasons --- Spring, Summer, Autumn, Winter --- each with a
different time threshold that determines how many exploration cards are
revealed. Spring and summer are longer, representing favorable mapping
conditions, while autumn is shorter and winter shorter still, evoking the
compression of usable daylight and harsh weather that would limit an actual
cartographic expedition. Two of the four royal edicts score each season, and
the scoring pair rotates, meaning priorities shift as the year progresses.
This seasonal scoring creates a narrative arc: the territory you map in spring
serves different strategic purposes than the territory you map in winter, just
as a real expedition would prioritize different objectives as conditions change.

The monster mechanism is the theme's most evocative element. When an ambush
card is drawn, players pass their map sheets to an adjacent opponent, who draws
a monster shape on the map in the worst possible position. Monsters represent
the hostile creatures inhabiting the frontier, and their placement by opponents
models the unpredictability of wilderness dangers. Each empty square adjacent to
a monster at game end costs one point, incentivizing players to wall off or
surround monster territory --- a thematic echo of the real challenge of
mapping lands that fight back against civilization's encroachment.

### Core Loop

Each player receives a map sheet (11x11 grid with some pre-printed terrain
and ruins spaces) and a writing implement. Four edict cards (A, B, C, D) are
revealed, each specifying a scoring pattern. The game proceeds through four
seasons.

1. SEASON SETUP --- Reveal the season card indicating the time threshold for
   the current season (Spring: 8, Summer: 8, Autumn: 7, Winter: 6) and which
   two edicts will score at season end (Spring: A+B, Summer: B+C, Autumn: C+D,
   Winter: D+A).

2. EXPLORE (repeat until time threshold is met) ---
   a) Reveal an explore card showing one or two terrain types and one or two
      shapes (polyomino configurations of 1-5 squares)
   b) Each player independently chooses one valid terrain-shape combination
      from the card and draws it on their map
   c) The shape may be rotated and mirrored but must be placed as a contiguous
      group on empty squares
   d) If a shape is placed so that at least one square overlaps a ruins space
      on the map, the player may draw a coin in one of the shape's squares
      (each coin is worth 1 VP at game end)
   e) If a player cannot legally place any shape from the card, they instead
      draw a 1x1 square of any terrain type anywhere on their map
   f) Add the explore card's time value to the season's running total; when
      the total meets or exceeds the threshold, the season ends after that card

3. AMBUSH RESOLUTION (when an ambush card is revealed) ---
   a) The ambush card shows a monster shape
   b) Each player passes their map sheet to an adjacent player (direction
      specified on the card)
   c) The receiving player draws the monster shape on the passed map, choosing
      position and orientation to maximize damage (monsters must be placed
      legally on empty squares; if impossible, the recipient draws a 1x1
      monster instead)
   d) Maps are returned to their owners
   e) The ambush card has a time value that counts toward the season threshold

4. SEASON SCORING --- When the season ends:
   a) Score edict A using its pattern (e.g., "3 VP for each row or column with
      at least one forest space")
   b) Score edict B using its pattern
   c) Score 1 VP per coin drawn on the map
   d) Lose 1 VP per empty square adjacent to a monster space
   e) Record scores on the map sheet's scoring track

5. REPEAT for each subsequent season with new edict pairings.

**End Game**: After all four seasons, sum the four season scores. Highest
total wins.

### Key Design Patterns

SIMULTANEOUS PLAY AS UNLIMITED SCALING: Cartographers' most commercially
significant design decision is that all players act simultaneously on their
own map sheets. Because there is no turn order, no shared board, and no
resource contention (apart from the ambush mechanism), the game scales from
1 to 100+ players with zero additional play time. A 50-person tournament
plays in the same 30-45 minutes as a 2-player session. This scaling property
makes Cartographers exceptionally versatile for conventions, game cafes, and
educational settings. The design insight is that removing sequential turn-taking
does not eliminate strategic depth --- it redirects depth toward optimization
of a personal puzzle rather than interaction with opponents.

ROTATING EDICT PAIRS AS STRATEGIC REFRAMING: Each season scores exactly two of
the four edicts, and the pairings rotate (A+B, B+C, C+D, D+A). Because each
edict appears in exactly two seasons, players must balance short-term scoring
with long-term positioning. A forest cluster that scores well under edict A in
spring will also score under edict A in winter, but the intervening seasons
may reward different terrain priorities. The rotation forces players to
constantly reframe their strategy: what is the highest-value terrain to place
right now, given which edicts are active this season and which will activate
next? This reframing mechanism creates strategic variety without adding rules
complexity --- the scoring conditions are simple, but their rotating
application produces nuanced planning.

POLYOMINO PLACEMENT AS SPATIAL OPTIMIZATION: Each explore card offers shapes
of varying sizes and configurations, and players must fit them onto their grid
to satisfy multiple scoring patterns simultaneously. A single placement might
contribute to an enclosure bonus (surrounding a terrain type), a row
completion, and a cluster adjacency requirement. The spatial optimization is
the game's core skill expression: expert players evaluate each placement
against all four edicts, not just the two scoring this season, because future
seasons will reactivate the others. The polyomino format is accessible ---
everyone understands fitting shapes into a grid from Tetris --- but the
multi-objective optimization required to maximize scoring across all four
seasons is genuinely deep.

MONSTER PLACEMENT AS CONTROLLED INTERACTION: In a game that is otherwise a
parallel puzzle, the ambush mechanism introduces direct player interaction.
Opponents place monsters on your map with the explicit goal of causing damage,
and the strategic skill of monster placement (targeting areas adjacent to
many empty squares, blocking valuable scoring positions) adds an adversarial
dimension. The interaction is bounded --- you cannot prevent monsters entirely
and can only mitigate damage by surrounding them with terrain --- but it
prevents the game from becoming a purely solitary optimization exercise. The
monster mechanism also creates emergent defensive strategy: experienced players
leave buffer zones near map edges and avoid isolated empty squares that would
be vulnerable to monster placement.

COIN-RUINS SYNERGY AS BONUS SYSTEM: Ruins spaces are pre-printed on the map,
and placing a shape that overlaps a ruins space allows the player to draw a
coin worth 1 VP. Coins are a small but consistent bonus that rewards spatial
planning around fixed board positions. Because ruins locations are known from
the start, they create early-game anchor points that influence placement
strategy throughout the session. The coin system also provides consolation when
a suboptimal shape must be placed --- overlapping a ruins space salvages some
value from an otherwise poor placement. This layered bonus system adds
decision weight without adding rules complexity.

FIXED TIME BUDGETS AS PACING MECHANISM: Each season has a time threshold, and
explore cards have time values (typically 1-2) that accumulate toward that
threshold. The season ends when the threshold is met or exceeded, but the exact
number of cards revealed varies because time values differ. Players cannot
predict exactly how many placement opportunities each season will offer, which
prevents perfect advance planning and forces adaptive strategy. The decreasing
thresholds across seasons (8, 8, 7, 6) create a natural compression where
early seasons allow more placements and late seasons demand more efficient use
of fewer opportunities. This pacing ensures that the game accelerates toward
its conclusion rather than dragging.

PAPER-AND-PENCIL AS MATERIAL PHILOSOPHY: The roll-and-write (or in this case
flip-and-write) format is a deliberate design choice that supports the game's
scaling properties and keeps production costs low. Each player needs only a
printed sheet and a pencil. There are no tiles to sort, no tokens to manage,
and no board to share. This material minimalism is thematically appropriate ---
a cartographer's tools are pen and paper --- and practically advantageous for
large groups. The permanence of drawn marks also adds psychological weight to
each decision: unlike a tile game where pieces can be mentally repositioned
before committing, a pen stroke is final, and the slight anxiety of
irreversibility makes each placement feel consequential.

### What Makes It #179

Cartographers succeeds by applying euro-game design principles to the
flip-and-write format with unusual rigor. Where most games in this genre offer
light, disposable puzzle experiences, Cartographers delivers genuine strategic
depth through its rotating edict system, multi-objective spatial optimization,
and the interactive ambush mechanism. The game's ability to scale from solo
play to convention-sized groups without sacrificing play quality is nearly
unique in the medium. At 1.89 weight, it is approachable enough for family
play but features enough layered decision-making that competitive players find
it rewarding across dozens of sessions. Adan demonstrated that the
flip-and-write genre could support serious design ambition, and Cartographers
remains the standard against which subsequent entries in the genre are measured.
