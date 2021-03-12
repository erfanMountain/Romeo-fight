demo.state2 = function(){};
demo.state2.prototype = {
	preload: function(){},
	create: function(){
		game.state.backgroundColor = '#00cc99';
        addChangeStateEventListeners();
	},
	update: function(){}
};