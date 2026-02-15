# Terra Mystica

## Quick Stats

- **Players:** 2-5
- **Time:** 60-150 min
- **Weight:** 3.97/5

## Mechanics

- Chaining
- End Game Bonuses
- Hexagon Grid
- Income
- Increase Value of Unchosen Resources
- Network and Route Building
- Variable Player Powers

## Categories

- Civilization
- Economic
- Fantasy
- Territory Building

## Rulebook

See `rulebooks/35-terra-mystica.pdf`

## Design Notes

Designers: Jens Drögemüller & Helge Ostertag. Published by Feuerland Spiele (2012).

### Theme Integration

Fourteen fantasy factions compete to terraform a shared landscape into their
preferred terrain and build settlements across it. The theme is functional rather
than narrative — Halflings, Giants, Chaos Magicians, Darklings, and others each
have a "home terrain" that defines their identity, but the fantasy flavor is
thin scaffolding over what is fundamentally an economic optimization puzzle.
Where the theme does meaningful design work is in the terrain cycle: seven
terrain types are arranged in a wheel (Plains → Desert → Wasteland → Forest →
Lakes → Swamp → Mountains → Plains), and converting terrain costs shovels
proportional to the distance around the wheel. This creates asymmetric geography — a terrain
type that is cheap for one faction to terraform is expensive for another. The
same hex has radically different strategic value depending on who you are playing.
The faction differentiation goes beyond starting terrain: each of the fourteen
factions has a unique special ability, a unique Stronghold power, and different
starting resource profiles. Witches fly Dwellings onto Forests. Swarmlings build
cheaply. Nomads can terraform at range. Darklings convert priests into workers.
These abilities aren't lore-first — they're mechanism-first asymmetries that the
fantasy names justify after the fact.

### Core Loop

The game plays over six rounds, each structured as follows:

1. INCOME PHASE - Each player simultaneously collects income determined by
   uncovered spaces on their faction board. Building structures and removing them
   from the faction board reveals resource icons (workers, coins, priests, power),
   so income grows as you build. This is the game's engine — construction is not
   just spatial expansion, it is literally how you fund future turns.
2. ACTION PHASE - Players take turns performing one action at a time, going
   around the table until all players have passed. Available actions include:
   a) TERRAFORM AND BUILD - Spend shovels (derived from workers) to convert a
      terrain hex to your home type, then optionally build a Dwelling.
   b) ADVANCE SHIPPING - Pay coins and priests to increase your Shipping
      value, letting structures separated by river spaces count as adjacent.
   c) LOWER EXCHANGE RATE - Pay workers, coins, and a priest to improve
      the worker-to-shovel conversion rate on your faction board.
   d) UPGRADE A STRUCTURE - Advance a building along one of two chains:
      Dwelling → Trading House → Temple → Sanctuary, or Dwelling → Trading
      House → Stronghold. Each upgrade costs resources and changes the income
      the structure generates.
   e) SEND A PRIEST TO A CULT TRACK - Advance on one of four elemental cult
      tracks (Fire, Water, Earth, Air).
   f) POWER ACTIONS - Spend power from Bowl III on unique once-per-round
      actions (gain workers, gain coins, terraform, gain a bridge).
   g) SPECIAL ACTIONS - Use abilities from Favor Tiles, Bonus Tiles, or
      Stronghold powers.
   h) PASS - Take a new Bonus Tile for next round. First to pass gets first
      pick, creating an incentive to pass early, but at the cost of fewer
      actions this round.
3. CULT BONUSES AND CLEANUP - Resolve round-end scoring for cult track
   positions, return priests, prepare for next round.

Victory is determined by VP accumulated during play (from building, terraforming,
cult advancement, and round scoring tiles) plus end-game bonuses from cult track
positions and the largest connected network of structures.

### Key Design Patterns

FACTION BOARD AS REVEALED ENGINE: The faction board is Terra Mystica's most
influential design contribution. Each structure type (Dwelling, Trading House,
Stronghold, Temple, Sanctuary) sits on the board in a row of slots. When you
build a structure, you remove it from the leftmost available slot, revealing
the income icon beneath. Build your first Dwelling and you uncover 1 worker of
income. Build your fourth and you might uncover 2 coins. The board thus serves
as both an inventory tracker and an engine diagram — you can see exactly what
every future construction will yield. This mechanism was directly inherited by
Gaia Project and has since appeared in dozens of Euros. The design insight is
that engine-building does not require cards or market rows; a static player
board with removable components accomplishes the same arc of growing returns
with complete transparency.

POWER BOWL CYCLING AS DELAYED GRATIFICATION: The power system uses three
physical bowls (I, II, III). Power tokens begin mostly in Bowl I. When you
gain power, tokens move I→II, then II→III. You can only spend power from
Bowl III, and spent power returns to Bowl I. This three-stage pipeline means
newly acquired power takes two full cycles to become spendable. The system
creates a persistent tension between investing in power (which pays off later)
and spending what you have now. The mechanic also prevents power from being
infinitely hoarded — you can "burn" power by removing tokens from Bowl II
directly to Bowl III at a 2:1 ratio, sacrificing total capacity for immediate
access. This burn option is a pressure valve that lets desperate players
accelerate at a permanent cost.

