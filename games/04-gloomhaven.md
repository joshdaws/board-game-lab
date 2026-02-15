# Gloomhaven

## Quick Stats

- **Players:** 1-4
- **Time:** 60-120 min
- **Weight:** 3.92/5

## Mechanics

- Action Queue
- Action Retrieval
- Campaign / Battle Card Driven
- Card Play Conflict Resolution
- Communication Limits
- Cooperative Game
- Critical Hits and Failures
- Deck Construction
- Deck, Bag, and Pool Building
- Grid Movement
- Hand Management
- Hexagon Grid
- Legacy Game
- Line of Sight
- Modular Board
- Multi-Use Cards
- Once-Per-Game Abilities
- Role Playing
- Scenario / Mission / Campaign Game
- Simultaneous Action Selection
- Solo / Solitaire Game
- Tags
- Variable Player Powers

## Categories

- Adventure
- Exploration
- Fantasy
- Fighting
- Miniatures

## Rulebook

See `rulebooks/04-gloomhaven.pdf`

## Design Notes

Designer: Isaac Childres. Published by Cephalofair Games (2017).

### Theme Integration

Mercenaries in a dark fantasy world take on dungeon-crawling contracts for
personal gain. Critically, this is NOT a heroic quest — characters have
personal quests (retire the character when fulfilled) and secret battle goals
that create selfish incentives within a cooperative framework. The town of
Gloomhaven is a living settlement: its prosperity rises, its shop inventory
expands, new events get added to city and road decks based on which characters
retire and which classes unlock. The 17 character classes represent distinct
fantasy species and archetypes, each with entirely unique ability card decks.
The world evolves based on player decisions — achievements gate which
scenarios become available, creating branching campaign paths.

### Core Loop

Each scenario: dungeon crawl on modular hex map tiles, fight automated
monsters, complete objective. Round structure:

1. CARD SELECTION - Each player secretly picks 2 ability cards from hand
   (or declares a long rest). One is the "leading card" setting initiative.
2. INITIATIVE - All players and monster types reveal initiative values.
   Lowest goes first. Players and monsters interleave based on these values.
3. CHARACTER TURNS - Play top action of one card and bottom action of the
   other (in any order). Default: top = Attack 2, bottom = Move 2 (any card).
   Cards go to discard, lost pile, or active area depending on abilities used.
4. MONSTER TURNS - Automated by ability cards. Focus rules determine targets.
   Monsters follow deterministic AI: focus closest reachable enemy, move
   minimum distance, maximize attack effect.
5. END OF ROUND - Elements wane, short rests available, modifier deck
   shuffles if Null/2x drawn.

Campaign layer: between scenarios, return to Gloomhaven for shopping,
leveling, city events, and retirement.

### Key Design Patterns

CARDS AS LIFE: The central innovation. Your hand of ability cards IS your
health bar. Every round you play 2 cards; played cards go to discard. You
recover discards by resting — but each rest permanently LOSES one card (moved
to the lost pile, unrecoverable). Some powerful abilities are "lost" on use
(marked with X), going directly to the lost pile. When you can't play 2 cards
from hand and can't rest (no discards), you're EXHAUSTED — removed from the
scenario. This creates a ticking clock unique to each character class. The
Brute with 10 cards lasts longer than the Spellweaver with 8. Using lost
abilities is powerful but shortens your lifespan. Every powerful action has
an opportunity cost measured in remaining rounds of existence. No other game
makes resource management feel this existential.

SPLIT-CARD DESIGN: Every ability card has a top action and a bottom action.
You always play 2 cards: one for its top, one for its bottom. The unused
halves are wasted. This doubles the decision space — with 10 cards in hand,
you have 10 top options and 10 bottom options to mix and match. The default
fallbacks (top = Attack 2, bottom = Move 2) mean no card is ever useless.
And the initiative value on your leading card determines turn order, adding
a third dimension: power vs. speed.

INITIATIVE AS TACTICAL CHOICE: Each ability card has an initiative number
(typically 10-90). Your leading card's initiative determines when you act
relative to monsters and other players. Low initiative = go early (position
before monsters, grab loot) but you commit before seeing what happens. High
initiative = go late (react to the board state) but monsters may act first.
The initiative is printed on the card, so choosing WHEN to act constrains
WHAT you can do. Want to go fast? You're limited to cards with low initiative
numbers, which may not have the abilities you want.

ATTACK MODIFIER DECK: Instead of dice, every attack draws a card from a
personal 20-card modifier deck: six +0s, five +1s, five -1s, one +2, one -2,
one 2x (critical), one Null (miss). This replaces dice with a deck that
depletes and reshuffles — meaning the 2x and Null are guaranteed to appear
once per cycle. Over the campaign, perks let you customize this deck: remove
-1 cards, add +2 with STUN, add elemental infusions. Your modifier deck
becomes a character-building tool, not just randomness.

