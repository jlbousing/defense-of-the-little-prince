//SE CREA UNA INSTANCIA DE PHASER
var game = new Phaser.Game(800,600,Phaser.CANVAS,"gameContainer");

game.state.add("Boot", bootState);
game.state.add("Preload", loadState);
game.state.add("Menu", menuState);
game.state.add("Credits", creditState);
game.state.add("Game", gameState);

game.state.start("Boot");