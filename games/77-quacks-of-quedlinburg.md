# The Quacks of Quedlinburg

## Quick Stats

- **Players:** 2-4
- **Time:** 45 min
- **Weight:** 1.95/5

## Mechanics

- Bag Building
- Push Your Luck
- Market / Open Economy
- Variable Player Powers

## Categories

- Fantasy
- Medical

## Rulebook

See `rulebooks/77-quacks-of-quedlinburg.pdf`

## Design Notes

Designer: Wolfgang Warsch. Published by Schmidt Spiele (2018).

### Theme Integration

The Quacks of Quedlinburg casts players as charlatan doctors — quack
physicians peddling dubious potions at a medieval bazaar. The theme is
deliberately absurd, and this tonal lightness is a design decision, not a
weakness. By framing the core loop as potion-brewing rather than combat,
empire-building, or economic optimization, Warsch signals to players that
the game embraces chaos and rewards boldness over caution. The theme gives
mechanical permission to fail spectacularly: when your pot explodes because
you drew one too many cherry bombs, the narrative framing makes it comic
rather than punishing. You are a quack, after all — nobody expected your
potion to work.

The ingredient chips carry thematic flavor that maps to mechanical function.
White cherry bomb chips are the universal bust element — low-quality filler
that every quack starts with and can never fully purge. Colored ingredient
chips represent increasingly exotic (and fictional) reagents: pumpkin,
toadstool, crow skull, mandrake, spider, garden spider, ghost's breath,
African death's-head hawkmoth. Each ingredient set has a unique power that
activates when drawn, creating the sensation of a recipe that does different
things depending on what goes into the pot. The ingredient names and
illustrations reinforce the fantasy-medical theme without any pretense of
scientific accuracy, which is precisely the point. The game's aesthetic
commitment to quackery liberates the mechanical design from the obligation
to simulate anything real.

The pot itself — a spiral track on each player's board where drawn chips
are placed sequentially — is a physical representation of brewing. As
chips fill the spiral from the center outward, the potion grows in potency
(the position of your last chip determines your reward). The spatial
progression from center to edge creates a visual narrative of the brew
intensifying until it either reaches a satisfying conclusion or explodes.
This is theme as interface design: the pot communicates game state intuitively,
making the push-your-luck calculus visceral rather than abstract.

### Core Loop

The game is played over nine rounds, each following the same structure:

1. FORTUNE TELLER CARD — Reveal a fortune teller card that applies a
   one-time rule modification for this round (e.g., all players draw one
   extra chip before starting, or cherry bombs count differently). This
   injects per-round variability.

2. SIMULTANEOUS DRAWING — All players draw chips from their bags simultaneously.
   On each draw:
   - Pull one chip blindly from your bag
   - Place it on the next open space in your pot's spiral track
   - Check if your total cherry bomb value exceeds 7. If it does, your pot
     EXPLODES — you stop immediately and must choose to score either victory
     points OR buying power for this round, but not both
   - If your pot has not exploded, choose whether to STOP (voluntarily end
     your brewing and keep both VP and buying power) or CONTINUE drawing
   - Activate any ingredient-specific powers triggered by the drawn chip

3. EVALUATION — Players who stopped voluntarily gain both victory points
   (based on how far their last chip advanced on the spiral) and coins
   (based on where their last chip sits). Players whose pots exploded choose
   one or the other. The furthest-advanced player who did not explode earns
   a bonus die roll.

4. BUYING — Starting with the player furthest behind on the score track,
   each player spends coins to purchase 1-2 new ingredient chips from the
   market. Purchased chips go into your bag immediately. Chip costs vary by
   type and power level (1-4 cost tiers per ingredient color). Players
   choose which ingredient sets to invest in, shaping their bag's
   probability profile.

5. RAT TAIL ADJUSTMENT — Players behind the leader on the score track
   advance their rat tail marker, which grants them a head start on the
   pot spiral in the next round (their first chip starts further along the
   track, giving them more VP and coin potential). This is the catch-up
   mechanism.

### Key Design Patterns

BAG BUILDING AS TACTILE DECK BUILDING: The Quacks of Quedlinburg is fundamentally
a deck-building game, but replacing cards with chips drawn from an opaque bag
transforms the experience. Deck building (as in Dominion) involves shuffling and
dealing — abstract operations that distance the player from probability.
Bag building makes probability physical: you reach into a bag, feel the chips,
and pull one out. The tactile engagement heightens the emotional stakes of each
draw. You know there are three cherry bombs in your bag of fifteen chips, and
the physical act of reaching in and hoping to avoid them is more engaging than
flipping a card. The design insight is that identical probability mathematics
feel different depending on the physical interface, and bag building exploits
this to make a light game feel thrilling.

PUSH YOUR LUCK WITH PROBABILITY MANAGEMENT: The core tension is the classic
push-your-luck question — draw again or stop? — but Warsch layers probability
management on top. Because players control their bag composition through
purchasing, the push-your-luck calculus is not purely emotional. A player who
has bought many high-value ingredient chips and few cherry bombs can rationally
draw deeper because the odds favor them. A player whose bag is still loaded
with cherry bombs should stop earlier. The design pattern is that push your luck
becomes strategically interesting when players can modify the probability
distribution over time. The early game is more random; the late game rewards
players who invested in favorable bag composition.

