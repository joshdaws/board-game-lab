# Clank!: A Deck-Building Adventure

## Quick Stats

- **Players:** 2-4
- **Time:** 30-60 min
- **Weight:** 2.20/5

## Mechanics

- Deck Building
- Push Your Luck
- Point-to-Point Movement
- Card Play

## Categories

- Adventure
- Fantasy

## Rulebook

See `rulebooks/98-clank.pdf`

## Design Notes

Designer: Paul Dennen. Published by Dire Wolf (2016).

### Theme Integration

Clank! fuses two established design traditions — the Dominion-style deck
builder and the dungeon-crawl adventure — by finding the thematic glue
that makes them cohere: noise. You are a thief sneaking into a dragon's
lair to steal artifacts. Every card you buy and play represents an action
your thief takes, and some of those actions make noise — clank. Clank
cubes accumulate in a shared pool and periodically get dumped into a bag
alongside the dragon's cubes. When the dragon attacks, cubes are drawn
from the bag, and any of your cubes drawn deal damage to you. The more
noise you have made, the more likely you are to get hurt. This is not a
pasted-on theme; it is a probabilistic model of stealth that ties deck
building to spatial risk in a way that feels intuitive.

The dungeon board reinforces the thematic conceit. Deeper chambers hold
more valuable artifacts but require more movement to reach and more
movement to escape. The dragon's attacks become more frequent and severe
as the game progresses, modeling a creature that grows increasingly
agitated as thieves ransack its hoard. Surface-level treasures are safe
but unimpressive. The deep vaults are lucrative but may kill you before
you escape. This depth-versus-safety gradient is the game's central
thematic expression: how greedy are you willing to be?

The market row of cards available for purchase represents the tools,
allies, and tricks your thief discovers along the way. A mercenary might
provide combat strength but generates clank. A secret passage grants
movement but costs gold. Each card is a narrative micro-decision: do you
recruit the loud but powerful barbarian, or the quiet but modest cat
burglar? The card flavor text and art lean into lighthearted fantasy
adventure, and the tone is perfectly calibrated — serious enough to
create tension during dragon attacks, playful enough to keep the
experience accessible and fun.

### Core Loop

Players take turns simultaneously building their decks and moving through
the dungeon board. Each turn follows a simple sequence:

**1. PLAY CARDS**

Play your entire hand (typically 5 cards). Cards generate four possible
resources:

1. SKILL (blue) — Currency for buying new cards from the market row.
2. SWORDS (red) — Combat strength for defeating dungeon monsters on the
   board and in the market row.
3. BOOTS (yellow) — Movement points for traversing the dungeon map,
   moving one space per boot along connected paths.
4. CLANK — Add your clank cubes to the clank area. Some cards generate
   clank involuntarily; others give you a choice between a powerful
   effect with clank or a weaker effect without it.

**2. BUY CARDS AND USE BOARD EFFECTS**

- Spend skill points to buy cards from the market row (6 face-up cards
  from the dungeon deck, plus always-available Mercenaries and Explores).
  Purchased cards go to your discard pile.
- Defeat monsters in the market row using swords for immediate rewards
  (gold, extra cards, movement).
- Pick up tokens from your current board space (minor treasures, market
  items, monkey idols, etc.).
- Use movement points to traverse the dungeon map. Paths may require
  swords to pass (guarded tunnels) or boots for extra cost (difficult
  terrain).

**3. DRAGON ATTACKS**

Certain cards in the dungeon deck feature a dragon icon. When revealed
during market row refill, a dragon attack triggers:

1. All clank cubes from the clank area go into the dragon bag (which
   also contains a fixed number of black dragon cubes).
2. Draw cubes from the bag equal to the current dragon attack strength
   (which increases as artifacts are taken and as the danger track
   advances).
3. Colored cubes drawn deal 1 damage to the corresponding player.
   Black cubes are harmless draws.

**4. ARTIFACT RETRIEVAL AND ESCAPE**

The goal is to venture into the depths, grab an artifact (worth 5-30
points), and escape back to the surface. Once above ground, you are safe
from dragon attacks. If you are knocked out underground, your body is
dragged to the entrance and you score your artifact (if you have one) at
a penalty. If knocked out in the deep dungeon, you score nothing.

**End Condition**: Once any player escapes or is knocked out, a countdown
begins. The dragon attacks with increasing severity each round until all
remaining players are either out or knocked out.

### Key Design Patterns

CLANK AS RISK PROBABILITY ENGINE: The clank mechanism is the game's
signature innovation and its most transferable design pattern. Rather
than tracking noise as a simple threshold or binary state, Dennen modeled
it as a probability distribution. Your clank cubes go into a bag with
neutral (black) cubes. The more clank you generate, the higher your
density in the bag, and the more likely you are to take damage when cubes
are drawn. But the draw is probabilistic — you might generate enormous
clank and survive through luck, or minimal clank and get unlucky. This
probabilistic approach creates the emotional texture of push-your-luck
without the binary outcome of pass/fail. It is risk as a continuous
variable, not a discrete event, and it produces stories: "I had twelve
cubes in the bag and none were drawn" becomes a campfire tale.

