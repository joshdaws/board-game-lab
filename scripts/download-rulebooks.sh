#!/usr/bin/env bash
#
# Download rulebook PDFs for Board Game Lab
#
# Usage:
#   ./scripts/download-rulebooks.sh          # Download all missing PDFs
#   ./scripts/download-rulebooks.sh --force   # Re-download all PDFs
#   ./scripts/download-rulebooks.sh 26 50     # Download range #26-50 only
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
RULEBOOKS_DIR="$REPO_DIR/rulebooks"

FORCE=false
RANGE_START=1
RANGE_END=175

for arg in "$@"; do
  case "$arg" in
    --force) FORCE=true ;;
    *[0-9]*)
      if [[ "$RANGE_START" -eq 1 && "$RANGE_END" -eq 175 ]]; then
        RANGE_START="$arg"
        RANGE_END="$arg"
      else
        RANGE_END="$arg"
      fi
      ;;
  esac
done

mkdir -p "$RULEBOOKS_DIR"

downloaded=0
skipped=0
failed=0
manual=0

download() {
  local num="$1" slug="$2" url="$3"
  local dest="$RULEBOOKS_DIR/${num}-${slug}.pdf"

  if [[ "$FORCE" = false && -f "$dest" && $(stat -f%z "$dest" 2>/dev/null || stat -c%s "$dest" 2>/dev/null) -gt 10000 ]]; then
    skipped=$((skipped + 1))
    return
  fi

  echo "  Downloading #${num} ${slug}..."
  if curl -fsSL --max-time 120 -o "$dest" \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" \
    "$url"; then
    # Verify it's actually a PDF
    if head -c 4 "$dest" | grep -q '%PDF'; then
      downloaded=$((downloaded + 1))
    else
      echo "    WARNING: Downloaded file is not a valid PDF, removing"
      rm -f "$dest"
      failed=$((failed + 1))
    fi
  else
    echo "    FAILED to download #${num} ${slug}"
    rm -f "$dest"
    failed=$((failed + 1))
  fi
}

note_manual() {
  local num="$1" slug="$2" note="$3"
  local dest="$RULEBOOKS_DIR/${num}-${slug}.pdf"

  if [[ -f "$dest" && $(stat -f%z "$dest" 2>/dev/null || stat -c%s "$dest" 2>/dev/null) -gt 10000 ]]; then
    skipped=$((skipped + 1))
    return
  fi

  echo "  MANUAL: #${num} ${slug} — ${note}"
  manual=$((manual + 1))
}

in_range() {
  local num="$1"
  [[ "$num" -ge "$RANGE_START" && "$num" -le "$RANGE_END" ]]
}

echo "Board Game Lab — Rulebook PDF Downloader"
echo "========================================="
echo "Range: #${RANGE_START}-${RANGE_END}  Force: ${FORCE}"
echo ""

# --- Games #1-25 (URLs reconstructed) ---

in_range 1 && download 1 "brass-birmingham" \
  "https://cdn.1j1ju.com/medias/a9/bf/57-brass-birmingham-rulebook.pdf"

in_range 2 && download 2 "pandemic-legacy-s1" \
  "https://images.zmangames.com/filer_public/63/aa/63aa3f93-14f9-43f0-ba26-73b70d8a6bd7/pandemic_legacy_season_1_rules.pdf"

in_range 3 && download 3 "gloomhaven" \
  "https://cdn.1j1ju.com/medias/91/87/32-gloomhaven-rulebook.pdf"

in_range 4 && download 4 "ark-nova" \
  "https://cdn.1j1ju.com/medias/e9/c1/66-ark-nova-rulebook.pdf"

in_range 5 && download 5 "twilight-imperium-4e" \
  "https://images-cdn.fantasyflightgames.com/filer_public/f3/c6/f3c66512-8e19-4f30-a0d4-d7d75571571f/ti4_living_rules_reference_v2.pdf"

in_range 6 && download 6 "spirit-island" \
  "https://cdn.1j1ju.com/medias/73/d6/db-spirit-island-rulebook.pdf"

