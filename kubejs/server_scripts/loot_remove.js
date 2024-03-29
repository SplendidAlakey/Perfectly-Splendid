// priority: 8

LootJS.modifiers((event) => {
	
	// Remove a ravager horn drop added by Takes A Pillage, due to Charm already adding such an item to raids
	
	event.addEntityLootModifier("minecraft:ravager").removeLoot("takesapillage:ravager_horn");
	
	// Remove everlasting beef drop from cows
	
	event.addEntityLootModifier("minecraft:cow").removeLoot("artifacts:everlasting_beef");
	
	// Remove gilded netherite fragment drop from stone golems
	
	event.addEntityLootModifier("adventurez:stone_golem").removeLoot("adventurez:gilded_netherite_fragment");
	
});