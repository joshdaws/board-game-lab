# Heat: Pedal to the Metal

## Quick Stats

- **Players:** 1-6
- **Time:** 30-60 min
- **Weight:** 2.21/5

## Mechanics

- Catch the Leader
- Deck, Bag, and Pool Building
- Hand Management
- Programmed Movement
- Push Your Luck
- Race
- Simultaneous Action Selection

## Categories

- Racing
- Sports

## Rulebook

See `rulebooks/47-heat.pdf`

## Design Notes

Designers: Asger Harding Granerud & Daniel Skjold Pedersen. Published by Days of
Wonder (2022). Art by Vincent Dutrait. Winner of the 2022 Golden Geek Medium Game
of the Year. Nominated for the 2023 Spiel des Jahres.

### Theme Integration

Heat: Pedal to the Metal achieves what decades of racing board games have
struggled with — it makes a card game feel like driving a car. The central
conceit is that your personal deck of cards is not an abstraction layered atop a
racing game; it *is* the car. Speed cards are your engine's output, heat cards
are thermal stress accumulating in the powertrain, stress cards are lapses in
driver concentration, and upgrade cards are aftermarket modifications bolted onto
the chassis before the race. When you push too hard through a corner, you do not
lose "points" or take "damage" in the typical board game sense — heat cards
migrate from your engine reserve into your discard pile and eventually cycle into
your draw deck, physically clogging your hand with dead cards that cannot be
played for speed. The degradation is not punitive bookkeeping; it is something
you feel in the shrinking quality of every subsequent hand you draw. Conversely,
downshifting into lower gears triggers cooldown, which moves heat cards back out
of your hand and into the engine reserve — the mechanical equivalent of letting
the brakes cool on a long straight. This bidirectional flow of heat cards
between engine, discard pile, draw deck, and hand is the game's defining
structural metaphor: managing a race car is managing a thermodynamic system.

The gear pawn sitting on your player board is another triumph of thematic
mapping. First gear lets you play one card but grants three cooldown. Fourth
gear demands four cards but offers no cooldown at all. The tradeoff between
speed and recovery is not explained through rules jargon — it is visible on the
board as a physical dial that players shift up and down, intuitively
understanding that higher gears mean more power and more risk. Even slipstreaming
(drafting behind another car for two free spaces of movement) and spinning out
(failing to pay heat at a corner, resetting to first gear with penalty stress
cards) map cleanly to real motorsport phenomena. The game never asks players to
learn an abstract system and then imagine it represents racing. The system *is*
racing, translated into cards.

### Core Loop

Each round follows a simultaneous-then-sequential structure across up to nine
steps:

1. SHIFT GEARS — All players simultaneously check their gear pawn (1st through
   4th) and decide whether to shift. Moving one gear up or down is free. Shifting
   two gears at once costs one heat card from the engine reserve, representing
   mechanical strain. The current gear determines how many cards must be played
   this round.

2. PLAY CARDS — All players simultaneously select cards from their hand equal to
   their gear number and place them facedown. This is the key commitment moment:
   you choose your speed before knowing what opponents will do or where
   slipstreaming opportunities will arise.

3. REVEAL AND MOVE — In player order (determined by track position, leader
   first), each player reveals their cards, sums the speed values, and advances
   that many spaces. Stress cards, when played, are resolved by flipping cards
   from the draw pile until a speed card (value 1-4) appears, injecting
   controlled randomness into the movement total.

4. ADRENALINE — The last-place car (and the second-to-last in games with five or
   more players) gains one bonus speed and one bonus cooldown, representing the
   desperate energy of a trailing driver.

5. REACT (BOOST AND COOLDOWN) — After moving, the active player may boost once
   by paying one heat card to flip the top card of their draw deck for additional
   speed. Then they perform cooldown based on their current gear, moving heat
   cards from hand back to the engine reserve.

6. SLIPSTREAM — If the player's car ended adjacent to or directly behind another
   car, they may slipstream forward two spaces. Crucially, slipstream movement
   does not count toward speed for corner-checking purposes, preventing it from
   cascading into heat penalties.

7. CHECK CORNERS — If the player crossed a corner line during their total
   movement, they compare their speed (card sum plus boost, excluding slipstream)
   to the corner's speed limit. Excess speed must be paid as heat cards from the
   engine reserve to the discard pile. If the player cannot pay, they spin out:
   the car moves backward to the space before the corner, the gear resets to
   first, and stress cards are added to the discard pile.

8. DISCARD AND DRAW — Played cards go to the discard pile. The player draws back
   up to seven cards. When the draw pile is empty, the discard pile is shuffled
   to form a new draw pile — the moment when accumulated heat and stress cards
   re-enter circulation.

