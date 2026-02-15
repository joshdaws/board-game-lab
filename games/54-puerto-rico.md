# Puerto Rico

## Quick Stats

- **Players:** 2-5
- **Time:** 90-150 min
- **Weight:** 3.27/5

## Mechanics

- Action Drafting
- Variable Phase Order
- End Game Bonuses

## Categories

- City Building
- Economic
- Farming

## Rulebook

See `rulebooks/54-puerto-rico.pdf`

## Design Notes

Designer: Andreas Seyfarth. Published by Ravensburger/alea (2002).

### Theme Integration

Puerto Rico casts players as colonial plantation owners in 17th century Puerto
Rico, developing the island's agricultural economy by growing crops, constructing
buildings, and shipping goods back to the Old World. The theme is functional rather
than immersive — it provides a coherent logic for the production chain (plant crops,
process them in buildings, ship them for points or sell them for money) but does not
attempt historical simulation or narrative depth. The plantation system creates a
clear economic pipeline: indigo, sugar, tobacco, coffee, and corn are grown on
plantations, processed in corresponding production buildings staffed by colonists,
and then either shipped for victory points or sold at the trading house for doubloons.

The colonist system is the most thematically loaded element, though its historical
implications have been widely discussed and critiqued. Colonists arrive by ship each
round and must be assigned to plantations and buildings to make them functional. An
unstaffed building produces nothing; an unstaffed plantation grows nothing. This
creates a persistent labor-allocation puzzle that drives much of the game's strategic
depth. The abstraction of labor as a generic resource that flows from a supply ship
to player boards is mechanically elegant — it unifies the activation of all economic
infrastructure under a single scarce resource — even as its thematic resonance has
aged poorly.

The buildings themselves tell a story of economic development. Early buildings are
cheap production facilities (small indigo plant, small sugar mill) that enable basic
commodity processing. Mid-game buildings provide economic advantages (factory,
harbor, wharf) that multiply the value of your production chain. Late-game buildings
are large prestige structures (guild hall, residence, city hall) that score bonus
victory points based on your board state. This arc from production infrastructure
to scoring multipliers mirrors the colonial economic trajectory from raw extraction
to developed commerce, and it creates a natural strategic progression that players
follow across the game.

### Core Loop

Puerto Rico is played in rounds, each consisting of a sequence of role selections:

1. ROLE SELECTION - Starting with the Governor (first player marker, which rotates
   each round), each player in clockwise order selects one role from the available
   pool. There are seven roles (in a 3-5 player game); once selected, a role is
   unavailable for the rest of the round. Unchosen roles accumulate a doubloon
   bonus, making them more attractive in subsequent rounds.
2. ROLE EXECUTION - When a role is selected, ALL players execute that role's
   action, but the selecting player receives a privilege (a bonus). The roles are:
   a) SETTLER - All players may take one plantation tile from the supply and place
      it on their island board. Privilege: may choose a quarry instead (which
      reduces building costs).
   b) MAYOR - New colonists arrive from the colony ship (one per player plus extras
      to fill the ship). All players distribute colonists to their plantations and
      buildings. Privilege: receive one extra colonist from the supply.
   c) BUILDER - All players may construct one building by paying its doubloon cost
      (reduced by occupied quarries). Privilege: pay one doubloon less.
   d) CRAFTSMAN - All players produce goods based on staffed plantations matched
      with staffed production buildings. Privilege: produce one additional good of
      a type you produce.
   e) TRADER - In turn order, each player may sell one good to the trading house
      for doubloons (each good type has a fixed price; the trading house holds a
      maximum of four goods, and duplicates are not accepted unless a player has
      the Office building). Privilege: earn one extra doubloon.
   f) CAPTAIN - In turn order, players must ship goods onto cargo ships (each ship
      accepts only one good type per round). Each good shipped scores one victory
      point. Players must ship if they can. Privilege: earn one extra victory point.
      After shipping, goods that could not be shipped or stored are lost.
   g) PROSPECTOR - Only the selecting player gains one doubloon. No action for
      other players.
3. ROUND CLEANUP - Return all selected roles to the pool. Place one doubloon on
   each unchosen role (accumulates across rounds). Pass the Governor marker
   clockwise.

The game ends when any of three conditions is met: the colonist supply is exhausted,
the victory point chips run out, or a player fills all building spaces on their
city board. Final scoring adds victory points from shipped goods, building VP
values, and bonus VP from large buildings.

### Key Design Patterns

ROLE SELECTION WITH UNIVERSAL EXECUTION: Puerto Rico's most influential design
innovation is the role-selection mechanism where the chosen role's action applies
to all players, not just the chooser. This single rule transforms every decision
into a multiplayer optimization problem. When you select the Craftsman, you produce
goods — but so does everyone else. If your opponents are better positioned to
capitalize on production than you are, selecting Craftsman may hurt your relative
position even as it helps your absolute one. Every role selection is thus a
calculation of differential advantage: not "how much does this help me?" but
"how much more does this help me than it helps them?" This mechanism created an
entirely new category of strategic consideration in board gaming and was so
influential that it spawned an entire subgenre of "follow" games (Race for the
Galaxy, Glory to Rome, San Juan) that build on the same core insight.

