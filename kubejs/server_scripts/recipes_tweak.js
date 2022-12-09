// priority: 6

// Tweak recipes for:
// Mining Dimensions
// Custom Portals
// Add a recipe for Creative Probe
// DragonLoot
// Compatibility recipes between Twigs, Aurora's Decorations and Blockus
// Compatibility recipes between Comforts and Traveler's Backpack
// Added tags for chests in Traveler's Backpack recipe
// Made some totem recipes more interesting
// Make MCDW recipe for the stinger use Bumblezone stingers
// Compatibility recipes between Twigs, Blockus and Bamboo Everything
// Make bundles significantly easier to craft and ingreate coloured bundles with tokens
// Add wooden chests tag to most recipes that use vanilla chests
// Change vanilla bundle recipe to a rainbow one
// Add tags to barrels in Drink Beer recipes
// Add a recipe for Leka's Call Bell
// Add a recipe for Raid Horn
// Swap tags for sturdy stones, based on a PR made by magneticflux-
// Add chain tag to Blaze Bell recipe
// Add a recipe for the Blazing Eye, until the Gauntlet boss is fixed to work with BetterCombat
// Switch up the recipe for cracked polished basalt bricks, because of duplicates
// Add a recipe for the Minekea book, because I'm removing it from starter inventory
// Replace Charm Azalea item's recipes with Aurora's Decorations
// Add tags to chests in chest boat recipes
// Add recipes for all guide books
// Make Immersive Aircraft recipes a bit more interesting

ServerEvents.recipes(event => {
	
		const output = [
	"mining_dims:mining_teleporter",
	"mining_dims:caving_teleporter",
	"mining_dims:climbing_teleporter",
	"mining_dims:nethering_teleporter",
	"mining_dims:hunting_teleporter",
	"customportals:weak_enhancer_rune",
	"customportals:gate_rune",
	"dragonloot:dragon_bow",
	"dragonloot:dragon_crossbow",
	"twigs:polished_calcite_bricks",
	"twigs:polished_calcite_brick_slab",
	"twigs:polished_calcite_brick_stairs",
	"twigs:polished_calcite_brick_wall",
	"blockus:polished_tuff_pressure_plate",
	"blockus:polished_tuff_button",
	"twigs:polished_tuff_bricks",
	"twigs:polished_tuff_brick_slab",
	"twigs:polished_tuff_brick_stairs",
	"twigs:polished_tuff_brick_wall",
	"moretotems:explosive_totem_of_undying",
	"moretotems:stinging_totem_of_undying",
	"moretotems:teleporting_totem_of_undying",
	"mcdw:sword_beestinger",
	"twigs:stripped_bamboo_table",
	"variantbarrels:stripped_bamboo_barrel",
	"minecraft:bundle",
	"aurorasdeco:sturdy_stone",
	"blockus:cracked_polished_basalt_bricks",
	"architects_palette:basalt_tile_vertical_slab",
	"charm:azalea_chest",
	"charm:azalea_barrel",
	"charm:azalea_bookshelf",
	"charm:azalea_bookcase",
	"minecraft:oak_chest_boat",
	"minecraft:spruce_chest_boat",
	"minecraft:birch_chest_boat",
	"minecraft:jungle_chest_boat",
	"minecraft:acacia_chest_boat",
	"minecraft:dark_oak_chest_boat",
	"minecraft:mangrove_chest_boat",
	"aurorasdeco:azalea_chest_boat",
	"aurorasdeco:jacaranda_chest_boat",
	"blockus:white_oak_chest_boat",
	"blockus:bamboo_chest_boat",
	"blockus:charred_chest_boat",
	"immersive_aircraft:hull",
	"immersive_aircraft:engine",
	"immersive_aircraft:boiler",
	"immersive_aircraft:propeller",
	"immersive_aircraft:sail",
	"immersive_aircraft:airship",
	"immersive_aircraft:biplane",
	"immersive_aircraft:gyrodyne"
	];
	
	output.forEach((output) => {
		event.remove({ output: output });
	});
});

