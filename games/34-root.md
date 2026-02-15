# Root

## Quick Stats

- **Players:** 2-4
- **Time:** 60-90 min
- **Weight:** 3.84/5

## Mechanics

- Action Points
- Action Queue
- Action Retrieval
- Area Majority / Influence
- Area Movement
- Dice Rolling
- Hand Management
- Variable Player Powers

## Categories

- Animals
- Fantasy
- Negotiation
- Territory Building
- Wargame

## Rulebook

See `rulebooks/34-root.pdf`

## Design Notes

Designer: Cole Wehrle. Published by Leder Games (2018).

### Theme Integration

Root is a woodland wargame disguised in storybook art. Adorable foxes, rabbits,
mice, cats, birds, and raccoons are locked in a bitter struggle for control of a
vast forest — and the dissonance between the charming illustrations and the
ruthless power politics underneath is entirely deliberate. Wehrle has openly cited
the COIN (Counter-Insurgency) series of GMT wargames as his primary structural
influence, adapting the multi-faction asymmetric conflict model for a broader
audience by wrapping it in an approachable woodland theme. The result is a game
where each faction embodies a distinct political archetype: the Marquise de Cat
is the occupying imperial power, the Eyrie Dynasties are the ancien regime
attempting restoration, the Woodland Alliance is the grassroots insurgency, and
the Vagabond is the opportunistic individual agent operating outside factional
politics. These are not flavor distinctions — they are mechanical identities.
Each faction's rules, actions, economy, and victory path directly express its
narrative role, so that learning to play a faction and understanding its story
are the same activity. The clearing suits (Fox, Mouse, Rabbit) give the map a
demographic texture: different areas are home to different woodland peoples,
and controlling or sympathizing with them requires matching cards, tying hand
management to the fiction of political influence over specific communities.

### Core Loop

Root does not have a single shared turn structure. Each faction follows its own
sequence of phases, and these sequences differ radically. However, turns cycle
through players in clockwise order, and every faction's turn broadly consists
of three phases — Birdsong, Daylight, and Evening — whose contents vary per
faction:

**Marquise de Cat (The Establishment)**
1. BIRDSONG — Place one wood token at each sawmill.
2. DAYLIGHT — Craft cards using workshops; then take up to three actions from:
   Battle, March (move), Recruit (place warrior at recruiter), Build (place
   building in a ruled clearing), Overwork (spend a card to place extra wood).
   Field hospitals allow warriors removed in battle to return to the keep.
3. EVENING — Draw one card plus one per uncovered draw bonus on the building
   tracks. Discard down to five.

Scores by constructing buildings: each new building scores VP equal to the number
of that building type already on the map (1st = 0, 2nd = 1, 3rd = 2, etc.),
creating an accelerating curve.

**Eyrie Dynasties (The Programmed Regime)**
1. BIRDSONG — Add one or two cards from hand to the Decree (a tableau of four
   columns: Recruit, Move, Battle, Build). These are permanent commitments.
2. DAYLIGHT — Craft cards by activating roosts, then resolve every card in the
   Decree left to right, column by column.
   Each card requires the matching action to be performed in a clearing of that
   suit (Bird cards are wild). If any Decree action cannot be fulfilled, the
   government falls into Turmoil: lose VP, discard the Decree (except loyal
   viziers), select a new Leader with different starting Decree cards, and end
   the turn immediately.
3. EVENING — Score VP equal to the number of roosts on the map. Draw one card
   plus one per roost (max of five total minus cards in hand).

The Decree is a momentum engine: it grows every turn, making each subsequent turn
more powerful but also more fragile, since every committed action must execute
or the whole system collapses.

**Woodland Alliance (The Insurgency)**
1. BIRDSONG — Revolt: spend two supporter cards matching a sympathetic clearing
   to remove all enemy pieces there and place a base plus warriors. Spread
   Sympathy: spend supporter cards to place sympathy tokens in adjacent
   clearings.
2. DAYLIGHT — Craft using sympathy tokens; then Mobilize (add cards from hand
   to supporters), Train (spend a card matching a base to place an officer,
   increasing the number of military actions per turn).
3. EVENING — Military Operations (move, battle, recruit at bases, or organize
   new sympathy — limited by officer count); then draw one card plus one per
   uncovered draw bonus. Discard down to five.

Scores primarily by spreading sympathy: each new sympathy token scores VP on an
escalating track. The Alliance's Guerrilla War ability means that in combat as
the defender, the Alliance takes the higher die roll and the attacker takes the
lower — inverting the normal combat advantage and making attacking them costly.
When other factions remove Alliance sympathy or move warriors into sympathetic
clearings, the Alliance gains supporter cards, mechanically representing how
heavy-handed occupation fuels the insurgency.

