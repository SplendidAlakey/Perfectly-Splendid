// Remove starting bloat
PlayerEvents.loggedIn(event => {
	// Check if the player is new
	if (event.player.persistentData.firstLogin == null) {
	// Wait a bit
	event.server.scheduleInTicks(1, callback => {
	// Remove items
	event.player.inventory.clear(`theoneprobe:probenote`)
	})
  }
})