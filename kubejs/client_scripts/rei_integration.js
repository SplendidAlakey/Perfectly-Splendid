// priority: 0

// Remove REI entries for deleted recipes.

REIEvents.hide('item', event => {
		event.hide([
	'extraalchemy:empty_vial',
	'blockus:large_flower_pot',
	'twigs:calcite_slab',
	'twigs:polished_calcite_slab',
	'twigs:calcite_stairs',
	'twigs:polished_calcite_stairs',
	'twigs:polished_calcite',
	'twigs:tuff_slab',
	'twigs:polished_tuff_slab',
	'twigs:polished_tuff',
	'blockus:polished_tuff_slab',
	'blockus:polished_tuff',
	'blockus:polished_tuff_stairs',
	'blockus:mossy_deepslate_bricks',
	'blockus:mossy_deepslate_brick_stairs',
	'blockus:mossy_deepslate_brick_slab',
	'blockus:mossy_deepslate_brick_wall',
	'aurorasdeco:mossy_deepslate_bricks',
	'aurorasdeco:mossy_deepslate_brick_stairs',
	'aurorasdeco:mossy_deepslate_brick_slab',
	'aurorasdeco:mossy_deepslate_brick_wall',
	'#aurorasdeco:pet_beds',
	'#aurorasdeco:sleeping_bags',
	'#aurorasdeco:shelves',
	'aurorasdeco:seat_rest/betternether/nether_reed',
	'aurorasdeco:sign_post/betternether/nether_reed',
	'aurorasdeco:bench/betternether/nether_reed',
	'aurorasdeco:stump/betternether/stalagnate',
	'aurorasdeco:small_log_pile/betternether/stalagnate',
	'aurorasdeco:stump/betternether/mushroom_fir',
	'aurorasdeco:small_log_pile/betternether/mushroom_fir',
	'aurorasdeco:stump/colorful-azaleas/azule_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/azule_azalea',
	'aurorasdeco:stump/colorful-azaleas/bright_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/bright_azalea',
	'aurorasdeco:stump/colorful-azaleas/roze_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/roze_azalea',
	'aurorasdeco:stump/colorful-azaleas/tecal_azalea_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/tecal_azalea',
	'aurorasdeco:stump/colorful-azaleas/titanium_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/titanium_azalea',
	'aurorasdeco:stump/colorful-azaleas/walnut_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/walnut_azalea',
	'aurorasdeco:stump/colorful-azaleas/fiss_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/fiss_azalea',
	'aurorasdeco:stump/wondrouswilds/hollow_oak',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_oak',
	'aurorasdeco:stump/wondrouswilds/hollow_spruce',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_spruce',
	'aurorasdeco:stump/wondrouswilds/hollow_birch',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_birch',
	'aurorasdeco:stump/wondrouswilds/hollow_jungle',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_jungle',
	'aurorasdeco:stump/wondrouswilds/hollow_acacia',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_acacia',
	'aurorasdeco:stump/wondrouswilds/hollow_dark_oak',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dark_oak',
	'aurorasdeco:stump/wondrouswilds/hollow_mangrove',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_mangrove',
	'aurorasdeco:stump/wondrouswilds/hollow_crimson',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_crimson',
	'aurorasdeco:stump/wondrouswilds/hollow_warped',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_warped',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_oak',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_oak',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_spruce',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_spruce',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_birch',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_birch',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_jungle',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_jungle',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_acacia',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_acacia',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_dark_oak',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_dark_oak',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_mangrove',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_mangrove',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_crimson',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_crimson',
	'aurorasdeco:stump/wondrouswilds/hollow_dead_warped',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_warped',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_oak',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_oak',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_spruce',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_spruce',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_birch',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_birch',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_jungle',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_jungle',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_acacia',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_acacia',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_dark_oak',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_dark_oak',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_mangrove',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_mangrove',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_crimson',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_crimson',
	'aurorasdeco:stump/wondrouswilds/hollow_stripped_warped',
	'aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_warped',
	'aurorasdeco:sawmill',
	'variantcraftingtables:herringbone_mangrove_crafting_table',
	'mcdw:item_bee_stinger',
	'charm:totem_of_preserving_holder',
	'variantcraftingtables:herringbone_mangrove_crafting_table',
	'twigs:bundled_bamboo',
	'twigs:stripped_bamboo',
	'twigs:stripped_bundled_bamboo',
	'twigs:stripped_bamboo_planks',
	'twigs:stripped_bamboo_slab',
	'twigs:stripped_bamboo_stairs',
	'twigs:stripped_bamboo_fence',
	'twigs:stripped_bamboo_fence_gate',
	'twigs:stripped_bamboo_button',
	'twigs:stripped_bamboo_pressure_plate',
	'twigs:stripped_bamboo_door',
	'dramaticdoors:tall_stripped_bamboo_door',
	'twigs:stripped_bamboo_trapdoor',
	'twigs:stripped_bamboo_sign',
	'twigs:stripped_bamboo_boat',
	'twigs:stripped_bamboo_chest_boat',
	'variantcraftingtables:stripped_bamboo_crafting_table',
	'variant_bookshelves:stripped_bamboo_bookshelf',
	'aurorasdeco:seat_rest/twigs/stripped_bamboo',
	'aurorasdeco:sign_post/twigs/stripped_bamboo',
	'aurorasdeco:bench/twigs/stripped_bamboo',
	'charm:crimson_chest',
	'charm:warped_chest',
	'charm:crimson_barrel',
	'charm:warped_barrel'
	])
})