**Vagabond (The Lone Agent)**
1. BIRDSONG — Refresh exhausted items equal to the number of items in the
   Vagabond's undamaged item pool. Slip (move without ruling restriction).
2. DAYLIGHT — Perform actions by exhausting items: Move (boot), Battle (sword),
   Explore ruins (torch), Strike (crossbow — remove a warrior without full
   battle), Aid (give cards to factions to improve relationships and score VP),
   Quest (discard matching cards in a clearing to score VP or draw cards),
   Craft (use hammers), Repair (use hammers to flip damaged items).
3. EVENING — Draw cards, then check relationships with each faction. If Hostile,
   the Vagabond scores VP for removing their warriors in battle.

The Vagabond plays what amounts to an action-RPG within the strategy game.
Relationships with other factions shift based on Aid and combat, determining
whether the Vagabond is an ally or a threat.

**Shared Systems:** Combat uses two dice (0-3 range each); attacker takes the
higher roll, defender the lower, each capped by warrior count in the clearing.
Extra hits remove buildings and tokens. Crafting requires matching presence
(buildings, sympathy, roosts, or hammers) in the right clearing suits. The VP
race ends at 30 points, but Dominance cards offer an alternative victory
condition — control specific clearings at the start of your turn rather than
accumulating VP.

### Key Design Patterns

RADICAL ASYMMETRY AS CORE ARCHITECTURE: Root's defining design decision is that
each faction plays by fundamentally different rules. This is not the variable
player powers of most asymmetric games, where everyone shares a core action
set and each player gets a modifier. In Root, the Marquise plays a resource-
logistics area control game, the Eyrie plays a programmed-action engine that
must be constantly fed, the Alliance plays a card-driven insurgency game, and
the Vagabond plays an item-management adventure game. They share a map, a card
deck, a combat system, and a VP track — and almost nothing else. This means the
design burden is enormous: four (or more, with expansions) complete game systems
must be balanced against each other despite having no common action economy. But
the payoff is equally enormous: every seat at the table offers a genuinely
different experience, and the interactions between factions emerge from the
collision of incompatible systems rather than from symmetric competition over
shared resources.

THE DECREE AS COMPOUNDING COMMITMENT: The Eyrie's Decree is one of Root's most
original mechanical inventions. Each turn, the Eyrie player must add cards to a
permanent program that executes every turn thereafter. Early turns are flexible
— the Decree has few commitments and the Eyrie can easily fulfill them. But as
cards accumulate, the program becomes rigid and demanding. The Eyrie must recruit,
move, battle, and build in specific clearing suits in a specific order, every
turn, with no option to skip. If any single action in the chain becomes
impossible — no legal clearing, no available pieces — the entire government
collapses into Turmoil, wiping the Decree and costing VP. This mechanic is a
brilliant expression of bureaucratic overextension: the Eyrie grows powerful
through rigid discipline but becomes brittle as its obligations outpace its
capacity. The strategic tension lies in choosing which cards to add (Bird cards
are wild and flexible but commit to all columns), when to deliberately trigger
Turmoil to reset with a new Leader, and how to avoid painting yourself into an
impossible corner. It is simultaneously an engine-building mechanic, a push-your-
luck mechanic, and a narrative generator.

MARTIAL LAW AND THE INSURGENCY FEEDBACK LOOP: The Woodland Alliance embodies a
design insight drawn directly from counterinsurgency theory: oppression breeds
resistance. When any faction moves warriors into a clearing with Alliance sympathy,
or when sympathy tokens are removed, the Alliance gains supporter cards from the
offending player's hand or from the deck. This means the natural military response
to the Alliance — march in and destroy their tokens — actively fuels their cause.
Combined with Guerrilla War (defenders roll high in combat), the Alliance is a
faction that becomes stronger when attacked inefficiently. The correct counter is
precisely targeted force that removes bases (cutting off recruitment and card
draw) rather than broadly suppressing sympathy. This creates a strategic puzzle
for the entire table: how do you contain the Alliance without feeding it?

