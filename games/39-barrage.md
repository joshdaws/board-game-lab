# Barrage

## Quick Stats

- **Players:** 1-4
- **Time:** 90-180 min
- **Weight:** 4.11/5

## Mechanics

- Contracts
- End Game Bonuses
- Income
- Network and Route Building
- Ownership
- Solo / Solitaire Game
- Variable Player Powers
- Worker Placement

## Categories

- Economic
- Environmental
- Industry / Manufacturing

## Rulebook

See `rulebooks/39-barrage.pdf`

## Design Notes

Designers: Tommaso Battista & Simone Luciani. Published by Cranio Creations (2019).

### Theme Integration

Barrage is set in an alternate 1930s Alpine landscape where competing energy
companies race to harness hydroelectric power. The theme is not decorative — it
is the game's physics engine. Water enters the map from headwater sources at the
top of the mountain and flows downhill through a network of basins, accumulating
behind dams and continuing its journey after being used to generate electricity.
Every mechanical system in the game maps directly to a physical reality of
hydroelectric engineering: dams hold water, conduits channel it to powerhouses,
and powerhouses convert flow into energy. The spatial puzzle of where to build
infrastructure is inseparable from the topography of the map — elevation
determines water flow direction, basin capacity determines how much water a dam
can hold, and conduit length determines which powerhouses a dam can reach.

The 1930s industrial setting reinforces the game's economic brutality. This is
not a cooperative infrastructure project; it is a corporate land grab. Companies
are racing to claim the most valuable dam sites and water routes before
competitors lock them out. The construction wheel — where spent resources vanish
for multiple rounds before returning — evokes the slow, capital-intensive reality
of building massive concrete structures in mountain terrain. You are not
abstractly "placing workers"; you are committing engineers, concrete, and heavy
machinery to multi-year construction projects that tie up your capital for the
foreseeable future.

Most critically, the water flow system creates a thematic tension that is also
the game's central strategic dilemma: water does not disappear after you use it.
When your powerhouse generates electricity, the water exits downstream — and if
an opponent has a dam below you, it fills their reservoir. You are literally
powering your competitor's future turns every time you produce energy. This
creates a thematic narrative where companies must balance their own production
needs against the knowledge that every kilowatt they generate may enable a
rival's next move.

### Core Loop

The game spans five rounds, each following a structured sequence:

1. INCOME AND HEADWATER PHASE — Players receive income based on revealed spaces
   on their company board. New water drops are placed at headwater sources on the
   map, flowing downhill to fill the highest available dams. As the game
   progresses, the volume of water entering the system increases, raising the
   stakes of dam positioning.

2. ACTION PHASE — Players take turns placing Engineers (workers) on the executive
   action board to perform one action at a time, continuing until all players
   have placed or passed. Available actions include:
   a) BUILD — Construct a dam, conduit, elevation, or powerhouse by paying
      concrete, machinery, and/or workers. Spent resources go onto the
      construction wheel, not back to supply.
   b) PRODUCE ENERGY — Activate a dam-conduit-powerhouse chain to generate
      energy. Water flows from the dam through the conduit to the powerhouse,
      and the amount of energy produced equals the drop in elevation between dam
      and powerhouse. Produced water continues flowing downstream.
   c) MANAGE CONTRACTS — Acquire contracts that convert energy production into
      VP and resources. Contracts define what you gain when you produce specific
      amounts of energy.
   d) ACQUIRE TECHNOLOGY — Gain technology tiles that modify building rules or
      grant special abilities. Installed on your company board, these provide
      permanent advantages.
   e) USE EXTERNAL WORKS — Build or use neutral structures available to all
      players, providing alternative production or water manipulation options.
   f) MANAGE WATER — Manipulate water placement on the map, moving water between
      connected basins.

3. PRODUCTION PHASE — Fulfilled contracts pay out VP and resources. Unfulfilled
   contracts may carry penalties.

4. END OF ROUND — The construction wheel rotates one segment. Resources that have
   completed their full rotation return to the player's supply. Round scoring
   bonuses are resolved.

The fundamental rhythm is: commit scarce resources to build infrastructure, use
that infrastructure to convert water into energy, convert energy into VP through
contracts, then wait for your spent resources to cycle back through the
construction wheel. Every round tightens the screw — more water enters the
system, the board becomes more contested, and the construction wheel means
early-round investments are only now returning.

### Key Design Patterns

WATER FLOW AS SHARED RESOURCE TOPOLOGY: Water is not owned — it is a physical
substance that obeys gravity. When water enters the map, it flows to the
topmost available dam. When a player produces energy, the water exits their
powerhouse and continues downstream, potentially filling an opponent's dam
for free. This creates a network externality where every production action has
second-order consequences visible to all players. The map is not just a spatial
puzzle of where to build; it is a flow network where your infrastructure
interacts with everyone else's infrastructure through the medium of water.
Skilled players read the entire water topology — not just their own dams, but
the full chain of what happens when water moves through the system. Building a
dam at the bottom of the mountain is cheap in terms of competition but
strategically powerful: you collect everyone else's runoff.

CONSTRUCTION WHEEL AS TEMPORAL RESOURCE LOCK: The construction wheel is Barrage's
most distinctive economic mechanism. When you spend workers, machinery, or
concrete to build, those resources are placed on your personal construction
wheel, which rotates one segment per round. Depending on wheel position,
resources take 2-5 rounds to return to your supply. This transforms the
economy from a simple spend-and-recover model into a temporal commitment
system. Every building action is simultaneously a production decision and a
cash-flow decision: can you afford to lock up these resources for three rounds?
The wheel creates a planning horizon that extends well beyond the current turn.
Players who over-invest early find themselves resource-starved in critical
mid-game rounds. Players who conserve too long find the best building sites
claimed. The wheel also means that the game's economy is front-loaded with
scarcity — you start with your full resource complement, but the moment you
build anything, your effective supply shrinks until the wheel cycles.

