demo.state1 = function(){};
demo.state1.prototype = {
preload: function(){
	/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
		game.load.tilemap('grass', 'assets/maps/grass.json',
		null, Phaser.Tilemap.TILED_JSON);
		game.load.image('gTiles', 'assets/maps/gTiles.png');
		game.load.image('rTiles', 'assets/maps/rTiles.png');
		},
	create: function(){
		game.state.backgroundColor = '#cc99ff';
        //game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        //game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 0); 
        addChangeStateEventListeners();
        var map = game.add.tilemap('grass');
        map.addTilesetImage('gTiles');
        map.addTilesetImage('rTiles');
        var rock = map.createLayer('rock');
        var  Tile = map.createLayer('Tile Layer 1');
	},
	update: function(){}
};
