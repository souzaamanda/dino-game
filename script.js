const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let estaPulando = false
let posicao = 0;

function pressionaTecla(event){
    if (event.keyCode === 32){
        if(!estaPulando){
             pula();
        }  
    }
}

function pula() {  

    estaPulando = true;

    let upInterval = setInterval (() =>{ //definindo intervalos
        if (posicao >= 150){    
        clearInterval(upInterval); //limpando intervalos

            //descendo
            let downInterval = setInterval (() => {
                if (posicao <= 0){
                    clearInterval(downInterval);
                    estaPulando = false;
                }else{
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px'; 
                } 
            }, 20);
        } else {
       
            //subindo
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }  
    
    }, 20);
}

function criandoCactos (){
    const cactos = document.createElement('div'); // criando a 'div'
    let cactosposicao = 1000;
    let numeroAleatório = Math.random() * 6000; // operações matemáticas

    console.log(numeroAleatório);

    cactos.classList.add('cactos'); // adicionando a classe cactos
    cactos.style.left = 1000 + 'px'
    background.appendChild(cactos); // criando o elemento filho

    let leftInterval = setInterval (() => {
        if (cactosposicao < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactos); // removendo elemento filho
        } else  if (cactosposicao > 10 && cactosposicao < 60 && posicao < 60) { // verificando colisão
            // game over

            clearInterval(leftInterval); // limpando a tela
            document.body.innerHTML = "<h1 class='game-over'>Fim de jogo</h1>" // adicionando texto na tela
        } {
            
            
            
            cactosposicao -= 10;
            cactos.style.left = cactosposicao + 'px';
        }
    }, 20);

    setTimeout(criandoCactos, numeroAleatório);  //executa uma determinada função depois de um determinado tempo.
}

// recursividade (efeito espelh0) é quando uma função invoca ela mesma de dentro dela

criandoCactos();
document.addEventListener('keyup', pressionaTecla );