# Stone Age

## Quick Stats

- **Players:** 2-4
- **Time:** 60-90 min
- **Weight:** 2.46/5

## Mechanics

- Contracts
- Dice Rolling
- End Game Bonuses
- Set Collection
- Turn Order Progressive
- Worker Placement

## Categories

- Dice
- Economic
- Prehistoric

## Rulebook

See `rulebooks/186-stone-age.pdf`

## Design Notes

Designer: Bernd Brunnhofer (Michael Tummelhofer). Published by Hans im Gluck (2008).

### Theme Integration

Stone Age places players as tribal leaders guiding their people through the
early development of human civilization. Players dispatch tribe members to
gather resources — wood, brick, stone, and gold — hunt for food, expand
their population, develop tools, and construct buildings and civilization
cards. The prehistoric setting is not merely cosmetic; it grounds the game's
core tension between growth and sustenance. Every new tribe member requires
food at the end of each round, and the earliest rounds feel genuinely
precarious — you cannot simply grow without feeding, mirroring the real
survival pressures of Neolithic communities. The progression from subsistence
(food gathering) to surplus (agriculture) to cultural development
(civilization cards) follows the actual arc of early human history.

The resource hierarchy reflects historical reality. Wood is the most
abundant and least valuable resource, while gold is scarce and highly
valued. Players gather resources by placing workers at resource locations
and rolling dice — more workers mean more dice and thus a higher expected
yield, but with variance. This dice-based gathering models the uncertainty
of primitive resource extraction: unlike modern industrial processes, early
humans could not predict whether a day of quarrying would yield one stone
or three. Tools, which let you add fixed values to die rolls, represent
technological advancement reducing this uncertainty. The progression from
rolling dice with no modifiers to rolling with multiple tool bonuses is
the mechanical expression of civilization's core project: taming randomness
through technology.

The agriculture track represents the single most important technological
leap in human history — the shift from hunting and gathering to farming.
In game terms, advancing on the agriculture track permanently reduces your
dependence on the food hunt, freeing workers for other activities. A player
who invests early in agriculture builds a stable food engine that compounds
over the game's duration, while a player who neglects agriculture must
constantly divert workers to the hunting grounds. This mechanical
relationship between agriculture investment and workforce flexibility
captures the fundamental insight that food security enables all other
forms of civilizational progress.

### Core Loop

The game plays over a variable number of rounds until at least one of four
building stacks is depleted or there are not enough civilization cards to
refill the display. Each round has three phases:

**Phase 1 — WORKER PLACEMENT (Turn Order, Progressive)**

Starting with the first player and rotating clockwise, each player places
one or more workers on a single location:

1. HUNTING GROUNDS — Place any number of workers. Roll that many dice;
   total divided by 2 (rounded down) equals food collected.
2. FOREST — Place up to 7 workers. Roll that many dice; total divided by
   3 equals wood collected.
3. CLAY PIT — Place up to 7 workers. Roll that many dice; total divided
   by 4 equals brick collected.
4. QUARRY — Place up to 7 workers. Roll that many dice; total divided by
   5 equals stone collected.
5. RIVER — Place up to 7 workers. Roll that many dice; total divided by
   6 equals gold collected.
6. HUT — Place exactly 2 workers (must be from same player). Gain one
   new tribe member next phase.
7. FIELD — Place exactly 1 worker. Advance agriculture marker by one
   step (permanently increases food production).
8. TOOL MAKER — Place exactly 1 worker. Gain one tool (adds +1 to any
   future die roll, once per round per tool, up to 3 tools max value +4).
9. BUILDING TILES — Place 1 worker on any face-up building tile to
   reserve the right to purchase it.
10. CIVILIZATION CARDS — Place 1-4 workers on a civilization card
    (position determines cost: 1-4 resources of any type).

Placement continues round-robin (each player places at one location per
turn) until all players have placed all workers.

**Phase 2 — RESOLVE ACTIONS (Player by Player)**

Each player retrieves all workers and resolves each location:
   a) Roll dice at resource locations and collect resources
   b) Apply tool bonuses to any roll (each tool usable once per round)
   c) Pay resources to claim reserved building tiles (score VP immediately)
   d) Pay resources to claim civilization cards (varied end-game scoring)
   e) Receive new tribe member if Hut was used
   f) Advance agriculture or tool tracks if those locations were used

**Phase 3 — FEED YOUR TRIBE**

1. Each player must pay food equal to their number of tribe members.
2. Agriculture track provides free food (1 food per level, permanently).
3. Shortfall: lose 10 VP per missing food, or spend any resources as food
   at 1:1 ratio.

**End Game**: When triggered, complete the current round, then score
end-game bonuses from civilization cards. Highest total VP wins.

### Key Design Patterns