in_range 7 && download 7 "dune-imperium-uprising" \
  "https://cdn.1j1ju.com/medias/f7/b1/e0-dune-imperium-uprising-rulebook.pdf"

in_range 8 && download 8 "war-of-the-ring-2e" \
  "https://cdn.1j1ju.com/medias/ef/0d/9c-war-of-the-ring-second-edition-rulebook.pdf"

in_range 9 && download 9 "terraforming-mars" \
  "https://cdn.1j1ju.com/medias/0b/ab/04-terraforming-mars-rulebook.pdf"

in_range 10 && download 10 "star-wars-rebellion" \
  "https://images-cdn.fantasyflightgames.com/filer_public/20/87/2087e24c-f53b-4e70-88ce-4a1e13cb0dfe/sw03_star_wars_rebellion_rules_reference.pdf"

in_range 11 && download 11 "oath" \
  "https://cdn.1j1ju.com/medias/6c/1b/a3-oath-chronicles-of-empire-and-exile-rulebook.pdf"

in_range 12 && download 12 "gloomhaven-jotl" \
  "https://cdn.1j1ju.com/medias/4f/b9/c3-gloomhaven-jaws-of-the-lion-rulebook.pdf"

in_range 13 && download 13 "gaia-project" \
  "https://images.zmangames.com/filer_public/58/3c/583c82bc-9f10-46de-9cc0-c9cf8da0e4ca/zm7506_gaia_project_rules.pdf"

in_range 14 && download 14 "twilight-struggle" \
  "https://www.gmtgames.com/twilight_struggle/TS_Rules_Deluxe_FINAL.pdf"

in_range 15 && download 15 "castles-of-burgundy" \
  "https://cdn.1j1ju.com/medias/76/b3/2a-the-castles-of-burgundy-special-edition-rulebook.pdf"

in_range 16 && download 16 "through-the-ages" \
  "https://filemanager.czechgames.com/storage/files/through-the-ages/rules/through-the-ages-rules-en.pdf"

in_range 17 && download 17 "seti" \
  "https://filemanager.czechgames.com/storage/files/seti/rules/seti-rules-en.pdf"

in_range 18 && download 18 "slay-the-spire" \
  "https://cdn.1j1ju.com/medias/slay-the-spire-the-board-game-rulebook.pdf"

in_range 19 && download 19 "great-western-trail" \
  "https://cdn.1j1ju.com/medias/87/c5/52-great-western-trail-rulebook.pdf"

in_range 20 && download 20 "frosthaven" \
  "https://cdn.1j1ju.com/medias/frosthaven-rulebook.pdf"

in_range 21 && download 21 "eclipse-2e" \
  "https://cdn.1j1ju.com/medias/eclipse-second-dawn-for-the-galaxy-rulebook.pdf"

in_range 22 && download 22 "lotr-duel" \
  "https://cdn.1j1ju.com/medias/the-lord-of-the-rings-duel-for-middle-earth-rulebook.pdf"

in_range 23 && download 23 "brass-lancashire" \
  "https://cdn.1j1ju.com/medias/15/52/7b-brass-lancashire-rulebook.pdf"

in_range 24 && download 24 "7-wonders-duel" \
  "https://cdn.1j1ju.com/medias/f8/6a/d5-7-wonders-duel-rulebook.pdf"

in_range 25 && download 25 "nemesis" \
  "https://cdn.1j1ju.com/medias/03/21/5a-nemesis-rulebook.pdf"

# --- Games #26-50 ---

in_range 26 && download 26 "scythe" \
  "https://cdn.1j1ju.com/medias/68/bc/6c-scythe-rulebook.pdf"

in_range 27 && download 27 "a-feast-for-odin" \
  "https://images.zmangames.com/filer_public/8f/91/8f91d9ae-edde-426b-a237-72877647958e/affo-rules.pdf"

in_range 28 && download 28 "clank-legacy" \
  "https://cdn.1j1ju.com/medias/a0/f1/40-clank-legacy-acquisitions-incorporated-rulebook.pdf"

