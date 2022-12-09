// priority: 3

ItemEvents.tooltip(tooltip => {

	tooltip.addAdvanced('minecraft:bundle', (item, advanced, text) => {
		text.add(1, Text.gold('Totally not a vanilla bundle.'))
	})

})