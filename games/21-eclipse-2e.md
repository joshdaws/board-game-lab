# Eclipse: Second Dawn for the Galaxy

## Quick Stats

- **Players:** 2-6
- **Time:** 60-200 min
- **Weight:** 3.67/5

## Mechanics

- Alliances
- Area Majority / Influence
- Area-Impulse
- Dice Rolling
- Grid Movement
- Hexagon Grid
- Income
- Modular Board
- Passed Action Token
- Tech Trees / Tech Tracks
- Variable Player Powers

## Categories

- Civilization
- Exploration
- Science Fiction
- Space Exploration
- Wargame

## Rulebook

See `rulebooks/21-eclipse-2e.pdf`

## Design Notes

Designer: Touko Tahkokallio. Development and graphic design by
Jere Kasanen and Sampo Sikkio. Published by Lautapelit.fi (2020,
Second Dawn edition; original Eclipse 2011).

### Theme Integration

Seven major species and six Terran factions compete for dominance
in a galaxy still recovering from the Terran-Hegemony War. The
theme of post-war galactic expansion is structurally embedded in
the game's architecture. The galaxy begins almost entirely dark —
only home sectors and the Galactic Center Sector exist at setup.
Players literally build the galaxy through Explore actions, flipping
hex tiles from face-down stacks and choosing whether to place or
discard them, physically constructing contested space. Wormhole
connections on tile edges determine adjacency, so the topology of
the galaxy is a player-created artifact, not a preset map. Ancient
ships and Guardians populate unexplored sectors as remnants of a
prior civilization, giving exploration a narrative of rediscovery.
The species asymmetry is thematic rather than decorative: the
Planta are a distributed moss intelligence with automatic
population destruction but extra VP per sector; the Mechanema are
AI entities with cheaper building costs and extra upgrade
activations; the Descendants of Draco coexist with Ancients rather
than fighting them. Each species bends the core rules in ways that
reflect their lore. The Galactic Center Defense System — a powerful
automated fortress at the galaxy's heart — serves as both a
narrative anchor and a mechanical objective, rewarding the player
who can breach it with 3 Reputation Tiles.

### Core Loop

Each game lasts exactly 8 rounds. Each round has four phases:

1. ACTION PHASE — Starting with the Start Player and proceeding
   clockwise, each player takes one Action or Passes. Six action
   types: Explore, Research, Upgrade, Build, Move, Influence.
   Every action costs one Influence Disc moved from your Influence
   Track to your Action Track. Players continue taking actions
   until all have Passed. After Passing, players may still take
   weaker Reactions (one Upgrade, Build, or Move activation each).
   First player to Pass receives 2 Money and the Start Player
   Tile for next round.
2. COMBAT PHASE — All sectors with opposing ships resolve battles
   in descending sector number order. After battles: attack
   population, influence uncontrolled sectors, claim Discovery
   Tiles, repair damage.
3. UPKEEP PHASE — Activate remaining Colony Ships, collect Money
   income and pay Civilization Upkeep Cost (determined by how many
   Influence Discs are off your track), then produce Materials and
   Science based on Population Cube placement.
4. CLEANUP PHASE — Return Influence Discs from Action Track to
   Influence Track, return Population Cubes from Graveyards, draw
   new Tech Tiles, flip Colony Ships and Summary Tiles face-up,
   advance Round Marker.

Win condition: After 8 rounds, the player with the most Victory
Points wins. VP sources: Reputation Tiles (combat), Ambassador
Tiles (diplomacy), Controlled Sectors (1-4 VP each by ring),
Monoliths (3 VP each), Discovery Tiles (2 VP each), Tech Track
progress (1-5 VP per track), and species bonuses. The Traitor
Tile imposes a -2 VP penalty.

### Key Design Patterns

INFLUENCE DISC ECONOMY: The single most important design
innovation in Eclipse. Your Influence Discs serve triple duty:
they mark which sectors you control on the map, they track which
actions you've taken this round on your Action Track, and — most
critically — the rightmost empty space on your Influence Track
determines your Civilization Upkeep Cost in Money each round.
Every action you take moves a disc off the track, raising your
upkeep. Every sector you control has a disc on the map, also
raising upkeep. This means expansion and activity share the same
resource pool. A player who explores aggressively and takes many
actions per round faces crushing upkeep costs. A player who stays
compact and passes early pays almost nothing. The system elegantly
self-balances: the more powerful your empire becomes, the more
expensive it is to operate. Unlike TI4's command tokens (which are
allocated and spent), Eclipse's discs are a permanent commitment
until the Cleanup Phase returns the action discs — but the sector
discs stay out. This creates a ratcheting cost structure where
territorial growth has a compounding upkeep price.

