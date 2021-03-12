demo.state3 = function(){};
demo.state3.prototype = {
	preload: function(){},
	create: function(){
		game.state.backgroundColor = '#ffff66';
        console.log('state3');
        addChangeStateEventListeners();
	},
	update: function(){}
};