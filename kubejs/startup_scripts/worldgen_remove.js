// Removes limestone from Blockus
// This used to be a startup script, I left it in both folders just in case
// I think only removing by feature ID is needed, but I used both because removeOres used to not work

WorldgenEvents.remove(event => {
	event.removeOres((props) => {
		props.blocks = ["blockus:limestone"]
    })
	event.removeFeatureById('underground_ores', ['blockus:ore_limestone_upper', 'blockus:ore_limestone_lower'])
})