# Food Chain Magnate

## Quick Stats

- **Players:** 2-5
- **Time:** 120-240 min
- **Weight:** 4.19/5

## Mechanics

- Delayed Purchase
- Income
- Market
- Modular Board
- Open Drafting
- Simultaneous Action Selection

## Categories

- Economic
- Industry / Manufacturing

## Rulebook

See `rulebooks/50-food-chain-magnate.pdf`

## Design Notes

Designers: Jeroen Doumen & Joris Wiersinga. Published by Splotter Spellen (2015).

### Theme Integration

Food Chain Magnate simulates the cutthroat reality of competing fast food empires
in a growing suburban neighborhood. The theme is not a veneer over abstract
mechanisms — it is the logic that connects every system in the game. Players hire
employees, train them into specialists, run marketing campaigns to create consumer
demand, cook food to fill that demand, and compete on price and proximity to
capture sales from neighborhood houses. The entire arc of building a restaurant
chain — from scrappy one-person startup to sprawling corporate machine — plays
out through decisions that feel thematically grounded at every step.

The satirical edge is deliberate. Splotter's design leans into the absurdities of
the fast food industry: demand does not exist until someone advertises, prices can
be slashed to zero in vicious undercutting wars, employees are hired and fired
with ruthless efficiency based purely on their immediate utility, and the winner
is simply whoever accumulates the most cash. The game does not romanticize
entrepreneurship; it presents the fast food business as a zero-sum contest where
marketing manufactures desire, logistics determine access, and the cheapest
provider wins. Gardens on houses double the revenue from sales — a wry nod to
the idea that affluent neighborhoods are more profitable targets. The entire
economic model is demand-side: no one buys anything unless they have been told
to want it, and the moment they want it, whoever can deliver it cheapest and
closest gets the sale.

The modular neighborhood map reinforces the spatial reality of restaurant
competition. Houses are scattered across a grid of roads, and the physical
distance between a house and a restaurant entrance matters as much as the price
on the menu. This is not an abstract market — it is a geography, and players
must read the map the way a real franchise operator reads a city plan, identifying
underserved neighborhoods, anticipating competitor expansion, and positioning
restaurants to maximize catchment areas.

### Core Loop

The game unfolds over a variable number of rounds, ending when the bank runs out
of money for the second time. Each round follows a structured sequence of phases:

1. RESTRUCTURING — Players simultaneously decide which employees will work this
   turn, arranging active cards into an organizational chart beneath their CEO.
   The CEO provides three slots for direct reports, which can be filled by regular
   employees or managers. Managers (on black cards) can supervise 2-6
   subordinates depending on their rank, but the hierarchy caps at three levels:
   CEO, manager, employee. Cards left out of the org chart are "on the beach" —
   they do not work and do not require salary. This phase is the game's core
   planning moment, where players commit to a specific operational configuration
   for the round.

2. ORDER OF BUSINESS — Players choose positions on the turn order track. The
   player with the most open slots in their company structure picks first,
   followed by the next largest, and so on. Lower turn order numbers act first
   during the working phase. The number of open slots in the org chart thus
   determines both action capacity and priority in choosing when to act.

3. WORKING 9-TO-5 — In turn order, each player activates their employees one at
   a time, performing actions in a fixed sequence: recruiting new staff, training
   existing employees into advanced roles, running marketing campaigns that place
   demand tokens on houses, cooking food (burgers, pizza) or acquiring drinks,
   placing new houses or gardens on the map, setting prices, and various other
   operational actions. Each employee provides exactly one action. The number of
   actions a player takes in a round equals the number of active employees in
   their org chart — making the org chart itself the game's action-programming
   engine.

4. DINNERTIME — The market resolves. Each house with demand tokens is served by
   the restaurant offering the lowest combination of unit price plus distance
   (measured in road segments). Ties are broken by waitress count, then turn
   order. The winning restaurant must have the demanded items in stock; if it
   cannot fulfill the order, the sale passes to the next cheapest option. Sold
   items are discarded from inventory, demand tokens are removed, and the
   restaurant receives payment at its unit price per item (doubled for houses
   with gardens).

5. PAYDAY — Players may fire employees, then must pay $5 salary per employee
   that requires it. Unused recruiting capacity on certain manager cards offsets
   salary costs. Cash flow management is critical: a large workforce generates
   more actions but demands more income to sustain.

