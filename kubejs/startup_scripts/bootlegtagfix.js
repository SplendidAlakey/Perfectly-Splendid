// priority: 1

// The most bootleg fix you've ever seen in your life. Create a fake item to let the #minecraft:boats tag work.

StartupEvents.registry('item', event => {
	
	event.create('bambooeverything:dry_bamboo_raft')
	
})