let titleone = document.getElementById('title-one')

let loopholes = [];

const winners = () => {
    for (let i = 1; i < 10; i++) {
        loopholes[i] = document.getElementById('title'+i).innerHTML;
    }
    if(loopholes[1] === loopholes[2] && loopholes[2] === loopholes[3] && loopholes[1] != ''){
        titleone.innerHTML = `${loopholes[1]} winner`;
        setTimeout(function(){
            location.reload()
        },1000)
    }else if(loopholes[4] === loopholes[5] && loopholes[5] === loopholes[6] && loopholes[4] != ''){
        titleone.innerHTML = `${loopholes[4]} winner`;
        setTimeout(function(){
            location.reload()
        },1000)
    }
    else if(loopholes[7] === loopholes[8] && loopholes[8] === loopholes[9] && loopholes[7] != ''){
        titleone.innerHTML = `${loopholes[7]} winner`;
        setTimeout(function(){
            location.reload()
        },1000)
    }
    else if(loopholes[3] === loopholes[5] && loopholes[5] === loopholes[7] && loopholes[7] != ''){
        titleone.innerHTML = `${loopholes[5]} winner`;
        setTimeout(function(){
            location.reload()
        },1000)
    }
    else if(loopholes[1] === loopholes[5] && loopholes[5] === loopholes[9] && loopholes[9] != ''){
        titleone.innerHTML = `${loopholes[5]} winner`;
         setTimeout(function(){
            location.reload()
        },1000)
    }
}

let gamer = 'x';
 const game = (id) =>{
    let elemet = document.getElementById(id);
    if(gamer === 'x' && elemet.innerHTML == ''){
        elemet.innerHTML = 'x';
        gamer = 'o';
        titleone.innerHTML = 'o';
    }
   else if(gamer === 'o' && elemet.innerHTML == ''){
        elemet.innerHTML = 'o';
        gamer = 'x';
        titleone.innerHTML = 'x';
    }
    winners()
}

