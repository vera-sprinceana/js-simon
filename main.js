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
        console.log(array[i])
        }
    }) 
    //5 prompt per chiedere all'utente di inserire i numeri che ha visto
  
    
    let numeriUtente=[];
    setTimeout( function numeriInseriti(){
        let x = 0;
        while (x < 5) {
            numeroInserito=parseInt(prompt("Inserisci uno dei numeri che hai visto"));
            numeriUtente.push(numeroInserito);
            x++;
        } 
           console.log(`I numeri inseriti dall'utente sono: ${numeriUtente}`);

          let numeroCorretto=[]
    
        if(array.includes.numeriUtente){
            numeroCorretto.push(numeriUtente);
           
        }
        console.log(`I numeri indovinati sono: ${numeroCorretto} `)  
    },3000);
   
    