DEPTH-VERSUS-SAFETY TRADEOFF: The dungeon map is designed as a risk
gradient. Artifacts near the entrance are worth 5 points. Artifacts in
the depths are worth 20-30 points. But reaching the depths requires
more movement (more turns exposed to dragon attacks), more clank
generation (louder cards tend to be more powerful), and a longer escape
route. The design genius is that the tradeoff is not linear — the
deepest artifacts are disproportionately valuable, tempting players to
overextend. This asymmetric risk-reward curve is what generates the
game's most dramatic moments: the player who dives deepest either wins
big or dies trying.

DECK BUILDING MARRIED TO SPATIAL MOVEMENT: Clank!'s core innovation is
uniting two systems that traditionally exist in separate games. Your deck
generates movement points, so your deck composition determines your
mobility. A deck heavy on boots moves fast but may lack combat strength.
A deck heavy on skill buys powerful cards but cannot traverse the board
quickly. The deck is not an abstract engine — it is your thief's
capability set, and the board is the environment where those capabilities
are tested. This marriage means deck-building decisions are always
contextual: the "best" card depends on where you are on the board and
where you need to go.

DRAGON ATTACKS AS ESCALATING SHARED TIMER: Dragon attacks serve as the
game's clock, and they escalate in two ways. First, the attack strength
increases as artifacts are removed from the board and as the danger track
advances (certain cards move the danger marker). Second, the ratio of
player cubes to black cubes in the bag worsens over time because clank
accumulates across all players every round. Early dragon attacks are
survivable nuisances. Late dragon attacks are lethal. This dual
escalation creates time pressure without a fixed round count — the game
accelerates toward its climax organically, driven by player actions
rather than an arbitrary timer.

THE ESCAPE TRIGGER AND COUNTDOWN: Once any player escapes the dungeon or
is knocked out, a countdown begins. The dragon attacks every round with
maximum ferocity, and players who have not escaped face increasing danger.
This mechanism solves the classic problem of elimination games: rather
than knocking players out and making them wait, the escape trigger creates
urgency for everyone simultaneously. It also introduces strategic
interaction — an aggressive player can escape early to trigger the
countdown and pressure opponents who went deeper. The escape trigger
transforms the endgame from a leisurely optimization into a frantic race.

MARKET ROW AS TACTICAL PURCHASING: The six face-up cards from the
dungeon deck, refreshed as cards are bought, create a shared tactical
market. Unlike Dominion's fixed supply piles, Clank!'s market is
unpredictable — you cannot plan a strategy around cards that may never
appear. This shifts the skill from strategic deck construction (knowing
which cards to buy) to tactical adaptation (making the best of what
appears). The always-available Mercenaries and Explores provide a floor:
you can always buy something, even if the market row is unfavorable. This
prevents dead turns while preserving the excitement of discovering
powerful cards.

MOVEMENT POINTS AS DECK OUTPUT: By making movement a resource generated
by card play, Dennen ensures that mobility is never free. Every boot
icon on a card represents an opportunity cost — that card slot could have
been skill, swords, or a powerful ability. Players who prioritize movement
can navigate the dungeon efficiently but may lack the resources to buy
powerful cards or defeat monsters. Players who build powerful engines may
find themselves stranded deep in the dungeon without enough boots to
escape. Movement as deck output creates a resource tension that purely
abstract deck builders lack.

COMPANION CARDS AS THEMATIC ALLIES: The market row includes companion
cards — characters like the Rebel Scout, the Treasure Hunter, or the
Watcher — that provide ongoing or powerful abilities. These cards are
among the most expensive and impactful purchases, and they serve a dual
design purpose. Mechanically, they create asymmetry between players'
decks, making each thief's approach feel distinct. Thematically, they
are the supporting cast of your adventure story — the allies you recruit
along the way. A player who recruits the Master Burglar plays a
different game than one who recruits the Rebel Captain. Companions add
narrative texture to what could otherwise be a dry optimization exercise.

### What Makes It #98

Clank! succeeds by solving a problem that had stumped deck-builder
designers for years: how do you make deck building feel like it is
happening somewhere, not just in an abstract card space? The answer is
the dungeon board, the clank bag, and the depth-versus-safety gradient.
These elements give deck-building decisions physical consequences and
spatial context. Your deck is not just an engine; it is a thief with
capabilities, limitations, and a position on a map. The clank mechanism
provides the emotional core — that specific dread when you see your
cubes go into the bag, and the relief or despair when the draw happens.
Clank! proved that deck building and board games are not separate genres
but natural partners, and it did so with a design light enough to play
in an hour.
