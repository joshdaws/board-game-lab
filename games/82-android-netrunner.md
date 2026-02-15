# Android: Netrunner

## Quick Stats

- **Players:** 2
- **Time:** 45 min
- **Weight:** 3.39/5

## Mechanics

- Asymmetric Play
- Hand Management
- Action Points
- Bluffing
- Card Play

## Categories

- Card Game
- Science Fiction
- Cyberpunk

## Rulebook

See `rulebooks/82-android-netrunner.pdf`

## Design Notes

Designer: Richard Garfield (original) & Lukas Litzsinger (LCG).
Published by Fantasy Flight Games (2012).

### Theme Integration

Android: Netrunner inhabits a cyberpunk future where megacorporations
control information and rogue hackers -- Runners -- attempt to steal their
secrets. The game's mechanical identity is built on a single thematic
insight: the Corporation and the Runner experience information differently.
The Corp operates behind a veil of secrecy, installing cards face-down in
remote servers, placing protective ICE in front of them, and daring the
Runner to probe. The Runner operates in the open, building their rig of
programs and hardware face-up on the table, accumulating resources and
connections visible to the Corp. This fundamental asymmetry of information
is not a clever abstraction -- it is the game's thesis statement about the
relationship between institutional power and individual resistance.

The cyberpunk setting is not decorative. Every mechanical concept maps to
a genre element with precision. ICE (Intrusion Countermeasures Electronics)
protects servers. Icebreakers crack ICE. Credits represent the digital
economy. Clicks represent time and attention. The Corp's three central
servers -- HQ (hand), R&D (deck), and Archives (discard pile) -- represent
the infrastructure that the Runner can target. Remote servers represent
projects, assets, and traps the Corp constructs. The language of the game
is the language of hacking: runs, traces, tags, meat damage, brain damage,
net damage. Netrunner does not ask players to roleplay hackers and
executives -- it makes them think like hackers and executives through its
mechanical structure.

The original 1996 Richard Garfield design was a collectible card game that
pioneered asymmetric two-player card play. Lukas Litzsinger's 2012 redesign
for Fantasy Flight's Living Card Game line preserved the core asymmetry
while replacing randomized booster packs with fixed data packs -- a
distribution model that eliminated pay-to-win dynamics and ensured every
player had access to the same card pool. This shift from CCG to LCG was
itself a design statement about information asymmetry: in a game about
hidden information, the metagame should be transparent.

### Core Loop

Players alternate turns. The Corp and Runner have different turn structures
reflecting their different relationships to time and initiative.

CORP TURN:
1. Draw 1 card from R&D (mandatory).
2. Take 3 clicks (actions). Options include:
   - Install a card face-down in a remote server or as ICE protecting
     any server (cost: 1 click).
   - Play an operation card for its effect (cost: 1 click + card cost).
   - Gain 1 credit (cost: 1 click).
   - Advance a card in a remote server by placing an advancement token
     on it (cost: 1 click + 1 credit). Agendas require specific numbers
     of advancements to score.
   - Purge virus counters from all Runner cards (cost: 3 clicks -- the
     entire turn).
   - Trash a Runner resource if the Runner is tagged (cost: 1 click +
     2 credits).
3. Discard down to maximum hand size (5 cards).

RUNNER TURN:
1. Take 4 clicks (actions). Options include:
   - Make a run on any server (cost: 1 click). The Runner approaches
     each piece of ICE protecting the server from outermost to innermost.
     For each ICE, the Corp may rez (flip face-up and pay for) the ICE.
     The Runner must then break its subroutines using icebreakers or
     suffer the consequences. If the Runner reaches the server, they
     access its contents.
   - Install a program, hardware, or resource from hand (cost: 1 click).
   - Play an event card for its effect (cost: 1 click + card cost).
   - Gain 1 credit (cost: 1 click).
   - Draw 1 card (cost: 1 click).
   - Remove 1 tag (cost: 1 click + 2 credits).
2. Discard down to maximum hand size (5 cards).

Victory: The Corp wins by scoring 7 agenda points (advancing and scoring
agendas from remote servers). The Runner wins by stealing 7 agenda points
(accessing agendas during runs). The Corp also wins if the Runner takes
more damage than cards in hand (flatline). The Runner also wins if the
Corp must draw from an empty R&D.

### Key Design Patterns

RADICAL TWO-PLAYER ASYMMETRY: The Corp and Runner do not play the same
game. They have different turn structures (3 clicks vs. 4), different
card types (ICE, agendas, assets, upgrades, operations vs. programs,
hardware, resources, events), different win conditions (score vs. steal),
different information states (hidden vs. open), and fundamentally different
strategic postures (defensive construction vs. aggressive intrusion). This
is not asymmetry as variable player powers layered onto a shared system --
it is asymmetry as two interlocking but distinct game experiences. The Corp
plays a game of construction, bluffing, and timing. The Runner plays a
game of deduction, resource management, and calculated risk. Each player's
decisions are only meaningful because they interact with the other player's
entirely different decision space. This level of structural asymmetry was
unprecedented in card games when Garfield designed it in 1996, and it
remains the gold standard for asymmetric two-player design.