ACTION PRIVILEGE AS INCENTIVE MECHANISM: The privilege system — granting the role
selector a small bonus — serves a precise design function. Without privileges,
players would be reluctant to select any role that benefits opponents, leading to
deadlock. The privilege provides just enough extra value to make role selection
worthwhile even when opponents also benefit. The privileges are calibrated to be
meaningful but not dominant: one extra colonist, one fewer doubloon cost, one
extra good. This calibration is critical — too-strong privileges would make the
role selector's advantage overwhelming, reducing the game to a solo optimization
where each player waits for their turn to select. Too-weak privileges would not
overcome the reluctance to benefit opponents. The doubloon accumulation on
unchosen roles provides a secondary incentive mechanism, ensuring that every role
eventually becomes attractive enough to select, preventing any action from being
permanently ignored.

THREE VICTORY-POINT PATHS WITH FORCED TENSION: Victory points come from three
sources: shipping goods (Captain role), building values, and large building
bonuses. These paths are in structural tension because the resources that fuel
them compete. Goods can be shipped for VP or sold for doubloons (which buy
buildings). Colonists can staff production buildings (enabling shipping) or
prestige buildings (enabling bonus VP). The Captain role forces players to ship
goods they might prefer to sell, creating a persistent tension between the
shipping-VP path and the building-VP path. This forced shipping is one of the
game's most contentious and brilliant mechanics: it prevents hoarding, creates
scarcity, and forces players to adapt their strategy to the flow of goods
rather than stockpiling optimally. A player who produces heavily must ship
heavily, which scores VP but prevents accumulating goods for sale.

PRODUCTION CHAIN AS STRATEGIC BACKBONE: The economic pipeline — plantation
produces raw goods, production building processes them, shipping or selling
converts them to VP or doubloons — creates a multi-step dependency chain that
must be constructed and staffed in the correct order. A sugar plantation
without a sugar mill is useless. A sugar mill without a colonist is useless.
A fully staffed sugar operation without a ship that accepts sugar is frustrating.
This chain dependency means that players cannot specialize prematurely; they must
build balanced infrastructure before optimizing. The chain also creates natural
interaction points: the shared cargo ships mean that one player's good type blocks
the ship for opponents, and the trading house's no-duplicate rule means that the
first player to sell coffee captures that market for the round.

BUILDING DIVERSITY AS STRATEGIC DIFFERENTIATION: Puerto Rico features
approximately 20 building types across three cost tiers, and no two buildings
provide the same benefit. Small buildings tweak the rules in focused ways (the
Small Market adds a doubloon when selling; the Hacienda grants an extra
plantation; the Construction Hut lets you take quarries during Settler). Large
buildings provide major end-game scoring bonuses based on specific board states
(the Guild Hall scores per production building; the Residence scores based on the number of filled
island spaces; the City Hall scores per beige building). This diversity means that
each player's building portfolio creates a unique strategic identity, and the
shared building supply creates competition for key structures. The one-copy limit
on most buildings means that a purchased building is denied to all opponents,
creating a secondary strategic consideration: sometimes you buy a building not
because it optimizes your own strategy but because it would be devastating in an
opponent's hands.

COLONIST SCARCITY AS UNIVERSAL BOTTLENECK: Every plantation and building requires
colonists to function, and colonists are the game's most persistently scarce
resource. The colony ship brings a fixed number each round (equal to the number
of players or the number of empty building spaces, whichever is greater), and
the Mayor role is the only way to distribute them. This scarcity means that
building and planting without colonists to staff them is wasteful, and that the
timing of Mayor selection is critical. A player who has just built new
infrastructure desperately needs Mayor; a player who is fully staffed would
prefer to delay it. The colonist bottleneck also limits snowball potential:
even a wealthy player who builds rapidly cannot staff their buildings faster
than the colonist supply allows, preventing any single player from running away
with the game through pure economic acceleration.

TRADING HOUSE AS MARKET SIMULATION: The trading house — a structure that holds
up to four goods, refuses duplicates (unless a player owns the Office building),
and clears when full — simulates a simple commodity market with supply and
demand dynamics. Being the first to sell a rare good (tobacco, coffee) is
lucrative; being stuck with a common good that someone has already sold is
frustrating. The no-duplicate rule creates an ordering advantage: earlier
players in turn order have first access to the market, while later players
may find their goods blocked. This makes turn order — determined by the
Governor's rotation — a genuine strategic resource, and it gives the Trader
role additional strategic depth beyond simply "sell goods for money."

UNCHOSEN ROLE ACCUMULATION AS BALANCING MECHANISM: Roles that no one selects
in a given round accumulate a doubloon bonus. This simple rule serves as an
elegant self-correcting mechanism. If a role is consistently unpopular (perhaps
because the game state makes it less valuable), its accumulating bonus
eventually makes it attractive enough to select. This prevents strategic
ossification where certain roles are perpetually ignored, and it creates
dynamic incentives that shift from round to round. A Settler with three
accumulated doubloons is worth selecting even if you do not need a plantation,
simply for the cash. The accumulation mechanism ensures that the full range of
the game's action space remains accessible across the session.

### What Makes It #54

Puerto Rico's enduring design legacy is the role-selection mechanism and its
profound implication: that in a multiplayer game, every action you take must be
evaluated not by its absolute value to you but by its differential value relative
to every other player at the table. This single insight reshaped the entire
Euro-game genre. The production chain provides strategic depth, the building
diversity provides variety, and the colonist bottleneck prevents runaway leaders.
But the role-selection mechanism is what makes Puerto Rico intellectually
distinctive: it turns every turn into a negotiation between what you want to do
and what you are willing to let opponents do. The fact that a game designed in
2002 with relatively simple components continues to be studied and referenced is
a testament to the power of its core mechanism — an idea so fundamental that it
became a design template for an entire generation of games that followed.
