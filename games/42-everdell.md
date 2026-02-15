# Everdell

## Quick Stats

- **Players:** 1-4
- **Time:** 40-80 min
- **Weight:** 2.80/5

## Mechanics

- Contracts
- End Game Bonuses
- Hand Management
- Income
- Open Drafting
- Ownership
- Worker Placement

## Categories

- Animals
- Card Game
- City Building
- Fantasy

## Rulebook

See `rulebooks/42-everdell.pdf`

## Design Notes

Designer: James A. Wilson. Published by Starling Games (2018).

### Theme Integration

Players are leaders of woodland critter communities building a bustling city over
the course of a year. The four seasons — Spring, Summer, Autumn, Winter — structure
the game's tempo and resource rhythm, with each Prepare for Season action
representing the passage of time and the arrival of new workers ready to contribute.
The theme is not merely decorative: it shapes mechanical identity at every level.
Critter cards represent individual characters (Shopkeeper, Monk, Bard, Queen) whose
abilities reflect their narrative roles — the Shopkeeper generates resources when
Construction cards are played, the Monk produces berries through quiet labor, the
Bard scores points for collecting Critters. Construction cards are the physical
infrastructure those Critters inhabit, and the pairing system (each Critter has a
matching Construction) creates a thematic logic where a Husband and Wife score
bonuses for cohabiting, and a Dungeon only functions when staffed by a Ranger. The
Ever Tree — a 3D cardboard centerpiece — serves no strict mechanical purpose beyond
holding cards and resources, but it anchors the entire visual and spatial experience,
making the woodland world feel tangible. The resource types (twigs, resin, pebbles,
berries) reinforce the naturalistic setting, each with distinct tactile components
in deluxe editions. Where many engine builders dress abstract economics in thin
narrative, Everdell achieves a high degree of thematic coherence: you genuinely feel
like you are building a small civilization of woodland creatures, not optimizing a
spreadsheet.

### Core Loop

On your turn, you perform exactly ONE of three possible actions:

1. PLACE A WORKER — Place one of your available workers on any unoccupied (or
   shared) location on the board. Basic locations provide resources (twigs, resin,
   pebbles, berries) or let you draw cards. Exclusive locations can only hold one
   worker. Forest locations offer more powerful resource bundles. Destination cards
   in other players' cities can be visited, giving the city owner a bonus. The
   Haven location lets you discard cards from hand to gain resources. Workers remain
   on the board until you Prepare for Season, so each placement is a commitment
   that reduces your options for subsequent turns within the current season.

2. PLAY A CARD — Play a Critter or Construction card from your hand or from the
   Meadow (the shared display of 8 face-up cards) into your city by paying its
   resource cost. Alternatively, if you already have the matching Construction in
   your city, you may play the paired Critter for free by placing an "Occupied"
   marker on the Construction. Your city has a 15-card maximum. Cards come in five
   types: Tan (Traveler, one-time effect on play), Green (Production, triggers when
   you Prepare for Season), Red (Destination, provides a worker placement spot),
   Blue (Governance, grants ongoing scoring conditions), and Purple (Prosperity,
   worth variable endgame VP based on city contents). When a card is taken from the
   Meadow, it is immediately replenished from the deck.

3. PREPARE FOR SEASON — When you have no more meaningful actions (or choose to
   stop), you advance to the next season. Retrieve ALL placed workers. Activate
   all Green Production cards in your city (generating resources, cards, or VP).
   Gain the seasonal bonus: Spring grants 1 worker and activates Production;
   Summer grants 1 worker; Autumn grants 2 workers and activates Production.
   Each player independently decides when to Prepare, so players can be in
   different seasons simultaneously.

The game ends when all players have Prepared for Winter (after Autumn). Final
scoring adds up: points printed on cards in your city, resources on certain card
effects, Events claimed, Journey VP tokens (placing workers on Journey locations
during Autumn), and any other bonus VP tokens earned.

### Key Design Patterns

