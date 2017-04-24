var loadState = {

    preload: function () {


    
        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#fff'});

        
        game.load.image("metrohack","assets/pp.jpg");
        game.load.image('plataforma', 'assets/platform.png');
        game.load.image('meteoro', 'assets/meteoro.png');
        game.load.image('planeta', 'assets/planeta.png');
        game.load.image('fondo', 'assets/fondo.png');
        game.load.image('personaje', 'assets/principito.png');
        game.load.image("cesta", "assets/cesta.png");
        game.load.image("fuego","assets/fuego.png");
        
        game.load.audio("fxMeteoro", "assets/magic-fire.wav.mp3");
        game.load.audio("LukeLake", "assets/3 - Luck lake.mp3");

    },

    create: function () {

        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.state.start("Menu");
    }
};