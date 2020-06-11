class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();

    }
  }
   
  play(){
  form.hide()
  textSize(30)
  text("gameStart", 120,100)
  Player.getplayerinfo()
  if (allPlayers!== undefined)
  {
    var displayPos = 130
    for(var plr in allPlayers){
      displayPos += 50
      text(allPlayers[plr].name +" : " + allPlayers[plr].distance, 120,displayPos )
    }
  }
 if (keyIsDown(UP_ARROW)&& player.index!== null) {
   player.distance+=10
   player.update()
 } 
}
}