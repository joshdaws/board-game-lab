# Marvel Champions: The Card Game

## Quick Stats

- **Players:** 1-4
- **Time:** 45-90 min
- **Weight:** 2.95/5

## Mechanics

- Card Play Conflict Resolution
- Cooperative Game
- Deck Construction
- Hand Management
- Interrupts
- Scenario / Mission / Campaign Game
- Tableau Building
- Variable Player Powers

## Categories

- Card Game
- Comic Book / Strip
- Fighting

## Rulebook

See `rulebooks/48-marvel-champions.pdf`

## Design Notes

Designers: Michael Boggs, Nate French, and Caleb Grace. Published by Fantasy Flight Games (2019).

### Theme Integration

Marvel Champions treats superhero identity not as a costume but as a mechanical
duality. Every hero has a double-sided identity card — one side is the hero
(Spider-Man, Iron Man, Captain Marvel), the other is the alter ego (Peter
Parker, Tony Stark, Carol Danvers). This is not cosmetic: each side has
different stats, different hand sizes, different abilities, and different
consequences during the villain phase. In hero form you can attack and thwart
but you draw the villain's aggression. In alter-ego form you can recover hit
points and access civilian-life abilities but the villain advances their scheme
unopposed. The flip between these two states is the game's central thematic
proposition: being a superhero means managing the tension between the person
and the power, and the game makes that tension mechanically binding rather than
narratively decorative.

Each hero's fifteen signature cards deepen this identity. Spider-Man's kit
features web-shooters, spider-sense interrupts, and acrobatic evasion — cards
that mechanically express agility and reactive defense. Iron Man builds his
suit across multiple turns, playing tech upgrades that ramp his power over
time — a slow start that rewards patience, mirroring Tony Stark's engineering
methodology. Black Panther channels Wakandan resources and ancestral guidance.
The signature cards are not interchangeable abilities reskinned with different
art; they are mechanical portraits of how each character fights, thinks, and
solves problems. The result is that choosing a hero is not choosing a stat
block but choosing a play style that feels faithful to decades of comic book
characterization.

### Core Loop

Each round alternates between a player phase and a villain phase, creating a
rhythm of proactive heroism followed by reactive crisis management:

1. PLAYER PHASE — Players take turns in sequence. On your turn you may perform
   any combination of the following actions in any order:
   a) PLAY CARDS — Play ally, upgrade, support, or event cards from your hand
      by paying their resource cost. Resources are generated primarily by
      discarding other cards from your hand — each card has resource icons
      indicating its value when spent as fuel. This creates the game's
      fundamental hand management tension: every card is simultaneously a
      potential ability and potential currency.
   b) USE BASIC POWERS — Exhaust your hero to perform a basic attack (deal
      your ATK value as damage to an enemy), a basic thwart (remove your THW
      value in threat from a scheme), or a basic recovery (heal your REC value,
      alter-ego only). Each requires exhausting your identity card, so you
      choose one basic action per turn.
   c) USE CARD ABILITIES — Activate abilities on allies, upgrades, and
      supports already in play. Allies can attack or thwart by exhausting,
      taking consequential damage each time they act — a built-in depreciation
      that prevents any single ally from dominating indefinitely.
   d) CHANGE FORM — Once per turn, flip your identity card between hero and
      alter-ego. This does not exhaust the card, but it changes your available
      abilities, your hand size for the upcoming draw, and how the villain
      will interact with you during their phase.

2. END OF PLAYER PHASE — All players simultaneously ready their exhausted
   cards and draw cards up to their current hand size (determined by whichever
   form they are in). The full hand refresh each round means there is no
   incentive to hoard — the game rewards spending everything every turn.

3. VILLAIN PHASE — The villain acts in a structured sequence:
   a) THREAT PLACEMENT — Threat tokens are added to the main scheme equal to
      the villain's scheme value, advancing the countdown toward the heroes'
      loss condition.
   b) VILLAIN ACTIVATION — The villain activates once per player. If the
      player is in hero form, the villain attacks them (dealing damage). If
      the player is in alter-ego form, the villain schemes instead (adding
      more threat). A boost card is dealt from the encounter deck to modify
      the attack or scheme value, injecting uncertainty into each activation.
   c) ENCOUNTER CARDS — Each player is dealt one or more encounter cards from
      the encounter deck, which may introduce minions, treachery effects, side
      schemes, or attachments that complicate the board state.

4. VICTORY OR DEFEAT — Players win by reducing the villain's hit points to
   zero across all villain stages. Players lose if the main scheme accumulates
   threat beyond its threshold and advances past its final stage. Individual
   heroes can be knocked out and may re-enter play, but if all heroes are
   eliminated simultaneously, the game ends in defeat.

