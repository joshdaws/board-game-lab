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
Players choose a faction (which determines unique abilities and special powers)
and pair it with a planning display (which determines home terrain type, starting
resources, and building costs). This combinatorial identity system means that the
same faction plays differently depending on which planning display it uses, and
the same planning display creates different strategic incentives depending on
which faction wields it. The theme of "innovation" is thus not merely decorative
— it is structurally expressed through the game's core asymmetry system.

The terrain transformation mechanic remains the thematic centerpiece. The game
board features a hex grid of seven terrain types, and each faction can only build
on its home terrain. To expand, players must terraform adjacent hexes by spending
spades to cycle through the terraforming circle until the target hex matches their home
type. This process is expensive and incremental — each step on the terraforming circle
costs resources — which means that expanding into territory far from your native
terrain type is prohibitively costly. The result is that geography is destiny:
your starting position and terrain distribution constrain your expansion in ways
that feel natural rather than arbitrary. Two factions with adjacent home terrains
will compete fiercely for shared border hexes, while factions on opposite sides
of the terraforming circle are natural geographic allies who rarely contest the same
spaces. The terraforming circle creates an implicit alliance structure without any
negotiation mechanics.

The fantasy setting provides thematic permission for the game's abstract economic
systems. The power cycle — where power tokens move through three bowls in a loop,
generating usable power only when they reach bowl III — would feel arbitrary in a
historical context. In a fantasy world of magical civilizations, the idea that
mystical energy must be cultivated through stages before it can be deployed is
intuitive. Similarly, the four discipline tracks on the science display (replacing Terra
Mystica's cult tracks) represent technological advancement that unlocks new
capabilities, and the Innovation display provides a set of acquirable tiles that
lets each faction pursue a unique developmental path. The fantasy frame liberates the design from historical
plausibility constraints, allowing the mechanical systems to be as abstract and
interlocking as the design requires.

### Core Loop

The game is played over six rounds. Each round consists of three phases —
income, actions, and science bonus/preparation:

1. INCOME PHASE - Receive income based on your structures and position on various
   tracks. Income includes coins, tools, scholars, power, and books. The amount
   of each resource received depends on which structures you have built and which
   income upgrades you have acquired.
2. ACTION PHASE - Players take turns performing one action each, following the
   turn order display, until all players have passed. Available actions:
   a) TERRAFORM AND BUILD - Pay spades (from tools or special abilities) to
      transform a hex to your home terrain, then pay tools and coins to build
      a workshop on it. This is the primary expansion action.
   b) UPGRADE A STRUCTURE - Replace an existing structure with a more advanced
      one along the building upgrade paths:
      - Workshop -> Guild (costs tools and coins; provides income and
        interaction bonuses)
      - Guild -> Palace (costs tools and coins; provides a unique Palace tile
        ability) OR Guild -> School (costs tools and coins; provides a
        competency tile and science advancement)
      - School -> University (costs tools and coins; provides an additional
        competency tile)
   c) SEND A SCHOLAR - Place a scholar on the science display to advance on one
      of the four discipline tracks. Each track provides immediate bonuses at
      certain thresholds and end-game scoring based on position. Reaching the
      top of a track grants a powerful one-time bonus.
   d) POWER ACTIONS - Spend power from bowl III to take one of several powerful
      one-time actions (gain resources, terraform, advance on science tracks).
      Each power action can be used only once per round.
   e) DEVELOP AN INNOVATION - Spend books (at least 5, some requiring specific
      disciplines) to claim an innovation tile from the Innovation display,
      gaining a permanent ability or scoring condition. Players who have not yet
      built their palace must also pay 5 coins.
   f) SPECIAL ACTIONS - Use faction-specific actions (from palace or
      innovation tile) or actions gained from competency tiles.
   g) PASS - Claim a bonus tile for the next round and stop taking actions for
      the current round. Early passers get first pick of bonus tiles, creating
      incentive to pass before you have exhausted all productive actions.
3. SCIENCE BONUS AND PREPARATION - Gain science bonuses based on discipline
   track positions and the current round score tile. Reset power and book
   actions, prepare the next round's bonus tiles, and advance the round marker.

