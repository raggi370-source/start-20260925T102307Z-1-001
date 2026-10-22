/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti
let disponibili = []
let cronologia =[]

/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

const celle = document.getElementById(`tabellone`);

for (let i = 0; i < 90; i++) {
  const box = document.createElement("div");
  disponibili.push(i + 1);
  box.textContent = i + 1;
  box.classList.add(`tabellone`);
  celle.appendChild(box);
}


const bottone_estrai = document.getElementById(`estrai`);


//for(let i = 0 ; i<disponibili.length ; i++)
//for (let j = 0 ; j < usciti.length; j++)
//if (j === i )
bottone_estrai.addEventListener(`click`, () => {
  let a = Math.floor(Math.random() * disponibili.length)
  let b = disponibili.splice(a -1, 1)[0];
  usciti.push(b);
  cronologia.push(b)
  if (cronologia.length > 11){//cronologia
    let c = cronologia.pop();
    console.log(c)
    
  }
  const crono = document.querySelector(`#ultimo-numero`);
  crono.textContent = cronologia + " , ";
  
  
  
  
  console.log(a);
  console.log(b);
  console.log(cronologia)
  console.log(disponibili)
  console.log(usciti)
})