HIDDEN INFORMATION AS CORE TENSION: The Corp installs cards face-down.
The Runner does not know whether a card in a remote server is an agenda
worth stealing, an asset generating economy, or a trap that will deal
damage. Every run is a gamble informed by deduction: How much did the
Corp spend? How heavily is the server protected? What cards have been
played so far? The Corp, in turn, must decide how to distribute limited
ICE and credits across multiple servers, knowing that overinvesting in
one server reveals the importance of its contents by its very protection
level. Information asymmetry is not a feature of Netrunner -- it is
Netrunner. The entire game is a conversation conducted through hidden
and revealed information, where every action communicates something and
silence communicates even more.

CLICK ECONOMY AS ACTION POINTS: Both players spend clicks (actions) each
turn, but the click economy is deliberately asymmetric. The Corp gets 3
clicks but a mandatory draw; the Runner gets 4 clicks with no obligations.
This means the Runner has more flexibility per turn but must spend clicks
on drawing cards (which the Corp gets for free) and on running (which
has no Corp equivalent). The click system is elegant because it is
perfectly granular -- every possible action costs exactly 1 click (except
virus purging at 3), making opportunity costs immediately comparable.
Spending a click to gain 1 credit means that credit is worth exactly one
action. This transparency of cost allows deep strategic calculation
without requiring complex math.

ICE/ICEBREAKER ARMS RACE: The Corp installs ICE to protect servers; the
Runner installs icebreakers to break through ICE. Each piece of ICE has
a strength value and subroutines (effects that fire if not broken). Each
icebreaker has a strength value and a breaking ability. The Runner must
boost their icebreaker's strength to match or exceed the ICE's strength,
then pay to break its subroutines. This creates an arms race: the Corp
seeks ICE that is expensive for the Runner to break; the Runner seeks
efficient icebreakers that handle multiple ICE types cheaply. Because ICE
is installed face-down, the Runner does not know what type of icebreaker
they will need until the ICE is rezzed -- forcing the Runner to build a
diversified rig rather than hyper-specializing.

AGENDA DENSITY AS PROBABILITY PUZZLE: The Corp must include a minimum
number of agenda points in their deck (determined by deck size), but the
exact ratio of agendas to non-agendas is a deckbuilding decision. Fewer
agendas (using high-point agendas) means the Runner accesses more blanks
when running R&D, but each stolen agenda hurts more. More agendas (using
low-point agendas) means each theft is less damaging, but the Runner hits
agendas more frequently. This probability calculation underlies every
aspect of the game: how the Corp builds their deck, how the Runner
assesses risk, and how both players evaluate the tempo of agenda scoring
versus agenda theft. It is a design pattern where deckbuilding constraints
create emergent strategic tension during play.

ECONOMY DENIAL AS VIABLE STRATEGY: Both players need credits to function,
and both players can attack the other's economy. The Corp can trash Runner
resources (if the Runner is tagged), rez ICE that drains Runner credits,
or install assets that tax the Runner for interacting with them. The Runner
can trash Corp assets and upgrades found during runs (by paying their
trash cost), deny the Corp tempo by forcing them to rez ICE repeatedly,
or use virus programs to erode Corp resources. Economy denial is not a
fringe strategy -- it is a core axis of competition. A player who cannot
generate credits cannot advance agendas, install programs, rez ICE, or
make runs. Attacking the opponent's ability to play the game is as valid
as pursuing your own win condition directly.

ACCESS-AND-TRASH DECISION: When the Runner successfully accesses a Corp
card, they may steal it (if it's an agenda) or trash it by paying its
trash cost (if it's an asset or upgrade). This decision is a constant
tension point: trashing a powerful Corp economy asset costs the Runner
credits they could use for future runs, but leaving it in play gives the
Corp ongoing advantage. The trash cost printed on each card is a design
lever -- low trash costs make cards fragile but temporary; high trash
costs make cards resilient but create tempting targets. The Runner must
constantly evaluate whether the tempo cost of trashing is worth the
long-term benefit of removing the card from play.

LCG DISTRIBUTION MODEL: Fantasy Flight's Living Card Game format replaced
randomized booster packs with fixed-content data packs released on a
regular schedule. Every player who bought a data pack received the same
cards. This eliminated the information asymmetry in the metagame (who has
access to which cards) while preserving the information asymmetry within
the game (what's in your opponent's deck). The LCG model was a deliberate
design choice that prioritized competitive integrity over collectibility,
ensuring that skill and deckbuilding creativity -- not wallet size --
determined outcomes. It also enabled a healthier competitive scene because
all players could discuss strategy from a shared card pool.

### What Makes It #82

Android: Netrunner is the most mechanically pure expression of asymmetric
two-player card gaming ever designed. Its genius lies not in individual
mechanics -- action points, card installation, and resource management are
common enough -- but in how asymmetry transforms every familiar element
into something that plays completely differently depending on which side
of the table you sit on. A credit is worth the same amount to both
players, but it means something entirely different to a Corp deciding
whether to rez ICE and a Runner deciding whether to trash an asset. The
game creates tension not through randomness or hidden victory points but
through the fundamental uncertainty of facing an opponent who is playing
a different game than you are, using information you cannot see, toward
a goal you can only infer from their actions.
