export const setupGame = function(){
    const $root = $('#gameRoot');
    console.log($root);
    const toAppend = `<div class = "game" id = "game">
        <div class = "score">
            <h2 id = "myscore"> 0 </h2>
        </div>
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
        let score = $("#myscore").text()
         console.log(score);
         score = parseInt(score);
         score = score+1
         console.log(score);
         $("#myscore").text(score);

        setTimeout(function(){
            player.classList.remove("move");
        }, 250)
    }
}

export const renderGame = function(){
    setupGame();
    
    
    const player = $("#player")[0];
    //console.log(player)
    const germ = $("#germ")[0];
    $(document).click(function(e) {
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