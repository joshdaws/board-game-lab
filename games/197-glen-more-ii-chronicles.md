# Glen More II: Chronicles

## Quick Stats

- **Players:** 2-4
- **Time:** 90-120 min
- **Weight:** 3.01/5

## Mechanics

- Commodity Speculation
- Grid Movement
- Market
- Set Collection
- Tile Placement
- Turn Order: Time Track

## Categories

- City Building
- Economic
- Farming
- Territory Building

## Rulebook

See `rulebooks/197-glen-more-ii-chronicles.pdf`

## Design Notes

Designer: Matthias Cramer. Published by Funtails (2019).

### Theme Integration

Glen More II: Chronicles transports players to the Scottish Highlands across
multiple historical periods, where clans compete to develop their territory
by cultivating whisky, herding cattle, establishing villages, and building
iconic Scottish landmarks. The theme is not merely decorative -- it shapes
the game's core spatial and economic systems. Each player constructs a
personal tableau representing their clan's territory, a growing patchwork
of Highland tiles that must connect orthogonally to their existing landscape.
The spatial constraint mirrors the geographic reality of Scottish settlement:
land is developed outward from a central village, with each new acquisition
needing to connect to existing infrastructure. Whisky production, the most
thematically resonant resource chain, requires a multi-step process --
grain fields produce barley, which is refined at distilleries into whisky --
that models the actual production pipeline of Scotland's most famous export.

The Chronicles system is the game's most distinctive thematic contribution.
Eight modular chronicle chapters can be added to the base game, each
representing a different era or aspect of Scottish history: the Highland
Games, the Jacobite uprising, the Scottish Enlightenment, and others. Each
chronicle adds new rules, tiles, and scoring conditions that transform the
strategic landscape. This modular narrative structure means that no two
configurations of Glen More II play identically, and the historical
chapters provide thematic context for mechanical variation. Playing with the
Highland Games chronicle feels different from the Enlightenment chronicle
not just mechanically but thematically -- the former rewards physical
competition and clan prestige, the latter rewards intellectual development
and institutional building.

The relative scoring system reinforces a thematic undercurrent of clan
rivalry. Players are not scored on absolute wealth or territory but on
how much more they possess than the player with the least. A player with
six whisky barrels scores zero if another player also has six. This
competitive valuation system captures the Highland spirit of inter-clan
comparison: it is not enough to prosper; you must prosper more than your
neighbors. The mechanism discourages hoarding any single resource type and
rewards balanced development that outpaces opponents across multiple
dimensions.

### Core Loop

The game is played over four rounds, each structured around a central
rondel-style tile market:

1. TILE SELECTION (Time Track) - Tiles are arranged in a circular market
   around a central track. The player whose token is furthest back on the
   track takes the next turn. On your turn:
   a. Move your token clockwise to any tile on the market track.
   b. Take the tile your token stops on, paying any required cost.
   c. The further you advance along the track, the longer before your
      next turn -- taking a tile far ahead means skipping many turns
      while opponents take multiple closer tiles.

2. TILE PLACEMENT - Place the acquired tile into your personal territory
   (clan board), following these constraints:
   a. The new tile must be placed orthogonally adjacent to at least one
      existing tile in your territory.
   b. The tile must be placed so that at least one of its activation
      arrows points toward an existing tile.
   c. Rivers on the tile must align with rivers on adjacent tiles if
      they share an edge.

3. TILE ACTIVATION - When a new tile is placed, it activates along with
   all orthogonally adjacent tiles in the direction of its activation
   arrows:
   a. Each activated tile produces its resource or triggers its ability.
   b. Production tiles generate resources (wood, stone, grain, cattle,
      whisky).
   c. Village tiles allow trading resources at the market.
   d. Special tiles trigger unique abilities (movement, conversion,
      scoring).
   e. The placement position determines which adjacent tiles activate,
      creating a spatial optimization puzzle.

4. MARKET ACTIONS (Optional) - After activation, players may buy or sell
   resources at the central market. Prices fluctuate based on supply and
   demand: selling a resource reduces its price; buying increases it.

5. ROUND END SCORING - At the end of each round, three categories are
   scored using the relative comparison system:
   a. Count each player's resources in the scored categories (whisky
      barrels, special tiles, clan members, etc.).
   b. The player with the fewest in each category sets the baseline.
   c. Each other player scores points equal to their surplus above the
      minimum.
   d. Players with the most tiles in their territory (beyond a threshold)
      lose points, penalizing excessive tile acquisition.

6. CHRONICLE SCORING - If playing with a chronicle module, additional
   end-of-round or end-of-game scoring conditions are evaluated based on
   the specific chronicle's rules.

Final scoring after four rounds adds landmark bonuses, chronicle points,
resource conversion, and person card bonuses. Highest total score wins.

### Key Design Patterns

