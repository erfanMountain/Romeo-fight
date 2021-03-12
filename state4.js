demo.state4 = function(){};
demo.state4.prototype = {
	preload: function(){},
	create: function(){
		game.state.backgroundColor = '#ff6600';
        console.log('state4');
        addChangeStateEventListeners();
	},
	update: function(){}
};