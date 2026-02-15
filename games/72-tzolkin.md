# Tzolk'in: The Mayan Calendar

## Quick Stats

- **Players:** 2-4
- **Time:** 90 min
- **Weight:** 3.66/5

## Mechanics

- Worker Placement
- Gear Mechanism
- Resource Management
- Hand Management

## Categories

- Ancient
- Civilization
- Economic
- Farming

## Rulebook

See `rulebooks/72-tzolkin.pdf`

## Design Notes

Designer: Simone Luciani & Daniele Tascini. Published by Czech Games Edition (2012).

### Theme Integration

Tzolk'in draws its identity from the Mesoamerican Long Count calendar, and the
game's central gear mechanism is a physical embodiment of cyclical time. The Maya
conceived of time not as a linear progression but as interlocking cycles — days
within months within years within great epochs — each cycle a wheel turning within
a larger wheel. Luciani and Tascini translated this cosmology directly into
plastic and cardboard. The central gear, representing the Tzolk'in calendar wheel,
drives five smaller gears representing the cities of Palenque, Yaxchilan, Tikal,
Uxmal, and Chichen Itza. As the central gear advances one notch per round, all
five city gears rotate, carrying workers placed on them to progressively more
powerful action spaces. Time itself is the engine.

The Mayan theme extends beyond the gears into the game's resource economy and
scoring systems. Corn — the foundation of Mesoamerican civilization — serves as
the universal currency: it feeds workers, pays for placements, and lubricates
nearly every transaction. Wood, stone, and gold map to historical building
materials with escalating rarity. The three temples (representing Mayan religious
life) function as scoring tracks where players earn favor through offerings and
construction. Crystal skulls, mysterious artifacts associated with Mesoamerican
mythology, serve as a premium set-collection resource delivered to Chichen Itza
for massive temple advancement. Even the feeding requirement echoes the agricultural
pressures of a corn-dependent civilization — fail to feed your workers and the
gods punish you with victory point penalties.

The game's arc mirrors the rise of a Mayan city-state: early rounds involve
subsistence farming and resource gathering (Palenque for corn, Yaxchilan for wood),
middle rounds shift to construction and technological development (Tikal for
buildings and technology, Uxmal for trading), and late rounds focus on religious
devotion and monumental achievement (Chichen Itza for crystal skull offerings).
The theme is not merely decorative; it provides an intuitive logic for why certain
actions become more valuable over time and why the gear mechanism feels narratively
coherent rather than arbitrary.

### Core Loop

Each round follows a simple two-option structure, but the temporal dimension of the
gears adds extraordinary depth to this simplicity:

1. PLACE WORKERS OR RETRIEVE WORKERS — On your turn, you must do exactly one:
   a) PLACE one or more workers from your supply onto the lowest available spaces
      on any combination of gear wheels. Pay corn equal to the space number for
      each worker (space 0 is free, space 1 costs 1 corn, etc.). You may also pay
      extra corn to place on higher-numbered spaces for immediate access to better
      actions. Placing multiple workers in a single turn costs an additional corn
      surcharge for each worker beyond the first.
   b) RETRIEVE one or more workers from any gear wheels, executing the action
      corresponding to each worker's current position. Workers that have ridden
      the gear to higher-numbered spaces execute more powerful versions of that
      gear's action. You may retrieve any combination of workers across different
      gears.

2. ADVANCE THE CALENDAR — After all players have taken their turns, the starting
   player rotates the central gear one notch. All five city gears advance
   simultaneously, moving every placed worker one space forward.

3. FOOD DAY (every quarter) — At four points during the game (rounds marked on
   the calendar), each player must feed their workers: 2 corn per worker. Workers
   you cannot feed cost 3 victory points each. Food days create periodic resource
   pressure that punctuates the long-term planning.

4. END GAME — After the central gear completes one full rotation (26 rounds), the
   game ends. Final scoring adds temple position bonuses, monument bonuses, and
   remaining resource conversion.

### Key Design Patterns

TIME-AS-RESOURCE THROUGH ROTATING GEARS: The gear mechanism is not a gimmick — it
is a complete reimagining of how worker placement functions. In traditional worker
placement, you place a worker and immediately execute an action. In Tzolk'in, placing
a worker is an investment; the return comes later, and it grows the longer you wait.
A worker placed on space 0 of Yaxchilan gains 1 wood upon retrieval. But if left
for two rounds, that same worker rides the gear to space 2 and gains 1 stone and
1 corn. Wait four rounds and it reaches space 4 for 1 crystal skull.
The design insight is that time becomes a tangible, tradeable resource. Placing early
costs less corn but requires patience. Placing late costs more corn but delivers
immediate results. Every placement is a bet on how long you can afford to wait, and
the gear makes this temporal calculus physically visible on the board.

GEAR MECHANISM AS PHYSICAL TIMER: The central gear's rotation creates an absolute
clock that all players share. You cannot manipulate time — the gear advances one space
per round, always. But you can manipulate your relationship to time by choosing when
to place and when to retrieve. A worker left too long rides past the best action space
and falls off the gear entirely (forced retrieval). This creates urgency without
randomness. The timer is visible, predictable, and relentless. The design lesson is
that deterministic timers create richer strategic planning than random ones because
players can calculate exact outcomes and must live with their miscalculations.

