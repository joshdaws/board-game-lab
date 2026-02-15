# Kanban EV

## Quick Stats

- **Players:** 1-4
- **Time:** 60-180 min
- **Weight:** 4.30/5

## Mechanics

- Action Points
- Hand Management
- Variable Phase Order
- Worker Placement

## Categories

- Economic
- Industry / Manufacturing

## Rulebook

See `rulebooks/46-kanban-ev.pdf`

## Design Notes

Designer: Vital Lacerda. Published by Eagle-Gryphon Games (2020).

### Theme Integration

Kanban EV simulates an electric vehicle factory with such fidelity that the game
is essentially a management training exercise disguised as a Euro. The title
itself references the lean manufacturing methodology invented at Toyota — a
pull-based production system where work flows through stations only when
downstream demand signals it. Lacerda does not merely borrow the factory setting
for flavor; he reconstructs the entire production pipeline as interlocking game
systems. Car designs are drafted in the Design department, raw components are
sourced from Logistics, parts are installed on the Assembly line, completed
vehicles roll onto the Test Track for R&D evaluation, and finally cars are
claimed into personal garages for scoring. Every department corresponds to a
real stage of automotive manufacturing, and the spatial layout of the board —
departments arrayed vertically with a central walkway of worker placement
slots — evokes the floor plan of an actual factory.

The thematic masterstroke is Sandra, the factory manager. She is not a player
but an autonomous presence who patrols the departments, blocks workstations,
and periodically calls meetings to evaluate employee performance. Sandra
transforms the game from an optimization puzzle into a workplace drama. You are
not a detached engine-builder; you are a middle manager navigating office
politics, trying to impress the boss while keeping your training certifications
current and your production metrics visible. The dual timers — the work week
clock and the factory production cycle — create the sensation of real
institutional time pressure, where deadlines arrive whether or not you are
ready for them. The factory theme is not decorative scaffolding around abstract
mechanics; the mechanics are the factory, and understanding one requires
understanding the other.

### Core Loop

Each round follows a two-phase structure that repeats until game-end conditions
are triggered:

1. DEPARTMENT SELECTION — In turn order, each player places their worker on one
   of two workstation slots in one of the five departments (Design, Logistics,
   Assembly, R&D, or Administration). Each department offers two slots: one
   grants priority but fewer shifts (action points), while the other acts later
   with more shifts. Sandra also occupies a workstation, blocking it for that
   round. Players cannot return to the same department they occupied on their
   previous turn. This constraint, combined with Sandra's blocking, forces
   constant adaptation.

2. WORKING PHASE — Players execute actions in their chosen department, spending
   shifts to perform department-specific tasks. Available actions vary by
   department:
   a) DESIGN — Acquire design tiles showing car colors and potential part
      upgrades. Tile position on the display determines bonus banked shifts or
      book tokens (free training actions).
   b) LOGISTICS — Play Kanban cards to stock warehouses and collect car parts.
      Certified players gain access to parts vouchers (wild resources).
   c) ASSEMBLY — Spend collected parts to advance car models along the assembly
      line conveyor. Completed cars roll onto the Test Track, earning speech
      bubble tokens and victory points.
   d) R&D — Claim cars from the Test Track using matching design tiles, or
      spend designs and parts to create upgraded designs worth additional VP.
      Cars are placed into personal garages.
   e) ADMINISTRATION — Perform a reduced-efficiency action from any other
      department, acquire Speed Chargers for persistent abilities, or advance
      training.
   In any department, players may also spend shifts to advance on that
   department's training track instead of (or in addition to) performing the
   primary action.

3. SANDRA EVALUATION — After all players have worked, Sandra moves to the first
   empty workstation in a department she was not in previously, advancing from
   the top of the board toward Administration. She evaluates all players on the
   training track of the department she enters, penalizing whoever is in last
   place. When Sandra reaches Administration, she triggers End-of-Week scoring,
   awarding points for cars in garages and their upgrades.

4. MEETINGS AND GAME END — When the Pace Car (advancing each time a car is
   claimed from the Test Track) crosses a striped threshold, a Meeting is
   triggered. Meetings are major scoring events where players place speech
   bubble tokens against four performance goal topics, earning VP multiplied by
   goal values. The game ends after a combination of End-of-Week scorings and
   Meetings has been completed (typically 2-3 of each).

The fundamental rhythm is: select a department under blocking pressure, spend
shifts to advance one stage of the production pipeline, manage Sandra's
evaluation threat, and accumulate scoring tokens for periodic meetings. Every
turn is a negotiation between short-term production needs and long-term
positioning for the next scoring event.