in_range 29 && download 29 "concordia" \
  "https://www.riograndegames.com/wp-content/uploads/2013/10/Concordia_rules_eng_1_1.pdf"

in_range 30 && download 30 "lost-ruins-of-arnak" \
  "https://filemanager.czechgames.com/storage/files/lost-ruins-of-arnak/rules/lost-ruins-of-arnak-rules-en.pdf"

in_range 31 && download 31 "great-western-trail-2e" \
  "https://asmodee-resources.azureedge.net/media/germanyprod/Regeln/Great%20Western%20Trail%202%20Edition-Rulebook.pdf"

in_range 32 && download 32 "arkham-horror-tcg" \
  "https://images-cdn.fantasyflightgames.com/filer_public/dd/78/dd7818fe-0c9a-4a6c-b685-e32ab55b1702/ahc60_learn_to_play_web.pdf"

in_range 33 && download 33 "sky-team" \
  "https://www.scorpionmasque.com/sites/scorpionmasque.com/files/st_rules01_en_06jun2023.pdf"

in_range 34 && download 34 "root" \
  "https://aadl.org/files/catalog_guides/Root_Base_Law_of_Root_web_Oct_15_2020.pdf"

in_range 35 && download 35 "terra-mystica" \
  "https://images.zmangames.com/filer_public/3c/b1/3cb1119d-85cb-4905-bfe6-d428a3024e1b/zm7240_terra_mystica_rules.pdf"

in_range 36 && download 36 "orleans" \
  "https://www.dlp-games.de/tpl/download/Orleans_EN.pdf"

in_range 37 && download 37 "too-many-bones" \
  "https://cdn.1j1ju.com/medias/aa/d9/a3-too-many-bones-rulebook.pdf"

in_range 38 && download 38 "wingspan" \
  "https://cdn.1j1ju.com/medias/wingspan-rulebook.pdf"

in_range 39 && download 39 "barrage" \
  "https://cdn.1j1ju.com/medias/barrage-rulebook.pdf"

in_range 40 && download 40 "mage-knight" \
  "https://wizkids.com/mage-knight-ultimate-edition-rulebook.pdf"

in_range 41 && download 41 "hegemony" \
  "https://hegemonicproject.com/hegemony-rulebook-v1.2-en.pdf"

in_range 42 && download 42 "everdell" \
  "https://cdn.1j1ju.com/medias/everdell-rulebook.pdf"

in_range 43 && download 43 "the-crew-mission-deep-sea" \
  "https://www.thamesandkosmos.com/manuals/full/691868_Crew_Manual.pdf"

in_range 44 && download 44 "viticulture-ee" \
  "https://cdn.1j1ju.com/medias/viticulture-ee-rulebook.pdf"

in_range 45 && download 45 "crokinole" \
  "https://nationalcrokinoleassociation.com/rules.pdf"

in_range 46 && download 46 "kanban-ev" \
  "https://board-game-rules.com/kanban-ev-rules.pdf"

in_range 47 && download 47 "heat" \
  "https://ncdn0.daysofwonder.com/heat/en/heat-rules.pdf"

in_range 48 && download 48 "marvel-champions" \
  "https://images-cdn.fantasyflightgames.com/filer_public/marvel-champions-learn-to-play.pdf"

in_range 49 && download 49 "underwater-cities" \
  "https://www.riograndegames.com/underwater-cities-rules.pdf"

in_range 50 && download 50 "food-chain-magnate" \
  "https://goblins.net/food-chain-magnate-rules-en.pdf"

# --- Games #51-75 ---

in_range 51 && note_manual 51 "pax-pamir-2e" \
  "Wehrlegig Games — search BGG files section for official PDF"

in_range 52 && download 52 "cthulhu-death-may-die" \
  "https://resources.cmon.com/cthulhu-death-may-die-rulebook.pdf"

in_range 53 && note_manual 53 "clank-catacombs" \
  "Dire Wolf Digital — search BGG files section for official PDF"

in_range 54 && download 54 "puerto-rico" \
  "https://www.riograndegames.com/puerto-rico-deluxe-rules.pdf"

