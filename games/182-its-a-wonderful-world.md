# It's a Wonderful World

## Quick Stats

- **Players:** 1-5
- **Time:** 45 min
- **Weight:** 2.33/5

## Mechanics

- Closed Drafting
- End Game Bonuses
- Hand Management
- Income
- Set Collection
- Simultaneous Action Selection

## Categories

- Card Game
- Civilization
- Economic
- Science Fiction

## Rulebook

See `rulebooks/182-its-a-wonderful-world.pdf`

## Design Notes

Designer: Frederic Guerard. Published by La Boite de Jeu (2019).

### Theme Integration

It's a Wonderful World casts players as leaders of expanding empires in a
retro-futuristic setting, constructing developments that range from industrial
complexes and recycling plants to orbital stations and super soldiers. The
science fiction framing is deliberately broad -- more Golden Age optimism than
hard sci-fi, more city-builder than space opera. This breadth is a design
virtue: it provides thematic cover for an enormous variety of card types
without requiring narrative coherence between them. A wind turbine and a
zeppelin factory and a cloning facility can coexist in the same empire
because the setting's aesthetic embraces maximalist technological progress
rather than realistic world-building.

The five resource types -- Materials (grey cubes), Energy (black), Science
(green), Gold (yellow), and Exploration (blue) -- correspond loosely to
sectors of a developing civilization. Early-game cards tend to require
Materials and Energy, representing industrial foundations. Mid-game cards
shift toward Science and Gold, representing economic and technological
maturity. Late-game cards emphasize Exploration, representing outward
expansion. This progression is not enforced mechanically but emerges from
the card costs: cheap cards need basic resources, expensive cards need
advanced ones. The resource types create a soft tech tree within the
drafting system, where your early picks shape which later picks are viable.

The simultaneous drafting mechanism maps to diplomatic competition among
rival empires. Each round, all players draft from the same card pool,
selecting developments to construct. The cards you pass become your
opponents' options. The tension of watching a card you need move around
the table and hoping it survives to return to you is the game's most
emotionally charged moment -- and it maps neatly to the theme of rival
civilizations racing to claim the same technological breakthroughs. The
drafting is the game's primary interaction, and it carries more thematic
weight than the solo engine-building that follows it.

### Core Loop

The game plays over 4 rounds. Each round consists of a drafting phase
followed by a planning phase and a production phase:

1. DRAFTING PHASE -- Deal 7 cards to each player. Players simultaneously
   select one card from their hand and place it face-down, then pass the
   remaining cards to the next player (left in rounds 1 and 3, right in
   rounds 2 and 4). Reveal selected cards simultaneously. Repeat until
   all 7 cards have been drafted.

2. PLANNING PHASE -- For each drafted card, the player decides:
   a. CONSTRUCT -- Place the card in their construction area, where it
      awaits resources to complete. Each card shows a resource cost
      (specific quantities of specific resource types) that must be
      filled to finish construction.
   b. RECYCLE -- Discard the card to immediately receive one resource
      cube of the type shown on its recycling bonus (printed in the
      top-left corner). The cube is placed on a card under construction
      or stored on the empire card if no card needs it.

3. PRODUCTION PHASE -- Resources are produced in a fixed order: Materials
   first, then Energy, Science, Gold, and finally Exploration. For each
   resource type in sequence:
   a. Count the total production value of that resource from all completed
      cards in your empire (each card shows production icons).
   b. Receive that many cubes of that resource type.
   c. Assign each cube to a card under construction (filling its resource
      cost) or discard it (excess cubes cannot be stored between production
      steps, with one exception below).
   d. If a card under construction is fully paid, immediately complete it --
      move it to your empire, where it contributes its production values
      for all subsequent resource types THIS round and all future rounds.
   e. CHARACTER BONUS: Some completed cards award a Financier (1 extra Gold
      cube) or General (1 extra Exploration cube) token. These are assigned
      during the relevant production step and provide their bonus each round.

4. END OF ROUND -- After all five resource types have been produced, the
   round ends. Unfinished constructions remain with their partial resource
   cubes for the next round. Begin the next round with a new draft of 7
   cards.

5. END GAME -- After 4 rounds, score victory points from completed cards
   (each card has a VP value) plus end-game bonus cards (which award VP
   for meeting specific conditions, such as having the most cards of a
   certain type or reaching production thresholds).

### Key Design Patterns

FIXED PRODUCTION ORDER AS ENGINE CASCADING: The resource production sequence
-- Materials, Energy, Science, Gold, Exploration -- is the game's defining
structural insight. Because resources produce in a fixed order and completed
cards immediately contribute their production to subsequent types within the
same round, players can engineer cascading chains. A card that costs only
Materials, when completed during the Materials step, immediately contributes
its Energy production during the Energy step, which might complete another
card that contributes Science production, and so on. Building cards that
cascade across the production sequence transforms a round from "produce five
separate resource types" into a single flowing engine where each step fuels
the next. Designing and executing these cascade chains is the game's central
strategic satisfaction, and the fixed production order makes them plannable
rather than accidental.

