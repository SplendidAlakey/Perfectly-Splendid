// Remove starting bloat
PlayerEvents.loggedIn(event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	// Add the stage
	event.player.stages.add('starting_items')
	// Remove items
	event.server.runCommandSilent(`clear @p theoneprobe:probenote`)
  }
})