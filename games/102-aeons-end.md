# Aeon's End

## Quick Stats

- **Players:** 1-4
- **Time:** 60 min
- **Weight:** 2.81/5

## Mechanics

- Cooperative Game
- Deck Construction
- Hand Management
- Once-Per-Game Abilities
- Solo / Solitaire Game
- Variable Player Powers

## Categories

- Card Game
- Fantasy
- Fighting
- Science Fiction

## Rulebook

See `rulebooks/102-aeons-end.pdf`

## Design Notes

Designer: Kevin Riley. Development by Nick Little, Travis R. Chance,
and Jenny Iglesias. Published by Indie Boards & Cards / Action Phase
Games (2016).

### Theme Integration

Humanity's survivors shelter in Gravehold, the last bastion against
The Nameless -- creatures that travel through dimensional breaches.
The breach mages have turned the enemy's own conduits into weapons,
channeling destructive magic through the very rifts that threaten
their home. This thematic premise does structural work at every level
of the game's design. The breach system -- four numbered breach cards
per player, initially mostly closed -- represents the mages' gradual
mastery of dangerous dimensional magic. Opening a breach requires
spending aether to focus it (rotate it clockwise through multiple
stages) and then paying a final open cost, physically representing
the careful, incremental process of taming a volatile portal. Once
opened, breaches remain open permanently, reflecting hard-won
mastery that cannot be unlearned.

The cooperative structure is not bolted onto a competitive framework
but designed from the ground up as a shared survival experience.
Players defend both their individual life totals and Gravehold's
collective life pool (starting at 30). The nemesis attacks both
targets through different card effects, creating a dual-front defense
that requires constant triage. Each breach mage has a unique ability
powered by charge tokens -- Jian's Black Mirror can recast another
player's prepped spell, Kadir's Otherworldly Gate returns spells from
discard to hand -- reinforcing the theme that each mage has developed
a distinctive relationship with breach magic. The four nemeses
(Rageborne, Crooked Mask, Prince of Gluttons, Carapace Queen) each
impose radically different strategic constraints through unique
Unleash effects, additional rules, and Tier 0 cards, ensuring the
threat feels genuinely alien rather than formulaic.

### Core Loop

Turn order is determined by a shuffled Turn Order Deck containing
player cards and two Nemesis cards. After each turn, the next card
is drawn to determine who acts. This randomized sequence continues
until the deck is empty, then it is reshuffled. Each player turn
has three phases:

1. **Casting Phase** -- Cast any prepped spells from opened breaches
   (optional). Cast all prepped spells from closed breaches
   (mandatory -- spells in closed breaches must fire). Spells deal
   damage to the nemesis or its minions, and some open breaches add
   +1 damage. Discard cast spells to the top of your discard pile.

2. **Main Phase** -- Resolve the following actions in any order, any
   number of times: play a gem or relic card (generating aether or
   special effects); gain a card from the supply by spending aether;
   gain a charge token for 2 aether; focus a breach (rotate it
   clockwise, reducing its open cost); open a breach (pay its
   current open cost to flip it permanently); prep a spell to an
   opened or just-focused breach; resolve "While prepped" effects;
   resolve "TO DISCARD" effects on nemesis power cards.

3. **Draw Phase** -- Place all played gems and relics on top of your
   discard pile in any order you choose. Draw cards from the top
   of your deck until you have five in hand. If your deck is empty,
   flip your discard pile without shuffling to form a new deck.

Nemesis turns have two phases: **Main Phase** (resolve persistent
effects of all minions and power cards in play, oldest first; power
cards lose one token and resolve when empty) and **Draw Phase** (draw
one nemesis card -- attacks resolve immediately, minions and powers
enter play with tokens).

Victory: Reduce the nemesis life to zero, or empty the nemesis deck
with no minions or powers in play. Defeat: All players exhausted
(0 life), or Gravehold reaches 0 life, or a nemesis-specific loss
condition triggers.

### Key Design Patterns

NO-SHUFFLE DECK BUILDING: The defining mechanical innovation. Unlike
Dominion, Star Realms, or virtually every other deck builder, Aeon's
End never shuffles the player's deck. When your draw pile is empty,
you simply flip your discard pile over -- the order of cards in your
discard becomes the exact order of your next draw cycle. This
transforms deck building from a probabilistic exercise into a
deterministic sequencing puzzle. During the Draw Phase, you choose the
order in which played gems and relics are placed on your discard pile,
directly engineering what you will draw in future turns. A skilled
player can ensure that expensive gems arrive together for a big
purchase turn, or that spells appear alongside the aether needed to
prep and open breaches. The no-shuffle rule means deck thinning (via
cards with "Destroy this" effects) has permanent, predictable impact
rather than probabilistic benefit. Riley identified that shuffling in
traditional deck builders introduces variance that undermines
strategic planning, and removed it entirely.