CORN AS UNIVERSAL CURRENCY AND FOOD: Corn occupies a unique design space as
simultaneously the game's currency, its food source, and its most abundant resource.
You need corn to place workers (higher spaces cost more), to feed workers on food
days, to trade for other resources at Uxmal, and as a scoring tiebreaker. This
multi-use design creates constant tension: corn spent on ambitious placements is
corn unavailable for feeding. Corn hoarded for food security is corn not invested
in forward progress. The Palenque gear is the primary corn source, but dedicating
workers to corn farming means fewer workers pursuing technology, construction, or
temple advancement. The design pattern is that a single resource serving multiple
critical functions creates more interesting decisions than multiple specialized
resources, because every expenditure has visible opportunity costs across all uses.

TEMPLES AS SCORING TRACKS WITH THRESHOLD BONUSES: The three temples function as
parallel scoring tracks where players advance by making offerings, building
structures, or placing crystal skulls. Each temple has threshold bonuses — reach
a certain level and gain immediate rewards (resources, technology steps, or
victory points). At game end, your position on each temple determines a scoring
multiplier. The temple system creates a multi-axis competition where players must
decide how to distribute their religious devotion. Focusing on one temple maximizes
that temple's end-game bonus but forfeits bonuses on the others. Spreading
attention across all three ensures some return everywhere but dominance nowhere.
The design wisdom is that parallel scoring tracks with diminishing marginal returns
encourage diverse strategies and prevent single-axis optimization.

CRYSTAL SKULLS AS SET COLLECTION: Crystal skulls are the game's premium resource,
obtainable primarily through the Yaxchilan gear and certain technologies or buildings.
Delivering a skull to Chichen Itza advances you on one specific temple track
(each action space is dedicated to a particular god) and scores immediate
victory points, with higher spaces on the Chichen Itza gear yielding greater
rewards per skull. Skulls thus represent a convergence strategy — they advance everything
at once but require significant investment to obtain and deliver. The set-collection
aspect emerges because skulls have increasing marginal value as your temple
positions rise. The first skull advances you from low temple positions (small
bonuses). Later skulls push you past high-value thresholds. The design pattern is
that premium resources should reward long-term strategic commitment rather than
opportunistic acquisition.

FEEDING PRESSURE AS TEMPO CONSTRAINT: Food days occur at fixed, known intervals
on the calendar gear. Players can see exactly when the next food day arrives and
must plan their resource pipeline accordingly. Each worker in your supply or on a
gear requires 2 corn on food days. The penalty for underfeeding is steep: 3 victory
points per unfed worker. This creates a pulsing rhythm to the game — periods of
expansion (placing workers aggressively) followed by consolidation (gathering corn
to survive the next food day). Experienced players learn to time their retrievals
so that resource-generating workers come off the gears just before food days, creating
efficient chains of production and consumption. The design lesson is that periodic
mandatory costs create natural strategic rhythms and prevent unchecked expansion
strategies from dominating.

MONUMENT BUILDINGS AS END-GAME SCORING: Monuments are purchased from a shared
market and placed on your player board. Each monument specifies a unique end-game
scoring condition — points per technology level, per temple position, per remaining
resource type, or per building constructed. Monuments function as strategic
commitments: purchasing one early signals your intended path and shapes all
subsequent decisions. They also serve as catch-up mechanisms because the most
valuable monuments require specific combinations that no player can accidentally
achieve. The design insight is that variable end-game scoring conditions revealed
during setup create unique strategic landscapes for every game without requiring
complex scenario design.

PLACEMENT COST ESCALATION: The corn cost to place a worker on a gear scales with
the space number — placing on space 0 is free, but placing on space 4 or 5 costs
significant corn. This creates a natural trade-off between patience and immediacy.
Wealthy players can buy their way to high-value actions instantly, while corn-poor
players must place on low spaces and wait for the gears to carry them upward. The
escalating cost also interacts with the feeding system: corn spent on premium
placements is corn unavailable for food. This cost structure ensures that the gear
mechanism's temporal dimension remains relevant even for resource-rich players — you
can shortcut time, but the price increases steeply.

### What Makes It #72

Tzolk'in's gear mechanism is one of the most elegant physical innovations in
eurogame design. It transforms worker placement from a spatial competition (which
spaces are available?) into a temporal one (how long can I afford to wait?). The
interlocking gears make time visible, tangible, and shared — every player watches
the same clock advance and must calibrate their plans against its relentless
rotation. The resulting decision space is extraordinarily rich for a game with
only one binary choice per turn (place or retrieve), because the gears multiply
that simple decision across five locations, multiple time horizons, and the
ever-present pressure of feeding. It is a game where patience is a strategy,
timing is a skill, and the physical act of turning a gear makes abstract resource
management feel viscerally mechanical.
