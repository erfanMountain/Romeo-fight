demo.state1 = function(){};
demo.state1.prototype = {
	preload: function(){
		game.load.tilemap('field', 'assets/tilemaps/field.json',
			null, Phaser.Tilemap.TILED_JSON);
		game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
		game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
		game.load.image('Romeo', 'assets/sprites/Romeo.png');
	},
	create: function(){
		game.physics.startSystem(Phaser.Physics.Arcade)
		game.state.backgroundColor = '#cc99ff';
		console.log('state1');
		//game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
		//game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 0);
		addChangeStateEventListeners();
		var map = game.add.tilemap('field');
		map.addTilesetImage('grassTiles');
		map.addTilesetImage('rockTiles');
		var grass = map.createLayer('grass');
		var  rock = map.createLayer('rocks');

		romeo = game.add.sprite(200, 200, 'Romeo');
		romeo.scale.setTo(0.2,0.2);

	},
	update: function(){}
};