### Key Design Patterns

SANDRA AS AUTONOMOUS ADVERSARY: Sandra is Kanban EV's signature mechanism and
one of the most distinctive AI-driven elements in heavy Euro design. She is not
a random event generator; she follows deterministic movement rules that players
can predict and plan around. Sandra moves to the first empty workstation in a
department she did not previously occupy, blocking it from player use. She then
evaluates the training track of her current department, penalizing the player
in last place. This creates a dual threat: spatial (she removes a workstation
from the available pool) and evaluative (she punishes neglected training). The
genius is that Sandra's movement is player-influenced — by choosing which
workstations to occupy, players shape which slots Sandra will fill, and
therefore which department she will evaluate. Experienced players learn to
manipulate Sandra's path, steering her toward departments where opponents are
weakest while ensuring their own training is adequate wherever she might land.
The game even offers difficulty variants — "nice Sandra" rewards top performers
while "mean Sandra" more harshly penalizes laggards — allowing groups to
calibrate the punishment pressure.

DEPARTMENT SPECIALIZATION VERSUS BREADTH: The five departments create a
strategic tension between depth and coverage. Each department has a four-stage
training track; reaching stage three grants certification, which unlocks a
powerful bonus ability specific to that department (additional garage slots in
R&D, cutting-edge design access in Design, parts vouchers in Logistics, and so
on). Certification also advances a player's position on the meeting track,
which determines speech token placement order during scoring. The incentive to
specialize is strong — certified actions are dramatically more efficient than
uncertified ones. But Sandra's roaming evaluations punish neglect of any single
department, and the production pipeline demands engagement with multiple
departments to convert raw materials into scored cars. The result is a
strategic envelope where players must find the minimum viable training across
all departments while investing deeply in two or three where their engine
concentrates. The certification system elegantly models real workplace dynamics:
generalists avoid punishment but lack leverage, while specialists extract
outsized value from their domain but remain vulnerable to Sandra's audits
elsewhere.

MEETING AND SCORING RHYTHM: Kanban EV uses two independent timing mechanisms —
the work week clock (triggering End-of-Week scoring when Sandra reaches
Administration) and the factory production cycle (triggering Meetings when the
Pace Car crosses thresholds) — to create scoring events that players influence
but do not fully control. End-of-Week scoring rewards cars already in garages
with points per upgrade, incentivizing steady production. Meetings are more
dramatic: players place speech bubble tokens against four performance goal
topics that reward specific achievements (certain car colors, numbers of
certifications, upgraded designs). Crucially, the next meeting's topics are
partially visible in advance, allowing players to steer their production toward
upcoming criteria. The speech bubble tokens themselves are scarce — earned
through assembling cars and achieving training milestones — so entering a
meeting with insufficient tokens means watching opponents score while you
cannot. The dual-timer system means that the pace of scoring is emergent: a
game where players aggressively claim cars from the Test Track will trigger
Meetings rapidly, while one focused on assembly will cycle End-of-Week
scorings faster. Players who understand these rhythms can time their production
to peak at scoring moments.

CAR PIPELINE AS SEQUENTIAL DEPENDENCY CHAIN: The journey of a car through
Kanban EV's factory is a multi-stage pipeline that enforces sequential
engagement with different departments. A car begins as a design tile (acquired
in Design), requires parts (sourced from Logistics) to be installed on the
assembly line (in Assembly), rolls onto the Test Track when complete, and is
finally claimed into a player's garage (from R&D) using a matching design tile.
Each stage requires a different department visit and different resources,
meaning no single turn can complete the entire chain. This pipeline structure
creates temporal dependencies — you must have designs before you can claim cars,
you must have parts before you can assemble, and you must assemble before cars
reach the Test Track. The pipeline also creates competitive pressure at every
stage: design tiles in the display are visible to all, parts in the warehouse
are limited, assembly line positions are shared, and cars on the Test Track can
be claimed by anyone with a matching design. Opponents who hold the right
design tile can snatch a car you spent three turns assembling. The pipeline
transforms the game from parallel optimization into a supply chain management
problem where timing and sequencing across departments matter as much as
efficiency within any single one.