in_range 55 && download 55 "age-of-innovation" \
  "https://www.feuerland-spiele.de/age-of-innovation-rules-en.pdf"

in_range 56 && note_manual 56 "ticket-to-ride-legacy" \
  "Days of Wonder — search BGG files section for official PDF"

in_range 57 && note_manual 57 "cascadia" \
  "AEG / Flatout Games — search BGG files section for official PDF"

in_range 58 && download 58 "on-mars" \
  "https://cdn.1j1ju.com/medias/on-mars-rulebook.pdf"

in_range 59 && note_manual 59 "harmonies" \
  "Libellud — search BGG files section for official PDF"

in_range 60 && note_manual 60 "pandemic-legacy-s0" \
  "Z-Man Games — search BGG files section for official PDF"

in_range 61 && note_manual 61 "caverna" \
  "Lookout Spiele — search BGG files section for official PDF"

in_range 62 && download 62 "anachrony" \
  "https://mindclashgames.com/anachrony-essential-edition-rulebook.pdf"

in_range 63 && download 63 "blood-rage" \
  "https://cdn.1j1ju.com/medias/blood-rage-rulebook.pdf"

in_range 64 && note_manual 64 "agricola" \
  "Lookout Spiele — search BGG files section for official PDF"

in_range 65 && note_manual 65 "oathsworn" \
  "Shadowborne Games — search BGG files section for official PDF (large file ~119MB)"

in_range 66 && note_manual 66 "obsession" \
  "Kayenta Games — search BGG files section for official PDF"

in_range 67 && note_manual 67 "grand-austria-hotel" \
  "Lookout Spiele — search BGG files section for official PDF"

in_range 68 && download 68 "lisboa" \
  "https://tesera.ru/images/items/lisboa-rulebook.pdf"

in_range 69 && note_manual 69 "blood-on-the-clocktower" \
  "Pandemonium Institute — search BGG files section for official PDF"

in_range 70 && download 70 "sleeping-gods" \
  "https://cdn.1j1ju.com/medias/sleeping-gods-rulebook.pdf"

in_range 71 && note_manual 71 "pandemic-legacy-s2" \
  "Z-Man Games — search BGG files section for official PDF"

in_range 72 && download 72 "tzolkin" \
  "https://filemanager.czechgames.com/storage/files/tzolkin/rules/tzolkin-rules-en.pdf"

in_range 73 && download 73 "power-grid" \
  "https://www.riograndegames.com/power-grid-recharged-rules.pdf"

in_range 74 && download 74 "mansions-of-madness-2e" \
  "https://images-cdn.fantasyflightgames.com/mansions-of-madness-2e-rules-reference.pdf"

in_range 75 && download 75 "clans-of-caledonia" \
  "https://cdn.1j1ju.com/medias/clans-of-caledonia-rulebook.pdf"

# --- Games #76-100 ---

in_range 76 && note_manual 76 "the-white-castle" \
  "Thames & Kosmos — search BGG files section for official PDF"

in_range 77 && download 77 "quacks-of-quedlinburg" \
  "https://cdn.1j1ju.com/medias/quacks-of-quedlinburg-rulebook.pdf"

in_range 78 && download 78 "paladins-of-the-west-kingdom" \
  "https://cdn.1j1ju.com/medias/paladins-of-the-west-kingdom-rulebook.pdf"

in_range 79 && download 79 "great-western-trail-nz" \
  "https://board-game-rules.com/great-western-trail-nz-rules.pdf"

in_range 80 && download 80 "le-havre" \
  "https://cdn.1j1ju.com/medias/le-havre-rulebook.pdf"

in_range 81 && download 81 "the-gallerist" \
  "https://cdn.1j1ju.com/medias/the-gallerist-rulebook.pdf"

in_range 82 && download 82 "android-netrunner" \
  "https://images-cdn.fantasyflightgames.com/android-netrunner-core-rules.pdf"

in_range 83 && note_manual 83 "agricola-revised" \
  "Lookout Spiele — search BGG files section for official PDF"

