// priority: 9

REIEvents.groupEntries((event) => {

	// Group Mineakea blocks together by type

	event.groupItems("minekea:rei_groups/minekea_beams", "Minekea Beams", [
		/^minekea:building\/beams\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_dyed_blocks", "Minekea Dyed Blocks", [
		/^minekea:building\/dyed\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_compressed_blocks", "Minekea Compressed Blocks", [
		/^minekea:building\/compressed\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_covers", "Minekea Covers", [
		/^minekea:building\/covers\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_stairs", "Minekea Stairs", [
		/^minekea:building\/stairs\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_slabs", "Minekea Slabs", [
		/^minekea:building\/slabs\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_vertical_stairs", "Minekea Vertical Stairs", [
		/^minekea:building\/stiairs\/vertical\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_walls", "Minekea Walls", [
		/^minekea:building\/walls\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_storage", "Minekea Storage Blocks", [
		/^minekea:storage\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_contaiers", "Minekea Containers", [
		/^minekea:containers\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_deco", "Minekea Decorations", [
		/^minekea:decorations\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_bookshelves", "Minekea Bookshelves", [
		/^minekea:furniture\/bookshelves\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_displays", "Minekea Displays", [
		/^minekea:furniture\/display_cases\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_doors", "Minekea Doors", [
		/^minekea:furniture\/doors\/.*$/,
		/^minekea:furniture\/trapdoors\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_furniture", "Minekea Furniture", [
		/^minekea:furniture\/seating\/.*$/,
		/^minekea:furniture\/shelves\/.*$/,
		/^minekea:furniture\/pillows\/.*$/,
		/^minekea:furniture\/tables\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_redstone", "Minekea Redstone Blocks", [
		/^minekea:redstone\/.*$/
	]);
	
	event.groupItems("minekea:rei_groups/minekea_tools", "Minekea Tools", [
		/^minekea:tools\/.*$/
	]);
	
	// Group spawn eggs together
	
	event.groupItems("perfectly_splendid:rei_groups/spawn_eggs", "Spawn Eggs", [
		/^.*spawn_egg.*$/,
		/^supplementaries:red_merchant_spawn_egg$/
	]);
	
	// Group Macaw's mods' blocks together by mod
	
	event.groupItems("mcwroofs:rei_groups/macaws_roofs", "Macaw's Roofs", [
		/^mcwroofs:.*$/
	]);
	
	event.groupItems("mcwlights:rei_groups/macaws_lights", "Macaw's Lights and Lamps", [
		/^mcwlights:.*$/
	]);
	
	event.groupItems("mcwdoors:rei_groups/macaws_doors", "Macaw's Doors", [
		/^mcwdoors:.*$/
	]);
	
	event.groupItems("mcwbridges:rei_groups/macaws_bridges", "Macaw's Bridges", [
		/^mcwbridges:.*$/
	]);
	
	event.groupItems("mcwwindows:rei_groups/macaws_windows", "Macaw's Windows", [
		/^mcwwindows:.*$/
	]);
	
	event.groupItems("mcwtrapdoors:rei_groups/macaws_trapdoors", "Macaw's Trapdoors", [
		/^mcwtrapdoors:.*$/
	]);
	
	event.groupItems("mcwpaths:rei_groups/macaws_paths", "Macaw's Paths and Pavings", [
		/^mcwpaths:.*$/
	]);
	
	event.groupItems("mcwfences:rei_groups/macaws_fences", "Macaw's Fences and Walls", [
		/^mcwfences:.*$/
	]);
	
	// Group Dramatic Doors, Exline Doors, Chalk, Simple Copper Pipes, MultiBeds mods' blocks together by mod
	
	event.groupItems("dramaticdoors:rei_groups/dramatic_doors", "Dramatic Doors", [
		/^dramaticdoors:.*$/
	]);
	
	event.groupItems("exlinedoors:rei_groups/exline_doors", "Exline Doors", [
		/^exlinedoors:.*$/
	]);
	
	event.groupItems("chalk:rei_groups/chalk", "Chalk", [
		/^chalk:.*$/
	]);
	
	event.groupItems("lunade:rei_groups/pipes", "Simple Copper Pipes", [
		/^lunade:.*$/
	]);
	
	event.groupItems("multibeds:rei_groups/multibeds", "Multibeds", [
		/^multibeds:.*$/
	]);
	
	// Group Aurora's Decorations blocks by type
	
	event.groupItems("aurorasdeco:rei_groups/ad_seat_rests", "Aurora's Decorations Seat Rests", [
		/^aurorasdeco:seat_rest\/.*$/
	]);
	
	event.groupItems("aurorasdeco:rei_groups/ad_signs", "Aurora's Decorations Signs", [
		/^aurorasdeco:sign_post\/.*$/
	]);
	
	// Group some Supplementaries and Aurora's Decorations blocks by type
	
	event.groupItemsByTag("supplementaries:rei_groups/hanging_signs", "Supplementaries Hanging Signs", "supplementaries:hanging_signs");
	event.groupItemsByTag("supplementaries:rei_groups/sign_posts", "Supplementaries Sign Posts", "supplementaries:sign_posts");
	event.groupItemsByTag("supplementaries:rei_groups/flags", "Supplementaries Flags", "supplementaries:flags");
	event.groupItemsByTag("supplementaries:rei_groups/presents", "Supplementaries Presents", "supplementaries:presents");
	event.groupItemsByTag("supplementaries:rei_groups/candle_holders", "Supplementaries Candle Holders", "supplementaries:candle_holders");
	event.groupItemsByTag("aurorasdeco:rei_groups/stumps", "Aurora's Decorations Stumps", "aurorasdeco:stumps");
	event.groupItemsByTag("aurorasdeco:rei_groups/small_log_piles", "Aurora's Decorations Small Log Piles", "aurorasdeco:small_log_piles");
	event.groupItemsByTag("aurorasdeco:rei_groups/benches", "Aurora's Decorations Benches", "aurorasdeco:benches");
	
	// Group potions, arrows and enchanted books
	
	event.groupItems("extraalchemy:rei_groups/breakable_potions", "Breakable Potions", [
		/^extraalchemy:.*breakable_potion.*$/
	]);
	
	const useNbt = ["potion", "enchanted_book", "splash_potion", "tipped_arrow", "lingering_potion"];

	useNbt.forEach((id) => {
	const item = Item.of(id);
	const { namespace, path } = Utils.id(item.id);
	event.groupSameItem(`perfectly_splendid:rei_groups/${namespace}/${path}`, item.getHoverName(), item);
	});
	
	// Group botany pots together
	
	event.groupItems("botanypots:rei_groups/botany_pots", "Botany Pots", [
		/^botanypots:.*$/
	]);
	
	// Group carpets together
	
	event.groupItems("perfectly_splendid:rei_groups/carpets", "Carpets", [
		/^((?!pandamc_concreteplus)(?!.*_glass_.*).).*_carpet$/
	]);
	
	// Group glass by mod and type; don't include Create glass
	
	event.groupItems("perfectly_splendid:rei_groups/glass_panes", "Glass Panes", [
		/^((?!create).)*glass_pane.*$/,
		/^horizontal-glass-panes:pane_((?!iron).)*$/
	]);
	
	event.groupItems("perfectly_splendid:rei_groups/glass_blocks", "Glass Blocks", [
		/^minecraft:glass$/,
		/^minecraft:.*_glass.*$/,
		/^betternether:.*_glass.*$/,
		/^mo_glass:.*_glass.*$/,
		/^mo_glass:glass_.*$/,
		/^blockus:.*_glass.*$/,
		/^morecarpets:.*_glass_.*$/,
		/^morecarpets:glass_carpet$/,
		/^awesomeflooring:.*_glass_.*$/,
		/^connectedblocks:.*_glass((?!_pane).)*$/
	]);
	
	// Group concrete blocks together
	
	event.groupItems("perfectly_splendid:rei_groups/concrete_blocks", "Concrete Blocks", [
		/^((?!botanypots)(?!mcwroofs)(?!minekea).).*concrete.*$/
	]);
	
	// Group terracotta blocks together
	
	event.groupItems("perfectly_splendid:rei_groups/terracotta_blocks", "Terracotta Blocks", [
		/^((?!botanypots)(?!mcwroofs)(?!minekea)(?!handcrafted).).*terracotta.*$/
	]);
	
	// Group Snowy Spirit glow lights, gumdrops and sleds together by tag
	
	event.groupItemsByTag("snowyspirit:rei_groups/glow_lights", "Snowy Spirit Glow Lights", "snowyspirit:glow_lights");
	event.groupItemsByTag("snowyspirit:rei_groups/sleds", "Snowy Spirit Sleds", "snowyspirit:sleds");
	event.groupItemsByTag("snowyspirit:rei_groups/gumdrops", "Snowy Spirit Gumdrops", "snowyspirit:gumdrops");
	
	// Group crafting benches together by tag
	
	event.groupItemsByTag("perfectly_splendid:rei_groups/crafting_benches", "Crafting Benches", "c:workbench");
	
	// Group grindstones together
	
	event.groupItems("perfectly_splendid:rei_groups/grindstones", "Grindstones", [
		/^.*grindstone.*$/
	]);
	
	// Group composters together
	
	event.groupItems("perfectly_splendid:rei_groups/composters", "Composters", [
		/^.*composter.*$/
	]);
	
	// Group sleeping bags together
	
	event.groupItems("perfectly_splendid:rei_groups/sleeping_bags", "Sleeping Bags and Hammocks", [
		/^.*sleeping_bag.*$/,
		/^comforts:.*$/
	]);
	
	// Group Enchanted Vertical Slabs together
	
	event.groupItems("enchanted-vertical-slabs:rei_groups/vertical_slabs", "Enchanted Vertical Slabs", [
		/^enchanted-vertical-slabs:.*$/,
		/^evs-betterend:.*$/
	]);
	
	// Group buttons together
	
	event.groupItems("perfectly_splendid:rei_groups/buttons", "Buttons", [
		/^.*button.*$/
	]);
	
	// Group pressure plates together
	
	event.groupItems("perfectly_splendid:rei_groups/pressure_plates", "Pressure Plates", [
		/^.*pressure_plate.*$/
	]);
	
	// Group Create blocks by type
	
	event.groupItems("create:rei_groups/create_decorative", "Create Decorative Blocks", [
		/^create:.*cuckoo.*$/,
		/^create:.*cuckoo$/,
		/^create:cuckoo.*$/,
		/^create:.*_cuckoo$/,
		/^create:.*_cuckoo_.*$/,
		/^create:.*bracket.*$/,
		/^create:.*girder.*$/,
		/^create:.*ladder.*$/,
		/^create:.*whistle.*$/,
		/^create:.*seat.*$/,
		/^create:.*casing.*$/,
		/^create:.*door.*$/,
		/^create:.*trapdoor.*$/,
		/^create:.*placard.*$/,
		/^create:.*display.*$/,
		/^create:.*nixie.*$/,
		/^create:.*bell.*$/,
		/^create:.*glass.*$/,
		/^create:.*window.*$/,
		/^create:.*turntable.*$/,
		/^create:.*.flywheel.*$/,
		/^extendedflywheels:.*$/,
		/^create:mysterious_cuckoo_clock$/,
		/^createdeco:.*.door.*$/,
		/^createdeco:.*.bars.*$/,
		/^createdeco:.*.mesh.*$/,
		/^createdeco:.*.catwalk.*$/
	]);
	
	event.groupItems("create:rei_groups/create_gear", "Create Gear", [
		/^create:.*backtank.*$/,
		/^create:.*toolbox.*$/,
		/^create:.*goggles.*$/,
		/^create:.*glue.*$/,
		/^create:.*coupling.*$/,
		/^create:.*potato_cannon.*$/,
		/^create:.*wrench.*$/,
		/^create:.*extendo_grip.*$/,
		/^create:.*wand.*$/,
		/^create:.*fertilizer.*$/,
		/^create:.*diving.*$/,
		/^create:.*crank.*$/,
		/^create:.*linked_controller.*$/
	]);
	
	event.groupItems("create:rei_groups/create_generators", "Create Power Generators", [
		/^create:.*water_wheel.*$/,
		/^create:.*steam_engine.*$/,
		/^create:.*sail.*$/
	]);
	
	event.groupItems("create:rei_groups/create_cogs", "Create Cogs and Shafts", [
		/^create:.*shaft.*$/,
		/^create:shaft.*$/,
		/^create:.*shaft$/,
		/^create:.*_shaft$/,
		/^create:.*cogwheel.*$/,
		/^create:cogwheel.*$/,
		/^create:.*cogwheel$/,
		/^create:.*_cogwheel$/,
		/^create:.*gearbox.*$/,
		/^create:gearbox.*$/,
		/^create:.*gearbox$/,
		/^create:.*gearshift.*$/,
		/^create:gearshift.*$/,
		/^create:.*gearshift$/,
		/^create:.*gantry.*$/,
		/^create:.*speed_controller.*$/,
		/^create:.*belt.*$/,
		/^create:.*clutch.*$/,
		/^create:andesite_encased_shaft$/,
		/^create:brass_encased_shaft$/,
		/^create:andesite_encased_cogwheel$/,
		/^create:brass_encased_cogwheel$/,
		/^create:andesite_encased_large_cogwheel$/,
		/^create:brass_encased_large_cogwheel$/
	]);
	
	event.groupItems("create:rei_groups/create_schematics", "Create Schematics and Blueprints", [
		/^create:.*schematicannon.*$/,
		/^create:.*schematic.*$/,
		/^create:.*blueprint.*$/
	]);
	
	event.groupItems("create:rei_groups/create_machines", "Create Machines", [
		/^create:.*millstone.*$/,
		/^create:.*crushing.*$/,
		/^create:.*mechanical.*$/,
		/^create:.*burner.*$/,
		/^create:.*basin.*$/,
		/^create:.*depot.*$/,
		/^create:.*ejector.*$/,
		/^create:.*spout.*$/,
		/^create:.*pulley.*$/,
		/^create:.*drain.*$/,
		/^create:.*deployer.*$/,
		/^create:.*interface.*$/,
		/^create:.*nozzle.*$/,
		/^create:.*fan.*$/,
		/^create:.*meter.*$/
	]);
	
	event.groupItems("create:rei_groups/create_redstone", "Create Redstone", [
		/^create:.*controller_rail.*$/,
		/^create:.*pulse.*$/,
		/^create:.*latch.*$/,
		/^create:.*lever.*$/,
		/^create:.*.lamp.*$/,
		/^create:.*piston.*$/,
		/^create:.*cart_assembler.*$/,
		/^create:.*redstone.*$/,
		/^create:((?!track).)*observer.*$/,
		/^create:.*switch.*$/
	]);
	
	event.groupItems("create:rei_groups/create_chassis", "Create Chassis", [
		/^create:.*chassis.*$/,
		/^create:.*sticker.*$/,
		/^create:.*bearing.*$/,
		/^create:.*chain.*$/
	]);
	
	event.groupItems("create:rei_groups/create_trains", "Create Trains", [
		/^create:.*track.*$/,
		/^create:.*schedule.*$/,
		/^create:.*controls.*$/
	]);
	
	event.groupItems("create:rei_groups/create_item_transport", "Create Item Transport", [
		/^create:.*chute.*$/,
		/^create:.*belt.*$/,
		/^create:.*funnel.*$/,
		/^create:.*tunnel.*$/
	]);
	
	event.groupItems("create:rei_groups/create_pipes", "Create Pipes", [
		/^create:.*pipe.*$/,
		/^create:.*valve.*$/
	]);
	
	event.groupItems("create:rei_groups/create_storage", "Create Storage", [
		/^create:((?!.*back.*).)*tank.*$/,
		/^create:.*vault.*$/
	]);
	
	event.groupItems("create:rei_groups/create_ores", "Create Ores", [
		/^create:.*ore.*$/,
		/^create:.*ingot.*$/,
		/^create:.*sheet.*$/,
		/^create:((?!.*experience.*).)*nugget.*$/,
		/^create:.*alloy.*$/,
		/^create:.*zinc.*$/,
		/^create:((?!ladder)(?!casing)(?!funnel)(?!tunnel).).*brass.*$/,
		/^create:brass_block$/,
		/^create:((?!.*lamp.*).)*quartz.*$/,
		/^create:andesite_alloy$/,
		/^createdeco:.*.sheet((?!.*.stairs)(?!.*.slab)(?!.*.metal).)*$/,
		/^createdeco:.*.nugget.*$/,
		/^createdeco:.*.ingot.*$/
	]);
	
	event.groupItems("create:rei_groups/create_copper", "Create Copper Blocks", [
		/^create:((?!ladder)(?!valve)(?!casing)(?!backtank)(?!nugget)(?!sheet)(?!ore).).*copper((?!ladder)(?!valve)(?!casing)(?!backtank)(?!nugget)(?!sheet)(?!ore).)*$/,
		/^create:copper_shingles$/,
		/^create:copper_shingle_.*$/,
		/^create:copper_tiles$/,
		/^create:copper_tile_.*$/
	]);
	
	event.groupItems("create:rei_groups/create_granite", "Create Granite Blocks", [
		/^create:.*granite.*$/,
		/^create:granite.*$/,
		/^create:.*granite$/
	]);
	
	event.groupItems("create:rei_groups/create_diorite", "Create Diorite Blocks", [
		/^create:.*diorite.*$/,
		/^create:diorite.*$/,
		/^create:.*diorite$/
	]);
	
	event.groupItems("create:rei_groups/create_andesite", "Create Andesite Blocks", [
		/^create:((?!encased)(?!ladder)(?!casing)(?!funnel)(?!tunnel)(?!alloy).).*andesite((?!encased)(?!ladder)(?!casing)(?!funnel)(?!tunnel)(?!alloy).)*$/,
		/^create:andesite_pillar$/
	]);
	
	event.groupItems("create:rei_groups/create_calcite", "Create Calcite Blocks", [
		/^create:.*calcite.*$/,
		/^create:calcite.*$/,
		/^create:.*calcite$/
	]);
	
	event.groupItems("create:rei_groups/create_deepslate", "Create Deepslate Blocks", [
		/^create:.*deepslate_((?!.*zinc.*).)*$/,
		/^create:deepslate((?!.*zinc.*).)*$/,
		/^create:.*deepslate$/
	]);
	
	event.groupItems("create:rei_groups/create_tuff", "Create Tuff Blocks", [
		/^create:.*tuff.*$/,
		/^create:tuff.*$/,
		/^create:.*tuff$/
	]);
	
	event.groupItems("create:rei_groups/create_asurine", "Create Asurine Blocks", [
		/^create:.*asurine.*$/,
		/^create:asurine.*$/,
		/^create:.*asurine$/
	]);
	
	event.groupItems("create:rei_groups/create_crimsite", "Create Crimsite Blocks", [
		/^create:.*crimsite.*$/,
		/^create:crimsite.*$/,
		/^create:.*crimsite$/
	]);
	
	event.groupItems("create:rei_groups/create_limestone", "Create Limestone Blocks", [
		/^create:.*limestone.*$/,
		/^create:limestone.*$/,
		/^create:.*limestone$/
	]);
	
	event.groupItems("create:rei_groups/create_ochrum", "Create Ochrum Blocks", [
		/^create:.*ochrum.*$/,
		/^create:ochrum.*$/,
		/^create:.*ochrum$/
	]);
	
	event.groupItems("create:rei_groups/create_scoria", "Create Scoria Blocks", [
		/^create:.*scoria.*$/,
		/^create:scoria.*$/,
		/^create:.*scoria$/
	]);
	
	event.groupItems("create:rei_groups/create_scorchia", "Create Scorchia Blocks", [
		/^create:.*scorchia.*$/,
		/^create:scorchia.*$/,
		/^create:.*scorchia$/
	]);
	
	event.groupItems("create:rei_groups/create_veridium", "Create Veridium Blocks", [
		/^create:.*veridium.*$/,
		/^create:veridium.*$/,
		/^create:.*veridium$/
	]);
	
	event.groupItems("create:rei_groups/create_dripstone", "Create Dripstone Blocks", [
		/^create:.*dripstone.*$/,
		/^create:dripstone.*$/,
		/^create:.*dripstone$/
	]);
	
	// Group Create Deco blocks by type
	
	event.groupItems("createdeco:rei_groups/createdeco_worn_bricks", "Create Deco Worn Bricks", [
		/^createdeco:((?!mossy).)*.worn.*$/,
		/^createdeco:worn.*$/,
		/^createdeco:((?!mossy).)*.cracked_worn.*$/,
		/^createdeco:cracked_worn.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_mossy_worn_bricks", "Create Deco Mossy Worn Bricks", [
		/^createdeco:.*.mossy_worn.*$/,
		/^createdeco:mossy_worn.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_red_brick_tiles", "Create Deco Red Brick Tiles", [
		/^createdeco:((?!mossy).)*.red_brick_tiles.*$/,
		/^createdeco:((?!mossy).)*.red_bricks.*$/,
		/^createdeco:((?!mossy).)*.red_brick.*$/,
		/^createdeco:((?!mossy).)*.red_long.*$/,
		/^createdeco:((?!mossy).)*.red_short.*$/,
		/^createdeco:((?!mossy).)*.cracked_red.*$/,
		/^createdeco:red_brick_tiles.*$/,
		/^createdeco:red_bricks.*$/,
		/^createdeco:red_brick.*$/,
		/^createdeco:red_long.*$/,
		/^createdeco:red_short.*$/,
		/^createdeco:cracked_red.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_mossy_red_brick_tiles", "Create Deco Mossy Red Brick Tiles", [
		/^createdeco:.*.mossy_red_bricks.*$/,
		/^createdeco:.*.mossy_red_brick.*$/,
		/^createdeco:mossy_red.*$/,
		/^createdeco:mossy_red.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_blue_bricks", "Create Deco Blue Bricks", [
		/^createdeco:((?!mossy).)*.blue_bricks.*$/,
		/^createdeco:((?!mossy).)*.blue_brick.*$/,
		/^createdeco:((?!mossy).)*.blue_long.*$/,
		/^createdeco:((?!mossy).)*.blue_short.*$/,
		/^createdeco:((?!mossy).)*.cracked_blue.*$/,
		/^createdeco:blue_bricks.*$/,
		/^createdeco:blue_brick.*$/,
		/^createdeco:blue_long.*$/,
		/^createdeco:blue_short.*$/,
		/^createdeco:cracked_blue.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_mossy_blue_bricks", "Create Deco Mossy Blue Bricks", [
		/^createdeco:.*.mossy_blue_bricks.*$/,
		/^createdeco:.*.mossy_blue_brick.*$/,
		/^createdeco:mossy_blue.*$/,
		/^createdeco:mossy_blue.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_scarlet_bricks", "Create Deco Scarlet Bricks", [
		/^createdeco:((?!mossy).)*.scarlet.*$/,
		/^createdeco:((?!mossy).)*.cracked_scarlet.*$/,
		/^createdeco:scarlet.*$/,
		/^createdeco:cracked_scarlet.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_mossy_scarlet_bricks", "Create Deco Mossy Scarlet Bricks", [
		/^createdeco:.*.mossy_scarlet.*$/,
		/^createdeco:mossy_scarlet.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_pearl_bricks", "Create Deco Pearl Bricks", [
		/^createdeco:((?!mossy).)*.pearl.*$/,
		/^createdeco:((?!mossy).)*.cracked_pearl.*$/,
		/^createdeco:pearl.*$/,
		/^createdeco:cracked_pearl.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_mossy_pearl_bricks", "Create Deco Mossy Pearl Bricks", [
		/^createdeco:.*.mossy_pearl.*$/,
		/^createdeco:mossy_pearl.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_dean_bricks", "Create Deco Dean Bricks", [
		/^createdeco:((?!mossy).)*.dean.*$/,
		/^createdeco:((?!mossy).)*.cracked_dean.*$/,
		/^createdeco:dean.*$/,
		/^createdeco:cracked_dean.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_mossy_dean_bricks", "Create Deco Mossy Dean Bricks", [
		/^createdeco:.*.mossy_dean.*$/,
		/^createdeco:mossy_dean.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_dusk_bricks", "Create Deco Dusk Bricks", [
		/^createdeco:((?!mossy).)*.dusk.*$/,
		/^createdeco:((?!mossy).)*.cracked_dusk.*$/,
		/^createdeco:dusk.*$/,
		/^createdeco:cracked_dusk.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_mossy_dusk_bricks", "Create Deco Mossy Dusk Bricks", [
		/^createdeco:.*.mossy_dusk.*$/,
		/^createdeco:mossy_dusk.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_lamps", "Create Deco Lamps", [
		/^createdeco:.*.lamp.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_decals", "Create Deco Decals", [
		/^createdeco:.*.decal.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_coins", "Create Deco Coins", [
		/^createdeco:.*.coin.*$/,
		/^createdeco:.*.coinstack.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_gold", "Create Deco Gold Blocks", [
		/^createdeco:gold_sheet.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_netherite", "Create Deco Netherite Blocks", [
		/^createdeco:netherite_sheet_metal$/,
		/^createdeco:netherite_sheet_stairs$/,
		/^createdeco:netherite_sheet_slab$/,
		/^createdeco:netherite_sheet_slab_vert$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_andesite", "Create Deco Andesite Blocks", [
		/^createdeco:andesite_sheet.*$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_brass", "Create Deco Brass Blocks", [
		/^createdeco:brass_sheet_metal$/,
		/^createdeco:brass_sheet_stairs$/,
		/^createdeco:brass_sheet_slab$/,
		/^createdeco:brass_sheet_slab_vert$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_cast_iron", "Create Deco Cast Iron Blocks", [
		/^createdeco:cast_iron_sheet_metal$/,
		/^createdeco:cast_iron_block$/,
		/^createdeco:cast_iron_sheet_stairs$/,
		/^createdeco:cast_iron_sheet_slab$/,
		/^createdeco:cast_iron_sheet_slab_vert$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_iron", "Create Deco Iron Blocks", [
		/^createdeco:iron_sheet_metal$/,
		/^createdeco:iron_sheet_stairs$/,
		/^createdeco:iron_sheet_slab$/,
		/^createdeco:iron_sheet_slab_vert$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_copper", "Create Deco Copper Blocks", [
		/^createdeco:copper_sheet_metal$/,
		/^createdeco:copper_sheet_stairs$/,
		/^createdeco:copper_sheet_slab$/,
		/^createdeco:copper_sheet_slab_vert$/
	]);
	
	event.groupItems("createdeco:rei_groups/createdeco_zinc", "Create Deco Zinc Blocks", [
		/^createdeco:zinc_sheet_metal$/,
		/^createdeco:zinc_sheet_stairs$/,
		/^createdeco:zinc_sheet_slab$/,
		/^createdeco:zinc_sheet_slab_vert$/
	]);
	
	// Group Handcrafted items together by tag
	
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_cushions", "Handcrafted Cushions", "handcrafted:cushions");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_sheets", "Handcrafted Sheets", "handcrafted:sheets");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_boards", "Handcrafted Boards", "handcrafted:boards");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_chairs", "Handcrafted Chairs", "handcrafted:chairs");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_couches", "Handcrafted Couches", "handcrafted:couches");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_beds", "Handcrafted Beds", "handcrafted:fancy_beds");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_benches", "Handcrafted Benches", "handcrafted:dining_benches");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_benches", "Handcrafted Benches", "handcrafted:wooden_benches");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_benches", "Handcrafted Benches", "handcrafted:benches");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_tables", "Handcrafted Tables", "handcrafted:tables");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_desks", "Handcrafted Desks", "handcrafted:desks");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_nightstands", "Handcrafted Nightstands", "handcrafted:nightstands");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_side_tables", "Handcrafted Side Tables", "handcrafted:side_tables");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_counters", "Handcrafted Counters", "handcrafted:counters");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_drawers", "Handcrafted Drawers", "handcrafted:drawers");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_cupboards", "Handcrafted Cupboards", "handcrafted:cupboards");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_shelves", "Handcrafted Shelves", "handcrafted:shelves");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_trims", "Handcrafted Trims", "handcrafted:trims");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_crockery", "Handcrafted Dishes", "handcrafted:crockery");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_pots", "Handcrafted Pots", "handcrafted:pots");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_trophies", "Handcrafted Trophies", "handcrafted:trophies");
	event.groupItemsByTag("handcrafted:rei_groups/handcrafted_trophies", "Handcrafted Trophies", "handcrafted:statues");
});