<p align="center">
  <img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/banners/Perfectly_Splendid.png" width="720"
</p>

<h1 align="center"> Perfectly Splendid Update 8 <br>

#### Note: Immersive Aircraft keybinds getting reset with Keymap is now fixed.

#### It is recommended you backup your options.txt outside of the game folder and delete it for all the changes to apply. Then re-apply any custom keybinds, if you had any.

### Changes:

- Changed default roll/dodge keybind from R to C.
- Added back compatibility between Wondrous Wilds, Naturalist and Supplementaries (glass jars); forgot to do that during the config transition in U7.
- Significantly increased the chances of Structory and Structory: Towers structures appearing in the world (down from maximum of up to 100k blocks apart to up to 30k). When Dungeons Arise structures should also spawn a bit more often (down from 150k to 50k).
- Increased the cost of re-rolling enchantments in the enchnating table from 1 to 32 lapis (for this to apply to existing worlds, delete your configs from `yourWorldFolder/serverconfig`).
- Blacklisted bats and bamboo creepers in Magnum Torches; this means they now can't spawn, if there's an amethyst magnum torch present. Also doubled the range of said torch (for this to apply to existing worlds, delete your configs from `yourWorldFolder/serverconfig`).
- Fixed a bug, that made items in invisible glow item frames invisible too (`inanimates_can_be_invisible` set to banned in Fabrication).
- Fixed a few woodcutter recipes not working.
- Fixed `twigs:polished_basalt_bricks` producing only 1 slab, when cut in a stonecutter.
- Fixed a lot of wall blocks sounding like glass, when broken (removed Why Does My Glass Sound Like That).
- Fixed a script to properly remove broken auto-generated Colorful Azalea models from Aurora's Decorations.
- Fixed Colorful Azaleas' wood not being compatible with Charm's woodcutter.
- Fixed Aurora's Decorations Colorful Azaleas recipes not working.
- Fixed Macaw's Trapdoors entries not getting collapsed in REI.
- Fixed a crash, that could happen, when nagivating Head Index's menus (temporarily removed 3D Skin Layers).
- Swapped AD's azalea boats for Ecologics' azalea boats, due to wrong models on AD part.
     - This is a bug, caused by ETF, not AD, as such, when ETF fixes it, I will revert back to AD models.
