# Bomb Busters

## Quick Stats

- **Players:** 2-5
- **Time:** 20 min
- **Weight:** 1.55/5

## Mechanics

- Communication Limits
- Cooperative Game
- Hand Management

## Categories

- Card Game

## Rulebook

See `rulebooks/113-bomb-busters.pdf`

## Design Notes

Designer: Kei Kajino. Published by Oink Games (2024).

### Theme Integration

Bomb Busters casts players as a team of bomb disposal experts working together
to defuse a bomb before the detonator reaches a critical point. The bomb is
represented by wire tiles — numbered blue wires, dangerous red wires, and
uncertain yellow wires — distributed face-down among players on tile stands.
Each player can see their own wires (sorted by number) but cannot freely
communicate their values to teammates. The tension of the theme maps directly
to the mechanical reality: you know what you hold but cannot simply tell your
partners, mirroring the high-stakes communication breakdowns that real bomb
disposal teams must navigate under pressure.

The mission-based campaign structure, with 8 core missions of escalating
difficulty and additional "Surprise" missions unlocked after completing Mission 8,
gives the game a progressive narrative arc. Each mission introduces different
combinations of red and yellow wires, equipment cards, and special rules that
modify the core experience. Equipment cards become available as wires are cut,
reflecting the team's growing understanding of the bomb's internal structure.
The detonator track — which advances with each mistake — creates a visceral
countdown timer that gives the cooperative experience its signature dread. Red
wires are instant-failure: cut one and the bomb explodes. The theme is not
merely decorative; the asymmetric information, the communication restrictions,
and the catastrophic failure state all serve to make players feel the weight of
every decision as though lives genuinely depend on it.

### Core Loop

Players take turns clockwise, starting with the Captain. On each turn, the
active bomb disposal expert must perform exactly one of three actions:

1. DUO CUT ACTION - The active player identifies a wire value that exists in
   both their own hand AND a teammate's hand. They announce the value (e.g.,
   "this wire is a 9") and designate one of the teammate's wires. If the
   designated wire matches the announced value: both players reveal their
   matching wires face-up. If incorrect and the wire is blue or yellow: the
   detonator advances one space and an Info token is placed to reveal the
   wire's true value. If incorrect and the wire is red: the bomb explodes
   and the mission fails immediately.

2. SOLO CUT ACTION - The active player may reveal 2 or 4 identical wires from
   their own hand, but ONLY if those are the only remaining uncut wires of
   that value in the game. They place the wires face-up in front of their
   tile stand. This is a safe action when the player has complete certainty
   about the remaining distribution.

3. REVEAL RED WIRES ACTION - Available only when ALL of the active player's
   remaining uncut wires are red. The player safely reveals them, removing
   those dangerous wires from the game without triggering an explosion.

The mission succeeds when all players have no wires remaining in their hands.
The mission fails if a red wire is cut or the detonator reaches the skull
symbol on the board.

### Key Design Patterns

ASYMMETRIC INFORMATION AS CORE TENSION: Every player can see their own wires
but cannot directly communicate their values. The game's entire decision space
emerges from this information asymmetry. You know you hold a 7, but does your
teammate? You need to cut matching pairs, but the communication limits mean
you must infer your teammate's holdings from their actions, the Info tokens
placed on failed attempts, and the Validation tokens that track which values
have been fully resolved. Kajino transforms a simple matching problem into a
deduction puzzle where the cost of guessing wrong ranges from a detonator
advance to instant mission failure.

GRADUATED FAILURE CONSEQUENCES: The three wire colors create a risk hierarchy
that drives every decision. Blue wires, when misidentified, advance the
detonator one space and reveal information — a costly but recoverable mistake.
Yellow wires behave identically to blue for cutting purposes but are all
considered the same value ("yellow"), adding ambiguity about which specific
wires are dangerous. Red wires are instant death: cutting one ends the mission
immediately. This graduated consequence system means players must constantly
weigh the probability of a wire being red against the information gained from
attempting a cut. The detonator track provides a secondary failure threshold
that accumulates across small mistakes.

COMMUNICATION LIMITS AS DESIGN ENGINE: Players cannot discuss the wires in
their hand or intimate their values. They may, however, talk about general
tactics, equipment use, and specific rules. This restriction is the game's
primary design engine — without it, the cooperative puzzle would be trivially
solvable. The communication limit forces players to encode information through
their action choices: which wires they attempt to cut, which teammates they
target, and when they choose solo cuts versus duo cuts all convey implicit
information about hand contents. The restriction transforms Bomb Busters from
a deduction game into a signaling game.

