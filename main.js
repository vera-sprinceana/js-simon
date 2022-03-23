//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta,
 //i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
//e quali dei numeri da indovinare sono stati individuati.


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
    
    setTimeout(function(){
        for(i=1; i<=5; i++){
        let container=document.getElementById("container");
        let box=document.createElement("div");
        container.classList.add("cont_grid") ;
        container.appendChild(box);
        box.classList.add("box")
        box.innerHTML=`${array[i]}`
    }
    },3000)
    

