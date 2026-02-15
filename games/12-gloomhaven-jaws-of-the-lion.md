# Gloomhaven: Jaws of the Lion

## Quick Stats

- **Players:** 1-4
- **Time:** 30-120 min
- **Weight:** 3.64/5

## Mechanics

- Action Queue
- Campaign / Battle Card Driven
- Cooperative Game
- Grid Movement
- Hand Management
- Hexagon Grid
- Legacy Game
- Scenario / Mission / Campaign Game
- Simultaneous Action Selection
- Solo / Solitaire Game

## Categories

- Adventure
- Exploration
- Fantasy
- Fighting

## Rulebook

See `rulebooks/12-gloomhaven-jaws-of-the-lion.pdf`

## Design Notes

Designer: Isaac Childres, with contributing designers Zachary Cohn,
Joe Homes, Alexander JL Theoharis, and Andrew Penn. Published by
Cephalofair Games (2020). A standalone prequel to Gloomhaven,
designed explicitly as an accessible entry point to the Gloomhaven
system.

### Theme Integration

Mercenaries in the city of Gloomhaven investigate a rising threat
beneath the streets. Unlike the original's sprawling overland
campaign with road events and branching paths, Jaws of the Lion
is tightly urban — all 25 scenarios take place in and under the
city itself. The four characters (Demolitionist, Hatchet, Red
Guard, Voidwarden) are members of a specific mercenary guild,
the Jaws of the Lion, giving the party a shared identity that the
original's rotating cast of strangers never had. This narrative
focus — one group, one mystery, one city — mirrors the design
philosophy: narrower scope, deeper accessibility. The campaign
tells a complete story arc in roughly 25 sessions rather than
100+, matching the commitment level of players who want a
contained experience rather than an open-ended sandbox.

### Core Loop

Identical to Gloomhaven at the scenario level — the genius was
in recognizing that the core loop needed no redesign, only a
better on-ramp:

1. CARD SELECTION - Each player secretly picks 2 ability cards
   from hand. One becomes the initiative card (lower = faster).
   General strategy discussion allowed; specific numbers forbidden.
2. INITIATIVE - All players and monster types reveal initiative.
   Lowest goes first. Players and monsters interleave.
3. CHARACTER TURNS - Play top action of one card, bottom action
   of the other. Defaults: top = Attack 2, bottom = Move 2.
   Cards go to discard or lost pile depending on abilities used.
4. MONSTER TURNS - Automated by ability cards. Deterministic
   focus rules. Elites before normals, numerical standee order.
5. END OF ROUND - Elements wane, short rests available.

Campaign layer: city events between scenarios, shopping, leveling
up, perk selection. No road events, no personal quests, no
retirement — the streamlining is deliberate.

### Key Design Patterns

TUTORIAL-AS-CAMPAIGN: The defining innovation. The Learn to Play
Guide IS the first five scenarios. Scenario 1 uses only 6 cards
per character (level "A"), simplified monsters with fixed
initiative 50, and no money, traps, doors, or ability decks.
Each subsequent scenario adds exactly one layer of complexity:
Scenario 2 introduces money tokens, treasure tiles, traps, doors,
lost actions, looting, area effects, and monster ability decks.
Scenario 3 adds difficult terrain, experience, active bonuses,
shield, jump, long rest, and new conditions. Scenario 4 brings
the element board, battle goals, spawning, objectives, and full
monster ability decks. Scenario 5 introduces bosses. By Scenario
6, players know the full rules without ever having read a
traditional rulebook. This is a masterclass in PROGRESSIVE
DISCLOSURE — the rulebook literally cannot be read ahead of
play because rules reference specific scenario book pages. The
design forces you to learn by doing.

CARD UPGRADE RAMP: The tutorial extends to deck construction.
Players start with 6 level "A" cards — the simplest versions
of their abilities. After Scenario 1, two "A" cards swap for
"B" versions that introduce lost actions and more complex
effects. After Scenario 2, level "1" cards begin entering the
pool. After Scenario 4, level "X" cards arrive — powerful,
situational abilities. By Scenario 5, players have their full
hand limit and must choose which cards to bring, introducing
DECK CONSTRUCTION decisions organically. The player never faces
the original Gloomhaven problem of staring at 10+ unfamiliar
ability cards during their first game.

SCENARIO BOOK AS MAP: Instead of modular hex tiles that require
assembly (original Gloomhaven had 30+ double-sided map tiles
requiring specific configurations), JotL prints all scenario
maps directly in a spiral-bound Scenario Book. You open to the
page and play on it. Setup time drops from 15-20 minutes to
under 5. This is not merely a convenience — it is a design
pattern shift. The book format means scenarios can have
irregular, artistic map shapes impossible with modular tiles.
It also enables the Supplemental Scenario Book for maps that
exceed a two-page spread. The tradeoff is replayability (maps
are fixed), but the gain in accessibility is transformative.

CARDS AS LIFE: Inherited from Gloomhaven and unchanged because
it needs no improvement. Your hand of ability cards IS your
health bar. Every round you play 2 cards to discard. Resting
recovers discards but permanently loses one card. Some powerful
abilities are "lost" on use. When you cannot play 2 cards, you
are exhausted — removed from the scenario. This ticking clock
means every powerful action shortens your lifespan. The four
JotL characters have hand sizes of 9-11 cards, creating
different endurance profiles: the Voidwarden with 11 cards
lasts longer than the Hatchet with 9, but must also manage
the complexity of granting actions to allies.

