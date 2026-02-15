# Slay the Spire: The Board Game

## Quick Stats

- **Players:** 1-4
- **Time:** 30-150 min
- **Weight:** 2.91/5

## Mechanics

- Cooperative Game
- Deck, Bag, and Pool Building
- Dice Rolling
- Hand Management
- Solo / Solitaire Game
- Variable Player Powers

## Categories

- Adventure
- Card Game
- Fantasy
- Video Game Theme

## Rulebook

See `rulebooks/18-slay-the-spire.pdf`

## Design Notes

Designers: Gary Dworetsky, Anthony Giovannetti, Casey Yano.
Based on the video game by Mega Crit. Published by Contention
Games (2024).

### Theme Integration

The board game faithfully translates the digital roguelike
deckbuilder into a cooperative tabletop experience. Players
ascend a spire filled with escalating enemies, choosing paths
on a branching map that offers encounters, elites, events,
merchants, campfires, and treasures — each node type
mirroring its video game counterpart. The four characters
(Ironclad, Silent, Defect, Watcher) retain their distinct
mechanical identities: Ironclad builds Strength and exhausts
cards, Silent generates Poison and Shivs, Defect channels
and evokes Orbs, and Watcher shifts between Stances for
risk/reward energy management. The theme is not a veneer —
the entire structure of ascending acts, building power through
card acquisition, and facing a boss at the summit creates
the narrative arc of a dungeon climb where every decision
compounds toward survival or death.

### Core Loop

The game spans up to three Acts (four with unlocks), each
played on a branching map board. Per combat round:

1. RESET — Energy resets to 3, Block resets to 0
2. DRAW — Draw 5 cards from your personal deck
3. ROLL — Roll a shared die determining enemy behavior
   and relic triggers for this round
4. PLAY — Spend Energy to play Attack, Skill, and Power
   cards; coordinate with teammates on targeting
5. END OF TURN — Discard hand, trigger end-of-turn
   effects (Orbs, Poison ticks, Wrath self-damage)
6. ENEMY TURN — Enemies execute their die-determined
   or scripted actions against players in their rows

Between combats, players navigate the map choosing nodes:
gain card rewards, visit merchants, rest or upgrade at
campfires, resolve events, and collect relics. The macro loop
is about building a deck strong enough to defeat the Act boss,
then resetting HP and facing harder enemies in the next Act.

### Key Design Patterns

DECKBUILDING AS ROGUELIKE PROGRESSION: Each player
starts with a weak starter deck (Strikes and Defends) and
improves it over the course of a run. The three levers for
deck improvement — adding cards (rewards and merchants),
removing cards (merchants and events), and upgrading cards
(campfire Smith action) — create the classic roguelike tension
of growing power versus time pressure. Crucially, you can
SKIP card rewards. Experienced players recognize that deck
thinning is as important as deck expansion, since every weak
card drawn is a strong card not drawn. The "Minimalist"
achievement (beat Act III with 5 cards or fewer) enshrines
this principle.

DETERMINISTIC ENEMY INTENT VIA DIE: The video game
shows enemy "intent" icons. The board game replaces this
with a shared die roll at the start of each player turn. One
roll determines ALL enemy actions for the round — every
enemy card has actions mapped to die faces. This is a
brilliant analog translation: it preserves the "read and react"
puzzle of the digital game while making information public
and simultaneous. Players see exactly what damage is coming
and must collectively decide how to allocate Block and
attacks. The die also triggers relic abilities, tying item
synergies to the same randomness source.

ENERGY AS ACTION ECONOMY: Players begin each turn with
3 Energy (trackable up to 6 on the player board). Every card
has an Energy cost. This hard constraint forces hand
evaluation every turn — you typically cannot play your entire
hand, so you must prioritize. The tension between playing
a 2-cost Power for long-term benefit versus two 1-cost
Attacks to survive this turn is the heartbeat of every combat.
The Watcher's Calm stance (gain 2 Energy when leaving)
and Miracle tokens show how characters bend this economy
in thematically distinct ways.

BLOCK VS DAMAGE TENSION: Block prevents the next N
damage but resets to zero each turn. Players must decide
each round how much Energy to spend on defense (Skill
cards generating Block) versus offense (Attack cards dealing
damage). Over-blocking wastes Energy; under-blocking loses
HP that never comes back easily. Block caps at 20 for
players, creating a ceiling that forces offensive engagement
rather than pure turtling. This ephemeral-defense model
ensures every round feels urgent.

COOPERATIVE ROW SYSTEM: Each player occupies a row on
the combat board. Enemies are placed in specific player rows
and target the player in their row. However, players can
target ANY enemy in any row with their attacks. Area-of-
effect abilities hit all enemies in a single row plus the Boss.
This creates natural coordination puzzles: who handles their
own threats, and who reaches across rows to help? Bosses
sit outside rows and threaten everyone, forcing collective
defense. The row system gives cooperative play spatial
texture without a full tactical grid.

