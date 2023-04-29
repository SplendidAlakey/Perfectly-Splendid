// priority: 2

// Removes limestone from Blockus, because Create already adds it

WorldgenEvents.remove(event => {
	event.removeOres((props) => {
		props.blocks = ["blockus:limestone"]
	})
	event.removeFeatureById('underground_ores', ['blockus:ore_limestone_upper', 'blockus:ore_limestone_lower'])
})