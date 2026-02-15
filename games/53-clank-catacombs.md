# Clank!: Catacombs

## Quick Stats

- **Players:** 2-4
- **Time:** 45-90 min
- **Weight:** 2.53/5

## Mechanics

- Deck Building
- Push Your Luck
- Modular Board
- Grid Movement

## Categories

- Adventure
- Fantasy
- Exploration

## Rulebook

See `rulebooks/53-clank-catacombs.pdf`

## Design Notes

Designer: Paul Dennen. Published by Dire Wolf (2022).

### Theme Integration

Clank!: Catacombs takes the core premise of the Clank! series — thieves sneaking
into a dragon's lair to steal artifacts — and literalizes the exploration element
that the original game only implied. In the base Clank!, the dungeon is a fixed
board with predetermined paths. In Catacombs, the dungeon does not exist until
players explore it. Room tiles are drawn and placed as adventurers push deeper
underground, creating a procedurally generated labyrinth that is different every
game. This shift from fixed to emergent geography transforms the thematic
experience: you are not navigating a known dungeon but discovering an unknown one,
and every new room might reveal treasure, monsters, or a dead end that forces a
costly backtrack.

The "clank" mechanic — the game's signature innovation — is a masterpiece of
thematic integration. As players play cards from their deck, some cards generate
noise (clank cubes) that are added to a shared pool. When a dragon attack is
triggered, all clank cubes in the pool are dropped into a bag that also contains
neutral black cubes. Cubes drawn from the bag deal damage to their respective
players. The more noise you have made, the more cubes of your color are in the
bag, and the more likely you are to be hit. This is not an abstract penalty
system — it is a simulation of stealth. Loud actions (powerful card effects,
running through corridors) increase your risk profile. The dragon does not target
the strongest player or the leader; it targets the noisiest. The bag draw creates
probabilistic rather than deterministic punishment, which means that a noisy player
might escape unscathed while a quiet one gets unlucky — exactly the kind of
uncertainty that makes a heist thriller compelling.

The catacombs setting adds claustrophobia to the equation. Unlike the open
structure of the original game's board, the tile-based dungeon creates narrow
corridors, locked doors, and rooms that may only connect in one direction. Players
can find themselves deep in the dungeon with no efficient route back to the
surface, and the dragon attacks grow more frequent and more deadly as the game
progresses. The spatial constraint intensifies the push-your-luck dynamic: every
room explored is another room you must traverse on the return trip, and the dungeon
is collapsing around you.

### Core Loop

On each turn, a player plays cards from their hand and resolves their effects:

1. PLAY CARDS - Play all cards from your five-card hand (drawn at end of previous
   turn). Each card provides some combination of:
   a) SKILL - Currency used to buy new cards from the dungeon row (a shared market
      of six face-up cards, refilled from a common deck).
   b) SWORDS - Combat strength used to defeat monsters in the dungeon row or on
      room tiles, earning rewards.
   c) BOOTS - Movement points used to move between connected rooms on the dungeon
      map.
   d) CLANK - Noise cubes added to the clank area (negative), increasing your risk
      during dragon attacks.
   e) SPECIAL ABILITIES - Card-specific effects such as drawing extra cards,
      gaining gold, healing, or manipulating the dungeon row.
2. ACQUIRE CARDS - Spend accumulated Skill to buy cards from the dungeon row,
   adding them to your discard pile. More expensive cards are generally more
   powerful but may also generate more clank.
3. MOVE - Spend Boot points to move your pawn through connected rooms. Moving into
   an unexplored tunnel requires drawing and placing a new room tile, extending
   the dungeon. Some passages require keys, lockpicks, or swords to traverse.
4. INTERACT WITH ROOMS - Upon entering a room, resolve its effects: collect tokens
   (gold, artifacts, minor treasures), fight guardian monsters, discover secrets,
   or trigger traps.
5. DRAGON ATTACKS - Certain cards in the dungeon row and certain room effects
   trigger dragon attacks. When triggered, all clank cubes in the clank area are
   dropped into the dragon bag. A number of cubes are then drawn from the bag
   (escalating as the game progresses). Cubes matching a player's color deal one
   damage each; black cubes are misses.
6. END OF TURN - Discard all played cards and draw five new cards from your
   personal deck. If your deck is empty, shuffle your discard pile to form a
   new deck.

The game's objective is to descend into the catacombs, acquire an artifact (the
most valuable treasures, located in the deepest rooms), and escape back to the
surface before the dragon kills you. Players who escape with an artifact score
its value plus all other collected treasures and earn a 20-point Mastery token.
Players knocked out in the Depths or without an artifact score 0 points. Players
knocked out outside the Depths with an artifact still score normally. The game accelerates when the first player escapes: subsequent dragon
attacks grow dramatically more lethal, pressuring remaining players to flee.

### Key Design Patterns

NOISE-AS-RISK PROBABILITY ENGINE: The clank mechanic is a push-your-luck system
disguised as a deck builder. Every card you play and every action you take
potentially adds clank cubes to the shared pool. When a dragon attack occurs,
those cubes enter the bag permanently, increasing your statistical vulnerability
for the rest of the game. Crucially, the risk is cumulative and irreversible —
you cannot remove your cubes from the bag. This means early noise creates
compounding risk: a player who generates heavy clank in the first few turns is
more likely to be hit by every subsequent dragon attack. The design forces players
to weigh the immediate benefit of powerful (but noisy) cards against the long-term
cost of an increasingly hostile probability distribution. Deck-building decisions
are not just about engine efficiency; they are about noise profile management.

