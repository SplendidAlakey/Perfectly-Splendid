// priority: 4

// Adds both item and block tags to items/blocks for better intermod compatibility

ServerEvents.tags('item', event => {
	
	// Get the #c:wooden_chests tag collection and add BN chests to it
		event.add('c:wooden_chests', 'betternether:crimson_chest');
		event.add('c:wooden_chests', 'betternether:warped_chest');
		
	// Get the #c:chest tag collection and add Charm, vanilla trapped chests to it
		event.add('c:chest', 'charm:acacia_chest');
		event.add('c:chest', 'charm:birch_chest');
		event.add('c:chest', 'charm:crimson_chest');
		event.add('c:chest', 'charm:dark_oak_chest');
		event.add('c:chest', 'charm:jungle_chest');
		event.add('c:chest', 'charm:mangrove_chest');
		event.add('c:chest', 'charm:oak_chest');
		event.add('c:chest', 'charm:spruce_chest');
		event.add('c:chest', 'charm:warped_chest');
		event.add('c:chest', 'charm:ebony_chest');
		event.add('c:chest', 'charm:acacia_trapped_chest');
		event.add('c:chest', 'charm:birch_trapped_chest');
		event.add('c:chest', 'charm:crimson_trapped_chest');
		event.add('c:chest', 'charm:dark_oak_trapped_chest');
		event.add('c:chest', 'charm:jungle_trapped_chest');
		event.add('c:chest', 'charm:mangrove_trapped_chest');
		event.add('c:chest', 'charm:oak_trapped_chest');
		event.add('c:chest', 'charm:spruce_trapped_chest');
		event.add('c:chest', 'charm:warped_trapped_chest');
		event.add('c:chest', 'charm:ebony_trapped_chest');
		event.add('c:chest', 'minecraft:trapped_chest');
		
	// Get the #c:ender_chests tag collection and add vanilla ender chests to it
		event.add('c:ender_chests', 'minecraft:ender_chest')
		
	// Get the #c:barrel tag collection and add BN, Blockus barrels to it
		event.add('c:barrel', 'betternether:crimson_barrel');
		event.add('c:barrel', 'betternether:warped_barrel');
		event.add('c:barrel', 'blockus:oak_barrel');
		event.add('c:barrel', 'blockus:birch_barrel');
		event.add('c:barrel', 'blockus:jungle_barrel');
		event.add('c:barrel', 'blockus:acacia_barrel');
		event.add('c:barrel', 'blockus:dark_oak_barrel');
		event.add('c:barrel', 'blockus:oak_barrel');
		event.add('c:barrel', 'blockus:crimson_barrel');
		event.add('c:barrel', 'blockus:warped_barrel');
		event.add('c:barrel', 'blockus:white_oak_barrel');
		event.add('c:barrel', 'blockus:bamboo_barrel');
		event.add('c:barrel', 'blockus:charred_barrel');
		
	// Get the #c:wooden_barrels tag collection and add BN, Blockus barrels to it
		event.add('c:wooden_barrels', 'betternether:crimson_barrel');
		event.add('c:wooden_barrels', 'betternether:warped_barrel');
		event.add('c:wooden_barrels', 'blockus:oak_barrel');
		event.add('c:wooden_barrels', 'blockus:birch_barrel');
		event.add('c:wooden_barrels', 'blockus:jungle_barrel');
		event.add('c:wooden_barrels', 'blockus:acacia_barrel');
		event.add('c:wooden_barrels', 'blockus:dark_oak_barrel');
		event.add('c:wooden_barrels', 'blockus:oak_barrel');
		event.add('c:wooden_barrels', 'blockus:crimson_barrel');
		event.add('c:wooden_barrels', 'blockus:warped_barrel');
		event.add('c:wooden_barrels', 'blockus:white_oak_barrel');
		event.add('c:wooden_barrels', 'blockus:bamboo_barrel');
		event.add('c:wooden_barrels', 'blockus:charred_barrel');
		
	// Create #c:horns tag collection and add all horns to it
		event.add('c:horns', 'minecraft:goat_horn');
		event.add('c:copper_horns', 'copper-horns:copper_horn');
		
	// Get the #minecraft:stone_crafting_materials tag collection and remove sturdy stone from it
		event.remove('minecraft:stone_crafting_materials', 'aurorasdeco:sturdy_stone');
		
	// Then add a #c:cobblestone tag to it
		event.add('c:cobblestone', 'aurorasdeco:sturdy_stone');
		
	// Get the #c:chains tag collection and add modded chains to it
		event.add('c:chains', 'blockus:golden_chain');
		event.add('c:chains', 'betternether:cincinnasite_chain');
		event.add('c:chains', 'betterend:thallasium_chain');
		event.add('c:chains', 'betterend:terminite_chain');
		event.add('c:chains', 'architects_palette:nether_brass_chain');
		
	// Get the #c:buckets/honey tag collection and add Minekea honey to it
		event.add('c:buckets/honey', 'minekea:containers/honey_bucket');
		
	// Get the #supplementaries:presents tag collection and add missing presents to it
		event.add('supplementaries:presents', /^supplementaries:.*present.*$/);
		
	// Get the #minecraft:leaves tag collection and add missing BetterEnd leaves to it
		event.add('minecraft:leaves', /^betterend:helix_tree_leaves$/);
		
	// Get the #minecraft:leaves tag collection and add missing Charm leaves to it
		event.add('minecraft:leaves', /^charm:ebony_leaves$/);
		
	// Get the #supplementaries:flower_box_plantable and #another_furniture:planter_box_placeables tags collection and add Colorful Azaleas leaves to it
		event.add('another_furniture:planter_box_placeables', /^colorful-azaleas:.*_leaves$/);
		event.add('supplementaries:flower_box_plantable', /^colorful-azaleas:.*_blooming_.*$/);
		event.add('supplementaries:flower_box_plantable', /^colorful-azaleas:.*_flowering_.*$/);
		
	// Get the #another_furniture:planter_box_placeables tags collection and add missing BetterEnd leaves to it
		event.add('another_furniture:planter_box_placeables', /^betterend:helix_tree_leaves$/);
		
	// Get the #minecraft:leaves, #minecraft:completes_find_tree_tutorial and #another_furniture:planter_box_placeables tags collection and add missing Charm leaves to it
		event.add('minecraft:leaves', /^charm:ebony_leaves$/);
		event.add('minecraft:completes_find_tree_tutorial', /^charm:ebony_leaves$/);
		event.add('another_furniture:planter_box_placeables', /^charm:ebony_leaves$/);
		
	// Remove the #minecraft:boats tag from the fake dry bamboo raft, just in case
		event.removeAll('bambooeverything:dry_bamboo_raft');

	// Get the #c:ores tag and add missing ores to it
		event.add('c:ores', "expandeddelight:salt_ore");
		event.add('c:ores', "expandeddelight:deepslate_salt_ore");
		
});

