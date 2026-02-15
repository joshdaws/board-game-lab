# The Search for Planet X

## Quick Stats

- **Players:** 1-4
- **Time:** 60 min
- **Weight:** 2.63/5

## Mechanics

- Deduction
- Hidden Information
- Variable Set-up

## Categories

- Deduction
- Science Fiction
- Space Exploration

## Rulebook

See `rulebooks/110-search-for-planet-x.pdf`

## Design Notes

Designer: Matthew O'Malley & Ben Rosset. Published by Foxtrot Games /
Renegade Game Studios (2020).

### Theme Integration

The Search for Planet X is grounded in real astronomical science. The
game's premise is drawn directly from the Planet Nine hypothesis published
by Konstantin Batygin and Michael E. Brown in January 2016, which proposed
that a distant, undiscovered planet could explain the unusual orbits of
trans-Neptunian objects. Players take on the roles of astronomers competing
to locate this hypothetical planet by surveying the night sky, analyzing
data, and deducing the arrangement of celestial objects in the solar system.
The game's physical components — a rotating earth board nested within a
solar system board — create a tactile model of orbital mechanics that makes
the astronomical theme tangible rather than abstract.

The five types of objects in the game (asteroids, comets, dwarf planets, gas
clouds, and Planet X itself) each follow logic rules that mirror simplified
astronomical properties. Asteroids are always adjacent to other asteroids,
reflecting the tendency of asteroid belts to cluster. Comets appear only in
specific prime-numbered sectors, modeling their predictable orbital periods.
Gas clouds must be adjacent to at least one truly empty sector. Dwarf planets
cannot be adjacent to Planet X, reflecting the gravitational relationship
that makes Planet X detectable through its influence on other objects. These
are not arbitrary constraints — they are simplified astronomical principles
translated into deduction logic.

The companion app that manages the hidden information is thematically framed
as a telescope and data analysis system. Surveys correspond to telescope
observations, targets represent focused investigation of specific sectors,
and research topics model the analysis of peer-reviewed scientific papers.
The Conference phases, where all players receive shared information, evoke
the real-world practice of astronomers sharing findings at scientific
conferences. Even the peer review system for theories — where submitted
predictions are publicly verified after a delay — mirrors the actual
scientific publication process. O'Malley and Rosset built their theme
not from science fiction tropes but from the actual practice of
observational astronomy.

### Core Loop

Gameplay proceeds on a time track where the player furthest back always
takes the next turn. There are no fixed rounds:

**On Your Turn**

1. TAKE ONE ACTION: Choose one of four available actions, each requiring
   interaction with the companion app:

   a) SURVEY FOR AN OBJECT: Select a type of object (asteroid, comet, gas
      cloud, dwarf planet, or empty) and a range of consecutive sectors
      in the visible sky. The app reveals how many objects of that type
      are in that range. This is private information.
      - Time cost: 4 (1-3 sectors), 3 (4-6 sectors), or 2 (7-9 sectors,
        Expert mode only).

   b) TARGET A SECTOR: Select one sector in the visible sky. Spend one of
      your two target tokens. The app reveals which object is in that
      sector, or indicates it appears empty. This is private information.
      Limited to two uses per game.
      - Time cost: 4.

   c) RESEARCH A TOPIC: Select one of the available research topics. The
      app reveals a logic rule that applies in this game (e.g., "All
      asteroids are in consecutive sectors" or "Planet X is not within 2
      sectors of a comet"). This is private information. Cannot be taken
      twice in a row.
      - Time cost: 1.

   d) LOCATE PLANET X: Select the sector you believe contains Planet X
      and identify the objects in the two adjacent sectors. The app
      reveals whether you are correct. If correct, this triggers the end
      of the game. If incorrect, you are told only that you failed.
      - Time cost: 5.

2. ADVANCE YOUR PAWN: Move your player pawn clockwise on the time track
   a number of sectors equal to the time cost of your action. If you
   correctly located Planet X, the game end is triggered after advancing.

3. ROTATE THE EARTH BOARD: Rotate the earth board clockwise until the
   arrow points at the sector containing the pawn furthest back on the
   time track. As the earth board rotates, it may pass Conference icons
   or Theory icons, triggering those phases:

   - CONFERENCE PHASE: All players receive a shared piece of information
     about Planet X from the app (a logic rule). This is announced to all
     players and recorded on note sheets.

   - THEORY PHASE: Two steps occur:
     * THEORY SUBMISSION: All players simultaneously select theories to
       submit (up to 1 in Standard, up to 2 in Expert). Theories are
       face-down tokens placed on the outer space of a sector's peer
       review track, predicting which object is in that sector.
     * PEER REVIEW: Any theories that have advanced to the inner space
       of a peer review track are reviewed via the app — revealed as
       correct (confirmed, scores points, no more theories for that
       sector) or incorrect (removed, player advances 1 sector as
       penalty). All face-down theories advance one space inward.

**End of Game**

Once a player correctly locates Planet X, other players whose pawns are
within 1-5 sectors back get a final scoring opportunity: submit theories
or attempt to locate Planet X themselves (for reduced points). Then all
objects are revealed, remaining face-down theories are checked, and final
scoring occurs.

**Scoring**
1. Leader bonuses: 1 point per sector where you were first (or tied for
   first) to submit the correct theory.
2. Correct theories: Asteroids (2 pts), Comets (3 pts), Gas Clouds (4
   pts), Dwarf Planets (4 pts Standard / 2 pts Expert).
