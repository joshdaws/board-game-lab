# War Chest

## Quick Stats

- **Players:** 2-4
- **Time:** 30 min
- **Weight:** 2.32/5

## Mechanics

- Area Majority / Influence
- Deck Bag and Pool Building
- Delayed Purchase
- Grid Movement
- Hand Management
- Hexagon Grid

## Categories

- Abstract Strategy
- Medieval
- Wargame

## Rulebook

See `rulebooks/181-war-chest.pdf`

## Design Notes

Designers: Trevor Benjamin, David Thompson. Published by AEG (2018).

### Theme Integration

War Chest presents a medieval battlefield where players command armies of
distinct unit types -- swordsmen, archers, cavalry, knights, siege engines --
each with unique abilities that evoke their historical battlefield roles.
Archers strike at range. Cavalry move farther. Knights are resilient. The
medieval setting provides an intuitive vocabulary for the game's spatial
combat, but War Chest is fundamentally an abstract strategy game wearing a
thematic costume. The genius is that the costume fits well enough to aid
comprehension without pretending to simulate warfare. Players draft armies
before the game begins, choosing unit types from a shared pool. This draft
represents mustering forces -- selecting which troops to bring to the field --
and it is the game's first strategic decision, made before a single piece
is placed.

The bag-building mechanism maps thematically to the fog of war. Your army is
a cloth bag of unit coins, drawn randomly each round. You never know exactly
which units will be available on a given turn, mirroring the unpredictability
of battlefield communication and troop readiness. When a unit is deployed to
the board, its coin leaves your bag; when a unit is eliminated, its coin goes
to your discard pile rather than back into circulation. The bag is your army's
readiness state -- a physical representation of which troops are available,
committed, or recovering. This creates a tension that pure abstract games
lack: you must plan around probabilistic draws rather than perfect information,
and managing the composition of your bag becomes as important as managing the
board position.

The hexagonal grid battlefield is small -- just enough spaces to ensure that
territorial control requires both spatial planning and unit commitment. Control
points are scattered across the board, and the victory condition (controlling
a set number of points) ensures that the game is about territory, not
elimination. Units are not expendable resources to be thrown at the enemy;
they are limited, valuable pieces whose loss degrades your bag composition
and future options. The medieval framing supports this: these are trained
soldiers, not conscripts, and losing a knight hurts your army for the rest
of the battle.

### Core Loop

The game plays over a series of rounds until one player controls the required
number of control points (6 in a 2-player game, varies with player count).

1. DRAW PHASE -- Each player draws 3 unit coins from their bag. If the bag
   is empty, return all coins from the discard pile to the bag, shuffle, and
   draw. The drawn coins form your hand for this round.

2. ACTION PHASE -- Players alternate taking one action at a time until both
   players have used or passed on all coins. For each action, play one coin
   from your hand. Actions include:
   a. DEPLOY -- Place the coin on the board in your supply zone if no unit
      of that type is already on the board, or adjacent to an existing unit
      of that type.
   b. MOVE -- Move an existing unit of the matching type one hex (or more
      for cavalry-type units).
   c. CONTROL -- If a unit occupies an uncontrolled or enemy-controlled
      point, place a control marker. The unit must remain in place for
      a full action to claim control.
   d. ATTACK -- Remove an adjacent enemy unit (the attacked coin goes to
      the opponent's discard pile; the attacking coin goes to your discard).
   e. BOLSTER -- Place the coin face-down on the matching unit on the board,
      adding a "hit point." The unit must be attacked once more to remove it.
   f. RECRUIT -- Add a unit coin from the supply to your discard pile,
      expanding your bag composition (Delayed Purchase -- the coin is not
      immediately available).
   g. TACTIC -- Activate the unit type's special ability (each unit has a
      unique power: archers attack at range 2, cavalry move 2 hexes, the
      marshall can move any friendly unit, etc.).
   h. PASS -- Discard the coin face-down to take no action. The coin goes
      to your discard but reveals no information to the opponent.
   i. INITIATIVE -- Discard the coin face-down to claim the initiative
      marker, guaranteeing first action next round.

3. CLEANUP -- Once both players have used all coins, the round ends. Any
   coins played as actions go to the discard pile. Begin the next round
   with a fresh draw of 3 coins.

### Key Design Patterns

BAG BUILDING AS WARGAME ENGINE: War Chest's central innovation is applying
deck-building principles to a spatial control game via a physical bag rather
than a card deck. The bag introduces controlled randomness into an otherwise
abstract strategy framework. Unlike deck builders where the entire deck
cycles predictably, the bag's opacity means you cannot count cards with
certainty -- you know what is in your bag, but not what you will draw. This
probabilistic element prevents the paralysis of perfect-information abstract
games while rewarding players who manage their bag composition deliberately.
Recruiting new units thickens your bag (more variety but less predictability);
losing units to combat thins it (fewer options but higher concentration of
remaining types). Bag management is the meta-game layered atop the tactical
board game, and mastering both layers simultaneously is what separates
experienced players from novices.