TIME TRACK AS TURN ORDER REGULATOR: Glen More II's rondel market uses a
time track mechanism where the player furthest back always takes the next
turn. Moving further along the track to grab a desirable tile costs more
"time," meaning opponents may take two or three turns before you act again.
This creates a fundamental tension between tile quality and action quantity.
Taking a powerful tile far ahead might be optimal in isolation, but it
surrenders tempo to opponents who take multiple weaker tiles. The time
track eliminates traditional turn order entirely -- there is no fixed
sequence, and a player who consistently takes nearby tiles may act twice
as often as one who reaches for premium tiles. The design principle is
that variable turn frequency creates self-balancing resource acquisition:
powerful options cost tempo, weak options grant it.

TILE ACTIVATION CASCADES: When a new tile is placed, it activates itself
and all adjacent tiles in its arrow direction. This cascade mechanism means
that tile placement is not just about what the new tile produces but about
how it interacts with existing territory. A well-placed tile can trigger
three or four adjacent tiles simultaneously, generating a burst of resources
from a single action. This creates a spatial puzzle where the value of each
tile depends on its neighbors, and territory layout becomes an optimization
problem. Players who arrange their territory to maximize activation chains
extract dramatically more value per tile placement than those who build
haphazardly. The cascading activation rewards long-term spatial planning
and makes each new tile acquisition more powerful as the territory grows,
creating an organic engine-building arc.

RELATIVE SCORING AS ANTI-HOARDING MECHANISM: Instead of scoring absolute
resource quantities, Glen More II scores each player's surplus above the
minimum holder. If every player has 4 whisky, no one scores for whisky.
If one player has 7 and the minimum is 4, that player scores 3 points.
This relative system prevents the dominant strategy of maximizing a single
resource -- even massive accumulation scores nothing if an opponent matches
your quantity. The mechanism incentivizes diversification: investing across
multiple scoring categories ensures you lead in at least some, while
opponents who specialize in different areas leave gaps you can exploit.
Relative scoring also creates a surveillance dynamic, as players must
monitor opponents' resource positions to evaluate their own scoring
potential.

TILE PENALTY FOR OVEREXPANSION: Players whose territory exceeds a tile
count threshold lose victory points proportional to their excess. This
penalty creates a counterweight to the natural incentive to acquire as
many tiles as possible. Since each tile placement triggers activation
cascades, more tiles generally means more production, but the overexpansion
penalty forces players to be selective. The mechanism ensures that lean,
efficient territories can compete with sprawling ones, and it adds a
strategic consideration to every tile acquisition: is this tile worth the
potential penalty, or should I pass and let my time track position reset?
The design insight is that a simple cap or penalty on quantity prevents
degenerate accumulation strategies without requiring complex economic
balancing.

COMMODITY SPECULATION IN THE MARKET: The central market allows buying and
selling resources at fluctuating prices. When a player sells a resource,
its price drops; when a player buys, the price rises. This creates a
speculative dynamic where timing resource transactions matters as much as
producing them. Selling whisky when the price is high (because no one else
has sold recently) is far more valuable than selling into a saturated
market. The fluctuating market also creates information -- price movements
reveal what opponents are producing and trading, enabling strategic
inference. The commodity speculation layer adds economic depth without
requiring a separate financial system, because it piggybacks on the
resource production already generated by tile activation.

CHRONICLES AS MODULAR COMPLEXITY: The eight chronicle modules can be mixed
into the base game individually or in combination, each adding new tiles,
scoring conditions, and strategic considerations. This modular design means
that Glen More II is not one game but a family of games sharing a core
engine. New players can learn the base game without chronicles, then layer
in complexity as they gain experience. Experienced players can customize
their experience by selecting chronicles that emphasize the strategic
dimensions they find most interesting. The modular approach also extends
the game's replayability dramatically -- the combinatorial space of
chronicle pairings creates distinct strategic landscapes that reward
repeated exploration.

WHISKY PRODUCTION AS MULTI-STEP CHAIN: Whisky is Glen More II's most
valuable resource, but producing it requires a supply chain: grain fields
produce barley, distilleries convert barley to whisky. This multi-step
production chain means that whisky-focused strategies require territorial
infrastructure -- you need both production and refinement tiles, arranged
adjacently for activation cascades. The chain creates a planning horizon:
committing to whisky early requires specific tile acquisitions from the
market, and failing to complete the chain leaves you with useless
intermediate resources. Multi-step production adds strategic depth by
rewarding infrastructure planning while punishing incomplete commitments.

### What Makes It #197

Glen More II: Chronicles is the rare sequel that transcends its predecessor
by solving the original's limitations while introducing a modular framework
that extends replayability almost indefinitely. The time track creates a
self-balancing acquisition system where powerful moves cost tempo. The tile
activation cascade transforms spatial placement into an engine-building
puzzle. Relative scoring eliminates hoarding and forces diversification.
And the chronicle modules allow players to customize the strategic
landscape to their preferences and experience level. Cramer's design
demonstrates that a medium-heavy Euro can be simultaneously accessible to
newcomers (through the modular chronicle system) and deeply replayable
for veterans (through the combinatorial space of chronicle configurations),
making it one of the most thoughtfully engineered sequels in the hobby.
