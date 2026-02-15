# Terraforming Mars

## Quick Stats

- **Players:** 1-5
- **Time:** 120 min
- **Weight:** 3.26/5

## Mechanics

- Card Drafting
- End Game Bonuses
- Hand Management
- Hexagon Grid
- Income
- Set Collection
- Solo / Solitaire Game
- Take That
- Tile Placement
- Turn Order: Progressive
- Variable Player Powers

## Categories

- Economic
- Environmental
- Industry / Manufacturing
- Science Fiction
- Space Exploration
- Territory Building

## Rulebook

See `rulebooks/09-terraforming-mars.pdf`

## Design Notes

Designer: Jacob Fryxelius. Published by FryxGames / Stronghold Games (2016).

### Theme Integration

Corporations competing to terraform Mars — and the theme isn't decorative, it's
the game's structural logic. The three global parameters (temperature, oxygen,
ocean coverage) represent real scientific requirements for habitability:
temperature must rise from -30C to +8C, oxygen from 0% to 14%, and 9 ocean
tiles must be placed (9% surface coverage for stable hydrological cycles). The
game board is an accurate map of Mars's Tharsis region, including Valles
Marineris and three of four great volcanos. Bonus steps on the temperature
track model greenhouse effects (CO2 thawing raises heat production) and at 0C,
ice-bound water melts (ocean bonus). The 208 project cards represent real and
speculative terraforming technologies — asteroid impacts raise temperature,
photosynthesizing organisms release oxygen, imported nitrogen thickens the
atmosphere. The six resource types each map to something concrete: MegaCredits
(funding), steel (building material, magnesium alloy), titanium (space
industry), plants (photosynthesis → greenery → oxygen), energy (industrial
power, converts to heat), and heat (atmospheric warming). The conversion
chains are scientifically motivated: leftover energy becomes heat every
generation, 8 plants convert to a greenery tile, 8 heat raises temperature.
Kim Stanley Robinson's Red Mars trilogy is explicitly acknowledged as
inspiration.

### Core Loop

The game is played over a variable number of generations (rounds). Each
generation has four phases:

1. PLAYER ORDER PHASE - First player marker shifts clockwise. Generation
   marker advances. (Skipped in generation 1.)
2. RESEARCH PHASE - Each player draws 4 project cards, decides which to buy
   (3 M€ each) and which to discard. No hand limit. (Skipped in generation 1
   since setup handles initial card purchase.)
3. ACTION PHASE - Players take turns clockwise, performing 1 or 2 actions per
   turn (or passing). Seven action types: (A) play a card from hand, (B) use a
   standard project, (C) claim a milestone, (D) fund an award, (E) use an
   action on a blue card, (F) convert 8 plants to a greenery tile, (G) convert
   8 heat to a temperature increase. Once you pass, you're out for the
   generation. Play continues until all players pass.
4. PRODUCTION PHASE - Simultaneous. All leftover energy converts to heat. Then
   each player receives: M€ equal to TR + M€ production, plus production of
   all other resources. Remove action markers from blue cards.

Game ends: When all three global parameters reach their goals (temperature
+8C, oxygen 14%, 9 ocean tiles placed), finish the current generation's
production phase, then one final greenery conversion opportunity, then final
scoring. Winner: most VPs from TR + awards + milestones + board tiles +
card VPs.

### Key Design Patterns

TERRAFORM RATING AS DUAL-PURPOSE TRACK: TR is simultaneously your score AND
your income. Every time you raise a global parameter (temperature, oxygen,
ocean), your TR increases by 1. During production, you receive M€ equal to
your TR plus your M€ production. This creates a virtuous cycle: terraforming
raises your income, which funds more terraforming. But TR is also your base
VP score — so every point of terraforming you do counts toward both winning
and funding your engine. The elegance is that the game's victory condition
(terraform Mars) and its economy (fund your corporation) use the same
currency. Players who ignore terraforming fall behind in both income and score.

