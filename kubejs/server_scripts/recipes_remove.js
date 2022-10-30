ServerEvents.recipes(event => {
	
    const output = [
    "minegate:woodcutter"
	];
	
	output.forEach((output) => {
        event.remove({ output: output });
	});
});
