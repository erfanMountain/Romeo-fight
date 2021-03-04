demo.stage8 = function(){};
demo.stage8.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ff00ff';
        console.log('stage8');
        addChangeStateEventListeners();
	},
	update: function(){}
};