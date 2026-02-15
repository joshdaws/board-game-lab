# Dominant Species

## Quick Stats

- **Players:** 2-6
- **Time:** 120-240 min
- **Weight:** 4.05/5

## Mechanics

- Action Drafting
- Area Majority
- Grid Movement
- Hexagon Grid
- Tile Placement
- Worker Placement

## Categories

- Animals
- Economic
- Environmental

## Rulebook

See `rulebooks/109-dominant-species.pdf`

## Design Notes

Designer: Chad Jensen. Published by GMT Games (2010).

### Theme Integration

Dominant Species is set 90,000 years before the present, on the cusp of a
great ice age. Players control one of six animal classes — Mammals,
Reptiles, Birds, Amphibians, Arachnids, or Insects — competing for
ecological dominance as the earth's terrain shifts beneath them. Unlike
most area-control games where the map is a static political landscape,
here the map is a living ecosystem that grows, freezes, and transforms
over the course of play. New terrain tiles are added through Wanderlust,
existing tiles are converted to tundra through Glaciation, and elements
(food sources) appear and disappear from tile corners. The theme is not
a veneer over abstract mechanics — it is the mechanics.

Each animal class has innate elemental affinities printed on its display:
Mammals need meat, Reptiles need sun, Birds need seed, Amphibians need
water, Arachnids need grub, and Insects need grass. These default elements
can never be removed, giving each animal a permanent ecological identity.
Dominance on a tile is determined not by having the most species present
but by matching the most elements — a species that perfectly fits its
environment dominates regardless of population. This models the biological
concept of ecological niche fitness: an animal thrives not by outnumbering
competitors but by being best adapted to available resources. A single
reptile species on a sun-rich desert tile can dominate over a dozen
amphibians who match nothing there.

The food chain hierarchy (Mammals > Reptiles > Birds > Amphibians >
Arachnids > Insects) serves as tiebreaker in scoring and dominance,
reflecting real-world predator-prey relationships. Mammals sit atop the
food chain with the fewest action pawns but the strongest tiebreaker
advantage, while Insects have the most action pawns but lose every tie.
Jensen translated biological asymmetry into mechanical asymmetry with
remarkable fidelity: each animal plays differently not because of
arbitrary special powers but because of the interplay between their
elemental needs, food chain position, special abilities, and available
resources.

### Core Loop

Each turn is divided into three phases:

**Phase 1 — Planning Phase**

1. In Initiative order (left to right on the Initiative track), each
   player places one Action Pawn (AP) on any vacant eyeball space in the
   Action Display. Each space holds at most one AP (first come, first
   served).

2. Players continue placing APs in rounds of Initiative order until all
   APs are placed. Animals with fewer remaining APs are skipped.

3. The number of available APs varies by player count and animal: 6-player
   games give 3 cylinders each, 2-player games give 7. This inversely
   scales action economy with player count.

**Phase 2 — Execution Phase**

APs are removed from the Action Display top-to-bottom, left-to-right,
and each triggers its corresponding action:

1. INITIATIVE: Swap your Initiative marker with the animal directly ahead.
   Place the removed AP into any vacant eyeball space (early positioning
   for next turn).

2. ADAPTATION: Choose one element from the Adaptation section and add it
   to your animal display (max 6 total elements). This broadens your
   ecological niche.

3. REGRESSION: For each element type in the Regression Box, every animal
   loses one element of that type from its display. APs here save one
   element each from removal. This models environmental pressure.

4. ABUNDANCE: Choose one element from the Abundance section and place it
   on any vacant tile corner on earth. This enriches the environment.

5. WASTELAND: Remove one element from the Wasteland Box (saving elements
   adjacent to tundra from removal). Then automatically remove all
   elements adjacent to tundra matching remaining Wasteland elements.

6. DEPLETION: Choose one element on earth matching an element type in the
   Depletion Box and remove it. This impoverishes the environment.

