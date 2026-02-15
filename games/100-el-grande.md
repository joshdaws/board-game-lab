# El Grande

## Quick Stats

- **Players:** 2-5
- **Time:** 60-120 min
- **Weight:** 3.06/5

## Mechanics

- Area Majority / Influence
- Auction / Bidding
- Action / Event
- Hand Management

## Categories

- Medieval
- Political
- Territory Building

## Rulebook

See `rulebooks/100-el-grande.pdf`

## Design Notes

Designer: Wolfgang Kramer & Richard Ulrich. Published by Hans im Gluck (1995).

### Theme Integration

El Grande is set in 15th-century Spain during the Reconquista's aftermath,
when powerful nobles (Grandes) competed for regional influence under a
centralizing monarchy. Players are Grandes deploying caballeros — loyal
retainers — across the nine regions of Spain to establish majority control.
The King piece, which moves between regions each round, represents the
crown's authority: you cannot deploy caballeros into the King's current
region, modeling the historical reality that royal presence suppressed
noble factionalism. The political theme is not decorative — it structures
the core interaction. You are not fighting battles; you are maneuvering
for political influence, bribing, positioning, and leveraging the crown's
movements for your advantage.

The game's map of Spain is divided into nine regions, each with its own
scoring values that change based on how many players contest them. This
models the variable strategic importance of different provinces: a region
with only your caballeros is secure but low-value, while a fiercely
contested region offers the highest rewards to the player who achieves
majority. Castile occupies the center and holds the Castillo — the
tower — representing the political intrigues of the royal court. The
Castillo is the game's most evocative thematic mechanism: you send
caballeros into it secretly, and when scoring occurs, you reveal them
and redistribute them to regions of your choice. It models backroom
dealing, court politics, and the hidden maneuvering that defined
medieval Spanish power dynamics.

The power card system reinforces the theme of limited political capital.
Each player has an identical hand of 13 power cards numbered 1-13.
Playing a higher card means acting first in a round but mobilizing fewer
caballeros from the Province (the general supply) to your Court (your
personal reserve). Playing a lower card means acting later but moving more
caballeros into your Court for future deployment. This tradeoff
models the historical tension between spending political capital to act
quickly versus conserving resources for sustained influence. Power cards
are not recovered once played, creating a 9-round arc of declining
resources — as the game progresses, your remaining options narrow, just
as a political campaign exhausts its reserves.

### Core Loop

The game plays over exactly 9 rounds, with scoring occurring after rounds
3, 6, and 9. Each round has two phases:

**Phase 1 — POWER CARD SELECTION (Sequential)**

1. Starting with the First Player and proceeding clockwise, each player
   plays one power card from their hand face up. Each card must have a
   different value from all cards already played this round. Power cards
   are numbered 1-13 (each player has an identical set of 13, used once
   each across the game).
2. The player who played the highest card acts first in Phase 2.
3. Based on your power card value, you move caballeros from the Province
   (general supply) to your Court (personal supply). Higher power cards
   grant fewer caballeros; cards 12 and 13 grant zero. This is the
   fundamental tradeoff: priority versus supply.

**Phase 2 — ACTION CARD SELECTION AND CABALLERO DEPLOYMENT (In Turn Order)**

In power card order (highest to lowest), each player:

1. Chooses one of five face-up action cards (one revealed from each of
   five stacks). Each card shows two things: a number of caballeros you
   may place (matching the stack number, 1-5) and a unique special
   action. You perform both actions in either order. You may choose not
   to perform the special action, but if you do, you must execute as
   much of it as possible.
2. Execute the action card's special effect. Effects include: moving the
   King, relocating opponents' caballeros, adding caballeros to the
   Castillo, triggering special scoring of specific regions, moving
   caballeros between regions, and placing or moving scoring tiles.
3. Deploy caballeros from your Court to regions on the board. You may
   ONLY place caballeros in regions neighboring the King's current
   region — never directly in the King's region itself. You may throw
   some or all of them into the Castillo instead.

**SCORING (After Rounds 3, 6, and 9)**

1. Reveal and redistribute Castillo caballeros: all caballeros secretly
   placed in the Castillo are revealed, the majority holder scores
   Castillo points, then each player moves their revealed caballeros to
   a single region of their choice (decided secretly before reveal).
2. Score each of the nine regions: the player with the most caballeros
   scores the region's first-place value, second most scores second-place
   value, third scores third place. Region values vary and are printed
   on the board.

**End Game**: After the third scoring (round 9), the player with the most
total points wins.

### Key Design Patterns

POWER CARD AUCTION AS TURN ORDER: The power card system is a masterpiece
of mechanism design that has influenced thirty years of games since. Each
player holds an identical hand of 13 cards numbered 1-13. Every round,
you play one card sequentially (each must differ from those already
played). Higher number means you act first but
receive fewer caballeros; lower number means more caballeros but later
action. Cards are never recovered — playing your 13 on round 1 means
you will never have that option again. This creates a 9-round metagame
of resource management layered on top of the tactical round-by-round
play. When do you spend your high cards? Early, to establish board
position? Late, to make a decisive scoring-round play? The power card
system is simultaneously an auction, a resource-management puzzle, and
a reading game (anticipating when opponents will play high versus low,
since cards are played sequentially and each must be unique). Its
elegance lies in the zero-sum nature: every card you play is
one you cannot play later, so every decision has permanent consequences.