COIN AS MULTI-USE RESOURCE: Every unit coin serves multiple possible
functions: it can deploy a new piece, move an existing piece, attack, bolster,
recruit, claim initiative, or activate a special ability. This multi-use
design compresses an enormous decision space into a simple physical action --
play one coin, choose one use. The tension is constant: using a coin to attack
means you cannot deploy or bolster with it; using it for initiative means
sacrificing its tactical value entirely. The face-down pass option adds
another dimension: you can hide information by discarding without acting, but
you lose an action to do so. The coin is simultaneously your action currency,
your information vector, and your army composition, and every play reveals
something about your priorities to your opponent.

DRAFT-BEFORE-PLAY AS ASYMMETRIC SETUP: Before the game begins, players
draft unit types from a shared pool. Each unit type has a unique special
ability, and players receive a set number of coins for each type they draft.
This pre-game draft creates asymmetric starting conditions within a symmetric
ruleset. The draft is not random -- it is a strategic decision informed by
knowledge of unit synergies and counter-strategies. Archers pair well with
units that can hold territory (letting archers attack from behind). Cavalry
pairs well with aggressive expansion. The draft ensures that no two games
have identical armies, providing replayability without requiring a large
card pool or scenario system. It also means that experienced players gain
advantage before the first coin is drawn, rewarding game knowledge at the
metagame level.

BOLSTER AS DEFENSIVE INVESTMENT: The bolster action places a coin on an
existing unit, effectively giving it an extra hit point. The bolstered unit
requires two attacks to eliminate rather than one. This is a defensive
investment with a real cost: the bolstering coin cannot be used for any
other action this round, and the invested coin is lost if the unit is
eventually eliminated. Bolstering creates a strategic calculus around
positional value -- bolstering a unit on a contested control point is often
worth more than deploying a new unit elsewhere, because holding a control
point is worth more than threatening one. The mechanic also introduces
information tension: a bolstered unit is visibly stronger, which may deter
attacks or redirect them to weaker targets, functioning as a spatial bluff.

INITIATIVE AS SACRIFICIAL RESOURCE: Claiming the initiative marker costs one
coin -- a full action from your three-coin hand. This is a steep price:
you sacrifice a third of your tactical options for the right to act first
next round. The initiative system prevents the common abstract-game problem
of second-player advantage (where reacting is always safer than acting) by
making first-move rights a contestable resource. Going first lets you seize
an uncontested control point, attack before the opponent can bolster, or
deploy to a critical hex before it is blocked. The sacrifice required ensures
that initiative is a tactical tool, not a default choice -- you claim it when
positional advantage is worth more than an additional tactical action, which
requires reading the board state accurately.

SPATIAL CONTROL WITH LIMITED ARMIES: The board is small relative to the
number of unit types, and each player's total coin count is modest. This
creates scarcity of presence: you cannot be everywhere at once, and
committing units to one sector of the board necessarily exposes another.
The control point placement forces players to spread their forces across
the map rather than concentrating into a single stack. This spatial scarcity
is what makes the tactical game compelling -- every deployment is a commitment,
every movement creates a vulnerability, and the opponent can read your
intentions from your board position as clearly as you can read theirs.

INFORMATION MANAGEMENT VIA FACE-DOWN PLAY: When you pass or claim initiative,
the coin is played face-down. Your opponent sees that you spent an action but
not which unit type you spent it on. This small informational asymmetry adds
a layer of deduction to an otherwise open-information game. If your opponent
sees you pass with a face-down coin, they must consider: was that a unit you
chose not to deploy, or your last copy of a key unit type? The face-down
mechanism transforms bag composition into hidden information, giving the game
a psychological dimension absent from pure abstracts like Chess or Go.

### What Makes It #181

War Chest succeeds by combining the strategic depth of abstract territory
control with the dynamic uncertainty of bag building, all compressed into
a 30-minute play time at an accessible 2.32 weight. The pre-game draft
creates asymmetric matchups without requiring asymmetric rules. The
multi-use coin system generates deep decisions from simple components.
The bag introduces just enough randomness to prevent analysis paralysis
without undermining strategic planning. War Chest occupies a rare design
niche: it is an abstract game that feels like a wargame, a bag builder
that feels like a tactical puzzle, and a 30-minute game that rewards the
kind of long-term positional thinking usually reserved for 2-hour experiences.
The physical pleasure of drawing coins from a cloth bag and slapping them
onto a hex grid is not incidental -- it gives the game a tactile immediacy
that cardboard and cards cannot match.
