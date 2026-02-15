# Undaunted: Normandy

## Quick Stats

- **Players:** 2
- **Time:** 45-60 min
- **Weight:** 2.26/5

## Mechanics

- Deck, Bag, and Pool Building
- Dice Rolling
- Hand Management
- Modular Board
- Open Drafting
- Scenario / Mission / Campaign Game

## Categories

- Wargame
- World War II

## Rulebook

See `rulebooks/180-undaunted-normandy.pdf`

## Design Notes

Designers: Trevor Benjamin, David Thompson. Published by Osprey Games (2019).

### Theme Integration

Undaunted: Normandy places two players in command of American and German
infantry squads during the Normandy campaign of 1944. The game is not a
strategic simulation of the broader war but a tactical portrayal of small-unit
combat: squads of riflemen, scouts, machine gunners, and snipers fighting over
specific objectives in specific terrain. Each scenario represents a particular
engagement --- an assault on a fortified village, a flanking maneuver through
bocage country, a desperate defense of a crossroads --- and the modular tile
system constructs a unique map for each mission. The theme is grounded in the
physical reality of infantry combat: soldiers move through terrain one tile at
a time, line of sight matters, and casualties are permanent. This is not an
abstract area-control game wearing a war skin; the mechanics model what
small-unit commanders actually think about: which soldiers to commit, when to
advance, when to take cover, and when to accept risk.

The deckbuilding mechanism carries remarkable thematic weight. Each card in your
deck represents a specific soldier or command function. When you play a Rifleman
card, you are ordering a specific rifleman squad to act. When that card is in
your discard pile waiting to be shuffled back, those soldiers are recovering,
regrouping, or simply out of communication. When a soldier takes a casualty,
their card is permanently removed from the deck, and the thinning of your deck
is not an optimization strategy but a representation of loss. A squad that has
taken heavy casualties cycles through its remaining cards faster but has fewer
options. A fresh, full-strength squad has more flexibility but less consistency.
The deck does not just track resources --- it models the fog of war, the limits
of command authority, and the attrition of combat with surprising emotional
resonance.

The fog of war is further expressed through the hand of four cards each player
draws per turn. You cannot use every unit every turn; you can only issue orders
to the soldiers whose cards happen to be in your hand. This forced limitation
models the communication chaos of battlefield command better than most dedicated
wargames manage with far more complex systems. A brilliant tactical plan is
worthless if the right cards are not in hand, and the most effective commanders
are those who build flexible plans around whatever hand they draw rather than
waiting for a perfect hand that may never come. The randomness is not
frustrating because it is thematically justified --- you are not unlucky, you
are experiencing the friction of war.

### Core Loop

Each scenario specifies a map layout (assembled from modular terrain tiles),
starting positions, objective conditions, and the deck composition for each
player. Players begin with a small starter deck and build it during play by
recruiting additional squad cards from their reserve.

1. DRAW PHASE --- Each player draws four cards from their deck. If the deck
   is empty, shuffle the discard pile to form a new deck, then continue
   drawing.

2. INITIATIVE --- Both players simultaneously select one card from their hand
   and reveal it. The card with the higher initiative value determines which
   player goes first this turn (ties favor the defender). The card used for
   initiative is spent --- it goes to the discard pile without being used for
   its action.

3. PLAY CARDS (alternating, starting with the initiative winner) --- Play
   cards from your remaining hand (3 cards after initiative) one at a time,
   resolving each before playing the next.
   a) PLATOON SERGEANT --- Bolster: Add a card from your supply to your deck.
      This is the primary deckbuilding action, representing calling up reserves
      or reinforcing a position
   b) SCOUT --- Recon: Place a fog-of-war tile from the supply onto the board,
      revealing unexplored terrain. Scouts can also move through tiles
   c) RIFLEMAN --- Move to an adjacent tile and/or attack an enemy unit on a
      tile the rifleman can see. Attacks are resolved by rolling a d10 against
      the target's defense value (determined by terrain); meeting or exceeding
      the defense scores a hit
   d) MACHINE GUNNER --- Cannot move, but attacks with a powerful suppression
      effect. Suppressed units add fog-of-war tokens to their controller's
      deck, representing confusion and command breakdown
   e) SNIPER --- Long-range attack that ignores some terrain defense bonuses.
      Snipers can target specific enemy card types
   f) SQUAD LEADER --- Inspire: Remove a fog-of-war card from your hand or
      discard pile, clearing the command confusion caused by suppression
   g) FOG OF WAR CARDS --- These cards have no useful action. They clog your
      hand and deck, representing the breakdown of communication and command
      coherence under enemy fire

4. CONTROL --- After all cards are played, check tile control. A tile is
   controlled by the player with the most units on it (ties favor the current
   controller). Control of objective tiles may trigger scenario victory
   conditions.

5. CLEANUP --- All played cards go to the discard pile. Check victory
   conditions: the scenario specifies objectives (control specific tiles,
   eliminate specific units, etc.). If neither player has won, begin a new
   turn.

### Key Design Patterns

