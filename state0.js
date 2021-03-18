var demo = {}, positonX = 1400 / 2, positionY = 900 / 2, romeo, speed = 5;
demo.state0 = function(){};
demo.state0.prototype = {
	preload: function(){
        game.load.image('Romeo', 'assets/sprites/Romeo.png')
        game.load.image('back', 'assets/back/back.png')
    },
	create: function(){
	    game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#000000';
		console.log('stage0');
        //Here I am adding the eventlistener so we can change the stare easily. each keyword in keyboard has specific value and this event listener is for one key and the valye is 40 but I need to press one in the keyboard, here changeState is a callback function
        // add(listener,listenerContext,priority,args)
        //game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //It is scalling the canvas for every browser so when we will the shrink the canvas it will be compatible with the browser.
        var back = game.add.sprite(0,0,'back');
        romeo = game.add.sprite(positonX, positionY, 'Romeo');
        romeo.anchor.x = 0.5;
        romeo.anchor.y = 0.5;
        romeo.scale.setTo(0.8,0.8);
        game.physics.enable(romeo);
        romeo.body.collideWorldBounds = true;

        game.camera.follow(romeo);
        game.camera.deadzone = new Phaser.Rectangle(positonX - 300, 0, 600, 1000);
	},
    // Here Phaser.keyboard.RIGHT is keycode position
	update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            romeo.scale.setTo(0.8,0.8);
            romeo.x += speed; 
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            romeo.scale.setTo(-0.8,0.8);
            romeo.x -= speed; 
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            romeo.y -= speed;
            if (romeo.y < 404) {
                romeo.y = 404;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            romeo.y += speed; 
        }
    }
};

function changeState(i, stateNum){
    console.log('state' + stateNum);
    game.state.start('state' + stateNum);  
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
        addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
}