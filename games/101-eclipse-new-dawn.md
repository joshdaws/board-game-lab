# Eclipse: New Dawn for the Galaxy

> **Note:** This is the 1st edition (2011) of Eclipse. For the revised
> 2nd edition, see `games/21-eclipse-2e.md`. The core design is
> identical; Second Dawn refines components, rebalances alien species,
> and adds the Reaction system. This analysis covers the original
> edition's design contributions.

## Quick Stats

- **Players:** 2-6
- **Time:** 60-200 min
- **Weight:** 3.68/5

## Mechanics

- Alliances
- Area-Impulse
- Area Majority / Influence
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

See `rulebooks/101-eclipse-new-dawn.pdf`

## Design Notes

Designer: Touko Tahkokallio. Development and graphic design by
Sampo Sikio. Published by Lautapelit.fi (2011).

### Theme Integration

Eclipse is set in a galaxy recovering from the Terran-Hegemony War, a
post-conflict setting that does genuine structural work. The galaxy
begins almost entirely empty -- only home sectors and the Galactic
Center hex exist at setup. Players literally construct the contested
space through Explore actions, drawing hex tiles from face-down stacks
organized by ring (Inner, Middle, Outer) and choosing whether to place
or discard them. Ancient Ships guard unexplored sectors as remnants of
a prior civilization, giving exploration a narrative of rediscovery
rather than colonization of empty space. Wormhole connections printed
on hex edges determine adjacency, so the topology of every game is a
unique artifact of player decisions.

The seven alien species are not cosmetic reskins. Each bends the core
rules in ways that reflect their lore: the Planta are a distributed
moss intelligence with automatic population destruction but bonus
exploration; the Mechanema are AI entities with cheaper building and
extra upgrades; the Hydran Progress can research two technologies in
a single action. Tahkokallio ensures that species asymmetry is
thematic rather than decorative, giving each faction a distinct
strategic personality rooted in its narrative identity. The Galactic
Center Defense System -- a powerful automated fortress at the galaxy's
heart -- serves as both a narrative anchor and a mechanical objective,
rewarding the player who can breach it with valuable Reputation Tiles.

### Core Loop

Each game lasts exactly 9 rounds. Each round has four phases:

1. **Action Phase** -- Starting with the Start Player and proceeding
   clockwise, each player takes one action or passes. Six action
   types: Explore, Influence, Research, Upgrade, Build, Move. Every
   action costs one Influence Disc moved from the Influence Track to
   the corresponding action space. Players continue taking actions
   until all have passed. The first player to pass receives the
   Starting Player Marker for the next round.

2. **Combat Phase** -- All sectors containing ships of multiple parties
   resolve battles in descending hex number order. Battles proceed
   through Missile fire (once) then repeated Engagement Rounds in
   Initiative order until one side is eliminated or retreats. After
   battles: attack population, place Influence Discs on uncontrolled
   sectors, claim Discovery Tiles, draw Reputation Tiles.

3. **Upkeep Phase** -- Activate remaining Colony Ships to place
   Population Cubes, collect Money income and pay Civilization Upkeep
   Cost (determined by how many Influence Discs are off the Influence
   Track), then produce Science and Materials based on Population
   Cube placement.

4. **Cleanup Phase** -- Return Influence Discs from action spaces back
   to the Influence Track, return Population Cubes from Graveyards
   to their Population Tracks, draw new Technology Tiles to refill
   the Research tracks, advance the Round Marker.

Win condition: After 9 rounds, the player with the most Victory Points
wins. VP sources: Reputation Tiles (combat), Ambassador Tiles
(diplomacy), controlled sectors (1-4 VP each by ring), Discovery Tiles
(2 VP each), Technology Track progress, Monoliths, and species bonuses.
The Traitor Card imposes a -2 VP penalty.

### Key Design Patterns

INFLUENCE DISC ECONOMY: The single most important design innovation in
Eclipse. Influence Discs serve triple duty: they mark which sectors you
control on the map, they track which actions you have taken this round
on your action spaces, and -- most critically -- the leftmost visible
circle on your Influence Track determines your Civilization Upkeep Cost
in Money each round. Every action moves a disc off the track, raising
upkeep. Every sector you control has a disc on the map, also raising
upkeep. Expansion and activity share the same finite resource pool. A
player who explores aggressively and takes many actions per round faces
crushing upkeep costs. A player who stays compact and passes early pays
almost nothing. The system is self-balancing: the more powerful your
empire becomes, the more expensive it is to operate. This creates a
ratcheting cost structure where territorial growth has a compounding
upkeep price that elegantly prevents runaway leaders.