THE VAGABOND AS SYSTEMIC DISRUPTOR: The Vagabond breaks Root's wargame framework
by introducing a character-scale actor into a factional conflict. The Vagabond
cannot rule clearings, does not compete for area majority, and scores through
personal actions (quests, aiding, combat) rather than territorial control. This
creates a diplomatic wildcard: the Vagabond can aid any faction, gaining VP while
improving relationships and giving the aided faction an advantage. Or the
Vagabond can turn hostile, scoring VP by destroying warriors of factions it has
antagonized. Other players must constantly evaluate whether the Vagabond is a
useful ally or a runaway threat — and the Vagabond player must navigate these
relationships, trading short-term aid for long-term position. The Vagabond also
serves as a catch-up mechanism: it naturally targets the leader (since the leader
has the most to take) and acts as a balancing agent in the ecosystem.

SHARED MAP AS INTERACTION FORCING FUNCTION: Root's map consists of twelve
clearings connected by paths, with each clearing having a suit and a limited
number of building slots. This constrained geography forces constant friction.
The Marquise starts controlling most of the map and must spread to build; the
Eyrie needs roosts in clearings it rules; the Alliance needs adjacent sympathetic
clearings to spread; the Vagabond moves through it all. Building slots are scarce
— a clearing with three slots can only hold three total buildings across all
factions. This physical scarcity means expansion by one faction necessarily
displaces another. Unlike many area control games where the map is large enough
to avoid conflict, Root's compact board guarantees that every player's plans
collide with someone else's every turn. The clearing suits add a second layer
of constraint: card-driven actions require matching suits, so control of Fox
clearings matters differently from control of Rabbit clearings depending on
your hand composition.

COMBAT SIMPLICITY AS ACCESSIBILITY LEVER: In a game with four radically different
rule sets, the combat system is deliberately minimalistic — roll two dice, high
to attacker, low to defender, capped by warriors present. This shared simplicity
serves multiple purposes: it provides a common interaction language that all
players understand regardless of faction, it keeps individual battles fast so
the game doesn't bog down in combat resolution, and it makes combat outcomes
uncertain enough that pure military dominance is risky. The attacker advantage
(higher die) incentivizes aggression, preventing defensive turtling. Faction-
specific combat modifications (Eyrie scores in Evening, Alliance defends with
high die, Vagabond uses swords) layer on top of this simple base, adding
asymmetric texture without asymmetric complexity in the resolution itself.

THE LAW OF ROOT AND THE TEACHING PROBLEM: Root's radical asymmetry creates a
unique teaching challenge: each player must learn a different game. Wehrle's
solution is the Law of Root, a comprehensive reference document that serves as
the authoritative rules text (distinct from the Learning Guide). The design
philosophy is that each faction's player board contains all the rules needed to
play that faction, while the Law of Root resolves edge cases and cross-faction
interactions. This means a new player can be taught their own faction in ten
minutes while remaining largely ignorant of other factions' detailed rules —
and that ignorance is acceptable because the player boards are self-contained.
The tradeoff is that first games often feature poor threat assessment, since
players who don't understand other factions' scoring engines can't evaluate who
is actually winning.

DOMINANCE CARDS AS ALTERNATIVE VICTORY: The Dominance card system allows any
player who has reached 10 VP to shift to a territorial win condition instead of
continuing the VP race. Once activated, the player wins by controlling specific
clearings (determined by card suit) at the start of their next turn. This creates
sudden-death tension: a player who seems to be losing the VP race can pivot to a
spatial victory condition, forcing the entire table to respond to a new threat
axis. Dominance cards also interact with the Vagabond's coalition ability — the
Vagabond can form a coalition with a Dominance player, sharing their victory
condition. This gives the late game unpredictable pivots that prevent runaway
leaders from feeling safe.

### What Makes It #34

Root's achievement is making a COIN-style asymmetric wargame accessible to the
broader hobby gaming audience without sacrificing the depth that makes asymmetric
conflict compelling. Each faction is not just different in degree but different
in kind — the Marquise player, the Eyrie player, the Alliance player, and the
Vagabond player are each playing a fundamentally different game that happens to
take place on the same board. This radical asymmetry means every seat offers a
unique experience, and the emergent narrative of each game — the empire overextends,
the insurgency rises, the old regime crumbles under its own rigidity, the
wanderer plays all sides — arises naturally from mechanical interaction rather
than scripted events. The COIN-series inheritance gives Root a strategic maturity
unusual in games with cute woodland art, while the streamlined combat, compact
map, and self-contained faction boards make it learnable in a way that GMT
wargames typically are not. The expansion factions (Riverfolk Company, Lizard
Cult, Underground Duchy, Corvid Conspiracy) extend the design thesis further,
proving that the framework can absorb entirely new gameplay paradigms — merchant
economy, cult conversion, tunnel networks, hidden plots — without structural
modification. Root is the proof of concept that radical asymmetry can be a
commercial and critical success, and its influence on subsequent asymmetric
designs has been substantial.
