# Kemet

## Quick Stats

- **Players:** 2-5
- **Time:** 90-120 min
- **Weight:** 3.00/5

## Mechanics

- Action Points
- Area Majority / Influence
- Area Movement
- Card Play Conflict Resolution
- Hand Management
- Open Drafting
- Tech Trees / Tech Tracks

## Categories

- Ancient
- Fantasy
- Mythology
- Wargame

## Rulebook

See `rulebooks/196-kemet.pdf`

## Design Notes

Designers: Jacques Bariot, Guillaume Montiage. Published by Matagot (2012).

### Theme Integration

Kemet is set in a mythologized ancient Egypt where rival factions of gods and
pharaohs wage war across the desert, commanding armies bolstered by legendary
creatures drawn from Egyptian mythology. The theme is not a veneer -- it is
structurally encoded into the game's technology system. The three power
pyramids (red, blue, white) correspond to three domains of Egyptian power:
military aggression, defensive fortification, and economic-spiritual
prosperity. Each power tile a player purchases represents a specific mythological
capability -- summoning a giant scorpion, invoking the protection of a sphinx,
channeling the abundance of the Nile. The technology system makes the theme
tactile: when you buy a creature tile, you place its miniature on the board
alongside your troops, visually and mechanically transforming your army's
identity.

The geography of Kemet reinforces the theme of Egyptian territorial conflict.
The board depicts a region surrounding a central temple complex, with
districts, obelisks, and pyramids distributed across contested terrain. The
map is deliberately compact, with teleportation obelisks connecting distant
territories. This spatial compression reflects the designers' core thesis:
Kemet is about attack, not defense. In historical Egyptian mythology, the
gods did not hide behind walls -- they rode into battle on the backs of
mythical beasts. The teleportation system ensures that no player can turtle
in a corner. Every territory is reachable from every other territory in a
single move, which means that military superiority is temporary and every
position is vulnerable. The board's geography mechanically enforces the
thematic mandate of constant, aggressive conflict.

The victory point system completes the thematic circle. Points are earned
primarily through attacking (not defending), controlling temples, and
advancing on technology tracks. A player who wins a defensive battle gains
nothing beyond retaining territory. A player who wins an offensive battle
earns a permanent victory point. This asymmetry between attack and defense
is Kemet's most distinctive thematic statement: in this mythological Egypt,
glory belongs to the aggressor. The gods reward those who march forward,
not those who cower behind walls.

### Core Loop

The game is played over a series of rounds, each following this structure:

1. NIGHT PHASE (Income and Reset)
   a. Each player receives Prayer Points (the game's currency) based on
      controlled territories, temples, and pyramid levels.
   b. Divine Intervention cards are drawn (one per player, distributed
      based on specific conditions).
   c. Turn order is determined by the player with the fewest victory
      points going first, providing a catch-up mechanism.

2. DAY PHASE (Actions) - Players take turns performing one action at a
   time in turn order. Each player has 5 action tokens per round, and
   each action can only be performed once per round unless upgraded.
   Actions include:
   a. PRAY - Gain Prayer Points (2 base, upgradeable).
   b. RAISE PYRAMID LEVEL - Spend Prayer Points to increase one of your
      three pyramids (red, blue, or white) by one level (max level 4).
      Pyramid level determines which power tiles you can purchase.
   c. BUY POWER TILE - Purchase a power tile from the available supply.
      The tile's level must not exceed your corresponding pyramid level.
      Each tile provides a permanent upgrade: creatures, combat cards,
      movement abilities, economic bonuses, or scoring modifiers.
   d. MOVE - Move one army (group of units) from one territory to an
      adjacent territory or through a teleportation obelisk. Moving into
      an occupied enemy territory initiates combat.
   e. RECRUIT - Place units from your reserve onto territories containing
      your pyramids, up to your army size limit.

3. COMBAT RESOLUTION - When armies collide, each player secretly selects
   a battle card from hand, adding its strength and special effects to
   their army's base strength (number of units plus creature bonuses).
   Cards are revealed simultaneously. Highest total strength wins. The
   loser's units are destroyed; the attacker gains 1 VP if victorious.
   Used battle cards are discarded until the player's entire hand is
   spent, then all cards are recovered.

4. END OF ROUND - Check if any player has reached the victory point
   threshold (typically 8-10 depending on player count). If not, begin
   a new round. Temporary victory points from temples are rechecked
   each round.

### Key Design Patterns

ATTACK REWARDED, DEFENSE NEUTRAL: Kemet's most radical design decision is
that only the attacker gains a victory point for winning combat. Defenders
who successfully repel an attack gain nothing beyond keeping their territory.
This single asymmetry transforms the entire strategic calculus of the game.
In most area-control games, players build defensive positions and wait for
opponents to overextend. In Kemet, waiting is losing. Every round you do not
attack is a round you do not score. This creates an aggressive tempo that
permeates every decision: technology purchases skew offensive, army
positioning prioritizes striking range, and Prayer Points are invested in
capabilities that enable attacks rather than fortifications. The generalizable
design principle is that asymmetric rewards for offense versus defense can
fundamentally shift a game's strategic personality from cautious to aggressive.

TECHNOLOGY PYRAMIDS AS BRANCHING UPGRADE PATHS: The three-color pyramid
system (red/blue/white) creates a branching technology tree where each color
represents a strategic philosophy. Red tiles emphasize military power and
combat bonuses. Blue tiles provide defensive abilities, movement upgrades,
and board control. White tiles grant economic advantages, Prayer Point
generation, and scoring modifiers. Each pyramid has four levels, and
purchasing higher-level tiles requires investing Prayer Points to raise
pyramid height first. This creates a commitment structure: pushing one
pyramid to level 4 gives access to the most powerful tiles in that color
but costs resources that could have been spread across multiple pyramids.
The technology system generates strategic diversity because the tile
combinations available at each pyramid configuration differ, and players
must build their strategy around the tiles they can access rather than
an idealized plan.

TELEPORTATION AS ANTI-TURTLE MECHANISM: Obelisks on the board allow
armies to teleport between distant territories, and the central temple
can be reached from any obelisk. This spatial design ensures that no
position on the board is safe from attack. A player who clusters forces
in one region can be struck from behind via teleportation. A player who
spreads thin to hold multiple territories is vulnerable everywhere. The
teleportation system eliminates the defensive advantage of geographic
isolation that plagues many area-control games, where corner positions
become impregnable strongholds. In Kemet, the map is functionally flat:
every point is adjacent to every other point through the obelisk network.
This forces constant vigilance and rewards mobility over fortification.

CARD PLAY COMBAT WITH DEPLETING HAND: Combat is resolved by simultaneously
revealing battle cards that add strength, apply special effects (casualties,
shields, damage), and sometimes grant Divine Intervention cards. Each
player has a hand of battle cards, and used cards are discarded until the
entire hand is spent, at which point all cards are recovered. This
depleting-hand mechanism creates a memory game within the combat system:
opponents can track which cards you have already played and deduce what
remains in your hand. Early in the cycle, your options are broad; late
in the cycle, your remaining cards are predictable. The system rewards
timing -- using your strongest card at the decisive moment rather than
wasting it on a minor skirmish. The design pattern is that a non-renewable
combat resource that periodically resets creates escalating tension within
each cycle and rewards strategic card conservation.

CREATURE TILES AS ARMY MODIFIERS: Purchasing a creature tile (Scorpion,
Phoenix, Sphinx, Mummy, and others) adds a powerful miniature to one of
your armies. Creatures provide combat strength bonuses, special abilities,
and often additional victory point opportunities. Each creature is unique
and limited to one copy, creating a race to acquire the most desirable
creatures. The creature system adds an asymmetric dimension to army
composition: two armies of equal size can have vastly different combat
power depending on their creature attachments. Creatures also serve a
narrative function -- a player marching across the desert with a giant
Scorpion tells a different story than one supported by a Royal Scarab,
and these identities emerge naturally from technology choices.

PRAYER POINTS AS UNIFIED CURRENCY: Prayer Points serve as Kemet's sole
currency, used for raising pyramid levels, buying power tiles, recruiting
units, and activating certain special abilities. This unified economy
means that every expenditure competes with every other expenditure. Buying
an expensive level-4 power tile means forgoing recruitment or pyramid
advancement. The single-currency design creates transparent tradeoffs:
players can always evaluate the opportunity cost of any purchase in terms
of the alternatives foregone. Prayer Point income scales with territorial
control and pyramid levels, creating a virtuous cycle where early
investment in infrastructure compounds into later purchasing power. The
design insight is that a single, visible currency creates clearer strategic
tradeoffs than multiple specialized resources, even if it reduces thematic
granularity.

CATCH-UP TURN ORDER: Turn order each round is determined by current
victory points, with the player who has the fewest points going first.
This catch-up mechanism ensures that the leading player always acts last,
giving trailing players first access to optimal attacks and territory
claims. The mechanism prevents runaway leaders without artificially
capping scoring, and it creates a subtle strategic consideration: gaining
a victory point might cost you first-player advantage next round, which
could be worth more than the point itself in certain board states.

TEMPORARY VERSUS PERMANENT VICTORY POINTS: Some victory points in Kemet
are permanent (earned from winning attacks, reaching technology thresholds)
while others are temporary (held temples that can be lost to enemy
conquest). This distinction creates a strategic tension between pursuing
permanent points through aggressive combat and holding temporary points
through territorial control. A player can appear to be leading due to
temple control, only to lose those points when opponents seize the
temples. The permanent/temporary split prevents any single strategy from
being dominant and ensures that the game remains contested until the
final victory point threshold is reached.

### What Makes It #196

Kemet is the area-control game that solved the turtle problem. By rewarding
attack and making defense pointless for scoring, by connecting the entire
board through teleportation, and by tying technology advancement to
aggressive creature deployment, Bariot and Montiage created a wargame
where passivity is the only losing strategy. The technology pyramid
system generates diverse strategic identities from a shared tile pool,
and the depleting battle card hand creates a memory-driven combat
system that rewards timing over raw power. Kemet proves that an area-control
game can be relentlessly aggressive without being chaotic -- every
battle is a calculated investment, every technology purchase shapes
future combat potential, and the catch-up turn order ensures that no
player is ever truly out of contention.
