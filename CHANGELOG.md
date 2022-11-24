<p align="center">
  <img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/banners/Perfectly_Splendid.png" width="720"
</p>

<h1 align="center"> Perfectly Splendid Update 2 Hotfix <br>

#### Note: In order to fix a critical crash, Llamarama has been removed. 
#### This won't break anything, but if you had any modded Llamas, they will disappear.
#### I'm sorry for that, it's my fault for not catching a critical crash, caused by a Llamarama + Naturalist combo earlier.

### Changes:

- Adjusted The Graveyard config to its Perfectly Splendid values. It got overridden by default values in the Update 2 and I didn't notice, sorry!
- Changed Tree Harvester mod not to automatically replant anything.
- Changed the Carrier keybind to Shift (if you use the modpack supplied config where Shift = sprint), as to not conflict with Better Signs and Universal Graves.
- Disabled duplicate hunger/saturation bars in food tooltips.

### Additions:

- 

### Removals: 

- Llamarama (causes a crash, when Naturalist entities interact with llamarama:statue).
- Now Playing (seems to be what's causing "Index -1 out of bounds for length 129").

### Updated: 

<details><summary>Updated all mods.</summary>

- Bag Of Holding
- Roughly Enough Professions
- Supplementaries

</details>

<details><summary>Previous Changelog (v0.3).</summary>

<h1 align="center"> Perfectly Splendid Update 2 <br>

#### Note: Spice Of Fabric has been removed due to a crash with Create. Nothing should break, but do make a backup, just in case!
#### Open Parties and Claims requires a config reformat. If you were using a custom config, back it up!
#### This Update brings in the newest version of GeckoLib, meaning all animations now work properly with shaders.
#### If you would like for the updated resourcepacks to apply automatically, delete your options.txt.

### Changes:

- Hopefully, fixed an inconsistent crash, when opening chat. If you experience such a crash, and the log says
	- "Index -1 out of bounds for length 129", please, either leave a comment or open a GH issue.
	- Disabled Stendhal's chat utils. Signs, books etc still have them.
- Added a recipe for the Blazing Eye. I forgot, that the Nether Gauntlet boss is disabled, due to an incompatibility with BetterCombat, this is a compromise.
- Fixed another issue, that could randomly quadruple the Ender Dragon's HP.
- Fixed "air" blocks appearing in some stonecutter recipes.
- Fixed a crash, when searching "dep" in creative search (removed hardcodedSeaLevelFix rule).
- Fixed a crash, when using a hand crank to power mechanical press or a mixer above a basin with ingots (removed Spice Of Fabric).
- Fixed copper hopper recipe. It was correct with vanilla chests, but wrong with modded ones.
- Disabled "put items directly into inventory" feature from IPN, restoring vanilla behavior.
- Enabled locked slots feature. Right control enables/disables locking. Holding left control and left clicking on a slot will lock it.
- Added a recipe for Raid Horn. Difficult by design, see the recipe in REI.
- Added tags to horns (#c:horns and #c:copper_horns).
- Removed nether brass sconce, because the model is broken.
- Added #c:stripped_logs tag to Azalea and Jacaranda stipped logs.
- Added #c:stripped_wood tag to Azalea and Jacaranda stropped wood.
- Swapped tags for sturdy stones, based on a PR, made by magneticflux-.
- Removed Colorful Azalea benches and seat rests from Aurora's Decorations, due to broken textures.
- Added integration between Charm and Colorful Azaleas.
- Changed the way starting inventory debloat works, should work in Multiplayer now, if more than 1 player join at once. No effect on existing players.
- Fixed boats taking fall damage under certain conditions (boatsTakeFallDamageFix true).
- Changed game version to 1.19.2 in JumpQuilt to avoid accidentally updating to 1.19.3.

### Additions:

- Drink Beer
	1. Adjusted Keg recipe to use all barrel variants.
	2. Made a recipe for the squeaker.
- Guardians Galore
	1. Adjusted Blaze Bell recipe to use all chain variants.
- Smarter Farmers
	1. Made compatible with Farming for Blockheads.
- Takes a Pillage
	1. Random raids (sieges) are disabled.
	2. Golem replacement is disabled.
	3. Ravager horn is disabled (use Raid Horn).
	4. Spacing and separation is default, but, despite that, the structures are quite rare.
	5. Milk still removes bad omen.
- Variant Mobs
	1. Spiders have a chance to spawn as Black Spiders below Y30.
	2. Zombies have a chance to spawn as Forgotten below Y20.
	3. Skeletons have a chance to spawn as Undead Warriors below Y10.
	4. Creepers have a chance to spawn as Cave Creepers below Y0.
	5. All of the above are tougher variants of vanilla mobs.

### Removals: 

- Chat Up! (Where's My Chat History already does the same).
- Spice Of Fabric (due to the aforementioned crash with Create).

### Updated: 

<details><summary>Updated all mods.</summary>

- Blockus
- Botany Trees
- Carpet TIS Additions
- Create
- CreativeCore
- Comforts
- Complete Config
- Connectible Chains
- Cull Leaves
- Customizable Elytra
- Dave's Potioneering
- Extended Drawers
- Falling Leaves
- Farmer's Delight
- Forge Config API Port
- Friends and Foes
- GeckoLib
- HorseInBoat
- Iris
- Immersive Armors
- Incendium
- Kaffee's Dual Ride
- KubeJS
- LibIPN
- LootJS
- ModMenu
- Moonlight
- Mythic Mounts
- Open Parties and Claims
- owo
- Patchouli
- QSL
- Simple Copper Pipes
- Sodium Extra
- Straw Statues
- Supplementaries
- The Bumblezone
- The Graveyard
- Towns and Towers
- Trinkets
- Utility Belt
- Variant Barrels
- Variant Bookshelves
- Variant Crafting Tables
- Variant Composters
- Variant Grindstones
- Wondrous Wilds

- Chests Reimagined
- Eating Animations+

</details>

</details>

<details><summary>Previous Changelog (v0.2).</summary>

<h1 align="center"> Perfectly Splendid Update 1 <br>

#### Note: if updating from v0.1, delete Towns and Towers from .minecraft/config/paxi/datapacks.

#### If you would like for the new resosurce packs to apply automatically, delete your options.txt. Otherwise, add it manually in video settings.

### Changes:

- Aurora's Decorations blocks are now craftable, using Charm's woodcutter.
- Added mod compatibility between Charm and all other modded wood types.
- Fixed bees not entering hives (beeDupeFix rule removed).
- Allowed for some mobs from Wondrous Wilds to be captured in Supplementaries' jars.
- Disabled fireflies from Naturalist (Wondrous Wilds already adds fireflies).
- Fixed an error, resulting in the Ender Dragon having x4 HP (**intended:** x2 HP).
- Fixed modded bows and crossbows visually not having any projectiles (removed **By Design** mod).
- Allowed some Mythic Mounts to spawn in BetterNether and Promenade biomes.
- Drastically reduced the chances for a Mythic Mount to spawn (the most common is 40, the least common is 1).
- Reworked bundle crafting recipes. To craft a bundle, simply form a bucket shape with wool. Each colour works. "Vanilla" recipe has been removed, use rainbow wool to craft it ;)
- Allowed using coloured bundles with upgrade tokens.
- Made it so that villagers always convert to zombies, regardless of the difficulty setting, in case you aren't playing on Hard.
- Removed duplicate bamboo recipes from Twigs, sorry for that!
- Added compatibility between Bamboo Everything, Twigs and Blockus.
- Removed duplicate crimson and warped chests/barrels.
- Unified chests and barrels with appropriate tags.
- Made almost all recipes, that use chests, utilize tags, if they didn't before. This means modded chests will work with almost all recipes now.
- The One Probe will no longer give players a note at spawn. If you've already got one, you'll keep it. And you will still be able to craft it, if need be.
- Fixed Visual Traveler's Titles resource pack not applying when first installing the pack or resetting options.txt.
- Removed Supplementaries' wrench, use Create's one. Also hid Additional Additions' wrench from REI (the recipe was already disabled).
- Hid Supplementaries' blackboard from REI (the recipe was already disabled, use Aurora's Decorations' boards).
- Removed Towns and Towers datapack. There's now a config file with the same exact values.
- Nerfed Sai (**old:** 2 positive DMG, 0 negative DMG; **new:** 0 positive DMG, 1 negative DMG).
- Farmer's Delight knives no longer inherit BetterCombat systems.
- Slightly change IPN integration hints (some inventories will use player inventory only buttons, instead of none at all).
- Added missing translation strings for Supplementaries item groups.
- Fixed Player Plates translation strings for item groups.
- Fixed a typo in rei_integrations script, that resulted in some items not getting hidden.
- Significantly reduced chances of skeletons carrying quivers (**old:** 20%; new: 5%).
- Slightly buffed stats, that looted gear gets in the Nether (**old:** x1.2 AP, +2 HP, x1.3-1.5 DMG, x1.3-1.5 PDMG; **new:** x1.2-2.0 AP, +1.5-2.0 HP, x1.3-1.6 DMG, x1.3-1.7 PDMG).
- Slightly rebalanced all Nether enemies (**old:** +2 AP, x1.4-1.5 HP, x2 XP; **new:** +1.5-2.0 AP, x1.5-2.0 HP, x2.5 XP).
- Buffed all enemies in the End (**old:** vanilla values; **new:** x2.0-3.0 HP, +2-5 AP).
- Buffed stats, that looted gear gets in the End (**old:** x1.5 AP, +4 HP, x1.8-2.0 DMG, x1.8-2.0 PDMG; **new:** x1.5-2.0 AP, +4-5 HP, x1.5-3.0 DMG, x2.0-3.0 PDMG).
- Gave a tiny buff to all looted weapons' stats across all dimensions (**old:** x1.1 DMG, x1.1 PDMG for rares, x1.2 DMG, x1.2 PDMG for epics; **new:** x1.1-1.15 DMG, x1.1-1.15 PDMG for rares, x1.2-1.35 DMG, x1.2-1.35 PDMG for epics).

### Additions:

- Animated Colored Axolotls.
- Better Boss Bars.
- Better MCDX.
- Create.
- Create Support for Open Parties and Claims.
- Charm Fixer (added as a precaution, as I'm using some owo lib mods and not using any GUI parts of Charm).
- Dark Mode Everywhere Fix.
- Eating Animations+.
- Flower Pots+.
- Glowing Ender Dragon.
- idwtialsimmoedm. _this should've been included in v0.1, I don't know why it wasn't..._
- Miniblock Merchants.
- Open Parties and Claims.
- Rainglow.
- Styled Chat.
- Styled Nicknames.
- Styled Player List.
- Smooth Font.
- Visual Shulker Labels.

### Removals: 

- By Design (due to the aforementioned bug with modded bows/crossbows).
- Enhanced Block Entities (no longer needed with Create).

### Updated: 

<details><summary>Updated all mods.</summary>

- Annotated DI
- Ambient Sounds
- BetterNether
- BCLib
- Blockus
- BotanyPots
- CraftPresence
- Collective
- CullLeaves
- Dark Mode Everywhere
- Do A Barrel Roll
- Easy Anvils
- Entity Texture Features
- Expanded Delight
- Fabric Language Kotlin
- Farmer's Knives
- Fireplace Lib
- Inventory Profiles Next
- Iris
- Just Mob Heads
- KubeJS
- LibIPN
- Lithium
- LootJS
- Moonlight
- No Chat Reports
- Paintings++
- Player Animation Lib
- Polymorph
- QSL
- Raised
- Random Bonemeal Flowers
- Repurposed Structures
- Rhino
- Roughly Enough Items
- ShetiPhianCore
- Simple Voice Chat
- Simply Swords
- Snowy Spirit
- Sodium Extra
- Supplementaries
- Talk Bubbles
- The Bumblezone
- The Graveyard Biomes
- TooltipFix
- Towns and Towers
- Traveler's Backpack
- Tree Harvester
- Utility Belt
- Wolves Of Other Furs
- WhereIsIt
- Where's My Chat History
- Xaero's Maps

- Repurposed Structures - Better Desert Temples Compat Datapack
- Repurposed Structures - Better Ocean Monuments Compat Datapack
- Repurposed Structures - Better Witch Huts Compat Datapack
- Repurposed Structures - Farmer's Delight Compat Datapack
- Repurposed Structures - Friends and Foes Compat Datapack
- Repurposed Structures - More Villagers Compat Datapack

</details>

</details>

</details>

## Current version of Perfectly Splendid: v0.31
