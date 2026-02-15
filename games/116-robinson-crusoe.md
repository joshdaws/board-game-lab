# Robinson Crusoe: Adventures on the Cursed Island

## Quick Stats

- **Players:** 1-4
- **Time:** 60-120 min
- **Weight:** 3.83/5

## Mechanics

- Action Queue
- Cooperative Game
- Dice Rolling
- Events
- Hexagon Grid
- Map Addition
- Narrative Choice / Paragraph
- Scenario / Mission / Campaign Game
- Solo / Solitaire Game
- Tile Placement
- Variable Player Powers
- Worker Placement

## Categories

- Adventure
- Exploration
- Fighting
- Novel-based
- Territory Building

## Rulebook

See `rulebooks/116-robinson-crusoe.pdf`

## Design Notes

Designer: Ignacy Trzewiczek. Published by Portal Games (2012).

### Theme Integration

Robinson Crusoe is one of the most narratively committed cooperative games ever
designed. Rather than abstracting survival into a resource puzzle, the game
embeds its mechanics in the physical and psychological reality of being stranded
on an uncharted island. Players take roles as castaways — Carpenter, Cook,
Explorer, Soldier — each with unique Determination skills that reflect genuine
survival competencies. The Carpenter can stretch wood supplies through
Economical Construction; the Cook can conjure food from determination alone via
Stone Soup; the Explorer scouts ahead and rerolls exploration dice. These are
not generic bonuses but abilities that tell stories about who these people are
and what they know.

The weather system transforms the island from a passive setting into an active
antagonist. As rounds progress, weather dice escalate from nothing to rain,
winter clouds, and hungry animal attacks. Players must build Shelter, then Roof,
then Palisade — a progression that mirrors the real priorities of wilderness
survival with uncanny accuracy. Food rots overnight unless you build a Cellar.
Sleeping without shelter causes wounds. The Night phase — where players eat,
move camp, and suffer consequences of inadequate preparation — is where the
theme hits hardest, because it forces players to confront everything they failed
to anticipate during the day.

The scenario system recontextualizes the entire island. The base scenario
("Castaways") tasks players with building a signal fire and a wood pile to
attract rescue. Other scenarios add volcanoes, cannibals, curses, and King Kong.
Each scenario changes the meaning of the Book icon on Event cards, the Totem
icons on island tiles, and the victory conditions — making the same physical
components tell different stories. The game is less a fixed system and more a
survival narrative engine.

### Core Loop

Each round proceeds through six phases, spanning one day and night on the island:

1. EVENT PHASE (skipped in Round 1) — Draw from the Event deck and resolve
   its immediate Event effect. If the card has an Adventure icon, place a
   token on the corresponding action field. If it has a Book icon, resolve the
   scenario-specific effect. Place the card on the rightmost Threat Action
   space, pushing older threats toward resolution. If a card slides off the
   board, its Threat effect triggers immediately.
2. MORALE PHASE — Check the Morale track. High morale grants the First Player
   bonus Determination tokens or healing. Low morale forces discarding
   Determination tokens; if you cannot, take Wounds for each shortfall.
3. PRODUCTION PHASE — Gather resources from the island tile where your Camp
   is located. Each source icon on the Camp tile produces one resource cube
   (wood or food).
4. ACTION PHASE — The core decision space. Players assign their 2 pawns
   (plus any additional pawns from items or discoveries) to seven possible
   actions: Threat Action (resolve Event cards to prevent their delayed
   effects), Hunting (fight beasts for food and fur), Building (construct
   Shelter, Roof, Palisade, Weapons, or Inventions), Gathering Resources
   (collect from adjacent explored tiles), Exploration (reveal new island
   tiles), Arranging the Camp (gain Determination tokens and Morale), or
   Rest (heal 1 Wound). Actions taken with only 1 pawn require rolling
   Action dice — risking Wounds, failure, or Adventure card draws. Actions
   with 2 pawns succeed automatically.
5. WEATHER PHASE — Roll Weather dice as specified by the scenario for the
   current round. Winter Clouds consume wood for heating. Rain and Cloud
   totals exceeding the Roof level cost food, wood, and eventually Wounds.
   Hungry Animals may attack, requiring food sacrifice or beast combat.
   Storm tokens reduce the Palisade level.
6. NIGHT PHASE — Each player eats 1 food (failure: 2 Wounds). Players may
   move Camp. Without Shelter on a tile with Shelter, players take 1 Wound
   for sleeping in the open. Uneaten food rots unless stored. Advance the
   Round marker and pass the First Player token.

### Key Design Patterns

RISK-VS-CERTAINTY PAWN ALLOCATION: The foundational decision in Robinson Crusoe
is whether to commit 1 or 2 pawns to each action. With 2 pawns, the action
automatically succeeds. With 1 pawn, you roll three Action dice — a Wound die
(50% chance of injury), a Success die (50% chance of failure yielding
Determination tokens instead), and an Adventure die (50% chance of drawing an
Adventure card with cascading consequences). This system forces players to
constantly weigh the cost of certainty against the cost of spreading thin. Two
pawns guarantee success but halve your throughput for the round. One pawn
doubles your capacity but introduces compounding risks. The dice are not
arbitrary randomness — they model the real-world truth that doing anything alone
in the wilderness is dangerous and unpredictable.

