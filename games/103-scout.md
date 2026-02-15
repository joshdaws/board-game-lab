# SCOUT

## Quick Stats

- **Players:** 2-5
- **Time:** 15 min
- **Weight:** 1.36/5

## Mechanics

- Hand Management

## Categories

- Card Game

## Rulebook

No PDF available. Analysis based on designer knowledge.

## Design Notes

Designer: Kei Kajino. Published by Oink Games / One More Game (2019).

### Theme Integration

SCOUT is a circus-themed card game where players recruit performers
from rival troupes. The theme is intentionally light -- the circus
framing provides color to what is fundamentally an abstract
climbing/shedding game. Cards depict numbered circus performers, and
the act of "scouting" (taking a card from the current display rather
than playing a set) represents poaching talent from a competing
circus. The thematic contribution is primarily in naming conventions:
playing cards is "showing" your act, while taking a card is "scouting"
a performer. Where the theme does subtle work is in justifying the
game's most distinctive rule -- that you can never rearrange your
hand. Your hand represents your circus troupe's lineup, and the
performers stay in the order they arrived. This constraint, while
mechanically motivated, aligns with the idea that managing a troupe
means working with what you have rather than endlessly reorganizing.

The double-sided cards, each showing a different number on each end,
extend the circus metaphor -- each performer has two possible acts
they can present, depending on which way you hold them. At the start
of the game, you choose which orientation to read your entire hand
in, a decision akin to choosing which show your circus will perform
this season.

### Core Loop

The game plays over a variable number of rounds equal to the player
count. Each round, the entire deck is dealt evenly to all players.
Players pick up their hand without rearranging the card order --
the dealt sequence is fixed. Each player may flip their entire hand
180 degrees once (choosing which of the two numbers on each
double-sided card to use), but individual cards may never be
reordered within the hand.

On each turn, a player must do one of two things:

1. **Show** -- Play a set of one or more adjacent cards from your hand
   that beats the current display. Valid sets are single cards,
   consecutive runs, or sets of identical numbers. A set beats the
   current display if it has more cards, or the same number of cards
   with higher values. The played cards become the new display, and
   the previous display's cards are scored face-down by the player
   who played them (1 point each).

2. **Scout** -- Take exactly one card from either end of the current
   display and insert it anywhere in your hand. The player who
   originally played the current display gains a Scout token (1
   point). You may orient the scouted card either way when inserting
   it. If the display is reduced to zero cards after scouting, the
   next player may play any set freely.

Once per round, a player may use their **Scout & Show** token to
scout a card and then immediately play a set on the same turn. This
token is flipped after use and does not refresh.

The round ends when one player empties their hand (triggering a
bonus) or when every player but one has passed. Each card remaining
in other players' hands scores -1 point for its holder. The player
who went out gains 1 point per card still held by all opponents
combined. Across all rounds, cumulative points determine the winner.

### Key Design Patterns

FIXED HAND ORDER: The foundational constraint that defines SCOUT's
identity. You cannot rearrange cards in your hand -- ever. The order
dealt to you (after the single orientation flip) is the order you
must work with for the entire round. This transforms a conventional
climbing game into a spatial puzzle. Every play must use adjacent
cards, so the quality of your available sets depends entirely on what
happens to be next to what in your hand. Inserting scouted cards at
any position is the sole mechanism for improving your hand's topology.
Kajino recognized that removing the freedom to rearrange creates a
form of constraint-based design where the puzzle is not "what is my
best play" but "how do I reshape a fixed sequence into playable
subsets." This single rule generates the game's entire strategic depth.

DOUBLE-SIDED CARDS: Each card has a different number on each end (e.g.,
3 on one side, 7 on the other). At the start of each round, you view
your hand from both orientations and choose which way to hold it. This
initial decision is the game's most consequential moment -- you are
evaluating two completely different hands and selecting the one with
better adjacency patterns. During scouting, you can orient the taken
card either way, giving insertion both positional and numerical
flexibility. The double-sided design approximately doubles the
possibility space while adding only one decision point (initial
orientation) and one parameter to each scout action.

SCOUT AS CONSTRUCTIVE PASSING: In traditional climbing games (Tichu,
The Great Dalmuti, President), inability to beat the current play
means passing -- a dead turn that provides no benefit. SCOUT replaces
passing with scouting, turning what would be a wasted turn into a
hand-improvement action. Taking a card from the display gives you
strategic value (better hand topology) while also giving the display's
owner a point (via the Scout token), creating a transfer payment for
the privilege. This means weak hands are not hopeless -- they can
methodically scout to improve, albeit at the cost of feeding points
to stronger players. The design ensures every turn has meaningful
agency regardless of hand quality.

DISPLAY OWNERSHIP AND POINT FLOW: When you play a set, previous
display cards score for you (1 point each), but your played cards
become vulnerable to scouting by opponents who earn you Scout token
points. This creates a bidirectional economy: playing cards earns you
the old display but exposes your cards to scouting that benefits you
incrementally. Large displays are harder to beat but give more points
when beaten. Small displays are easy to beat but offer little reward.
The Scout token acts as a consolation mechanism -- even when opponents
scout your display apart, you accumulate points for each card taken.

SCOUT AND SHOW TIMING: The once-per-round Scout & Show token allows
a player to take a card and immediately play a set, combining both
actions into a single powerful turn. The timing of this token's use
is a key strategic decision -- using it early can seize tempo when
your hand has a near-playable set that needs just one card, while
saving it preserves a comeback option. The token introduces asymmetric
turn power into an otherwise symmetric game structure, creating
moments where one player's enhanced turn can shift the round's
momentum.

ROUND-BASED SCORING ACCUMULATION: Playing multiple rounds equal to
the player count, with score accumulating across rounds, smooths
variance from the random deal. A poor hand in one round can be
compensated by a strong hand in another. The multi-round structure
also creates strategic evolution -- players learn opponents' tendencies
across rounds, and the running score creates end-game pressure where
trailing players take greater risks. The -1 penalty per card remaining
in hand at round's end creates urgency to shed cards, even if it means
suboptimal plays.

### What Makes It #103

SCOUT achieves a remarkable ratio of strategic depth to rules weight.
The entire game can be taught in under three minutes -- play a set or
take a card -- yet the fixed hand order constraint generates genuine
strategic complexity that rewards repeated play. Kajino identified
that the climbing genre's core satisfaction comes not from holding
good cards but from finding clever plays within constraints, and then
pushed that principle to its logical extreme by making the hand itself
the primary constraint. The double-sided cards and scouting mechanism
ensure that the constraint is navigable rather than punishing -- you
always have options, they are just spatially determined rather than
freely chosen. SCOUT is a masterclass in minimalist design: one
restriction (no rearranging), one innovation (scouting replaces
passing), one physical novelty (double-sided cards), and the
interactions between these three elements produce a game that has
earned a place among the hundred highest-rated games on
BoardGameGeek despite -- or because of -- its 15-minute play time.