INDEPENDENT SEASONAL PROGRESSION AS ASYMMETRIC TEMPO: The most distinctive
structural feature of Everdell is that players do not share a round structure.
Each player progresses through the four seasons at their own pace. You might still
be in Spring, carefully milking your two workers across multiple turns, while your
opponent has already Prepared for Summer and retrieved their workers with a new one
added. This creates several layers of strategic depth. First, it generates tempo
asymmetry — a player who Prepares early gets more workers sooner but sacrifices
remaining placement opportunities in the current season. Second, it eliminates
the artificial synchronization that most worker placement games impose, meaning
you cannot simply count "rounds remaining" to plan — you must track each
opponent's seasonal position independently. Third, it creates a natural catch-up
mechanism: a player who falls behind in season progression gets more total turns
(more individual placements before Preparing), while the player who rushes ahead
gets more workers sooner but fewer turns per season. The system elegantly solves
the worker placement problem of "everyone does the same number of things" without
adding explicit balancing mechanics.

DUAL-CURRENCY CARD PLAY (RESOURCES VS. OCCUPATION): Every Critter card has two
paths to entry: pay its resource cost normally, or play it for free by occupying
its paired Construction. This creates a web of contingent value assessments. A
General Store (Construction) is worth its printed VP, its Production ability, and
the option value of deploying a Shopkeeper for free later. The occupation system
incentivizes building Constructions early even when their immediate effect is
modest, because the deferred Critter deployment represents significant resource
savings. It also creates a drafting tension in the Meadow: taking a Construction
now secures the option for its paired Critter later, but your opponent might take
the Critter first, stranding your investment. The pairing system gives 128 unique
cards a navigable structure — players learn pairs rather than memorizing individual
cards, reducing cognitive load while maintaining combinatorial depth.