ServerEvents.recipes(event => {
	
		event.shaped('mining_dims:mining_teleporter', [
	' L ',
	'ILI',
	' R '
  ], {
	L: 'minecraft:lapis_block',
	R: 'minecraft:blaze_rod',
	I: 'minecraft:iron_block'
	});
	
		event.shaped('mining_dims:caving_teleporter', [
	' S ',
	'ISI',
	' R '
  ], {
	S: 'minecraft:redstone_block',
	R: 'minecraft:blaze_rod',
	I: 'minecraft:iron_block'
	});
	
		event.shaped('mining_dims:climbing_teleporter', [
	' E ',
	'AEA',
	' R '
  ], {
	E: 'xps_additions:essence_crystal',
	R: 'minecraft:blaze_rod',
	A: 'minecraft:amethyst_block'
	});
	
		event.shaped('mining_dims:nethering_teleporter', [
	' Q ',
	'NQN',
	' R '
  ], {
	Q: 'minecraft:quartz_block',
	R: 'minecraft:blaze_rod',
	N: 'minecraft:netherite_scrap'
	});
	
		event.shaped('mining_dims:hunting_teleporter', [
	' C ',
	'MCM',
	' R '
  ], {
	C: 'conjuring:conjuration_essence',
	R: 'minecraft:blaze_rod',
	M: 'minecraft:emerald_block'
	});
	
		event.shaped('customportals:weak_enhancer_rune', [
	'LLL',
	' AL',
	' L '
  ], {
	L: 'minecraft:lapis_block',
	A: 'minecraft:amethyst_block'
	});
	
		event.shaped('customportals:gate_rune', [
	'WWT',
	'WNT',
	'WTT'
  ], {
	W: 'minecraft:weeping_vines',
	T: 'minecraft:twisting_vines',
	N: 'minecraft:netherite_block'
	});
	
		event.shaped('theoneprobe:creativeprobe', [
	'RSR',
	'CGC',
	'RCR'
  ], {
	S: 'minecraft:redstone_block',
	C: 'minecraft:comparator',
	R: 'minecraft:repeater',
	G: 'mcda:gemstone_red'
	});
	
		event.smithing('dragonloot:dragon_bow', 'bigextras:strong_bow', 'dragonloot:dragon_scale');
		event.smithing('dragonloot:dragon_crossbow', 'bigextras:strong_crossbow', 'dragonloot:dragon_scale');
		
		event.shaped('4x twigs:polished_calcite_bricks', [
	'CC ',
	'CC ',
	'   '
  ], {
	C: 'aurorasdeco:polished_calcite'
	});
	
		event.shaped('6x twigs:polished_calcite_brick_slab', [
	'CCC',
	'   ',
	'   '
  ], {
	C: 'aurorasdeco:polished_calcite'
	});
	
		event.shaped('4x twigs:polished_calcite_brick_stairs', [
	'C  ',
	'CC ',
	'CCC'
  ], {
	C: 'aurorasdeco:polished_calcite'
	});
	
		event.shaped('6x twigs:polished_calcite_brick_wall', [
	'CCC',
	'CCC',
	'   '
  ], {
	C: 'aurorasdeco:polished_calcite'
	});
	
		event.stonecutting('twigs:polished_calcite_bricks', 'aurorasdeco:polished_calcite');
		event.stonecutting('2x twigs:polished_calcite_brick_slab', 'aurorasdeco:polished_calcite');
		event.stonecutting('1x twigs:polished_calcite_brick_stairs', 'aurorasdeco:polished_calcite');
		event.stonecutting('1x twigs:polished_calcite_brick_wall', 'aurorasdeco:polished_calcite');
		
		event.shaped('blockus:polished_tuff_pressure_plate', [
	'TT ',
	'   ',
	'   '
  ], {
	T: 'aurorasdeco:polished_tuff'
	});
	
		event.shaped('4x twigs:polished_tuff_bricks', [
	'TT ',
	'TT ',
	'   '
  ], {
	T: 'aurorasdeco:polished_tuff'
	});
	
		event.shaped('6x twigs:polished_tuff_brick_slab', [
	'TTT',
	'   ',
	'   '
  ], {
	T: 'aurorasdeco:polished_tuff'
	});
	
		event.shaped('4x twigs:polished_tuff_brick_stairs', [
	'T  ',
	'TT ',
	'TTT'
  ], {
	T: 'aurorasdeco:polished_tuff'
	});
	
		event.shaped('6x twigs:polished_tuff_brick_wall', [
	'TTT',
	'TTT',
	'   '
  ], {
	T: 'aurorasdeco:polished_tuff'
	});
	
		event.stonecutting('twigs:polished_tuff_bricks', 'aurorasdeco:polished_tuff');
		event.stonecutting('2x twigs:polished_tuff_brick_slab', 'aurorasdeco:polished_tuff');
		event.stonecutting('1x twigs:polished_tuff_brick_stairs', 'aurorasdeco:polished_tuff');
		event.stonecutting('1x twigs:polished_tuff_brick_wall', 'aurorasdeco:polished_tuff');
		event.shapeless('blockus:polished_tuff_button', ['aurorasdeco:polished_tuff']);
		
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:0}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_white'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:1}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_orange'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:2}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_magenta'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:3}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_light_blue'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:4}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_yellow'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:5}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_lime'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:6}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_pink'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:7}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_gray'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:8}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_light_gray'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:9}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_cyan'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:10}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_purple'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:11}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_blue'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:12}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_brown'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:13}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_green'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:14}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_red'
	});
	
		event.shaped(Item.of('travelersbackpack:standard', '{SleepingBagColor:15}'), [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: 'comforts:sleeping_bag_black'
	});
	
		event.shaped('moretotems:explosive_totem_of_undying', [
	'BBB',
	'BUB',
	'BBB'
  ], {
	U: 'minecraft:totem_of_undying',
	B: 'supplementaries:bomb'
	});
	
		event.shaped('moretotems:stinging_totem_of_undying', [
	'BBB',
	'BUB',
	'BBB'
  ], {
	U: 'minecraft:totem_of_undying',
	B: 'the_bumblezone:bee_stinger'
	});
	
		event.shaped('moretotems:teleporting_totem_of_undying', [
	'SSS',
	'SUS',
	'SSS'
  ], {
	U: 'minecraft:totem_of_undying',
	S: 'waystones:warp_stone'
	});
	
		event.shaped('mcdw:sword_beestinger', [
	' IB',
	'GRI',
	'SG '
  ], {
	R: 'mcdw:sword_rapier',
	B: 'the_bumblezone:bee_stinger',
	I: 'minecraft:iron_nugget',
	G: 'minecraft:gold_ingot',
	S: 'minecraft:stick'
	});
	
		event.shaped('twigs:stripped_bamboo_table', [
	'SSS',
	'P P',
	'P P'
  ], {
	S: 'blockus:bamboo_slab',
	P: 'blockus:bamboo_planks'
	});
	
		event.shaped('variantbarrels:stripped_bamboo_barrel', [
	'PSP',
	'P P',
	'PSP'
  ], {
	S: 'blockus:bamboo_slab',
	P: 'blockus:bamboo_planks'
	});
	
		event.shaped('charm:white_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:white_wool'
	});
	
		event.shaped('charm:orange_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:orange_wool'
	});
	
		event.shaped('charm:magenta_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:magenta_wool'
	});
	
		event.shaped('charm:light_blue_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:light_blue_wool'
	});
	
		event.shaped('charm:yellow_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:yellow_wool'
	});
	
		event.shaped('charm:lime_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:lime_wool'
	});
	
		event.shaped('charm:pink_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:pink_wool'
	});
	
		event.shaped('charm:gray_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:gray_wool'
	});
	
		event.shaped('charm:light_gray_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:light_gray_wool'
	});
	
		event.shaped('charm:cyan_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:cyan_wool'
	});
	
		event.shaped('charm:purple_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:purple_wool'
	});
	
		event.shaped('charm:blue_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:blue_wool'
	});
	
		event.shaped('charm:brown_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:brown_wool'
	});
	
		event.shaped('charm:green_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:green_wool'
	});
	
		event.shaped('charm:red_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:red_wool'
	});
	
		event.shaped('charm:black_bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'minecraft:black_wool'
	});
	
		event.smithing('tokenablefurnaces:iron_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:iron_token_item');
		event.smithing('tokenablefurnaces:gold_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:gold_token_item');
		event.smithing('tokenablefurnaces:diamond_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:diamond_token_item');
		event.smithing('tokenablefurnaces:netherite_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:netherite_token_item');
		event.smithing('tokenablefurnaces:amethyst_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:amethyst_token_item');
		event.smithing('tokenablefurnaces:iron_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:omnitoken_item');
		event.smithing('tokenablefurnaces:gold_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:omnitoken_item');
		event.smithing('tokenablefurnaces:diamond_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:omnitoken_item');
		event.smithing('tokenablefurnaces:netherite_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:omnitoken_item');
		event.smithing('tokenablefurnaces:amethyst_bundle_item', '#charm:colored_bundles', 'tokenablefurnaces:omnitoken_item');
		
		event.shaped('toms_storage:ts.trim', [
	'PSP',
	'SCS',
	'PSP'
  ], {
	P: '#minecraft:planks',
	S: 'minecraft:stick',
	C: '#c:wooden_chests'
	});
	
		event.shaped('toms_storage:ts.storage_terminal', [
	'PRP',
	'CSG',
	'PRP'
  ], {
	P: '#minecraft:planks',
	S: 'minecraft:glowstone',
	C: '#c:wooden_chests',
	R: 'minecraft:comparator',
	G: 'minecraft:glass'
	});
	
		event.shaped('toms_storage:ts.open_crate', [
	'PSP',
	'PCP',
	'PTP'
  ], {
	P: '#minecraft:planks',
	S: 'minecraft:stick',
	C: '#c:wooden_chests',
	T: '#minecraft:wooden_trapdoors'
	});
	
		event.shaped('toms_storage:ts.inventory_proxy', [
	'PTP',
	'TCT',
	'PTP'
  ], {
	P: '#minecraft:planks',
	C: '#c:wooden_chests',
	T: '#minecraft:wooden_trapdoors'
	});
	
		event.shaped('toms_storage:ts.inventory_cable_connector', [
	' QP',
	'ICE',
	' DP'
  ], {
	P: '#minecraft:planks',
	Q: 'minecraft:quartz',
	C: '#c:wooden_chests',
	I: 'toms_storage:ts.inventory_cable',
	E: 'minecraft:ender_pearl',
	D: 'minecraft:diamond'
	});
	
		event.shaped('toms_storage:ts.inventory_cable', [
	'SPS',
	'TCT',
	'SPS'
  ], {
	P: '#minecraft:planks',
	S: 'minecraft:stick',
	C: '#c:wooden_chests',
	T: '#minecraft:wooden_trapdoors'
	});
	
		event.shapeless('minecraft:trapped_chest', ['#c:wooden_chests', 'minecraft:tripwire_hook']);
	
		event.shaped('aurorasdeco:copper_hopper', [
	'I I',
	'ICI',
	' I '
  ], {
	C: '#c:wooden_chests',
	I: 'minecraft:copper_ingot'
	});
	
		event.shaped('extraalchemy:potion_bag', [
	' B ',
	'LCL',
	'LLL'
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:glass_bottle',
	L: '#c:leathers'
	});
	
		event.shaped('extended_drawers:single_drawer', [
	'LPL',
	'PCP',
	'LPL'
  ], {
	C: '#c:wooden_chests',
	P: '#minecraft:planks',
	L: '#minecraft:logs'
	});
	
		event.shaped('extended_drawers:quad_drawer', [
	'LCL',
	'CPC',
	'LCL'
  ], {
	C: '#c:wooden_chests',
	P: '#minecraft:planks',
	L: '#minecraft:logs'
	});
	
		event.shaped('extended_drawers:double_drawer', [
	'LPL',
	'CPC',
	'LPL'
  ], {
	C: '#c:wooden_chests',
	P: '#minecraft:planks',
	L: '#minecraft:logs'
	});
	
		event.shaped('bagofholding:leather_bag_of_holding', [
	'SLS',
	'LCL',
	'WLW'
  ], {
	C: '#c:wooden_chests',
	L: '#minecraft:leathers',
	S: '#minecraft:string',
	W: '#minecraft:wool'
	});
	
		event.shaped('minecraft:bundle', [
	'   ',
	'W W',
	' W '
  ], {
	W: 'earthtojavamobs:rainbow_wool'
	});
	
		event.shaped('drinkbeer:beer_barrel', [
	'BI ',
	'   ',
	'   '
  ], {
	B: '#c:wooden_barrels',
	I: 'minecraft:iron_ingot'
	});
	
		event.shaped('drinkbeer:lekas_call_bell', [
	'N  ',
	'I  ',
	'W  '
  ], {
	N: 'create:copper_nugget',
	I: 'minecraft:copper_ingot',
	W: 'minecraft:brown_wool'
	});
	
		event.shaped('charm:raid_horn', [
	'BGB',
	'BHB',
	'IBI'
  ], {
	H: '#c:horns',
	B: 'create:brass_sheet',
	I: 'graveyard:dark_iron_ingot',
	G: 'mcda:gemstone_green'
	});
	
		event.shaped('charm:raid_horn', [
	'BGB',
	'BHB',
	'IBI'
  ], {
	H: '#c:copper_horns',
	B: 'create:brass_sheet',
	I: 'graveyard:dark_iron_ingot',
	G: 'mcda:gemstone_green'
	});
	
		event.shaped('aurorasdeco:sturdy_stone', [
	'CS ',
	'SC ',
	'   '
  ], {
	S: 'minecraft:stone',
	C: '#c:cobblestone'
	});
	
		event.shaped('guardiansgalore:blaze_bell', [
	' C ',
	'III',
	'IRI'
  ], {
	C: '#c:chains',
	I: 'minecraft:gold_ingot',
	R: 'minecraft:blaze_rod'
	});
	
		event.shaped('bosses_of_mass_destruction:blazing_eye', [
	'NCN',
	'RER',
	'NHN'
  ], {
	R: 'minecraft:blaze_rod',
	H: 'wardenloot:warden_heart',
	N: 'minecraft:netherite_block',
	C: 'friendsandfoes:wildfire_crown',
	E: 'greater_eye:greater_eye_nether'
	});
	
		event.smelting('blockus:cracked_polished_basalt_bricks', 'twigs:polished_basalt_bricks');
		
		event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book":"minekea:minekea_catalogue"}'), [
	'BP ',
	'   ',
	'   '
  ], {
	B: 'minecraft:book',
	P: 'minekea:tools/painter'
	});
	
		event.stonecutting('architects_palette:basalt_tile_vertical_slab', 'twigs:polished_basalt_bricks');
		event.stonecutting('blockus:polished_basalt_brick_slab', 'twigs:polished_basalt_bricks');
		event.stonecutting('blockus:polished_basalt_brick_stairs', 'twigs:polished_basalt_bricks');
		event.stonecutting('blockus:polished_basalt_brick_wall', 'twigs:polished_basalt_bricks');
	
		event.shaped('charm:azalea_chest', [
	'PPP',
	'P P',
	'PPP'
  ], {
	P: 'aurorasdeco:azalea_planks'
	});
	
		event.shaped('charm:azalea_barrel', [
	'PSP',
	'P P',
	'PSP'
  ], {
	P: 'aurorasdeco:azalea_planks',
	S: 'aurorasdeco:azalea_slab'
	});
	
		event.shaped('charm:azalea_bookcase', [
	'SSS',
	'SBS',
	'SSS'
  ], {
	S: 'aurorasdeco:azalea_slab',
	B: 'variant_bookshelves:block/azalea_bookshelf'
	});
	
		event.shaped('charm:azalea_bookcase', [
	'SSS',
	'SBS',
	'SSS'
  ], {
	S: 'aurorasdeco:azalea_slab',
	B: 'variant_bookshelves:block/flowering_azalea_bookshelf'
	});
	
		event.shaped('minecraft:oak_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:oak_boat'
	});
	
		event.shaped('minecraft:spruce_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:spruce_boat'
	});
	
		event.shaped('minecraft:birch_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:birch_boat'
	});
	
		event.shaped('minecraft:jungle_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:jungle_boat'
	});
	
		event.shaped('minecraft:acacia_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:acacia_boat'
	});
	
		event.shaped('minecraft:dark_oak_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:dark_oak_boat'
	});
	
		event.shaped('minecraft:mangrove_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'minecraft:mangrove_boat'
	});
	
		event.shaped('aurorasdeco:azalea_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'aurorasdeco:azalea_boat'
	});
	
		event.shaped('aurorasdeco:jacaranda_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'aurorasdeco:jacaranda_boat'
	});
	
		event.shaped('blockus:white_oak_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'blockus:white_oak_boat'
	});
	
		event.shaped('blockus:bamboo_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'blockus:bamboo_boat'
	});
	
		event.shaped('blockus:charred_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'blockus:charred_boat'
	});
	
		event.shaped('charm:ebony_chest_boat', [
	'CB ',
	'   ',
	'   '
  ], {
	C: '#c:wooden_chests',
	B: 'charm:ebony_boat'
	});
	
		event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book":"mythicmounts:mythical_mounts"}'), [
	'BP ',
	'   ',
	'   '
  ], {
	B: 'minecraft:book',
	P: 'mythicmounts:summoning_staff'
	});
	
		event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book":"extraalchemy:alchemist_guide"}'), [
	'BP ',
	'   ',
	'   '
  ], {
	B: 'minecraft:book',
	P: 'minecraft:glass_bottle'
	});
	
		event.shaped('immersive_aircraft:hull', [
	'LLL',
	'SSS',
	'LLL'
  ], {
	L: '#minecraft:logs',
	S: 'create:iron_sheet'
	});
	
		event.shaped('immersive_aircraft:engine', [
	'PQP',
	'MPM',
	'QBQ'
  ], {
	P: 'create:propeller',
	M: 'create:mechanical_piston',
	Q: 'minecraft:quartz_block',
	B: 'immersive_aircraft:boiler'
	});
	
		event.shaped('immersive_aircraft:boiler', [
	'CCC',
	'CWC',
	'CBC'
  ], {
	C: 'minecraft:copper_ingot',
	B: 'create:blaze_burner',
	W: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');
	
		event.shaped('immersive_aircraft:airship', [
	'SSS',
	'SSS',
	'HHE'
  ], {
	H: 'immersive_aircraft:hull',
	S: 'create:white_sail',
	E: 'immersive_aircraft:engine'
	});
	
		event.shaped('immersive_aircraft:biplane', [
	' H ',
	'PHE',
	' H '
  ], {
	H: 'immersive_aircraft:hull',
	P: 'create:propeller',
	E: 'immersive_aircraft:engine'
	});
	
		event.shaped('immersive_aircraft:gyrodyne', [
	'SP ',
	'HEH',
	'  S'
  ], {
	H: 'immersive_aircraft:hull',
	P: 'create:propeller',
	E: 'immersive_aircraft:engine',
	S: 'create:white_sail'
	});
});