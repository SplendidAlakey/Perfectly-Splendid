// Tweak recipes for:
// Mining Dimensions
// Custom Portals
// Add a recipe for Creative Probe
// DragonLoot

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
	"dragonloot:dragon_crossbow"
	];
	
	output.forEach((output) => {
        event.remove({ output: output });
	});
});

ServerEvents.recipes(event => {
	
		event.shaped('1x mining_dims:mining_teleporter', [
    ' L ',
    'ILI',
    ' R '
  ], {
    L: 'minecraft:lapis_block',
    R: 'minecraft:blaze_rod',
	I: 'minecraft:iron_block'
	});
	
		event.shaped('1x mining_dims:caving_teleporter', [
    ' S ',
    'ISI',
    ' R '
  ], {
    S: 'minecraft:redstone_block',
    R: 'minecraft:blaze_rod',
	I: 'minecraft:iron_block'
	});
	
		event.shaped('1x mining_dims:climbing_teleporter', [
    ' E ',
    'AEA',
    ' R '
  ], {
    E: 'xps_additions:essence_crystal',
    R: 'minecraft:blaze_rod',
	A: 'minecraft:amethyst_block'
	});
	
		event.shaped('1x mining_dims:nethering_teleporter', [
    ' Q ',
    'NQN',
    ' R '
  ], {
    Q: 'minecraft:quartz_block',
    R: 'minecraft:blaze_rod',
	N: 'minecraft:netherite_scrap'
	});
	
		event.shaped('1x mining_dims:hunting_teleporter', [
    ' C ',
    'MCM',
    ' R '
  ], {
    C: 'conjuring:conjuration_essence',
    R: 'minecraft:blaze_rod',
	M: 'minecraft:emerald_block'
	});
	
		event.shaped('1x customportals:weak_enhancer_rune', [
    'LLL',
    ' AL',
    ' L '
  ], {
    L: 'minecraft:lapis_block',
    A: 'minecraft:amethyst_block'
	});
	
		event.shaped('1x customportals:gate_rune', [
    'WWT',
    'WNT',
    'WTT'
  ], {
    W: 'minecraft:weeping_vines',
    T: 'minecraft:twisting_vines',
	N: 'minecraft:netherite_block'
	});
	
		event.shaped('1x theoneprobe:creativeprobe', [
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
});