6. MARKETING CAMPAIGNS — Active campaigns generate new demand tokens on houses
   within their range. Different campaign types (billboards, mailboxes, airplanes,
   radios) reach houses through different spatial patterns, each with distinct
   coverage geometry.

7. CLEANUP — Unsold inventory is discarded. The cycle repeats.

The fundamental rhythm is: configure your workforce, generate demand through
marketing, produce food to meet that demand, then compete on price and location
to capture sales. Every dollar earned must cover the salary overhead of the
workforce that earned it, and any surplus is pure profit toward winning the game.

### Key Design Patterns

ORG CHART AS ACTION PROGRAMMING: The organizational chart is Food Chain Magnate's
most distinctive structural innovation. Rather than selecting actions from a
shared board or playing cards from a hand, players build a corporate hierarchy
that determines what they can do each round. Every active employee in the chart
provides exactly one action, so the chart simultaneously defines both the
quantity and the type of actions available. The three-level cap (CEO, manager,
employee) and the slot limits on each card create a spatial puzzle: fitting the
right combination of specialists into a constrained tree structure. Crucially,
the restructuring phase happens simultaneously — players must commit to their
operational plan before seeing what opponents will do. The org chart is not just
an action-selection mechanism; it is a representation of the player's company,
and the tension between hiring more employees (more actions, higher salary) and
keeping a lean operation (fewer actions, lower overhead) mirrors the real
strategic dilemma of scaling a business.

MILESTONE SYSTEM AS IRREVERSIBLE FIRST-MOVER ADVANTAGE: Milestones are permanent
bonuses awarded to the first player (or players, if achieved simultaneously) to
accomplish specific feats — first to train an employee, first to place a
billboard, first to market each food type, first to lower prices, first to have
$100, and others. Once claimed, a milestone is locked forever; no other player
can earn it. These bonuses range from powerful ($15 salary discount, +$5 per
unit of a food type sold, eternal marketing campaigns that never expire) to
situationally valuable (extra drinks from each source, waitress tips increased
to $5). The milestone system is the game's primary engine of asymmetry: early
decisions about which milestones to pursue shape the entire trajectory of a
player's strategy. Critically, milestones reward being first, not being best —
a player who rushes to train an employee on turn two gets the same permanent
discount as one who would have trained more efficiently on turn four. This
creates constant tension between executing your plan at the optimal moment and
racing to claim a milestone before an opponent does. The system also means that
the opening turns of Food Chain Magnate carry enormous weight, because the
milestones available in the early game define the strategic landscape for the
rest of the session.

DEMAND-DRIVEN MARKET WITH MANUFACTURED DESIRE: Food Chain Magnate's most
thematically resonant design decision is that demand does not exist naturally.
Houses on the map have no inherent appetite — they only want food or drinks
when a player's marketing campaign tells them to want it. This means the market
is entirely player-constructed: you must spend actions (and employee slots) on
marketers to create the demand that your cooks and buyers will then fill. The
spatial dimension adds depth: each campaign type (billboard, mailbox, airplane,
radio) reaches houses through different geometric patterns on the grid, and the
demand tokens are placed on specific houses, not into an abstract pool. This
creates a geographic market where demand is localized, and players must
coordinate their marketing reach with their restaurant locations. The system
also generates a powerful collective-action problem: marketing benefits whoever
can fulfill the demand cheapest and closest, not necessarily the player who
created it. Placing a billboard that generates demand on a house equidistant
between your restaurant and a competitor's is a gamble — you have spent the
action, but your opponent may capture the sale through better pricing or a
closer entrance.

ZERO-LUCK PERFECT INFORMATION: Food Chain Magnate contains no dice, no card
draws, no random events, and no hidden information beyond the initial reserve
card selection. Every employee is available for hire at any time (subject to
training prerequisites). The map is fully visible. Demand tokens are placed
openly. Pricing decisions are public. The only moment of hidden information is
the simultaneous restructuring phase, where players build their org charts
face-down before revealing — and even this is a simultaneous commitment, not
randomness. This design philosophy, characteristic of Splotter, means that
every outcome is traceable to player decisions. There is no variance to blame
for a bad result and no luck to credit for a good one. The consequence is that
the game is unforgiving: a strategic mistake on turn two can cascade through
the entire session with no random event to reset the trajectory. Splotter's
stated philosophy — "if you can't lose on the first turn, what's the point of
turn one?" — is fully embodied here. The zero-luck framework also means the
game rewards deep reading of opponents' positions, because all information
needed to predict their actions is available on the table.

