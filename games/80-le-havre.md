# Le Havre

## Quick Stats

- **Players:** 1-5
- **Time:** 30-150 min
- **Weight:** 3.76/5

## Mechanics

- Worker Placement
- Resource Management
- Building
- Loans

## Categories

- City Building
- Economic
- Industry
- Nautical

## Rulebook

See `rulebooks/80-le-havre.pdf`

## Design Notes

Designer: Uwe Rosenberg. Published by Lookout Games (2008).

### Theme Integration

Le Havre is set in the French port city of the same name during the industrial
era, and the game's economic architecture maps closely to the logic of a
developing port economy. Players are entrepreneurs building up the city's
commercial and industrial infrastructure, acquiring raw goods from incoming
shipments, processing those goods through increasingly sophisticated buildings,
and ultimately converting everything into wealth through shipping. The port
setting is not incidental — it determines the game's fundamental rhythm. Goods
arrive by ship in predictable waves (the offer spaces fill each round), and
the city's buildings represent the industrial capacity to transform those goods
into more valuable forms. The economic narrative is one of vertical integration:
a player who owns a colliery, a cokery, a steel mill, and a shipping line has
built a complete industrial pipeline from raw material to finished export.

The building ownership system encodes a specific economic idea about property
and rent. When you construct a building, you own it permanently, and other
players who wish to use it must pay you an entry fee. This creates a landlord
economy where infrastructure investment generates passive income. The strategic
implication is profound: building a popular processing facility is not just
about using it yourself — it is about creating a toll that taxes opponents'
economic activity. Conversely, using an opponent's building is not just a cost —
it funds their empire. Every use of a shared building is a negotiation conducted
through game mechanics rather than player communication, and this silent
economic dialogue is the core of Le Havre's interactive design.

Food pressure — the requirement to feed your workers at regular harvest
intervals — grounds the game's abstraction in survival economics. Before you
can build steel mills and shipping empires, you must eat. The feeding
requirement prevents players from pursuing purely long-term strategies without
attending to immediate subsistence needs. It creates a rhythmic tension between
investment (building for the future) and consumption (feeding for the present)
that mirrors the real economic challenge of capital allocation in developing
economies. Every franc and every fish spent on feeding is a franc or fish not
invested in industrial growth.

### Core Loop

The game plays over a fixed number of rounds determined by player count
(with a shorter variant available). Each round follows this structure:

1. PLAYER TURNS — A round consists of 7 individual player turns (players have
   different numbers of turns per round based on player count). On your turn,
   you perform two mandatory steps:
   a. SUPPLY ACTION — Place your ship marker on the next Supply tile and add
      the two shown goods (one token from each of two Supply spaces) to their
      corresponding Offer spaces. Goods accumulate across turns if unclaimed,
      making each Offer space increasingly attractive the longer it goes
      untouched.
   b. MAIN ACTION — Choose one of two options:
      - TAKE GOODS FROM AN OFFER SPACE — Choose any Offer space and take all
        tokens on it (all accumulated units).
      - USE A BUILDING — Place your worker in any unoccupied building (yours,
        an opponent's, or the town's) and execute its action. If it is an
        opponent's building, pay the entry fee. Building actions include:
        processing goods (e.g., convert iron to steel), constructing new
        buildings, and more.
   In addition, at any time during your turn you may BUY buildings or ships
   (paying their purchase price) and/or SELL buildings and ships (for half
   their value).

2. END OF ROUND — After every 7 game turns, the Round card is resolved.
   A Harvest may occur (players with at least 1 grain receive 1 grain;
   players with at least 2 cattle receive 1 cattle). Then each player must
   feed their workers the amount of food shown on the Round card. Ships
   owned reduce the food requirement. Food can be paid in fish, bread,
   meat, or francs (1 franc = 1 food). Failure to feed triggers mandatory
   loans. A new ship card is also introduced at the end of each round.

After all rounds, final scoring totals the value of owned buildings plus cash
minus outstanding loans (each loan is negative 7 francs). Ships owned count
toward building value.

### Key Design Patterns

RESOURCE ACCUMULATION ON OFFER SPACES: The game's most distinctive mechanism
is the way goods enter the economy. Each player turn, two goods (determined
by the current Supply tile) are added to their corresponding Offer spaces.
If no one claims the fish Offer space for several turns, it accumulates
multiple fish. When a player finally takes that space, they take all of them. This creates a rising-value dynamic: unclaimed spaces become
increasingly attractive, and the timing of when to claim each space is a
strategic calculation. Take it too early and you get a small haul; wait too
long and an opponent snatches the pile. The design insight is that accumulating
resources on public spaces create a natural auction dynamic without an auction
mechanism — the price is opportunity cost (you could have claimed something
else), and the value is transparent and escalating. This is perhaps the purest
implementation of the "increase value of unchosen resources" pattern in board
gaming.

