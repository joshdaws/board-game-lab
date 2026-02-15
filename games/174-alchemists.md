# Alchemists

## Quick Stats

- **Players:** 2-4
- **Time:** 120 min
- **Weight:** 3.92/5

## Mechanics

- Action Drafting
- Constrained Bidding
- Deduction
- End Game Bonuses
- Hand Management
- Open Drafting
- Turn Order: Progressive

## Categories

- Deduction
- Fantasy
- Puzzle

## Rulebook

See `rulebooks/174-alchemists.pdf`

## Design Notes

Designer: Matus Kotry. Published by Czech Games Edition (2014).

### Theme Integration

Alchemists immerses players in the role of academic alchemists at a
medieval university, competing to publish theories about the fundamental
nature of ingredients. The theme is not generic fantasy potion-brewing
but a pointed satire of academic life: players mix ingredients to discover
their alchemical properties, publish theories in academic journals to
claim priority, endorse or debunk colleagues' publications, and seek
grants to fund further research. The game captures the politics of
academia with surprising accuracy -- you can publish a theory you are not
entirely certain about, gambling that no one will debunk you before the
conference ends. You can spend resources endorsing a colleague's work
to gain reputation, or invest in debunking their theory to steal their
credibility. The reputational economy of the game mirrors the real
incentive structures of academic publishing, where being first matters
more than being cautious, and where reputation is both the currency and
the prize.

The companion app (or the gamemaster screen, in the non-digital variant)
is central to the theme integration. When you mix two ingredients, you
scan them with the app and receive the result -- a potion with specific
properties. The app knows the hidden mapping of ingredients to alchemical
components, and your job as a scientist is to deduce that mapping through
systematic experimentation. This creates an experience unique in board
gaming: you are genuinely doing science. You form hypotheses, design
experiments to test them, interpret results, update your beliefs, and
publish conclusions. The deduction grid on your player screen is a
laboratory notebook, and the logical reasoning required to solve it is
the actual skill the game tests. The fantasy trappings -- potions,
ingredients, artifacts -- serve a deeply intellectual core mechanic.

The adventurer system adds a commercial pressure to the academic theme.
Adventurers arrive at the university requesting specific potion types,
and fulfilling their orders provides income. This creates a tension between
pure research (mixing ingredients to learn their properties) and applied
commerce (brewing potions adventurers will pay for). The best researchers
learn from every experiment, designing potion orders that simultaneously
earn gold and reveal information. This dual-use experimentation is where
the game's strategic depth resides, and it beautifully models the real
tension between basic research and commercial application.

### Core Loop

The game is played over six rounds, each representing a phase of the
alchemical conference. Each round follows a structured sequence:

1. CHOOSE TURN ORDER - At the start of each round, players simultaneously
   select their desired position in turn order by placing their turn order
   marker. Earlier positions grant priority for action selection but
   require waking up early (thematically), which costs the player in other
   ways -- later positions sometimes come with bonus resources. Turn order
   affects both action availability and the order in which conflicts
   (debunking, artifact bidding) are resolved.

2. DECLARE ACTIONS - Players take turns placing their action cubes on
   the available action spaces in turn order. Actions include:
   a) FORAGE FOR INGREDIENTS - Collect ingredient cards from a face-up
      or face-down supply.
   b) TRANSMUTE INGREDIENT - Sell an ingredient card for one gold (a
      guaranteed income source).
   c) BUY ARTIFACT - Bid on powerful one-use or permanent artifacts that
      provide special abilities and end-game points.
   d) TEST ON STUDENT - Mix two ingredients using the app and test the
      resulting potion on a student volunteer. You learn the potion's
      properties but must deal with consequences if the potion is
      negative (the student loses trust, costing reputation).
   e) DRINK POTION - Mix two ingredients and drink the result yourself.
      You learn the properties and gain the potion's effect (positive
      or negative), avoiding the ethical cost of student testing but
      accepting personal consequences.
   f) SELL POTION - Fulfill an adventurer's request by mixing two
      ingredients that produce the required potion type. You earn gold
      but must actually produce the correct potion -- bluffing is
      possible but risky, as the app reveals whether the potion matches.
   g) PUBLISH THEORY - Claim that a specific ingredient corresponds to
      a specific alchemical (a combination of three colored aspects).
      Publishing costs gold and an ingredient but earns reputation
      points and establishes your academic priority.
   h) DEBUNK THEORY - Challenge a published theory by demonstrating that
      the claimed ingredient-alchemical mapping is incorrect. Successful
      debunking earns reputation; failed debunking costs reputation.
      You must provide evidence (a specific aspect result from an
      experiment involving that ingredient) to attempt a debunk.

3. RESOLVE ACTIONS - Actions are resolved in a fixed order regardless of
   when they were placed. Foraging resolves first, then transmutation,
   then artifacts, then experiments (student, self, sell), then
   publishing, then debunking. This fixed resolution order means players
   can plan experiments using ingredients foraged in the same round.

4. UPDATE DEDUCTION GRID - After each experiment, players privately update
   their deduction grid, marking which alchemical possibilities are
   eliminated for each ingredient based on observed potion results. The
   deduction grid is the player's private knowledge base, and maintaining
   it accurately is essential for publishing correct theories and
   designing efficient experiments.

5. ROUND END - Discard unused ingredients beyond the hand limit. Advance
   the round marker. In later rounds, additional conference events may
   trigger (artifact availability, scoring bonuses, or the final
   exhibition).

