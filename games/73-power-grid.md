# Power Grid

## Quick Stats

- **Players:** 2-6
- **Time:** 120 min
- **Weight:** 3.28/5

## Mechanics

- Auction/Bidding
- Network Building
- Market
- Route Building

## Categories

- Economic
- Industry

## Rulebook

See `rulebooks/73-power-grid.pdf`

## Design Notes

Designer: Friedemann Friese. Published by 2F-Spiele / Rio Grande Games (2004).

### Theme Integration

Power Grid asks players to become competing energy companies in a deregulated
market, and every mechanic serves this premise with unusual directness. You
purchase power plants at auction — ranging from coal-burning relics to efficient
wind farms — buy the fuel to run them from a shared commodity market, and build
transmission networks connecting cities across a regional map. The goal is
pragmatically capitalist: power the most cities. There is no narrative arc, no
story to uncover, no thematic flourish beyond the cold logic of infrastructure
economics. This austerity is itself a design statement. Friese strips away
decorative theme to expose the skeleton of market competition, and what remains
is one of the purest economic simulations in hobby gaming.

The power plant cards carry illustrations of their generation technology — coal,
oil, garbage, nuclear, wind, fusion — and their efficiency ratings map roughly
to real-world energy economics. Coal and oil plants are cheap but fuel-hungry.
Garbage plants convert waste into power at moderate efficiency. Nuclear plants
are expensive but fuel-efficient. Ecological (wind/solar) plants require no fuel at all,
representing the holy grail of zero marginal cost energy. This progression from
dirty-and-cheap to clean-and-expensive mirrors actual energy sector transitions,
giving players an intuitive understanding of why upgrading your plant portfolio
matters even without explicit environmental mechanics.

The map itself — available in dozens of regional variants from Germany to North
America to China — grounds the abstract network-building in specific geography.
Connection costs between cities reflect terrain: mountain passes cost more than
flat plains, long distances cost more than short ones. Regional maps create
asymmetric starting conditions and choke points that vary by player count, as
not all regions are used in every game. The map is not merely a scoring surface;
it is a competitive landscape where geography constrains strategy.

### Core Loop

Each round proceeds through five phases in fixed order, and the phase structure
itself encodes the game's catch-up mechanisms:

1. DETERMINE PLAYER ORDER — Rank players by number of cities connected (most
   to fewest). Ties broken by highest-numbered power plant. The player powering
   the most cities goes first in turn order. This matters because going first
   is a disadvantage in phases 2 and 3 but an advantage in phase 5.

2. AUCTION POWER PLANTS — In player order (leader first), each player may
   initiate an auction on one power plant from the current market (4 face-up
   cards in the "actual market"). Starting bid must meet or exceed the plant's
   printed minimum. Other players bid clockwise. Highest bidder wins the plant
   and pays the bank. If you pass on starting an auction, you cannot bid on any
   plant this round. Once per round opportunity; plants you don't buy persist
   in the market.

3. BUY RESOURCES — In REVERSE player order (last place first). Purchase coal,
   oil, garbage, or uranium from the resource market to fuel your power plants.
   Resource prices increase as supply decreases — the market track shows exactly
   how price scales with scarcity. Buying fuel when you're in last place means
   you get the cheapest prices.

4. BUILDING — In REVERSE player order (last place first). Pay connection costs
   to add cities to your network. In Step 1, only one player can connect to
   each city. In Step 2, two players can share a city. In Step 3, three. You
   must connect to a city already in your network (or start a new network node
   in Step 1). Building first means cheaper access to contested cities.

5. BUREAUCRACY — Each player powers as many cities as possible using their
   plants and available fuel. Earn income based on cities powered (scaling
   payment table). Refill the resource market according to a replenishment
   table. Cycle the power plant market: remove the lowest plant, draw a new one.

The game escalates through three Steps. Step 2 triggers when a player connects
a threshold number of cities (varies by player count). Step 3 triggers when the
Step 3 card appears in the power plant deck. The game ends when any player
connects a target number of cities; the winner is whoever powers the most cities
that turn.

### Key Design Patterns

CATCH-UP MECHANISM THROUGH TURN ORDER: Power Grid's most celebrated design
element is its turn order system, which systematically advantages trailing
players. The leader (most cities connected) must bid first on power plants,
revealing their intentions and inviting counterbids. The leader buys fuel last,
paying inflated prices after others have depleted cheap supply. The leader builds
network connections last, finding contested cities already claimed. This triple
penalty for leading creates a genuine strategic incentive to stay in second or
third place through the mid-game, exploding into the lead only when you can
clinch victory in a single round. The design insight is that turn order alone,
without any explicit catch-up mechanism, can create balanced competition — you
simply need to make going first consistently worse than going last in the phases
that matter most.

