demo.stage7 = function(){};
demo.stage7.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#669999';
        console.log('stage7');
        addChangeStateEventListeners();
	},
	update: function(){}
};