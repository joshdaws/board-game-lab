# Arkham Horror: The Card Game (Revised Core Set)

## Quick Stats

- **Players:** 1-4
- **Time:** 45-180 min
- **Weight:** 3.77/5

## Mechanics

- Action Points
- Area Movement
- Communication Limits
- Cooperative Game
- Deck Construction
- Events
- Hand Management
- Scenario / Mission / Campaign Game
- Variable Player Powers

## Categories

- Adventure
- Card Game
- Exploration
- Fantasy
- Horror
- Novel-based

## Rulebook

See `rulebooks/118-arkham-horror-tcg-revised.pdf`

## Design Notes

Designer: Nate French & MJ Newman. Published by Fantasy Flight Games (2021).

**Note:** This is the Revised Core Set, a repackaged version of the original
Arkham Horror: The Card Game (2016). The rules and mechanics are identical to
the original release. The Revised Core Set consolidates what previously required
two core sets into a single box, providing a complete playset of all player
cards (two copies of each) plus five full investigator starter decks. For a
comprehensive design analysis, see `games/32-arkham-horror-tcg.md`.

### Theme Integration

The Revised Core Set preserves the original's complete commitment to Lovecraftian
horror as a mechanical experience. Players take the roles of investigators —
Roland Banks the federal agent, Agnes Baker the waitress-turned-mystic, Daisy
Walker the librarian, "Skids" O'Toole the ex-con, and Wendy Adams the orphan —
each mechanically defined by four skill values (Willpower, Intellect, Combat,
Agility) and unique card pools that express their narrative identity. The chaos
bag remains the game's signature randomizer: a physical container of tokens
drawn during skill tests, whose composition is tunable per scenario and
difficulty level. Drawing from the bag feels fundamentally different from rolling
dice — you know what lurks inside but never which token you will pull, creating
the Lovecraftian anxiety of partial knowledge and uncontrollable outcomes.

The dual-track damage system — physical Health and mental Sanity — encodes the
genre's central conceit that encountering the mythos destroys both body and mind.
Assets in play can absorb damage and horror, meaning your allies, tools, and
spells serve as ablative shields against destruction. When an investigator's
damage equals their health or horror equals their sanity, they are eliminated.
The campaign structure carries this forward: investigators accumulate physical
and mental trauma between scenarios, starting subsequent sessions already
wounded. Failure is not a reset but a narrative scar.

The scenario structure builds each session as a race between two decks. The act
deck represents investigator progress — gathering clues to advance the story
toward resolution. The agenda deck represents the mythos advancing its own plan
through accumulating doom tokens. When placed side by side, the act and agenda
cards form a storybook image, a visual metaphor for the intertwined narratives
of investigation and cosmic threat. The five investigators in the Revised Core
Set each bring a personal weakness card that represents their backstory: Roland
must Cover Up evidence of his past failures, while Wendy is haunted by her
missing parents. These are not flavor text but mechanical constraints that
appear at the worst possible moments.

### Core Loop

Each round proceeds through four phases:

1. MYTHOS PHASE (skipped in Round 1) — Place 1 doom token on the current
   agenda card. If total doom in play meets or exceeds the agenda's threshold,
   advance the agenda deck (triggering punishing story effects). Then, in
   player order, each investigator draws 1 encounter card from the encounter
   deck and resolves it — enemies spawn engaged with the drawing investigator,
   treacheries impose skill tests or lasting effects. This phase represents
   the game attacking players with increasing urgency.
2. INVESTIGATION PHASE — Each investigator takes a turn with 3 actions,
   spendable in any combination: Draw 1 card, Gain 1 resource, Play an asset
   or event card from hand (paying its resource cost), Activate an action
   ability on a card in play, Investigate the current location (Intellect
   test vs. shroud value to discover a clue), Move to a connected location,
   Fight an enemy (Combat test vs. fight value to deal damage), Evade an
   engaged enemy (Agility test vs. evade value to exhaust it), or Engage an
   enemy at your location. Enemies engaged with an investigator impose
   attacks of opportunity on non-Fight/non-Evade actions. Clues collected
   from locations are spent to advance the act deck.
3. ENEMY PHASE — Hunter enemies move toward the nearest investigator. All
   engaged ready enemies attack, dealing damage and horror simultaneously.
   After attacking, enemies exhaust.
4. UPKEEP PHASE — Investigators ready all exhausted cards, draw 1 card, and
   gain 1 resource. Investigators with more than 8 cards in hand must discard
   down to 8.

Victory requires advancing the act deck through all stages before the agenda
deck completes. Each act stage requires spending a threshold of clues (scaling
with player count). Scenario resolution determines campaign outcomes, XP
rewards, and story branching.