SIX-RESOURCE PRODUCTION ENGINE: Each player board tracks six resources
(MegaCredits, steel, titanium, plants, energy, heat) with both a production
level and a resource stockpile. Production is uncapped (can exceed 10 by
placing additional markers). M€ production uniquely can go negative (minimum
-5), but since TR is added to income, total M€ income is always non-negative.
Steel substitutes for M€ on building-tagged cards at 2 M€/cube; titanium
substitutes on space-tagged cards at 3 M€/cube. These resource substitutions
create natural strategic specializations — a player investing in titanium
production gravitates toward space cards. The energy-to-heat conversion at
the start of production creates a timing puzzle: energy used this generation
(via blue card actions) is gone, but unused energy becomes heat, which can
later raise temperature. Nothing is truly wasted.

THE 208-CARD PROJECT DECK: The game's strategic depth lives in its cards. 208
project cards span three types: events (red, one-time effects, collected face
down), automated (green, permanent tag/production effects, stacked), and active
(blue, ongoing effects or once-per-generation actions, displayed). Each card
has: a cost (M€), 0-3 tags (building, space, power, science, Jovian, Earth,
plant, microbe, animal, city, event), optional requirements (global parameter
thresholds or tag counts), immediate effects, and sometimes VP values. Cards
that interact with tags create combos — a card that discounts space-tagged
cards makes your titanium-heavy engine even stronger. Requirements gate cards
by game state: some cards can only be played while oxygen is below 5% (early
game), others require temperature above 0C (mid-to-late game). This temporal
gating means the card pool naturally shifts from early infrastructure to late
finishing moves. The no-hand-limit rule means hoarding cards for future
requirements is viable but expensive (3 M€ each to buy).