SPLIT-CARD DESIGN: Every ability card has a top and bottom
action. You play 2 cards: one for its top, one for its bottom.
The unused halves are wasted. With a full hand, this creates
rich combinatorial space. The initiative value on your leading
card adds a third axis: choosing WHEN to act constrains WHAT
you can do. Want to act before the monsters? You need a card
with low initiative, which may not have the ability you want.

GRANTING ACTIONS (VOIDWARDEN): A pattern unique among the four
JotL classes. The Voidwarden has abilities that grant actions
to other figures — both allies and enemies. "Suggestion" lets
her force an enemy to attack another enemy. This is mind
control as game mechanic: the granted figure uses its own
attack modifier deck, and the action does not consume the
target's turn. The Voidwarden thus plays a fundamentally
different game than the other three characters, manipulating
the board through indirect control rather than direct action.
This asymmetry gives a support-oriented player a deeply
satisfying role without reducing them to "heal bot."

OBSTACLE DESTRUCTION (DEMOLITIONIST): Another class-specific
pattern. The Demolitionist can destroy obstacles, placing
destruction tokens to mark now-traversable hexes. This gives
one player the ability to reshape the map itself — creating
new paths, opening sight lines, removing cover. It interacts
with the fixed Scenario Book maps in interesting ways: players
can spot obstacles that, once destroyed, create shortcuts or
flanking routes the designer clearly intended as discoverable
optimizations.

AUTOMATED MONSTER AI: Monsters use deterministic focus rules
(attack the character reachable with minimum movement) and
ability cards that vary their behavior each round. JotL
simplifies the original by starting Scenario 1 with monsters
at fixed initiative and base stats only, then introducing
four-card "Basic" ability decks in Scenario 2, then full
eight-card decks from Scenario 4 onward. The four-card basic
decks are a JotL innovation — a training-wheel version of
monster AI that lets players internalize focus rules before
adding the full variability of eight-card decks.

ATTACK MODIFIER DECK AS CHARACTER BUILD: The 20-card modifier
deck (six +0, five +1, five -1, one +2, one -2, one 2x, one
null) replaces dice with a depletable probability space. Over
the campaign, perks customize this deck: remove -1 cards, add
+1 with POISON, add rolling modifiers. Each character class
has unique perk options that shape their modifier deck toward
their playstyle. The Demolitionist can add cards that damage
adjacent enemies; the Voidwarden adds CURSE and heal effects.
Your modifier deck becomes a second character sheet — a
permanent build choice that compounds across the campaign.

NEGATING DAMAGE THROUGH LOST CARDS: A critical pressure valve.
Any time a character takes damage, they can negate ALL of it
by losing one card from hand or two from discard. This creates
a devastating tradeoff: survive now by burning future rounds
of existence. A character at low health with a full hand might
choose to take the damage rather than lose cards; a character
near exhaustion might lose cards rather than die. The system
creates agonizing decisions without complex rules — just one
sentence that reshapes every combat calculation.

CITY EVENTS: After each completed scenario, players draw a city
event card with narrative text and a binary choice. Unlike the
original Gloomhaven's city AND road events, JotL has only city
events — fitting the urban setting and reducing between-scenario
overhead. Events create light narrative texture and occasional
mechanical rewards without requiring significant time investment.

SECRET BATTLE GOALS: From Scenario 4 onward, each player draws
2 battle goal cards and keeps 1 secretly. Goals like "have five
or more total cards in your hand and discard at the end of the
scenario" create hidden personal incentives that may conflict
with optimal team play. Completing goals earns check marks
toward perks. This prevents pure cooperative optimization —
players have private reasons to take suboptimal actions.

### Scaling Mechanisms

- 1-4 players: Monster placement scales per scenario map
  (three-row icons show which monsters appear at 2/3/4 player
  counts, with normal/elite variants marked by white/gold)
- Solo play requires controlling 2 characters (noted as "more
  complex" in the rulebook — no solo-specific difficulty
  adjustment, unlike the original's +1 monster level)
- Scenario level = average character level / 2, rounded up;
  adjustable by +/- 1 or 2 for difficulty preference
- Scenario level affects monster level, gold conversion per
  token, trap damage, and bonus completion XP
- Boss stats scale with "C" (character count) — e.g., HP of
  10xC means 20 HP at 2 players, 40 HP at 4
- Item slot progression: at level 3, characters gain an
  additional small item slot (half level, rounded up)

### What Makes It #12

The tutorial system. Jaws of the Lion proved that the barrier
to Gloomhaven was never complexity — it was presentation.
The core mechanics (cards as life, split-card actions, automated
monsters, modifier deck building) are essentially identical to
the original. What changed is how players encounter them. By
embedding rules instruction directly into the first five
scenarios, Childres created a game that teaches itself. You
never read a 50-page rulebook; you play five increasingly
rich scenarios and emerge knowing everything. The Scenario
Book eliminates the original's punishing setup time. The
four fixed characters remove the paralysis of 6+ starting
class choices. The 25-scenario campaign respects players'
time while delivering a complete narrative arc. JotL is a
case study in accessibility design: it removed every friction
point between "open the box" and "play the game" without
simplifying the game itself. The tactical depth of a
Gloomhaven scenario is fully present from Scenario 6 onward.
The difference is that by Scenario 6, everyone at the table
actually understands how to play.
