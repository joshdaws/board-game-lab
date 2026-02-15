# Age of Innovation

## Quick Stats

- **Players:** 1-5
- **Time:** 120-200 min
- **Weight:** 4.29/5

## Mechanics

- Network Building
- Variable Player Powers
- Income
- Area Majority / Influence
- Tech Trees

## Categories

- City Building
- Civilization
- Economic
- Fantasy
- Territory Building

## Rulebook

See `rulebooks/55-age-of-innovation.pdf`

## Design Notes

Designer: Helge Ostertag. Published by Feuerland Spiele (2023).

### Theme Integration

Age of Innovation inhabits the same conceptual world as its predecessors Terra
Mystica and Gaia Project — a fantasy landscape where diverse factions terraform
terrain to suit their needs and build civilizations through economic and
technological development. But where Terra Mystica assigned fixed factions with
immutable powers, Age of Innovation introduces modular faction construction.
Players choose a race (which determines their home terrain type, base abilities,
and physical identity) and pair it with an innovation tile (which grants a unique
special power and shapes their strategic trajectory). This combinatorial identity
system means that the same race plays differently depending on which innovation it
selects, and the same innovation creates different strategic incentives depending
on which race wields it. The theme of "innovation" is thus not merely decorative
— it is structurally expressed through the game's core asymmetry system.

The terrain transformation mechanic remains the thematic centerpiece. The game
board features a hex grid of seven terrain types, and each faction can only build
on its home terrain. To expand, players must terraform adjacent hexes by spending
spades to cycle through the terrain wheel until the target hex matches their home
type. This process is expensive and incremental — each step on the terrain wheel
costs resources — which means that expanding into territory far from your native
terrain type is prohibitively costly. The result is that geography is destiny:
your starting position and terrain distribution constrain your expansion in ways
that feel natural rather than arbitrary. Two factions with adjacent home terrains
will compete fiercely for shared border hexes, while factions on opposite sides
of the terrain wheel are natural geographic allies who rarely contest the same
spaces. The terrain wheel creates an implicit alliance structure without any
negotiation mechanics.

The fantasy setting provides thematic permission for the game's abstract economic
systems. The power cycle — where power tokens move through three bowls in a loop,
generating usable power only when they reach bowl III — would feel arbitrary in a
historical context. In a fantasy world of magical civilizations, the idea that
mystical energy must be cultivated through stages before it can be deployed is
intuitive. Similarly, the science tracks (replacing Terra Mystica's cult tracks)
represent technological advancement that unlocks new capabilities, and the Book
of Innovations provides a branching tech tree that lets each faction pursue a
unique developmental path. The fantasy frame liberates the design from historical
plausibility constraints, allowing the mechanical systems to be as abstract and
interlocking as the design requires.

### Core Loop

The game is played over six rounds. Each round consists of an action phase
followed by income and cleanup:

1. ACTION PHASE - Players take turns performing one action each, in clockwise
   order, until all players have passed. Available actions:
   a) TERRAFORM AND BUILD - Pay spades (from power or special abilities) to
      transform a hex to your home terrain, then pay coins and workers to build
      a dwelling on it. This is the primary expansion action.
   b) UPGRADE A STRUCTURE - Replace an existing structure with a more advanced
      one along the building upgrade paths:
      - Dwelling -> Trading House (costs coins and workers; provides income and
        interaction bonuses)
      - Trading House -> Temple (costs coins and workers; provides favor tiles
        and power income) OR Trading House -> Stronghold (costs coins and workers;
        provides a faction-specific special action or ability)
      - Temple -> Sanctuary (costs coins and workers; provides additional favor
        tiles and end-game scoring)
   c) ADVANCE ON A SCIENCE TRACK - Pay scholars to move up on one of the science
      tracks. Each track provides immediate bonuses at certain thresholds and
      end-game scoring based on position. Reaching the top of a track grants a
      powerful one-time bonus.
   d) POWER ACTIONS - Spend power from bowl III to take one of several powerful
      one-time actions (gain resources, terraform, advance on science tracks).
      Each power action can be used only once per round.
   e) BOOK OF INNOVATIONS - Spend scholars and other resources to claim an
      innovation tile from the shared Book of Innovations, gaining a permanent
      ability or scoring condition. Innovations are arranged in a branching tree
      structure; claiming one may unlock access to more advanced innovations.
   f) SPECIAL ACTIONS - Use faction-specific actions (from stronghold or
      innovation tile) or actions gained from favor tiles.
   g) PASS - Claim a bonus tile for the next round and stop taking actions for
      the current round. Early passers get first pick of bonus tiles, creating
      incentive to pass before you have exhausted all productive actions.
