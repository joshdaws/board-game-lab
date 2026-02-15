# Scythe

## Quick Stats

- **Players:** 1-5
- **Time:** 115 min
- **Weight:** 3.45/5

## Mechanics

- Area Majority / Influence
- Card Play Conflict Resolution
- Contracts
- End Game Bonuses
- Force Commitment
- Grid Movement
- Variable Player Powers

## Categories

- Economic
- Fighting
- Science Fiction
- Territory Building

## Rulebook

See `rulebooks/26-scythe.pdf`

## Design Notes

Designer: Jamey Stegmaier. Published by Stonemaier Games (2016).

### Theme Integration

Scythe is set in an alternate 1920s Eastern Europe where the embers of a great war
still smolder and agrarian societies coexist uneasily with diesel-punk mechs left
behind by a mysterious city-state called the Factory. The theme is not a war game
dressed in Euro clothing — it is an engine-building game where the ever-present
*possibility* of war shapes every decision. Five factions (Nordic, Rusviet, Crimea,
Saxony, Polania) each carry distinct cultural identities that are mechanically
expressed: the Nordic Kingdom crosses rivers early, reflecting Scandinavian seafaring
tradition; Crimea can spend combat cards as resources, reflecting nomadic
resourcefulness; Polania gains extra encounter options, reflecting diplomatic
flexibility. The mechs are not primarily weapons — they are infrastructure, unlocking
movement abilities and territorial reach. Encounters are narrative vignettes
presented as three-option choice cards, grounding the alternate-history world in
human-scale decisions: do you help the local farmers, intimidate them, or trade
with them? The popularity track — representing your faction's standing among the
populace — is the game's moral compass. Displacing workers costs popularity, and
popularity directly multiplies your end-game wealth. You can wage war, but the
people remember.

### Core Loop

On each turn, a player performs one action:

1. CHOOSE SECTION - Move your action token to a different section on your player
   mat (you cannot repeat the same section consecutively). Each mat has four
   sections, each pairing one top-row action with one bottom-row action.
2. TOP-ROW ACTION (optional) - Perform one of four:
   a) MOVE - Move up to 2 units (character, mechs, or workers) across territories.
      Workers cannot move into opponent-occupied territories. Mechs and characters
      entering opponent spaces trigger combat.
   b) BOLSTER - Gain Power on the Power Track and/or draw Combat Cards.
   c) TRADE - Pay 1 coin to gain 2 resources of your choice, or pay 1 coin to
      increase Popularity by 1.
   d) PRODUCE - Choose up to 2 territories you control with workers. Each worker
      on those territories produces 1 resource matching the terrain type.
3. BOTTOM-ROW ACTION (optional) - Perform one of four (each requires paying
   resources):
   a) UPGRADE - Move a cube from a top-row action to a bottom-row action,
      improving both: the top-row action becomes more efficient, the bottom-row
      action becomes cheaper.
   b) DEPLOY - Place a mech on the board, unlocking a faction-specific ability.
   c) BUILD - Place a structure on a territory, gaining a permanent benefit.
   d) ENLIST - Place a recruit star on a bottom-row action, gaining an ongoing
      bonus whenever you OR your neighbors take that bottom-row action.

Game end: When any player places their 6th star on the Triumph Track (from
completing objectives such as deploying all mechs, building all structures,
enlisting all recruits, winning combat, reaching maximum power, reaching maximum
popularity, completing objective cards, or deploying all workers), the game
ends immediately. Final scoring: coins in hand + (stars x popularity multiplier) +
(territories x popularity multiplier) + (resources x popularity multiplier).
The popularity track has three tiers that dramatically scale the multiplier.

### Key Design Patterns

PLAYER MAT / FACTION MAT COMBINATORICS: Every player receives two mats — a faction
mat (asymmetric special abilities) and a player mat (action layout and costs). The
faction mats are fixed in their powers, but the player mats are randomly paired with
factions each game. Because each player mat arranges the four top-row and four
bottom-row actions in different pairings and at different costs, the same faction
plays dramatically differently depending on which player mat it receives. A faction
that wants to Deploy mechs aggressively will have a very different early game if
Deploy is paired with Move (synergistic) versus Trade (awkward). This combinatorial
setup space generates enormous replayability from a small component set, and
tournament data confirms remarkable balance across pairings — no single combination
dominates.

CONSECUTIVE-ACTION BAN AS TEMPO REGULATOR: The rule that you cannot place your
action token on the same section two turns in a row is the game's most elegant
constraint. It prevents players from spamming optimal actions and forces them to
develop multiple strategic lines simultaneously. If Produce is your most valuable
action, you must find something productive to do on alternating turns. This creates
a natural rhythm — players develop in waves rather than straight lines, and the
interleaving of actions prevents any single strategy from snowballing without
checks. It also keeps turn length short and predictable, since players are always
choosing from three sections rather than optimizing freely.

