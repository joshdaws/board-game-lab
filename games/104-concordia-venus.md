# Concordia Venus

> **Note:** This is a standalone expansion of Concordia. For the base
> game analysis, see `games/29-concordia.md`. Concordia Venus adds the
> Team Play variant, new maps (Ionium, Hellas, Imperium, Cyprus), new
> personality cards (Magister, Proconsul, Legatus, Praetor), and the
> Venus god scoring category. The core design is Mac Gerdts' original
> Concordia system; this analysis focuses on what the Venus additions
> contribute to the design.

## Quick Stats

- **Players:** 2-6
- **Time:** 60-120 min
- **Weight:** 3.18/5

## Mechanics

- Action Retrieval
- Advantage Token
- Communication Limits
- Deck, Bag, and Pool Building
- Hand Management
- Movement Points
- Network and Route Building
- Open Drafting
- Point to Point Movement
- Set Collection
- Team-Based Game
- Variable Set-up

## Categories

- Ancient
- Economic

## Rulebook

See `rulebooks/104-concordia-venus.pdf`

## Design Notes

Designer: Mac Gerdts. Published by PD-Verlag (2018).

### Theme Integration

Concordia Venus extends the Roman mercantile expansion theme of the
original Concordia into a broader geopolitical canvas. The four new
map scenarios -- Ionium, Hellas, Imperium, and Cyprus -- represent
different scales and regions of the Roman world, each with distinct
topological properties that alter strategic geography. Ionium features
a special connection between Brundisium and Apollonia where land
colonists can cross the sea, evoking the historical Adriatic trade
corridor. Cyprus and Ionium use separate card displays rather than
an integrated board display, reflecting the logistical challenges of
remote provinces.

The Team Play variant, Venus's signature addition, reframes the
mercantile competition as factional politics within the Roman elite.
Teams of two sit opposite each other at the table, evoking political
alliances within the Senate. The Communication Limits mechanic --
partners cannot freely discuss strategy or share resources, and the
Legatus card is the only way to inspect a partner's hand -- captures
the theme of allied patrician families who share goals but maintain
separate households and ambitions. The Venus god herself, added to
the scoring pantheon, rewards provincial co-presence: in Individual
Play she scores for provinces where you have at least two houses, and
in Team Play she scores for provinces where both partners have at
least one house each. This thematic alignment -- Venus as goddess of
unity and partnership -- is Gerdts at his most deliberate, making the
new scoring category mechanically and thematically coherent with the
team structure.

### Core Loop

The fundamental turn structure is identical to Concordia: play one
card from your hand, execute its action. All played cards form a
personal discard pile. The Tribune recovers all played cards to hand.
The game ends when the last personality card is purchased from the
display or when a player builds their 15th house.

Venus adds and modifies several personality cards:

1. **Tribune** -- Recover all played cards. If more than 3 cards are
   recovered (including Tribune), gain 1 sestertius per card past the
   third. Optionally purchase a new colonist for 1 food + 1 tool.

2. **Architect** -- Move colonists (total movement steps equal to
   number of your colonists on the board), then build houses in
   cities where your colonists stand. House costs escalate with
   multiplied coin costs when multiple houses are present.

3. **Prefect** -- Either produce goods in an active province (flipping
   the bonus marker and gaining a bonus good, with all houses in
   that province producing for their owners) OR collect the cash
   bonus (1 sestertius per visible coin on all flipped bonus markers,
   then reset all markers).

4. **Mercator** -- Receive 3 sestertii (5 with purchased Mercator),
   then trade up to two goods types with the bank at fixed prices.

5. **Diplomat** -- Copy the top card of any opponent's discard pile.

6. **Senator** (Individual Play) -- Purchase up to 2 personality cards
   from the display. Cost equals the card's red-field goods plus any
   goods shown beneath its display position.

7. **Consul** (Individual Play) -- Purchase 1 personality card at
   reduced cost (red-field goods only, ignoring display position).

8. **Magister** (Individual Play) -- Repeat the action of your
   previously played personality card (except Senator).

9. **Praetor** (Team Play) -- Functions like Senator, but each partner
   may purchase no more than 1 card each.

10. **Proconsul** (Team Play) -- Purchase 1 personality card free of
    cost. The partner then plays a card from their hand (not Legatus)
    and executes its actions for themselves only.

11. **Legatus** (Team Play) -- Inspect your partner's hand, silently
    suggest a card. Your partner plays a card (which may differ from
    your suggestion) and both partners execute that card's actions.

12. **Double Choice Cards** (Architect/Mercator, Prefect/Mercator) --
    Choose one of the two printed personalities to execute.

13. **Specialists** (Mason, Farmer, Smith, Vintner, Weaver) -- All
    your houses of the related good type produce one unit each.

Final scoring adds the **Venus** god: in Individual Play, 2 VP per
card for each province with at least two of your houses. In Team Play,
1 VP per card for each province where both partners have at least one
house. The **Praefectus Magnus** circulates as a special token: a
player who plays a Prefect to produce (not collect cash) must pass it
to their right neighbor. Its holder receives a double bonus (2 units
instead of 1) when producing.