DECKBUILDING AS COMMAND SIMULATION: The core innovation of Undaunted is using
deckbuilding mechanics to model military command and control. Each card
represents a specific unit, and having multiple copies of the same unit card
in your deck increases the probability of that unit appearing in your hand ---
which represents the reliability and readiness of that squad. Recruiting
additional copies of a unit card is not abstract deck improvement but a
concrete representation of reinforcing that position or improving communication
with that squad. The mapping of deckbuilding to command authority is so natural
that players quickly stop thinking in terms of cards and start thinking in terms
of soldiers, which is the hallmark of thematic integration that transcends its
mechanical substrate.

FOG OF WAR AS DECK POLLUTION: When a unit is suppressed by enemy fire, fog of
war cards are added to the target player's deck. These cards have no useful
action and occupy hand slots that could hold actionable unit cards. This is the
wargame equivalent of Dominion's victory point pollution, but with a thematic
justification that transforms a mechanical concept into a narrative one. A
player under heavy suppression draws hands full of useless fog cards,
experiencing the frustration of a commander who cannot reach their troops ---
and the mechanical experience of drawing dead cards perfectly mirrors the
narrative experience of losing battlefield control. Squad Leaders who can
remove fog cards become critically important not for their combat value but for
their ability to restore command coherence.

MODULAR BOARD AS SCENARIO ENGINE: Each of the game's twelve scenarios
constructs a unique map from a shared pool of terrain tiles. Hills provide
defense bonuses. Buildings are fortified positions. Roads allow faster
movement. The modular system means that each scenario presents a distinct
tactical puzzle: an assault across open ground plays nothing like a street
fight through a village, even though the same unit types and mechanics govern
both. The terrain tiles also determine line of sight, creating the spatial
reasoning that defines tactical wargaming. Players must think about cover,
firing lanes, and movement corridors --- concerns that emerge from tile
arrangement rather than being imposed by separate rules.

CASUALTY PERMANENCE AS EMOTIONAL STAKES: When a unit takes a hit, one of its
cards is permanently removed from the game, not recycled to the discard pile.
This permanence creates genuine emotional stakes in a way that hitpoint
systems never achieve. Losing your last Sniper card means your sniper is dead
for this scenario --- no respawns, no healing, no replacement. The deck
physically shrinks as casualties mount, and a badly depleted force cycles
through its remaining cards with desperate speed. This design creates the
wargame's most psychologically authentic moment: the realization that you
have committed your forces too aggressively and the losses cannot be undone.
It also creates asymmetric game states where one player's thick, healthy deck
overwhelms a depleted opponent through sheer card-draw reliability.

INITIATIVE AS SACRIFICE: The initiative system requires each player to spend
one of their four drawn cards to bid for first-player status. The card used for
initiative is discarded without being used for its action, meaning that going
first costs you 25% of your available actions. High-initiative cards tend to
belong to command units (Platoon Sergeants, Squad Leaders) rather than combat
units, creating a tension between using commanders for initiative and using
them for their powerful bolster and inspire abilities. The initiative sacrifice
is a brilliantly compact mechanism that simulates the resource cost of
command decisions --- committing attention to coordinating your forces means
less attention to executing operations.

SUPPRESSION AS AREA DENIAL: Machine gunners cannot move but provide a powerful
suppression attack that adds fog-of-war cards to the opponent's deck rather
than (or in addition to) causing casualties. This models the doctrinal reality
of suppressive fire: machine guns do not primarily kill; they pin enemies in
place by making movement lethal. In game terms, suppression degrades the
opponent's command efficiency without removing units from the board, creating a
longer-term attrition that is harder to notice but equally devastating. A player
under sustained suppression finds their hands increasingly clogged with fog
cards, reducing their effective actions per turn from three to two or even one.
The distinction between killing (removing cards permanently) and suppressing
(adding dead cards temporarily) is a design insight that captures military
tactics through card game mechanics.

SCENARIO DESIGN AS NARRATIVE ARC: The twelve scenarios progress through the
Normandy campaign, with each mission building on the tactical concepts
introduced in earlier ones. Early scenarios feature small forces on simple
maps, teaching basic movement and combat. Later scenarios introduce snipers,
machine gunners, and complex multi-objective missions. The campaign does not
carry persistent state --- each scenario is self-contained --- but the
escalating complexity creates a learning curve that doubles as a narrative
arc. Players experience the campaign as a journey from simple skirmishes to
complex combined-arms operations, which mirrors the historical progression of
the Normandy fighting from beach assaults to inland warfare.

### What Makes It #180

Undaunted: Normandy is the most successful fusion of eurogame mechanisms and
wargame themes in modern design. Benjamin and Thompson recognized that
deckbuilding --- typically associated with fantasy and science fiction --- maps
naturally onto military command and control, and they executed that insight
with discipline and clarity. The game delivers authentic tactical decision-making
in 45-60 minutes with rules that can be taught in ten minutes, a combination
that neither traditional wargames nor traditional eurogames typically achieve.
The fog-of-war mechanism transforms a familiar deckbuilding concept (deck
pollution) into a powerful thematic statement about the chaos of combat. The
modular scenario system provides twelve distinct tactical puzzles in a single
box. At 2.26 weight, Undaunted occupies a space that was essentially empty
before its publication: a two-player tactical game accessible enough for
eurogame players but thematically honest enough for wargame enthusiasts. It
proved that the gap between these audiences was a design problem, not an
audience problem, and that the right mechanisms could bridge it.
