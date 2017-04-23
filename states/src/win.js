var winState = {

    create: function() {	
        game.add.tileSprite(0, -50, 320, 1278, 'wingame');
        melody.stop();
    },
    
    // The restart function calls the menu state    
    restart: function () {
        game.state.start('menu');    
    }, 	
}