6. FINAL SCORING - After six rounds, all published theories are checked
   against the true alchemical mapping. Correct theories earn bonus
   reputation; incorrect theories lose reputation. Players also score
   for artifacts, grants, and remaining resources. Reputation determines
   the winner.

### Key Design Patterns

DEDUCTION AS PRIMARY MECHANIC: Alchemists is built around a genuine logic
puzzle. Eight ingredients each correspond to one of eight alchemicals
(unique combinations of three binary-colored aspects), and every experiment
produces a result determined by the overlapping aspects of the two
ingredients mixed. Players must deduce the complete mapping through
systematic experimentation and logical elimination. This is not a pattern-
matching or memory exercise -- it requires the same formal reasoning skills
used in logic puzzles and scientific inquiry. The deduction grid serves as
a physical constraint-propagation tool, and skilled players can extract
maximum information from minimum experiments by designing tests that
eliminate the most possibilities regardless of outcome. The mechanic
rewards intelligence and careful reasoning in a way few other board games
attempt, making the deduction itself the core source of satisfaction.

APP-MEDIATED HIDDEN INFORMATION: The companion app (or gamemaster screen)
serves as an oracle that knows the hidden ingredient-alchemical mapping
and responds to experimental queries without revealing the underlying
truth. This solves a fundamental problem in deduction games: how to
provide truthful feedback without requiring a dedicated non-player
referee. The app allows all players to participate fully while maintaining
perfect hidden information. It also enables randomization of the mapping
each game, ensuring that memorizing solutions from previous games provides
no advantage. The app is not a gimmick but a structural necessity that
enables a deduction mechanic impossible to implement with purely analog
components while maintaining complete fairness.

PUBLISH-BEFORE-YOU-KNOW: The game allows and incentivizes players to
publish theories before they have complete certainty. Publishing early
earns reputation through academic priority -- the first publisher of a
theory about an ingredient gets more points than subsequent confirming
publications. But publishing an incorrect theory risks devastating
reputation loss during final scoring. This creates the game's central
strategic tension: how much certainty is enough to publish? Risk-averse
players who wait for complete deduction will be beaten to publication by
rivals willing to gamble on partial information. Risk-tolerant players
who publish early may find their theories debunked, costing both
reputation and credibility. The mechanic brilliantly models the real
academic incentive to publish first and worry about correctness later.

DUAL-USE EXPERIMENTATION: Every potion-mixing action simultaneously serves
two purposes: it generates a practical result (income from selling, an
effect from drinking, data from testing) and it provides deductive
information about ingredient properties. Expert players design experiments
that maximize information yield while also fulfilling practical needs --
selling a potion to an adventurer using ingredients whose interaction you
have not yet tested, thereby earning gold and gaining knowledge in a single
action. This dual-use principle means that the economic engine and the
deduction puzzle are not parallel systems but a single integrated loop
where efficiency in one domain compounds efficiency in the other.

REPUTATION AS VOLATILE CURRENCY: Reputation functions as both the scoring
metric and an in-game resource that can be gained and lost through
multiple channels: publishing, endorsing, debunking, student testing
outcomes, and artifact effects. Unlike victory points in most Euros,
reputation in Alchemists is volatile -- it can decrease as well as
increase, and final scoring can swing standings dramatically when
incorrect theories are revealed. This volatility creates genuine tension
throughout the game, because a player leading in reputation may be
sitting on incorrect publications that will collapse during final
verification. The visible reputation track shows who is leading, but
the hidden deduction grids mean no one knows how secure those positions
truly are.

TURN ORDER AS STRATEGIC RESOURCE: The progressive turn order system
forces players to choose between acting early (getting first pick of
actions and resources) and acting late (receiving compensation bonuses).
In most rounds, the optimal turn order position depends on what you plan
to do: foraging benefits from early position, while publishing benefits
from late position (to see what others publish first). The turn order
decision is the first action each round and constrains everything that
follows, creating a planning cascade where players must anticipate the
entire round's sequence before committing to their starting position.

CONSTRAINED BIDDING FOR ARTIFACTS: Artifacts are acquired through a
bidding system where players commit gold before seeing which artifacts
are available. The highest bidder gets first choice, but all bidders
pay their bid. This creates a valuation puzzle: how much is first pick
worth when you do not know what will be available? Artifacts provide
powerful abilities and end-game points, making them worth pursuing, but
overbidding wastes gold needed for publishing and other actions. The
constrained information in the bidding mirrors the game's broader theme
of making decisions under uncertainty.

### What Makes It #174

Alchemists occupies a singular position in board gaming as a heavy Euro
built around genuine logical deduction rather than economic optimization.
The app-mediated hidden information system enables a puzzle mechanic that
no purely analog game could replicate with the same elegance, while the
academic-satire theme gives every system -- publishing, debunking,
funding, experimentation -- a thematic coherence that elevates the
experience beyond abstract puzzle-solving. The game's deepest insight is
that deduction and economic engine-building can be fused into a single
system where every experiment simultaneously advances your scientific
knowledge and your practical position. Kotry proves that the worker
placement and resource management frameworks of the modern Euro can
serve radically different cognitive experiences when the underlying
challenge shifts from optimization to reasoning under uncertainty. For
players who crave intellectual challenge in their board games, Alchemists
delivers a uniquely satisfying combination of logical reasoning, risk
assessment, and social bluffing within a well-structured competitive
framework.
