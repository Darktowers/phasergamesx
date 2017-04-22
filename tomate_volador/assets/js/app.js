var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'tomateGame', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image('tomate', 'assets/tomate_small.png');
    game.load.image('papas', 'assets/papas.png');
    game.load.image('nube', 'assets/nube1.png');
    game.load.image('nube2', 'assets/nube2.png');
    game.load.image('nube3', 'assets/nube3.png');
    game.load.image('nube4', 'assets/nube4.png');
    game.load.image('background', 'assets/fondo.jpg');
    game.load.physics('physicsData', 'assets/fisicas.json');
    

}

var tomate;
var mouseBody;
var mouseConstraint;
var nubes;
var papas;
function create() {
    var nubear = ['nube','nube2','nube3','nube4'];
     game.add.tileSprite(0, 0, 320, 1278, 'background');   
    game.world.setBounds(0, 0, 320, 1278);
    //  Enable p2 physics
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.gravity.y = 200;
    tomate = game.add.sprite(150, 50, 'tomate');
    papas = game.add.sprite(100, 1200, 'papas');
    
    //  Create collision group for the blocks
    var blockCollisionGroup = game.physics.p2.createCollisionGroup();
    
    //  This part is vital if you want the objects with their own collision groups to still collide with the world bounds
    //  (which we do) - what this does is adjust the bounds to use its own collision group.
    game.physics.p2.updateBoundsCollisionGroup();
    
    //  Enable the physics bodies on all the sprites
    
    
  
    
    // create physics body for mouse which we will use for dragging clicked bodies
    mouseBody = new p2.Body();
    game.physics.p2.world.addBody(mouseBody);
        
    // attach pointer events
    game.input.onDown.add(click, this);
    game.input.onUp.add(release, this);

    game.input.addMoveCallback(move, this);
    game.camera.follow(tomate);
    game.physics.p2.enable(tomate, false);
    
    tomate.body.clearShapes();
    tomate.body.loadPolygon('physicsData', 'tomate');
    tomate.body.setCollisionGroup(blockCollisionGroup);
    tomate.body.collides([blockCollisionGroup]);

    
    game.physics.p2.enable(papas, false);
    papas.body.clearShapes();
    papas.body.loadPolygon('physicsData', 'papas');
    papas.body.setCollisionGroup(blockCollisionGroup);
    papas.body.collides([blockCollisionGroup]);
    papas.body.static = true;
    
    //Nubes
    var nubes = game.add.group();
    nubes.enableBody = true;
    nubes.physicsBodyType = Phaser.Physics.P2JS;  
    var yposition = 0;
    for (var i = 0; i < 10; i++)
    {
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        var nubesprite = Math.floor((Math.random() * 3) + 1);
        yposition = yposition+100;
        var nube = nubes.create(Math.floor((Math.random() * 320) + 1), yposition , nubear[nubesprite]);
        nube.body.setCollisionGroup(blockCollisionGroup);
        nube.body.collides([blockCollisionGroup]);
        nube.body.static = true;
    }


    
}
function click(pointer) {
    var positionworld = {
        x:pointer.worldX,
        y:pointer.worldY
    }

    var c = 0;
    if(pointer.isDown){
        setTimeout(function(){ release() }, 80);
    }
    var bodies = game.physics.p2.hitTest(positionworld, [ tomate.body ]);

    // p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
    var physicsPos = [game.physics.p2.pxmi(pointer.worldX), game.physics.p2.pxmi(pointer.worldY)];

    if (bodies.length)
    {
        var clickedBody = bodies[0];
        
        var localPointInBody = [0, 0];
        // this function takes physicsPos and coverts it to the body's local coordinate system

        clickedBody.toLocalFrame(localPointInBody, physicsPos);
        
        // use a revoluteContraint to attach mouseBody to the clicked body
        mouseConstraint = this.game.physics.p2.createRevoluteConstraint(mouseBody, [0, 0], clickedBody, [game.physics.p2.mpxi(localPointInBody[0]), game.physics.p2.mpxi(localPointInBody[1]) ]);
    
        
    }   

}

function release() {

    // remove constraint from object's body
    game.physics.p2.removeConstraint(mouseConstraint);

}

function move(pointer) {

    // p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
    mouseBody.position[0] = game.physics.p2.pxmi(pointer.worldX);
    mouseBody.position[1] = game.physics.p2.pxmi(pointer.worldY);

}

function update() {

    
}

function render() {

    game.debug.inputInfo(32, 32);

}