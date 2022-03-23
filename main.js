//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta,
 //i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
//e quali dei numeri da indovinare sono stati individuati.

let numeroInserito;
let numeriDaInserire;
//creato 5 numeri random con una funzione setTimeout e stamparli su schermo
let array=[];  
          for(y=1; y<101; y++){
             array.push(y);
            }
  
            function shuffle(array){
                return array.sort(() => Math.random() -0.5)
             }
            array=shuffle(array);   
    console.log(array)
    
    setTimeout(function numeriRandom(){
        for(i=1; i<=5; i++){
        let container=document.getElementById("container");
        let box=document.createElement("div");
        container.classList.add("cont_grid") ;
        container.appendChild(box);
        box.classList.add("box")
        box.innerHTML=`${array[i]}`
        }
    }) 
    //5 prompt per chiedere all'utente di inserire i numeri che ha visto
    let numeriUtente=[];
    setTimeout( function numeriInseriti(){
        let i = 0;
        while (i < 5) {
            numeroInserito=parseInt(prompt("Inserisci uno dei numeri che hai visto"));
            numeriUtente.push(numeroInserito)
            console.log(numeriUtente)
            i++;
        }   
    },3000)
    
    
   








//1 funzione e stampa
    //push in array 
    //2 crea 5 prompt per compilare i numeri che ha visto
    //pushare i numeri del prompt in un altro array
    //controllare con includes
    //3 ciclo for con gli if per controllare se il numero insrito è uguale se è true 
    //estratto i numeri corretti gli pushamo in un altro 