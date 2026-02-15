# Decrypto

## Quick Stats

- **Players:** 3-8
- **Time:** 15-45 min
- **Weight:** 1.82/5

## Mechanics

- Communication Limits
- Team-Based Game

## Categories

- Deduction
- Party Game
- Spies / Secret Agents
- Word Game

## Rulebook

See `rulebooks/115-decrypto.pdf`

## Design Notes

Designer: Thomas Dagenais-Lespérance. Published by Le Scorpion Masqué (2018).

### Theme Integration

Decrypto wraps its word-association puzzle in a Cold War espionage aesthetic,
with teams of rival codemasters transmitting encrypted messages while attempting
to intercept the enemy's communications. Each team's screen displays a
code-breaking machine interface with four numbered slots containing secret
keywords. The Code cards — which drive each round's challenge — are drawn from
decks themed as classified transmissions. The visual design evokes vacuum-tube
computers, analog dials, and encrypted teletype, grounding the abstract
communication puzzle in the imagery of spy fiction.

The espionage theme does genuine mechanical work: it contextualizes why
communication must be indirect (the enemy is listening), why clues must
evolve over time (repeated patterns are intercepted), and why
miscommunication is punished (garbled intelligence is operationally
dangerous). The Note Sheets serve as intelligence dossiers where teams
track the accumulating clue history for each keyword position, building a
profile of the opposing team's secret words over successive rounds. The
Interception and Miscommunication tokens function as the scoreboard of a
cryptographic arms race — successful interceptions prove you have cracked
the enemy's code, while miscommunications indicate your own internal
protocols are compromised. The theme transforms what could be a dry word
game into a narrative experience where players genuinely feel like rival
intelligence agencies locked in an escalating cipher war.

### Core Loop

The game is played over a series of rounds (typically 4-8), with both teams
acting simultaneously within a structured sequence:

1. DRAW CODES - Each team's Encryptor (a rotating role) draws one Code card
   from their team's deck and reads the three-digit code privately. The code
   specifies three of the four keyword positions (e.g., 3.4.2 means the first
   clue targets keyword 3, the second targets keyword 4, the third targets
   keyword 2).

2. WRITE CLUES - Both Encryptors simultaneously write three clues on the Note
   Sheet, one per digit. Clues must relate to the meaning of the corresponding
   keyword. Clues cannot reference spelling, letter count, position on the
   screen, pronunciation, or private information. Each clue can only be used
   once per game. A sand timer limits clue-writing time.

3. WHITE TEAM CLUES READ ALOUD - The White Team's Encryptor reads their three
   clues aloud. The Black Team writes them down on the white side of their
   Note Sheet.

4. BOTH TEAMS ATTEMPT DECODING - Both teams discuss and write down the three-
   digit code they believe the White Team's Encryptor was transmitting. Each
   team writes the number they think corresponds to each clue at the end of
   each line.

5. BLACK TEAM ATTEMPTS INTERCEPTION - The Black Team reads their guessed code
   aloud, attempting to match the White Team's actual code.

6. WHITE TEAM ATTEMPTS DECRYPTION - The White Team reads their guessed code
   aloud, attempting to match their own Encryptor's code.

7. REVEAL AND RESOLVE - The White Team's Encryptor reveals the actual Code card.
   If the Black Team's interception matches: Black Team receives an Interception
   token. If the White Team's decryption is wrong: White Team receives a
   Miscommunication token. Both teams record clues in the keyword sections at
   the bottom of the Note Sheet.

8. REPEAT FOR BLACK TEAM - Steps 3-7 are repeated with the Black Team's
   Encryptor reading clues and roles reversed.

9. END OF ROUND CHECK - If a team has 2 Interception tokens, they win. If a
   team has 2 Miscommunication tokens, they lose. If both conditions trigger
   simultaneously or neither has been met, continue to the next round. After
   8 rounds without resolution, Interception tokens are worth +1 and
   Miscommunication tokens -1; highest score wins (ties broken by keyword
   guessing).

### Key Design Patterns