CHARACTER ASYMMETRY AS TEAM COMPOSITION: The four
characters are not interchangeable damage dealers — each
operates on fundamentally different axes. Ironclad gains
Strength tokens (+1 damage per hit per token, max 8) and
benefits from exhausting cards. Silent accumulates Poison
on enemies (damage over time that ignores Block) and
generates Shiv tokens for burst damage. Defect channels
Orbs into slots that fire automatically at end of turn
(Lightning for damage, Frost for Block, Dark for scaling).
Watcher cycles between Calm, Wrath, and Neutral stances,
managing a risk/reward loop where Wrath boosts damage
but inflicts self-harm. In co-op, these identities create team
synergies — Silent's Weak debuffs protect the whole party,
Defect's Frost Orbs provide passive defense, Watcher's
burst damage handles priority targets.

RELIC ENGINE BUILDING: Relics are persistent items that
modify rules for the entire run. The relic deck, boss relic
deck, and potions create a secondary engine-building layer
on top of deckbuilding. Relics trigger on die results, at
start of turn, end of combat, or "once per room" — each
timing window creates different strategic value. The die-
triggered relics are especially clever: since one die roll
governs the entire round, a relic that triggers on a specific
face has a known probability and creates moments of
anticipation. Boss relics, gained after defeating Act bosses,
are deliberately powerful and run-defining.

CAMPFIRE DILEMMA — REST VS SMITH: Campfire nodes
force a binary choice: heal 3 HP (Rest) or upgrade a card
(Smith). This is a micro-version of the game's central
tension between short-term survival and long-term power.
An upgraded card is permanently stronger for every future
combat, but the HP you did not recover might cost you the
next elite fight. The simplicity of two options makes the
weight of the decision more visible, not less.

MAP AS STRATEGIC PLANNING: Each Act uses a randomly
selected map board with branching paths. Map tokens are
placed semi-randomly (dark tokens on dark spaces, light on
light), then revealed. Players can see upcoming node types
and plan a route — do you path through an Elite for better
rewards at the cost of HP, or take the safe route through
events and merchants? The boot meeple tracks progress from
bottom to top, reinforcing the ascending-spire metaphor.
Path selection is a group decision, adding another layer of
cooperative negotiation.

DECK POLLUTION AS THREAT: Enemies can add Curse,
Status, and Daze cards to player decks. Curses are permanent
dead draws that cannot be Transformed. Status and Daze
cards clog your hand during the combat where they are
added, then get removed afterward. This "deck pollution"
mechanic means enemies attack your engine, not just your
HP. The Ascension system amplifies this — Ascension 5
starts you with a Curse, making deck quality a concern
from turn one.

EXHAUST AS RESOURCE CONVERSION: Exhausted cards are
removed from your deck for the current combat. Some cards
exhaust after use (powerful one-shot effects), while others
let you exhaust cards from hand for benefits. The Ironclad
in particular builds around Exhaust synergies — cards that
trigger abilities "whenever you Exhaust a card." This turns
your starter Strikes from dead weight into fuel for combos,
elegantly solving the deckbuilder problem of early cards
becoming useless.

### Scaling Mechanisms

- Enemy HP scales by player count: boss and elite cards
  list separate HP values for 1/2/3/4 players (e.g., The
  Collector has 57/114/171/228 HP)
- Encounters place one enemy per player row, naturally
  scaling threat with party size
- Boss relics revealed equal players + 1 (or 3 solo),
  ensuring meaningful choice at every count
- Solo mode adds "Loaded Die" relic for die manipulation,
  compensating for the lack of teammates
- Neow's Blessing gives each player individual starting
  bonuses, scaling starting power with player count
- Optional "Last Stand" rule for boss fights lets surviving
  players continue if one dies, softening the cooperative
  elimination problem at higher counts
- Ascension system (13 levels) provides post-campaign
  scaling: harder elites, harder encounters, reduced HP,
  potion limits, starting curses, and tougher bosses —
  each level stacks with all previous ones

### What Makes It #18

Slay the Spire: The Board Game solves one of tabletop
design's hardest translation problems: making a single-
player digital roguelike feel right as a cooperative board
game. The die-based intent system is the linchpin — it
converts the video game's hidden-then-revealed enemy
patterns into a shared information puzzle that all players
solve together, every round. The simultaneous turn
structure keeps downtime minimal despite being fully
cooperative. Each character's mechanical identity is
preserved with such fidelity that experienced video game
players recognize their favorite synergies, while the
physical card rewards deck and relic deck create the
dopamine of loot discovery that drives roguelike replay.

The game earns its ranking by nailing the "one more run"
compulsion in analog form. The Ascension ladder, unlock
system, achievement checklist, and Daily Climb mode
provide structured replayability that most cooperative
games lack. But the core appeal is the same as the video
game: the feeling of building a fragile collection of cards
into a precisely tuned engine, then watching it either
triumph against impossible odds or collapse spectacularly.
Every card added, every card removed, every campfire
choice matters — and you feel it.
