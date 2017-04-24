var creditState = {
    
    create: function(){
        
        game.add.text(0,50,"Team Metrohack (@MetrohackUnimet)",{font: "50px Console", fill: "#ffffff"});
        game.add.text(30,150,"Programmer & Ilustration",{font: "50px Console", fill: "#F5340B"});
        game.add.text(10,250,"Jorge Bou-saad => @KingBousing (twitter)-  jlbousing (github)",{font: "25px Console", fill: "#720B6F"});
        game.add.text(10,300,"Image of the little prince was taken from Antoine de Saint-Exupéry pics",{font: "25px Console", fill: "#720B6F"});
        game.add.text(30,400,"Music & Sound Effects",{font: "50px Console", fill: "#F5340B"});
        game.add.text(10,500,"Sam Carmona => @CandiedPopcorn (twitter)",{font: "25px Console", fill: "#720B6F"});
        
        var Start = game.add.text(300,550,"START ",{font: "50px Arial", fill: "#ffffff"});
        Start.inputEnabled = true;
        Start.events.onInputDown.add(this.start,this);
    },
    
    start: function(){
        game.state.start("Game");
    }
};