export const setupGame = function(){
    const $root = $('#gameRoot');
    console.log($root);
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
    //console.log(player)
    const germ = $("#germ")[0];
    $(document).click(function(e) {
        jump(player) 
          // enter pressed
      });  

}

//  var keepScore = setInterval(function(score){
    
//      let upperPlayer = $("#player").css('top');
//      upperPlayer = parseInt(upperPlayer);
//     let leftGerm = $("#germ").css('left');
//     leftGerm = parseInt(leftGerm)
//     //console.log(upperPlayer)
    
//     if(upperPlayer<150 ){
//         let score = $("#myscore").text()
//         console.log(score);
//          score = parseInt(score);
//          score = score+1
//          console.log(score);
//          $("#myscore").text(score);
//      }

    // }, 2175);

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