ServerEvents.tags('block', event => {
	// Get the #c:wooden_chests tag collection and add BN chests to it
		event.add('c:wooden_chests', 'betternether:crimson_chest');
		event.add('c:wooden_chests', 'betternether:warped_chest');
		
	// Get the #c:chest tag collection and add Charm, vanilla trapped chests to it
		event.add('c:chest', 'charm:acacia_chest');
		event.add('c:chest', 'charm:birch_chest');
		event.add('c:chest', 'charm:crimson_chest');
		event.add('c:chest', 'charm:dark_oak_chest');
		event.add('c:chest', 'charm:jungle_chest');
		event.add('c:chest', 'charm:mangrove_chest');
		event.add('c:chest', 'charm:oak_chest');
		event.add('c:chest', 'charm:spruce_chest');
		event.add('c:chest', 'charm:warped_chest');
		event.add('c:chest', 'charm:ebony_chest');
		event.add('c:chest', 'charm:acacia_trapped_chest');
		event.add('c:chest', 'charm:birch_trapped_chest');
		event.add('c:chest', 'charm:crimson_trapped_chest');
		event.add('c:chest', 'charm:dark_oak_trapped_chest');
		event.add('c:chest', 'charm:jungle_trapped_chest');
		event.add('c:chest', 'charm:mangrove_trapped_chest');
		event.add('c:chest', 'charm:oak_trapped_chest');
		event.add('c:chest', 'charm:spruce_trapped_chest');
		event.add('c:chest', 'charm:warped_trapped_chest');
		event.add('c:chest', 'charm:ebony_trapped_chest');
		event.add('c:chest', 'minecraft:trapped_chest');
		
	// Get the #c:ender_chests tag collection and add vanilla ender chests to it
		event.add('c:ender_chests', 'minecraft:ender_chest')
		
	// Get the #c:barrel tag collection and add BN, Blockus barrels to it
		event.add('c:barrel', 'betternether:crimson_barrel');
		event.add('c:barrel', 'betternether:warped_barrel');
		event.add('c:barrel', 'blockus:oak_barrel');
		event.add('c:barrel', 'blockus:birch_barrel');
		event.add('c:barrel', 'blockus:jungle_barrel');
		event.add('c:barrel', 'blockus:acacia_barrel');
		event.add('c:barrel', 'blockus:dark_oak_barrel');
		event.add('c:barrel', 'blockus:oak_barrel');
		event.add('c:barrel', 'blockus:crimson_barrel');
		event.add('c:barrel', 'blockus:warped_barrel');
		event.add('c:barrel', 'blockus:white_oak_barrel');
		event.add('c:barrel', 'blockus:bamboo_barrel');
		event.add('c:barrel', 'blockus:charred_barrel');
		
	// Get the #c:wooden_barrels tag collection and add BN, Blockus barrels to it
		event.add('c:wooden_barrels', 'betternether:crimson_barrel');
		event.add('c:wooden_barrels', 'betternether:warped_barrel');
		event.add('c:wooden_barrels', 'blockus:oak_barrel');
		event.add('c:wooden_barrels', 'blockus:birch_barrel');
		event.add('c:wooden_barrels', 'blockus:jungle_barrel');
		event.add('c:wooden_barrels', 'blockus:acacia_barrel');
		event.add('c:wooden_barrels', 'blockus:dark_oak_barrel');
		event.add('c:wooden_barrels', 'blockus:oak_barrel');
		event.add('c:wooden_barrels', 'blockus:crimson_barrel');
		event.add('c:wooden_barrels', 'blockus:warped_barrel');
		event.add('c:wooden_barrels', 'blockus:white_oak_barrel');
		event.add('c:wooden_barrels', 'blockus:bamboo_barrel');
		event.add('c:wooden_barrels', 'blockus:charred_barrel');
		
	// Get the #c:chains tag collection and add modded chains to it
		event.add('c:chains', 'blockus:golden_chain');
		event.add('c:chains', 'betternether:cincinnasite_chain');
		event.add('c:chains', 'betterend:thallasium_chain');
		event.add('c:chains', 'betterend:terminite_chain');
		event.add('c:chains', 'architects_palette:nether_brass_chain');
		
	// Get the #supplementaries:presents tag collection and add missing presents to it
		event.add('supplementaries:presents', /^supplementaries:.*present.*$/);
		
	// Get the #supplementaries:flower_box_plantable and #another_furniture:planter_box_placeables tags collection and add Colorful Azaleas leaves to it
		event.add('another_furniture:planter_box_placeables', /^colorful-azaleas:.*_leaves$/);
		event.add('supplementaries:flower_box_plantable', /^colorful-azaleas:.*_blooming_.*$/);
		event.add('supplementaries:flower_box_plantable', /^colorful-azaleas:.*_flowering_.*$/);
		
	// Get the #another_furniture:planter_box_placeables tags collection and add missing BetterEnd leaves to it
		event.add('another_furniture:planter_box_placeables', /^betterend:helix_tree_leaves$/);
		
	// Get the #minecraft:leaves, #minecraft:completes_find_tree_tutorial and #another_furniture:planter_box_placeables tags collection and add missing Charm leaves to it
		event.add('minecraft:leaves', /^charm:ebony_leaves$/);
		event.add('minecraft:completes_find_tree_tutorial', /^charm:ebony_leaves$/);
		event.add('another_furniture:planter_box_placeables', /^charm:ebony_leaves$/);
		
	// Get the #minecraft:logs, #minecraft:logs_that_burn, #minecraft:completes_find_tree_tutorial tags collection and add cinnamon logs to it
		event.add('minecraft:logs', /^expandeddelight:.*_log$/);
		event.add('minecraft:logs_that_burn', /^expandeddelight:.*_log$/);
		event.add('minecraft:completes_find_tree_tutorial', /^expandeddelight:.*_log$/);
		
	// Get the #c:provides_enchanting_power tag and add missing bookshelves to it
		event.add('c:provides_enchanting_power', /^variant_bookshelves:.*$/);
		
	// Get the #c:nether_pframe tag collection and add more obsidian blocks to it
		event.add('c:nether_pframe', /^betternether:.*_obsidian$/);
		event.add('c:nether_pframe', /^betterend:.*_obsidian$/);
		event.add('c:nether_pframe', /^blockus:.*_obsidian$/);
		event.add('c:nether_pframe', "bedrockbreakers:pure_obsidian");

	// Get the #c:ores tag and add missing ores to it
		event.add('c:ores', "expandeddelight:salt_ore");
		event.add('c:ores', "expandeddelight:deepslate_salt_ore");

	// Get the #enchancement:end_ores tag and add missing ores to it
		event.add('enchancement:end_ores', "betterend:ender_ore");
		event.add('enchancement:end_ores', "betterend:amber_ore");
		event.add('enchancement:end_ores', "betterend:thallasium_ore");

	// Get the #enchancement:nether_ores tag and add missing ores to it
		event.add('enchancement:nether_ores', "betternether:cincinnasite_ore");
		event.add('enchancement:nether_ores', "betternether:nether_ruby_ore");
		event.add('enchancement:nether_ores', "betternether:nether_lapis_ore");
		event.add('enchancement:nether_ores', "betternether:nether_redstone_ore");

	// Get the #c:farmer_plantable_on tag and add missing ores to it
		event.add('c:farmer_plantable_on', "farmingforblockheads:fertilized_farmland_healthy");
		event.add('c:farmer_plantable_on', "farmingforblockheads:fertilized_farmland_healthy_stable");
		event.add('c:farmer_plantable_on', "farmingforblockheads:fertilized_farmland_rich");
		event.add('c:farmer_plantable_on', "farmingforblockheads:fertilized_farmland_rich_stable");
		event.add('c:farmer_plantable_on', "farmingforblockheads:fertilized_farmland_stable");
		
})