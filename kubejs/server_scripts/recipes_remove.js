ServerEvents.recipes(event => {
	
    const output = [
	"extraalchemy:empty_vial"
	];
	
	output.forEach((output) => {
        event.remove({ output: output });
	});
});