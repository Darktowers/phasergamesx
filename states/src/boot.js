
// Here we use the 'official name' (bootState) when defining the state
var bootState = {
    
    // The create function is a standard Phaser function, and is
    // automatically called
    create: function () {
		

        // Calling the load state
        game.state.start('load');
    }   
};