ELEVATION AS VALUE MULTIPLIER: Energy production is determined by the elevation
drop between dam and powerhouse — not by the amount of water used. A single
unit of water flowing from a high-altitude dam to a low-altitude powerhouse
generates more energy than the same water at a lower elevation differential.
This creates a spatial value gradient across the map: high-altitude dam sites
are premium real estate not because they hold more water, but because the water
they hold is worth more per unit when converted to energy. The elevation system
also creates interesting conduit decisions — longer conduits that bridge a
greater elevation gap produce more energy per production action but cost more
to build and are harder to route through contested terrain.

TIGHT ACTION ECONOMY WITH ESCALATING COMPETITION: Each player has a limited
number of Engineers to place each round, and the executive action board uses
a worker-placement blocking model where the best action spaces are claimed
first. Multiple copies of each action exist at varying costs — you can always
build, but the second or third player to choose "build" in a round pays extra
resources for the privilege. This creates temporal competition layered on top
of the spatial competition for dam sites. Turn order matters enormously: the
first player to produce energy in a round gets to choose which contracts to
fulfill before opponents can react, while the first to build claims the most
efficient action space. The limited Engineer pool means you cannot do
everything — typically 4-6 actions per round in a game where you want to
perform 8-10. Prioritization is the primary skill.

ASYMMETRIC EXECUTIVE OFFICERS: Each player's company is led by an executive
officer with a unique special ability that biases their strategic direction.
One officer might reduce building costs in specific terrain, another might
gain bonus resources when the construction wheel returns items, a third
might manipulate water flow. These asymmetries are not cosmetic — they create
genuinely different strategic incentives that interact with the map's topology
in varied ways. The officer selection (or draft) at game start is one of the
most consequential decisions in the game, as it defines your company's
comparative advantage for the entire five-round arc.

CONTRACT SYSTEM AS CONVERSION OPTIMIZATION: Contracts mediate the translation
of energy into victory points and resources. Players must acquire contracts
before producing energy, and each contract specifies an energy threshold and
a reward. Higher-value contracts require more energy per activation but offer
disproportionately better returns, creating an incentive to build high-output
production chains rather than many small ones. The contract market is shared
and limited, adding another competitive dimension: securing the right contract
before your infrastructure is ready is a timing puzzle, while waiting too long
risks the contract being claimed by an opponent. The interplay between
infrastructure capacity and contract availability means production planning
must account for what the market offers, not just what your dams can produce.

BLOCKING AS PRIMARY INTERACTION: Barrage is one of the most confrontational
games in the heavy Euro genre. Blocking operates on multiple dimensions
simultaneously: spatial (claiming dam sites and conduit routes), temporal
(taking action spaces before opponents), hydrological (positioning dams to
intercept water before it reaches competitors), and economic (acquiring
contracts or technology tiles that opponents need). The water flow system
means that even cooperative-seeming positions — two players with dams on the
same river — involve constant tension about who benefits from production
runoff. There is no engine you can build in isolation; every piece of
infrastructure exists in a competitive ecology defined by the map and the
water network.

FIVE-ROUND ARC WITH INCREASING PRESSURE: The game's five-round structure
creates a compressed narrative arc. Round 1 is about initial positioning —
claiming key dam sites and establishing your first production chain. Rounds
2-3 are the construction phase, where players race to build conduits and
powerhouses before opponents lock out routes. Rounds 4-5 are the production
phase, where the focus shifts from building to maximizing energy output from
existing infrastructure. Water volume increases each round, meaning the
system becomes more productive — and more contested — as the game progresses.
The construction wheel ensures that resources spent in Round 1 are just
returning in Rounds 3-4, creating a mid-game resource trough that punishes
over-extension and rewards efficient planning.

### What Makes It #39

Barrage's distinction lies in its commitment to a single thematic system —
water flow — as the organizing principle for every strategic decision in the
game. Where most heavy Euros create complexity through layered subsystems that
operate semi-independently, Barrage achieves its depth through a single
physical simulation that touches everything. The water flow network, the
elevation-based energy calculation, the construction wheel's temporal resource
lock, and the spatial competition for dam sites all interact through one
unified system rather than running on parallel tracks.

The construction wheel solves a persistent problem in worker-placement Euros:
the feeling that resources are infinitely fungible across turns. In most games,
you spend resources and earn them back next round with minimal friction. The
wheel introduces genuine capital commitment — the sensation of watching your
resources slowly rotate back toward you while the board state changes around
you is unique to Barrage. It forces players to plan not just what to build, but
when to build it, and to accept that every construction project has an
opportunity cost measured in rounds of reduced capacity.

The water-as-shared-externality design creates interaction density rare in
Euro games. Most competitive Euros achieve interaction through blocking —
taking something your opponent wanted. Barrage does this too, but adds a
second layer: your productive actions generate positive externalities for
downstream opponents. This means the decision to produce energy is never
purely self-interested; it always involves calculating who else benefits and
whether the timing favors them. The result is a game where reading the board
state — understanding the full flow network and everyone's infrastructure
position — matters as much as optimizing your own engine. Barrage stands as
a design argument that the most interesting strategic complexity comes not
from adding more systems, but from making one system interact with itself
in deeply consequential ways.
