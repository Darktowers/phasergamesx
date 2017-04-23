<!doctype html>
<html>
	<style>
		body,html{
			height: 100%;
		}
		body{
			-display: -webkit-flex;
			-moz-display:flex;
			-ms-display:flex;
			-o-display:flex;
			display:flex;
			
			-webkit-justify-content: center;
			-moz-justify-content: center;
			-ms-justify-content: center;
			-o-justify-content: center;
			justify-content: center;	
			width: 100%;
			-ms-align-items:center ;
			align-items:center ; 
			margin: 0;
		}
	</style>
	<head>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    	<script src="phaser.min.js"></script>
    	<script src="src/boot.js"></script>
		<script src="src/load.js"></script>
		<script src="src/menu.js"></script>
		<script src="src/play.js"></script>
		<script src="src/win.js"></script>	
		<script src="src/gameover.js"></script>	
		<script src="src/game.js"></script>			
    </head>
    <body>
		<div id="gameDiv">
		</div>
    </body>
</html>