THE CASTILLO AS HIDDEN DEPLOYMENT: The Castillo — a physical cardboard
tower at the center of the board — is the game's most innovative
mechanism. Players can place caballeros into the Castillo instead of
(or in addition to) deploying them to board regions. The Castillo is
opaque: nobody knows how many caballeros each player has inside until
a scoring round, when the tower is opened and all caballeros are
revealed. The majority holder scores bonus points, then each player
secretly selects a region and moves all their revealed caballeros there.
This creates a two-layered hidden information game. First, you must
guess how many caballeros opponents have committed to the Castillo to
assess whether contesting it is worthwhile. Second, the redistribution
phase means the Castillo is a staging area for surprise deployments —
you can dump caballeros into a contested region at the last moment,
swinging majorities. The Castillo rewards long-term planning and
misdirection, and it is the primary mechanism that prevents the game
from becoming a purely calculable optimization.

KING'S REGION AS TABOO ZONE: The King piece occupies one region at all
times. Nothing in the King's region may ever be changed — no caballeros,
Grandes, or scoring tiles may be placed in, moved to, or removed from
it. The King moves via specific action card effects, meaning his
position is partially controllable. This creates area denial as a core
strategic tool: moving the King into a region where an opponent has
majority locks that region completely. Moving the King out of a region
you want to contest opens it for deployment. The King is a
shared resource that players fight to control, and his movement is one
of the most contested action card effects. The no-go zone rule also
models the thematic concept of royal prerogative — the crown's presence
stabilizes a region, suppressing noble maneuvering — and it is the
primary mechanism that makes El Grande interactive rather than
solitaire.

THREE SCORING ROUNDS AT FIXED INTERVALS: Scoring occurs after rounds 3,
6, and 9 — predictably and immutably. This fixed schedule is a critical
design decision. Because players know exactly when scoring happens, they
can plan multi-round strategies aimed at specific scoring moments. The
rounds between scoring are maneuvering phases where positions shift
without immediate point consequences. This creates a rhythmic structure:
tension builds as scoring approaches, peaks during the scoring round
itself, then releases as a new cycle begins. The fixed schedule also
prevents the common area-control problem of runaway leaders — because
all positions are evaluated at the same moments, a player who falls
behind in one scoring cycle can pivot and compete in the next.

ACTION CARD SELECTION AS DEPLOYMENT-VS-EFFECT TRADEOFF: The five face-up
action cards represent the round's available special effects. Each card
comes from one of five stacks numbered 1-5, where the stack number
determines how many caballeros you may place. Stack 1 cards allow only
1 deployment; stack 5 cards allow 5. Each card also carries a unique
special action. The tradeoff is between deploying many caballeros (high
stack number) and choosing the specific special action you want, which
may only be available on a lower-numbered stack. A player who won turn
priority with a high power card gets first pick of the available action
cards. A player who played a low power card (gaining many caballeros
for their Court) may want a high-numbered action card to deploy as many
as possible. The two tradeoffs intersect: your power card decision
constrains your action card options because both affect your caballero
economy. This nested tradeoff structure produces rich strategic texture
from simple components.

REGIONAL MAJORITY SCORING WITH TIERED REWARDS: Each region scores points
for first, second, and third place. The values differ by region and are
visible on the board: important regions (like Castile) award more points
but attract more competition. This tiered scoring creates strategic
flexibility — sometimes securing second place in a hotly contested
region is more efficient than fighting for first. It also prevents the
zero-sum despair of winner-take-all scoring: even losing a region
provides some return on your investment. The tiered structure encourages
spreading influence across multiple regions rather than concentrating
in one, which in turn creates the fluid, shifting board state that
keeps the game dynamic across its nine rounds.

THE MOBILE KING AS AREA DENIAL: The King is not just a thematic
ornament; he is the game's primary interaction mechanism. Players jockey
to control the King's movement because his position determines which
region is completely locked (no changes of any kind). An experienced
player uses the King offensively — parking him in an opponent's
stronghold to freeze it before a scoring round — and defensively —
keeping him in their own majority region to protect it. Note that
players may only deploy caballeros to regions neighboring the King's
region, making his position doubly important for controlling where
new forces can arrive. The King creates a meta-
game of positioning that operates on top of the caballero deployment
game. Control the King, and you control the board's topology: which
regions are open, which are closed, and therefore where the game's
action concentrates. This single mechanism generates more player
interaction than many games achieve with complex combat systems.

THE GENRE-DEFINING AREA MAJORITY TEMPLATE: El Grande did not invent
area majority as a concept, but it codified the genre's essential
structure so definitively that virtually every area majority game
published since 1995 is a response to it. The template includes:
deploy units to regions, score regions by majority at intervals, and
manipulate the board state through special actions. What makes El
Grande's version definitive is the purity of its implementation — there
are no dice, no combat, no random events after setup. The game is pure
positional strategy modulated by hidden information (the Castillo) and
resource management (power cards). This purity makes it the benchmark
against which all area majority designs are measured, and its influence
extends far beyond its genre into any game where spatial control and
majority evaluation interact.

### What Makes It #100

El Grande is a 1995 design that remains mechanically modern because its
core systems are so precisely engineered that nothing can be removed
without collapse. The power card auction solves turn order. The action
card selection solves special powers. The King solves area denial. The
Castillo solves hidden information. The fixed scoring schedule solves
pacing. Each mechanism addresses exactly one design problem, and the
mechanisms interlock without redundancy. Three decades of area majority
games have added complexity, chrome, and thematic integration, but
none have found a more elegant solution to the fundamental problem of
the genre: how do you make positional control on a shared map
interesting for 60-120 minutes? Kramer and Ulrich answered that
question in 1995, and the answer still holds.
