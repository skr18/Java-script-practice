
let score=0;
let t = confirm("do you want to play")
while(t){
    let p1=prompt("Enter 1 for rock 2 for papper 3 for scissors")
    p1= Number.parseInt(p1)
    let x = Math.floor(Math.random() *3) +1;
    if(x==1){
        if(p1==1){
            alert('Draw cp=1')
            t = confirm("do you want to play")
        }else if(p1==2){
            alert('You Win cp=1')
            score=score+1;
            t = confirm("do you want to play")
        }else{
            alert('you lose cp=1')
            score = score -1;
            t = confirm("do you want to play")
        }
    }else if(x==2){
        if(p1==1){
            alert('you Lose cp=2')
            score = score -1;
            t = confirm("do you want to play")
        }else if(p1==2){
            alert('Draw cp=2')
            t = confirm("do you want to play")
        }else{
            alert('You Win cp=2')
            score=score+1;
            t = confirm("do you want to play")
        }
    }else{
        if(p1==1){
            alert('you Lose cp=3')
            score = score -1;
            t = confirm("do you want to play")
        }else if(p1==2){
            alert('you Lose cp=3')
            score = score -1;
            t = confirm("do you want to play")
        }else{
            alert('Draw cp=3')
            t = confirm("do you want to play")
        }
    }
}
document.write(score);