# Just One

## Quick Stats

- **Players:** 3-7
- **Time:** 20-60 min
- **Weight:** 1.03/5

## Mechanics

- Communication Limits
- Cooperative Game
- Deduction
- Score-and-Reset Game

## Categories

- Deduction
- Party Game
- Word Game

## Rulebook

Reference to `rulebooks/156-just-one.pdf`

## Design Notes

Designers: Ludovic Roudy, Bruno Sautter. Published by Repos Production (2018).

### Theme Integration

Just One has no narrative theme in the traditional sense --- it is a word
association game in which players cooperatively try to help one active player
guess a mystery word by each writing a single-word clue. The "theme" is the
social act of communication itself, and the game's central rule --- that
duplicate clues are removed before the guesser sees them --- transforms
ordinary word association into a psychological puzzle about anticipating how
other people think. The game is themed around the tension between the obvious
and the unique, between what a word means to you and what it means to
everyone else at the table. This is not a pasted-on theme; it is the
irreducible core of the experience.

The physicality of the game reinforces its social nature. Each player writes
their clue on an easel-style stand, visible to other clue-givers but hidden
from the guesser. The reveal moment --- when duplicate clues are silently
removed and the remaining clues are shown --- creates a shared dramatic beat
that is entirely player-generated. The game provides no narrative arc, no
characters, no world-building; instead, it provides a framework for players
to discover how well they know each other's minds. Every round is a miniature
experiment in theory of mind, and the emotional payload --- laughter at
unexpected duplicates, satisfaction at a clever unique clue, groaning when
the guesser misinterprets --- emerges entirely from the players rather than
from the game's components.

The word cards themselves are the game's only content, and their design is
deliberately ecumenical. Each card contains five numbered words of varying
difficulty, and the active player randomly selects which number to use. The
words range from concrete nouns to abstract concepts, from universally known
terms to culturally specific references. This variance ensures that each
round presents a different communication challenge: some words have obvious
clues that will almost certainly collide, while others are obscure enough
that duplicates are unlikely but the guesser may struggle. The word
selection is the game's hidden design lever, creating difficulty curves
without any visible mechanism.

### Core Loop

The game is played over 13 rounds. One player is the active guesser each
round, rotating clockwise. The goal is to collectively guess as many of the
13 mystery words as possible.

**Round Structure:**

1. WORD SELECTION --- The active player draws a card from the deck and places
   it on their easel without looking at the word side. The card displays five
   words numbered 1-5. The active player announces a number from 1 to 5,
   selecting one of the five words. All other players can see the chosen word;
   the active player cannot.

2. CLUE WRITING --- Each non-active player secretly writes a single-word clue
   on their easel. The clue must be exactly one word, and it must relate to
   the mystery word in a way that the active player will understand. Players
   may not communicate during this phase. Numbers, acronyms, and proper nouns
   are permitted, but no variation of the mystery word itself is allowed.

3. DUPLICATE REMOVAL --- All clue-givers simultaneously reveal their clues
   to each other (but NOT to the active player). Any clues that are identical
   or sufficiently similar are removed --- turned face-down so the active
   player will never see them. This is the game's defining mechanism: obvious
   clues are punished because multiple players will think of the same word.

4. REVEAL AND GUESS --- The remaining unique clues are shown to the active
   player. The active player has one guess. They may also choose to pass,
   which sacrifices the current card but avoids the penalty for a wrong guess.

5. SCORING --- If the active player guesses correctly, the card is placed in
   the success pile (one point). If the active player passes, the card is
   discarded (no point, no penalty). If the active player guesses incorrectly,
   the card is discarded AND the top card of the draw pile is also discarded
   (a two-card penalty --- one for the failed word and one from the remaining
   supply).

6. ROTATION --- The next player clockwise becomes the active player. A new
   round begins.

**End Game:** After 13 rounds, count the success pile. The group's score out
of 13 is evaluated against a printed scale: 1-6 is poor, 7-8 is acceptable,
9-10 is good, 11 is excellent, 12 is incredible, and a perfect 13 is
legendary.

### Key Design Patterns