2. INCOME PHASE - Receive income based on your structures and position on various
   tracks. Income includes coins, workers, scholars, power, and priests. The
   amount of each resource received depends on which structures you have built
   and which income upgrades you have acquired.
3. CLEANUP - Reset power actions, prepare the next round's bonus tiles, and
   advance the round marker.

End-game scoring combines in-game victory points (earned through building,
upgrading, town formation, science track advancement, and innovation tiles) with
final scoring from area majority on science tracks, network size, and specific
innovation or favor tile bonuses.

### Key Design Patterns

TERRAIN TRANSFORMATION AS SPATIAL PUZZLE: The terrain wheel — a circular
arrangement of seven terrain types where each type is adjacent to two others —
is the game's core spatial constraint. Terraforming a hex requires paying one
spade per step on the wheel to convert it to your home terrain. A hex that is one
step away costs one spade; a hex that is three steps away costs three. Because
spades are expensive (typically costing multiple power or workers), the terrain
wheel creates a gradient of expansion cost radiating outward from your home
terrain. This gradient means that factions with similar home terrains compete
for the same cheap-to-terraform hexes, while factions on opposite sides of the
wheel expand into non-overlapping territory. The spatial puzzle is not just about
where to build but about how much it costs to get there, and this cost calculus
interacts with your resource income, your neighbors' positions, and the bonus
tiles available each round. Efficient terraforming — finding the cheapest path
to a contiguous network — is the primary strategic skill the game tests.

POWER CYCLE ECONOMY: The power system is a three-bowl economy that functions as
a renewable but rate-limited resource. Power tokens begin in bowl I, move to bowl
II when activated (by opponents building adjacent to your structures or by certain
income effects), and move to bowl III when activated again. Only power in bowl III
can be spent, and spent power returns to bowl I, restarting the cycle. This
three-stage loop means that power is never permanently depleted — it is always
cycling — but the rate at which it becomes available is constrained by how quickly
tokens transit through the bowls. Players can sacrifice power (permanently removing
tokens from bowl II to move the rest to bowl III) to accelerate the cycle at the
cost of long-term capacity. This sacrifice decision is one of the game's deepest
strategic choices: early sacrifice provides immediate power for critical early-game
actions but reduces the total power available for the rest of the game. The power
cycle also creates indirect player interaction — building near opponents activates
their power, which means that your expansion decisions fuel your neighbors'
economies. This creates a tension between expanding toward opponents (gaining
adjacency bonuses and territory) and expanding away from them (denying them power
activation).

MODULAR FACTION DESIGN: Age of Innovation's signature departure from its
predecessors is the race-plus-innovation combination system. Rather than selecting
a single faction with fixed abilities, players draft a race (determining home
terrain, starting resources, and base stats) and an innovation tile (determining
a unique special power). The combinatorial space is enormous — dozens of race and
innovation pairings create distinct strategic profiles. A race with cheap
terraforming paired with an innovation that rewards building density plays very
differently from the same race paired with an innovation that rewards science
track advancement. This modularity solves the "solved faction" problem that
plagued Terra Mystica, where experienced players could memorize optimal strategies
for each faction. In Age of Innovation, the variable pairing ensures that even
familiar races present novel strategic puzzles depending on their innovation.

BOOK OF INNOVATIONS AS BRANCHING TECH TREE: The Book of Innovations is a shared
display of innovation tiles arranged in a branching structure. Players spend
scholars and resources to claim innovations, which provide permanent abilities,
passive bonuses, or end-game scoring conditions. The branching structure means
that claiming an early innovation may unlock access to more powerful downstream
innovations, creating a tech-tree progression within the game. Because the Book
is shared, innovations claimed by one player are permanently unavailable to
others, creating competition for valuable nodes. The tech tree also interacts
with the race-plus-innovation identity system: your starting innovation tile
may synergize with specific branches of the Book, guiding your technological
development. The result is that each player develops along a unique technological
trajectory that compounds their initial faction identity.