ESCALATING INFORMATION ASYMMETRY: The game's central innovation is that clues
accumulate across rounds and keywords never change. In Round 1, the opposing
team has no information about your keywords — their interception attempt is
essentially a guess. But by Round 3, they have 2-3 clues associated with each
keyword position, allowing them to triangulate meanings. "Mexico," "Parasol,"
and "Sun" all pointing to keyword 4 might reveal it as "Sombrero." This
accumulation creates an arms race where the Encryptor must give clues that are
clear enough for teammates (who know the keywords) but obscure enough to resist
the growing intelligence profile the opposing team is building. The difficulty
of the Encryptor's task increases with every round, creating natural dramatic
escalation without any mechanical complexity increase.

DUAL-THREAT DESIGN: The Encryptor faces a two-front challenge that creates the
game's signature tension. Clues that are too obvious (e.g., "hat" for Sombrero)
risk interception — the opponents will quickly associate that clue family with
the keyword. Clues that are too obscure (e.g., "Odonata" for Dragonfly) risk
miscommunication — your own teammates may not decode correctly. The optimal
clue sits in a narrow band: comprehensible to insiders who know the keyword
but opaque to outsiders building a profile from fragments. This dual-threat
design means there is no safe strategy; every clue is a calculated risk
balanced between two failure modes.

CUMULATIVE KNOWLEDGE TRACKING: The Note Sheet design — with clue history
organized by keyword number at the bottom of each sheet — transforms the game
from a round-by-round guessing exercise into an analytical investigation. Both
teams maintain intelligence dossiers on the opposing team's keywords, grouping
clues by position number across all rounds. The sheet design externalizes the
deduction process: seeing "Horror," "Skeleton," and "Freddy" clustered under
keyword 4 is far more revealing than remembering individual clues from
scattered rounds. This external memory system ensures that the game rewards
attention and pattern recognition rather than raw recall, making the
deduction accessible to all player types.

ENCRYPTOR ROTATION AS SKILL DISTRIBUTION: The Encryptor role rotates each
round, ensuring every team member faces the creative challenge of generating
clues under the dual-threat constraint. This rotation prevents a single
skilled communicator from dominating and forces the team to adapt to different
Encryptor styles. A teammate who gives literary references will produce a
different clue profile than one who favors pop culture, and the opposing team
must recalibrate their interception strategy accordingly. The rotation also
distributes the pressure of the Encryptor's pivotal role, preventing any
single player from bearing sole responsibility for the team's fate.

NO-REPEAT CLUE RULE AS ESCALATION ENGINE: Each clue can only be used once per
game. This seemingly simple constraint is the mechanical engine that drives
the game's escalating difficulty. In Round 1, the Encryptor can use the most
obvious associations. By Round 5, the strongest clues have been exhausted,
forcing increasingly tangential or creative connections that are harder for
teammates to decode and potentially more revealing in aggregate to opponents.
The no-repeat rule ensures that the game naturally intensifies without any
external timer or scoring pressure, as the Encryptor's clue vocabulary
progressively narrows while the opponents' intelligence profile broadens.

SIMULTANEOUS TEAM PLAY AS SOCIAL ENGINE: Both teams discuss clues
simultaneously, creating a lively social atmosphere where table talk, debate,
and collaborative deduction happen in parallel. The team structure means every
player is actively engaged in every phase — decoding their own Encryptor's
clues and analyzing the opposing team's clues for interception opportunities.
There is no downtime and no passive observation. The social dynamics also
create emergent metagaming: teams develop shared references and inside jokes
that make internal communication more efficient while becoming increasingly
opaque to opponents who lack that shared context.

### What Makes It #115

Decrypto inverts the word-game formula that Codenames popularized by making
communication itself the competitive arena. Where Codenames asks one player
to connect multiple words through a single clue, Decrypto asks one player to
distinguish four persistent keywords through evolving clues under adversarial
surveillance. The result is a game where the central tension escalates
naturally across rounds as the opposing team's intelligence grows while the
Encryptor's clue options narrow. At 1.82 weight and with support for 3-8
players, it occupies the party game space but delivers a deduction experience
with genuine strategic depth. The dual-threat design — where both excessive
clarity and excessive obscurity are punished — creates a sweet spot of
creative communication that is endlessly replayable because the keywords
change every game and the clue-generation challenge is fundamentally open-
ended. Dagenais-Lespérance proved that a word game can be a compelling
strategic contest, not just a social activity.