DEPTH-VERSUS-SAFETY TRADEOFF: The dungeon's vertical structure creates a clean
spatial risk curve. Shallow rooms contain minor treasures — small gold rewards
and modest artifacts. The most valuable artifacts are in the deepest rooms,
requiring more movement and more tile exploration to reach. But every room deeper
is another room farther from the exit, and the dragon grows more aggressive as
the game progresses. This creates a naturally self-balancing difficulty curve:
ambitious players who push deep are rewarded with better loot but face longer
return journeys through increasingly dangerous conditions. Conservative players
who grab shallow artifacts and flee early sacrifice points for safety. The
tradeoff is not binary — the dungeon's procedural layout means that "deep" and
"far from the exit" are correlated but not identical, and lucky tile draws might
create shortcuts that change the risk calculus mid-game.

DECK BUILDING MARRIED TO SPATIAL EXPLORATION: Most deck builders are purely
economic — you build an engine to generate victory points or defeat challenges,
but the spatial component is absent. Clank!: Catacombs integrates the deck-building
engine with physical movement through a dungeon. Cards provide boots for movement,
swords for combat, and skill for purchasing — and you need all three in varying
proportions depending on your position in the dungeon and your current objectives.
A deck optimized for purchasing power is useless if you cannot move to where the
treasures are. A deck full of movement is wasted if you cannot fight the guardians
blocking the best rooms. This marriage forces deck construction to be responsive
to the emergent board state rather than following a pre-planned archetype, and it
creates a feedback loop where your dungeon position influences your card purchases,
which influence your future dungeon capabilities.

TILE-BASED PROCEDURAL DUNGEON GENERATION: Each room tile is drawn randomly from
a shuffled stack, and the exploring player places it connecting to their current
position. Tiles vary in their connections (number and direction of exits),
contents (treasures, monsters, market stalls, healing springs), and terrain
(locked doors, crystal caverns, flooded passages). The procedural generation
means no two games share the same dungeon layout, eliminating memorized optimal
paths and forcing adaptive play. It also creates emergent narrative: a dungeon
that branches widely in one game might be a narrow linear corridor in another,
and the tile-placement decisions of early explorers shape the strategic landscape
for everyone. Players who explore aggressively gain information and first access
to rooms, but also build the map that opponents will use.

DRAGON ATTACKS AS ESCALATING TIMER: The dragon attack mechanism serves as the
game's pacing clock, and it escalates in two ways. First, the number of cubes
drawn from the bag increases as the game progresses — later attacks are more
dangerous because more cubes are pulled. Second, the bag accumulates more player
cubes over time as actions generate clank. The combined effect is an exponential
risk curve: early attacks are mild (few cubes drawn, sparse player cubes in bag),
while late attacks are devastating (many cubes drawn, dense player cubes in bag).
This escalation creates urgency without a fixed turn limit — the game does not end
after round N, but the probability of survival decreases continuously. The design
also features a final acceleration when a player escapes: the dragon becomes
enraged, drawing maximum cubes every turn, which pressures remaining players
intensely. The escape of one player is not just their success — it is a mortal
threat to everyone still underground.

DUNGEON ROW AS SHARED MARKET WITH ENVIRONMENTAL EFFECTS: The six-card dungeon row
from which players purchase cards also generates game events. Some cards in the row
have arrival effects (spawning monsters or triggering dragon attacks when they
appear), and monster cards in the row can be defeated for rewards rather than
purchased. The dungeon row thus functions as both an economic market and a threat
generator — browsing the available cards reveals not just purchasing options but
incoming dangers. This dual function keeps the market spatially relevant: a card
that triggers a dragon attack matters more when your clank pool is large, and a
monster in the row might be worth defeating for its gold reward if you are near
the exit and ready to flee.

ESCAPE TRIGGER AS COMPETITIVE PRESSURE: The first player to escape the dungeon
with an artifact triggers an escalation that threatens everyone still underground.
This creates a racing dynamic layered on top of the exploration and deck-building
systems. Players must constantly assess not just their own position but their
rivals' proximity to the exit. A player deep in the dungeon when an opponent is
near the surface faces a stark choice: grab one more treasure and risk annihilation,
or abandon loot and sprint for safety. The escape trigger converts a largely
parallel game into a sharply competitive one in its final minutes, ensuring that
the ending is always tense regardless of how the earlier exploration played out.

### What Makes It #53

Clank!: Catacombs achieves something rare in the deck-building genre: it makes
the cards serve a spatial purpose rather than an economic one. The procedurally
generated dungeon means that deck construction cannot follow a predetermined plan
because the dungeon itself is unpredictable. The clank mechanism adds a risk
dimension that most deck builders lack — every card you add to your deck carries
not just a power level but a noise profile, and the cumulative noise feeds a
probability engine that grows more punishing over time. The depth-versus-safety
tradeoff gives every game a natural dramatic arc, from cautious early exploration
through aggressive deep-dungeon looting to the frantic sprint for the exit. And
the escape trigger ensures that the endgame is always a race, converting the
cooperative-feeling exploration phase into a sharply competitive finale. Dennen's
design demonstrates that deck building has untapped potential as a spatial
mechanic, not just an economic one.
