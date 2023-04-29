// priority: 7

// Remove starting inventory bloat

PlayerEvents.loggedIn(event => {
	// Check if the player is new
	if (event.player.persistentData.firstLogin == null) {
	// Wait a bit
	event.server.scheduleInTicks(10, callback => {
	// Remove items
	event.player.inventory.clear(`theoneprobe:probenote`)
	event.player.inventory.clear(Item.of('patchouli:guide_book', '{"patchouli:book":"minekea:minekea_catalogue"}'))
	event.player.inventory.clear(Item.of('patchouli:guide_book', '{"patchouli:book":"simplyswords:runic_grimoire"}'))
	// Remember the player
	event.player.persistentData.firstLogin = 10
	})
  }
})