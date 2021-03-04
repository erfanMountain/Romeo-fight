demo.stage9 = function(){};
demo.stage9.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ff9900';
        console.log('stage9');
        addChangeStateEventListeners();
	},
	update: function(){}
};