POPULATION CUBE PRODUCTION: Three separate Population Tracks
(Materials, Science, Money) line your Control Board, each with
cubes covering numbers. When you colonize a planet, you pull a
Population Cube from the matching track, exposing higher
production values. The highest exposed number on each track
determines your resource output during the Upkeep Phase. This
means colonization IS your economic engine — you don't gain
resources from sectors directly, you gain them by moving
population there. Losing population in combat (cubes return to
Graveyards, then back to tracks in Cleanup) directly reduces your
production next round. Advanced Population Squares with star
symbols require specific technologies to colonize, gating the
best economic slots behind the tech tree. Gray population squares
offer flexibility — any resource type can populate them — creating
interesting allocation decisions.

BLUEPRINT SHIP CUSTOMIZATION: Each ship type (Interceptor,
Cruiser, Dreadnought, Starbase) has a Blueprint grid on your
Species Board showing pre-printed Ship Parts and empty spaces.
The Upgrade action lets you swap Ship Part Tiles in and out,
customizing weapons, shields, computers, drives, hulls, and
energy sources. The constraint is energy balance: every Ship Part
has an Energy Consumption value, and your total consumption cannot
exceed your total Energy Production from sources on that
blueprint. This creates a genuine engineering puzzle — you want
Plasma Cannons for damage but they consume energy, so you need
better energy sources, which take up ship part spaces that could
hold more weapons or shields. Critically, upgrading a blueprint
instantly upgrades ALL ships of that type already on the board.
This means ship design decisions are strategic commitments that
affect your entire fleet retroactively. The system replaces
TI4's unit upgrade tech tree with a freeform engineering system
where the same technology (say, Plasma Cannon) can be placed on
any ship type, and players can specialize or generalize as they
choose.

TECH TREE WITH CASCADING DISCOUNTS: Three tech categories
(Military, Grid, Nano) plus Rare Techs. Each Tech Tile you
research in a category is placed on that category's track on
your Species Board, and each tile already on the track provides
a cumulative -1 cost discount for future techs in the same
category. This creates a specialization incentive — your fourth
Nano tech might cost only its minimum of 1-3 Science instead of
its printed 8-12. But it also creates a diversification
dilemma: each tech track scores VP at game end based on how many
tiles it holds (4 tiles = 1 VP, 5 = 2 VP, 6 = 3 VP, 7 = 5 VP).
Techs gate ship parts (you can't install Plasma Cannons without
researching Plasma Cannon tech), enable structures (Orbital,
Monolith, Starbase all require their tech), and unlock Advanced
Population Squares. The tech tray is a shared market — limited
tiles drawn from a bag each round — creating competition for
specific technologies and ensuring no two games offer the same
research landscape.

COMBAT WITH DESIGNED SHIPS: Combat resolves through repeated
Engagement Rounds where each ship type fires in Initiative order
(determined by Drive ship parts on the blueprint). Each weapon
on a blueprint contributes dice of a specific color. You add
your Computer value, subtract the target's Shield value, and
need 6+ to hit. Damage is determined by the burst symbols on
the die face. Hull absorbs damage before a ship is destroyed.
This means combat outcomes are a direct product of ship design
decisions made during the Upgrade action — a fleet of cheap
Interceptors loaded with Ion Cannons plays entirely differently
from Dreadnoughts stacked with Plasma Cannons and Improved
Hulls. Missiles fire once before Engagement Rounds begin,
rewarding first-strike builds. The Reputation Tile draw after
combat (random tiles valued 1-4, drawn based on enemy ships
destroyed, keep one) adds a press-your-luck VP element that
incentivizes combat even when territorial gain is minimal.

