# Magic: The Gathering

## Quick Stats

- **Players:** 2-6
- **Time:** 20 min
- **Weight:** 3.28/5

## Mechanics

- Betting and Bluffing
- Closed Drafting
- Deck Construction
- Hand Management
- Income
- Interrupts

## Categories

- Card Game
- Collectible Components
- Fantasy
- Fighting

## Rulebook

See `rulebooks/166-magic-the-gathering.pdf`

## Design Notes

Designer: Richard Garfield. Published by Wizards of the Coast (1993).

### Theme Integration

Magic: The Gathering casts players as planeswalkers --- powerful mages who
traverse the multiverse, summoning creatures and casting spells drawn from
five distinct colors of mana. Each color represents a philosophical worldview
and a style of magic: White for order and community, Blue for knowledge and
manipulation, Black for ambition and death, Red for chaos and impulse, Green
for nature and growth. This is not decorative flavor. The color system is the
game's deepest structural commitment, determining which cards can be played
together, what strategies are available, and how decks are constructed. A
player choosing to build a Red-Black deck is not merely selecting a color
palette; they are choosing aggression and sacrifice over control and patience.
The five-color wheel creates a taxonomy of play styles that has proven
endlessly generative across three decades of card design.

The land system ties mana production to the physical metaphor of place. Plains
produce White mana, Islands produce Blue, Swamps produce Black, Mountains
produce Red, Forests produce Green. A planeswalker's power grows as they
establish connections to more lands --- mechanically, as players play one land
per turn from their hand, their mana base expands and they can cast
increasingly powerful spells. This creates a natural power curve within each
game: early turns feature small creatures and cheap spells, while late turns
unleash devastating effects. The land-as-resource system also introduces the
game's most controversial design element --- mana screw and mana flood ---
where drawing too few or too many lands can cripple a player regardless of
skill. Garfield has defended this variance as essential: it gives weaker
players hope, creates dramatic reversals, and ensures that no game is
predetermined by deck quality alone.

The combat system models magical warfare through an attacker-defender dynamic
where the defending player chooses how to block. Creatures have power
(damage dealt) and toughness (damage absorbed), and the defender assigns
blockers, creating a bluffing dynamic around combat tricks --- instant-speed
spells that can alter the outcome after blockers are declared. This asymmetry
between attacker choice and defender response generates rich tactical
decision-making in every combat step, rewarding players who read their
opponent's open mana and available cards.

### Core Loop

Magic uses a structured turn sequence with multiple phases, each containing
priority windows where either player may cast instant-speed spells or
activate abilities.

1. BEGINNING PHASE --- Three steps occur automatically:
   a) Untap Step: All tapped (exhausted) permanents are untapped, restoring
      resources. No player may cast spells during this step.
   b) Upkeep Step: Triggered abilities that occur "at the beginning of your
      upkeep" resolve. Players receive priority to cast instants.
   c) Draw Step: Draw one card from the library. Players receive priority.

2. FIRST MAIN PHASE --- The active player may play one land from their hand
   (if they have not yet played a land this turn). They may cast any number
   of spells --- creatures, sorceries, enchantments, artifacts, planeswalkers
   --- by paying their mana costs. Sorcery-speed spells can only be cast
   during main phases.

3. COMBAT PHASE --- Five steps:
   a) Beginning of Combat: Priority window before attackers are declared.
   b) Declare Attackers: Active player chooses which creatures attack.
      Attacking creatures are tapped.
   c) Declare Blockers: Defending player assigns their creatures to block
      attacking creatures. Multiple blockers may be assigned to one attacker.
   d) Combat Damage: Damage is dealt simultaneously. Creatures with damage
      equal to or exceeding their toughness are destroyed.
   e) End of Combat: Final priority window; "at end of combat" triggers
      resolve.

4. SECOND MAIN PHASE --- Identical rules to the first main phase. Strategically,
   players often cast creatures here (after combat) to avoid revealing
   information before attacks.

5. ENDING PHASE --- Two steps:
   a) End Step: "At the beginning of the end step" triggers resolve. Final
      priority window for both players.
   b) Cleanup Step: Active player discards down to maximum hand size (7).
      Damage is removed from all creatures.

The game ends when a player's life total reaches 0 (from an initial 20),
when a player attempts to draw from an empty library, or when a card effect
specifies an alternative win or loss condition.

### Key Design Patterns