in_range 84 && download 84 "star-wars-imperial-assault" \
  "https://images-cdn.fantasyflightgames.com/star-wars-imperial-assault-learn-to-play.pdf"

in_range 85 && download 85 "maracaibo" \
  "https://cdn.1j1ju.com/medias/maracaibo-rulebook.pdf"

in_range 86 && note_manual 86 "mechs-vs-minions" \
  "Riot Games — search BGG files section for official PDF"

in_range 87 && note_manual 87 "darwins-journey" \
  "ThunderGryph Games — search BGG files section for official PDF"

in_range 88 && download 88 "voidfall" \
  "https://mindclashgames.com/wp-content/uploads/2023/03/VOIDFALL-Rulebook-websafe.pdf"

in_range 89 && download 89 "the-crew" \
  "https://www.thamesandkosmos.com/manuals/full/691868_Crew_Manual.pdf"

in_range 90 && download 90 "revive" \
  "https://tesera.ru/images/items/2200203/REVIVE_RULES_ENG_compressed.pdf"

in_range 91 && download 91 "wingspan-asia" \
  "https://desktopgames.com.ua/games/6492/WS_Asia_Rulebook_r9.pdf"

in_range 92 && note_manual 92 "kingdom-death-monster" \
  "NOT AVAILABLE as free PDF — publisher sells rulebook separately"

in_range 93 && download 93 "race-for-the-galaxy" \
  "https://cdn.1j1ju.com/medias/6a/44/a4-race-for-the-galaxy-rulebook.pdf"

in_range 94 && download 94 "five-tribes" \
  "https://cdn1.daysofwonder.com/five-tribes/en/img/ft_rules_2015-06_en.pdf"

in_range 95 && note_manual 95 "endeavor-deep-sea" \
  "Burnt Island Games — search BGG files section for official PDF"

in_range 96 && download 96 "azul" \
  "https://cdn.1j1ju.com/medias/03/14/fd-azul-rulebook.pdf"

in_range 97 && download 97 "final-girl" \
  "https://gamers-hq.de/media/pdf/22/ba/4a/FinalGirl_Rules.pdf"

in_range 98 && download 98 "clank" \
  "https://cdn.1j1ju.com/medias/dc/cc/ae-clank-a-deck-building-adventure-rulebook.pdf"

in_range 99 && download 99 "fields-of-arle" \
  "https://images.zmangames.com/filer_public/55/a3/55a3403e-c817-4641-a169-4c0cbff7d116/zm7490_fields_of_arle_rules.pdf"

in_range 100 && download 100 "el-grande" \
  "https://www.hans-im-glueck.de/wp-content/uploads/2023/07/ElGrande_2023_rule_EN_20-07-23-komprimiert.pdf"

# --- Games #101-125 ---

in_range 101 && download 101 "eclipse-new-dawn" \
  "https://cdn.1j1ju.com/medias/48/0e/83-eclipse-rulebook.pdf"

in_range 102 && download 102 "aeons-end" \
  "https://cdn.1j1ju.com/medias/3f/5c/9e-aeons-end-rulebook.pdf"

in_range 103 && note_manual 103 "scout" \
  "Oink Games — search BGG files section or https://onemoregame.cloud-line.com/files/SCOUT!_v2.1_English_open.pdf"

in_range 104 && download 104 "concordia-venus" \
  "https://cdn.1j1ju.com/medias/b9/72/a8-concordia-venus-rulebook.pdf"

in_range 105 && download 105 "lords-of-waterdeep" \
  "https://media.wizards.com/downloads/dnd/DnD_LOW_Rulebook_EN.pdf"

in_range 106 && download 106 "arcs" \
  "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/Arcs_Base_Rulebook.pdf?v=1713374179"

in_range 107 && download 107 "teotihuacan" \
  "https://cdn.1j1ju.com/medias/fc/ee/c7-teotihuacan-city-of-gods-rulebook.pdf"

in_range 108 && download 108 "beyond-the-sun" \
  "https://cdn.1j1ju.com/medias/d8/5b/54-beyond-the-sun-rulebook.pdf"