EIGHT-ROUND FIXED CLOCK: Unlike TI4's open-ended race to 10 VP,
Eclipse has exactly 8 rounds. No player can accelerate or delay
the end. This creates a precise planning horizon: early rounds
are for exploration and engine-building, middle rounds for
technology and fleet construction, late rounds for positioning
and combat. The fixed length interacts powerfully with the
Influence Disc economy — a player who over-expands early may
face 6+ rounds of punishing upkeep, while a player who expands
late gets cheap sectors but fewer rounds to exploit them. The
clock also prevents kingmaker dynamics: no one decides when the
game ends, so no one can time their push to deny others.

EXPLORATION WITH TILE ORIENTATION: When you Explore, you draw
from ring-appropriate stacks (Inner, Middle, Outer) and must
orient the placed sector so a Wormhole edge connects to one of
your existing sectors. You can also discard instead of placing.
This gives the exploring player control over galaxy topology —
you can create dead ends that isolate your territory, or open
wormhole connections toward opponents for future aggression.
Inner ring sectors (closer to the Galactic Center) have higher
VP values and better planets but are more contested. Outer ring
sectors are safer but less valuable. Discovery Tiles on newly
explored sectors offer variable rewards (resources, free tech,
ancient ship parts, ancient structures) or can be kept as 2 VP,
creating an explore-or-exploit micro-decision each time.

DIPLOMACY AS MUTUAL INVESTMENT: In games with 4+ players,
adjacent players connected by Wormholes can form Diplomatic
Relations by exchanging Ambassador Tiles, each containing a
Population Cube from the offering player's tracks. Ambassadors
sit on the Reputation Track and score 1 VP each at game end.
The Population Cube on the ambassador tile means forming
diplomacy literally boosts your ally's production (they have
one fewer cube on their tracks, exposing higher numbers). An
Act of Aggression — having ships in a sector the other player
controls — breaks the relation and gives the aggressor the
Traitor Tile (-2 VP, and inability to form new diplomatic
relations). This makes betrayal mechanically costly but not
impossible, creating genuine diplomatic tension. The Traitor
Tile is a hot potato — it passes to whoever commits the next
Act of Aggression — meaning one betrayal can cascade through
the table.

PASSING AND REACTIONS: The first player to Pass gains 2 Money
and becomes Start Player next round — a significant incentive
to pass early. But after passing, you can still take Reactions
(weaker versions of Upgrade, Build, or Move — one activation
each, still costing an Influence Disc). This prevents the
feel-bad of passing and watching opponents maneuver unopposed.
The Reaction system also creates bluffing opportunities: you
might pass early to grab Start Player while retaining the
ability to respond militarily via a Move Reaction.

### Scaling Mechanisms

- 2-6 players: Galaxy layout changes dramatically. Sector hex
  counts in the Outer ring scale from 5 (2 players) to 18
  (6 players). Tech Tile draws scale from 12 to 20.
- 2-3 players: No Ambassador Tiles or Diplomatic Relations.
  No Guardian Sectors.
- 4+ players: Ambassadors and diplomacy become available.
  Guardian Sectors appear at 6 players, adding defended
  high-value sectors between starting positions.
- Tech Tray refill scales with player count (5-9 tiles per
  Cleanup Phase), maintaining market density.
- Starting layouts are prescribed per player count, ensuring
  balanced territorial access to the Galactic Center.
- The fixed 8-round structure holds regardless of count,
  but more players means more competition for inner sectors
  and tech tiles, naturally increasing tension.

### What Makes It #21

Eclipse is the answer to the question: what if a 4X space epic
respected your time? The Influence Disc economy is the key — a
single unified system that governs action tempo, territorial
upkeep, and strategic commitment without requiring a separate
resource, token pool, or phase for each. Where TI4 uses strategy
card drafting and command tokens to manage tempo across 6-10
hours, Eclipse compresses the same strategic depth into 2-3 hours
by making every action's cost immediately visible on your
Influence Track. The Blueprint ship customization system gives
players the satisfaction of designing their own military doctrine
without the overhead of unit upgrade tech trees. The 8-round
fixed clock eliminates pacing uncertainty. And the Population
Cube production system ties economic growth directly to
territorial colonization in a way that makes every hex placement
feel consequential. Eclipse proves that mechanical elegance and
strategic depth are not mutually exclusive — it delivers a
civilization-scale experience with eurogame efficiency.