PRICING WARS AND SPATIAL COMPETITION: The sales resolution formula — unit price
plus distance — creates a two-dimensional competitive space where players fight
on both price and geography simultaneously. The base unit price is $10, but
pricing managers reduce it by $1, discount managers by $3, and luxury managers
increase it by $10. A player with aggressive price reduction can capture distant
houses that would otherwise belong to a closer competitor, while a player with
superior location can charge premium prices. The formula is transparent and
deterministic: players can calculate exactly which houses they will win at any
given price point, turning dinnertime into a spatial optimization puzzle. The
"First to lower prices" milestone adds a permanent $1 discount, making the
pricing race a strategic consideration from the very first turn. Price wars
can drive unit prices to zero or even below — a player may sell at a loss to
deny revenue to a competitor, a tactic that mirrors real-world predatory pricing
in the fast food industry.

RESERVE CARD AS GAME-LENGTH CALIBRATION: At setup, each player secretly selects
a reserve card that determines how much additional money enters the bank when
it first runs out. Higher-value reserve cards extend the game; lower-value cards
shorten it. This is a meta-strategic decision made before the first turn: a
player who intends to build a large, salary-intensive operation wants a longer
game to recoup their investment, while a player planning an aggressive early
rush wants the bank to break quickly. The reserve cards also determine the
number of CEO slots each player will have after the first bank break, adding
a structural dimension to what appears to be a simple timing decision. Because
reserve cards are hidden until the bank breaks, players must read their
opponents' strategies to infer whether the game will be long or short — a
layer of deduction in an otherwise perfect-information system.

SALARY STRUCTURE AS CASH FLOW PRESSURE: Every salaried employee costs $5 per
round, creating a relentless overhead that scales with organizational size.
This is the game's primary governor on runaway engine-building: a large
workforce generates more actions and more revenue, but it also demands more
income just to sustain itself. Players who hire aggressively without generating
sufficient sales can find themselves in a cash-flow death spiral — too many
employees to pay, not enough revenue to cover salaries, and firing employees
means losing the capabilities that might have generated future income. The
salary structure makes every hiring decision a commitment with ongoing
consequences, not a one-time cost. Combined with the milestone that grants a
$15 salary discount to the first trainer, the salary system creates powerful
strategic incentives around the timing and sequencing of workforce expansion.

MODULAR NEIGHBORHOOD AS COMPETITIVE GEOGRAPHY: The map is assembled from
randomly selected and oriented tiles, creating a different neighborhood layout
every game. Houses are not pre-placed — they are added to the map during play
by new business developers, meaning the geography of demand evolves as the game
progresses. Players can strategically place houses to benefit their own
restaurant locations or to create demand in areas poorly served by competitors.
The road network determines distance calculations for sales resolution, making
the specific topology of each map a critical strategic factor. Restaurant
placement is permanent — once you build on a tile, that is your location for
the entire game — which means the initial restaurant placement decision must
account for a neighborhood that does not yet fully exist.

### What Makes It #50

Food Chain Magnate represents Splotter Spellen's design philosophy in its purest
form: a zero-luck, open-information economic game where every decision carries
permanent weight and no mechanism exists to soften the consequences of a
mistake. The game achieves remarkable strategic depth from a relatively modest
set of components — employee cards, a modular map grid, and cash — by making
every system interact with every other system through the medium of the market.
The org chart determines what you can do; marketing determines what customers
want; cooking determines what you can supply; pricing and geography determine
who gets the sale; and salary determines whether the revenue you earn exceeds
the cost of the workforce that earned it. There are no independent subsystems
to optimize in isolation; every decision ripples through the entire economic
chain.

The milestone system is the game's most inspired design contribution, solving
a fundamental problem in symmetric economic games: how to create divergent
strategic identities without asymmetric starting positions. By making permanent
bonuses available only to the first achiever, Food Chain Magnate ensures that
players' strategies differentiate naturally through the race for milestones,
rather than through pre-assigned player powers. The result is a game where the
opening turns feel like a chess opening — heavily analyzed, deeply consequential,
and different every time based on player count, map layout, and opponent
tendencies. Combined with the demand-driven market that forces players to
manufacture their own economic opportunities rather than harvesting from a
shared supply, Food Chain Magnate stands as one of the definitive statements
in economic game design: a pure contest of planning, positioning, and
competitive reading where the best player wins and everyone at the table
knows exactly why.