CASCADING EVENT SYSTEM: Event cards are not resolved and discarded — they enter
a Threat Action queue on the board, sliding leftward each round. If players do
not assign pawns to resolve the Threat Action before the card slides off the
board, its Threat effect triggers automatically. Meanwhile, some Event cards
also shuffle Adventure cards back into the Event deck, creating deferred
consequences that surface rounds later. A storm Event might place a weather
token that worsens the next Weather phase, while its Adventure card — drawn
during a future action — might collapse part of your shelter. The game
constructs narrative arcs from these chains: a decision to ignore a threat
today creates a crisis tomorrow that was seeded by an action last week.

INFRASTRUCTURE DEPENDENCY CHAIN: Survival requires building in a specific order
that mirrors real wilderness priorities. Shelter must come first — without it,
every Night phase wounds the entire team. Roof must come second — without it,
weather is devastating. Palisade protects against storms and animal attacks.
Weapons improve hunting success. Each level of each structure costs resources
that scale with player count. Inventions layer on top: you need a Knife (which
requires specific terrain) to build a Bow (which requires the Knife), and a Map
to build a Shortcut. This dependency chain means that early-game decisions about
what to build first have enormous downstream consequences. Neglecting Shelter to
rush Exploration can be fatal; over-investing in defense means starvation.

EXPLORATION AS PERMANENT WORLD-BUILDING: When players successfully explore,
they draw an island tile from the stack and permanently place it on the hex
grid. Each tile reveals terrain type, resource sources, and special features
(Beast card icons, Mystery icons, Discovery tokens, or pre-built Shelter).
Critically, the terrain type of newly discovered tiles unlocks Inventions — you
cannot build items requiring Mountain terrain until you discover mountains. This
means the map is not just a movement space but a technology gate. Exploration
also extends the range of Gathering actions and may provide strategic
positioning for Camp movement. The tension between exploring (expanding
possibilities) and gathering from known tiles (exploiting current resources) is
a classic explore-exploit dilemma made physical.

CAMP LOCATION AS STRATEGIC ANCHOR: The Camp tile determines which resources
Production provides automatically each round, which tiles are accessible for
Gathering without extra pawn costs, and where Shelter/Roof/Palisade are
effective. Moving Camp is possible during the Night phase but incurs real costs:
Roof and Palisade levels drop, the Shortcut token is lost, and resource tokens
on the old tile become inaccessible. Camp placement decisions are therefore
semi-permanent commitments with cascading consequences. A tile rich in food
sources saves Gathering actions but may lack wood for building. A centrally
located tile enables Exploration in multiple directions but may lack any
resources at all.

CHARACTER DETERMINATION SKILLS: Each character has unique skills that cost
Determination tokens — a personal currency earned through Arranging the Camp
action, certain Threat resolutions, and high Morale. The Carpenter spends
tokens to save wood, the Cook heals or creates food, the Explorer rerolls
action dice or scouts tiles, and the Soldier increases weapon levels or hunts
more effectively. Skills can be used once per round and create genuine role
differentiation beyond the generic pawn system. In a 2-player game, the
additional Friday character provides a helper pawn with simplified rules,
ensuring the action economy scales appropriately without adding a full
character's complexity.

SCENARIO-DRIVEN REPLAYABILITY: Seven scenarios in the base game fundamentally
alter the victory conditions, setup, and meaning of game symbols. The Castaways
scenario requires building signal fires; the Volcano scenario tasks players
with escaping before eruption; the Cannibal scenario introduces hostile
encounters on explored tiles. Each scenario modifies the number of rounds,
which Weather dice are rolled when, what the Book icon does, and which special
Inventions are available. This transforms Robinson Crusoe from a single game
into a framework that generates distinct survival narratives from shared
components.

UNFULFILLED DEMAND AS UNIVERSAL PUNISHMENT: When any game effect requires
players to pay something they cannot afford — discard food they do not have,
reduce a track already at zero, fight a beast they cannot match — each affected
player takes 1 Wound per unmet demand. This elegant rule unifies all punishment
into a single currency (Wounds) and creates a death-spiral dynamic where
falling behind makes survival progressively harder. It also means that every
obligation in the game is real — there are no "miss a turn" equivalents, only
physical harm to your character.

### What Makes It #116

Robinson Crusoe achieves something rare in cooperative design: it makes the
environment itself feel like the most dangerous opponent at the table. The
cascading Event system creates emergent narratives where a single ignored
threat unravels into catastrophe three rounds later. The risk-vs-certainty
pawn allocation forces players into the cooperative survival fantasy of
genuinely agonizing over whether to send someone out alone. The scenario
system gives the same physical components dramatically different narrative
purposes. And the Unfulfilled Demand rule ensures that every failure has
teeth — you cannot hide from consequences. The game is punishing, sometimes
brutally so, but the punishment feels earned rather than arbitrary. When your
group survives a scenario, it feels like a genuine accomplishment born from
collective decision-making under pressure. Robinson Crusoe is the definitive
cooperative survival game because it treats survival as genuinely difficult
and worth celebrating when achieved.