GOAL CARDS AS STRATEGIC COMPASS: Performance goals in Kanban EV — visible at
meetings and through factory goal cards — serve as the game's directive layer,
telling players what the factory values this particular game. Meeting goals
reward specific combinations of cars, certifications, and upgraded designs,
and they shift between meetings, preventing any single strategy from being
universally optimal. Factory goals relate to having specific numbers of cars in
garages, upgraded designs, or certifications, and achieving them earns seats
at the meeting table (which grant additional scoring opportunities). The goal
system solves a critical design problem in complex Euros: without clear
objectives, players can feel paralyzed by option space. By revealing what will
score at each meeting, the goals channel the enormous decision tree into
tractable planning problems. But because goals shift and opponents compete for
the same achievements, no plan survives contact with the meeting table intact.
The interplay between long-term engine building and short-term goal chasing is
where Kanban EV's strategic richness concentrates.

SHIFT ECONOMY AS COMPRESSION ENGINE: The shift (action point) system is
Kanban EV's primary scarcity mechanism. Players receive between one and four
shifts per turn depending on their workstation choice, and every meaningful
action — acquiring a design, collecting a part, advancing training, assembling
a car component — costs at least one shift. The workstation trade-off (fewer
shifts with priority versus more shifts with delayed action) creates a
fundamental tension between efficiency and timing. Banked shifts — earned from
certain design tile positions and Kanban card plays — provide a reserve that
carries between turns, rewarding players who invest in the shift economy early.
Book tokens offer free training shifts, decoupling training advancement from
the primary shift budget. The shift system ensures that every turn feels
compressed: you can never do everything you want, and the gap between what you
need and what you can afford is the space where strategic skill operates.
Lacerda uses this compression to guarantee that every department visit involves
genuine sacrifice — spending shifts on training means fewer shifts for
production, and vice versa.

ACTION SELECTION WITH BLOCKING AND MEMORY: The worker placement system in
Kanban EV is unusually constrained. Two workstation slots per department
(plus Sandra's occupation of a third) mean that at most two players can visit
any department per round, and the no-return rule prevents players from staying
in a department across consecutive turns. This creates a movement puzzle
layered on top of the production puzzle: you must plan not just what to do, but
where you can legally be, accounting for Sandra's predicted position, opponents'
likely choices, and your own forced departure from last turn's department.
Administration serves as a pressure valve — it allows access to any department's
actions at reduced efficiency — but using it means sacrificing the training
advancement and certification progress that come from being physically present
in a department. The blocking is not merely competitive; it is informational.
Watching which departments opponents choose reveals their strategic priorities,
and a player who reads these signals can position to block critical departments
at pivotal moments.

FACTORY FLOOR SIMULATION AS UNIFIED SYSTEM: Unlike many heavy Euros that layer
independent subsystems, Kanban EV achieves its complexity through a single
simulated environment — the factory — where every mechanism is a department,
every resource is a manufacturing input, and every scoring event is a
management review. The warehouse stocks parts, the assembly line builds cars,
the test track validates them, and meetings evaluate your performance as an
employee. Nothing in the game exists outside the factory metaphor. This unity
means that learning the game is learning the factory: once a player
understands the production pipeline, the scoring system, and Sandra's role,
the rules click into place as a coherent workplace rather than a collection of
disconnected mechanisms. Lacerda's achievement is making a 24-page rulebook
feel inevitable — complex, certainly, but never arbitrary, because every rule
maps to a comprehensible real-world process.

### What Makes It #46

Kanban EV represents Vital Lacerda's most complete realization of his
signature design philosophy: that a heavy Euro should function as a simulation
first and a game second, with every mechanism earning its place by mapping to
a real-world process within a unified thematic environment. Where many
designers build complexity by layering independent point-scoring tracks,
Lacerda builds it by modeling a single system — here, an electric vehicle
factory — with enough fidelity that strategic depth emerges from the
interactions between departments rather than from bolted-on scoring
abstractions. The five departments are not five mini-games; they are five
stages of a single production pipeline, and mastering Kanban EV means
understanding the pipeline as a whole.

Sandra elevates the design from excellent to distinctive. The autonomous boss
mechanic solves multiple problems simultaneously: she provides blocking without
requiring direct player conflict, she creates a persistent evaluative pressure
that prevents specialization from becoming a dominant strategy, and she gives
the game a narrative arc — the feeling of working under observation, of
scrambling to look competent before the next review. The dual-timer system
(work week and production cycle) creates a scoring rhythm that players
influence but cannot dictate, producing emergent pacing that varies between
sessions. Kanban EV demands a level of advance planning that few games match,
requiring players to think across departments, across scoring events, and
across Sandra's predictable-but-punishing patrol route — all while managing a
shift budget that never quite stretches far enough. It stands as one of the
strongest arguments in modern board game design that thematic coherence and
mechanical depth are not competing goals but reinforcing ones.
