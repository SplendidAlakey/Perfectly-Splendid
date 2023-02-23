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
	'minekea:building/slabs/calcite',
	'minekea:building/stairs/calcite',
	'minekea:building/slabs/tuff',
	'minekea:building/walls/polished_basalt',
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
	'#aurorasdeco:sleeping_bags',
	'#aurorasdeco:shelves',
	'aurorasdeco:seat_rest/betternether/nether_reed',
	'aurorasdeco:sign_post/betternether/nether_reed',
	'aurorasdeco:bench/betternether/nether_reed',
	'aurorasdeco:stump/betternether/stalagnate',
	'aurorasdeco:small_log_pile/betternether/stalagnate',
	'aurorasdeco:stump/betternether/mushroom_fir',
	'aurorasdeco:small_log_pile/betternether/mushroom_fir',
	'aurorasdeco:stump/minekea/building/beams/acacia',
	'aurorasdeco:small_log_pile/minekea/building/beams/acacia',
	'aurorasdeco:stump/minekea/building/beams/birch',
	'aurorasdeco:small_log_pile/minekea/building/beams/birch',
	'aurorasdeco:stump/minekea/building/beams/crimson',
	'aurorasdeco:small_log_pile/minekea/building/beams/crimson',
	'aurorasdeco:stump/minekea/building/beams/dark_oak',
	'aurorasdeco:small_log_pile/minekea/building/beams/dark_oak',
	'aurorasdeco:stump/minekea/building/beams/jungle',
	'aurorasdeco:small_log_pile/minekea/building/beams/jungle',
	'aurorasdeco:stump/minekea/building/beams/mangrove',
	'aurorasdeco:small_log_pile/minekea/building/beams/mangrove',
	'aurorasdeco:stump/minekea/building/beams/oak',
	'aurorasdeco:small_log_pile/minekea/building/beams/oak',
	'aurorasdeco:stump/minekea/building/beams/spruce',
	'aurorasdeco:small_log_pile/minekea/building/beams/spruce',
	'aurorasdeco:stump/minekea/building/beams/warped',
	'aurorasdeco:small_log_pile/minekea/building/beams/warped',
	'aurorasdeco:stump/minekea/building/covers/acacia',
	'aurorasdeco:small_log_pile/minekea/building/covers/acacia',
	'aurorasdeco:stump/minekea/building/covers/birch',
	'aurorasdeco:small_log_pile/minekea/building/covers/birch',
	'aurorasdeco:stump/minekea/building/covers/crimson',
	'aurorasdeco:small_log_pile/minekea/building/covers/crimson',
	'aurorasdeco:stump/minekea/building/covers/dark_oak',
	'aurorasdeco:small_log_pile/minekea/building/covers/dark_oak',
	'aurorasdeco:stump/minekea/building/covers/jungle',
	'aurorasdeco:small_log_pile/minekea/building/covers/jungle',
	'aurorasdeco:stump/minekea/building/covers/mangrove',
	'aurorasdeco:small_log_pile/minekea/building/covers/mangrove',
	'aurorasdeco:stump/minekea/building/covers/oak',
	'aurorasdeco:small_log_pile/minekea/building/covers/oak',
	'aurorasdeco:stump/minekea/building/covers/spruce',
	'aurorasdeco:small_log_pile/minekea/building/covers/spruce',
	'aurorasdeco:stump/minekea/building/covers/warped',
	'aurorasdeco:small_log_pile/minekea/building/covers/warped',
	'aurorasdeco:stump/minekea/building/slabs/acacia',
	'aurorasdeco:small_log_pile/minekea/building/slabs/acacia',
	'aurorasdeco:stump/minekea/building/slabs/birch',
	'aurorasdeco:small_log_pile/minekea/building/slabs/birch',
	'aurorasdeco:stump/minekea/building/slabs/crimson',
	'aurorasdeco:small_log_pile/minekea/building/slabs/crimson',
	'aurorasdeco:stump/minekea/building/slabs/dark_oak',
	'aurorasdeco:small_log_pile/minekea/building/slabs/dark_oak',
	'aurorasdeco:stump/minekea/building/slabs/jungle',
	'aurorasdeco:small_log_pile/minekea/building/slabs/jungle',
	'aurorasdeco:stump/minekea/building/slabs/mangrove',
	'aurorasdeco:small_log_pile/minekea/building/slabs/mangrove',
	'aurorasdeco:stump/minekea/building/slabs/oak',
	'aurorasdeco:small_log_pile/minekea/building/slabs/oak',
	'aurorasdeco:stump/minekea/building/slabs/spruce',
	'aurorasdeco:small_log_pile/minekea/building/slabs/spruce',
	'aurorasdeco:stump/minekea/building/slabs/warped',
	'aurorasdeco:small_log_pile/minekea/building/slabs/warped',
	'aurorasdeco:stump/minekea/building/stairs/acacia',
	'aurorasdeco:small_log_pile/minekea/building/stairs/acacia',
	'aurorasdeco:stump/minekea/building/stairs/birch',
	'aurorasdeco:small_log_pile/minekea/building/stairs/birch',
	'aurorasdeco:stump/minekea/building/stairs/crimson',
	'aurorasdeco:small_log_pile/minekea/building/stairs/crimson',
	'aurorasdeco:stump/minekea/building/stairs/dark_oak',
	'aurorasdeco:small_log_pile/minekea/building/stairs/dark_oak',
	'aurorasdeco:stump/minekea/building/stairs/jungle',
	'aurorasdeco:small_log_pile/minekea/building/stairs/jungle',
	'aurorasdeco:stump/minekea/building/stairs/mangrove',
	'aurorasdeco:small_log_pile/minekea/building/stairs/mangrove',
	'aurorasdeco:stump/minekea/building/stairs/oak',
	'aurorasdeco:small_log_pile/minekea/building/stairs/oak',
	'aurorasdeco:stump/minekea/building/stairs/spruce',
	'aurorasdeco:small_log_pile/minekea/building/stairs/spruce',
	'aurorasdeco:stump/minekea/building/stairs/warped',
	'aurorasdeco:small_log_pile/minekea/building/stairs/warped',
	'aurorasdeco:stump/minekea/building/stairs/vertical/acacia',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/acacia',
	'aurorasdeco:stump/minekea/building/stairs/vertical/birch',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/birch',
	'aurorasdeco:stump/minekea/building/stairs/vertical/crimson',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/crimson',
	'aurorasdeco:stump/minekea/building/stairs/vertical/dark_oak',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/dark_oak',
	'aurorasdeco:stump/minekea/building/stairs/vertical/jungle',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/jungle',
	'aurorasdeco:stump/minekea/building/stairs/vertical/mangrove',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/mangrove',
	'aurorasdeco:stump/minekea/building/stairs/vertical/oak',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/oak',
	'aurorasdeco:stump/minekea/building/stairs/vertical/spruce',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/spruce',
	'aurorasdeco:stump/minekea/building/stairs/vertical/warped',
	'aurorasdeco:small_log_pile/minekea/building/stairs/vertical/warped',
	'aurorasdeco:stump/colorful-azaleas/azule_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/azule_azalea',
	'aurorasdeco:stump/colorful-azaleas/bright_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/bright_azalea',
	'aurorasdeco:stump/colorful-azaleas/roze_azalea',
	'aurorasdeco:small_log_pile/colorful-azaleas/roze_azalea',
	'aurorasdeco:stump/colorful-azaleas/tecal_azalea',
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
	'minekea:storage/compressed/bamboo',
	'charm:crimson_chest',
	'charm:warped_chest',
	'charm:crimson_barrel',
	'charm:warped_barrel',
	'minekea:tools/wrench',
	'additionaladditions:wrench',
	'supplementaries:blackboard',
	'aurorasdeco:sign_post/charm/azalea',
	'aurorasdeco:stump/charm/azalea',
	'aurorasdeco:small_log_pile/charm/azalea',
	'aurorasdeco:bench/charm/azalea',
	'aurorasdeco:seat_rest/charm/azalea',
	'charm:azalea_planks',
	'charm:azalea_button',
	'charm:azalea_door',
	'charm:azalea_fence',
	'charm:azalea_fence_gate',
	'charm:azalea_log',
	'charm:stripped_azalea_log',
	'charm:azalea_wood',
	'charm:stripped_azalea_wood',
	'charm:azalea_pressure_plate',
	'charm:azalea_slab',
	'charm:azalea_stairs',
	'charm:azalea_trapdoor',
	'charm:azalea_sign',
	'charm:azalea_barrel',
	'charm:azalea_bookshelf',
	'charm:azalea_bookcase',
	'charm:azalea_chest',
	'charm:azalea_ladder',
	'charm:azalea_trapped_chest',
	'charm:azalea_boat',
	'charm:azalea_chest_boat',
	'dramaticdoors:tall_charm_azalea_door',
	'supplementaries:charm/hanging_sign_azalea',
	'supplementaries:charm/sign_post_azalea',
	'snowyspirit:charm/sled_azalea',
	'supplementaries:sconce_nether_brass',
	'takesapillage:ravager_horn',
	'aurorasdeco:bench/colorful-azaleas/azule_azalea',
	'aurorasdeco:seat_rest/colorful-azaleas/azule_azalea',
	'aurorasdeco:bench/colorful-azaleas/bright_azalea',
	'aurorasdeco:seat_rest/colorful-azaleas/bright_azalea',
	'aurorasdeco:bench/colorful-azaleas/fiss_azalea',
	'aurorasdeco:seat_rest/colorful-azaleas/fiss_azalea',
	'aurorasdeco:bench/colorful-azaleas/roze_azalea',
	'aurorasdeco:seat_rest/colorful-azaleas/roze_azalea',
	'aurorasdeco:bench/colorful-azaleas/tecal_azalea',
	'aurorasdeco:seat_rest/colorful-azaleas/tecal_azalea',
	'aurorasdeco:bench/colorful-azaleas/titanium_azalea',
	'aurorasdeco:seat_rest/colorful-azaleas/titanium_azalea',
	'aurorasdeco:bench/colorful-azaleas/walnut_azalea',
	'aurorasdeco:seat_rest/colorful-azaleas/walnut_azalea',
	'charm:gold_chain',
	'minekea:building/slabs/end_stone',
	'minekea:building/slabs/basalt',
	'minekea:building/slabs/crying_obsidian',
	'minekea:building/slabs/diamond_block',
	'minekea:building/slabs/amethyst',
	'minekea:building/slabs/crying_obsidian',
	'minekea:building/slabs/gold_block',
	'betternether:basalt_bricks',
	'betternether:basalt_brick_slab',
	'betternether:basalt_brick_stairs',
	'architects_palette:basalt_tiles',
	'blockus:polished_basalt_bricks',
	'aurorasdeco:seat_rest/betternether/stalagnate',
	'aurorasdeco:bench/betternether/stalagnate',
	'aurorasdeco:seat_rest/betternether/mushroom_fir',
	'aurorasdeco:bench/betternether/mushroom_fir',
	Item.of('patchouli:guide_book', '{"patchouli:book":"betternether:betternether_book"}'),
	'libraryferret:iron_coins_jtl',
	'libraryferret:gold_coins_jtl',
	'libraryferret:emerald_coins_jtl',
	'libraryferret:diamond_coins_jtl',
	'libraryferret:netherite_coins_jtl',
	'libraryferret:fake_iron_block',
	'libraryferret:fake_gold_block',
	'libraryferret:fake_emerald_block',
	'libraryferret:fake_diamond_block',
	'libraryferret:fake_netherite_block',
	/^blockus:.*limestone.*$/,
	'extended_drawers:creative_upgrade',
	'create:creative_motor',
	'create:creative_fluid_tank',
	'create:creative_crate',
	'create:creative_blaze_cake',
	'create:handheld_worldshaper',
	'snowyspirit:gingerbread_vertical_slab',
	'create:copper_backtank_placeable',
	'create:refined_radiance',
	'create:chromatic_compound',
	'create:shadow_steel',
	'create:shadow_steel_casing',
	'create:refined_radiance_casing',
	'#travelersbackpack:sleeping_bags',
	'immersive_aircraft:propeller',
	'immersive_aircraft:sail',
	/^ecologics:((?!moss)(?!.*_moss)(?!moss_.*).).*$/,
	'charm:gold_bars'
	])
	
})