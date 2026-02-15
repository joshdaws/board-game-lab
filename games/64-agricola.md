# Agricola

## Quick Stats

- **Players:** 1-4
- **Time:** 30-150 min
- **Weight:** 3.63/5

## Mechanics

- Worker Placement
- Hand Management
- Variable Player Powers
- Card Drafting

## Categories

- Animals
- Economic
- Farming

## Rulebook

See `rulebooks/64-agricola.pdf`

## Design Notes

Designer: Uwe Rosenberg. Published by Lookout Games (2007).

### Theme Integration

Agricola is set in 17th-century subsistence farming, and the theme is not
aspirational -- it is anxious. You are not a wealthy landowner managing an
estate; you are a peasant couple struggling to feed themselves while slowly
improving a crude two-room wooden hut and an empty plot of land. The
emotional register is scarcity, not abundance. Every harvest cycle demands
food, and the penalty for failing to feed your family is devastating
(negative 3 VP per missing food, implemented as "begging cards" -- a
thematically humiliating label). The game's weight comes not from mechanical
complexity but from the relentless pressure of too many needs and too few
actions. You need fences for animals, fields for grain, an oven to bake
bread, rooms to grow your family, and the harvest is always coming.

The 17th-century setting constrains the technology level in ways that serve
the design. There are no tractors, no combines, no industrial processing.
Every improvement is hand-scale: a clay oven, a well, a wooden plow.
Occupation cards represent pre-industrial roles -- the Clay Mixer, the
Hedge Keeper, the Ratcatcher -- grounding each unique ability in a
plausible historical trade. The improvement cards (Minor and Major) map
onto physical objects a subsistence farmer might actually construct. This
commitment to period-appropriate technology prevents power creep and keeps
every advantage feeling earned rather than given. The theme disciplines
the mechanics: nothing feels anachronistic because the design space is
bounded by what a 17th-century farmer could plausibly build.

The family unit is the game's emotional core. You begin with two family
members (farmer and spouse) and can grow to a maximum of five. Each family
member is a worker placement token, so growing your family is mechanically
equivalent to gaining actions -- but it is thematically weighted. Growing
your family means building rooms (resource investment), feeding more mouths
(ongoing cost), and creating more hands for work (ongoing benefit). The
game never lets you forget that these workers are people who need to eat.
Agricola is one of the few euro-games where the worker placement mechanic
has genuine thematic resonance: you are not deploying abstract pawns, you
are sending your family out to work.

### Core Loop

The game plays over 14 rounds, divided into 6 stages. Stages determine
when new action spaces are revealed and when harvests occur. Each round
follows this structure:

1. PREPARATION - Reveal the next action space card (one per round, in
   predetermined order). Replenish accumulating spaces with new resources
   (wood, clay, reed, stone, food, animals accumulate over unclaimed rounds).
2. WORK PHASE - Starting with the starting player, each player places one
   family member on an unoccupied action space and takes the corresponding
   action. Actions include:
   - Resource collection (wood, clay, reed, stone -- accumulated piles)
   - Grain and vegetable acquisition (take 1 seed to plant later)
   - Day laborer (take food directly)
   - Plow a field (add a field tile to your farm)
   - Sow and/or Bake bread (plant grain/veg in fields; convert grain to food)
   - Build fences (enclose pastures for animals)
   - Build rooms / Renovate house (expand or upgrade dwelling)
   - Family growth (add a family member, requires an empty room)
   - Major/Minor improvements (build permanent upgrades)
   - Occupation cards (play a profession from hand for ongoing abilities)
   Continue clockwise until all family members are placed.
3. RETURN HOME - All family members return to the player's farmyard.
4. HARVEST (after rounds 4, 7, 9, 11, 13, 14) - Three sub-phases:
   (A) Field phase: each sown field yields 1 grain or vegetable.
   (B) Feeding: pay 2 food per adult, 1 per child. Shortfall = begging
   cards (negative 3 VP each).
   (C) Breeding: each pair of same animals produces 1 offspring (if space).

Final scoring: points for fields, pastures, grain, vegetables, each animal
type, family members, fenced stables, clay/stone house, card bonuses.
Negative points for every category left empty.

### Key Design Patterns

HARVEST CYCLE AS FORCING FUNCTION: The harvest is Agricola's structural
heartbeat, occurring at rounds 4, 7, 9, 11, 13, and 14. Each harvest
demands food equal to your family size. The accelerating frequency -- gaps
of 4, 3, 2, 2, 2, 1 rounds between harvests -- creates mounting pressure
as the game progresses. Early game, you have three rounds to prepare food
before the first harvest. By endgame, harvests come every round or two,
leaving almost no time for non-food activities. This forcing function
prevents turtling: you cannot spend all your actions on long-term
development because the harvest will punish you for neglecting sustenance.
The design principle is profound -- a recurring obligation that accelerates
over time creates natural dramatic pacing without explicit time pressure.
Players feel the game tightening around them, and this feeling IS the
game's emotional signature.

NEGATIVE SCORING FOR NEGLECT: At game end, every category of farm
development is evaluated. Having zero of any grain, vegetable, or animal
type costs negative points. Having no fields, no pastures, no fenced
stables -- all incur penalties. The scoring grid has a minimum of -1 for
each empty category, with bonuses scaling for investment. This "misery
scoring" system is Agricola's most controversial and most brilliant design
choice. It forces diversification: you cannot ignore entire dimensions of
farming. A player with 30 sheep but no grain is penalized. A player with
magnificent fields but no animals is penalized. The negative-scoring grid
is the mechanical expression of subsistence farming's reality -- a farmer
who only grows wheat and ignores livestock is failing, regardless of wheat
yield. The reusable design insight: negative scoring for neglect creates
breadth pressure that counterbalances the natural human tendency toward
specialization and engine optimization.

