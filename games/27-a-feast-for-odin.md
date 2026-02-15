# A Feast for Odin

## Quick Stats

- **Players:** 1-4
- **Time:** 30-120 min
- **Weight:** 3.87/5

## Mechanics

- Action Points
- Automatic Resource Growth
- Dice Rolling
- Enclosure
- Grid Coverage
- Hand Management
- Solo / Solitaire Game
- Worker Placement

## Categories

- Animals
- Farming
- Industry / Manufacturing
- Medieval
- Puzzle

## Rulebook

See `rulebooks/27-a-feast-for-odin.pdf`

## Design Notes

Designer: Uwe Rosenberg. Published by Z-Man Games (2016).

### Theme Integration

A Feast for Odin simulates the economic and cultural life of Viking-era
Norsemen across roughly 900-1100 AD — not the popular image of berserkers and
longships, but the daily reality of farming, crafting, trading, whaling,
exploring, and feasting. The action board is organized into thematic strips
(hunting, crafting, building, exploration, raiding, animal husbandry) that
mirror the actual occupational diversity of Norse settlements. The feast
requirement — every round, players must fill a banquet table with food goods
or suffer Thing Penalty tiles worth -3 VP each — models the social obligation
of a jarl to provide for his household. The "Thing Penalty" references the
Thing assembly, the Norse governing body where social failures were
adjudicated. Exploration boards (Shetland, Faroe Islands, Iceland, Greenland)
trace the actual historical expansion of Norse settlement across the North
Atlantic. Even the goods progression from green (flax, beans, grain) through
red/orange (meat, mead, clothing) to blue (silverware, jewelry, runestones)
maps to the real economic ladder of a Viking household moving from subsistence
to luxury. The puzzle boards themselves represent storage — you are literally
filling your longhouse, your shed, your ship hold with goods. This is
Rosenberg's most thematically coherent title because the central mechanism
(covering a grid with shaped tiles) directly models the thing the theme is
about: accumulating and organizing the material wealth of a Norse settlement.

### Core Loop

The game plays over 7 rounds (6 in a shorter variant). Each round follows a
structured sequence:

1. NEW HARVEST - Add a harvest token each round (corn in early rounds, then
   beans, flax, and other crops in later rounds), gradually expanding the
   resource base available to all players.
2. WORKER PLACEMENT - Players alternate placing 1-4 Vikings on action spaces.
   Higher-numbered columns within each action strip require more workers but
   yield stronger effects. Each space is exclusive — once claimed, no other
   player may use it that round.
3. INCOME - Each player earns silver equal to the smallest uncovered value on
   their home board's income diagonal. Covering more of your board increases
   income.
4. BREEDING - Every other round (rounds 2, 4, 6), players with 2+ sheep gain
   a sheep, and players with 2+ cattle gain cattle. Automatic resource growth
   without action cost.
5. FEAST - Players must fill their banquet table spaces with food tiles. Any
   unfilled spaces incur Thing Penalty tiles (-3 VP each). The table grows
   larger as rounds progress, requiring more food over time.
6. BONUS - Mountain strips on exploration boards produce resources in specific
   rounds, rewarding early exploration.
7. RETURN WORKERS - All Vikings return home, and the action board resets.

Final scoring: sum all bonus VP from filled boards, add silver (1 VP per
silver), subtract uncovered negative values on all boards, subtract Thing
Penalties, and add occupation card bonuses. Highest total wins.

### Key Design Patterns

POLYOMINO GRID COVERAGE AS SCORING ENGINE: The heart of the game is a spatial
puzzle borrowed from Rosenberg's own Patchwork (2014) and scaled to enormous
complexity. Every player board — the home board, plus any acquired exploration
boards — is a grid printed with negative VP values. Uncovered squares at game
end subtract from your score. Goods tiles are polyomino shapes (tetrominoes,
trominoes, dominoes, singles) that you place Tetris-style onto these grids.
The scoring is subtractive: you start at negative and work toward zero and
beyond. This reframes resource acquisition from "collect points" to "eliminate
penalties," which creates a psychological urgency that pure additive scoring
lacks. The placement constraint — orange goods cannot be orthogonally adjacent
to other orange goods, and red goods cannot touch other red goods — prevents
the easiest packing solutions and forces players to diversify their goods
portfolio. Blue and green goods have no adjacency restrictions, making them
strictly better for grid coverage and motivating the upgrade chain.

INCOME DIAGONAL AS PROGRESSIVE REWARD: The home board's income track runs
diagonally across the grid. Your income equals the smallest uncovered value
along this diagonal. This means partially covering the board gives zero
benefit to income — you must systematically clear the diagonal from its lowest
value upward. The diagonal design forces a specific coverage priority: you
can't just fill the easy corners, you must strategically target the income
line. This creates a meaningful early-game vs. late-game tradeoff: invest
actions in covering the diagonal now (increasing future income across all
remaining rounds) or grab high-value goods tiles that score well but don't
improve your economic engine. The compounding nature of early income
improvement — each silver earned over multiple rounds — rewards long-term
planning over short-term optimization.

WORKER COST ESCALATION: Action spaces are arranged in columns within thematic
strips, with leftmost columns requiring 1 Viking and rightmost columns
requiring 3-4 Vikings. Stronger versions of the same action type cost more
workers. This creates a natural resource allocation puzzle: you have a fixed
worker pool per round (starting at 5 Vikings in the long game, gaining 1 per
round from the Banquet Table), and every powerful action you take reduces the total number of
actions you can perform. A single 4-Viking action consumes most of your
workforce but provides a proportionally powerful result. The escalation curve
is deliberately generous — you don't simply pay more for the same thing, you
get qualitatively better outcomes. This makes the decision not "should I use
the expensive action" but "what combination of cheap and expensive actions
maximizes my round."