7. GLACIATION: Select a non-tundra tile adjacent to existing tundra.
   Remove all species, place a tundra tile on it, score bonus VPs for
   adjacent tundra, return one species per animal to the new tundra,
   excess species go to gene pools. Remove all elements surrounded by
   three tundra tiles.

8. SPECIATION: Choose one element on earth matching the space your AP
   occupied. Place new species from your gene pool onto adjacent tiles
   (up to 4 for sea/wetland, 3 for savannah/jungle/forest, 2 for
   desert/mountain, 1 for tundra). Insects always get a free species.

9. WANDERLUST: Choose a face-up tile from the Wanderlust stacks, place
   it adjacent to existing earth, optionally add one Wanderlust element,
   score bonus VPs for adjacency, then all players may migrate species
   onto the new tile.

10. MIGRATION: Move up to X of your species to adjacent tiles (X = the
    number on the AP's space). Birds may move through one tile to a second
    tile.

11. COMPETITION: Choose up to one tile per terrain type (three types per
    AP space). On each chosen tile, eliminate one opposing species. You
    must have presence and an opposing species must be present. Arachnids
    get a free competition action.

12. DOMINATION: Choose one unscored tile. Score it: most species gets
    first-place VP (varies by terrain, from 9 for sea down to 1 for
    tundra), second place gets second VP, and so on. Ties broken by food
    chain. The dominant animal (most matching elements) then selects and
    executes one face-up Dominance Card. If Ice Age is drawn, the game
    ends at the turn's conclusion.

**Phase 3 — Reset Phase**

1. EXTINCTION: Eliminate all endangered species (those on tiles where they
   match zero elements). Mammals may save one endangered species per turn.
2. SURVIVAL: The player with the most species on tundra tiles holds the
   Survival Card and scores bonus VPs.
3. RESEED: Replenish Dominance Cards, cascade elements down the Action
   Display sections, draw 12 new random elements for Adaptation/Abundance/
   Wanderlust. Flip Wanderlust tile stacks face up.

**Endgame**: When the Ice Age Dominance Card is drawn, finish all remaining
Domination actions, perform Extinction, score Survival, then score every
tile on earth one final time (VP only, no Dominance Cards). Highest VP wins.

### Key Design Patterns

ACTION DRAFTING ON A FIXED SEQUENCE: The Action Display is the game's most
important design element. Twelve action types are arranged in a fixed
vertical sequence, and players draft spaces during the Planning Phase
knowing exactly when each action will execute during the Execution Phase.
Initiative resolves first, Domination last. This fixed ordering creates a
strategic calculus where earlier actions set up later ones: placing an AP
on Adaptation before placing one on Speciation lets you broaden your
elemental needs before populating tiles. Because each eyeball space holds
only one AP, popular actions fill up quickly, and latecomers in Initiative
order face constrained choices. The system transforms turn order itself
into a contested resource while maintaining simultaneous execution within
each action type.

DOMINANCE AS ECOLOGICAL FITNESS: The dominance mechanic — where matching
elements matter more than raw species count — is the game's thematic and
strategic core. An animal dominates a tile if it has at least one species
present and matches more elements there than any other animal with species
present. This means a single well-adapted species can dominate over masses
of poorly-adapted ones. The implication is profound: you do not win by
spreading everywhere, you win by controlling which elements appear where
and then positioning species where they fit best. The Adaptation,
Abundance, and Depletion actions are the tools for reshaping ecological
fitness, while Migration and Speciation are the tools for exploiting it.

GLACIATION AS CREATIVE DESTRUCTION: Glaciation is the game's most dramatic
action: it converts a terrain tile to tundra, removes all species (though
one per animal returns), eliminates surrounded elements, and scores bonus
VPs. This single action reshapes the map, displaces populations, reduces
biodiversity, and advances the ice age — all while rewarding the player who
triggers it. Jensen designed Glaciation as a weapon of strategic
destruction that serves the game's thematic narrative. Aggressive
glaciation shrinks the habitable world, concentrates competition onto fewer
tiles, and creates tundra that only favors the Survival Card holder. It is
simultaneously the most thematically evocative and the most strategically
disruptive tool in the game.

ASYMMETRIC ANIMALS THROUGH ECOLOGICAL NICHE: The six animals are
differentiated not by unique action powers but by their starting elements,
food chain position, starting tile placements, and free special actions.
Insects start with grass (the most common element), have the most APs in
small player counts, and get a free Speciation action each turn. Mammals
start with meat, sit atop the food chain (winning all ties), and can save
one endangered species per turn. Arachnids get free competition. Birds can
migrate through tiles. These asymmetries emerge from the game's elemental
system rather than being bolted on: each animal is a different answer to
the ecological puzzle of matching elements, spreading species, and avoiding
extinction.

DOMINANCE CARDS AS UNPREDICTABLE POWER SPIKES: The 26 Dominance Cards
(including Ice Age) are the game's primary source of variance and dramatic
swings. When a player dominates during the Domination action, they must
select and execute one of the five face-up cards. Effects range from
placing extra species (Fecundity) to eliminating opposing species on tundra
(Cold Snap) to swapping elements (Metamorphosis) to gaining action pawns
(Intelligence, Parasitism). The mandatory selection creates difficult
choices: sometimes the available cards actively harm you, but you must pick
one. The Ice Age card buried at the bottom of the deck serves as the game's
clock — when the deck runs out, the ice age arrives. This randomized timer
prevents exact endgame calculation and creates tension as the deck thins.

FOOD CHAIN AS HIERARCHICAL TIEBREAKER: The food chain (Mammals > Reptiles
> Birds > Amphibians > Arachnids > Insects) pervades every scoring decision
and competition resolution. When two animals tie for most species on a
scored tile, the higher-ranked animal wins. When multiple animals could
claim the Survival Card, the higher-ranked one prevails. This hierarchy
creates a persistent structural advantage for Mammals and a persistent
structural disadvantage for Insects that must be compensated through other
means. The food chain is not a minor tiebreaker — in a game with frequent
ties on crowded tiles, it is a major strategic factor that shapes every
area-majority calculation. Jensen ensured that biological realism (mammals
dominate through the food chain) translates into mechanical realism (the
Mammal player has a genuine scoring advantage in contested areas).

ELEMENT CYCLE AS ENVIRONMENTAL NARRATIVE: Elements flow through a cycle
that mirrors ecological systems. New elements appear in the Adaptation,
Abundance, and Wanderlust sections during Reset. During the Execution
Phase, players draft these elements for their animal displays (Adaptation)
or place them on earth (Abundance). Unclaimed elements cascade downward:
Adaptation elements move to Regression, Abundance to Wasteland, and so
forth. Elements in the Regression Box trigger removal from animal displays;
elements in the Wasteland Box trigger removal from tundra-adjacent tiles.
This cascading system means that the very elements offered for growth this
turn become instruments of environmental degradation next turn if
unclaimed. The mechanical cycle perfectly models the ecological truth that
unused resources do not persist — they transform the environment in their
passing.

### What Makes It #109

Dominant Species stands as one of the most thematically ambitious area-
control games ever designed. At 4.05/5 weight and 2-4 hour playtime, it
demands commitment, but every ounce of complexity serves the ecological
simulation. Jensen's central insight was that the struggle for biological
dominance is fundamentally different from the struggle for political
dominance: it is about fitness, adaptation, and environmental change, not
territory and armies. The dominance mechanic, where matching elements
matters more than species count, captures this distinction perfectly. The
twelve-action sequence, the element cycle, the glaciation mechanic, and the
Dominance Cards together create an experience where the map transforms
beneath your feet — where the terrain you cultivated last turn may become
tundra this turn, where the elements you need may disappear, and where the
species you spread may go extinct. It is a game about impermanence, and
that is exactly what makes it enduringly compelling.
