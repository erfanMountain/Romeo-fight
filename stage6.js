demo.stage6 = function(){};
demo.stage6.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#3399ff';
        console.log('stage6');
        addChangeStateEventListeners();
	},
	update: function(){}
};