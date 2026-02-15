# The 7th Continent

## Quick Stats

- **Players:** 1-4
- **Time:** 5-1000 min
- **Weight:** 2.90/5

## Mechanics

- Area Movement
- Cooperative Game
- Hand Management
- Map Addition
- Modular Board
- Narrative Choice / Paragraph

## Categories

- Adventure
- Card Game
- Exploration
- Science Fiction

## Rulebook

See `rulebooks/162-the-7th-continent.pdf`

## Design Notes

Designers: Ludovic Roudy, Bruno Sautter. Published by Serious Poulp (2017).

### Theme Integration

The 7th Continent drops players onto a mysterious, uncharted landmass where
they must lift ancient curses by exploring a vast wilderness, crafting tools,
hunting for food, and solving environmental puzzles. The theme is not layered
on top of a mechanical framework — it IS the framework. Every card in the
game's 1,000+ card deck represents a specific piece of the continent: a
terrain feature, an encounter, a discovery, a consequence. When players move
to a new area, they physically build the map by placing terrain cards on the
table, creating a sprawling landscape that grows outward from the starting
point. The continent does not exist as a predetermined board; it materializes
through exploration, which means the experience of discovery is not simulated
but literal. You do not read about finding a cave — you flip a card and a
cave appears.

The survival theme drives the game's central tension through the Action Deck,
a shared draw pile that represents the party's collective stamina, knowledge,
and will to continue. Every action in the game — moving, crafting, fighting,
investigating — costs cards drawn from this deck. When the Action Deck is
exhausted, the party dies. This single resource creates an omnipresent survival
pressure that permeates every decision. Should you investigate that mysterious
ruin or conserve energy and press forward? Should you craft a fishing rod
(investing cards now to generate food later) or eat the berries you found
(immediate but finite sustenance)? The Action Deck transforms a choose-your-
own-adventure narrative into a genuine survival simulation where resource
management determines whether you live to see the next discovery.

The curse system ties theme and structure together elegantly. Each playthrough
focuses on lifting a specific curse — a supernatural affliction acquired
during a previous expedition. Curses function as macro-objectives that guide
exploration without constraining it: you know you need to find certain clues
and locations, but the path to them is entirely open. The curses also provide
narrative context for the game's save system, where players can pack up their
current game state (recording card positions and deck contents) and resume
later. A single curse can take 10-20 hours to lift, and the save system means
that play sessions can range from 30 minutes to an entire weekend. The game
adapts to its players' schedules rather than demanding a fixed time commitment.

### Core Loop

The 7th Continent plays as a continuous exploration experience with no discrete
rounds or turns. Players take actions cooperatively, deciding together who acts
and when:

1. MOVEMENT — The active player moves their figure to an adjacent terrain card,
   or to a new unexplored area. Moving to an unexplored area triggers map
   building: the player draws the terrain card indicated by a numbered flag on
   the current card's edge and places it adjacent to the existing landscape.
   Some terrain cards have fog tokens covering portions, requiring further
   exploration to reveal.

2. ACTION RESOLUTION — When a player takes an action (indicated by icons on
   terrain cards, item cards, or event cards), they draw a number of cards
   from the Action Deck equal to the action's difficulty. Each drawn card
   shows 0-3 success stars on its back. The player totals the stars and adds
   any bonuses from equipped items or character abilities. If the total meets
   or exceeds the success threshold, the action succeeds; if not, it fails.
   All drawn cards go to the discard pile regardless of outcome.

3. CRAFTING AND INVENTORY — Terrain cards and event cards may provide resources
   (represented by small card icons). Players can combine resource cards to
   craft items — tools, weapons, shelters, food — by matching the recipe on
   the item's card. Crafted items provide ongoing bonuses: a torch adds stars
   to exploration actions, a spear adds stars to hunting, a fire allows
   cooking food to recover Action Deck cards. Inventory management is handled
   through a spatial card-stacking system where items are physically tucked
   under the character card.

4. SURVIVAL MANAGEMENT — The Action Deck is the party's lifeline. It depletes
   through actions, events, and forced draws. It recovers through eating food,
   resting at shelters, and certain discoveries. Players must constantly
   balance exploration (which costs cards) against sustainability (which
   recovers cards). If the Action Deck is exhausted and players need to draw,
   the party dies and must restart the curse from the beginning — or from a
   saved checkpoint.

5. NARRATIVE ENCOUNTERS — Numbered cards throughout the continent trigger
   narrative events: environmental puzzles, creature encounters, NPC
   interactions, and curse-related discoveries. These events present choices
   (often hidden behind card numbers that players must look up) and branch
   into different outcomes depending on player decisions, equipped items,
   and action successes. The narrative is distributed across hundreds of
   cards, creating a non-linear story that unfolds differently each
   playthrough.

6. SAVE AND RESUME — At any point, players can save their game state by
   recording the positions of terrain cards, the contents of their inventory,
   the state of the Action Deck, and the revealed/unrevealed status of
   fog tokens. The game includes a journal system for logging this state.
   Players can resume later, reconstructing the continent from their saved
   data.

### Key Design Patterns

