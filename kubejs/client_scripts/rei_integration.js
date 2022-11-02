// priority: 0

// Remove REI entries for deleted recipes.

REIEvents.hide('item', event => {
    event.hide([
		'extraalchemy:empty_vial'
    ])
})