### Key Design Patterns

REVISED CORE AS ONBOARDING REDESIGN: The most significant design decision in
the Revised Core Set is not a rules change but a packaging one. The original
2016 core set included only one copy of most player cards, meaning serious
deckbuilding required purchasing two core sets — a notorious barrier to entry
that the LCG model was theoretically supposed to avoid. The Revised Core Set
provides full playsets of all player cards, five complete starter decks with
strategy tips, and enough cards for four simultaneous players. This removes
the single largest friction point in the original product without altering any
game mechanics. The included starter decks — each with a detailed strategy
guide explaining card synergies and upgrade priorities — lower the cognitive
barrier for new players who might otherwise be overwhelmed by deckbuilding
options. The design lesson is that accessibility is not only about rules
complexity but also about product structure.

CHAOS BAG AS TUNABLE PROBABILITY: The chaos bag replaces dice with a container
of tokens whose composition is known but whose draw order is random. Each
scenario specifies the bag's contents at four difficulty levels (Easy, Standard,
Hard, Expert), ranging from generous (+1 tokens, mild penalties) to brutal (-4
through -8 tokens, devastating symbol effects). The bag can also be modified
mid-campaign through story outcomes. This creates a probability system that is
both designer-controlled and player-legible — experienced players calculate odds
based on bag composition before committing to skill tests. The physical act of
reaching into a bag produces a tactile tension that rolling dice cannot
replicate.

THREE-ACTION TRIAGE WITH ATTACKS OF OPPORTUNITY: Three actions per investigator
turn creates constant prioritization pressure. The demands are always greater
than the supply: moving costs an action, investigating costs an action (with
failure risk), playing assets costs an action plus resources, and fighting
costs an action (with failure risk). When enemies are engaged, non-combat
actions trigger attacks of opportunity — free enemy attacks that drain health
and sanity. This means a single engaged enemy can consume an entire turn:
evade (1 action), move away (1 action), investigate (1 action). The action
economy makes cooperative role specialization a survival requirement rather
than an optimization preference.

DUAL-TRACK ELIMINATION (HEALTH AND SANITY): Investigators have separate Health
and Sanity thresholds, and damage and horror are dealt independently. This
creates two distinct vulnerabilities that demand separate defensive strategies.
Roland Banks (Health 9, Sanity 5) can absorb physical punishment but is fragile
against horror. Wendy Adams (Health 7, Sanity 7) is balanced. Agnes Baker
(Health 6, Sanity 8) thrives against psychological threats but crumbles under
physical assault. Asset cards can absorb damage and horror up to their own
health and sanity values, making allies, weapons, and spells serve double duty
as both capability and protection.

DECK CONSTRUCTION AS CHARACTER EXPRESSION: Each investigator specifies a deck
size (30 cards in the core set), allowed card classes, and deckbuilding
restrictions on their reverse side. Roland can use Guardian and Seeker cards;
Wendy can use Survivor and Rogue cards. This constrained deckbuilding means
that the same card pool produces dramatically different decks depending on the
investigator. Between campaign scenarios, investigators spend earned XP to
upgrade level-0 cards to higher-level versions, creating mechanical character
arcs. A personal weakness card is shuffled into every deck, ensuring that each
investigator's narrative baggage intrudes mechanically at unpredictable moments.

LOCATION NETWORK AS SPATIAL PUZZLE: Scenarios lay out location cards in specific
configurations with marked connections. Locations have shroud values (difficulty
to investigate) and clue counts (scaling with player count). Unrevealed
locations flip when first entered, placing clues and revealing their
characteristics. Movement between locations costs actions, making positioning a
genuine strategic consideration. An investigator on the wrong side of the map
when a critical location appears has lost multiple turns to transit. The
spatial layer transforms what could be a purely abstract card game into a game
of positioning and route optimization.

### What Makes It #118

The Revised Core Set represents Fantasy Flight Games' acknowledgment that the
original Arkham Horror: The Card Game had a product-structure problem masking
a brilliant design. By consolidating two core sets into one, providing complete
starter decks with strategic guidance, and maintaining full backward
compatibility with all existing expansions, the revision removes the primary
barrier that prevented the game's mechanical excellence from reaching a broader
audience. The game itself remains unchanged: the chaos bag creates uniquely
legible uncertainty, the three-action economy forces cooperative triage, the
campaign structure gives every decision lasting narrative weight, and the
deckbuilding system turns character customization into the game's primary
creative expression. The Revised Core Set is not a new game — it is the same
game made properly accessible for the first time. Its separate ranking from
the original (#32) reflects that the community recognizes the repackaging as
a distinct and successful product, even though the underlying design wisdom
is identical.
