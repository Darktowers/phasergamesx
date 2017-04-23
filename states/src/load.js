var loadState= {
	
	// The preload function is another standard Phaser function that we
	// use to define and load our assets
    preload: function() {
        
    game.load.image('tomate', 'assets/tomate_small.png');
    game.load.image('papas', 'assets/papas.png');
    game.load.image('nube', 'assets/nube1.png');
    game.load.image('nube2', 'assets/nube2.png');
    game.load.image('nube3', 'assets/nube3.png');
    game.load.image('nube4', 'assets/nube4.png');
    game.load.image('background', 'assets/fondo.jpg');
    game.load.image('gameover', 'assets/gameOver.jpg');
    game.load.image('wingame', 'assets/winGame.jpg');
    game.load.audio('melody', ['assets/audio/melody.ogg', 'assets/audio/melody.mp3']);
    game.load.physics('physicsData', 'assets/fisicas.json');

    
    },
    
    create: function() {
        // Call the menu state
        game.state.start('play');
    }    
};
