jQuery.ajax = function(oConfig){
	switch(oConfig.url){
		default:
			oConfig.success([
				{
					text: 'Test 1',
					done: true,
					id: 1
				},
				{
					text: 'Test 2',
					done: true,
					id: 2
				},
				{
					text: 'Test 3',
					done: true,
					id: 3
				}
			]);
			break;
	}
}

