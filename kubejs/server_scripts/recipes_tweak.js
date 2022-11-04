// Tweak recipes for:
// Mining Dimensions
// Custom Portals
// Add a recipe for Creative Probe
// DragonLoot
// Compatibility recipes between Twigs, Aurora's Decorations and Blockus
// Compatibility recipes between Comforts and Traveler's Backpack
// Added tags for chests in Traveler's Backpack recipe

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
	"twigs:polished_tuff_brick_wall"
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
		
		event.shaped('travelersbackpack:standard', [
	'LGL',
	'TCT',
	'LBL'
  ], {
	L: 'minecraft:leather',
	G: 'minecraft:gold_ingot',
	T: 'travelersbackpack:backpack_tank',
	C: '#c:wooden_chests',
	B: '#comforts:sleeping_bags'
	});
});