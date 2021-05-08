export const setupGame = function(){
    const $root = $('#gameRoot');
    const toAppend = `<div class = "game" id = "game">
        <div id = "player">
        <img src ="running person.png" id = "germpic" alt= "germImg">

        </div>
        <div id = "germ">
        <img src ="germ.png" id = "germpic" alt= "germImg">

        </div>

        </div> `
    
        $("#start").replaceWith(toAppend);
    
        

}

export const jump = function(player){
    if (player.classList == "move"){
        return;
    } else{
        player.classList.add("move");
        setTimeout(function(){
            player.classList.remove("move");
        }, 250)
    }
}

export const renderGame = function(){
    setupGame();
    const player = $("#player")[0];
    console.log(player)
    const germ = $("#germ")[0];
    $(document).keypress(function(e) {
        jump(player) 
          // enter pressed
        
      });
    

}

export const preGame = function(){
    const toApp = `    <button type = "button" id = "start" >Start Game</button>
    `
    const $root = $('#gameRoot');

    $root.append(toApp);
    $root.on("click", "#start", (event)=> renderGame());




}
$(function(){
    preGame();
});