TOP-ROW / BOTTOM-ROW PAIRING AS EMBEDDED DILEMMA: The core tension of each turn is
not which action to take — it is which *pair* of actions to take. A player wants
to take a specific bottom-row action (say, Deploy), but the top-row action on that
section might be suboptimal for the current board state. The Upgrade action exists
partly to ease this tension over time: by moving cubes, you make top-row actions
more efficient and bottom-row actions cheaper, gradually reshaping your mat's
economy. This pairing system means that the strategic plan ("I need to deploy mechs")
is always mediated by the tactical reality ("but that means I have to Trade this
turn when I'd rather Move"). Planning two or three turns ahead — anticipating the
cascade of forced pairings — separates strong play from reactive play.

COMBAT AS DETERRENT RATHER THAN ENGINE: Scythe is sometimes called "multiplayer
solitaire with teeth," and the combat system explains why. Combat uses simultaneous
sealed bids from a Power dial (0-7) plus optional Combat Cards. Total information
is hidden. The loser retreats all units to their home base and the winner gains a
star (but only their first two combat victories earn stars). This design creates
three key dynamics. First, combat is *expensive* — spending Power and Combat Cards
depletes resources that are slow to rebuild. Second, it is *risky* — the hidden
bid means you can waste resources overbidding or lose critical territory by
underbidding. Third, displacing workers costs the *aggressor* popularity, which
multiplies end-game scoring. The result is that combat functions primarily as
deterrence. Players invest in military capacity to deter attacks rather than to
launch them. When combat does occur, it is typically decisive and rare — targeted
strikes for specific objectives rather than attritional warfare. The design makes
"peace through strength" a viable and common strategy without ever removing the
genuine threat of conflict.

POPULARITY AS HUMANITARIAN MULTIPLIER: The popularity track is Scythe's most
distinctive scoring innovation. It does not score points directly — it *multiplies*
points across all three end-game categories (stars, territories, resources). The
track has three tiers: 0-3 (lowest multiplier), 4-6 (middle), and 7-18 (highest).
At the highest tier, each star is worth 5 coins instead of 3; each territory is
worth 5 instead of 3. This creates a nonlinear incentive structure where the
marginal value of crossing a tier boundary is enormous. Critically, the primary
way to *lose* popularity is through aggression — forcing workers off territories
during combat. This makes military expansion self-limiting: you can conquer
territory (which scores), but if doing so drops your popularity tier, the
multiplier penalty may exceed the territorial gain. Popularity thus functions as
a built-in balancing mechanism that constrains runaway militarism without
prohibiting it.

THE FACTORY AS GEOGRAPHIC MAGNET: The Factory sits at the center of the map, and
reaching it rewards the first arrivals with a powerful bonus action card that
effectively gives a fifth action section. The Factory also counts as three
territories for end-game scoring. This central prize creates geographic tension
in a game that might otherwise encourage turtling. Players must balance efficient
engine-building in their home territory against the strategic value of pushing
toward the center. The Factory also forces proximity between factions, increasing
the likelihood of the combat encounters that the deterrence system is designed to
regulate. It is a spatial incentive that pulls players out of their comfort zones.

ENLIST AS NEIGHBOR AWARENESS SYSTEM: The Enlist mechanic grants you a one-time
bonus and an ongoing reward that triggers whenever you OR your left/right neighbors
take the corresponding bottom-row action. This is an underappreciated design
achievement: it mechanically forces players to pay attention to what their neighbors
are doing. In a game that might otherwise trend toward solitary optimization, Enlist
creates direct economic coupling between adjacent players. If your left neighbor
is aggressively Upgrading, enlisting on the Upgrade action turns their engine into
fuel for yours. This creates a second-order strategic consideration — your enlist
choices should reflect not just your own plan but your read of your neighbors'
strategies.

SIX-STAR TRIGGER AS CONTROLLED ENDING: The game ends when any player places their
6th star, but that player does not necessarily win — final scoring determines the
winner. This creates a classic "trigger vs. optimize" tension. A player rushing
to end the game must ensure their scoring position is strong enough to survive the
final count. Meanwhile, players with slow-developing but high-scoring positions
want to delay the game's end. The six possible star categories (combat wins,
objectives, upgrades, mechs, structures, recruits, workers, power, popularity)
offer enough variety that different strategies can complete six stars at different
rates. The trigger player has agency over timing but not over everyone's scores,
preventing the runaway leader problem common in games where the first to finish
wins.

ENCOUNTER CARDS AS WORLD-BUILDING DECISIONS: When a player's character lands on
an encounter token, they draw a card offering three options — typically ranging
from generous-but-costly to modest-but-free. These are not random events; players
choose from a menu, and the options often present thematic dilemmas (share food
with villagers for popularity, or seize it for resources). The encounters serve
dual purposes: they provide catch-up resources for players who invest in
exploration, and they inject narrative texture into what is fundamentally an
efficiency engine. The three-option structure avoids the frustration of purely
random events while still creating moments of surprise and story.

### What Makes It #26

Scythe's achievement is making a Euro-style engine builder feel like a geopolitical
drama. The player mat system — with its consecutive-action ban and top-row /
bottom-row pairings — creates a tight optimization puzzle that rewards planning
several turns ahead. The faction/mat combinatorics provide deep replayability from
a constrained component set. But what elevates Scythe beyond a pure efficiency
exercise is the ever-present shadow of conflict. Combat is rare yet decisive, and
the popularity multiplier ensures that aggression carries real economic cost. The
result is a game where military investment functions primarily as deterrence, where
territorial boundaries are negotiated through implicit threat rather than explicit
warfare, and where the decision to cross from peaceful engine-building into combat
is always a weighty strategic commitment. The Factory pulls players toward the
center; the popularity track pulls them toward restraint; the star trigger pushes
them toward completion. Scythe lives in the tension between these competing forces,
producing a game that looks like a war game but plays like a cold war.
