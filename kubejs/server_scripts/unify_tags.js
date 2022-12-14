// priority: 4

// Listen to item tag event
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
		
	// Get the #minecraft:leaves, #minecraft:completes_find_tree_tutorial, #supplementaries:flower_box_plantable and #another_furniture:planter_box_placeables tags collection and add Colorful Azaleas leaves to it
		event.add('minecraft:leaves', /^colorful-azaleas:.*_leaves$/);
		event.add('minecraft:completes_find_tree_tutorial', /^colorful-azaleas:.*_leaves$/);
		event.add('another_furniture:planter_box_placeables', /^colorful-azaleas:.*_leaves$/);
		event.add('supplementaries:flower_box_plantable', /^colorful-azaleas:.*_blooming_.*$/);
		event.add('supplementaries:flower_box_plantable', /^colorful-azaleas:.*_flowering_.*$/);
		
	// Get the #minecraft:leaves, #minecraft:completes_find_tree_tutorial and #another_furniture:planter_box_placeables tags collection and add missing BetterEnd leaves to it
		event.add('minecraft:leaves', /^betterend:helix_tree_leaves$/);
		event.add('minecraft:completes_find_tree_tutorial', /^betterend:helix_tree_leaves$/);
		event.add('another_furniture:planter_box_placeables', /^betterend:helix_tree_leaves$/);
		
	// Get the #minecraft:leaves, #minecraft:completes_find_tree_tutorial and #another_furniture:planter_box_placeables tags collection and add missing Charm leaves to it
		event.add('minecraft:leaves', /^charm:ebony_leaves$/);
		event.add('minecraft:completes_find_tree_tutorial', /^charm:ebony_leaves$/);
		event.add('another_furniture:planter_box_placeables', /^charm:ebony_leaves$/);
		
	// Get the #minecraft:logs, #minecraft:logs_that_burn and #minecraft:completes_find_tree_tutorial tags collection and add Colorful Azaleas logs and wood to it
		event.add('minecraft:logs', /^colorful-azaleas:.*_log$/);
		event.add('minecraft:completes_find_tree_tutorial', /^colorful-azaleas:.*_log$/);
		event.add('minecraft:logs_that_burn', /^colorful-azaleas:.*_log$/);
		event.add('minecraft:logs', /^colorful-azaleas:.*_wood$/);
		event.add('minecraft:completes_find_tree_tutorial', /^colorful-azaleas:.*_wood$/);
		event.add('minecraft:logs_that_burn', /^colorful-azaleas:.*_wood$/);
		
	// Get the #c:planks_that_burn tag collection and add Colorful Azaleas planks to it
		event.add('c:planks_that_burn', /^colorful-azaleas:.*_planks$/);
		
	// Get the #minecraft:wooden_stairs tag collection and add Colorful Azaleas stairs to it
		event.add('minecraft:wooden_stairs', /^colorful-azaleas:.*_stairs$/);
		
	// Get the #minecraft:wooden_slabs tag collection and add Colorful Azaleas slabs to it
		event.add('minecraft:wooden_slabs', /^colorful-azaleas:.*_slab$/);
		
	// Get the #minecraft:wooden_trapdoors tag collection and add Colorful Azaleas trapdoors to it
		event.add('minecraft:wooden_trapdoors', /^colorful-azaleas:.*_trapdoor$/);
		
	// Get the #minecraft:doors and #minecraft:wooden_doors tags collection and add Colorful Azaleas doors to it
		event.add('minecraft:doors', /^colorful-azaleas:.*_door$/);
		event.add('minecraft:wooden_doors', /^colorful-azaleas:.*_door$/);
		
	// Get the #minecraft:fences, #minecraft:wooden_fences, #c:fences and #c:fences/wooden tags collection and add Colorful Azaleas fences to it
		event.add('minecraft:fences', /^colorful-azaleas:.*_fence$/);
		event.add('minecraft:wooden_fences', /^colorful-azaleas:.*_fence$/);
		event.add('c:fences', /^colorful-azaleas:.*_fence$/);
		event.add('c:fences/wooden', /^colorful-azaleas:.*_fence$/);
		
	// Get the #bookshelf:fence_gates, #c:fence_gates and #c:fence_gates/wooden tags collection and add Colorful Azaleas fence gates to it
		event.add('bookshelf:fence_gates', /^colorful-azaleas:.*_fence_gate$/);
		event.add('c:fence_gates', /^colorful-azaleas:.*_fence_gate$/);
		event.add('c:fence_gates/wooden', /^colorful-azaleas:.*_fence_gate$/);
		
	// Get the #minecraft:buttons and #minecraft:wooden_butons tags collection and add Colorful Azaleas buttons to it
		event.add('minecraft:buttons', /^colorful-azaleas:.*_button$/);
		event.add('minecraft:wooden_buttons', /^colorful-azaleas:.*_button$/);
		
	// Get the #minecraft:wooden_pressure_plates tag collection and add Colorful Azaleas pressure plates to it
		event.add('minecraft:wooden_pressure_plates', /^colorful-azaleas:.*_pressure_plate$/);
		
	// Get the #minecraft:logs, #minecraft:logs_that_burn, #minecraft:completes_find_tree_tutorial tags collection and add cinnamon logs to it
		event.add('minecraft:logs', /^expandeddelight:.*_log$/);
		event.add('minecraft:logs_that_burn', /^expandeddelight:.*_log$/);
		event.add('minecraft:completes_find_tree_tutorial', /^expandeddelight:.*_log$/);
})