ACTION DECK AS UNIFIED HEALTH/STAMINA/TIMER: The Action Deck is the game's
most brilliant mechanical innovation. It serves simultaneously as the
randomizer for action resolution (cards have success stars on their backs),
the party's health pool (exhaustion means death), and the session timer
(you can only explore until the deck runs out). Collapsing three separate
systems into a single deck eliminates bookkeeping and creates an intuitive
resource pressure: every card drawn is progress toward solving the curse AND
progress toward death. This dual function means players feel the cost of every
action viscerally — not as an abstract number on a track but as a visibly
shrinking pile of cards. The Action Deck creates what survival designers call
"meaningful scarcity" without requiring hunger meters, health tracks, or
status tokens.

MAP ADDITION AS DISCOVERY ENGINE: The continent is not pre-built; it is
assembled card by card as players explore. Each terrain card has numbered
flags on its edges indicating which card to draw when moving in that
direction. This system means the map is technically deterministic (the same
starting card always connects to the same adjacent cards) but experientially
surprising, because players do not know what lies beyond each edge until they
explore it. The physical act of placing a new terrain card and seeing it
connect to the existing landscape creates a powerful sense of discovery that
no pre-printed board can replicate. The system also enables emergent spatial
puzzles: players must sometimes navigate back through previously explored
territory to reach a newly discovered area from a different angle, creating
a mental map challenge that grows with the continent.

CARD-STACKING INVENTORY AS SPATIAL MANAGEMENT: Items are represented by cards
tucked under the character card, with only their bonus icons visible. This
spatial inventory system limits what players can carry (only so many cards
fit) and makes equipment visible at a glance. Crafting new items means
physically rearranging cards, and breaking down items means removing them
from the stack. The system is tactile and immediate — no tracking sheets, no
token management, no separate inventory boards. It also creates interesting
decisions about item obsolescence: a basic knife provides +1 to hunting, but
the improved spear provides +2. Keeping both wastes inventory space;
discarding the knife means losing a backup if the spear breaks. The physical
card-stacking system makes these trade-offs visible and tangible.

CURSE STRUCTURE AS MACRO-OBJECTIVE: Each curse provides a long-arc goal that
guides exploration without constraining it. The curse tells players what they
need to accomplish (find three ancient relics, decode a celestial map,
reach the heart of the continent) but not how to get there. Players must
explore, gather clues, and piece together a path through trial and error.
This open-ended objective structure means the continent feels genuinely
explorable rather than railroaded. Different groups playing the same curse
will take different paths, discover locations in different orders, and craft
different strategies for survival. The curses also provide thematic coherence
to what could otherwise be an aimless wander — they are the narrative spine
that gives exploration purpose.

SAVE SYSTEM AS ACCESSIBILITY INNOVATION: A single curse can take 10-20 hours
to lift, but the game's save system means sessions can be as short or long
as players want. The journal system records game state in enough detail to
reconstruct the continent and resume play later. This is a radical departure
from the campaign game model where sessions are fixed-length and sequential.
The 7th Continent treats play time as elastic, accommodating everything from
a quick 30-minute exploration session to a marathon weekend. The save system
also reduces the sting of death: restarting a curse means replaying content,
but the knowledge of what lies where persists in the players' memories,
making subsequent attempts faster and more strategic.

COOPERATIVE WITHOUT QUARTERBACKING: The game's distributed action system,
where any player can take an action on their turn and the party collectively
manages the Action Deck, creates natural cooperation without enabling alpha-
player domination. Each character has unique abilities that make them better
suited for certain actions, so the party naturally distributes responsibilities:
the character with hunting bonuses leads combat, the character with crafting
bonuses builds tools. The Action Deck's shared nature means every player's
actions affect everyone's survival, creating genuine interdependence. But
because the continent is physically spread across the table and players can
be in different locations, the game resists the tendency of cooperative games
to centralize decision-making around the most experienced player.

ENVIRONMENTAL STORYTELLING THROUGH CARD DESIGN: The 7th Continent tells its
story not through rulebook text or narrator apps but through the cards
themselves. Terrain cards feature detailed artwork that hints at nearby
discoveries. Item cards show how components fit together. Event cards use
numbered cross-references that create branching narratives without requiring
a separate storybook. The story is embedded in the physical components,
which means discovering the narrative is inseparable from exploring the
continent. This environmental storytelling approach — borrowed from video
game design — creates a sense of immersion that traditional narrative games,
with their read-aloud paragraphs and flavor text, rarely achieve.

### What Makes It #162

The 7th Continent pioneered the "exploration board game" genre that later
games like Tainted Grail and ISS Vanguard would follow. Its core insight —
that a deck of 1,000+ cards can simulate an open world better than any
pre-printed board — created a new design space for tabletop adventure games.
The Action Deck's triple function as randomizer, health system, and timer is
an elegant mechanical compression that makes survival feel urgent without
being fiddly. At 2.90 weight, the game is mechanically accessible but
experientially deep: the rules are simple, but the continent is vast, and
the choices are genuinely consequential. What keeps it at this ranking is the
sense of wonder it generates — the feeling, rare in board games, of not
knowing what lies beyond the next card, and of building the world with your
own hands as you discover it.
