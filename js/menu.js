var menuState = {

    create: function () {

        game.add.sprite(50,0,"metrohack");
        game.add.text(100,100,"Defense of the Little Prince",{font: "50px Arial", fill: "#ffffff"});
        
        var Start = game.add.text(300,250,"START ",{font: "50px Arial", fill: "#ffffff"});
        var Credits = game.add.text(300,500,"Credits",{font: "50px Arial", fill: "#ffffff"});
        Start.inputEnabled = true;
        Start.events.onInputDown.add(this.start,this);
        
        Credits.inputEnabled = true;
        Credits.events.onInputDown.add(this.Creditos,this);
    },
    start: function(){
        
        game.state.start("Game");
    },
    Creditos: function(){
        game.state.start("Credits");
    }

};