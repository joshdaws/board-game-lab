# Arkham Horror: The Card Game

## Quick Stats

- **Players:** 1-4
- **Time:** 60-120 min
- **Weight:** 3.56/5

## Mechanics

- Action Points
- Area Movement
- Communication Limits
- Cooperative Game
- Deck Construction
- Events
- Hand Management
- Scenario / Mission / Campaign Game
- Variable Player Powers

## Categories

- Adventure
- Card Game
- Exploration
- Horror
- Novel-based

## Rulebook

See `rulebooks/32-arkham-horror-tcg.pdf`

## Design Notes

Designers: Nate French & MJ Newman. Published by Fantasy Flight Games (2016).

### Theme Integration

Arkham Horror: The Card Game drops players into the Lovecraftian mythos not as
action heroes but as fragile investigators stumbling through cosmic horror. The
design commits fully to the narrative premise that these are ordinary people —
librarians, detectives, drifters, mystics — confronting forces beyond human
comprehension. The dual damage tracks of Health and Sanity mechanically encode
this: physical threats and psychological horror are equally lethal, and an
investigator can be destroyed by either. The chaos bag — the randomizer at the
heart of every skill test — reinforces the genre's core anxiety. Drawing tokens
from a bag of uncertain composition feels fundamentally different from rolling
dice. You know roughly what horrors lurk in that bag, but you never know which
one you will draw next. The Elder Sign and Tentacle tokens (auto-success and
auto-failure) mean that no test is ever truly safe or truly hopeless, echoing
the Lovecraftian theme that reality itself is unreliable.

The class system maps investigator archetypes onto mechanical identities with
precision. Guardians fight. Seekers investigate. Mystics bypass conventional
skill tests by channeling willpower through spell assets. Rogues bend the
economy and the action system. Survivors thrive on failure, turning bad outcomes
into fuel. Each class feels like a different relationship with the horrors —
Guardians confront them directly, Mystics negotiate with them on their own
terms, Survivors simply refuse to stay down. The investigator-specific signature
cards and weaknesses personalize this further: Roland Banks (the Fed) has a
signature that rewards finding clues at locations with enemies, because his
story is about investigating the monsters; his weakness represents his buried
guilt. Every investigator tells a story through their card pool.

The campaign structure is where theme integration becomes most ambitious. Choices
made in one scenario — which paths you explored, which enemies you defeated or
fled, which allies survived — carry forward into subsequent scenarios. Your
investigator accumulates physical and mental trauma between sessions, starting
later scenarios already wounded. The campaign log tracks narrative branching
that changes which scenarios you play and how they are configured. Failure is
not a reload; it is part of the story. An investigator who dies mid-campaign
is gone, replaced by someone new who must pick up the pieces. This permanence
gives weight to every decision in a way that standalone scenarios cannot.

### Core Loop

Each round follows a structured sequence across four phases:

1. MYTHOS PHASE (skipped in Round 1) — Each investigator draws an encounter
   card, introducing enemies, treacheries, or environmental hazards. Doom is
   added to the agenda, advancing the scenario's threat clock. This phase is
   entirely outside player control — it is the game attacking you.