- Added flowering azalea wood recipes for Ecologics' items.
- Added a sandcastle recipe.
- Added a rainbow wool recipe.
- BetterEnd and Sod path blocks now also grant a x1.35 speed boost to be consistent with other path blocks.
- Removed IPN sorting buttons in straw statues' and armour stands' GUIs.
- Disabled Continuity glass pane culling fix resource pack, due to a texture bug.
- Added a bunch of actually useful tips to loading screens.
- Removed Awesome Dungeon settings datapacks, as there are now configs for it. The rarity of the structures should be pretty much the same, as before.
- Removed all breakable potions from Extra Alchemy, since vials are disabled already.
- Removed an endless rod recipe from Big Extras, as there already exists one in Minekea.
- Disabled a redundant fire aspect ignition feature from Bedrockify, as Enchancement already adds it.
- Updated BotanyPots compat datapack (removed Farmer's Delight stuff, as it has native support now).
- Removed `antiSpamDisabled` from default Carpet rules, due to Carpet TIS Additions removal.
- Disabled Terralith intro message; Nullscape and Incendium now don't have any to begin with.
- WIP: Added an optional tutorial structure called Bootcamp; to enable it navigate to `.minecraft/config/starterstructure.json5` and set `"shouldGenerateStructure": true`.
     - Why WIP? Because the way it generates is quite ugly at the moment, a few blocks fail to generate properly and generating entities is a bit iffy.
	 - Example blocks that fail to generate: item frames, paintings, linked chains and rotation speed controllers.
	 - What is it at all? A structure made by me, that showcases a lot of the mods in this pack, in case you'd like some basic introduction.
	 - If you opt in to generate the structure, it will spawn somewhere next to you on world creation. The entrance is at the front of the boot.
	 - You are encouraged to get through the entire structure without breaking any blocks, but I intentionally did not set protection on, in case you get stuck.
- Updated Quilt Loader to 0.18.5.

### Additions:

- Babies Forever by Roundaround;  included as an unmodified jar, as the mod is not hosted on CF, but is MIT licensed and is on the list of allowed 3rd party mods; if I receive a request from the developer to take it down - I will.
     - Original mod page can be found here: https://modrinth.com/mod/roundaround-babies-forever
- Better Nether Map by Jummit; included as an unmodified jar, as the mod is not hosted on CF, but is MIT licensed and is on the list of allowed 3rd party mods; if I receive a request from the developer to take it down - I will.
     - Original mod page can be found here: https://modrinth.com/mod/better-nether-map
- Boats go brr
- Integrated Stronghold; I'm leaving YUNG's Better Strongholds in as well, they can overlap a bit, but overall makes strongholds feel absolutely massive
     - Integrated API
	 - Integrated Stronghold - The Graveyard Integration; this is a datapack, but it will get downloaded into the resourcepacks folder, don't active it, it's purely for credit
- Macaw's Furniture
     - Collapsed REI entries
- Max Health Fix
- Resourceful Config; it's now required by Creeper Overhaul
- Resourceful Lib; it's now required by Handcrafted
- Rotation Locker by Beefox;  included as an unmodified jar, as the mod is not hosted on CF, but is Creative Commons licensed and is on the list of allowed 3rd party mods; if I receive a request from the developer to take it down - I will.
     - Original mod page can be found here: https://modrinth.com/mod/rotationlocker
- Sleep Tight
     - Mostly added for the sleep benefits, as such I pre-configured it to be singificantly easier, than by default. I might make it even easier, depending on how difficult the current iteration ends up being
	 - The benefits include: fully restoring HP and clearing all current effects, if you slept in the same bed for 7 days or more
	 - The downsides include: bed bugs might rarely spawn (5% chance) and sleeping in dark (or not spawn proofed) areas will most certainly not be safe
	 - The mod adds hammocks, which also exist in Comforts, but I will not be removing either, as they are different enough
	 - Note: using a bed will now simply make you lay in it, to actually sleep, hit space, while laying down, or sneak/crouch to get up
- Starter Structure; used for the optional Bootcamp structure spawn, does nothing by default
- Structure Essentials
- Trinkets Curios Theme
- YUNG's Better Nether Fortresses
     - Repurposed Structures - Yung's Better Nether Fortress Compat Datapack
- Wizards
     - Runes
     - Spell Engine
     - Spell Power Attribute
	 - Completely overhauled the recipes; runes, staffs and tier 1+ wands are gated behind netherite
	 - Drastically reduced the chances of any items appearing in loot chests (max 5%, min 2%)

All of the above mods, that are included as unmodified jars, will from now on be credited on the main page along with the rest of the extra credits.

### Removals: 

- Carpet TIS Addition
     - The only rule I used from that mod was `antiSpamDisabled` (Disable spamming checks on players, including: chat message cooldown, creative item drop cooldown)
- Recipe Book is Pain; 0.8.1 crashes with Tom's Simple Storage and 0.9.0 with Bag of Holding; will re-include once fixed
- Skin Layers 3D; causes a lockup, when viewing certain player skins, e.g. player heads obtained from Head Index menus or Miniblock Merchants
     - The issue has been fixed in 1.19.3 and there's a fixed build for 1.19.2 over at the mod's GitHub, which I will also include, if/when it gets published on CF
- Why Does My Glass Sound Like That; causes many non-glass blocks to sound like glass, when broken

### Updated: 

<details><summary>Updated all mods.</summary>

- Awesome Dungeon: End
- Awesome Dungeon: Nether
- Awesome Flooring
- Balm
- BetterCombat
- Blockus
- Bookshelf
- BotanyPots
- Capes
- Collective
- Colorful Azaleas
- CombatRoll
- Continuity
- Cooking For Blockheads
- Crafting Tweaks
- CraftPresence
- Creeper Overhaul
- Custom Entity Models
- Custom Portals
- Dave's Potioneering
- Display Case
- Dramatic Doors
- Easy Anvils
- Easy Magic
- Eating Animation
- Enchancement
- Enchanted Vertical Slabs
- Entity Texture Features
- Expanded Delight
- Extended Drawers
- Fabrication
- Farming For Blockheads
- Friends&Foes
- Handcrafted
- Hoe Tweaks
- Immediately Fast
- Immersive Aircraft
- Immersive Paintings
- Incendium
- Inventory Essentials
- Inventory Profiles Next
- Kiwi Lib
- libIPN
- LibraryFerret
- Lithium
- Macaw's Bridges
- Macaw's Doors
- Macaw's Roofs
- Macaw's Trapdoors
- Make Bubbles Pop
- MC Dungeons Armors
- MC Dungeons Weapons
- MC Story Mode Armors
- MemoryLeakFix
- Moonlight
- Nether Portal Fix
- Nullscape
- Open Parties And Claims
- Ping Wheel
- Player Animator
- QSL
- Random Bonemeal Flowers
- Repurposed Structures
- Roughly Enough Items
- Roughly Enough Professions
- Smaller Nether Portals
- Snowy Spirit
- Soul Fire'd
- Spiky Spikes
- Structory
- Structory: Towers
- Supplementaries
- Terralith
- The Bumblezone
- Tom's Simple Storage
- Traveler's Backpack
- Vanity Slots
- Visual Workbench
- Visuality
- Waystones
- Xaero's Maps
- YUNG's API
- YUNG's Better Desert Temples

- Glowing Ender Dragon
- Repurposed Structures - Better Ocean Monuments Compat Datapack
- Super Duper Vanilla Shaders
- Visual Shulker Labels

</details>

<details><summary>Update 7 Changelog (v0.8).</summary>

#### Note: The following enchantments are removed: homing, impact, acceleration. For more changes to enchantments, read [Enchancement's changelog](https://www.curseforge.com/minecraft/mc-mods/enchancement/files/4398115)

### Changes:

- Removed W.O.O.F. due to a crash, when sneak right-clicking on wolves. 
     - In my tests existing wolves didn't disappear, nor did the breeds change, but do make a backup, if you keep pet wolves, just in case. 
	 - Coloured leads will just turn into normal leads with a leftover tag.
     - Pet beds will definitely disappear.
- Enabled Aurora's Decorations' pet beds.
- BetterNether now natively tags ores, instead of via KubeJS.
- Slightly adjusted tougher mob variants to spawn deeper underground, less likely convert Nether mobs and far less likely spawn with bows.
- Updated Enchancement config.
- Reset Universal Enchants config.
- Recommend using GraalVM with its own optimization flags. Helps a lot with the initial game loading and worldgen times.
- Updated Quilt Loader to 0.18.2.

### Additions:

- 

### Removals: 

- W.O.O.F.; causes a crash, when opening the wolf interaction screen
     - Mine11lib; was only used by the above mod

### Updated: 

<details><summary>Updated all mods.</summary>

- Alternate Current
- Architectury
- BCLib
- BetterEnd
- BetterNether
- Blockus
- BotanyPots
- Chat Patches
- Chunks Fade In
- Collective
- Colorful Azaleas
- CombatRoll
- Create
- Create Deco Fabric
- Creeper Overhaul
- Do A Barrel Roll
- Dramatic Doors
- Dungeon Difficulty
- Dyed
- EnderChests
- Enchancement
- EntityCulling
- Entity Texture Features
- Fabrication
- Forge Config API Port
- Health Overlay
- Hoe Tweaks
- Immediately Fast
- Iris
- Just Mob Heads
- Kiwi
- MC Dungeons Armours
- MC Dungeons Artifacts
- MC Dungeons Weapons
- Mob Variants
- ModMenu
- Moonlight
- Omni-Hopper
- Passive Shield
- Pehkui
- Pickup Notifier
- QSL
- Raised
- Recipe Book Is Pain
- Repurposed Structures
- Roughly Enough Items
- ShetiPhianCore
- Shulker Drops Two
- Simply Swords
- Smaller Nether Portals
- Snowy Spirit
- Supplementaries
- The Bumblezone
- Tom's Simple Storage
- Traveler's Backpack
- Universal Enchants
- Wavey Capes
- Wondrous Wilds
- YUNG's API

- xali's Enchanted Books

</details>

</details>

<details><summary>Update 6 Changelog (v0.7)</summary>

#### Note: After this update your game folder will increase in size by ~650MB, this is due to the new Quilt Loader update, which creates transform cache on first launch

### Changes:

- Fixed a horrible bug, preventing players from interacting with entities (boats, villagers, traders, etc). The bug hopefully affected only Update 5, but I'm still sorry I missed something that important... (removed Fat Chicken).
- Removed creative flight bonus from lvl 4 beacons, due to the addition of quadrocopters. Note: currently the controls for all aircrafts constantly reset, to alleviate that, disable Keymap until the next update, as I'd rather not remove it.
- No longer reduce FPS to 1, when minimized. Alleviates an issue, that could cause initial game loading to take over 7min, if you minimized at any point during that time (changed DynamicFPS config).
- Regenerated Universal Enchants config. No actual changes, but if you customized anything be sure to redo it.
- Blacklisted Create Deco fences from connecting diagonally, due to invisible connections. Already placed mesh fences need to be replaced for it to stop connecting (added #diagonalfences:non_diagonal_fences tag).
- Default shader settings only: Drastically reduced emissive blocks intensity, so that redstone blocks, glow lichen and such aren't too bright (set EMISSIVE_INTENSITY=2 in shaders config).
- Fixed nether redstone ore not being affected by the extraction enchantment (added #c:ores tag).
- Reset the Dungeon Difficulty config to default values, due to the update. Some things might be less/more powerful, than before.
- Reset Simply Swords config to mostly default values, because the recipes are easier now.
- Updated BetterEnd, BetterNether, BetterCombat configs.
- Fixed tag scripts adding item tags, instead of block tags, oops...
- Colorful Azaleas tags are now added natively, rather than via KubeJS.
- Updated Quilt Loader to 0.18.1-beta.68. This completely fixes ModMenu stutter, but you will need extra 650MB of free space, due to newly introduced transform cache.
     - Note: Log Begone is temporarily not working with this Quilt Loader version

### Additions:

- Beautify
- Neat; Replaces Mob Plaques, I simply like it better
- Path under fence gates
- Voice Chat Interaction
- YetAnotherConfigLib (required by the new Chat Patches [formerly Where's My Chat History] version)

### Removals: 

- Fat Chicken (prevents players from interacting with entities)
- Mob Plaques (replaced by Neat, due to personal preference)

### Updated: 

<details><summary>Updated all mods.</summary>

- Armor Statues
- BE Style Wither
- Better Combat
- Better End
- Better Tridents
- Bookshelf
- Botany Pots
- Carpeted Stairs & Slabs
- Charm Of Undying
- Chat Patches (formerly Where's My Chat History)
- Chunks fade in
- Collective
- Colorful Azaleas
- CraftPresence
- Create
- Creeper Overhaul
- Dark Paintings
- Do A Barrel Roll
- Dramatic Doors
- Dynamic Music Updated
- Elytra Slot
- EnderChests
- Expanded Delight
- Extended Drawers
- Experience Bug Fix
- Fabrication
- Friends&Foes
- Immediately Fast
- Immersive Aircraft
- Immersive Armors
- Inventory Profiles Next
- KubeJS
- libIPN
- LootJS
- Macaw's Doors
- Macaw's Lights and Lamps
- Magnum Torch
- MC Dungeons Armors
- Mini Extras
- Mob Variants
- More Totems Of Undying
- Moonlight
- MultiBeds
- Open Parties And Claims
- Platforms
- Player Animator
- Polymer
- Reacharound
- Replanting Crops
- Roughly Enough Items
- Savage Ender Dragon
- Simple Copper Pipes
- Simple Voice Chat
- Simply Swords
- Smarter Farmers
- Snowy Spirit
- Spiky Spikes
- Straw Statues
- Supplementaries
- The Bumblezone
- Traveler's Backpack
- Universal Enchants
- Wavey Capes
- Xaero's Maps

- Repurposed Structures - Better Desert Temples Compat Datapack
- Xali's Enchanted Books

</details>

</details>

<details><summary>Update 5 Changelog (v0.6).</summary>

#### Note: Soul Fire'd mod changed soul fire id from "soulfired:soul_fire" to "minecraft:soul_fire"; shouldn't cause any issues, but check your soul fires after updating, just in case

### Changes:

- Drastically reduced the amount of mods ModMenu shows; if you don't see a mod in ModMenu - there's no in-game config for it
     - This was in an attempt to fix the massive stutter (26sec), that happens when you open mod menu; turns out the issue has to be fixed by Quilt
- Switched Quilt Loader to 0.17.9-beta.1 to fix the aforementioned stutter in ModMenu; that means the fancy error reporting window is gone for now
- Slightly increased the chances of Structory structures spawning
- Disabled slime animations from Better Animations Collection in favour of Luna Slimes
- Disabled default Continuity resource pack; you can now craft both connected and vanilla blocks
     - Note: this does not mean connected textures are gone now, only vanilla glass and bookshelves are
	 - To undo this, just enable the default Continuity resourcepack
- Disabled Earth2Java's mooblooms in favour of Friends&Foes mooblooms; your old mooblooms won't disappear
- Temporarily(?) disabled Bedrockify's reacharound placement, due to Reacharound mod update; practically affects nothing
- Adjusted When Dungeons Arise datapack settings for the new version; now should be a lot less spammy at spawn
- Removed useless GC flags from recommended JVM flags (flags used by G1GC)

### Additions:

- Friends&Foes Beekeeper's Hut
     - Adjusted spacing and separation settings to fit into the pack
- Friends&Foes Flowery Mooblooms
- Connected Blocks
     - Collapsed REI entries for glass
- Chunks Fade In
- Luna Slimes
- Make Bubbles Pop
- Structory: Towers
     - Adjusted spacing and separation settings to fit into the pack

### Removals: 

- 

### Updated: 

<details><summary>Updated all mods.</summary>

- Adorn
- Armor Statues
- Better Combat
- Block Limit Fix
- Botany Pots
- Carpet TIS Additions
- Carpeted Stairs & Slabs
- Clickable Advancements
- Collective
- CombatRoll
- Companion
- CraftPresence
- Critters and Companions
- Dark Paintings
- Dismount Entity
- Dungeon Difficulty
- Do A Barrel Roll
- Dynamic Music Updated
- Enchancement
- Entity Texture Features
- Farmer's Knives
- Fast Anim
- Forge Config API Port
- Friends & Foes
- Handcrafted
- Hoe Tweaks
- I Know What I'm Doing
- Immediately Fast
- Immersive Aircraft
- Immersive Armors
- Immersive Paintings
- Inventory Profiles Next
- Iris
- Just Mob Heads
- LambDynamicLights
- Leaves Be Gone
- libIPN
- Macaw's Windows
- Moonlight
- Passive Shield
- Paxi
- Pehkui
- Polymer
- Puzzle
- QSL
- Quilt Kotlin Libraries
- Radiant Gear
- Random Bonemeal Flowers
- Reacharound
- Replanting Crops
- Scaffolding Drops Nearby
- Show Me Your Skin!
- Shulker Drops Two
- Simple Voice Chat
- Simply Swords
- Smaller Nether Portals
- Snowy Spirit
- Sodium Extra
- Soul Fire'd
- Stack Refill
- Storage Labels
- Supplementaries
- The Bumblezone
- Tom's Simple Storage
- Traveler's Backpack
- Vanity Slots
- Visual Workbench
- When Dungeons Arise!
- Where's My Chat History
- XP Obelisk Additions

- Ore Variants
- Repurposed Structures Better Desert Temples Compat Datapack
- Repurposed Structures Better Ocean Monuments Compat Datapack

</details>

</details>

<details><summary>Update 4 Changelog (v0.5).</summary>

#### Note: Snow Day is gone from CF, might cause existing snowy leaves to disappear. If it's not actively snowing in your area, you can safely update.

### Changes:

- Fixed a crash, that would happen on first launch, if you've never installed the pack before (this is unrelated to the "crash" when you first install Quilt via JumpQuilt)
- Enabled the Nether Gauntlet boss and removed the recipe for the item it drops
     - The boss is now compatible with BetterCombat, but has twice more HP and armour
- Decreased the frequency at which Overworld bosses spawn a little; drastically increased the frequency at which the Nether Gauntlet spawns
- Disabled front third person view. This is a new option in Better Third Person mod, which totally makes sense
- Enabled the following fixes in Carpet Fixes (bugs, that were fixed in 1.19.3):
     - wrongPressurePlateHitboxFix true
     - shulkersAreLowerInChestBoatFix true
     - nbtDataDupeFix true
     - frogJumpsIgnoreTemptedFix true
     - deathTimeCorruptsMobsFix true
     - horseDupeFix true
     - chestBoatDupeFix true
- Re-enabled herringbone mangrove crafting table
- #c:ores tag is added natively by BCLib now, rather than KubeJS, which allowed me to make it compatible with Enchancement
- Aurora's Decorations stripped logs and wood now natively use appropriate tags, rather than via KubeJS
- Disabled right-click actions from Slight GUI Modifications
- Removed Charm's gold bars (duplicate)
- Fixed chat formatting not applying at all, thanks to Where's My Chat History update
- Updated Quilt Loader to 0.18.1-beta.25 (no user input required, unless you manually swapped out Forge for Quilt in your launcher)

### Additions:

- Block Limit Fix
- Carpet MiniTweaks
     - The following rules are enabled:
	   - villagersAlwaysConvert true, villagers will convert to zombies on any difficulty (I "enabled" it in one of the previous updates, but forgot that the mod wasn't in yet...)
	   - shaveSnowLayers true, you can shave snow layers with a shovel
	   - allChargedCreeperHeadsDrop true, instead of making just 1 random mob drop its head, charged creepers will now make all exploded mobs drop heads
	   - dyeableShearedSheep true, sheared sheep can be dyed just like regular sheep
	   - dyeableShulkers true, shulkers can be dyed and washed with a water bottle
	   - vexesNerf true, vexes will start dying once the invoker that summoned them dies
- Colormatic (was intended to be in since release, but past versions of TerraBlender caused a crash with it)
- Create Deco Fabric
     - Collapsed REI entries
	 - Adjusted some duplicate recipes as to not conflict with other mods
- Create: Extended Flywheels Fabric
     - Collapsed REI entries (the mod id is 'extendedflywheels', as such it won't show up when typing "@create" in REI)
- Handcrafted
     - Collapsed REI entries
- Inventory Essentials
- Keymap
     - I'm intentionally not providing a config for it, so that you can choose your own keyboard layout
- Leaves Be Gone
- Ping Wheel

### Removals: 

- Snow Day (gone from CurseForge)

### Updated: 

<details><summary>Updated all mods.</summary>

- Adorn
- Aurora's Decorations
- BCLib
- Better Combat
- Better Third Person
- Bosses Of Mass Destruction
- Botany Pots
- Botany Trees
- Chalk: Colorful Addon
- Dark Paintings
- Dave's Potioneering
- Do A Barrel Roll
- Dramatic Doors
- Dungeon Difficulty
- Ecologics
- Emotecraft
- Enchanted Vertical Slabs
- Enchantment Descriptions
- Fabrication
- Friends & Foes
- GeckoLib
- Inventory Profiles Next
- Immediately Fast
- KubeJS
- libIPN
- Log Begone
- LootR
- Macaw's Bridges
- Macaw's Fences and Walls
- Macaw's Roofs
- Macaw's Trapdoors
- Macaw's Windows
- Moonlight
- Open Parties and Claims
- Pehkui
- Polymer
- Quilt Kotlin Libraries
- Recipe Book Is Pain
- Roughly Enough Items
- Show Me Your Skin!
- Simple Voice Chat
- Snowy Spirit
- Stendhal
- Supplementaries
- TerraBlender
- Terralith
- Tom's Simple Storage
- Variant Bookshelves
- Variant Crafting Tables
- Where's My Chat History
- Xaero's Maps

- Chests Reimagined

</details>

</details>

<details><summary>Update 3 Changelog (v0.4).</summary>

#### Note: This update brings a big change to enchantments, as such some of them may disappear, make a backup just in case!
#### Some lightning rods might disappear after updating. I removed Oxidizing Lightning Rods, because Friends & Foes already adds them.
#### 1.19.3 is planned, waiting on all mods to update. My goal is to transition without corrupting worlds.

### Changes:

- Azalea chests, barrels, bookshelves and bookcases are now craftable.
- Backpacks will now display corresponding colours to the sleeping bags you used to craft it with.
- Disabled a lot of enchantments from MC Dungeons Armors, Artifacts and Weapons mods (those, that I consider to be too strong, irrelevant or duplicate).
- Made all chest boats craftable with modded chests (no texture changes, though).
- Added recipes for all guide books.
- Collapsed a bunch of REI entries.
- Added Create's toolbox and Wanderer's Catalogue to the IPN ignore list.
- Fixed an issue, where existing players would keep losing the probe note and Patchouli books on login.
- Removed some duplicate recipes (most notorious being basalt bricks).
- Removed stalagnate and mushroom fir benches and seat rests, due to broken textures.
- Removed Blockus' limestone recipes. The generation was already disabled since release to avoid confusion with Create.
- Removed gingerbread vertical slab, due to missing textures.
- Added missing tags to all Colorful Azaleas blocks.
- Shaders will now be on by default.
- Remove duplicate bee stinger from MCDW via its own config, rather than LootJS.
- Set strict priorities for all scripts.
- Updated Quilt Loader to 0.18.1-beta.23 (no user input required, unless you manually swapped out Forge for Quilt in your launcher).
- Changed recommended JVM arguments (now just using MC defaults, but with ShenandoahGC).

### Additions:

- Additional Mushroom Blocks
- Carpeted Stairs
- Create Chunkloading
- Critters and Companions
- Ecologics
     - Everything is disabled, apart from stackable moss
- Enchancement
     - The following existing and Enchancement's enchantments have been removed:
	      - "minecraft:lure" - now bundled with luck of the sea,
	      - "minecraft:loyalty" - all tridents now have loyalty by default,
	      - "minecraft:aqua_affinity",
	      - "minecraft:depth_strider" - both of these now exist as a single new enchantment amphibious,
	      - "betternether:ruby_fire" - replaced by molten, but BetterNether tools can still have it,
	      - "supplementaries:stasis" - I find it to be unfit for the pack,
	      - "enchancement:assimilation",
	      - "enchancement:buffet",
	      - "enchancement:wardenspine",
	      - "enchancement:chaos" - these 4 I find to be unfit for the pack,
	      - "bagofholding:preservation" - not needed, since we have graves,
	      - "farmersdelight:backstabbing" - redundant, due to shadow form.
	 - All tridents have loyalty
	 - Channeling works without thunder
	 - Fire aspect works like flint and steel
	 - Luck of the sea is bundled with lure
	 - Ender pearls don't hurt
	 - Channeling's thunder strike doesn't start fires or breaks blocks
	 - Tridents return from void
	 - The rest of the mod's settings are disabled; 
	 - I'd like to enable other tweaks, but, currently, that would not fit the pack, since we have Goblin Traders and such;
	   - However, truly unbreaking, single enchantment levels and 1 enchantment per item might come later down the line. Possibly when migrating to 1.20.
- Enchantment Descriptions
- Immersive Aircraft
     - Adjusted recipes to fit better into the pack
- Minekea
     - Certain auto-generated Aurora's Decorations blocks were removed due to broken textures
	 - Duplicate recipes removed
	 - Cobbled Endstone disabled
	 - The guide book will not be given on login, but you can craft it
	 - Added #c:buckets/honey tag to the bucket of honey, so it should work alongside Create and Bumblezone
	 - Collapsed REI entries
- Quilt Kotlin Libraries
- Universal Enchants
     - You will be able to apply any enchantment to almost anything; most OP combos disabled

- Ore Variants (should've been in since release, I somehow overlooked it)

### Removals: 

- Fabric Language Kotlin (replaced by QKL; no player facing changes)
- FixMySpawnR
     - Initially included to reduce the lag caused by large amounts of spawners, but massive dungeons sometimes take
	 - longer to complete, than it takes for spawners to run out (my setting was 10 in-game days)
- idwtialsimmoedm (replaced by Enchantment Descriptions, due to Enchancement)
- Oxidizing Lightning Rods (Friends & Foes already adds that feature)
- Tree Harvester (you now have to use a Lumberjack enchantment; no fast leaf decay at the moment, due to Snow Day)

- Dark Mode Everywhere Fix (stopped being a resourcepack, that only fixes missing GUI's and became a full dark GUI pack)

### Updated: 

<details><summary>Updated all mods.</summary>

- Architectury
- Ambient Sounds
- BCLib
- BetterCombat
- BetterEnd
- Blockus
- Bookshelf
- Bosses of Mass Destruction
- Botany Pots
- Carpet TIS Addition
- CraftPresence
- CreativeCore
- Collective
- CombatRoll
- Companion
- Conjuring
- Do A Barrel Roll
- Dungeon Difficulty
- Fabric Language Kotlin
- FerriteCore
- Friends & Foes
- GeckoLib
- Goblin Traders
- Ingredient Extension API
- Inventory Profiles Next
- Immediately Fast
- Immersive Paintings
- Iris
- Joy of Painting
- JumpyBoat
- KubeJS
- libIPN
- Lithium
- Log Begone
- LootR
- Macaw's Paths and Pavings
- Macaw's Windows
- Memory Leak Fix
- Mob Variants
- Mod Menu
- Moog's Voyager Structures
- Moonlight
- Nature's Compass
- Nyf's Spiders
- Open Parties and Claims
- owo
- Placeable Plants
- Polymer
- Polymorph
- QSL
- Random Bonemeal Flowers
- Reese's Sodium Options
- Recursive Resources
- Repurposed Structures
- Roughly Enough Items
- Projectile Damage Attribute
- Simple Voice Chat
- Snowy Spirit
- Sodium Extra
- Stendhal
- Straw Statues
- Supplementaries
- The Bumblezone
- Tom's Simple Storage
- Traveler's Backpack
- Variant Lanterns
- Xaero's Maps
- XP Obelisk
- XP Obelisk Additions

</details>

</details>

<details><summary>Update 2 Hotfix Changelog (v0.31).</summary>

<h1 align="center"> Perfectly Splendid Update 2 Hotfix <br>

#### Note: In order to fix a critical crash, Llamarama has been removed. 
#### This won't break anything, but if you had any modded Llamas, they will dissapear.
#### I'm sorry for that, it's my fault for not catching a critical crash, caused by a Llamarama + Naturalist combo earlier.

### Changes:

- Adjusted The Graveyard config to its Perfectly Splendid values. It got overriden by default values in the Update 2 and I didn't notice, sorry!
- Changed Tree Harvester mod not to automatically replant anything.
- Changed the Carrier keybind to Shift (if you use the modpack supplied config where Shift = sprint), as to not confict with Better Signs and Universal Graves.
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

</details>

<details><summary>Update 2 Changelog (v0.3).</summary>

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

<details><summary>Update 1 Changelog (v0.2).</summary>

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

## Current version of Perfectly Splendid: v0.9