POPULATION CUBE PRODUCTION: Three separate Population Tracks (Money,
Science, Materials) line your Player Board, each with cubes covering
numbers. When you colonize a planet via Colony Ships, you pull a
Population Cube from the matching track, exposing higher production
values. The highest exposed number on each track determines your
resource output during the Upkeep Phase. Colonization IS your economic
engine -- you do not gain resources from sectors directly, you gain
them by moving population there. Losing population in combat (cubes
return to Graveyards, then tracks in Cleanup) directly reduces
production. Advanced Population Squares with star symbols require
specific technologies to colonize, gating the best economic slots
behind the tech tree.

BLUEPRINT SHIP CUSTOMIZATION: Each ship type (Interceptor, Cruiser,
Dreadnought, Starbase) has a blueprint on your Player Board with
pre-printed Ship Parts and empty spaces. The Upgrade action lets you
swap Ship Part Tiles in and out, customizing weapons, shields,
computers, drives, hulls, and energy sources. The constraint is energy
balance: every Ship Part has an Energy Consumption value, and total
consumption cannot exceed total Energy Production on that blueprint.
Upgrading a blueprint instantly upgrades ALL existing ships of that
type, making ship design a strategic commitment affecting your entire
fleet retroactively. The system replaces traditional unit upgrade tech
trees with a freeform engineering puzzle.

TECH TREE WITH CASCADING DISCOUNTS: Three tech categories (Military,
Grid, Nano). Each Technology Tile you research in a category is placed
on that category's track, and each tile already on the track provides
a cumulative -1 Science cost discount for future techs in the same
category. This creates a specialization incentive -- your fourth Nano
tech costs far less than its printed price. Technologies gate ship
parts, enable structures (Orbital, Monolith, Starbase), unlock
Advanced Population Squares, and provide instant bonuses. The tech
tray is a shared market with limited tiles drawn from a bag each round,
creating competition and ensuring no two games offer the same research
landscape.

PASSING INCENTIVE AND TEMPO: The first player to pass in the Action
Phase receives the Starting Player Marker for the next round. This
creates a genuine tension between doing more and securing initiative.
A player who passes early concedes the current round but gains first
action next round -- often critical for grabbing contested sectors or
timing military strikes. The system prevents analysis paralysis by
making inaction a strategic option with concrete rewards.

COMBAT AS SHIP DESIGN PAYOFF: Combat resolves through Engagement Rounds
where each ship type fires in Initiative order (determined by Drive
parts). Weapons contribute dice of specific colors with different
damage profiles: Ion Cannons (yellow, 1 damage), Plasma Cannons and
Missiles (orange, 2 damage), Antimatter Cannons (red, 4 damage).
Computer values add to hit rolls, Shield values subtract. Combat
outcomes are a direct product of Upgrade decisions -- a fleet of cheap
Interceptors loaded with Ion Cannons plays entirely differently from
Dreadnoughts stacked with Plasma Cannons and Improved Hulls. The
Reputation Tile draw after combat (random tiles valued 1-4, keep one
per enemy ship destroyed) adds a press-your-luck VP element that
incentivizes combat even when territorial gain is minimal.

DIPLOMACY AS MUTUAL INVESTMENT: Adjacent players connected by Wormholes
can form Diplomatic Relations by exchanging Ambassador Tiles, each
carrying a Population Cube from the offering player's tracks.
Ambassadors score 1 VP each at game end, and the exported Population
Cube literally boosts your ally's production. Breaking relations through
aggression transfers the Traitor Card (-2 VP, cannot form new
diplomacy). Betrayal is mechanically costly but not impossible, creating
genuine diplomatic tension.

EXPLORATION WITH TILE ORIENTATION: When exploring, you draw from
ring-appropriate stacks and must orient the placed hex so a Wormhole
edge connects to your existing territory. You can also discard instead
of placing. This gives the explorer control over galaxy topology --
creating dead ends to isolate territory or opening connections toward
opponents for future aggression. Inner ring sectors have higher VP
values and better planets but are more contested. Discovery Tiles on
newly explored sectors offer variable rewards or can be kept as 2 VP.

### What Makes It #101

Eclipse was the game that proved a 4X space epic could respect your
time. The Influence Disc economy is the key innovation -- a single
unified system governing action tempo, territorial upkeep, and
strategic commitment without requiring separate resource pools,
token systems, or phases for each function. Where Twilight Imperium
uses strategy card drafting and command tokens to manage tempo across
6-10 hours, Eclipse compresses equivalent strategic depth into 2-3
hours by making every action's cost immediately visible on your
Influence Track. The Blueprint ship customization system delivers the
satisfaction of designing military doctrine without the overhead of
rigid unit upgrade paths. The fixed 9-round clock eliminates pacing
uncertainty. And the Population Cube production system ties economic
growth directly to territorial colonization in a way that makes every
hex placement consequential. Though superseded by the refined Second
Dawn edition at #21, the original Eclipse remains a landmark
demonstration that mechanical elegance and strategic depth are not
mutually exclusive.
