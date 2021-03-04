demo.stage2 = function(){};
demo.stage2.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#00cc99';
        console.log('stage2');
        addChangeStateEventListeners();
	},
	update: function(){}
};