### Key Design Patterns

IDENTITY DUALITY AS STRATEGIC OSCILLATION: The hero/alter-ego flip is Marvel
Champions' signature mechanical invention. It encodes a binary strategic
choice that ripples through every system in the game. In hero form you have
access to attack and thwart basic powers, you trigger hero-specific card
abilities, and you present a target for villain attacks. In alter-ego form
you can recover hit points, access alter-ego abilities (often card draw or
resource generation), and you are invisible to villain attacks — but the
villain schemes against you instead, accelerating the loss condition. The
flip is free and does not exhaust your identity, but it can only happen once
per turn, which prevents rapid toggling. This creates a cadence of
vulnerability and recovery that feels like the narrative rhythm of comic
books: heroes charge into danger, take hits, retreat to lick their wounds,
then return stronger. The different hand sizes on each side add another
dimension — alter-ego forms typically draw more cards, incentivizing a
retreat to the civilian identity to reload before the next offensive push.

ASPECT SYSTEM AS CONSTRAINED DECK CONSTRUCTION: Marvel Champions divides its
player card pool into four aspects — Aggression (direct damage and enemy
removal), Justice (threat removal and scheme control), Protection (damage
prevention and healing), and Leadership (ally generation and team
coordination). Each player chooses exactly one aspect to pair with their
hero's fifteen signature cards and a pool of neutral basic cards, building
a deck of 40 to 50 cards. This constraint is a masterful accessibility
decision. Traditional competitive LCGs allow unrestricted card pools, which
creates a deckbuilding barrier where new players face thousands of options.
The aspect system channels creativity into a four-lane highway: you must
commit to a role, and within that role you optimize. This simultaneously
reduces analysis paralysis for newcomers and creates meaningful cooperative
specialization — a Justice player handles scheme pressure while an
Aggression player focuses on eliminating minions. The aspects also function
as a replayability engine: every hero can be paired with any aspect, meaning
each hero effectively has four distinct play configurations before
considering individual card choices within each aspect.

CARDS AS DUAL-USE CURRENCY: The resource system in Marvel Champions is
deceptively simple and strategically profound. There is no separate resource
pool, no mana system, no income track. Instead, every card in your hand
can be discarded to generate resources (indicated by resource icons on the
card). To play a card, you discard other cards whose combined resource icons
meet or exceed the cost. This means every card in your hand exists in a
superposition — it is both a potential ability and potential fuel for a
different ability. The hand management tension this creates is the game's
primary strategic texture. Drawing a hand of five cards does not give you
five options; it gives you a combinatorial puzzle of which cards to play and
which to spend. High-cost cards are powerful but demand sacrificing more of
your hand. Low-cost cards preserve hand flexibility but may lack impact. The
full hand refresh at the end of each player phase prevents resource
accumulation across turns, which eliminates snowballing and ensures every
round presents a fresh puzzle rather than a continuation of compounding
advantage.

ENCOUNTER DECK AS VILLAIN AI: The encounter deck is the game's engine for
generating asymmetric opposition without requiring a human antagonist. Each
villain scenario has a modular encounter deck composed of the villain's
signature set, a scenario-specific set, and one or more modular encounter
sets that can be mixed and matched for variety. During the villain phase,
encounter cards are revealed to the players, introducing minions that must
be fought, treacheries that impose immediate penalties, side schemes that
divert heroic attention, and attachments that strengthen the villain. The
encounter deck also fuels the boost card mechanic — when the villain attacks
or schemes, a card is dealt from the encounter deck face-down, and its boost
icons modify the villain's value, creating uncertainty about the severity
of each activation. The modular encounter set system deserves particular
note: by swapping modules between games, players can tune difficulty and
variety without altering the core scenario, creating a customizable
challenge framework that extends replayability far beyond what a fixed
encounter deck would provide.

TABLEAU BUILDING AS HEROIC MOMENTUM: Allies, upgrades, and support cards
played from hand remain in play, forming a growing tableau that represents
the hero's expanding capabilities. Upgrades might be equipment (web-shooters,
vibranium armor), training (combat technique), or powers (energy absorption).
Supports represent ongoing resources or locations (Avengers Mansion, helicarrier).
Allies are fellow heroes who can attack, thwart, or absorb damage on your
behalf. The tableau creates a within-game progression arc: early turns are
spent investing in infrastructure (playing upgrades and supports), while
later turns harvest the compound value of those investments. This mirrors
engine-building patterns from Euro-style games but wrapped in superhero
narrative — assembling your gear, calling in allies, and fortifying your
position before the climactic confrontation. The consequential damage
mechanic on allies (they take damage each time they act) prevents the
tableau from becoming an unassailable fortress, ensuring that board
maintenance remains an ongoing concern rather than a solved problem.

