# Squadbuilder Adventure - Browser Prototype v0.1

## Run it
Open `index.html` in a modern browser. This build has no external dependencies and should run directly from disk.

## Included
- Archer, Warrior, Cleric
- 12 hero action cards
- Goblin Spearman, Goblin Archer, Orc Warrior
- Frontline / Backline
- Ready / exhausted hero activations
- Basic actions
- Action and Quick cards
- Automatic Warrior Counter Strike reaction
- HP, Block foundation, Bleed, Archer crits, Warrior Rage foundation
- Draw / hand / discard / reshuffle
- Enemy phase and basic enemy targeting
- Downing and victory

## Current prototype assumptions
- One player / one lane.
- Melee enemies prioritize Frontline; ranged enemies prioritize Backline.
- Reactions are automatic in this first build rather than prompting the player.
- Cards draw from a single squad deck.
- Opening hand is 5; draw 3 each new round.
- No hand limit is enforced yet.
- No campaign, recruitment, promotion, items, injuries, or encounter objectives yet.

## Data
Edit `data/gameData.js` to change hero, card, or enemy values without touching the UI code.

## Next milestones
1. Proper target selection for healing and multi-target effects.
2. Explicit lane rules and multiple player lanes.
3. Reaction prompt system.
4. Status engine: Weak, Poison, Curse, Bleed timing.
5. Remaining six basic heroes.
6. Enemy intent / behavior cards.
7. Encounter framework.
8. Promotions and summons.
9. Five-encounter run / rewards / recruitment.
