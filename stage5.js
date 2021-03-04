demo.stage5 = function(){};
demo.stage5.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ff00ff';
        console.log('stage5');
        addChangeStateEventListeners();
	},
	update: function(){}
};