# The Lord of the Rings: Duel for Middle-earth

## Quick Stats

- **Players:** 2
- **Time:** 30-45 min
- **Weight:** 2.06/5

## Mechanics

- Area Majority / Influence
- Hand Management
- Income
- Layering
- Market
- Modular Board
- Multi-Use Cards
- Once-Per-Game Abilities
- Open Drafting
- Point to Point Movement
- Race
- Relative Movement
- Set Collection
- Sudden Death Ending
- Tags
- Take That
- Tech Trees / Tech Tracks
- Variable Player Powers
- Variable Set-up

## Categories

- Card Game
- Fantasy
- Novel-based

## Rulebook

See `rulebooks/22-lotr-duel-for-middle-earth.pdf`

## Design Notes

Designers: Antoine Bauza & Bruno Cathala. Published by Repos
Production (2024). Illustrated by Vincent Dutrait.

### Theme Integration

A re-implementation of 7 Wonders Duel (2015) by the same designers,
transplanted from ancient civilizations to Tolkien's Middle-earth.
The thematic reskin is not cosmetic — it restructures the victory
conditions around the source material's narrative tension. The
Fellowship player guides Frodo and Sam along the Quest of the Ring
track toward Mount Doom, while Sauron sends the Nazgul in pursuit.
Military supremacy becomes "Conquering Middle-earth" across seven
named regions (Arnor, Lindon, Enedwaith, Rhovanion, Rohan, Gondor,
Mordor). The science/progress victory from 7 Wonders Duel becomes
"Support of the Races" — collecting six different Race symbols
(Elves, Ents, Hobbits, Humans, Dwarves, Wizards) to rally the
free peoples. Each victory path maps to a recognizable LotR
narrative arc. Card colors correspond to thematic roles: grey cards
provide Skills (evoking craft and lore), green cards represent
racial alliances, red cards deploy military Units, blue cards
advance the Ring quest, yellow cards generate coins (treasure),
and purple cards (Chapter 3 only) enable late-game maneuvers.
Landmark tiles represent iconic locations (fortresses placed on
the central board map). The asymmetric starting positions — two
Fellowship Units on Arnor, two Sauron Units on Mordor — mirror
the geographic opposition of the novels.

### Core Loop

Three chapters (replacing 7 Wonders Duel's three ages), each
played through a unique card pyramid layout. On your turn, one
action: take an available Chapter card (play it or discard it for
coins) OR take a face-up Landmark tile. Alternating turns until
the pyramid is exhausted, then set up the next chapter. Game ends
immediately on any victory condition trigger, or after Chapter 3
with a territorial tiebreaker.

1. DRAFT — Choose an available (uncovered) card from the pyramid
2. DECIDE — Play the card (paying its cost) or discard it for
   coins equal to the current chapter number (1/2/3)
3. RESOLVE — Apply the card's effect immediately (gain Skills,
   coins, Ring movement, Race symbols, or Unit placement)
4. REVEAL — Uncover any newly available cards in the pyramid
5. REPEAT — Opponent takes their turn

### Key Design Patterns

CARD PYRAMID DRAFTING: The signature mechanism inherited from
7 Wonders Duel. Cards are arranged in overlapping pyramid
structures — some face-up, some face-down — with only uncovered
cards available for selection. Each chapter uses a different
layout: Chapter 1 is a compact inverted triangle, Chapter 2
a wider diamond, Chapter 3 a broad formation. This creates
layered information: you can see some upcoming cards but not
all, and taking one card reveals others beneath it. The critical
design insight is that you draft for your opponent too — every
pick simultaneously denies the other player. Unlike a hand of
cards, the pyramid is shared and visible, making the game about
reading your opponent's priorities as much as building your own
tableau. Face-down cards inject controlled randomness into this
otherwise perfect-information structure.

TRIPLE VICTORY CONDITIONS: Three instant-win paths that function
as mutual threat vectors. Quest of the Ring is a tug-of-war
track (Fellowship pushes toward Mount Doom, Sauron's Nazgul
pursues Frodo); Support of the Races requires collecting six
different Race symbols across green cards; Conquering Middle-earth
demands presence (Unit or Fortress) in all seven regions. No
player can defend against all three simultaneously, so the game
becomes about credibly threatening on multiple axes while
actually advancing one. This mirrors 7 Wonders Duel's military/
science/points triangle but with tighter thematic mapping. The
fallback scoring (most regions controlled) ensures the game
always resolves, even without a sudden-death trigger.

ASYMMETRIC QUEST TRACK: The Quest of the Ring track is a linear
path with Frodo and Sam starting in the center and the Nazgul
starting at the opposite end. Only the Fellowship player moves
Frodo forward (via blue cards); the Nazgul automatically advances
whenever Frodo does, maintaining pursuit pressure. The distance
between them can only decrease, never increase — creating an
irreversible ratchet. Bonus spaces along the track grant
immediate rewards (coins, extra effects) when reached or passed.
This one-directional tension is elegant: the Fellowship player
wants to rush the Ring to Mount Doom, but every step brings the
Nazgul closer. Sauron wins if the Nazgul catches Frodo, making
each Ring advance a calculated risk.

