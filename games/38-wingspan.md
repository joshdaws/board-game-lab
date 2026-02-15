# Wingspan

## Quick Stats

- **Players:** 1-5
- **Time:** 40-70 min
- **Weight:** 2.48/5

## Mechanics

- Action Queue
- Dice Rolling
- End Game Bonuses
- Hand Management
- Once-Per-Game Abilities
- Open Drafting
- Set Collection
- Solo / Solitaire Game

## Categories

- Animals
- Card Game
- Educational

## Rulebook

See `rulebooks/38-wingspan.pdf`

## Design Notes

Designer: Elizabeth Hargrave. Published by Stonemaier Games (2019). Kennerspiel
des Jahres winner 2019. Art by Natalia Rojas and Ana Maria Martinez Jaramillo.

### Theme Integration

Wingspan is ornithology made playable. Players are bird enthusiasts attracting
species to their wildlife preserves across three distinct habitats. The theme is
not decorative — it is the game's defining structural choice. All 170 unique bird
cards represent real species with accurate scientific data: habitat preferences,
diet, clutch size (egg capacity), and wingspan measurements. A Peregrine Falcon
is a predator that tucks cards (representing hunted prey) beneath it. A Brown
Pelican lives in the wetland and has a fishing power. A Common Raven is an
omnivore that thrives across habitats. The mechanical identity of each card flows
from its biological identity, meaning experienced birders can often predict what
a card does before reading it. This fidelity to source material is not incidental
— Hargrave designed the game explicitly because she wanted a nature-themed game
in a market dominated by medieval trading and conquest fantasies. The commercial
success of Wingspan (over a million copies sold) proved that thematic novelty is
a market advantage, not a liability, fundamentally reshaping what publishers
consider viable subject matter.

The three habitats — Forest, Grassland, Wetland — map to the game's three core
resources: food, eggs, and cards. This is both thematically logical (forests
provide forage, grasslands support nesting, wetlands attract migratory species)
and mechanically clean (each habitat is a single engine track). The birdfeeder
dice tower, a custom component that tumbles dice to generate food supply,
represents the unpredictability of foraging. Even the decreasing action count
across rounds (8, 7, 6, 5) evokes a seasonal rhythm — players have less time
as the game progresses, mirroring the urgency of preparing a habitat before
winter.

### Core Loop

The game spans four rounds. Each round, players take turns performing one action
until all action cubes are spent. Available actions decrease per round: 8 in
round 1, 7 in round 2, 6 in round 3, 5 in round 4 (26 total actions per game).
Each action is one of two types:

1. PLAY A BIRD — Pay the bird's food cost (from your personal supply, originally
   gained from the birdfeeder dice). Pay an egg cost if the habitat row already
   contains birds (0 eggs for column 1, 1 egg for columns 2-3, 2 eggs for
   columns 4-5). Place the bird in the leftmost open space of its valid
   habitat row. Resolve any "when played" (white) power immediately. The bird
   is now permanently part of that habitat's engine.

2. ACTIVATE A HABITAT ROW — Place your action cube on the leftmost exposed
   action space in the chosen row. Gain the base benefit of that habitat:
   - Forest: gain food from the birdfeeder dice
   - Grassland: lay eggs on birds in your preserve
   - Wetland: draw bird cards from the face-up display or deck
   Then move the action cube leftward, resolving each bird's "when activated"
   (brown) power from right to left. More birds in the row means more
   activations per action.

Between-turn (pink/teal) powers on opponents' birds may trigger during other
players' actions, providing passive benefits and maintaining engagement during
downtime.

At the end of each round, players score an end-of-round goal (competitive
majority scoring across four different objectives per game). After four rounds,
final scoring tallies: bird point values, bonus card objectives, end-of-round
goals, eggs (1 VP each), tucked cards (1 VP each), and cached food on certain
birds.

### Key Design Patterns

ENGINE-BUILDING THROUGH SPATIAL COMMITMENT: Wingspan's central strategic tension
is that placing a bird strengthens a habitat's engine but consumes one of your
limited actions. A bird in the Forest row means every future "gain food" action
triggers that bird's power — but playing it cost you an action that could have
been spent activating an existing engine. The engine compounds: a row with five
birds generates five activations from a single action, but it took five separate
actions to build that row. The decreasing action count across rounds means
engine-building must happen early (when actions are plentiful but the engine is
weak) to pay off later (when actions are scarce but each one is powerful). This
creates a natural arc from investment to exploitation without any explicit phase
structure — the round timer handles pacing organically.

RESOURCE TRINITY WITH CIRCULAR DEPENDENCIES: The three resources — food, eggs,
and cards — form a closed dependency loop. Food is spent to play birds. Eggs are
spent to play birds into occupied rows and score end-game points. Cards are the
birds themselves. Each resource is generated by its own habitat row, so investing
in one resource's engine necessarily means underinvesting in the others. A player
who builds a deep Forest engine generates abundant food but must still spend
actions in Grassland for eggs and Wetland for cards. The egg economy is
particularly elegant: eggs are both a cost (to place birds in later columns) and
a VP source (1 point each), so every egg laid is simultaneously an investment
and a scoring opportunity. This circularity prevents any single strategy from
being self-sufficient.

