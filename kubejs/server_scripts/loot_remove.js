LootJS.modifiers((event) => {
	event
		.addEntityLootModifier("minecraft:bee")
		.removeLoot("mcdw:item_bee_stinger");
		
	event
		.addEntityLootModifier("minecraft:ravager")
		.removeLoot("takesapillage:ravager_horn");
});