in_range 109 && download 109 "dominant-species" \
  "https://cdn.1j1ju.com/medias/5b/b9/55-dominant-species-rulebook.pdf"

in_range 110 && download 110 "search-for-planet-x" \
  "https://cdn.1j1ju.com/medias/1c/fb/79-the-search-for-planet-x-rulebook.pdf"

in_range 111 && note_manual 111 "through-the-ages-1e" \
  "Czech Games Edition — 1st edition; search BGG files section for official PDF"

in_range 112 && download 112 "splendor-duel" \
  "https://cdn.1j1ju.com/medias/d5/20/a3-splendor-duel-rulebook.pdf"

in_range 113 && download 113 "bomb-busters" \
  "https://meepletron-storage.s3.us-east-2.amazonaws.com/resources/bomb-busters-rulebook.pdf"

in_range 114 && download 114 "7-wonders" \
  "https://cdn.1j1ju.com/medias/c8/d6/88-7-wonders-rule.pdf"

in_range 115 && download 115 "decrypto" \
  "https://cdn.1j1ju.com/medias/fb/0d/f3-decrypto-rulebook.pdf"

in_range 116 && download 116 "robinson-crusoe" \
  "https://cdn.1j1ju.com/medias/83/5f/a2-robinson-crusoe-adventures-on-the-cursed-island-rulebook.pdf"

in_range 117 && download 117 "voyages-of-marco-polo" \
  "https://cdn.1j1ju.com/medias/d5/6b/3b-the-voyages-of-marco-polo-rulebook.pdf"

in_range 118 && download 118 "arkham-horror-tcg-revised" \
  "https://images-cdn.fantasyflightgames.com/filer_public/50/8b/508bb12f-0673-4541-8310-1fbab01cbcaa/ahc60_learn_to_play_eng-compressed.pdf"

in_range 119 && download 119 "ra" \
  "https://images.zmangames.com/filer_public/1c/f1/1cf1f19e-70bb-413f-8756-13e1e5239b8a/kn27_ra_rulebook_eng.pdf"

in_range 120 && download 120 "trickerion" \
  "https://cdn.1j1ju.com/medias/f4/cd/e2-trickerion-legends-of-illusion-rulebook.pdf"

in_range 121 && download 121 "quest-for-el-dorado" \
  "https://cdn.1j1ju.com/medias/fc/6a/fa-the-quest-for-el-dorado-rulebook.pdf"

in_range 122 && download 122 "inis" \
  "https://cdn.1j1ju.com/medias/46/41/fc-inis-rulebook.pdf"

in_range 123 && download 123 "battlestar-galactica" \
  "https://cdn.1j1ju.com/medias/b5/e7/37-battlestar-galactica-the-board-game-rulebook.pdf"

in_range 124 && download 124 "carnegie" \
  "https://cdn.1j1ju.com/medias/9e/25/38-carnegie-rulebook.pdf"

in_range 125 && note_manual 125 "wyrmspan" \
  "Stonemaier Games via Dropbox — https://stonemaiergames.com/games/wyrmspan/rules-faq/"

# --- Games #126-150 ---

in_range 126 && download 126 "dwellings-of-eldervale" \
  "https://gamers-hq.de/media/pdf/c7/c2/c2/DoERulebook2024.pdf"

in_range 127 && download 127 "nemesis-lockdown" \
  "https://cdn.1j1ju.com/medias/0f/4f/16-nemesis-lockdown-rulebook.pdf"

in_range 128 && download 128 "architects-of-the-west-kingdom" \
  "https://cdn.1j1ju.com/medias/80/41/3d-architects-of-the-west-kingdom-rulebook.pdf"

in_range 129 && download 129 "tigris-and-euphrates" \
  "https://cdn.1j1ju.com/medias/04/4a/fe-tigris-euphrates-rulebook.pdf"

in_range 130 && download 130 "keyflower" \
  "https://cdn.1j1ju.com/medias/2d/11/80-keyflower-rulebook.pdf"

in_range 131 && download 131 "dominion-intrigue" \
  "https://cdn.1j1ju.com/medias/ea/58/df-dominion-intrigue-rulebook.pdf"

