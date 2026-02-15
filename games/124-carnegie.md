# Carnegie

## Quick Stats

- **Players:** 1-4
- **Time:** 120-180 min
- **Weight:** 3.81/5

## Mechanics

- Action Retrieval
- End Game Bonuses
- Follow
- Income
- Network and Route Building
- Solo / Solitaire Game
- Tech Trees / Tech Tracks
- Variable Phase Order
- Worker Placement with Different Worker Types

## Categories

- Economic
- Industry / Manufacturing

## Rulebook

See `rulebooks/124-carnegie.pdf`

## Design Notes

Designer: Xavier Georges. Published by Quined Games / Pegasus Spiele (2022).

### Theme Integration

Carnegie is a thematic biography of Andrew Carnegie himself --- the Scottish
immigrant who became one of America's richest men through steel, railroads, and
ruthless vertical integration, then gave away the vast majority of his fortune through
philanthropy. The game traces this arc mechanically: players build industrial
Companies through four interconnected departments (Human Resources, Management,
Construction, and R&D), expand transportation networks across four regions of the
United States, and ultimately earn victory points through charitable donations that
convert economic success into lasting legacy. Carnegie's famous dictum, "The man
who dies rich, dies disgraced," is not merely flavor text; it is a scoring mechanic.
Donations are among the highest-scoring end-game opportunities, rewarding players
who invest in philanthropy alongside industry.

The Company board represents a player's business empire as a physical building
with departments arranged in a grid. Employees move through this building
orthogonally --- from the Lobby to departments, between departments --- creating a
spatial puzzle that models the internal logistics of a growing corporation. Employees
are not interchangeable workers; they must be positioned in specific departments to
activate specific abilities, trained through Human Resources movement, and managed
through the activation cost system that represents salary expenditure. The
distinction between active (standing) and inactive (lying down) employees models
the difference between trained specialists and workers in transition.

The map of the United States, divided into four regions (West, Midwest, East, South)
connected by transportation tracks, represents Carnegie's actual business geography.
Players advance along regional transportation tracks from Cart to Stagecoach to
Railroad, reflecting the historical progression of American transportation
infrastructure. Construction projects are built in specific cities --- Chicago,
Pittsburgh, New York, San Francisco --- and the connection bonuses between major
cities reward the same continental-scale network building that defined Carnegie's
railroad investments.

### Core Loop

The game takes place over 20 rounds. Each round consists of four steps:

1. SELECT TIMELINE ROW --- The first player chooses one of four Timeline rows
   (Human Resources, Management, Construction, or R&D) and places the Timeline
   marker to the right of that row's action marker. This selection determines which
   department type all players may use this round. The action marker in the row
   immediately below the chosen row is turned facedown, triggering its event. At
   the end of the round, turned-over markers are flipped face-up and advanced one
   space. If a row's marker has reached the end of its Timeline, selecting that row
   forces the marker in the row below to be turned over instead.

2. EVENTS --- The turned-over action marker triggers one of two possible events:
   a) TAKE INCOME --- If the Timeline space shows a Mission area, that region
      becomes active. Players may return employees from Missions in that region
      to their Company Lobby, earning transport income based on their
      transportation track position, plus income from previously built construction
      projects.
   b) MAKE A DONATION --- If the space shows a donation symbol, players may
      each make a donation by paying $5 (increasing by $5 for each subsequent
      donation) and placing a disk on the donation chart. Donations earn end-game
      VP based on various criteria (departments built, projects completed, active
      employees, etc.).

3. USE DEPARTMENTS --- Starting with the first player, each player may use any of
   their own departments matching the chosen action type. Each active (standing)
   employee in a matching department allows one use of that department's ability:
   a) Human Resources --- Calculate total movement points (3 per active HR
      employee), then move employees within the Company board orthogonally.
      Moving an active employee makes it inactive. Employees activate at round end.
   b) Management --- "Commerce and Finance" provides $3, a goods cube, or sends
      an employee on a Mission for $6 or 2 goods cubes. "Strategic Planning" lets
      players build new Departments for 1-2 goods cubes.
   c) Construction --- Send an employee to a Mission area, spend goods cubes, and
      place a construction disk on a city matching the project type. Projects in
      certain cities generate immediate transport income.
   d) R&D --- Earn study points (per active R&D employee) to advance project
      tabs (unlocking new construction projects and end-game VP) or advance
      transportation track disks in any region.

4. ACTIVATE EMPLOYEES AND END OF ROUND --- After all actions, players may pay the
   activation cost for inactive employees in departments (standing them up on
   Workstations). The first player advances the action marker one space on its
   Timeline, passes the Timeline marker and first-player status clockwise, and a
   new round begins.

After 20 rounds, final scoring tallies: immediate VP earned during the game, plus
active employees (1 VP each), departments built (2-3 VP each), project tab
advancement VP, major city connection bonuses (up to 36 VP), construction project
VP, and donation VP.

### Key Design Patterns

