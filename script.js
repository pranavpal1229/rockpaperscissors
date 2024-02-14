
score_keeper = [0,0]
while(score_keeper[0]!= 5 && score_keeper[1]!= 5){
    x = prompt("Rock Paper or Scissors").toLowerCase()
    options = ['rock', 'paper', 'scissors']
    function generateOption(){
        num = Math.floor(Math.random() * 3)
        if (num==3){
            num = 2
        }
        return options[num]
    }

    if (x == 'rock' || x == 'paper' || x == 'scissors'){
        console.log(x)
        enemy = generateOption();
        if (x == enemy){
            // No need to do anything here
        }
        else if (x == 'rock' && enemy == 'paper'){
            score_keeper[1] += 1;
        }
        else if(x == 'paper' && enemy == 'scissors'){
            score_keeper[1] += 1;
        }
        else if(x == 'scissors' && enemy == 'rock'){
            score_keeper[1] += 1;
        }
        else{
            score_keeper[0] += 1;
        }
        console.log(enemy)
        console.log(score_keeper)
    }
}