CATCH-UP MECHANISM VIA RAT TAILS: Players trailing on the score track receive
a rat tail bonus — their pot spiral starts further along the track in the next
round, giving them access to higher VP and coin positions with fewer draws.
This is a direct, transparent catch-up mechanism that compresses the scoring
spread without eliminating the leader's advantage. The rat tail does not punish
the leader; it gives the trailing player a better starting position. The design
wisdom is that in a game with high variance (push your luck), catch-up mechanisms
prevent a single bad round from making the remaining game feel hopeless. The
rat tail keeps all players engaged through all nine rounds, which is essential
for a party-weight game where player disengagement is a fatal flaw.

INGREDIENT SETS AS STRATEGIC SPECIALIZATION: Each ingredient color (pumpkin,
toadstool, crow skull, mandrake, etc.) has a unique power that triggers when
drawn from the bag. Pumpkins advance your pot by extra spaces. Toadstools give
you rubies. Crow skulls score based on how many you have already drawn. The
ingredient powers are further differentiated by ingredient books — at game
setup, players choose one of multiple power sets for each ingredient color,
meaning the same chip can behave differently across games. Specializing in
one ingredient color (buying multiple chips of the same type) creates
concentrating synergies: more crow skulls means each subsequent crow skull is
worth more. The design pattern is that specialization within a bag-building
system creates emergent strategic identity — even in a light game, the choice
of which ingredients to invest in distinguishes experts from novices.

EXPLOSION PENALTY AS RISK-REWARD CALIBRATION: When a pot explodes (cherry bomb
total exceeds 7), the penalty is not catastrophic — the player simply chooses
either victory points or buying power, forfeiting the other. This calibration
is precise and intentional. If explosions cost everything, players would play
too conservatively and the push-your-luck tension would collapse. If explosions
cost nothing, there would be no reason to stop. By making the penalty a
meaningful but survivable trade-off (sacrifice VP to buy strong chips, or
sacrifice buying power to bank points), Warsch ensures that risking an
explosion is a legitimate strategic choice, not just recklessness. Some rounds,
it is correct to push deep into the bag knowing that even if you explode, the
buying power you gain will strengthen your bag for future rounds.

FORTUNE TELLER CARDS AS PER-ROUND VARIABILITY: Each round begins with a
fortune teller card that modifies the round's rules in a small but meaningful
way. These cards prevent the nine rounds from feeling repetitive by injecting
novel conditions that shift the push-your-luck calculus. A card that reduces
the explosion threshold from 7 to 6 makes the round riskier. A card that
lets everyone draw an extra chip for free shifts the equilibrium point. The
design insight is that per-round rule modifications keep a simple core loop
feeling fresh without increasing mechanical complexity — the rules change
slightly each round, but the decision structure remains the same. This is an
efficient way to add replay value to a game with a single dominant mechanic.

CHERRY BOMBS AS UNIVERSAL BUST ELEMENT: Every player starts with the same set
of white cherry bomb chips (value 1, 2, and 3), and these chips can never be
removed from the bag. They are the irreducible floor of risk. As players add
ingredient chips through purchasing, the ratio of cherry bombs to total chips
decreases, making the bag safer — but the bombs never disappear. This means
that even a perfectly optimized bag carries residual risk. The permanent
presence of cherry bombs ensures that the push-your-luck tension persists
through all nine rounds, preventing the late game from becoming a foregone
conclusion for players with well-built bags. The design wisdom is that a
bag-building game needs a fixed hazard that dilutes but never vanishes, or
the building phase would eventually eliminate the risk that makes drawing
exciting.

SIMULTANEOUS PLAY FOR PACE: All players draw from their bags at the same
time, which eliminates downtime in a game that could easily stall if turns
were sequential. Because each player's drawing decisions are independent
(no interaction during the draw phase), simultaneous play costs nothing in
strategic depth while dramatically reducing game length. A four-player game
of Quacks takes 45 minutes precisely because the most time-intensive phase —
drawing and placing chips — happens in parallel. The design pattern is that
any game phase where players do not interact can and should be made
simultaneous, because the only cost of sequential play in non-interactive
phases is wasted time.

### What Makes It #77

The Quacks of Quedlinburg proves that push your luck is not inherently a
shallow mechanism — it becomes strategically rich when players can modify the
probability distribution they are gambling against. The bag-building layer
transforms a game of pure nerve into a game of investment and risk management,
where the decision to buy a third crow skull chip has consequences that unfold
over multiple future rounds. The catch-up mechanism keeps all players invested.
The simultaneous draw phase eliminates downtime. The ingredient book system
creates replayability at the setup level. And the theme — absurd, joyful,
unapologetically silly — gives players emotional permission to push their luck,
to explode, to laugh, and to try again. It is the rare game that works equally
well as a family game and as a gateway into strategic hobby gaming, and its
sub-2.0 weight belies a design that has more going on under the surface than
most games twice its complexity.