PASSIVE POWER LEECHING AS PROXIMITY INCENTIVE: When any player builds or
upgrades a structure, every opponent with an adjacent structure gains power
equal to the new building's value (Dwelling = 1, Trading House = 2, Temple/
Stronghold = 3, Sanctuary = 3). However, if the power gain exceeds 1, the
receiving player must sacrifice VP equal to the excess minus one. This creates
the game's most distinctive decision point: do you accept 3 power at the cost
of 2 VP? The answer depends on your bowl state, your available power actions,
and how close the game is to ending. The design consequence is that building
near opponents is not purely competitive — it generates mutual benefit. Players
who isolate themselves avoid conflict but starve for power. The leech mechanic
is a soft incentive for clustering that works against the natural desire to
spread into open space. It produces emergent negotiation without any explicit
trading rules: building next to someone is a gift they can choose to accept or
refuse.

TERRAIN CYCLE AS ASYMMETRIC GEOGRAPHY: The seven terrain types arranged in a
cycle mean that each faction sees a fundamentally different map. What looks
like worthless Wasteland to the Halflings (four steps away on the cycle) is
prime real estate for the Chaos Magicians (their home terrain). This single
mechanism generates enormous replayability from a fixed map. The cycle distance
also creates natural faction alliances and rivalries — factions whose home
terrain is adjacent on the cycle compete for similar hexes and benefit from
leeching proximity, while distant factions occupy different zones entirely.
The cycle ensures that no terrain type is objectively "best" — value is always
relative to identity.

ROUND SCORING TILES AS SHIFTING PRIORITIES: Six round scoring tiles are
revealed at game start, one per round, each rewarding a specific action
(terraforming, building Dwellings, upgrading to Trading Houses, advancing on
cult tracks, etc.). Because all six are visible from the beginning, experienced
players plan their entire game arc around the scoring sequence. A round that
rewards Dwelling construction means everyone builds that round, creating
resource competition. A round that rewards terraforming favors factions with
cheap shovels. The tiles transform what could be a static optimization into a
dynamic rhythm where the "right" action changes every round. Combined with
Bonus Tiles (drafted when passing), they create a layered incentive structure
that shifts the game's center of gravity from round to round.

NETWORK SCORING AND TOWN FOUNDING: Connected structures score VP at game end
for the largest network, and clusters of four or more buildings with a combined
power value of seven or more can be declared as Towns, granting powerful Town
Tiles. This dual incentive for connectedness means players cannot simply scatter
Dwellings across the map — they must build contiguous networks, which in turn
forces them into proximity with opponents (feeding the leech mechanic) and
creates territorial disputes over key bridging hexes. The Town requirement adds
a structural puzzle: you need not just adjacency but sufficient building value,
so upgrading structures within a cluster matters as much as expanding it.

CULT TRACKS AS PARALLEL SCORING AXIS: Four cult tracks provide VP at multiple
points — when crossing certain thresholds, from round scoring tiles that reward
cult advancement, and at game end where the top positions earn substantial
bonus VP. Priests are the primary means of advancement, but Favor Tiles (gained
from building Temples) provide both permanent cult advancement and ongoing
bonuses. The tracks create a strategic axis orthogonal to the spatial game: a
player can score competitively through cult dominance even with a modest
territorial presence, and the limited priest supply forces players to specialize
rather than advancing all four tracks equally.

ZERO RANDOMNESS AS DESIGN COMMITMENT: Terra Mystica contains no dice, no card
draws, no random events. The map is fixed, all scoring tiles are visible from
turn one, and every faction's capabilities are fully known. The only hidden
information is opponents' intentions. This makes the game a pure spatial and
economic optimization puzzle where every loss can be traced to a specific
decision rather than bad luck. The design trades the excitement of uncertainty
for the satisfaction of mastery — experienced players can plan multi-round
strategies with confidence that nothing will invalidate their calculations. This
commitment to determinism was relatively radical for 2012 and helped define a
subgenre of "no-luck Euros" that includes its successor Gaia Project.

PASS ORDER AS TEMPO MECHANISM: When a player passes, they select a Bonus Tile
for the next round. Passing earlier grants access to the best tiles but
sacrifices actions in the current round. The first player to pass each round
becomes the start player for the next round. This creates a genuine tempo
dilemma: do you squeeze one more action out of this round, or pass early to
secure a crucial Bonus Tile and first-player advantage? Since Bonus Tiles
provide both passive income and special actions, the pass decision is not merely
"I'm done" — it is one of the most important strategic choices each round.

### What Makes It #35

Terra Mystica's enduring influence lies in the faction board mechanism — the
idea that constructing buildings on the map simultaneously builds your economic
engine by revealing income on your player board. This bidirectional
construction-as-engine-building has become one of the most widely copied
patterns in modern Euro design. The power bowl system adds a resource management
puzzle with no analogue in earlier games: a physically intuitive cycling
mechanism that makes delayed gratification tangible. The passive power leeching
creates a spatial incentive structure where proximity to opponents is both a
threat and a resource, generating emergent interaction without explicit
negotiation. The terrain cycle ensures fourteen factions experience genuinely
different games on the same fixed map. And the complete absence of randomness
makes it a pure test of planning and adaptation to opponents. Terra Mystica is
the foundational design that Gaia Project refined, and many of its core ideas —
faction boards with revealed income, power cycling, asymmetric spatial value —
have become standard vocabulary in heavy Euro design.
