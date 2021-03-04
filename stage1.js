demo.stage1 = function(){};
demo.stage1.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#cc99ff';
		console.log('stage1');
        //game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        //game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 0); 
        addChangeStateEventListeners();
	},
	update: function(){}
};
