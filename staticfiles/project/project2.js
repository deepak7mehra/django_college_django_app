console.log("this is javascript");
const number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(number)

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // IF USER TYPE NO VALUE IN CHECK BOX
  
  
  // WHEN THERE IS NO INPUT 
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width='30rem';

    if (score>highscore){
        highscore = score;
    }

    document.querySelector('.highscore').textContent = highscore;



  } else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    }
    else{
        document.querySelector(".message").textContent = "You loose the game";
    }

  } else if (guess < number) {
      if (score>0){
        document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
      }
      else{
        document.querySelector(".message").textContent = "You loose the game";
      }
  }



});

// again button
const again = document.querySelector('.again');
again.addEventListener('click',function(){
    score =20
    document.querySelector(".message").textContent = "Guess Number";
    document.querySelector(".score").textContent = 20;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector(".guess").value = '';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent = '?';

})

// highscore