### Key Design Patterns

TEAM PLAY WITH COMMUNICATION LIMITS: The headline design contribution.
Partners share a win condition (combined VP) but maintain separate
storehouses, hands, and personalities. They cannot exchange goods,
personality cards, or information freely. The Legatus card is the
sole channel for coordination -- it lets you see your partner's hand
and suggest a play, but the partner can ignore the suggestion. In Team
Play, when one partner plays a card, the other partner also executes
that card's actions (with exceptions for Legatus and Proconsul). This
creates a distinctive design tension: your card choice must serve both
your own position and your partner's, without full knowledge of what
they need. Gerdts recognized that unlimited communication in
cooperative games creates an optimization puzzle where the strongest
player dominates; by restricting communication to the Legatus's hand
inspection, he preserves individual agency within the partnership.

VENUS SCORING AS COOPERATION METRIC: The Venus god rewards shared
provincial presence -- a scoring axis that does not exist in base
Concordia. In Team Play, Venus creates a mechanical incentive for
partners to build in the same provinces, which conflicts with Saturn
(which rewards distinct provinces per individual). This internal
tension between individual scoring categories and team scoring
categories is the strategic heart of Venus Team Play. A team must
balance each partner's personal scoring trajectory (their own
Jupiter, Saturn, Mercury, Mars, Minerva cards) against the shared
Venus bonus, creating a multi-objective optimization problem that
neither partner can solve alone.

PROCONSUL AND LEGATUS AS COORDINATION TOOLS: These Team Play-exclusive
cards replace the Senator and Consul, fundamentally changing the
card-acquisition rhythm. The Proconsul gives one partner a free card
while the other executes an action -- a combined economy-and-action
turn that rewards planning. The Legatus enables the only direct
coordination between partners, but at the cost of a turn spent
inspecting rather than building. Using Legatus early provides
information for future planning; using it late in a play cycle wastes
a card slot before the Tribune refresh. These cards create a new
timing dimension absent from base Concordia.

MAGISTER AS ACTION AMPLIFICATION: In Individual Play, the Magister
repeats your previously played personality card's action (except
Senator). This adds a sequencing dimension -- you can Architect, then
Magister to double-Architect, enabling a burst building turn. Or
Prefect-Magister to produce twice. The constraint (cannot repeat
Senator) prevents runaway card acquisition while allowing every other
action type to be intensified. The Magister rewards careful play-cycle
planning: it is most powerful when placed immediately after a
high-value action, but this means committing two of your limited
hand slots to a single action type before the next Tribune refresh.

PRAEFECTUS MAGNUS CIRCULATION: The Praefectus Magnus token gives a
double production bonus to its holder when using the Prefect to
produce. After use, it must be passed to the right. This creates a
rotating advantage that no player can monopolize -- you benefit once,
then your neighbor does. The circulation interacts with Prefect
timing: producing when you hold the Magnus is significantly more
valuable, but waiting for it costs tempo. In Team Play, the Magnus
benefits only its current holder, not the partner, adding another
asymmetry to team coordination.

DOUBLE CHOICE CARDS AS FLEXIBILITY: The Architect/Mercator and
Prefect/Mercator hybrid cards let the player choose which action to
execute. In Team Play, the playing partner chooses one personality
and the other partner must use the other. This creates a negotiation
moment encoded in card design rather than conversation -- the first
partner's choice constrains the second's, requiring implicit
coordination about which action each partner needs more.

MAP VARIABILITY AS REPLAYABILITY: Four map scenarios with distinct
topologies. Ionium and Cyprus lack integrated card displays, requiring
the separate cardboard display piece. Ionium's special Adriatic
crossing changes land colonist mobility. The maps vary in province
count, city density, and sea-route connectivity, altering the relative
value of Architect (movement-dependent), Colonist (deployment-focused),
and Prefect (production-focused) strategies. The recommendation to
remove "B"-marked cities in 2-3 player games on Ionium shows Gerdts'
attention to scaling.

### What Makes It #104

Concordia Venus demonstrates that a masterwork can be meaningfully
extended without being diluted. The Team Play variant is the design's
primary contribution -- it transforms Concordia's solitary optimization
into a partnership puzzle with restricted communication, creating
emergent coordination challenges that the base game's mechanisms were
never designed for yet handle elegantly. The Venus god scoring category
is the mechanical glue that makes Team Play strategic rather than
incidental: it gives partners a reason to care about each other's
board position while competing individually across the other gods.
The Magister adds satisfying action amplification to Individual Play.
The four new maps extend the game's geographic variety. But the core
achievement is proving that Gerdts' card-play system -- play one
card, execute its action -- is robust enough to support a fundamentally
different social structure without requiring new phases, tokens, or
exception-based rules. Venus inherits Concordia's legendary
rules-to-depth ratio and adds a dimension of cooperative strategy
that the original never attempted.
