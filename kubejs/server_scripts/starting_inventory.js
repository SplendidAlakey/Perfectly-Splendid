// Remove starting bloat
PlayerEvents.loggedIn(event => {
	// Check if player doesn't have "starting_items" stage yet
	if (event.player.persistentData.firstLogin == null) {
	// Add the stage
	event.server.scheduleInTicks(50, callback => {
	// Remove items
	event.server.runCommandSilent(`clear @p theoneprobe:probenote`)
	})
  }
})