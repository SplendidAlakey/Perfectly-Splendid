// priority: 5

ServerEvents.recipes(event => {
	
	const output = [
	"extraalchemy:empty_vial",
	"extraalchemy:breakable_potion",
	"blockus:large_flower_pot",
	"twigs:calcite_slab",
	"twigs:polished_calcite_slab",
	"twigs:calcite_stairs",
	"twigs:polished_calcite_stairs",
	"twigs:polished_calcite",
	"twigs:tuff_slab",
	"twigs:polished_tuff_slab",
	"twigs:polished_tuff",
	"minekea:building/slabs/calcite",
	"minekea:building/stairs/calcite",
	"minekea:building/slabs/tuff",
	"minekea:building/walls/polished_basalt",
	"blockus:polished_tuff_slab",
	"blockus:polished_tuff",
	"blockus:polished_tuff_stairs",
	"blockus:mossy_deepslate_bricks",
	"blockus:mossy_deepslate_brick_stairs",
	"blockus:mossy_deepslate_brick_slab",
	"blockus:mossy_deepslate_brick_wall",
	"aurorasdeco:mossy_deepslate_bricks",
	"aurorasdeco:mossy_deepslate_brick_stairs",
	"aurorasdeco:mossy_deepslate_brick_slab",
	"aurorasdeco:mossy_deepslate_brick_wall",
	"#aurorasdeco:sleeping_bags",
	"#aurorasdeco:shelves",
	"aurorasdeco:seat_rest/betternether/nether_reed",
	"aurorasdeco:sign_post/betternether/nether_reed",
	"aurorasdeco:bench/betternether/nether_reed",
	"aurorasdeco:stump/betternether/stalagnate",
	"aurorasdeco:small_log_pile/betternether/stalagnate",
	"aurorasdeco:stump/betternether/mushroom_fir",
	"aurorasdeco:small_log_pile/betternether/mushroom_fir",
	"aurorasdeco:stump/minekea/building/beams/acacia",
	"aurorasdeco:small_log_pile/minekea/building/beams/acacia",
	"aurorasdeco:stump/minekea/building/beams/birch",
	"aurorasdeco:small_log_pile/minekea/building/beams/birch",
	"aurorasdeco:stump/minekea/building/beams/crimson",
	"aurorasdeco:small_log_pile/minekea/building/beams/crimson",
	"aurorasdeco:stump/minekea/building/beams/dark_oak",
	"aurorasdeco:small_log_pile/minekea/building/beams/dark_oak",
	"aurorasdeco:stump/minekea/building/beams/jungle",
	"aurorasdeco:small_log_pile/minekea/building/beams/jungle",
	"aurorasdeco:stump/minekea/building/beams/mangrove",
	"aurorasdeco:small_log_pile/minekea/building/beams/mangrove",
	"aurorasdeco:stump/minekea/building/beams/oak",
	"aurorasdeco:small_log_pile/minekea/building/beams/oak",
	"aurorasdeco:stump/minekea/building/beams/spruce",
	"aurorasdeco:small_log_pile/minekea/building/beams/spruce",
	"aurorasdeco:stump/minekea/building/beams/warped",
	"aurorasdeco:small_log_pile/minekea/building/beams/warped",
	"aurorasdeco:stump/minekea/building/covers/acacia",
	"aurorasdeco:small_log_pile/minekea/building/covers/acacia",
	"aurorasdeco:stump/minekea/building/covers/birch",
	"aurorasdeco:small_log_pile/minekea/building/covers/birch",
	"aurorasdeco:stump/minekea/building/covers/crimson",
	"aurorasdeco:small_log_pile/minekea/building/covers/crimson",
	"aurorasdeco:stump/minekea/building/covers/dark_oak",
	"aurorasdeco:small_log_pile/minekea/building/covers/dark_oak",
	"aurorasdeco:stump/minekea/building/covers/jungle",
	"aurorasdeco:small_log_pile/minekea/building/covers/jungle",
	"aurorasdeco:stump/minekea/building/covers/mangrove",
	"aurorasdeco:small_log_pile/minekea/building/covers/mangrove",
	"aurorasdeco:stump/minekea/building/covers/oak",
	"aurorasdeco:small_log_pile/minekea/building/covers/oak",
	"aurorasdeco:stump/minekea/building/covers/spruce",
	"aurorasdeco:small_log_pile/minekea/building/covers/spruce",
	"aurorasdeco:stump/minekea/building/covers/warped",
	"aurorasdeco:small_log_pile/minekea/building/covers/warped",
	"aurorasdeco:stump/minekea/building/slabs/acacia",
	"aurorasdeco:small_log_pile/minekea/building/slabs/acacia",
	"aurorasdeco:stump/minekea/building/slabs/birch",
	"aurorasdeco:small_log_pile/minekea/building/slabs/birch",
	"aurorasdeco:stump/minekea/building/slabs/crimson",
	"aurorasdeco:small_log_pile/minekea/building/slabs/crimson",
	"aurorasdeco:stump/minekea/building/slabs/dark_oak",
	"aurorasdeco:small_log_pile/minekea/building/slabs/dark_oak",
	"aurorasdeco:stump/minekea/building/slabs/jungle",
	"aurorasdeco:small_log_pile/minekea/building/slabs/jungle",
	"aurorasdeco:stump/minekea/building/slabs/mangrove",
	"aurorasdeco:small_log_pile/minekea/building/slabs/mangrove",
	"aurorasdeco:stump/minekea/building/slabs/oak",
	"aurorasdeco:small_log_pile/minekea/building/slabs/oak",
	"aurorasdeco:stump/minekea/building/slabs/spruce",
	"aurorasdeco:small_log_pile/minekea/building/slabs/spruce",
	"aurorasdeco:stump/minekea/building/slabs/warped",
	"aurorasdeco:small_log_pile/minekea/building/slabs/warped",
	"aurorasdeco:stump/minekea/building/stairs/acacia",
	"aurorasdeco:small_log_pile/minekea/building/stairs/acacia",
	"aurorasdeco:stump/minekea/building/stairs/birch",
	"aurorasdeco:small_log_pile/minekea/building/stairs/birch",
	"aurorasdeco:stump/minekea/building/stairs/crimson",
	"aurorasdeco:small_log_pile/minekea/building/stairs/crimson",
	"aurorasdeco:stump/minekea/building/stairs/dark_oak",
	"aurorasdeco:small_log_pile/minekea/building/stairs/dark_oak",
	"aurorasdeco:stump/minekea/building/stairs/jungle",
	"aurorasdeco:small_log_pile/minekea/building/stairs/jungle",
	"aurorasdeco:stump/minekea/building/stairs/mangrove",
	"aurorasdeco:small_log_pile/minekea/building/stairs/mangrove",
	"aurorasdeco:stump/minekea/building/stairs/oak",
	"aurorasdeco:small_log_pile/minekea/building/stairs/oak",
	"aurorasdeco:stump/minekea/building/stairs/spruce",
	"aurorasdeco:small_log_pile/minekea/building/stairs/spruce",
	"aurorasdeco:stump/minekea/building/stairs/warped",
	"aurorasdeco:small_log_pile/minekea/building/stairs/warped",
	"aurorasdeco:stump/minekea/building/stairs/vertical/acacia",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/acacia",
	"aurorasdeco:stump/minekea/building/stairs/vertical/birch",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/birch",
	"aurorasdeco:stump/minekea/building/stairs/vertical/crimson",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/crimson",
	"aurorasdeco:stump/minekea/building/stairs/vertical/dark_oak",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/dark_oak",
	"aurorasdeco:stump/minekea/building/stairs/vertical/jungle",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/jungle",
	"aurorasdeco:stump/minekea/building/stairs/vertical/mangrove",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/mangrove",
	"aurorasdeco:stump/minekea/building/stairs/vertical/oak",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/oak",
	"aurorasdeco:stump/minekea/building/stairs/vertical/spruce",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/spruce",
	"aurorasdeco:stump/minekea/building/stairs/vertical/warped",
	"aurorasdeco:small_log_pile/minekea/building/stairs/vertical/warped",
	"aurorasdeco:stump/colorfulazaleas/azule_azalea",
	"aurorasdeco:small_log_pile/colorfulazaleas/azule_azalea",
	"aurorasdeco:stump/colorfulazaleas/bright_azalea",
	"aurorasdeco:small_log_pile/colorfulazaleas/bright_azalea",
	"aurorasdeco:stump/colorfulazaleas/roze_azalea",
	"aurorasdeco:small_log_pile/colorfulazaleas/roze_azalea",
	"aurorasdeco:stump/colorfulazaleas/tecal_azalea_azalea",
	"aurorasdeco:small_log_pile/colorfulazaleas/tecal_azalea",
	"aurorasdeco:stump/colorfulazaleas/titanium_azalea",
	"aurorasdeco:small_log_pile/colorfulazaleas/titanium_azalea",
	"aurorasdeco:stump/colorfulazaleas/walnut_azalea",
	"aurorasdeco:small_log_pile/colorfulazaleas/walnut_azalea",
	"aurorasdeco:stump/colorfulazaleas/fiss_azalea",
	"aurorasdeco:small_log_pile/colorfulazaleas/fiss_azalea",
	"aurorasdeco:stump/wondrouswilds/hollow_oak",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_oak",
	"aurorasdeco:stump/wondrouswilds/hollow_spruce",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_spruce",
	"aurorasdeco:stump/wondrouswilds/hollow_birch",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_birch",
	"aurorasdeco:stump/wondrouswilds/hollow_jungle",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_jungle",
	"aurorasdeco:stump/wondrouswilds/hollow_acacia",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_acacia",
	"aurorasdeco:stump/wondrouswilds/hollow_dark_oak",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dark_oak",
	"aurorasdeco:stump/wondrouswilds/hollow_mangrove",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_mangrove",
	"aurorasdeco:stump/wondrouswilds/hollow_crimson",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_crimson",
	"aurorasdeco:stump/wondrouswilds/hollow_warped",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_warped",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_oak",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_oak",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_spruce",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_spruce",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_birch",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_birch",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_jungle",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_jungle",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_acacia",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_acacia",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_dark_oak",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_dark_oak",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_mangrove",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_mangrove",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_crimson",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_crimson",
	"aurorasdeco:stump/wondrouswilds/hollow_dead_warped",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_dead_warped",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_oak",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_oak",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_spruce",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_spruce",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_birch",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_birch",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_jungle",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_jungle",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_acacia",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_acacia",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_dark_oak",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_dark_oak",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_mangrove",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_mangrove",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_crimson",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_crimson",
	"aurorasdeco:stump/wondrouswilds/hollow_stripped_warped",
	"aurorasdeco:small_log_pile/wondrouswilds/hollow_stripped_warped",
	"aurorasdeco:sawmill",
	"twigs:bundled_bamboo",
	"twigs:stripped_bamboo",
	"twigs:stripped_bundled_bamboo",
	"twigs:stripped_bamboo_planks",
	"twigs:stripped_bamboo_slab",
	"twigs:stripped_bamboo_stairs",
	"twigs:stripped_bamboo_fence",
	"twigs:stripped_bamboo_fence_gate",
	"twigs:stripped_bamboo_button",
	"twigs:stripped_bamboo_pressure_plate",
	"twigs:stripped_bamboo_door",
	"dramaticdoors:tall_stripped_bamboo_door",
	"twigs:stripped_bamboo_trapdoor",
	"twigs:stripped_bamboo_sign",
	"twigs:stripped_bamboo_boat",
	"twigs:stripped_bamboo_chest_boat",
	"variantcraftingtables:stripped_bamboo_crafting_table",
	"variant_bookshelves:stripped_bamboo_bookshelf",
	"aurorasdeco:seat_rest/twigs/stripped_bamboo",
	"aurorasdeco:sign_post/twigs/stripped_bamboo",
	"aurorasdeco:bench/twigs/stripped_bamboo",
	"minekea:storage/compressed/bamboo",
	"charm:crimson_chest",
	"charm:warped_chest",
	"blockus:crimson_barrel",
	"blockus:warped_barrel",
	"charm:crimson_barrel",
	"charm:warped_barrel",
	"minekea:tools/wrench",
	"supplementaries:blackboard",
	"supplementaries:wrench",
	"supplementaries:sconce_nether_brass",
	"minekea:building/slabs/end_stone",
	"minekea:building/slabs/basalt",
	"minekea:building/slabs/crying_obsidian",
	"minekea:building/slabs/diamond_block",
	"minekea:building/slabs/amethyst",
	"minekea:building/slabs/crying_obsidian",
	"minekea:building/slabs/gold_block",
	"betternether:basalt_bricks",
	"betternether:basalt_brick_slab",
	"betternether:basalt_brick_stairs",
	"architects_palette:basalt_tiles",
	"architects_palette:basalt_tile_stairs",
	"architects_palette:basalt_tile_slab",
	"blockus:polished_basalt_bricks",
	"aurorasdeco:seat_rest/betternether/stalagnate",
	"aurorasdeco:bench/betternether/stalagnate",
	"aurorasdeco:seat_rest/betternether/mushroom_fir",
	"aurorasdeco:bench/betternether/mushroom_fir",
	Item.of('patchouli:guide_book', '{"patchouli:book":"betternether:betternether_book"}'),
	/^blockus:.*limestone.*$/,
	"snowyspirit:gingerbread_vertical_slab",
	"#travelersbackpack:sleeping_bags",
	"charm:gold_bars",
	/^aurorasdeco:stump\/connectedblocks\/.*$/,
	"bigextras:endless_rod"
	];
	
	output.forEach((output) => {
		event.remove({ output: output });
	});
});