FOLLOW MECHANISM AS SHARED ACTION ECONOMY: Carnegie's most distinctive design
element is that the first player's Timeline row selection determines the action type
for all players --- everyone uses the same department type each round. This "follow"
mechanism creates a layered strategic problem. The first player must balance their
own needs against the impact on opponents: choosing Construction when you have
three active Construction employees is powerful, but if your opponents also have
strong Construction departments, you may be helping them more than yourself.
Sometimes the optimal play is choosing an action that is merely adequate for you
but useless for opponents. The Action Choice tiles (in 3-4 player games) offer a
one-time escape valve, allowing a player to use a different department type, but
their scarcity (one per game per player, worth 3 VP if unused) makes them a
agonizing resource to spend.

TIMELINE AS PREDICTIVE PLANNING: The four Timeline rows advance independently
as their action markers are selected and events trigger. Players can see upcoming
events several spaces ahead on each Timeline, allowing them to predict which
regions will become active for income recovery and when donation opportunities
will arise. This visible planning horizon rewards forward thinking: sending employees
on Missions to a specific region is only valuable if that region's income event
triggers before the game ends. The interaction between the first player's choice and
the cascading event trigger (the row below the chosen row fires its event) creates
a two-layer optimization problem --- you choose one action for its department
utility while simultaneously selecting a different event for its economic impact.

EMPLOYEE MANAGEMENT AS SPATIAL PUZZLE: The Company board is a physical grid
where employees must be moved orthogonally between departments and the Lobby.
Moving an active employee makes them inactive (lying down); activating them again
costs money at the end of the round. This creates a logistics puzzle within each
player's personal board: an employee in the wrong department is useless for this
round's action, but moving them costs future activation money and renders them
inactive until round's end. Building new departments adjacent to existing ones
reduces travel distance. The Human Resources action provides a specific number
of movement points, making the positioning of HR employees a meta-optimization ---
you need HR employees to efficiently move other employees, creating a bootstrap
problem in early game.

MISSION SYSTEM AS TEMPORAL INVESTMENT: Sending employees on Missions is how
players build construction projects and earn income, but employees on Missions are
unavailable for department work until a corresponding regional income event
triggers. This creates a temporal investment calculation: sending employees to
distant regions (far ahead on the Timeline) ties up your workforce for many rounds
but potentially yields large transport income if you have advanced that region's
transportation track. Sending employees to nearby regions (soon to trigger) provides
quick returns but may offer less income. The interplay between employee deployment
timing and Timeline advancement is Carnegie's deepest strategic layer.

TRANSPORTATION TRACKS AS INCOME MULTIPLIER: Each region has a transportation
track that players advance through study points (R&D action). Track position
directly multiplies the income earned when employees return from Missions in that
region --- Cart level yields $1 per employee, while Railroad level yields significantly
more. This creates a compound investment: R&D study points invested in
transportation infrastructure pay dividends every time an employee returns from
that region. Players who concentrate transportation development in one or two
regions create focused income engines, while players who spread development
broadly have flexibility but lower peak returns. The track also provides end-game
scoring bonuses for reaching Railroad level.

DONATION SYSTEM AS LEGACY SCORING: Donations cost escalating amounts ($5, $10,
$15...) and each donation disk is placed on the donation chart, earning VP based
on criteria tied to the player's entire game performance --- departments built,
projects completed, active employees, transportation level, and more. This means
donations are most valuable for players who have diversified their investments,
creating a tension between specialization (which maximizes operational efficiency)
and diversification (which maximizes donation VP). The thematic brilliance is that
Carnegie's actual philanthropy was enabled by his industrial success --- and in the
game, your donation VP is calculated from your industrial achievements.

NETWORK SCORING AS GEOGRAPHIC STRATEGY: End-game scoring awards up to 36 VP
for connecting major cities (New York, Chicago, New Orleans, San Francisco)
through continuous chains of construction disks, cross-referenced with the lowest
transportation level across all connected regions. This scoring mechanism rewards
players who build projects strategically across regions rather than clustering in
one area. A player who connects three major cities at Railroad level across all
regions scores dramatically more than a player with many projects in a single
region. The network scoring transforms individual construction decisions into a
continental-scale infrastructure strategy.

VARIABLE PHASE ORDER AS EMERGENT RHYTHM: Because the first player chooses
which Timeline row to activate each round, and rows advance at different rates
depending on how often they are chosen, the game's rhythm varies significantly
between sessions. In one game, R&D might be chosen frequently, creating a
research-heavy economy where transportation tracks advance quickly. In another,
Management dominance produces a goods-and-building focused game. The
cascading event system (where the row below the chosen row triggers) means that
popular actions accelerate their own events while neglected rows stagnate. Players
who recognize which rhythm the game is developing --- and position their Companies
accordingly --- gain significant advantage.

### What Makes It #124

Carnegie is a heavy Euro that earns its 3.81 weight through interlocking systems
rather than rule complexity. The follow mechanism ensures that every player engages
with every round, eliminating downtime while creating a shared-action economy
where the first player's choice ripples across the table. The employee management
spatial puzzle gives each player a private optimization challenge that evolves as
departments are built and employees cycle through Missions. The Timeline's visible
planning horizon rewards the kind of multi-round strategic thinking that defines
the best heavy games --- you are not reacting to what happens; you are positioning
for what you can see coming five rounds ahead. And the donation system, where
philanthropy converts industrial diversification into victory points, provides both a
thematic capstone to the Carnegie biography and a scoring mechanism that prevents
any single strategy from dominating. The result is a game about building an empire
and then giving it away --- mechanically enforcing the philosophy of the man whose
name it bears.
