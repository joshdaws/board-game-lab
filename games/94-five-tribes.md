# Five Tribes: The Djinns of Naqala

## Quick Stats

- **Players:** 2-4
- **Time:** 40-80 min
- **Weight:** 2.87/5

## Mechanics

- Area Majority/Influence
- Auction/Bidding
- Set Collection
- Mancala
- Worker Displacement

## Categories

- Arabian
- Fantasy

## Rulebook

See `rulebooks/94-five-tribes.pdf`

## Design Notes

Designer: Bruno Cathala. Published by Days of Wonder (2014).

### Theme Integration

Five Tribes draws from the mythology of Arabian Nights and the political
landscape of a fictional Sultanate of Naqala, where the old Sultan has died
and rival factions compete to control the land by commanding five tribes of
loyal subjects. The theme is expressed through the game's central conceit:
meeples are not workers you deploy but people already present in the world,
and your influence over them is transient. You do not place meeples -- you
pick them up and redistribute them, like a political operator moving through
a crowd, gathering allies for a brief moment of power before they disperse
again. This is thematically distinct from nearly every other worker placement
game, where workers represent your permanent labor force. In Five Tribes,
the people belong to no one until the moment they are gathered and used.

The five tribe colors map to distinct societal roles: yellow Viziers
represent political power (majority scoring), white Elders represent
wisdom (2 VPs each at game end), green Merchants represent commerce (goods
acquisition), red Assassins represent shadowy manipulation (removal of
opponents' pieces), and blue Builders represent infrastructure (coin
generation from surrounding tiles). These roles are not arbitrary color-coding
-- they create a thematic logic for why gathering different meeple types
produces different effects. Claiming a tile by emptying it of meeples
represents establishing dominion over unclaimed territory, a land-grab
in a power vacuum.

The Djinn cards extend the Arabian Nights fantasy by granting players
powerful magical allies, each named and illustrated as distinct supernatural
beings. Djinns provide ongoing or one-time abilities that bend the game's
rules, reinforcing the theme that in Naqala, power comes not just from
political maneuvering but from bargains with otherworldly forces. The
resource goods -- ivory, gold, jewels, spices, and more -- evoke the
historical Arabian trade networks, and their set collection scoring
mirrors the merchant logic of assembling valuable shipments.

### Core Loop

Each turn follows a three-step structure after a critical bidding phase:

1. **BID FOR TURN ORDER** -- Players bid coins (0-18+) to determine play
   order for the round. Highest bidder goes first, with ties broken by
   position on the bid order track. Bidding is open and sequential along
   the track, creating visible price information.

2. **MOVE MEEPLES (Mancala)** -- The active player picks up ALL meeples
   from one tile on the 5x6 grid and distributes them one-per-tile along
   an orthogonal path (no diagonals, no immediate backtracking), with the constraint
   that the last meeple dropped must match at least one meeple already on
   the destination tile.

3. **COLLECT TRIBE** -- Pick up all meeples of the last-dropped color from
   the destination tile. Resolve their tribal action:
   - Yellow Viziers: Keep for end-game majority scoring
   - White Elders: Keep for end-game scoring (2 VPs per Elder owned)
   - Green Merchants: Claim resource goods from an adjacent market
   - Red Assassins: Remove meeples or opponent Viziers/Elders from the board
   - Blue Builders: Earn coins equal to the number of surrounding blue
     tiles (including the destination) multiplied by the number of builders collected

4. **CLAIM TILE** -- If the tile is now empty of meeples and unclaimed,
   place your camel on it. You now own this tile for end-game scoring.

5. **TILE ACTION** -- Perform the action of the tile where your mancala
   move ended: Oasis (place Palm Tree), Village (place Palace), Small
   Market (pay 3 coins for 1 resource), Large Market (pay 6 coins for
   2 resources), or Sacred Places (pay Elders/Fakir for a Djinn).

6. **MERCHANDISE SALE (Optional)** -- After all actions, sell one or more
   sets of different Merchandise for gold coins (1/3/7/13/21/30/40/50/60
   for 1-9 different types).

The game ends when one player places their last camel or when no legal
mancala moves remain. Final scoring sums: gold coins (1 VP each),
Vizier majority bonuses, Elders (2 VPs each), Djinn point values,
Palm Trees (3 VPs each) and Palaces (5 VPs each) on owned tiles,
tile values, and merchandise set collection.

### Key Design Patterns

MANCALA AS MOVEMENT SYSTEM: Five Tribes' defining innovation is adapting the
ancient mancala mechanism -- pick up and distribute seeds -- as a spatial
movement and action-selection system on a modular grid. Instead of moving a
single piece, players pick up a group of meeples and sow them across
adjacent tiles, with the critical constraint that the final meeple must
match a color already present at the destination. This creates an
extraordinarily rich spatial puzzle. The board state is a complex
configuration of colored meeples on tiles, and every pickup-and-distribute
sequence transforms it in ways that are easy to execute but extremely
difficult to fully evaluate in advance. The mancala mechanism generates
combinatorial depth from simple rules -- the decision space for a single
turn can involve dozens of legal moves, each with different tile,
tribe, and board-state consequences.