COLLECTIBLE METAGAME AS DESIGN LAYER: Garfield's most radical innovation was
not any single game mechanism but the idea that the game exists at two levels
--- the played game and the collection game. Players acquire cards through
randomized booster packs and build decks from their personal collection before
sitting down to play. Deck construction is a design exercise: choosing 60+
cards that work together coherently, balancing mana curve, threat density,
and answers to opposing strategies. The metagame of deck construction became
as strategically rich as the game itself, spawning entire communities devoted
to deck technology, format innovation, and competitive analysis. This two-layer
design --- build, then play --- was unprecedented in 1993 and created the
entire collectible card game genre.

STACK-BASED PRIORITY SYSTEM: Magic's rules engine uses a last-in-first-out
stack where spells and abilities wait to resolve. When a player casts a spell,
the opponent receives priority to respond before it resolves. If the opponent
responds with their own spell, the original caster receives priority again.
This creates a recursive interaction model where a single combat trick can
provoke a chain of responses and counter-responses. The stack transforms every
decision point into a potential conversation between players, and mastery of
priority --- knowing when to act and when to hold --- is the mark of expert
play. The system allows for deep strategic interaction without requiring
simultaneous decision-making.

MANA CURVE AS TEMPO DESIGN: Because spells cost mana and players gain access
to one additional land per turn, there is a natural progression from cheap
spells to expensive ones. Deck builders must design their mana curve ---
the distribution of card costs --- to ensure they have relevant plays at
every stage of the game. A deck with too many expensive cards will do nothing
in early turns; one with too few will run out of impact in late turns. The
mana curve concept has influenced game design far beyond Magic, becoming a
foundational principle in any game where resources accumulate over time.
Garfield's insight was that the resource system itself could create a built-in
dramatic arc from opening skirmish to climactic finale.

COLOR IDENTITY AS CONSTRAINT ARCHITECTURE: The five-color system constrains
deck construction by requiring specific land types to cast colored spells.
Playing more colors increases access to powerful cards but decreases
consistency, since the probability of drawing the right land for any given
spell diminishes. Mono-color decks are consistent but narrow; five-color decks
are versatile but unreliable. This constraint creates an entire strategic
axis --- color commitment --- that intersects with every other deck construction
decision. The color wheel also encodes mechanical identity: Blue gets
counterspells and card draw, Red gets direct damage and haste, Black gets
creature destruction and life payment. Designers use color as a balancing
framework, ensuring that no single color has access to every tool.

INSTANT-SPEED INTERACTION AS BLUFFING FRAMEWORK: The priority system allows
players to hold mana open during the opponent's turn to cast instant-speed
spells. An opponent who sees untapped Islands must consider whether the Blue
player is holding a counterspell. Untapped Plains might mean a combat trick.
This transforms open mana into information --- or misinformation. Experienced
players will sometimes leave mana open with no intention of casting anything,
bluffing a response they do not hold. The instant-speed framework converts
a turn-based game into one with continuous interaction, where the threat of
action is as strategically important as action itself.

THE COMPREHENSIVE RULES AS LIVING SYSTEM: Magic's rules have grown into a
document exceeding 200 pages, governing thousands of unique card interactions.
This is not bloat but a deliberate design choice: individual cards can break
or modify the rules, and the comprehensive rules exist to adjudicate
conflicts. "Cards trump rules" is a foundational principle --- a card that
says "you may play an additional land this turn" overrides the one-land-per-
turn rule. This architecture allows designers to print cards that create
novel gameplay experiences without redesigning the core system. It is a
framework for extensibility, and it has sustained thirty years of continuous
new content without requiring a system reboot.

RESOURCE VARIANCE AS DRAMA ENGINE: The land system introduces meaningful
variance into every game. Drawing too few lands (mana screw) or too many
(mana flood) creates dramatic underdog narratives and prevents games from
becoming deterministic matchup calculations. While competitive players often
criticize this variance, Garfield designed it intentionally: it ensures that
even lopsided matchups produce occasional upsets, keeps games unpredictable
despite extensive deck optimization, and creates memorable stories. The
variance is not a bug but a design commitment to the idea that games should
surprise their players.

### What Makes It #166

Magic: The Gathering is the most commercially successful and competitively
played card game in history, and its placement at #166 on BGG reflects the
tension between historical significance and modern design sensibilities.
Garfield invented the collectible card game, the metagame of deck
construction, and the stack-based priority system that enables real-time
strategic interaction in a turn-based framework. Every card game designed
since 1993 exists in Magic's shadow. Its ranking is depressed by the
pay-to-compete perception of the collectible model, by the mana variance
that frustrates competitive players, and by the sheer volume of content
that makes the game intimidating to new players. But Magic's enduring
presence --- three decades of continuous play, millions of active players,
and a competitive circuit that fills stadiums --- testifies to the robustness
of Garfield's original design. The game proved that a single rules framework
could support infinite content expansion, and that the act of building a
deck could be as engaging as playing one.
