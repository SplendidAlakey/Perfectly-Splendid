// priority: 8

LootJS.modifiers((event) => {
	event
		.addEntityLootModifier("minecraft:ravager")
		.removeLoot("takesapillage:ravager_horn");
});