GLOBAL PARAMETER ENDGAME TRIGGER: The game ends not after a fixed number of
rounds but when Mars is terraformed — all three parameters hit their goals.
This variable game length creates strategic tension: accelerating terraforming
ends the game faster (good if you're ahead), while slowing it extends the
game (good if your engine needs more time). A player focused on building
production and collecting VP cards wants a long game; a player who's been
aggressively raising parameters wants to finish quickly. Since raising
parameters also raises TR (income and score), there's a natural incentive
to terraform — but the opportunity cost is that every M€ spent on parameters
is M€ not spent on engine-building cards. The three-parameter system also
means no single player can rush the ending without help; it requires
collective progress across temperature, oxygen, and oceans.

MILESTONES AND AWARDS AS PARALLEL OBJECTIVES: Five milestones (first to claim
gets 5 VP for 8 M€ — Terraformer: TR 35, Mayor: 3 cities, Gardener: 3
greenery tiles, Builder: 8 building tags, Planner: 16 cards in hand) and five
awards (funded competitively — Landlord: most tiles, Banker: highest M€
production, Scientist: most science tags, Thermalist: most heat, Miner: most
steel+titanium). Only 3 milestones can be claimed and 3 awards funded in any
game. Milestones reward speed — you race to meet the threshold first. Awards
reward specialization — you invest in a category and fund the award that
measures it. Funding awards costs escalate (8, 14, 20 M€ for first through
third funded), and the funder doesn't necessarily win the award — just
activates it for final scoring. This creates bluffing opportunities: fund an
award your opponent thinks they'll win, then overtake them. The 3-of-5 limit
means not all objectives are in play every game, and choosing which to pursue
is a strategic decision.

TILE PLACEMENT ON THE MAP: The hex-grid map of Mars is where terraforming
becomes physical. Three tile types: ocean (placed on reserved blue areas,
unowned, +1 TR), greenery (placed adjacent to your tiles, owned, +1 oxygen/TR,
worth 1 VP + 1 VP to each adjacent city at endgame), and city (cannot be
adjacent to another city, owned, worth 1 VP per adjacent greenery at endgame).
Placement bonuses printed on the map give resources or cards. Ocean adjacency
bonuses give 2 M€ per adjacent ocean to anyone placing tiles nearby. The
adjacency rules create spatial strategy: cluster greenery around your cities
for endgame VP, place cities near oceans for placement bonuses, and expand
your tile footprint to claim milestones (Mayor, Gardener) and awards
(Landlord). The map is a shared competitive space — placing a greenery tile
adjacent to an opponent's city gives THEM a VP, so tile placement requires
careful spatial reasoning.

STANDARD PROJECTS AS GUARANTEED ACTIONS: Six standard projects are always
available regardless of cards: Sell Patents (discard cards for M€), Power
Plant (11 M€ for +1 energy production), Asteroid (14 M€ for +1 temperature),
Aquifer (18 M€ for 1 ocean tile), Greenery (23 M€ for 1 greenery tile), City
(25 M€ for 1 city tile + 1 M€ production). These are deliberately expensive
— project cards almost always offer better value. But standard projects
guarantee you can always contribute to terraforming even with a bad hand or
depleted resources. They also serve as pricing benchmarks: if a card gives you
a temperature increase for 10 M€, you're saving 4 M€ compared to the Asteroid
standard project. The standard projects ensure the game always progresses
toward completion and gives players a floor of useful actions.

CORPORATION ASYMMETRY: Each player starts with a corporation card that defines
starting resources, starting production, and a unique ability. Standard
corporations start with 42 M€ and 1 of each production; named corporations
vary wildly — Tharsis Republic starts with 40 M€ and gains M€ production
whenever any city is placed, ThorGate starts with 48 M€, 1 energy production,
and a discount on power-tagged cards, PhoboLog starts with 23 M€ and 10
titanium with each titanium worth 4 M€ instead of 3. The Corporate Era
variant adds more corporations with zero starting production, making early
generation decisions more consequential. Corporation choice shapes your entire
strategic arc — you build your engine around your corporation's strengths.

CARD TYPE TAXONOMY (RED/GREEN/BLUE): The three card colors create distinct
strategic profiles. Events (red) are powerful one-shots — play for immediate
effect, then face down in your event pile. Their tags only count during play
(not afterward), making them bad for tag-counting objectives but good for
immediate impact. Automated cards (green) provide permanent tags and one-time
production/resource effects, stacked to show only tags. They're your engine
foundation — each one permanently improves your board state. Active cards
(blue) are the most complex — they sit face-up with ongoing effects (always
active, like cost discounts) and/or once-per-generation actions (marked with
a red arrow, exhausted with a player marker). Blue cards create renewable
value over multiple generations, making them stronger in longer games.

### Scaling Mechanisms

- 1 player: Solo variant. Start at TR 14, play 14 generations. Must complete
  all three global parameters before generation 14 ends. No awards/milestones.
  Neutral opponent places 2 cities and 2 greenery tiles each generation. Score
  is your final TR.
- 2-5 players: Same board and card deck. First player rotates. No board space
  restrictions change with player count. More players = more competition for
  milestones/awards and map space, faster parameter progression, more card
  interaction (take-that effects). Fewer players = longer game, more engine
  time, less blocking.
- Corporate Era variant: Adds 2 corporations and Corporate Era cards (marked
  with red/white icon). Players start with zero production (not 1 each).
  Longer, more strategic game. Recommended after learning the base game.
- Draft variant: During Research phase, draft 4 cards (pick-and-pass) instead
  of drawing 4. Adds interaction, reduces luck, increases game time.

### What Makes It #9

The engine-building satisfaction. Terraforming Mars gives you 208 cards and
says "build something." The six-resource production system creates genuine
economic engines where every piece feeds the next — titanium funds space
cards, space cards raise temperature, temperature raises TR, TR funds more
cards. The variable game length means your engine has a self-imposed deadline:
the very parameters you're raising to score points are also ending the game.
The corporation asymmetry ensures every player starts on a different
trajectory. The milestones and awards create parallel races that pull players
in competing directions. And the card combos — a science-tag discount engine,
a microbe-collecting VP farm, a city-sprawl production machine — feel like
genuine strategic inventions every game. The 208-card deck is large enough
that you never see the same game twice but curated enough that most cards
interact with something. It's the most accessible 3+ weight engine builder
on this list, and the terraforming theme gives your engine a satisfying
physical manifestation on the board.
