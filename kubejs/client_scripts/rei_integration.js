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
	'#aurorasdeco:sleeping_bags'
	])
})