in_range 132 && download 132 "raiders-of-the-north-sea" \
  "https://cdn.1j1ju.com/medias/c8/c7/e3-raiders-of-the-north-sea-rulebook.pdf"

in_range 133 && download 133 "tainted-grail" \
  "https://cdn.1j1ju.com/medias/11/7a/e2-tainted-grail-the-fall-of-avalon-rulebook.pdf"

in_range 134 && download 134 "wonderlands-war" \
  "https://tesera.ru/images/items/1786613/Wonderland's%20War%20-%20Rulebook_08.10.2020.pdf"

in_range 135 && download 135 "caylus" \
  "https://cdn.1j1ju.com/medias/e5/d0/ee-caylus-rulebook.pdf"

in_range 136 && download 136 "eldritch-horror" \
  "https://cdn.1j1ju.com/medias/b4/2e/17-eldritch-horror-rulebook.pdf"

in_range 137 && download 137 "lorenzo-il-magnifico" \
  "https://cdn.1j1ju.com/medias/38/59/00-lorenzo-il-magnifico-rulebook.pdf"

in_range 138 && download 138 "troyes" \
  "https://cdn.1j1ju.com/medias/cb/77/69-troyes-rulebook.pdf"

in_range 139 && download 139 "age-of-steam" \
  "https://cdn.1j1ju.com/medias/77/8c/75-age-of-steam-rulebook.pdf"

in_range 140 && note_manual 140 "lotr-fate-of-fellowship" \
  "Z-Man Games — too new (2025), check BGG files section for official PDF"

in_range 141 && download 141 "lotr-journeys-middle-earth" \
  "https://cdn.1j1ju.com/medias/bc/15/79-the-lord-of-the-rings-journeys-in-middle-earth-rulebook.pdf"

in_range 142 && note_manual 142 "galactic-cruise" \
  "Kinson Key Games — too new (2025), check BGG files section for official PDF"

in_range 143 && download 143 "mombasa" \
  "https://cdn.1j1ju.com/medias/45/00/09-mombasa-rulebook.pdf"

in_range 144 && download 144 "dominion" \
  "https://www.riograndegames.com/wp-content/uploads/2016/09/Dominion2nd.pdf"

in_range 145 && note_manual 145 "nucleum" \
  "Board&Dice via Dropbox — https://boardanddice.com/download/"

in_range 146 && download 146 "patchwork" \
  "https://cdn.1j1ju.com/medias/74/af/f2-patchwork-rulebook.pdf"

in_range 147 && download 147 "hansa-teutonica" \
  "https://cdn.1j1ju.com/medias/26/0c/b9-hansa-teutonica-rulebook.pdf"

in_range 148 && note_manual 148 "trajan" \
  "Ammonit Spiele / Huch! — search BGG files section for official PDF"

in_range 149 && download 149 "aeons-end-war-eternal" \
  "https://cdn.1j1ju.com/medias/9d/8f/d0-aeons-end-war-eternal-rulebook.pdf"

in_range 150 && download 150 "twilight-imperium-3e" \
  "https://images-cdn.fantasyflightgames.com/ffg_content/Twilight%20Imperium%203/ti3rules.pdf"

# --- Games #151-175 ---

in_range 151 && download 151 "russian-railroads" \
  "https://cdn.1j1ju.com/medias/1a/35/ab-russian-railroads-rulebook.pdf"

in_range 152 && download 152 "vinhos-deluxe" \
  "https://www.boardgamehelpers.com/Vinhos/Images/VDE_SV2016_2016-01-25_VL_LOW.pdf"

in_range 153 && download 153 "rising-sun" \
  "https://cdn.1j1ju.com/medias/2d/2c/5b-rising-sun-rulebook.pdf"

in_range 154 && download 154 "forest-shuffle" \
  "https://cdn.svc.asmodee.net/production-asmodeeca/uploads/2023/12/en_forrestshuffle.html_Forest_Shuffle_175_Rules_EN_WEB_230516.pdf"

