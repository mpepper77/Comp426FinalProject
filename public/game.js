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

 var keepScore = setInterval(function(score){
    
     let upperPlayer = $("#player").css('top');
     upperPlayer = parseInt(upperPlayer);
    let leftGerm = $("#germ").css('left');
    leftGerm = parseInt(leftGerm)
    //console.log(upperPlayer)
    
    if(upperPlayer<150 ){
        let score = $("#myscore").text()
        console.log(score);
         score = parseInt(score);
         score = score+1
         console.log(score);
         $("#myscore").text(score);
     }
//    let characterTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        // let blockLeft = parseInt(window.getComputedStyle(germ).getPropertyValue("left"));
        // console.log(blockLeft);
        // if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        //     block.style.animation = "none";
        //     window.alert("Game Over. score: "+Math.floor(counter/100));
        //     counter=0;
        //     block.style.animation = "block 1s infinite linear";
        // }else{
        //     counter++;
        //     document.getElementById("myscore").innerHTML = Math.floor(counter/100);
        // }
    }, 2175);


  //   var checkDead = setInterval(function() {
    //     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //     if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
    //         block.style.animation = "none";
    //         alert("Game Over. score: "+Math.floor(counter/100));
    //         counter=0;
    //         block.style.animation = "block 1s infinite linear";
    //     }else{
    //         counter++;
    //         document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    //     }
    // }, 10); 
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