BUILDING OWNERSHIP AND USAGE FEES: When you construct a building, you own it
and can use it for free. Other players can also use your building, but they
must pay you an entry fee. This creates a dual incentive for construction:
buildings are valuable both for their action (what they let you do) and for
their rent-generating potential (what opponents pay you to use them). A
shrewd player builds facilities that opponents need — a bakery when everyone
is scrambling for food, a shipping line when everyone has goods to export —
because the entry fees compound across the game. The design wisdom is that
shared-but-owned infrastructure creates the richest form of indirect player
interaction: every building is simultaneously a personal asset and a public
utility, and the tension between these roles drives strategic depth. Players
must weigh the benefit of using an opponent's building (gaining a powerful
action) against the cost (funding their opponent's economy).

FOOD PRESSURE THROUGH FEEDING AT ROUND END: At the end of each round (every
7 turns), players must feed their workers the amount shown on the Round card
or take loans. The food requirement increases over the course of the game as
later Round cards demand more food. Ships owned reduce the food requirement,
making ship-building an important investment for managing food pressure.
Early in the game, feeding is manageable with raw fish from the Offer spaces.
As the game progresses and food demands grow, players must invest in
food-processing infrastructure (smokehouse, bakehouse, abattoir) to convert
raw goods into more efficient food sources. The design pattern is that periodic
mandatory expenses create strategic rhythm — players oscillate between
investment phases (building infrastructure) and sustenance phases (securing
food). This prevents pure engine-building by forcing regular attention to
immediate needs.

SHIPPING AS LATE-GAME VP CONVERSION: Ships are among the most valuable
buildings in the game, but they require processed resources (steel, charcoal,
leather) that are only available through multi-step conversion chains. Building
a ship converts a large investment of processed goods into a permanent asset
worth significant end-game VP. Ships also generate income during the game and
can be used to fulfill special shipping actions. The design insight is that
late-game VP conversion objects that require multi-step resource chains create
a strategic arc: the early game is about acquiring raw materials and building
processing infrastructure, the mid-game is about running those conversion
chains, and the late game is about converting accumulated processed goods into
high-value ships. This arc gives the game a narrative trajectory — from
subsistence fishing to industrial shipping — that emerges from the mechanics
rather than being imposed by scenario design.

LOAN SYSTEM AS NEGATIVE VP WITH FLEXIBILITY: Players may take loans only when
they cannot pay required costs (interest or feeding), gaining 4 francs per
loan but accepting a permanent negative 7 VP penalty at game end (unless
the loan is repaid for 5 francs during the game).
Loans function as a financial pressure valve: they prevent players from being
completely locked out of actions when cash-poor. But the negative VP makes
loans strategically costly — a player carrying three loans into final scoring
has a 21-point deficit to overcome. The design pattern is that loans should be
available, punishing, and transparent. Le Havre's loans are never hidden and
never forgiven, creating clear information for all players about each
opponent's financial health. The option to repay loans at a premium adds
another decision layer: is it worth spending scarce francs to erase negative
VP, or should those francs fund productive investment instead?

PROGRESSIVE BUILDING AVAILABILITY: Buildings become available for construction
in stages throughout the game. Early rounds offer basic infrastructure (wooden
buildings, simple processing facilities). Later rounds reveal advanced
buildings (steel mills, wharf, shipping lines) with more powerful actions and
higher construction costs. This staged availability creates a technology-tree
feeling without a literal tech-tree mechanism: players who build early
infrastructure position themselves to exploit advanced buildings when they
appear. The progressive reveal also prevents information overload at game
start — players make decisions from a manageable option set that gradually
expands. The design wisdom is that staged availability creates temporal
strategy (when should I build?) alongside spatial strategy (what should I
build?) without requiring explicit era or phase mechanics.

IRON-COAL-STEEL-COKE CONVERSION CHAINS: Le Havre's industrial goods form
multi-step conversion chains: iron ore is smelted into steel at the steelworks,
coal is converted to coke at the cokery, and both steel and coke are inputs
for the most valuable buildings and ships. These chains are not decorative —
they are the game's strategic backbone. A player who controls both the raw
material supply (claiming iron and coal from offer spaces) and the processing
infrastructure (owning the steelworks and cokery) has a vertically integrated
operation that generates enormous value. A player who controls only raw
materials must pay entry fees to use opponents' processing buildings. A player
who controls only processing buildings depends on opponents to supply raw
materials. The design pattern is that multi-step conversion chains create
strategic interdependence: no single player can efficiently control the entire
chain, so building and using shared infrastructure becomes a game of economic
positioning.

ENTRY FEE AS INDIRECT PLAYER INTERACTION: Le Havre has no combat, no blocking,
no direct confrontation — but it has pervasive indirect interaction through the
entry fee system. Every time you use an opponent's building, you pay them.
Every time they use yours, they pay you. These micro-transactions accumulate
across dozens of turns, creating a silent economic competition where building
selection, timing, and usage patterns determine who profits and who subsidizes.
The entry fee is small enough that using an opponent's building is rarely a
bad decision in isolation (the action's value typically exceeds the fee), but
across the full game, the cumulative effect of being a net fee-payer versus
a net fee-collector is significant. The design insight is that small, frequent,
transparent economic interactions create deep strategic play without the
analysis paralysis or emotional friction of direct confrontation. Le Havre's
interaction is the interaction of a marketplace, not a battlefield.

### What Makes It #80

Le Havre is Uwe Rosenberg's most economically rigorous design, and it achieves
its depth through the simplest possible turn structure: take goods, then do one
thing. The accumulation mechanism on offer spaces creates organic timing
decisions that no other resource system replicates — the goods are always there,
always growing, and the question is never whether to take them but when. The
building ownership system generates the richest indirect interaction in
Rosenberg's portfolio, transforming every construction decision into a dual
calculation of personal utility and rental income. The feeding pressure ensures
that the game never becomes a purely abstract optimization exercise — you must
eat before you can industrialize, and the tension between subsistence and
investment is real every round. Le Havre is the rare game that feels like an
actual economy: messy, interdependent, and shaped by the accumulated
consequences of dozens of small decisions rather than a few dramatic ones. Its
2008 design holds up because its core mechanisms are not fashion-dependent —
they model economic fundamentals that do not go out of style.