DUPLICATE ELIMINATION AS STRATEGIC INVERSION: The removal of identical clues
is the single mechanism that transforms Just One from a trivial word
association game into a genuine strategic puzzle. In any other clue-giving
game, the optimal strategy is to give the most obvious, most likely-to-be-
understood clue. In Just One, the most obvious clue is the most dangerous,
because if two or more players write it, none of them count. The optimal
strategy is to give a clue that is unique among your fellow clue-givers but
still comprehensible to the guesser --- a second-order or third-order
association that only you would think of, but that still points clearly to
the target word. This inversion of the "be obvious" instinct is the game's
entire strategic depth, and it emerges from a single rule.

THEORY OF MIND AS PRIMARY SKILL: Just One is fundamentally a game about
modeling other players' thought processes. When writing a clue, you must
simultaneously consider what the mystery word makes you think of, what it
makes everyone else think of, and how to differentiate your clue from
theirs. This requires reading the specific people at your table --- a group
of engineers will converge on different clues than a group of literature
students. The game's skill ceiling is not vocabulary or word knowledge but
social perception: the ability to predict which associations are common
(and should be avoided) versus which are personal (and therefore safe). This
makes Just One improve with repeated play among the same group, as players
develop increasingly sophisticated models of each other's association
patterns.

SCORE-AND-RESET AS ACCESSIBILITY ARCHITECTURE: Each round is self-contained.
There is no carry-over state between rounds, no persistent advantage, and no
way for early mistakes to cascade into unrecoverable positions. The only
between-round state is the score pile, which is cooperative --- no individual
player wins or loses, only the group. This score-and-reset structure makes
the game infinitely forgiving: a disastrous round is immediately followed by
a fresh start. It also makes the game tolerant of player skill variance.
Weak clue-givers and strong ones contribute to the same collective outcome,
and the cooperative framing eliminates the social friction of competitive
asymmetry.

WRONG-GUESS PENALTY AS RISK CALIBRATION: The penalty for an incorrect
guess --- losing both the current card and the top card of the draw pile ---
is exactly twice the cost of passing. This creates a genuine decision for
the guesser when the remaining clues are ambiguous. If you are uncertain,
passing costs one point but guessing wrong costs two. The guesser must
assess their confidence level and decide whether the expected value of
guessing exceeds the expected value of passing. This small decision is the
only strategic choice the guesser faces, and the 2:1 penalty ratio is
calibrated to make it meaningful without making it agonizing.

PLAYER COUNT AS DIFFICULTY DIAL: The game scales from 3 to 7 players, and
the player count fundamentally changes the difficulty. With 3 players, only
two people write clues, so a single duplicate eliminates all information.
With 7 players, six people write clues, and even after duplicates are
removed, several clues typically survive. This means the game is hardest at
low player counts and easiest at high ones, which is the ideal scaling
direction for a party game: larger groups have more fun because the game is
more generous, and smaller groups still find it challenging.

ZERO PREPARATION, ZERO DOWNTIME: Just One has essentially no setup (shuffle
the deck, hand out easels) and no downtime during play (everyone writes
clues simultaneously, and the reveal and guess happen as a group). The
entire time investment is active engagement. This design discipline ---
eliminating every moment that is not player-facing --- is critical to the
game's success as a party game. It respects players' time so thoroughly
that the game feels shorter than its actual duration.

COOPERATIVE FRAMING AS SOCIAL LUBRICANT: By making the game fully
cooperative, the designers eliminated the most common barrier to party game
adoption: the fear of losing publicly. No player is singled out for failure
(even incorrect guesses are framed as the group's loss), and no player is
pressured to perform (a clue-giver whose clue gets eliminated still
contributed to the group's effort). The cooperative structure transforms
potential embarrassment into shared comedy --- a round where all clues are
duplicated is hilarious rather than humiliating, because everyone failed
together.

### What Makes It #156

Just One earned the Spiel des Jahres in 2019, and its ranking at #156
reflects its extraordinary achievement in the most constrained design space
in board gaming: the party game. With a single innovative mechanism ---
duplicate clue elimination --- Roudy and Sautter transformed word
association from a solved problem into a genuine strategic exercise. The
game requires no specialized knowledge, no literacy in gaming conventions,
and no tolerance for complexity. It plays in twenty minutes, teaches in two,
and accommodates up to seven players without slowing down. Yet it produces
moments of genuine intellectual satisfaction when a cleverly differentiated
clue survives elimination and leads to a correct guess. Just One proves that
innovation in game design does not require complexity, and that a single
well-chosen mechanism can create an experience that stands alongside games
with a hundred times its rules overhead.
