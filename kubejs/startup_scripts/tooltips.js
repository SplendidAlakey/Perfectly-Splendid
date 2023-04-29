// priority: 3

// Just adds a fluff tooltip to the vanilla bundle

ItemEvents.tooltip(tooltip => {

	tooltip.addAdvanced('minecraft:bundle', (item, advanced, text) => {
		text.add(1, Text.gold('Totally not a vanilla bundle.'))
	})

})