TURN ORDER AUCTION AS VALUATION TEST: Before any meeples are moved, players
must bid for turn order. Going first is enormously valuable because you see
the full board state and can execute the strongest move; going last means
the best configurations have been disrupted. The auction forces players to
assign a precise coin value to positional advantage. Overbidding wastes
coins (which are direct victory points); underbidding means losing the
best moves to opponents. The auction creates a meta-game about reading
how much each opponent wants to go first based on the current board state.
Experienced players learn to bid aggressively when the board presents
exceptional opportunities and conserve when the board is flat. The
design pattern is that auctions are most interesting when the object
being auctioned has uncertain value that depends on player-specific context.

FIVE TRIBE TYPES AS FIVE SCORING MECHANISMS: Each meeple color triggers a
completely different effect, and the five effects span different strategic
paradigms: Viziers reward long-term accumulation (majority bonus), Elders
reward collection (flat 2 VPs each), Merchants reward market
timing (goods acquisition), Assassins reward tactical aggression
(removal), and Builders reward spatial awareness (adjacency calculation).
A single turn's value depends entirely on which color you collect and in
what quantity. This design creates strategic diversity within each turn
-- a Builder move and a Merchant move feel like entirely different games.
The five-tribe structure also means players must constantly re-evaluate
which scoring mechanism offers the best return given the current board
configuration, preventing any single strategy from dominating.

DJINN CARDS AS VARIABLE POWERS: The Djinn deck introduces asymmetric
powers that modify the game's rules in significant ways. Some Djinns
score bonus points for specific conditions; others grant powerful
one-time abilities; others provide ongoing discounts or extra actions.
Djinns are purchased from a shared display, creating a competitive
market for powers. The design function of Djinns is to introduce
strategic direction into a game that might otherwise feel purely
tactical. A Djinn that rewards palm trees gives you a reason to claim
specific tiles; a Djinn that rewards Assassin kills redirects your
mancala targeting. Djinns convert Five Tribes from a purely
opportunistic puzzle into a game where long-term strategic goals
can emerge mid-play.

EMPTYING A TILE AS TERRITORIAL CONTROL: When a player's mancala move
removes the last meeple from a tile, they claim that tile permanently
by placing a camel. This mechanism creates a fascinating tension: the
most valuable mancala moves (collecting many meeples of one color)
often require tiles with many meeples, but claiming territory requires
emptying tiles completely. Players must choose between maximizing tribal
action value (many meeples) and territorial control (emptying tiles).
The territory game also interacts with Builders, who score based on
surrounding tile values, meaning a cluster of claimed tiles near blue
buildings creates compounding value.

ASSASSINATION AS BOARD MANIPULATION: Red Assassin meeples allow players
to remove one meeple from the board -- from a tile within range equal to
the number of Assassins collected -- or steal an opponent's Vizier or Elder. This removal capability is Five Tribes' primary
interaction mechanism. Assassins can eliminate an opponent's last meeple
on a tile to prevent them from claiming it, remove Viziers to weaken an
opponent's majority position, or clear meeples to enable future tile
claims. The design elegance is that assassination uses the same mancala
movement as every other action -- the interaction is embedded in the
core mechanism rather than bolted on as a separate attack system.

RESOURCE GOODS AS SET COLLECTION: The nine types of resource goods
(papyrus, ivory, jewels, etc.) score on an escalating set collection
curve. A single good is worth little; a complete set of different
goods is worth enormously more. Green Merchant meeples let you
claim goods from the market row adjacent to your destination tile,
and Merchant moves that collect multiple goods simultaneously are
among the game's highest-value plays. The set collection curve
creates a valuation problem: is it better to complete a set of six
different goods or collect three sets of two? The exponential scaling
rewards diversity, but diverse sets require more turns to assemble.

THE AP PROBLEM AS DESIGN CONSIDERATION: Five Tribes has a well-documented
analysis paralysis problem. The board presents enormous numbers of legal
mancala moves, each with cascading consequences for tribe collection,
tile claiming, Djinn interactions, and resource acquisition. Some players
spend several minutes evaluating a single turn, while others play
instinctively. The AP problem is not a design flaw but an inherent
consequence of the game's combinatorial richness -- the same decision
space that creates strategic depth also creates cognitive overload. The
design community has debated whether Five Tribes would benefit from a
timer mechanism or a reduced board size. Cathala's choice to preserve
the full decision space represents a commitment to depth over speed,
trusting that the right audience will find the puzzle rewarding rather
than paralyzing. For designers, Five Tribes is a case study in the
tension between combinatorial richness and cognitive accessibility.

### What Makes It #94

Five Tribes is the game that proved mancala -- a mechanism thousands of
years old -- could be the foundation of a modern, strategically deep
eurogame. Bruno Cathala's insight was that pick-up-and-distribute creates
spatial puzzles of extraordinary richness when applied to a two-dimensional
grid with typed pieces, and that the combinatorial explosion inherent in
mancala movement is a feature, not a bug, when combined with multiple
scoring mechanisms. The turn order auction, the five tribe types, the
Djinn cards, and the territorial control layer each add a dimension of
evaluation to every mancala move, creating a game where the simple act of
picking up and distributing meeples becomes one of the most cognitively
demanding decisions in modern board gaming. It is a designer's game -- a
game that rewards players who can see deeper into the tree of possibilities
than their opponents.
