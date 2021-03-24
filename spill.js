var boxes = document.getElementById("boxes");
var listNumbers = [0,1,2,3,4,5,6,7,8];
var human = "box boxHuman";
var computer = "box boxComputer";

for (var x=0; x< boxes.children.length; x++){
  boxes.children[x].setAttribute("id",x);
}

for (var i = 0; i < boxes.children.length; i++){
  boxes.children[i].addEventListener("click", function(){
    this.className += " boxHuman";

    var number = listNumbers.indexOf(parseInt(this.id));

    if(number > -1){
      listNumbers.splice(number,1);
    }

    if(winningCombo(human)){
        endGame("Gratulerer du vant");
    }

    if (listNumbers.length == 0 && !winningCombo(human)){
        endGame("Uavgjort");
    }

    if(listNumbers.length > 0 && !winningCombo(human)){
      var random = Math.floor(Math.random()*listNumbers.length)
      var chosen = listNumbers[random];

      document.getElementById(chosen).className += " boxComputer"

      if(random > -1){
        listNumbers.splice(random,1);
      }
    }

    if(winningCombo(computer)){
        endGame("Du tapte desverre")
      }
  })

  boxes.children[i].addEventListener("mouseover", function(){
    this.style.backgroundImage = "url('img/o.svg')";
  })

  boxes.children[i].addEventListener("mouseout", function(){
    this.style.backgroundImage = "";
  })
}

function winningCombo(player){
  if (
    (boxes.children[0].className == player && boxes.children[1].className == player && boxes.children[2].className == player) ||
    (boxes.children[3].className == player && boxes.children[4].className == player && boxes.children[5].className == player) ||
    (boxes.children[6].className == player && boxes.children[7].className == player && boxes.children[8].className == player) ||
    (boxes.children[0].className == player && boxes.children[3].className == player && boxes.children[6].className == player) ||
    (boxes.children[1].className == player && boxes.children[4].className == player && boxes.children[7].className == player) ||
    (boxes.children[2].className == player && boxes.children[5].className == player && boxes.children[8].className == player) ||
    (boxes.children[0].className == player && boxes.children[4].className == player && boxes.children[8].className == player) ||
    (boxes.children[2].className == player && boxes.children[4].className == player && boxes.children[6].className == player)
  ){
    return true;
  }
}

function endGame(message){
  setTimeout(function(){
    alert(message);
    listNumbers = [0,1,2,3,4,5,6,7,8];
    for (var y = 0; y < boxes.children.length; y++){
      boxes.children[y].className = boxes.children[y].className.replace(" boxHuman", "");
      boxes.children[y].className = boxes.children[y].className.replace(" boxComputer", "");
    }
  },500)
}