2. INVESTIGATION PHASE — Each investigator takes three actions in any
   combination: Move (to a connected location), Investigate (test Intellect
   against the location's shroud to discover a clue), Play a card from hand
   (paying its resource cost), Activate an action ability on a card in play,
   Fight (test Combat against an enemy's fight value), Evade (test Agility
   against an enemy's evade value), Engage an enemy, or Draw a card / Gain a
   resource. The three-action limit is the game's primary scarcity: you always
   need more actions than you have. Enemies engaged with you impose attacks of
   opportunity if you take non-fight/non-evade actions, further constraining
   your choices.
3. ENEMY PHASE — All engaged enemies attack their investigators, dealing damage
   and horror. Unengaged Hunter enemies move toward the nearest investigator.
   This phase punishes players who left threats unaddressed.
4. UPKEEP PHASE — Each investigator readies all exhausted cards, draws one card,
   and gains one resource. The steady trickle of cards and resources provides
   the baseline engine that deck construction amplifies.

Victory: Gather enough clues from locations to advance the act deck through all
its stages before the agenda deck completes. Each act stage requires spending a
threshold of clues and may trigger story events or change the map.
Defeat: The agenda deck advances through all stages (doom threshold reached each
stage), triggering increasingly catastrophic events. Individual investigators
can also be defeated when damage equals Health or horror equals Sanity.

### Key Design Patterns

THE CHAOS BAG AS TUNABLE PROBABILITY ENGINE: The chaos bag replaces dice with a
physical container of tokens whose composition is known but whose draw is random.
This is the game's most important design innovation. Unlike dice, the chaos bag's
probability distribution is not fixed — it changes per scenario, per difficulty
level, and sometimes mid-scenario through card effects. Easy mode includes +1
tokens and fewer harsh penalties. Expert mode fills the bag with -4, -5, -6, and
-8 tokens alongside special symbols that trigger devastating scenario-specific
effects. The bag is also narratively mutable: certain campaign outcomes add or
remove tokens permanently. Because players know the bag's contents, they can
calculate rough odds — "there are 16 tokens, 4 of which fail me at skill value
5" — but the single draw introduces variance that no amount of planning can
eliminate. This tension between knowable odds and unknowable outcomes is the
mechanical heart of Lovecraftian horror.

DOOM/AGENDA AS RELENTLESS TIME PRESSURE: Each Mythos Phase adds one doom to the
agenda. When the accumulated doom reaches the agenda's threshold, it advances to
the next stage — triggering punishing story effects, spawning new threats, or
reshaping the scenario entirely. Certain encounter cards and enemy abilities add
extra doom, accelerating the clock unpredictably. The agenda deck typically has
three stages, with the final advance representing catastrophic failure. This
creates a tension architecture where players are never safe to turtle: every
round spent preparing is a round closer to doom. The clue/act progression
represents the investigators' counter-narrative — gathering evidence to advance
the story before the mythos overwhelms them. The race between doom and clues
is the macro-level strategic tension that frames every tactical decision.

THREE-ACTION ECONOMY AS TRIAGE SYSTEM: Three actions per turn sounds generous
until you enumerate the demands: move to a new location (1 action), investigate
a clue (1 action and a skill test you might fail), play an asset (1 action plus
resources), fight an enemy (1 action and a risky skill test), evade an engaged
enemy (1 action). With enemies imposing attacks of opportunity on non-combat
actions, a single engaged enemy can consume your entire turn: evade (1 action),
move away (1 action), investigate (1 action) — and that is if everything
succeeds. The action economy forces constant triage. You cannot do everything;
you must decide what matters most right now. This scarcity is what makes the
cooperative element meaningful — splitting responsibilities between players is
not optional optimization, it is survival.

CARDS AS MULTI-USE RESOURCES: Every player card serves at least three potential
purposes: play it as an asset or event for its printed effect (costing resources
and an action), commit it to a skill test for its skill icons (consuming the
card with no resource cost), or simply hold it as insurance. This triple-use
design means every draw is meaningful and every discard is a sacrifice. A player
holding a powerful but expensive ally card might instead commit it to a critical
skill test, burning future potential for immediate survival. The tension between
using cards for their printed effects versus their skill icons versus holding
them is constant and unresolvable — there is no right answer, only the least
painful tradeoff.

DECK CONSTRUCTION AS NARRATIVE IDENTITY: Between scenarios, investigators spend
earned experience points (XP) to upgrade their decks — swapping level-0 cards
for more powerful higher-level versions. This is not just mechanical progression;
it is character development. An investigator who starts with basic firearms and
upgrades to a Lightning Gun over the campaign has a mechanical arc that parallels
a narrative one. The class restrictions (each investigator can use cards from
their class plus one or two secondary classes, determined per investigator) mean
that deck-building is constrained enough to feel like expressing a character
rather than solving an optimization puzzle. Signature cards and personal
weaknesses that are shuffled into every deck ensure that no two copies of the
same investigator play identically — your Roland Banks develops differently from
mine based on which cards we prioritize and which campaign traumas shape our
choices.

WEAKNESS CARDS AS DESIGNED CRISES: Each investigator has a personal weakness card
shuffled into their deck, and additional basic weaknesses are added during deck
construction. These cards cannot be removed through normal means. When drawn,
they impose immediate penalties — enemies that spawn engaged with you, treachery
effects that drain resources or actions, conditions that persist until addressed.
The design purpose is twofold: weaknesses punctuate the rhythm of play with
unexpected crises that demand improvisation, and they prevent decks from becoming
frictionless engines. No matter how well-constructed your deck is, your weakness
will appear at the worst possible moment. The campaign system compounds this by
adding trauma (permanent Health or Sanity reduction) to investigators who are
defeated, meaning your deck must increasingly account for fragility as the
campaign progresses.

LOCATION NETWORK AS SPATIAL PUZZLE: Each scenario lays out location cards in a
specific configuration, forming a map with connections between locations.
Locations have two key values: shroud (difficulty to investigate) and clue count
(how many clues are placed there at setup, usually scaling with player count).
Movement costs an action per location, making geography a real constraint.
Scenarios reveal locations progressively — you might start with only two visible
locations and discover more as acts advance or clues are found. This spatial
layer transforms what could be a purely abstract card game into a game of
positioning and route optimization. Where you are matters as much as what you
have, because an investigator on the wrong side of the map when a critical
location is revealed has lost multiple actions to transit.

COOPERATIVE ROLE SPECIALIZATION: The class system creates natural role division
in multiplayer. A Guardian-Seeker pair embodies the classic fighter-researcher
partnership: one handles enemies while the other gathers clues. A Mystic can
flex between combat and investigation using Willpower for both. A Rogue
generates extra actions and resources to support the team. This specialization
is not rigid — every investigator can attempt any action — but the skill values
and card pools make certain investigators dramatically better at certain tasks.
The design rewards teams that cover each other's weaknesses rather than teams
of generalists. At higher player counts, this specialization deepens: a
four-player team might have a dedicated fighter, a dedicated clue-gatherer, a
flex player, and a support player.

### What Makes It #32

Arkham Horror: The Card Game succeeds by solving one of card gaming's oldest
tensions: the desire for deep deck construction married to the desire for rich
narrative experience. The chaos bag replaces dice with a probability system that
is both tunable by the designers and legible to the players, creating a unique
risk-assessment texture that no other mechanism in board gaming quite matches.
The campaign structure gives every decision weight that extends beyond the current
session — trauma persists, story branches diverge, and investigators evolve or
die. The three-action economy with attacks of opportunity creates a triage puzzle
where cooperative role division is not just helpful but necessary for survival.
The multi-use card design ensures that every draw presents a genuine decision
rather than an obvious play. And the Living Card Game model — fixed expansions
rather than randomized boosters — means the deck construction metagame rewards
creativity and thematic expression over wallet size. The result is a game that
feels less like a card game with a story bolted on and more like a horror
narrative that happens to be expressed through cards.