OCCUPATION AND IMPROVEMENT CARDS AS IDENTITY: Each player begins with a
hand of 7 Occupation cards and 7 Minor Improvement cards (in the standard
game). These 14 cards are unique to that player and define their strategic
identity for the game. Occupations provide ongoing abilities or one-time
bonuses (the Clay Mixer reduces clay costs, the Ratcatcher provides food).
Minor Improvements are small structures or tools that modify the farm
(Clay Pit, Wooden Crane, Bean Field). With over 300 unique cards across
the base game and expansions, no two players start with the same strategic
landscape. The cards solve the primary criticism of pure worker placement --
that optimal play converges toward identical strategies -- by giving each
player different tools to work with. Your hand shapes how you approach the
universal challenge of farm-building, creating asymmetry from a symmetric
starting position.

WORKER PLACEMENT SCARCITY (BLOCKING): Agricola popularized the strict
worker-placement rule: each action space holds exactly one worker, and
once occupied, it is unavailable until next round. This creates blocking
as a core interaction. If you need wood and your opponent takes the wood
space, you must find an alternative or wait. Blocking is not a special
action -- it is the natural consequence of the placement rule. Because
all players share the same small set of action spaces (approximately 16
by endgame for a 3-player game), competition for key spaces is constant.
The blocking dynamic creates tension, negotiation (implicit and explicit),
and turn-order significance. It also ensures that increasing your family
size (more workers) has a genuine impact on your opponents, not just on
your own capabilities. The design axiom: exclusive access to shared action
spaces transforms a solitaire optimization puzzle into a competitive game.

FAMILY GROWTH AS WORKER ACQUISITION DILEMMA: Growing your family
requires (1) a room in your house for the new family member, and (2) a
specific action space that only becomes available in later stages. Rooms
require wood or clay or stone and reed -- significant resource investment.
Each new family member adds one worker placement per round for the rest
of the game, but also demands food at every harvest (2 per adult, 1 per
child until they become adult the following harvest). The dilemma is
acute: early family growth maximizes the total number of actions across
the remaining game but creates immediate food pressure. Late family
growth is cheaper (fewer remaining harvests to feed through) but wastes
the worker's potential action value. Experienced Agricola players
consider family growth timing the game's most consequential strategic
decision. The design pattern: when worker acquisition has both a
construction cost and an ongoing operational cost, the timing of expansion
becomes a rich strategic variable rather than an obvious optimization.

FOOD PRESSURE AS ANTI-TURTLING: Food is Agricola's universal constraint.
Every strategic plan must route through food production at some point.
You cannot simply build a beautiful farm with optimal card combos -- if
your family starves, the begging cards destroy your score. Food pressure
serves several design functions simultaneously: it prevents runaway
engine-building by forcing resource allocation toward survival; it
creates interplayer interaction as players compete for food-producing
action spaces; it grounds the theme in tangible urgency; and it gives
meaning to seemingly minor decisions (taking the Day Laborer action
for 1 food can be the difference between feeding your family and
taking a begging card). The design lesson is that a universal
constraint shared by all players creates a common language of urgency
that makes diverse strategies commensurable. Two players pursuing
entirely different card-driven strategies still share the same
fundamental problem: how do I feed these people?

PROGRESSIVE ACTION SPACE REVELATION: Agricola reveals one new action
space per round over 14 rounds. The order is predetermined but varies
slightly between game editions. Early rounds have basic actions (collect
resources, plow fields). Later rounds unlock powerful actions (renovation,
family growth without room prerequisite, fence building). This staged
revelation creates a natural strategic arc: early game is about
resource accumulation and positioning; mid-game introduces building
and family expansion; late game opens final scoring opportunities.
Because players know the general progression (the round cards are
grouped by stage), they can plan ahead -- but the specific order
within each stage introduces controlled variability. The pattern:
revealing game systems gradually over time manages complexity (new
players don't face all options at once) and creates strategic
anticipation (experienced players plan around upcoming action spaces).

ACCUMULATION AS TEMPO REGULATOR: Resource spaces in Agricola accumulate
goods each round they remain unclaimed. The wood space that starts
with 3 wood adds 3 more each round. By round 3, it holds 9 wood -- a
windfall that makes it increasingly attractive. Accumulation serves
multiple design functions: it creates volatile timing decisions (take
a small pile now or wait for a larger one, risking an opponent claims
it); it provides catch-up opportunities (a trailing player can grab a
massive accumulated pile); and it self-balances the economy across
player counts (fewer players means faster accumulation per space,
compensating for fewer total actions). Rosenberg uses this mechanic
across his worker-placement designs, and Agricola is where it first
demonstrated its full power. The principle: resources that grow over
time on unclaimed spaces create natural market-like dynamics without
requiring explicit pricing mechanisms.

### What Makes It #64

Agricola is the game that defined modern worker placement and remains
its purest expression. The harvest cycle creates urgency that no amount
of clever card play can fully alleviate. The negative-scoring grid
forces diversification against every optimization instinct. The 300+
unique cards ensure that the universal challenge of subsistence farming
is approached through a different strategic lens every game. And the
blocking mechanic transforms what could be a parallel solitaire puzzle
into a tense competitive negotiation conducted entirely through piece
placement. Agricola's legacy is not just mechanical -- it established
the emotional vocabulary of the modern euro-game: anxiety, scarcity,
the satisfaction of barely making it through one more harvest. It is
the game that proved farming could be dramatic.
