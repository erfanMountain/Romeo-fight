demo.stage3 = function(){};
demo.stage3.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ffff66';
        console.log('stage3');
        addChangeStateEventListeners();
	},
	update: function(){}
};