AUTOMATED MONSTER AI: Monsters are not controlled by a player. Each monster
type has its own ability deck; one card is drawn per round determining what
ALL monsters of that type do. Focus rules are deterministic: find the enemy
reachable with minimum movement, attack it. Elites act before normals.
Multi-target monsters position for maximum effect. The AI is predictable
enough to plan around but variable enough (different ability cards each round)
to create surprises. This eliminates the need for a GM while preserving
tactical combat depth.

COMMUNICATION RESTRICTIONS: Players can discuss strategy in general terms
but cannot share specific numbers. "I'm planning to attack that guard early"
is fine. "I have initiative 17 so I'll go before the archers at 32" is not.
This prevents quarterbacking while encouraging coordination. You plan around
intentions, not certainties — mirroring real team dynamics where you trust
your teammates but can't control them.

ELEMENTAL INFUSION SYSTEM: Six elements (Fire, Ice, Air, Earth, Light, Dark)
exist on a shared infusion board. Certain abilities create elements (move to
Strong). At end of round, Strong wanes to Waning, Waning to Inert. Other
abilities can consume available elements for bonus effects. You can't create
and consume in the same turn. This creates inter-turn and inter-player
synergies: the Cragheart creates Earth, the Brute consumes it next turn for
a powered-up attack. Timing and turn order matter because elements decay.

EXHAUSTION AS LOSS CONDITION: When a character is exhausted (no cards to play
AND no cards to rest), they're removed from the scenario — not killed, not
reset, just gone. There's no coming back. If all characters exhaust, the
scenario fails. This creates escalating tension: early rounds feel powerful
(full hand), late rounds feel desperate (3-4 cards left, every action counts).
Alternatively, taking too much damage forces card loss from hand/discard to
negate it — burning future rounds to survive the present.

CHARACTER RETIREMENT AND UNLOCKING: Each character has a personal quest
(drawn at creation). When fulfilled, the character RETIRES — permanently
leaves the game. Retirement unlocks a sealed box or envelope containing a
new character class with entirely new mechanics. The retired character's
class also adds new city/road event cards to the decks. This cycle of
retirement and unlocking is the campaign's heartbeat: you grow attached to
a character, accomplish their goal, say goodbye, and discover something new.
17 total classes, but only 6 available at start.

SECRET BATTLE GOALS: Each scenario, every player draws 2 battle goal cards
and keeps 1 secretly. Goals like "Have 5+ cards at scenario end" or "Gain
7+ experience" create hidden personal incentives that may conflict with
optimal team play. Completing goals earns checkmarks toward perks. This
subtle mechanic prevents pure optimization — players have private reasons
to take suboptimal actions, creating emergent tension and variety.

PERSISTENT TOWN ECONOMY: Gloomhaven has a prosperity track. As prosperity
rises: new items appear in shops, new characters can start at higher levels.
Gold earned in scenarios buys equipment. Items equip to specific slots (head,
body, legs, hands, small items) and modify abilities — some add attack modifier
cards, others grant one-time abilities. Character enhancements (permanent
stickers on ability cards) provide endgame gold sinks. The economy gives
meaning to looting and gold management across the campaign.

SCENARIO SCALING: Difficulty scales with party level (average character level
/ 2, rounded up). Higher scenario levels mean tougher monsters but more gold
per token and more bonus XP. Players choose Easy (-1), Normal, Hard (+1), or
Very Hard (+2). Solo play increases monster level by 1 to compensate for
perfect information.

### Scaling Mechanisms

- 1-4 players: Monster placement scales per scenario (monster key shows
  which monsters appear at 2/3/4 player counts, with normal/elite variants)
- Scenario level adjusts monster stats, gold conversion, trap damage, and
  bonus XP
- Solo variant: +1 monster level, open information allowed
- Monster types cap at different standee counts per type

### What Makes It #4

The card-as-life system. No other mechanic in modern board gaming creates
the same quality of tension — every powerful ability is purchased with your
remaining time in the scenario. The modifier deck replaces dice with something
you can build and customize. The automated monsters eliminate GM requirements
without sacrificing tactical depth. The retirement cycle ensures the campaign
constantly refreshes itself with new mechanics and abilities. And the
communication restrictions create genuine team dynamics instead of
one-player-solves-everything. Gloomhaven is a 100+ hour campaign that stays
mechanically fresh because the character you're playing in hour 80 doesn't
exist in hour 1.