After all players have resolved their turns, a new round begins. The race ends
when a player crosses the finish line after the prescribed number of laps, with
final position determined by distance traveled.

### Key Design Patterns

HEAT AS PUSH-YOUR-LUCK CURRENCY: Heat cards are the game's most elegant design
element because they function simultaneously as resource, penalty, and timer.
Every heat card begins the game in the engine reserve — a pool of spendable
tokens on the player board. When spent (to pay corner penalties, shift two gears,
or boost), they migrate to the discard pile and eventually shuffle into the draw
deck, where they appear in future hands as dead weight. A hand with two heat
cards in fourth gear means only two of your four played cards contribute real
speed. The push-your-luck dimension emerges because spending heat early generates
immediate tactical advantage (taking a corner at high speed, executing an
aggressive overtake) but degrades future hands. The question is never whether to
spend heat — it is *when*, and how much degradation you can absorb before your
deck cycles. Players who spend heat recklessly find themselves drawing clogged
hands at critical moments. Players who hoard heat miss overtaking windows that
never return. The optimal path is narrow, context-dependent, and different every
race, which is why the mechanic generates tension rather than rote optimization.

GEAR-SPEED COUPLING AS RISK DIAL: The gear system is a masterclass in making a
single variable control multiple consequences. Your gear determines how many
cards you play (and thus your approximate speed), your cooldown rate, and your
flexibility for next turn (since you can only shift one gear for free). First
gear plays one card with three cooldown — perfect for recovering heat but
agonizingly slow. Fourth gear plays four cards with zero cooldown — maximum speed
but no recovery and a commitment to staying at high gear or paying heat to
downshift rapidly. The gear pawn thus functions as a risk dial: higher gears
amplify both speed potential and vulnerability. Critically, because you set your
gear *before* selecting cards, you are committing to a speed range before seeing
the full consequences. Approaching a tight corner in fourth gear means playing
four cards and hoping the total does not wildly exceed the speed limit — but
downshifting to second means sacrificing two cards of speed on the preceding
straight. The gear decision, made simultaneously with all opponents, is the
game's central moment of strategic commitment.

DECK-AS-CAR-ENGINE METAPHOR: Heat inverts the typical deck-building paradigm.
Where most deck-builders ask players to add powerful cards to improve their
decks, Heat starts each player with an efficient 12-card speed deck (values
ranging from 1 to 4) plus three starting upgrades, and then *degrades* it
through play. Heat cards and stress cards are pollutants that dilute the deck's
quality. The deck does not grow toward power — it struggles to maintain
performance under accumulating thermal load. This inversion perfectly mirrors
motorsport reality: a race car does not get faster as the race progresses; it
manages wear, tire degradation, and thermal limits to maintain competitive pace.
The pre-race garage module, where players draft upgrade cards to customize their
starting deck, extends the metaphor further — you are literally tuning your
engine before the race, choosing between cards that offer raw speed, flexible
heat spending, or specialized corner abilities. Because the decks are small
(roughly 15-18 cards), every single card substitution is felt across multiple
hands, making the tuning decisions consequential in a way that large-deck
builders rarely achieve.

CORNER SPEED LIMITS AS TERRAIN DECISIONS: Corners are the game's primary source
of spatial strategy. Each corner on the track has a posted speed limit — exceed
it, and you pay heat equal to the difference. This transforms the track from a
simple linear path into a series of decision nodes. The approach to every corner
poses the same fundamental question: do you enter fast (accepting heat cost for
positional advantage) or slow down (preserving heat but potentially losing
places)? The answer depends on your current heat reserves, how many laps remain,
what cards are likely in your upcoming draws, and where opponents are positioned
relative to slipstreaming range. Tight sequences of corners punish aggressive
drivers who cannot recover heat between bends. Long straights before sharp
corners reward players who stay in high gear through the straight and absorb a
heavy heat penalty at the turn. The track layout thus functions as a second
layer of game design — different circuits create fundamentally different
strategic puzzles, with the same card system producing distinct racing
experiences on each map.

SLIPSTREAMING AS POSITIONAL REWARD: The slipstream mechanic — two free spaces of
movement when ending adjacent to or behind another car — is a design solution to
two problems simultaneously. First, it creates meaningful spatial interaction in
a game where players cannot directly block or attack each other. Your position
relative to opponents matters every single turn, because ending near another car
grants a significant speed bonus. Second, it produces natural pack dynamics that
mirror real motorsport: cars that stay close together gain drafting advantages,
while breakaway leaders lose the slipstream benefit. This means the pack tends to
stay compressed through straights and separate at corners (where different heat
budgets produce different speeds), creating the ebb-and-flow rhythm of real
racing without any artificial rubber-banding. The two-space bonus is large enough
to matter tactically — it can be the difference between clearing a corner at the
speed limit or exceeding it — but it does not count toward speed for corner
checks, preventing degenerate strategies where players chain slipstream into
free corner clearance.