MISSION-BASED PROGRESSIVE COMPLEXITY: The 8 core missions escalate from simple
tutorials (Missions 1-3 teach rules incrementally) through training sessions
(Missions 4-7 introduce increasing wire complexity) to a culminating exam
(Mission 8). Each mission card specifies the number of red and yellow wires in
play, the detonator starting position, available equipment, and any special
rules. This structure serves as both a teaching tool and a difficulty curve,
allowing players to internalize the base mechanics before confronting the full
complexity. The "Surprise" missions unlocked after Mission 8 add further
twists, extending the game's lifespan beyond the initial campaign.

EQUIPMENT AS PROGRESSIVE EMPOWERMENT: Equipment cards are placed face-up over
checkmarks on the board and become available only after two wires of the value
shown on the card have been cut. This gating mechanism means that equipment —
which provides powerful rule-bending abilities like the Double Detector
(designate two wires instead of one during a Duo cut) or the Triple Detector —
becomes accessible as the mission progresses and the team accumulates
information. Equipment use is one-time only, creating pivot-point decisions
about optimal timing. The progressive availability mirrors the thematic
conceit of understanding the bomb better as you work on it.

VALIDATION TOKENS AS SHARED KNOWLEDGE: When all four wires of a single value
have been cut, a Validation token is placed on the corresponding number on the
board. This public tracking mechanism serves multiple purposes: it confirms
which values are fully resolved (enabling more confident Solo cuts for
remaining values), it reduces the deduction space for all players, and it
provides a visual progress indicator for the team. The Validation system
transforms individual successful actions into collective knowledge gains,
reinforcing the cooperative nature of the experience.

YELLOW WIRES AS CONTROLLED AMBIGUITY: Yellow wires are treated identically to
blue wires during sorting (placed by their numerical value on the tile) but are
all considered to have the single value "YELLOW" for cutting purposes. This
means a player holding a yellow wire knows its position among their sorted tiles
but must announce "this wire is yellow" when attempting a Duo cut — and the
teammate's wire must also be yellow for the cut to succeed. The dual identity
of yellow wires (numerical for sorting, categorical for cutting) creates a
layer of uncertainty that blue wires lack. In missions where yellow wires are
drawn randomly from a pool, their exact count is partially unknown (e.g., "2
out of 3" yellow wires are in play), adding a probabilistic dimension to the
deduction puzzle. Yellow wires also require a yellow Info token when
misidentified, a scarce resource that heightens the cost of failed attempts.

CHARACTER ABILITIES AS ASYMMETRIC TOOLS: Each player's Character card provides
a one-per-mission personal equipment ability, introducing asymmetric
capabilities into the cooperative framework. The Captain's Double Detector
allows designating two wires in a teammate's hand during a Duo cut action,
creating a broader information sweep at the cost of higher risk. These personal
abilities ensure that each player's role feels distinct even though the core
action set is identical, and the once-per-mission limitation creates a critical
timing decision about when to deploy a scarce but powerful resource.

PLAYER COUNT SCALING VIA TILE DISTRIBUTION: The game elegantly scales across
2-5 players by adjusting tile stand allocation. With 2 players, each receives
2 tile stands. With 3, the Captain takes 2 and others take 1. With 4-5, each
player has exactly 1 tile stand. This scaling mechanism changes the information
distribution and the deduction challenge without altering core rules. Fewer
players mean larger individual hands and more private information per player,
making Duo cuts simultaneously easier (more wires to match) and harder (more
hidden information to reason about). The detonator starting position also
adjusts by player count, calibrating difficulty to the available error margin.

### What Makes It #113

Bomb Busters distills the cooperative-with-communication-limits genre pioneered
by games like Hanabi and The Crew into a 20-minute experience with an
immediately graspable theme and a genuinely threatening failure state. Kajino's
design achieves something rare: a lightweight game where every single decision
feels consequential. The three-tier wire danger system means that even in a
game this short, there are moments of genuine dread when a player must decide
whether to attempt a cut on a wire that might be red. The mission-based
campaign provides progression without bloat, and the small box belies a game
with surprising strategic depth in how players encode and decode information
through constrained actions. At 1.55 weight, it is among the lightest games
in the top rankings, proving that design elegance and mechanical minimalism
can produce experiences as engaging as far heavier systems.
