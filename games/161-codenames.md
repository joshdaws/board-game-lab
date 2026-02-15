# Codenames

## Quick Stats

- **Players:** 2-8
- **Time:** 15 min
- **Weight:** 1.26/5

## Mechanics

- Communication Limits
- Deduction
- Memory
- Race
- Team-Based Game

## Categories

- Card Game
- Deduction
- Party Game
- Spies / Secret Agents
- Word Game

## Rulebook

See `rulebooks/161-codenames.pdf`

## Design Notes

Designer: Vlaada Chvátil. Published by Czech Games Edition (2015).

### Theme Integration

Codenames casts two teams as rival spy agencies, each with a Spymaster who
knows the secret identities of agents in the field. The field is a 5x5 grid
of word cards, and the Spymaster must guide their team to identify the correct
agents using single-word clues. The spy theme is deliberately thin — there are
no gadgets, no missions, no betrayals — but it does essential structural work.
It provides an intuitive reason for asymmetric information (the Spymaster has
intelligence the field operatives lack), for communication restriction (coded
messages are inherently compressed and ambiguous), and for the penalty of
contacting the wrong agent (you might alert the enemy or, worse, trigger the
assassin). The espionage framing converts what could feel like a dry word-
association exercise into a tense social experience with stakes.

The assassin card is where the theme does its heaviest lifting. One word on
the grid represents the assassin, and guessing it means instant defeat. This
single card transforms the Spymaster's job from "connect as many words as
possible" to "connect as many words as possible while avoiding a specific
word." The assassin creates a no-go zone in the Spymaster's mental map,
forcing negative thinking: every clue must be evaluated not just for what it
connects but for what it might accidentally point toward. In espionage terms,
you are not just finding allies — you are avoiding a catastrophic intelligence
failure. The assassin gives the spy theme genuine mechanical teeth.

The color-coded key card, visible only to the two Spymasters, is the game's
most elegant thematic element. It is literally a classified document — a map
of the field showing which words belong to which team, which are innocent
bystanders, and which is the assassin. The Spymasters sit across from each
other, both staring at the same grid but seeing different patterns depending
on their key card orientation. This shared-but-different perspective is a
perfect mechanical expression of rival intelligence services working from
the same raw data but drawing different conclusions.

### Core Loop

The game is structured as an alternating team competition played in rounds
until one team identifies all their agents or a team triggers the assassin:

1. SETUP — Lay out a 5x5 grid of word cards, randomly drawn from a large
   deck. Place the key card in its stand so both Spymasters can see it but
   no one else can. The key card determines which 8-9 words belong to each
   team, which are neutral bystanders, and which is the assassin. The team
   indicated on the key card's border goes first (and has 9 agents to find
   instead of 8, compensating for the first-move advantage).

2. SPYMASTER CLUE — The active Spymaster gives a one-word clue and a number.
   The word must relate semantically to one or more of their team's words on
   the grid. The number indicates how many words the clue is intended to
   connect. For example, "Tree, 2" suggests two words on the grid relate to
   trees. The Spymaster may not use any word visible on the grid, may not
   give extra-linguistic hints (gestures, tone, emphasis), and may not
   qualify or retract the clue once spoken.

3. TEAM DISCUSSION — The field operatives discuss openly which words the clue
   might refer to. The Spymaster must remain stone-faced during this
   discussion, giving no indication of whether the team's reasoning is
   correct. This enforced silence during deliberation is critical: the
   Spymaster has already compressed their information into a single word
   and number, and any further communication would bypass the game's core
   constraint.

4. GUESSING — The team touches a word card on the grid. The Spymaster
   reveals its identity by covering it with the appropriate color card:
   a) CORRECT (team's agent) — The team may continue guessing. They are
      allowed up to N+1 total guesses, where N is the number given with the
      clue. The +1 allows teams to revisit words from previous clues they
      are now more confident about.
   b) NEUTRAL (bystander) — The turn ends immediately. No penalty beyond
      lost tempo.
   c) OPPONENT'S AGENT — The turn ends, and the opponent's agent is now
      revealed (effectively helping the other team).
   d) ASSASSIN — The guessing team loses instantly.

5. TURN PASSES — Play alternates between teams until one side identifies all
   their agents (winning) or a team contacts the assassin (losing).

### Key Design Patterns

ONE-WORD COMMUNICATION AS COMPRESSION CHALLENGE: The entire game hangs on the
Spymaster's constraint: one word, one number. This is not a party game gimmick
but a genuine information theory problem. The Spymaster must encode a complex
mapping — which of 25 words belong to their team — into a lossy, ambiguous
signal. The number is a confidence indicator: saying "Ocean, 3" means the
Spymaster believes three words relate to "ocean," but the operatives must
determine which three from 25 possibilities. Higher numbers are higher risk
and higher reward. The compression challenge is what creates the game's
signature moments — the brilliant four-word clue that connects seemingly
unrelated words, and the disastrous clue that accidentally points to the
assassin. Chvátil understood that the most interesting decisions in
communication games are not about what you say but about what you cannot say.