TOWN FORMATION AS CLUSTER REWARD: When a player builds a connected group of
structures whose combined power value meets or exceeds a threshold (typically 7),
they form a town. Town formation grants an immediate reward — a town tile
providing VP, resources, or a permanent ability — and the structures in the town
gain a town marker for end-game scoring. This mechanic rewards dense, connected
building over sprawling expansion, creating tension with the terraforming system
that encourages spreading across the map to claim territory. A player who builds
tightly forms towns quickly (gaining bonuses) but controls less territory. A player
who builds widely claims more hexes but may struggle to connect structures into
towns. The town threshold is high enough that forming one requires deliberate
planning — you cannot accidentally stumble into a town — and the town tile rewards
are significant enough that ignoring town formation is a serious strategic
sacrifice.

SCIENCE TRACKS AS PARALLEL SCORING AXIS: The science tracks (replacing Terra
Mystica's cult tracks) provide a non-spatial scoring dimension. Each track
represents a field of knowledge, and advancing on a track costs scholars (a
dedicated resource). Tracks provide threshold bonuses (immediate rewards at
specific positions), end-game VP based on relative position, and area-majority
scoring at game end. The tracks interact with the rest of the game through
multiple channels: some innovation tiles reward track advancement, some favor
tiles provide bonuses based on track position, and some power actions allow
track advancement. Because track advancement is competitive (area majority
determines bonus VP), players must monitor opponents' track positions and
decide whether to contest a track or concede it. The tracks provide a strategic
outlet for players who are geographically constrained — if the map does not
favor your expansion, you can pivot to track advancement as an alternative VP
source.

PASSING INCENTIVES AND ROUND STRUCTURE: The pass action is not merely "do
nothing" — it is a strategic choice with real rewards. When you pass, you select
a bonus tile for the next round (providing income, a special ability, or scoring
conditions). Bonus tiles are first-come-first-served, so passing early gives you
the best selection. This creates a tension between staying in the round to take
more actions (maximizing current-round productivity) and passing early to secure
a valuable bonus tile (maximizing next-round potential). The round structure
amplifies this tension: income is received at the start of each round based on
your structures, so building before passing is optimal, but waiting to build
means others may claim the terrain you want. The pass-and-pick system elegantly
converts the mundane act of ending your turn into a meaningful strategic decision.

ADJACENCY INTERACTION AS INDIRECT COMPETITION: Age of Innovation features no
direct conflict — you cannot attack opponents' structures or steal their
resources. Instead, interaction is mediated through adjacency. Building next to
an opponent's structure activates their power (helping them) but also blocks them
from expanding into that hex (hurting them). Trading houses generate bonus income
when adjacent to opponents. Town formation may require building into contested
areas. This adjacency-based interaction creates a game where you are constantly
aware of your neighbors without ever directly attacking them — a hallmark of the
Euro-game tradition that Age of Innovation refines to an art. The interaction is
subtle but pervasive: every building placement on the map has implications for
every adjacent player's power economy, expansion options, and town-formation
potential.

### What Makes It #55

Age of Innovation is the culmination of a design lineage that began with Terra
Mystica in 2012 and continued through Gaia Project in 2017. What distinguishes
it from its predecessors is the modular faction system — the race-plus-innovation
pairing — which transforms a game that was already strategically deep into one
that is also combinatorially vast. Where Terra Mystica players eventually
memorized optimal strategies for each faction, Age of Innovation ensures that
every game presents a novel strategic puzzle because the faction identity itself
is variable. The terrain transformation system remains one of the most elegant
spatial puzzles in modern board gaming, creating competition and cooperation
through geography rather than combat. The power cycle economy rewards long-term
planning and makes every opponent's action relevant to your own resource flow.
And the six-round structure, with its income phases and passing incentives,
creates a rhythmic cadence of expansion, consolidation, and strategic pivoting
that rewards adaptive play over rigid optimization. Ostertag has not merely
iterated on Terra Mystica — he has resolved its primary weakness (solved
factions) while preserving its primary strength (interlocking spatial economics),
producing a design that honors its lineage while standing firmly on its own.
