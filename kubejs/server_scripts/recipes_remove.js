ServerEvents.recipes(event => {
	
    const output = [
    "minegate:woodcutter",
	"extraalchemy:empty_vial"
	];
	
	output.forEach((output) => {
        event.remove({ output: output });
	});
});