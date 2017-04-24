var plataforma;
var planeta;
var personaje;
var suelo;
var meteoros;
var bandeja;
var txtPuntaje;
var txtVidas;
var txtNivel;
var posicion;
var rangoTiempo = 1000;
var audio;
var fx;

var gameState = {
    
    create: function(){
        
        game.add.sprite(0,0,"fondo");
        
        
        planeta = game.add.sprite(0,400, "planeta");
        
        personaje = game.add.sprite(30,350, "personaje");
        
        bandeja = game.add.sprite(50, game.world.height - 100, "cesta");
        bandeja.width = 150;
        
        suelo = game.add.sprite(0,game.world.height - 1, "plataforma");
        suelo.width = 800;
        suelo.height = 5;
        
        //SE AÑADEN LAS FÍSICAS AL JUEGO
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
 
      
        game.physics.arcade.enable(suelo);
        game.physics.arcade.enable(bandeja);
        
        
        //VARIABLES DEL JUEGO
        game.giro = 250;
        game.gravedad= 150;
        game.puntaje = 0;
        game.vidas = 5;
        game.nivel = 1;
        //FUNCIÓN PARA SUBIR DE NIVEL
        game.subirNivel = game.time.events.loop(10000, subirNivel, this); //manejo de tiempo
        
        //SE CREA UN GRUPO DE METEOROS
        meteoros = game.add.group();
        
        //SE AÑADE EL TEXTO DEL PUNTAJE
        txtPuntaje = game.add.text(25, 16, 'Score: 0', { font: '24px Arial', fill: '#ffffff' });
        
        //SE AÑADE EL TEXTO DEL CONTADOR DE VIDAS
        txtVidas = game.add.text(625, 16, 'Lifes: 5', {font: '24px Arial', fill: '#ffffff'});
        
        txtNivel = game.add.text(325, 16, 'Level: 1', {font: '24px Arial', fill: '#ffffff'});

         game.time.events.loop(rangoTiempo, soltarMeteoro,this);
        
        
         audio = game.add.audio("LukeLake");
         fx = game.add.audio("fxMeteoro");
         audio.play();
    },
    
    update: function(){
        
        
        posicion = Math.random() * (700 - 0);
        
        //MOVER CESTA CON EL MOUSE
        bandeja.body.x = game.input.mousePointer.x - bandeja.width / 2;
        
        
        
        
        //SE AÑADE UN COLLIDER ENTRE LA BANDEJA Y LOS METEOROS, Y SE DISPARA UNA FUNCIÓN
        game.physics.arcade.overlap(bandeja, meteoros, atajar, null, this);
        
        //SE AÑADE UN COLLIDER ENTRE EL SUELO Y LOS METEOROS, Y SE DISPARA UNA FUNCIÓN
        game.physics.arcade.overlap(meteoros, suelo, perderVida, null, this);     
    },
    
    
    
};

  var soltarMeteoro = function(){
      
        
        var meteorito = meteoros.create(posicion, 100, 'meteoro'); //SE CREA UN METEORO
        game.physics.arcade.enable(meteorito); //SE LE DA FÍSICA AL METEORO
        fx.volume = 0.3;
        fx.play();
        meteorito.body.gravity.y = game.gravedad; //SE LE ASIGNA LA GRAVEDAD AL METEORO
        
    }
  
  var atajar = function(bandeja,meteorito){
      meteorito.kill(); //SE DESTRUYE EL OBJETO
      game.puntaje += 5; //SE INCREMENTA 5 PUNTOS
      txtPuntaje.setText('Score: '+game.puntaje);
  }
  
  var perderVida = function(suelo,diamante){
      diamante.kill();
      game.vidas -= 1;
      txtVidas.setText("Lifes: "+game.vidas);
      
      if(game.vidas == 0){
          
           suelo.kill();
           bandeja.kill();
           game.add.text(200, 50, 'You Lose :( ', {font:'80px Arial', fill: '#ffffff'});
           game.add.text(200, 150, 'Level: '+game.nivel, {font:'30px Arial', fill: '#ffffff'});
           game.add.text(200, 200, 'Score: '+game.puntaje, {font:'30px Arial', fill: '#ffffff'});
           game.add.sprite(0,250,"fuego");
           var Start = game.add.text(200,350,"Play Again ",{font: "50px Arial", fill: "#ffffff"});
           Start.inputEnabled = true;
           Start.events.onInputDown.add(start,this);
      }
  }
  
  var subirNivel = function(){
      game.gravedad *= 2;
      game.nivel += 1;
      rangoTiempo -= 300;
      txtNivel.setText('Level: '+game.nivel);
  }
  
  var start = function(){
      game.state.start("Game");
  }
  