End-game scoring combines in-game victory points (earned through building,
upgrading, city formation, science track advancement, and innovation tiles) with
final scoring from area majority on discipline tracks, largest connected building
group, leftover resources, and specific innovation or competency tile bonuses.

### Key Design Patterns

TERRAIN TRANSFORMATION AS SPATIAL PUZZLE: The terraforming circle — a circular
arrangement of seven terrain types where each type is adjacent to two others —
is the game's core spatial constraint. Terraforming a hex requires paying one
spade per step on the circle to convert it to your home terrain. A hex that is one
step away costs one spade; a hex that is three steps away costs three. Because
spades are expensive (typically costing multiple power or tools), the terraforming
circle creates a gradient of expansion cost radiating outward from your home
terrain. This gradient means that factions with similar home terrains compete
for the same cheap-to-terraform hexes, while factions on opposite sides of the
circle expand into non-overlapping territory. The spatial puzzle is not just about
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
predecessors is the faction-plus-planning-display combination system. Rather than
selecting a single faction with fixed terrain and abilities, players draft a
faction tile (determining unique abilities and special powers) and a planning
display (determining home terrain type, starting resources, and building costs).
The combinatorial space is enormous — twelve factions paired with seven planning
displays create distinct strategic profiles. A faction with cheap terraforming
paired with a planning display whose terrain is scarce on the board plays very
differently from the same faction paired with a planning display whose terrain
is abundant. This modularity solves the "solved faction" problem that plagued
Terra Mystica, where experienced players could memorize optimal strategies for
each faction. In Age of Innovation, the variable pairing ensures that even
familiar factions present novel strategic puzzles depending on their terrain.

INNOVATION DISPLAY AS TECH TREE: The Innovation display is a shared set of
innovation tiles arranged in columns. Players spend books and sometimes coins
to claim innovations, which provide permanent abilities, immediate points,
or additional buildings. The display structure means that tiles in higher columns
cost more books of specific disciplines, creating a progression within the game.
Because the display is shared, innovations claimed by one player are permanently
unavailable to others, creating competition for valuable tiles. Each player may
develop up to three innovations during the game, placed on their planning display.
The result is that each player develops along a unique technological trajectory
that compounds their initial faction identity.

CITY FORMATION AS CLUSTER REWARD: When a player builds a connected group of
at least four buildings whose combined power value meets or exceeds 7,
they found a city. City formation grants an immediate reward — a city tile
providing VP, resources, or a permanent ability — and the buildings in the city
gain a city marker. This mechanic rewards dense, connected
building over sprawling expansion, creating tension with the terraforming system
that encourages spreading across the map to claim territory. A player who builds
tightly founds cities quickly (gaining bonuses) but controls less territory. A player
who builds widely claims more hexes but may struggle to connect buildings into
cities. The city threshold is high enough that forming one requires deliberate
planning — you cannot accidentally stumble into a city — and the city tile rewards
are significant enough that ignoring city formation is a serious strategic
sacrifice.

DISCIPLINE TRACKS AS PARALLEL SCORING AXIS: The discipline tracks (replacing Terra
Mystica's cult tracks) provide a non-spatial scoring dimension. Each track
represents a field of knowledge, and advancing on a track costs scholars (a
dedicated resource). Tracks provide threshold bonuses (immediate rewards at
specific positions), end-game VP based on relative position, and area-majority
scoring at game end. The tracks interact with the rest of the game through
multiple channels: some innovation tiles reward track advancement, some competency
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
from expanding into that hex (hurting them). Guilds generate bonus income
when adjacent to opponents. City formation may require building into contested
areas. This adjacency-based interaction creates a game where you are constantly
aware of your neighbors without ever directly attacking them — a hallmark of the
Euro-game tradition that Age of Innovation refines to an art. The interaction is
subtle but pervasive: every building placement on the map has implications for
every adjacent player's power economy, expansion options, and city-formation
potential.

### What Makes It #55

Age of Innovation is the culmination of a design lineage that began with Terra
Mystica in 2012 and continued through Gaia Project in 2017. What distinguishes
it from its predecessors is the modular faction system — the faction-plus-planning-display
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
