var gameOverState = {

    create: function() {	
        game.add.tileSprite(0, -50, 320, 1278, 'gameover');
        melody.stop();
    },
    
    // The restart function calls the menu state    
    restart: function () {
        game.state.start('menu');    
    }, 	
}