RESOURCE MARKET AS SUPPLY-DEMAND SIMULATION: The fuel market is a masterpiece
of analog economic modeling. Resources are arranged on a track where each slot
has a printed price. As players buy resources, they take from the cheapest
available slots, driving prices up. Between rounds, resources replenish according
to a table that varies by player count and game step — but replenishment fills
the cheapest slots first, driving prices down. If everyone buys coal, coal
becomes expensive. If no one buys uranium, uranium becomes cheap. This creates
emergent market dynamics: players who invest in unpopular fuel types gain cost
advantages, while players competing for the same fuel type drive each other's
costs up. The design lesson is that a physical market track with fixed price
slots can simulate supply and demand with zero computation, making complex
economic dynamics visible and intuitive.

THREE-STEP ESCALATION STRUCTURE: The game's three Steps function as act breaks
in an economic drama. Step 1 is the land grab — cities are exclusive, networks
are small, and players jockey for position. Step 2 opens shared cities, doubling
available connection targets and intensifying competition for geography. Step 3
removes the lowest power plant from the market each round, accelerating
technological turnover and making the endgame a sprint. Each Step changes the
rules just enough to prevent any single strategy from dominating across the
entire game. The design wisdom is that rule changes at fixed thresholds create
natural narrative arcs (establishment, competition, resolution) without
requiring scenario-specific design.

POWER PLANT OBSOLESCENCE THROUGH MARKET CYCLING: The power plant market is a
conveyor belt. Four plants are in the "actual market" (available for auction)
and four are in the "futures market" (visible but not yet purchasable). When a
plant is bought, a new one is drawn and sorted by number into the market. In
Step 3, the lowest-numbered plant is removed each round. This cycling creates
technological pressure: cheap, inefficient plants that served you in Step 1
become liabilities as higher-numbered, more efficient plants enter the market.
Players who cling to outdated plants find themselves outpaced by competitors
who invested in upgrades. The design pattern is that a visible, deterministic
replacement pipeline creates strategic planning depth — you can see what
technologies are coming and time your purchases accordingly.

NETWORK BUILDING AS SPATIAL COMPETITION: Connecting cities is not just about
reaching a count threshold — it's about territorial control. Each connection
has a unique cost based on the map's geography. Building into a region early
claims cheap connections; later arrivals pay premium prices for remaining routes.
In Step 1, cities are exclusive (one player per city), creating blocking
opportunities. Geography creates natural choke points — narrow corridors between
regions where a single connection can cut off an opponent's expansion. The map
is a shared competitive resource that depletes over time, and positional
awareness is as important as economic management. The design insight is that
fixed, asymmetric costs on a shared map create emergent spatial strategy from
simple connection rules.

FUEL MARKET AS SHARED ECONOMY: Because all players buy from the same resource
market, fuel choice creates indirect interaction. If three players run coal
plants, coal prices spike — benefiting the player who invested in oil or
nuclear. This encourages portfolio diversification: the best strategy is often
to buy plants that use fuel types your opponents don't need. Uranium is
particularly interesting because it replenishes slowly (1 unit per round in
early game) but accumulates if unused, creating potential windfalls for nuclear
investors who time the market correctly. The design pattern is that shared
resource pools with differentiated demand create market-like competition without
requiring direct trading mechanics.

AUCTION AS VALUATION SKILL TEST: The power plant auction is where Power Grid
separates experienced players from novices. Every plant has a minimum bid, but
its actual value depends on your current portfolio, fuel costs, network size,
and game stage. Overbidding wastes capital that could fund network expansion.
Underbidding lets opponents acquire efficient plants cheaply. Knowing when to
force an opponent into an expensive bid — and when to let them have a plant
you don't need — is a meta-strategic skill that develops over many plays. The
auction also creates information: who bids aggressively on coal plants reveals
their fuel dependency. The design lesson is that auctions are inherently
skill-testing because they require players to assign precise value to objects
with complex, context-dependent utility.

INCOME SCALING AND CASH MANAGEMENT: The payment table for powering cities is
not linear — early cities are worth disproportionately more per city than later
ones. Powering 1 city earns 22 Elektro; powering 7 cities earns 73 Elektro (a
declining marginal return). This flattening income curve means that expanding
your network has diminishing returns unless you can make a decisive push to the
finish. Combined with the turn-order penalty for leading, this creates a game
where bankroll management — knowing exactly how much cash you need to make your
endgame move — is the decisive skill. The design pattern is that non-linear
income curves naturally moderate runaway leaders without requiring explicit
balancing mechanics.

### What Makes It #73

Power Grid endures because its economic simulation is both transparent and deep.
Every mechanism is visible — you can see the resource prices, the power plant
pipeline, the connection costs, and your opponents' financial positions. There is
no hidden information beyond cash totals. Yet from this transparency emerges a
game of brinkmanship, timing, and market manipulation that rewards repeated play
with ever-deepening strategic understanding. The turn-order catch-up system is
the keystone: it transforms a race game into a game of controlled restraint,
where the best players win not by leading the longest but by leading at exactly
the right moment. Two decades after publication, it remains the definitive
auction-and-network game precisely because its mechanisms are simple enough to
teach in twenty minutes and rich enough to study for years.