THE BIRDFEEDER AS SHARED RANDOMNESS: The birdfeeder dice tower contains five
custom dice showing food types (invertebrates, seeds, fish, fruit, rodents, and
a wild invertebrate/seed face). When a player takes food, they choose from the
currently visible dice faces. When only one food type remains (or all dice show
the same face), a player may reroll all dice. This creates a shared, partially
controllable randomness pool. Taking the last fish might leave your opponent with
only seeds when they need invertebrates. Deliberately leaving diverse dice faces
prevents opponents from triggering a reroll that might produce something they
need. The birdfeeder introduces lightweight player interaction into an otherwise
parallel game without any direct aggression — you compete for resources through
opportunity cost rather than blocking.

CARD POWERS AS MODULAR ENGINE COMPONENTS: Bird powers come in four activation
types, each serving a different strategic role:
- Brown ("when activated"): Repeatable effects that fire every time you activate
  their habitat row. These are the core engine pieces — a brown-powered bird in
  a row you activate frequently becomes increasingly valuable over time.
- White ("when played"): One-time effects that provide immediate value. These
  front-load benefit, helping bridge the early-game resource gap.
- Pink/Teal ("between turns"): Trigger during other players' actions. These
  scale with player count and reward paying attention to opponents' choices.
  They also reduce downtime by giving you something to do on others' turns.
- Once-per-game: Powerful effects with a single trigger, typically representing
  exceptional abilities.
This taxonomy means birds are not interchangeable — a brown bird in a row you
rarely activate is wasted, while a pink bird in a two-player game triggers less
often than in a five-player game. Card evaluation is context-dependent, not
absolute.

TUCKING AND CACHING AS EMERGENT SCORING: Several bird powers allow tucking cards
from the deck face-down under the bird (1 VP each) or caching food tokens on the
bird (1 VP each). These scoring mechanisms are notable because they convert
engine actions directly into points without requiring additional steps. A
predator bird that tucks a card every activation is both running an engine and
scoring simultaneously. This collapses the typical engine-builder distinction
between "building" and "scoring" phases — a well-constructed engine scores
points as a byproduct of its operation.

DECREASING ACTIONS AS IMPLICIT TIMER: The 8-7-6-5 action structure across four
rounds is a masterful pacing device. It creates urgency without an explicit
countdown, teaches new players that early rounds are for building (more actions
available, engines not yet online), and ensures the game accelerates toward its
conclusion as engines become more powerful. The tension between "I have fewer
actions" and "each action does more" is the game's emotional arc. In round 1,
individual actions feel weak but plentiful. By round 4, each action fires a
chain of five bird powers but you only have five actions total. This compression
prevents engine-builders from spiraling into the common genre problem of
anticlimactic late-game repetition.

BONUS CARDS AS DRAFT DIRECTION: Each player begins with a secret bonus card
(chosen from two) that provides end-game scoring for a specific collection
criterion — birds with certain nest types, food preferences, habitats, or
taxonomic groups. These function as soft strategic direction rather than rigid
mandates. A bonus card rewarding "birds that eat fish" nudges you toward
Wetland birds and fish-producing powers but doesn't lock you in. The bonus card
draft at game start provides asymmetric starting conditions without asymmetric
player powers, giving each player a private optimization target that shapes
card evaluation throughout the game.

END-OF-ROUND GOALS AS COMPETITIVE PRESSURE: Each round ends with a scoring
check against a public objective (e.g., most eggs in a specific habitat, most
birds in a habitat, most food cached). These goals are drawn from a double-sided
board offering either competitive majority scoring (green side, sharper
differentiation) or personal achievement thresholds (blue side, more forgiving).
The goals inject interaction into a largely parallel game by forcing players to
weigh engine efficiency against competitive positioning. Spending an action to
lay extra eggs before the round ends might win the majority but costs a precious
engine-building action.

ACCESSIBILITY WITHOUT SACRIFICING DEPTH: At weight 2.48, Wingspan sits in
gateway-plus territory — accessible enough for casual players but strategically
rich enough for enthusiasts. This is achieved through several deliberate design
choices: a single action type per turn (play a bird or activate a row), no
take-that mechanics, thematic intuition that aids learning (birds eat food and
lay eggs), and visual design that communicates game state clearly. The depth
emerges from combinatorial complexity (170 unique cards, each changing the
engine's behavior) and optimization pressure (26 total actions to maximize
points) rather than from mechanical complexity. The rules are simple; the
decisions are hard.

### What Makes It #38

Wingspan's achievement is proving that engine-building — a genre historically
associated with industrial production and economic abstraction — works
beautifully with an inviting, non-confrontational theme. The bird cards are
genuine teaching tools; players routinely learn ornithological facts through
gameplay. But the design accomplishment runs deeper than theme. The three-habitat
engine structure creates three parallel optimization tracks that must be balanced
against each other. The decreasing action count provides natural pacing that
rewards early investment and prevents late-game stalling. The birdfeeder dice
tower introduces shared-resource tension without direct conflict. And the
170-card deck ensures that no two games present the same optimization puzzle —
you must build the best engine from the birds available, not execute a
pre-planned strategy. Wingspan demonstrated that a game can be simultaneously
accessible, strategically meaningful, aesthetically beautiful, and commercially
dominant — a combination the industry had largely assumed required compromise.
Its Kennerspiel des Jahres win and million-plus sales changed publisher
assumptions about what themes, designers, and audiences the hobby could support.