VARIABLE TURN ORDER: The Turn Order Deck contains player cards and
nemesis cards shuffled together, creating genuine uncertainty about
who acts next. Players might get consecutive turns before the nemesis
acts, or the nemesis might draw two cards in succession, unleashing
devastating back-to-back attacks. This randomized sequencing solves
the cooperative game's alpha player problem -- you cannot plan a
perfect multi-turn sequence when you do not know whether the nemesis
will interrupt. It also creates organic tension: drawing the next turn
order card is a moment of hope or dread. The three-player variant adds
a wild card where the group collectively decides which player takes
that turn, introducing a cooperative allocation decision.

BREACH PROGRESSION SYSTEM: Each player has four breaches (I-IV),
initially in various states of open and closed. Closed breaches must
be focused (rotated clockwise, each rotation costing aether) before
they can be opened. Once opened, a breach remains open permanently.
This creates a long-term investment arc within each game -- early
turns involve inefficiently casting from closed breaches (mandatory
casting, no bonus damage), while late-game turns benefit from multiple
open breaches with +1 damage bonuses. The escalating open costs
(higher-numbered breaches cost more to focus and open) create a
natural difficulty curve. Critically, spells prepped to a closed
breach that was focused this turn MUST be cast next turn, adding
timing pressure to breach management.

COOPERATIVE ASYMMETRY: Each breach mage has a unique ability requiring
charge tokens (gained for 2 aether each). Abilities are powerful
one-shot effects that reset when used -- Adelheim's Aethereal Ward
can negate a nemesis card, Brama's Brink Siphon heals while dealing
damage. The charge system ensures abilities fire once every several
turns rather than every turn, making them dramatic pivot moments
rather than routine actions. Combined with different starting hands,
decks, and breach configurations, each mage plays distinctly without
requiring asymmetric rule sets.

NEMESIS AS ASYMMETRIC PUZZLE: Each of the four nemeses fundamentally
changes the game's strategic landscape. Rageborne uses a Fury token
system and a separate Strike deck, creating an escalating rage
mechanic. Crooked Mask distributes corruption cards into player decks
that inject chaos into the no-shuffle ordering. Each nemesis has a
tiered deck structure (Tier 1 on top, Tier 2 in middle, Tier 3 on
bottom, never shuffled together) that creates a predictable difficulty
escalation -- early turns face weaker threats, allowing engine building
before the truly dangerous cards emerge. The tiered nemesis deck is
itself a pacing mechanism, ensuring the game follows a dramatic arc
from manageable to desperate.

SUPPLY AS SHARED CONSTRAINT: The nine supply piles (3 gems, 2 relics,
4 spells) are selected before the game begins, either from suggested
configurations or using randomizer cards. Each pile contains only five
or seven copies. This creates both strategic planning (you can see
every available card before the game starts) and resource competition
(multiple players wanting the same powerful spell can deplete the
pile). The fixed supply also enables the no-shuffle design -- since
all available cards are known from the start, players can plan their
entire deck trajectory without hidden information.

DUAL HEALTH POOLS AS TRIAGE: Players have individual life (starting
at 10) and share Gravehold's life (starting at 30). Nemesis effects
target one or both pools. When a player is exhausted (reduced to 0
life), they continue playing but any damage dealt to them is doubled
and redirected to Gravehold. This creates an escalating death spiral
where losing one player dramatically accelerates Gravehold's
destruction. The dual-pool design forces constant triage decisions:
heal a wounded player to prevent the exhaustion penalty, or let them
absorb damage to protect Gravehold while it is still healthy?

### What Makes It #102

Aeon's End answers the question: what if deck building were a skill
game rather than a luck game? The no-shuffle mechanism is the key
insight -- by removing randomness from deck cycling, Riley transforms
every card purchase and every discard ordering into a consequential
strategic decision. The variable turn order compensates by injecting
uncertainty at the macro level (who acts when) rather than the micro
level (what cards you draw), placing tension where it creates
excitement rather than frustration. The breach progression system
gives each game a satisfying arc from constrained early turns to
powerful late-game spell cascades. And the nemesis asymmetry ensures
replayability without complexity creep -- the player rules remain
simple while the enemy transforms the puzzle. Aeon's End is the rare
cooperative game that rewards repeated play with genuine mastery
rather than familiarity, because the no-shuffle mechanism means there
is always a better ordering to find.
