LootJS.modifiers((event) => {
	event
		.addEntityLootModifier("minecraft:bee")
		.removeLoot("mcdw:item_bee_stinger");
});