RECYCLE AS TEMPO TOOL: The recycle decision -- discard a drafted card for
one immediate resource cube rather than attempting to construct it -- is a
constant tension throughout the game. Recycling sacrifices long-term value
(the card's production, VP, and bonuses) for short-term tempo (one cube
now). This tradeoff is elegantly calibrated: the recycled resource is often
the exact cube needed to complete a more valuable card under construction,
creating a micro-decision with outsized strategic impact. Recycling also
serves as a pressure valve for drafting -- if you drafted a card primarily
to deny it to an opponent, recycling it extracts value from a defensive
pick. The recycle icon (showing which resource type you receive) adds a
secondary evaluation axis to every card: its recycle value may be more
important than its construction value depending on your current board state.

SIMULTANEOUS DRAFTING AS SCALABLE INTERACTION: The closed drafting mechanism
provides the game's primary player interaction while maintaining near-perfect
scalability from 1 to 5 players. At any count, each player evaluates the
same fundamental question: which card is most valuable to me, and which
cards am I willing to let pass to my neighbor? At higher player counts,
cards circulate through more hands, increasing the uncertainty about which
cards will return. At 2 players, the draft is intensely personal -- you see
every card your opponent receives. The drafting direction alternation (left
in odd rounds, right in even) prevents one player from consistently
benefiting from their neighbor's discards. The simultaneous selection
eliminates downtime entirely: all players are engaged at every moment,
which is how the game maintains a 45-minute play time even at 5 players.

RESOURCE CUBES AS PHYSICAL PROGRESS TRACKING: Each card under construction
has resource slots that are physically filled with colored cubes as resources
are assigned. This provides perfect information about every player's
construction progress -- you can see exactly how close any opponent is to
completing any card. The physical cubes also create satisfying tactile
feedback as engines accelerate: early rounds see one or two cubes placed per
production step, while late rounds see cascades of cubes flowing across
multiple cards in rapid succession. The visibility of construction progress
informs drafting decisions: if you can see that an opponent is one Science
cube away from completing a powerful card, you may prioritize recycling or
constructing cards that produce Science to deny them the opportunity, or
draft the card they clearly need.

FINANCIER AND GENERAL TOKENS AS COMPOUND GROWTH: The Financier and General
tokens awarded by certain completed cards provide one Gold or Exploration
cube respectively during every subsequent production phase. Because these
bonuses are permanent and cumulative, acquiring them early creates compound
growth -- each token produces value across all remaining rounds. This makes
token-granting cards disproportionately valuable in early rounds and
creates a race dynamic within the draft: players who recognize the
compound value of early tokens will prioritize them, while players focused
on VP-heavy cards may fall behind in production capacity. The tokens also
create a strategic branching point: Gold tokens support economic strategies
(Gold-heavy cards tend to be high-VP), while Exploration tokens support
expansion strategies (Exploration-heavy cards tend to have powerful bonuses).

END GAME BONUSES AS STRATEGIC DIRECTION: Several cards provide VP bonuses at
game end based on specific conditions -- most cards of a type, highest
production in a resource, sets of distinct categories. These bonus cards
serve as strategic compasses: drafting one early shapes your priorities for
the remaining rounds. A player holding a bonus for "most Energy production"
will draft and construct Energy-producing cards more aggressively than they
otherwise would, creating divergent strategies from a shared card pool. The
bonuses also create drafting tension: you may need to draft a card not for
its own value but to prevent an opponent from meeting their bonus condition.
This converts the bonus cards from solo optimization targets into interactive
competitive pressure.

FOUR-ROUND ARC AS COMPRESSION: The entire game plays in exactly four
rounds of drafting and production. This compression is a deliberate design
choice that prevents engine-building from becoming engine-perfecting. Four
rounds is enough to build a functional production cascade but not enough to
optimize it completely. Players must commit to strategies early, tolerate
imperfection in their engines, and extract maximum value from incomplete
machines. The fixed round count also makes the game's tempo legible: Round 1
is foundation-laying, Round 2 is engine-building, Round 3 is acceleration,
and Round 4 is extraction. This arc gives the game a narrative shape despite
its mechanical abstraction, and it ensures that the 45-minute play time is
consistent regardless of player decisions.

### What Makes It #182

It's a Wonderful World distills the engine-building genre to its essential
pleasure -- the cascade of resources flowing through a constructed production
chain -- while wrapping it in a drafting mechanism that provides interaction,
tension, and replayability. The fixed production order is the game's
structural breakthrough: it transforms simultaneous resource production into
a sequential puzzle where the order of card completion matters as much as the
cards themselves. At 45 minutes and 2.33 weight, the game delivers the
satisfaction of a heavy economic engine builder in a fraction of the time,
with no downtime thanks to simultaneous play. The recycle mechanism gives
every card two possible values, ensuring that no draft pick is wasted.
The result is a game that rewards repeated play as players internalize
the production cascade logic and begin to see not just individual cards
but the chains they enable.
