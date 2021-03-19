var lathi, bullets, velocity = 1000, newEnemy, bullet, enemyGroup;
demo.state2 = function(){};
demo.state2.prototype = {
	preload: function(){
		game.load.tilemap('field', 'assets/tilemaps/field.json',
			null, Phaser.Tilemap.TILED_JSON);
		game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
		game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
		game.load.image('gola', 'assets/sprites/gola.png');
		game.load.image('lathi', 'assets/sprites/lathi.png');
		game.load.image('bullet', 'assets/sprites/bullet.png');
	},
	create: function(){
		game.state.backgroundColor = '#80ff80';
        addChangeStateEventListeners();


        var map = game.add.tilemap('field');
		map.addTilesetImage('grassTiles');
		map.addTilesetImage('rockTiles');
		grass = map.createLayer('grass');
		rocks = map.createLayer('rocks');

		//Below code is for adding the gola and lathi in the center
		var gola = game.add.sprite(positonX, positionY,'gola');
		gola.anchor.setTo(0.5);
		gola.scale.setTo(0.9);

		//Here we add the group this is because for many sprites if is simillar to each other.
		bullets = game.add.group();
		bullets.enableBody = true;
		bulletsphysicsBodyType = Phaser.Physics.Arcade;
		bullets.createMultiple(500, 'bullet');
		bullets.setAll('checkWorldBounds', true);
		bullets.setAll('outOfBoundsKill', true);
		bullets.setAll('anchor.y', 0.5);

		lathi = game.add.sprite(positonX, positionY,'lathi');
		lathi.anchor.setTo(0.3, 0.5);
		// Here I am adding the enemy
		newEnemy = game.add.sprite(100, 200, 'Romeo');
		game.physics.enable(newEnemy);

		enemyGroup = game.add.group();
		enemyGroup.enableBody = true;
		enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

		for (var i = 0; i < 3; i++) {
			enemyGroup.create(1300, 350 * i + 100, 'Romeo');
		}

		enemyGroup.setAll('anchor.y', 0.5);
		enemyGroup.setAll('anchor.x', 0.5);
		enemyGroup.setAll('scale.x', 0.4);
		enemyGroup.setAll('scale.y', 0.4);
	},
	/*
	  Here below the update function we will add the code for lathi
	 */

	update: function(){
		lathi.rotation = game.physics.arcade.angleToPointer(lathi);
		if (game.input.activePointer.isDown) {
			this.firing();
		}
		game.physics.arcade.overlap(bullets, newEnemy, this.killEnemy);
		game.physics.arcade.overlap(bullets, enemyGroup, this.killGroup);
	},

	/*
	 here we are adding the function for firing
	*/

	firing: function () {
		console.log('I will kill you basterd!');
		var bullet = bullets.getFirstDead();
		bullet.reset(lathi.x, lathi.y);
		game.physics.arcade.moveToPointer(bullet, velocity);
		bullet.rotation = game.physics.arcade.angleToPointer(bullet);
	},
	killEnemy: function () {
		console.log('kill the enemy');
		newEnemy.kill();
		alert("Game is over");
		console.log('Oh no, I am dying!')
	},
	killGroup: function (b, e) {
		b.kill();
		e.kill();
	}
};