ASYMMETRIC INFORMATION AS SOCIAL DRAMA: The key card creates a knowledge gap
that drives all interaction. The Spymaster knows everything but can say almost
nothing. The operatives know nothing but can discuss freely. This asymmetry
produces the game's characteristic emotional arc: the Spymaster's silent
anguish as the team debates the wrong word, the operatives' triumphant moment
when they decode an ambitious clue, and the collective groan when an obvious
connection is missed. The drama is emergent — it arises from the information
gap, not from scripted events. Every table generates unique stories because
every combination of words, key card, and players produces unrepeatable
social dynamics.

ASSASSIN AS CATASTROPHIC RISK: The assassin occupies one of 25 grid positions
and triggers instant defeat if guessed. Its impact on gameplay is wildly
disproportionate to its statistical weight (4% of the grid). The assassin's
real function is to constrain the Spymaster's clue space: every potential clue
must be filtered through "could this also point to the assassin word?" A clue
that beautifully connects three team words but could plausibly connect to the
assassin is too dangerous to give. This negative constraint is what separates
skilled Spymasters from ambitious ones. The assassin also creates the game's
most dramatic moments — the team confidently reaching for a word while the
Spymaster sits frozen, unable to intervene. Chvátil placed a cliff at the
edge of every decision, and that cliff is what makes a 15-minute party game
feel genuinely tense.

VARIABLE GRID AS INFINITE REPLAYABILITY: The 5x5 grid of randomly drawn words,
combined with a randomly oriented key card, ensures no two games share the
same puzzle. The word deck contains 200 double-sided cards (400 words), and
the key card deck provides 40 unique configurations. But the true replayability
engine is the combinatorial space of word associations. The word "BANK" next to
"RIVER" creates different Spymaster opportunities than "BANK" next to "MONEY."
Every grid is a unique semantic landscape that demands fresh analysis from both
Spymasters. This is why Codenames resists being "solved" — the puzzle is not in
the rules but in the ever-changing relationships between words, and those
relationships exist in the minds of the players, not on the components.

TEAM STRUCTURE AS SOCIAL SCAFFOLDING: Codenames requires exactly two teams with
at least two players each, and this structure is not arbitrary. The team
discussion phase — where operatives openly debate which words the clue might
refer to — is the game's social engine. One player thinks "Tree, 2" means
BARK and BRANCH; another is sure it means BARK and LEAF. The debate reveals
how different minds process associations, and it creates a collaborative
reasoning exercise that is intrinsically enjoyable regardless of outcome.
The team structure also eliminates the problem of unequal word-association
skill: a less creative player can contribute by debating others' suggestions,
and the collective intelligence of the team often exceeds any individual's
performance. Chvátil designed a game where watching other people think is as
entertaining as thinking yourself.

N-PLUS-ONE GUESSING AS CATCH-UP MECHANISM: Teams may guess one more time than
the number given with the clue. This seemingly minor rule has major strategic
implications. It allows teams to revisit words from previous rounds that they
now have additional context for. If the Spymaster said "Animal, 2" last round
and the team only got one right, they might use a bonus guess this round to
attempt the second word. The +1 rule creates an accumulating pool of partial
information that rewards teams for remembering and synthesizing across rounds.
It also means that a team falling behind can attempt to catch up with a
conservative clue (say "Paint, 1") and then use the +1 to take a shot at an
old word. The rule transforms a sequence of independent rounds into a
connected narrative of accumulating knowledge.

MINIMAL COMPONENTS, MAXIMUM SOCIAL COMPLEXITY: Codenames consists of 200 word
cards, 40 key cards, and colored cover cards. There are no boards, no tokens,
no resource tracks, no player mats. Yet it generates more social interaction,
more memorable stories, and more repeated plays than most games with ten times
the component count. This is reductive design at its purest — Chvátil stripped
away everything that was not the core experience (giving clues, debating
associations, managing risk) and let the players' minds supply the complexity.
The game's sub-$20 price point and 15-minute play time are direct consequences
of this design philosophy: when the game is the players' associations, you do
not need much in the box.

### What Makes It #161

Codenames is arguably the most successful party game design of the 2010s,
selling millions of copies and spawning an entire family of variants
(Pictures, Duet, Disney, Marvel). Its achievement is making a genuine design
problem — information compression under constraint — accessible to anyone who
speaks a language. At 1.26 weight, it is the lightest game at this tier of the
rankings, yet its skill ceiling is surprisingly high: experienced Spymasters
develop a meta-awareness of their team's association patterns and calibrate
clue ambiguity accordingly. Chvátil, known for heavy designs like Mage Knight
and Through the Ages, proved that design elegance is not about complexity but
about finding the single constraint that generates the richest decision space.
In Codenames, that constraint is one word and one number, and it is enough to
build an entire game around.