3. Locating Planet X: 10 points for the first player to correctly locate
   it. 2-10 points for other players who correctly locate it during final
   scoring opportunities, scaled by distance from the first locator.

### Key Design Patterns

TIME TRACK AS VARIABLE TURN ORDER: The Search for Planet X replaces fixed
turn order with a time track where the player furthest back always acts
next. Different actions cost different amounts of time: Research costs only
1, while Locating Planet X costs 5. This creates a fundamental trade-off
between action quality and action quantity. A player who chains cheap
Research actions takes many turns but gathers only incremental logic rules.
A player who Surveys large ranges or Targets specific sectors spends more
time but gains precise positional information. The time track ensures that
information has a temporal price — knowing exactly what is in a sector
(Target, cost 4) takes four times as long as learning one logic rule
(Research, cost 1). O'Malley and Rosset used the time track to solve the
central design problem of deduction games: how to make information
asymmetry fair when different clues vary in value.

APP-MANAGED HIDDEN STATE AS FAIR ARBITER: The companion app manages the
game's hidden information — the arrangement of objects in sectors — ensuring
a fully solvable logic puzzle with no ambiguity or human error. Each game
generates a random configuration following predefined rules, and the app
dispenses information in response to player queries. This eliminates the
common deduction-game problem of a human game master who may make mistakes
or inadvertently leak information. The app also provides difficulty levels
for starting information (Beginner through Genius), scaling accessibility
without changing the core rules. The design demonstrates that apps in board
games work best not as replacements for mechanical systems but as referees
for information management that would be impractical with physical
components alone.

THEORY SUBMISSION AS SPECULATIVE COMMITMENT: The theory system forces
players to commit to deductions before they are fully certain. Theories are
submitted face-down during Theory Phases, then advance along a peer review
track over multiple phases before being verified. This delay means you are
rewarded for early (risky) submissions with leader bonuses and first-claim
rights on sectors, but incorrect theories cost a time penalty. The
simultaneous submission prevents reactive play — you cannot see what others
submit before committing. This creates a chicken-and-egg tension: wait for
more information and submit with confidence, or submit early to claim
leader bonuses before opponents deduce the same answers.

VISIBLE SKY AS ROTATING INFORMATION WINDOW: The earth board rotates
clockwise as the game progresses, and surveys and targets can only access
sectors currently in the visible sky (exactly half the total sectors).
This constraint means the information you can gather at any moment is
spatially limited — if the sector you need to investigate is not currently
visible, you must wait (spending time on other actions) until the earth
rotates to reveal it. The rotating visible sky models the actual
astronomical constraint that Earth-based telescopes can only observe a
portion of the sky at any time. Mechanically, it creates a pacing layer
that prevents players from immediately investigating their most desired
sectors and forces them to plan around the earth's rotation schedule.

LOGIC RULES AS MODULAR PUZZLE CONSTRAINTS: Each game generates a unique
configuration of objects governed by both universal rules (printed on note
sheets — e.g., "asteroids are adjacent to at least one other asteroid")
and game-specific rules revealed through Research actions and Conferences.
The game-specific rules use spatial vocabulary (adjacent, consecutive,
within N sectors, directly opposite, in a band of N or less) that creates
a rich deductive grammar. A rule like "Planet X is not within 3 sectors of
a comet" eliminates multiple possible Planet X locations once comet
positions are known. The modular nature of these rules — different
combinations each game — ensures that solving the puzzle requires genuine
logical reasoning rather than memorized strategies. The deduction space is
large enough to prevent trivial solutions but constrained enough to be
tractable within 60 minutes.

INFORMATION ASYMMETRY AS COMPETITIVE TENSION: Surveys, Targets, and
Research results are private to the acting player, while Conferences and
theory results (correct/incorrect) are public. When a player announces they
are surveying sectors 3-7 for asteroids, all other players know the query
but not the answer. This partial transparency creates an inference metagame:
you can deduce what information opponents might now possess based on their
actions. If an opponent surveys for comets in a range and then immediately
submits a theory in one of those sectors, you can infer they received
confirming information. The interplay between private knowledge, public
actions, and deduced inferences creates competitive tension in what could
otherwise be a solitary puzzle experience.

CONFERENCE PHASES AS EQUALIZERS: Conference phases distribute free shared
information to all players at fixed points in the game's rotation cycle.
This serves multiple design functions: it prevents any single player from
falling hopelessly behind in deduction (everyone gets baseline information),
it creates moments of communal discovery that break up the solitary
reasoning, and it provides new constraints that may confirm or invalidate
existing theories. The timing of Conferences relative to Theory Phases is
deliberate — new information arrives between submission windows, giving
players fresh data to evaluate before committing to theories. Conferences
are the design's concession to fairness in a game where skilled deductive
reasoners might otherwise dominate completely.

### What Makes It #110

The Search for Planet X is that rare deduction game that feels like genuine
scientific investigation. Most deduction games model detective work or
social interrogation; this one models the actual process of astronomy —
observing, hypothesizing, testing, publishing. The time track ensures that
every piece of information has a cost, the theory system rewards confident
early deductions, and the rotating visible sky imposes realistic
observational constraints. O'Malley and Rosset's deepest achievement is
calibrating the puzzle difficulty: with 12 sectors (Standard) or 18
(Expert), five object types, and modular logic rules, the deduction space
is complex enough to sustain an hour of engaged reasoning without becoming
intractable. The companion app handles what no physical component could —
a perfectly fair, randomly generated, fully solvable logic puzzle — leaving
players to experience the genuine thrill of narrowing possibilities through
evidence and reaching that moment when deduction crystallizes into
certainty.
