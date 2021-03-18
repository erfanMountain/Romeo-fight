demo.state1 = function(){};

var moves, velocit = 500, rocks, grass;

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
		grass = map.createLayer('grass');
		rocks = map.createLayer('rocks');

		romeo = game.add.sprite(200, 200, 'Romeo');
		romeo.scale.setTo(0.2,0.2);
		game.physics.enable(romeo);


		map.setCollisionBetween(1, 9, true, 'rocks'); // setting the collision with sprite according to json file, index 1-9 repesent rock tiles, 10 index represent normal grass type and 11 represent the darker grass type
		map.setCollision(11, true, 'grass'); // It will hit darkish grass layer
		moves = game.input.keyboard.createCursorKeys();
	},
	/* Inside the update function we are using the logic for moving the sprite inside the tiled
	map
	*/
	update: function(){
		game.physics.arcade.collide(romeo, rocks, function (){console.log('Romeo is hitting the  rocks:');}); // here we are using the annonymys function
		game.physics.arcade.collide(romeo, grass, function (){console.log('Romeo is hitting the  grass:');}); // here we are using the annonymys function

		if (moves.up.isDown) {
			romeo.body.velocity.y = -velocit; // we are using the velocity for coliding sprite with the rock
		}
		else if(moves.down.isDown) {
			romeo.body.velocity.y = velocit; // we are using the velocity for coliding with the rock
		}
		else {
			romeo.body.velocity.y = 0;
		}
		if(moves.left.isDown) {
			romeo.body.velocity.x = -velocit; // we are using the velocity for coliding with the rock
		}
		else if(moves.right.isDown) {
			romeo.body.velocity.x = velocit; // we are using the velocity for coliding with the rock
		}
		else {
			romeo.body.velocity.x = 0;
		}

	}
};
