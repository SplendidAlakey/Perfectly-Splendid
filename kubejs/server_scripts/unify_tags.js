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
		
	// Get the #c:stripped_logs tag collection and add Azalea and Jaracanda logs to it
		event.add('c:stripped_logs', 'aurorasdeco:stripped_azalea_log');
		event.add('c:stripped_logs', 'aurorasdeco:stripped_jacaranda_log');
		
	// Get the #c:stripped_wood tag collection and add Azalea and Jaracanda wood to it
		event.add('c:stripped_wood', 'aurorasdeco:stripped_azalea_wood');
		event.add('c:stripped_wood', 'aurorasdeco:stripped_jacaranda_wood');
		
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
})