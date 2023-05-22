// priority: 3

ItemEvents.tooltip(tooltip => {

// Just adds a fluff tooltip to the vanilla bundle

	tooltip.addAdvanced('minecraft:bundle', (item, advanced, text) => {
		text.add(1, Text.gold('Totally not a vanilla bundle.'))
	});

// Caution tooltip for the enchanting table, meant to hopefully prevent wasting levels on trying to apply more enchantments, than possible

	tooltip.addAdvanced('minecraft:enchanting_table', (item, advanced, text) => {
		text.add(1, Text.red('Bear enchantment weights in mind or you will waste levels!')),
		text.add(2, Text.red('Usually you can fit 2 enchantments on 1 piece of gear.'))
	});

})