MEADOW AS SHARED OPPORTUNITY SPACE: The 8-card Meadow display serves multiple
design functions simultaneously. It provides public information that all players
can evaluate, creating competitive drafting tension ("if I don't take that card,
my opponent will"). It mitigates hand luck by offering an alternative card source
accessible to everyone. It creates a timing puzzle: cards in the Meadow are
available to all, so the optimal moment to claim one depends on opponent intent
and your own tableau readiness. The Meadow also generates emergent table talk and
social dynamics — players watch what others draft, infer strategies, and adjust
plans accordingly. The immediate replenishment rule means the Meadow's composition
shifts unpredictably, adding a dynamic element that pure hand management lacks.

CARD TYPES AS TIMING ARCHITECTURE: The five card colors encode fundamentally
different temporal value profiles. Tan (Traveler) cards deliver value immediately
on play — a one-time burst of resources or cards. Green (Production) cards deliver
value repeatedly, triggering each time you Prepare for Season. This means a Green
card played in Spring triggers three times (Spring, Summer-to-Autumn, Autumn-to-
Winter preparation), while one played in Autumn triggers only once. The implicit
rule: play Green cards early, Tan cards whenever convenient. Red (Destination)
cards create new worker placement spots, and their value scales with remaining
turns — more turns means more opportunities for workers to visit. Blue (Governance)
cards impose ongoing conditions or scoring rules that reward specific future plays.
Purple (Prosperity) cards are typically endgame VP engines that score based on city
composition at game end. This color system gives players an intuitive heuristic
for card evaluation without requiring explicit timing rules: you learn to read the
card color and immediately understand its temporal profile.

CITY SIZE CAP AS COMPRESSION ENGINE: The 15-card city limit is one of Everdell's
most important design constraints. Without it, the optimal strategy would always
be "play more cards." The cap forces players to evaluate every card not just on
its own merits but against the opportunity cost of the city slot it consumes. A
mediocre card played early might need to be replaced or worked around later. The
Dungeon card weaponizes this constraint — it lets you tuck Critters beneath it
(removing them from your city) for VP, freeing city slots while converting
low-value cards into points. The Undertaker similarly lets you remove cards. These
"city management" cards transform the constraint from a simple ceiling into an
active strategic dimension. The cap also ensures games end in reasonable time: no
player can build an infinite engine, so the Autumn-to-Winter transition always
arrives with finite tableaux to score.

EVENT OBJECTIVES AS STRATEGIC SIGNPOSTING: Basic Events (4 shared tiles) and
Special Events (drawn from a larger pool) provide bonus VP for meeting specific
tableau conditions — for example, having three Governance cards, or having both a
specific Construction and Critter pair. Events serve several design purposes: they
give players intermediate goals that structure early decisions, they create
competitive races (only one player can claim each Basic Event), and they reward
card synergy without requiring players to discover those synergies independently.
Special Events tied to specific card combos add a treasure-hunt quality — spotting
an achievable Special Event in the display and building toward it provides a
satisfying strategic arc within a single game.

PRODUCTION CASCADES AND ENGINE BUILDING: The Green card Production system creates
Everdell's primary engine-building arc. When you Prepare for Season, ALL Green
cards in your city activate simultaneously. A well-constructed city might have a
Farm producing berries, a Mine producing pebbles, a Twig Barge producing twigs,
and a Chip Sweep generating cards — all triggering at once. The seasonal rhythm
means each Production cycle arrives at a known interval, so players can calculate
expected resource income across remaining seasons. This predictability allows
confident forward planning: "I'll need 4 berries to play the Queen; my Farm
produces 1 berry per Preparation, and I have two Preparations left, so I need 2
more berries from worker placements." The production system rewards early
investment in Green infrastructure and creates satisfying moments of cascading
resource generation.

DESTINATION CARDS AS INTERACTIVE BRIDGES: Red (Destination) cards are uniquely
interactive in a game that otherwise features parallel city-building. When you
play a Destination card, it creates a worker placement spot that opponents can
visit (with the card's owner receiving a small bonus). This means your city
construction directly shapes other players' available actions. An opponent's Inn
or Post Office becomes part of your strategic landscape. The design elegantly
increases interaction without introducing direct conflict — no one destroys or
steals from your city, but your construction choices ripple through the shared
action economy. Destination cards are also inherently more valuable in higher
player counts, where more opponents means more visits and more owner bonuses.

### Tension Architecture

The primary tension in Everdell operates along three axes. First, the TEMPO axis:
when to Prepare for Season (gaining workers and triggering Production) versus when
to squeeze more value from current workers and hand. Preparing too early wastes
remaining placement opportunities; preparing too late means your opponents have
more workers and a production cycle's head start. Second, the INVESTMENT axis:
early-game resources spent on Green Production cards or Constructions with paired
Critters pay dividends over multiple seasons, but they delay immediate VP
accumulation. Players must judge when the investment horizon is too short to
justify engine-building versus when to shift to VP-maximizing Prosperity and
Governance cards. Third, the OPPORTUNITY axis: the Meadow and shared Events create
competitive pressure to act on visible opportunities before opponents claim them,
forcing deviations from planned sequences.

### What Makes It #42

Everdell succeeds by grafting worker placement and tableau building into a single
system where neither mechanic dominates. The independent seasonal progression
eliminates rigid round structure, creating organic tempo decisions that feel
natural rather than mechanical. The Construction-Critter pairing system gives 128
unique cards an accessible structure that rewards pattern recognition over
memorization. The 15-card city limit ensures every slot matters, preventing
runaway engines while creating meaningful late-game compression. The production
cascade system delivers the satisfaction of engine building — watching your city
generate resources in concert — without the runaway complexity of heavier economic
games. The Meadow display provides shared information that drives interaction in
an otherwise parallel experience. And the art direction, component quality, and
Ever Tree centerpiece create a table presence that draws players in before a single
rule is explained. At weight 2.80, Everdell occupies a rare design space: complex
enough to reward strategic planning and card synergy recognition, accessible enough
to serve as a gateway to heavier games, and beautiful enough to justify its place
on a shelf purely as an object. It demonstrates that worker placement and engine
building can coexist without either mechanic feeling bolted on, and that thematic
coherence can emerge from mechanical integration rather than narrative text.
