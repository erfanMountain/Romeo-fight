demo.stage4 = function(){};
demo.stage4.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ff6600';
        console.log('stage4');
        addChangeStateEventListeners();
	},
	update: function(){}
};