ADRENALINE AS STRUCTURAL CATCH-UP: The adrenaline rule gives the last-place car
(and second-to-last with five or more players) one extra speed and one extra
cooldown each round. This is not a dramatic rubber-band mechanic that punishes
leaders or reverses outcomes — it is a subtle structural correction that keeps
trailing players engaged. One speed and one cooldown per round is roughly
equivalent to half a gear's worth of advantage, enough to prevent a driver from
falling hopelessly behind after a single spinout but not enough to erase skilled
play by leaders. The design wisdom is in its restraint: adrenaline helps you stay
in slipstreaming range of the pack (where the real catch-up happens) rather than
catapulting you back into contention. It solves the specific problem of a player
who spins out on lap one and then has no meaningful decisions for the rest of the
race, without undermining the competitive integrity that makes winning feel
earned.

STRESS CARDS AS CONTROLLED CHAOS: Stress cards are the game's randomness
injection mechanism, distinct from heat cards in both function and feel. Three
stress cards begin in each player's deck. When played, instead of providing a
known speed value, the player flips cards from the draw pile until a speed card
appears (value 1-4), discarding any non-speed cards revealed along the way. This
creates bounded but unpredictable movement — you know you will get between 1 and
4 speed, but not which value. Stress cards are also inflicted as a penalty for
spinning out, further degrading the deck of a player already in trouble. The
design is elegant because stress cards occupy a middle ground between the
reliability of speed cards and the uselessness of heat cards. They contribute
*something* to your speed each turn, but you cannot plan precisely around them.
This means a hand with one stress card and three speed cards in fourth gear is
not catastrophic — it is exciting, a small gamble embedded in an otherwise
deterministic system. Stress cards ensure that even perfectly planned turns carry
a sliver of uncertainty, preventing the game from becoming a pure optimization
puzzle.

WEATHER AND ROAD CONDITIONS AS MODULAR VARIABILITY: The advanced modules —
weather tokens and road condition tokens — demonstrate the designers'
understanding that a racing game must support repeated play on the same tracks
without becoming stale. Weather tokens modify starting conditions for all
players (extra starting heat or stress cards, adjusted setups), while road
condition tokens are placed on individual corners to alter speed limits or
sector rules for that specific race. This modularity works because the base
system is robust enough to absorb perturbations without breaking. A corner with
a reduced speed limit changes the approach calculus for every player on every
lap, cascading into different gear decisions, different slipstream positions, and
different heat budgets. The weather and road system transforms each track from a
single puzzle into a family of related puzzles, dramatically extending replayability
without adding rule complexity — you learn the modifiers once and apply them
to any track.

### What Makes It #47

Heat: Pedal to the Metal solves the fundamental problem of racing board games:
how to make speed feel thrilling and consequential when turns are sequential and
movement is deterministic. The answer is the heat management system — a closed
thermodynamic loop where every burst of speed creates future hand degradation,
and every recovery period sacrifices competitive position. This is not a resource
track or a hit-point pool; it is a deck pollution mechanic that makes risk
tangible in every card draw. Combined with the gear system (which forces players
to commit to speed ranges before seeing outcomes), corner speed limits (which
create spatial decision nodes on every circuit), and slipstreaming (which rewards
positional awareness over raw card power), Heat produces the pack dynamics,
lead changes, and dramatic finishes that define real motorsport — all from a
system elegant enough to teach in ten minutes.

The game's broader design achievement is proving that thematic coherence and
mechanical accessibility can reinforce each other rather than trade off. Every
rule in Heat maps to something a non-gamer intuitively understands about cars:
higher gears are faster but harder to control, engines overheat when pushed,
drafting behind another car is faster, and spinning out is bad. This thematic
transparency means the 2.21-weight complexity rating understates the strategic
depth — players internalize the system through metaphor rather than memorization,
freeing cognitive bandwidth for the tactical decisions that make each race
unique. The modular expansion system (garage upgrades, weather, road conditions,
championship campaigns) layers additional complexity precisely where experienced
players want it without burdening newcomers. Granerud and Pedersen, building on
their earlier work with Flamme Rouge, have delivered the definitive modern
racing game — one where the deck is the car, heat is the enemy, and every corner
is a negotiation between ambition and survival.