SKILL-AS-CURRENCY SYSTEM: Grey cards provide Skill symbols
(Ruse, Strength, Courage, Knowledge, Leadership) that serve as
prerequisites for playing other cards and tiles. Each Skill
symbol can be used once per turn — they are not consumed but
act as a soft gate. Missing Skills can be compensated by paying
1 coin per missing symbol, creating a flexible cost curve.
Early-game Skill investment reduces later costs, functioning as
a discount engine. The slash notation (Skill A / Skill B) on
some cards means only one applies per turn, forcing players to
specialize or diversify strategically.

CHAIN SYMBOLS: Starting in Chapter 2, certain cards display a
chaining symbol that lets them be played for free if the player
already has a card with the matching chain link. This creates
lightweight tech-tree dependencies across chapters. A Chapter 1
card with a chain-out symbol becomes an investment that pays off
when its Chapter 2 successor appears in the pyramid. The design
elegance is that chains reward long-term planning but never
punish — you can always pay the normal cost instead. Chains
also create drafting tension: denying an opponent a chain link
in Chapter 1 raises their costs for the rest of the game.

ALLIANCE TOKEN REVELATION: Green cards trigger Race Alliances
via two paths — either 2 matching Race symbols (specialist) or
3 different Race symbols (generalist). When triggered, Alliance
tokens are drawn from face-down stacks, revealed to both
players, and one is chosen for its immediate effect. The hidden
token stacks add variance to the Race-collection path while
keeping the trigger conditions deterministic. A single Race
symbol can satisfy both the pair and the diversity condition,
compressing decision space efficiently.

ESCALATING DISCARD VALUE: Discarding an unwanted card yields
coins equal to the current chapter number (1 in Chapter 1, 2 in
Chapter 2, 3 in Chapter 3). This is a subtle but powerful tempo
mechanism — early discards are cheap pivots, while late discards
generate real wealth. It also means Chapter 3 cards are harder
to deny via hate-drafting, since your opponent profits more from
the discard. The escalation mirrors the narrative: as the war
intensifies, even rejected resources carry greater weight.

FORTRESS COST ESCALATION: Landmark tiles place Fortresses on the
central board and grant unique abilities. However, each tile's
coin cost increases by 1 for every Fortress you already have on
the board. Your first Landmark is cheap; your fourth is
expensive. This self-balancing mechanism prevents one player from
monopolizing Landmarks while rewarding early investment in
territorial presence.

TERRITORIAL AREA CONTROL: Red cards place Units in specific
regions (chosen from two options on each card). When opposing
Units occupy the same region, a conflict triggers — both sides
remove one Unit each, repeating until one side is cleared. This
mutual-destruction model keeps the board volatile and prevents
turtling. Fortresses grant permanent presence without
vulnerability to Unit-based conflict, making them the backbone
of a Conquest strategy. Purple cards in Chapter 3 add movement,
removal, and economic attacks — injecting chaos precisely when
the game needs a resolution mechanism.

CHAPTER-LAST ADVANTAGE: The player who takes the final card of
a chapter does NOT start the next chapter — the opponent does.
Since the Sauron player always goes first in the game, the
starting player shifts based on who closes each chapter. This
creates a subtle end-of-chapter tempo game: sometimes you want
to be the one who finishes the pyramid (to pick a powerful last
card), but you surrender first-pick advantage in the next
chapter.

### Scaling Mechanisms

This is a strictly 2-player game — no scaling needed. The
asymmetry between Fellowship and Sauron provides replayability:
different starting coins (Fellowship gets 3, Sauron gets 2),
different Quest track dynamics (Frodo advances toward Mount
Doom, Nazgul pursues automatically), and different Unit starting
positions (Arnor vs. Mordor). The fixed 2-player format allows
the designers to tightly balance every card interaction and
victory-condition threshold without worrying about multiplayer
variance.

### What Makes It #22

The genius of the 7 Wonders Duel system — and its survival in
this reimplementation — is the card pyramid as a shared drafting
space. Most drafting games use hidden hands passed around a
table; the pyramid puts all information (well, most of it) on
the table and forces both players to reason about the same
decision tree. Every card you take shapes what your opponent can
take next. This creates a density of meaningful interaction that
rivals abstract strategy games, but wrapped in engine-building
satisfaction.

The LotR reskin earns its place by making the triple victory
conditions feel narratively distinct rather than mechanically
interchangeable. The Quest of the Ring track is a genuine
tug-of-war with irreversible momentum. The Race alliance system
maps beautifully to Tolkien's theme of uniting free peoples.
The Conquest map gives military pressure a geographic logic that
"pushing a token on a track" never could. The result is a game
that plays in 30 minutes but packs in bluffing, engine-building,
area control, and tempo management — all balanced on the knife
edge of three sudden-death conditions.
