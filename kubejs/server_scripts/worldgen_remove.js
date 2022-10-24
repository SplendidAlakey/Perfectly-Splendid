// Removes limestone from Blockus. Use limestone from Create, instead.

WorldgenEvents.remove(event => {
	event.removeOres((props) => {
		props.blocks = ["blockus:limestone"]
    })
	event.removeFeatureById('underground_ores', ['blockus:ore_limestone_upper', 'blockus:ore_limestone_lower'])
})