THREAT AS TICKING CLOCK: The scheme/threat system is Marvel Champions'
primary pacing mechanism and the source of its cooperative tension. Threat
accumulates on the main scheme every villain phase, and if it crosses the
threshold the scheme advances — potentially triggering cascading penalties
or outright defeat. Side schemes, introduced through the encounter deck,
create additional threat targets that demand attention. The threat system
ensures that players cannot turtle behind defensive positions and simply
outlast the villain. Someone must be thwarting every round, which forces
role allocation within the team and creates constant pressure to balance
offense (reducing the villain's hit points) against defense (managing threat
levels). The threat mechanic also gives the hero/alter-ego flip its
strategic weight: every turn spent in alter-ego recovering health is a turn
where the villain schemes instead of attacking, trading physical safety for
scheme acceleration. This dual loss condition — defeat by damage or defeat
by scheme completion — prevents any single strategy from dominating and
forces adaptive play.

INTERRUPT AND RESPONSE TIMING AS COMIC BOOK PACING: Marvel Champions uses
a timing system of interrupts (triggered before a specified event resolves)
and responses (triggered after an event resolves) that allows heroes to
react to unfolding events with precise narrative timing. Spider-Man's
spider-sense triggers as an interrupt when attacked, reducing damage before
it lands. Captain America's shield can be used as a response to a completed
defense. This timing granularity creates moments of dramatic reversal that
mirror comic book action sequences — the villain swings, the hero dodges,
then counterattacks. For players, the interrupt/response system transforms
the villain phase from a passive damage-absorption exercise into an
interactive sequence where card play can alter outcomes, maintaining agency
even when it is not technically your turn.

LCG DISTRIBUTION AS ANTI-PREDATORY DESIGN: Marvel Champions uses the Living
Card Game model, where every product contains a fixed, known set of cards
with no randomized booster packs and no chase rares. Hero packs contain a
complete hero with all fifteen signature cards plus new aspect cards. Scenario
packs contain a complete villain encounter. This distribution model is a
deliberate design decision that shapes the play experience. It eliminates
the pay-to-win dynamic of collectible card games, where deck strength
correlates with spending. It ensures that every player who owns a hero pack
has the same tools as every other owner of that pack. And it makes
deckbuilding a creative exercise rather than a collection-completion
exercise. The core set includes five heroes, three villains, and a full
playset of every aspect card — a notable improvement over earlier FFG LCGs
that required multiple core sets for competitive deckbuilding. The LCG
model also enables the modular encounter design: because expansion contents
are known, designers can create interchangeable modules that assume specific
card availability, producing a combinatorial variety engine from a
deterministic product line.

### What Makes It #48

Marvel Champions succeeds by solving the fundamental tension of licensed
cooperative card games: how to make iconic characters feel mechanically
distinct without making the game inaccessible to players who are fans of
the IP rather than experienced gamers. The hero/alter-ego flip is the
keystone — a single mechanic that simultaneously creates strategic depth
(when to flip is the game's most consequential recurring decision), thematic
resonance (the dual life of a superhero becomes a dual mode of play), and
accessibility (the binary choice is instantly legible even to new players).
The aspect system channels deckbuilding complexity into four clear lanes
that encourage cooperative specialization without demanding encyclopedic
card knowledge. And the cards-as-currency resource system eliminates the
need for a separate economic subsystem, keeping the cognitive overhead low
while creating rich hand management puzzles.

The game's deeper achievement is structural. By combining a fixed hero
identity (fifteen signature cards that define who you are) with a flexible
aspect layer (the role you choose to play on the team) and a modular
encounter system (the villain scenario you face), Marvel Champions creates
a three-axis customization space that generates enormous replayability from
a modest set of components. Each axis can be varied independently — same
hero, different aspect; same aspect, different hero; same scenario,
different modular sets — producing a combinatorial variety that rewards
repeated play without requiring constant expansion purchases. The LCG
distribution model reinforces this by making every product a complete,
self-contained addition to the system rather than a partial fragment of a
collectible treadmill. The result is a cooperative card game that captures
the power fantasy of being a Marvel superhero while delivering genuine
strategic depth through hand management, identity timing, and collaborative
threat prioritization — accessible enough for a comic book fan picking up
their first card game, and deep enough to sustain hundreds of plays for
dedicated deckbuilders.