FEAST PRESSURE AS TEMPO MECHANISM: The mandatory feast at the end of every
round creates a recurring obligation that constrains strategic freedom. You
cannot simply pursue long-term engine building — you must produce enough food
each round to fill the banquet table or accept -3 VP penalties. The banquet
table grows as rounds progress, escalating this pressure. This is a signature
Rosenberg design pattern (seen also in Agricola's harvest feeding and
Caverna's food requirements): a periodic survival check that prevents players
from ignoring short-term needs in favor of pure optimization. The feast also
drives interaction with the action board's hunting, whaling, and farming
strips — these actions might not be optimal for scoring, but they keep you
fed. Experienced players learn to generate food as a byproduct of their
scoring strategy (e.g., acquiring meat tiles that both feed the household and
fill the puzzle board), collapsing the tension between obligation and
optimization.

GOODS UPGRADE CHAIN: Goods exist in a four-tier color hierarchy: green (basic
crops and raw materials), red/orange (processed goods like meat, oil, hide),
and blue (luxury items like silverware, jewelry, chests, runestones). Upgrade
actions on the board let you trade lower-tier goods for higher-tier ones. The
critical design insight is that upgraded goods occupy the same polyomino shape
but have no adjacency restrictions (blue) and are worth more in final
scoring contexts. Upgrading doesn't give you more physical coverage — it gives
you better coverage and more flexible placement. This means the upgrade chain
is about quality, not quantity, and players must decide whether to spend
actions upgrading existing goods or acquiring new ones. The system also models
economic development: a civilization progresses from subsistence farming to
luxury craftsmanship.

EXPLORATION AS BOARD EXPANSION: Players can claim exploration boards
(Shetland, Faroe Islands, Iceland, Greenland) by paying specific resource
costs. Each island provides a new grid to fill — more negative spaces to
cover, but also more potential for bonus VP and mountain strip production.
Exploration is the game's scaling mechanism: ambitious players take on more
boards to score more points, but this stretches their goods production across
a larger area. Taking an island you can't fill is actively harmful (more
uncovered negatives). The islands also have increasing resource costs,
modeling the historical difficulty of reaching more distant territories.
Greenland is expensive but offers the largest scoring potential. This creates
a strategic spectrum from "tall" play (deeply optimizing the home board) to
"wide" play (spreading across many islands), with the optimal strategy
depending on your occupation cards and available resources.

MASSIVE ACTION SPACE AS STRATEGIC SANDBOX: With over 60 unique action spaces
across multiple thematic strips, the action board is one of the largest in
any worker placement game. This is deliberate: Rosenberg designed the game
to minimize the feeling of being blocked. In a typical 2-player game, only
a small fraction of spaces will be claimed each round, leaving enormous
strategic latitude. The cost isn't blocking but opportunity cost — with so
many viable paths, the challenge is identifying which combination of actions
best serves your current board state and long-term plan. The large action
space also supports radically different strategies: one player might focus on
whaling and hunting, another on crafting and trading, a third on exploration
and emigration. The game accommodates all of these without forcing direct
confrontation.

OCCUPATION CARDS AS STRATEGIC DIRECTION: The 190 occupation cards (divided
into A, B, and C decks of increasing complexity) provide asymmetric abilities
that shape each player's strategic arc. Players draft occupations during setup
and can play them via dedicated action spaces. Unlike Agricola's occupations,
which tend to provide narrow efficiency bonuses, Feast for Odin's occupations
often open entirely new strategic avenues — discounting exploration costs,
converting specific goods types, adding bonus VP conditions, or modifying
placement rules. The three-deck complexity system allows the game to scale
from introductory (A deck only) to expert (all three decks), with each tier
adding more card interactions and combo potential. The occupation system
ensures that no two games follow the same strategic path, even between
experienced players.

EMIGRATION AS AN ALTERNATIVE SCORING PATH: Players can emigrate Vikings from
their supply permanently, placing them on ships along with goods. Emigrated
Vikings and goods score VP but are permanently removed from the game,
reducing your workforce for future rounds. This creates a fascinating
temporal tradeoff: emigration is most valuable late in the game (when
remaining rounds are few and the opportunity cost of losing workers is low),
but the action spaces for emigration may be more contested then. Early
emigration sacrifices long-term productive capacity for immediate VP — a
gamble that pays off only if the remaining workers can sustain your plans.

### What Makes It #27

A Feast for Odin is Uwe Rosenberg's magnum opus — a game that synthesizes
nearly every mechanism he explored across Agricola, Le Havre, Caverna, and
Patchwork into a single sprawling design. The polyomino puzzle board
transforms worker placement from "collect resources, convert to points" into
something tactile and spatially satisfying: every good you acquire is a
physical piece of a puzzle you're solving in real time. The sheer scale of
the action board — over 60 spaces — means the game feels less like competing
for scarce slots and more like navigating an overwhelming menu of
possibilities, which shifts the design challenge from blocking opponents to
optimizing your own path through a vast decision tree. The feast mechanism
provides just enough survival pressure to prevent pure puzzle optimization,
grounding the spatial game in an economic rhythm. The income diagonal is an
elegant piece of mechanism design: a single line across your board that
converts spatial progress into economic acceleration. And the exploration
boards turn a solo-feeling optimization puzzle into a strategic scaling
decision — how much puzzle surface can you profitably take on? The game's
weight (3.87) comes not from rules complexity but from the combinatorial
explosion of meaningful choices: which actions to take, which goods to
acquire, where to place them, when to explore, when to upgrade, and how to
feed your household while doing all of it. It is the definitive sandbox
worker placement game — a design that trusts the player to find their own
path through an enormous possibility space.