in_range 155 && download 155 "yokohama" \
  "https://cdn.1j1ju.com/medias/00/9a/00-yokohama-rulebook.pdf"

in_range 156 && download 156 "just-one" \
  "https://cdn.1j1ju.com/medias/1f/0e/8f-just-one-rulebook.pdf"

in_range 157 && download 157 "iss-vanguard" \
  "https://www.awakenrealms.com/images/download/ISS_Vanguard/Rulebook/ISS_Rulebook_280x280mm_bleed3mm%20%5B48%20pages%5D_%5Bcorrected_17_04_2023%5D.pdf"

in_range 158 && download 158 "forbidden-stars" \
  "https://cdn.1j1ju.com/medias/df/bc/0b-forbidden-stars-rulebook.pdf"

in_range 159 && download 159 "pandemic-iberia" \
  "https://cdn.1j1ju.com/medias/f1/1a/18-pandemic-iberia-rulebook.pdf"

in_range 160 && download 160 "clank-in-space" \
  "https://cdn.1j1ju.com/medias/4e/e4/76-clank-in-space-rulebook.pdf"

in_range 161 && download 161 "codenames" \
  "https://cdn.1j1ju.com/medias/89/5e/99-codenames-rule.pdf"

in_range 162 && download 162 "the-7th-continent" \
  "https://cdn.1j1ju.com/medias/6c/95/a4-the-7th-continent-rulebook.pdf"

in_range 163 && download 163 "tyrants-of-the-underdark" \
  "https://cdn.1j1ju.com/medias/6c/f4/36-tyrants-of-the-underdark-board-game-rulebook.pdf"

in_range 164 && download 164 "champions-of-midgard" \
  "https://cdn.shopify.com/s/files/1/0669/3961/7510/files/ChampionsofMidgard_rulebook_english.pdf?v=1706297795"

in_range 165 && download 165 "rajas-of-the-ganges" \
  "https://cdn.1j1ju.com/medias/35/3a/f7-rajas-of-the-ganges-rulebook.pdf"

in_range 166 && download 166 "magic-the-gathering" \
  "https://cdn.1j1ju.com/medias/7c/b2/7b-magic-the-gathering-basic-rulebook.pdf"

in_range 167 && download 167 "hadrians-wall" \
  "https://cdn.1j1ju.com/medias/dd/c3/8a-hadrians-wall-rulebook.pdf"

in_range 168 && note_manual 168 "planet-unknown" \
  "Adam's Apple Games — BGG login required for rulebook PDF"

in_range 169 && download 169 "roll-for-the-galaxy" \
  "https://www.riograndegames.com/wp-content/uploads/2013/02/Roll-for-the-Galaxy-Rules.pdf"

in_range 170 && download 170 "pandemic" \
  "https://cdn.1j1ju.com/medias/c5/69/03-pandemic-rulebook.pdf"

in_range 171 && download 171 "targi" \
  "https://www.thamesandkosmos.com/manuals/full/691479_Targi%20Manual.pdf"

in_range 172 && download 172 "parks" \
  "https://cdn.1j1ju.com/medias/f9/b4/d6-parks-rulebook.pdf"

in_range 173 && download 173 "star-realms" \
  "https://cdn.1j1ju.com/medias/27/e1/a6-star-realms-rulebook.pdf"

in_range 174 && download 174 "alchemists" \
  "https://cdn.1j1ju.com/medias/ef/97/2b-alchemists-rulebook.pdf"

in_range 175 && note_manual 175 "too-many-bones-undertow" \
  "Chip Theory Games via Dropbox — https://www.chiptheorygames.com/support/"

echo ""
echo "========================================="
echo "Done!"
echo "  Downloaded: ${downloaded}"
echo "  Skipped (already exist): ${skipped}"
echo "  Failed: ${failed}"
echo "  Manual download needed: ${manual}"
if [[ "$manual" -gt 0 ]]; then
  echo ""
  echo "Some PDFs require manual download (Dropbox links, session-gated CDNs, etc.)"
  echo "Check the MANUAL entries above and visit the BGG file pages for those games."
fi