DICE-MITIGATED WORKER PLACEMENT: Stone Age's defining innovation is
combining dice rolling with worker placement, two mechanisms rarely paired
because dice introduce variance that worker placement purists avoid. The
design makes this pairing work through quantity: placing more workers at a
resource location means rolling more dice, which by the law of large
numbers reduces variance as a percentage of expected yield. A single worker
at the quarry might roll anything from 1-6 (yielding 0-1 stone), but five
workers roll 5d6 for an expected 3.5 stone with moderate variance. The
dice add excitement and narrative to what could be a dry optimization
exercise, while the worker quantity and tool systems provide enough
mitigation that skilled players consistently outperform unskilled ones.
The generalizable principle is that variance is acceptable when players
have meaningful tools to manage it.

TOOL TRACK AS VARIANCE REDUCTION: Tools are permanent assets that add
fixed values to die rolls. Each tool provides +1, and they can be
distributed across different rolls or stacked on one. Tools convert
uncertain dice outcomes into more predictable results — a player with
three tools effectively adds +3 to any critical roll, turning a potential
failure into a guaranteed minimum. The tool investment competes with other
uses of the single worker required to advance the track, creating an
opportunity cost that prevents tools from being a dominant strategy. The
design pattern is elegant: the mechanism that reduces randomness is itself
a scarce resource requiring strategic investment.

AGRICULTURE AS PERMANENT INCOME: The agriculture track is a permanent
upgrade — each level provides one free food every round for the rest of
the game. This makes agriculture an investment with compound returns: a
level gained in round 2 pays off for perhaps 8-10 rounds, while a level
gained in round 8 pays off for only 2-3. The track creates a strategic
tension between early investment (high compound value but immediate
opportunity cost) and deferred investment (lower total value but preserves
early flexibility). Players who recognize this compound structure gain a
significant advantage, and the agriculture track functions as the game's
primary strategic differentiator between novice and experienced play.

PROGRESSIVE TURN ORDER: Turn order rotates clockwise each round (the
first player marker passes left). This progressive system ensures no
player has permanent positional advantage in a game where placement
priority matters enormously — the hut, field, and tool maker each accept
only one player per round. Progressive turn order is a simple but
effective fairness mechanism that avoids the complexity of auction-based
or spending-based turn order systems while ensuring equitable access to
contested locations over the game's duration.

CIVILIZATION CARDS AS END-GAME MULTIPLIERS: Civilization cards provide
the game's primary strategic diversity. Each card has an immediate
resource or tool bonus, plus an end-game scoring condition. Cards score
based on set collection (unique symbols multiply), tool multipliers,
building multipliers, agriculture multipliers, or tribe size multipliers.
The card system means that two players pursuing identical resource
strategies may score very differently depending on which scoring
multipliers they collect. Cards create divergent paths through a
shared decision space — the same board position looks different depending
on which scoring axes you have invested in.

FEEDING PRESSURE AS GROWTH CONSTRAINT: The requirement to feed all tribe
members every round is the game's primary balancing mechanism. Adding a
new worker increases your action capacity but also increases your food
burden. A player who grows too fast without investing in agriculture or
food stockpiles will hemorrhage points to starvation penalties. The
feeding requirement forces players to balance expansion against
sustainability, preventing the runaway growth that would occur if
workers were free. It also creates catch-up dynamics: the player with
the smallest tribe needs less food, freeing more workers for productive
actions rather than food gathering.

RESOURCE DIVISOR HIERARCHY: The five gathering locations use different
divisors (food/2, wood/3, brick/4, stone/5, gold/6) to create a natural
resource hierarchy from the same dice-rolling mechanism. This is an
unusually elegant design solution — rather than using different dice,
different quantities, or different probability tables, the game uses a
single unified mechanism (roll Xd6, divide by N) with only the divisor
changing. Higher-value resources require more workers per unit of
expected output, which naturally creates scarcity and forces allocation
tradeoffs. The divisor system is also immediately intuitive: players
understand that gold is harder to get than wood without consulting a
probability chart.

### What Makes It #186

Stone Age endures as the most accessible worker placement game that still
rewards strategic depth. Brunnhofer's key insight was that dice rolling —
anathema to the Eurogame purist — actually makes worker placement more
engaging for a broader audience by adding tension to resource collection
and reducing the analysis paralysis that plagues deterministic placement
games. The tool and agriculture tracks provide clear upgrade paths that
give new players strategic handholds without constraining experienced
players. The civilization card scoring system creates replayability by
rewarding different strategic emphases each game. At 2.46 weight, Stone
Age occupies the ideal gateway-plus position: complex enough to sustain
repeated play but simple enough to teach in ten minutes. It is the game
that proved worker placement could be a mass-market mechanism rather than
a niche enthusiast one.
