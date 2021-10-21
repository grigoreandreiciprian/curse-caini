
function dogs(caini){
    
    let c=[]

    while(c.length<6){
        let n=Math.floor(Math.random()*12)
        let caine=caini[n];

        if(c.includes(caine)==false){
            c.push(caine)
        }
    }

    return c

}

function randomCota(){
    cota=(Math.random()*3+1).toFixed(2)
    return cota
}


let caine=dogs(caini)

let cota1=randomCota()
let cota2=randomCota()
let cota3=randomCota()
let cota4=randomCota()
let cota5=randomCota()
let cota6=randomCota()



function clasament(caine){
    
    let c=[]

    while(c.length<6){
        let n=Math.floor(Math.random()*6)
        let dog=caine[n];

        if(c.includes(dog)==false){
            c.push(dog)
        }
    }
    return c

}

let places=clasament(caine)



function pariu(caine,places){
    
    let obj={

        numele:"",
        sumaPariata:0,
        // cota:0,
        sumaCastigata:0,
        // sumaCastigata:0
   }

   obj.numele=prompt("Introduceti numele cainelui pe care doriti sa pariati");

   obj.sumaPariata=prompt("Ce suma doriti sa pariati ?");


//    if(obj.numele==caine[0].name){
//     obj.cota=cota1
// }else if(obj.numele==caine[1].name){
//     obj.cota=cota2
// }else if(obj.numele==caine[2].name){
//     obj.cota=cota3
// }else if(obj.numele==caine[3].name){
//     obj.cota=cota4
// }else if(obj.numele==caine[4].name){
//     obj.cota=cota5
// }else if(obj.numele==caine[5].name){
//     obj.cota=cota6
// }

if(obj.numele==places[0].name){
    obj.sumaCastigata=obj.sumaPariata*5
}else if(obj.numele==places[1].name){
    obj.sumaCastigata=obj.sumaPariata*3
}else if(obj.numele==places[2].name){
    obj.sumaCastigata=obj.sumaPariata*2
}
  return obj
}






function setHome(){

    let body=document.querySelector("body")

    body.innerHTML=`
    <div class="shadow">

    <section class="main">
        <div class="title">
            <h1>Virtual dog races</h1>
            <img src="images/dog.jpg">
        </div>

        <div class="content">
            <p>Six greyhounds, attractive payout odds and pure live excitement – RACING DOGS was the first of our products to be launched and is still our most successful game to-date. Although your customers are betting on virtual dogs, thanks to over 5,000 real-life filmed racing sequences, they’ll experience real competitive fever just like being at the racetrack!</p>


            <p>The bettor’s experience is made even more realistic since the same race is shown everywhere at the same time – and you decide if a new race begins every one, two, three or four minutes. Real-time feeling, fair and long-lasting gaming excitement are guaranteed – also ensured by our certified odds generator, which prevents all manipulation.
                Additional winning chances add to all the excitement: throughout the day races are randomly tagged as Double-Win (x2) and Triple-Win (x3). Winnings in these races are doubled or even trebled. We can even set up a Bonus for you.</p>

                <button class="btn1">Bet on next race</button>
        </div>
    </section>


    </div>
    `

    let btn1=document.querySelector(".btn1")

    btn1.addEventListener('click',()=>{
        play()
    })

}


function play(){
    let body=document.querySelector("body")

    


    body.innerHTML=`
    
    
    <div class="shadow">

    <section class="main">

        <div class="title">
            <h1>Virtual dog races</h1>
            <img src="images/dog.jpg">
        </div>

          <h3>This race dogs</h3>
        <div class="dogs">

            <div class="dog">
                <img src="${caine[0].url}">
                <h1>${caine[0].name}</h1>
                <p>${cota1}</p>
                <p>1</p>
            </div>


            <div class="dog">
                <img src="${caine[1].url}">
                <h1>${caine[1].name}</h1>
                <p>${cota2}</p>
                <p>2</p>
            </div>


            <div class="dog">
                <img src="${caine[2].url}">
                <h1>${caine[2].name}</h1>
                <p>${cota3}</p>
                <p>3</p>
            </div>


            <div class="dog">
                <img src="${caine[3].url}">
                <h1>${caine[3].name}</h1>
                <p>${cota4}</p>
                <p>4</p>
            </div>


            <div class="dog">
                <img src="${caine[4].url}">
                <h1>${caine[4].name}</h1>
                <p>${cota5}</p>
                <p>5</p>
            </div>


            <div class="dog">
                <img src="${caine[5].url}">
                <h1>${caine[5].name}</h1>
                <p>${cota6}</p>
                <p>6</p>
            </div>


            <div class="button">
            <button class="btn2">BET NOW</button>
            </div>
        </div>

    </section>

    </div>
    
    `

    let btn2=document.querySelector(".btn2")

    btn2.addEventListener('click',()=>{
        sfarsit()
    })
}


function sfarsit(){

    let body=document.querySelector("body")

    let solutie=pariu(caine,places)
    console.log(solutie)

    body.innerHTML=`
    
    <div class="shadow">

        <section class="main">
    
            <div class="title">
                <h1>Virtual dog races</h1>
                <img src="images/dog.jpg">
           </div>

           <div class="clasament">
               <div class="place">
                   <h1>1</h1>
                   <h2>${places[0].name}</h2>
               </div>

               <div class="place">
                <h1>2</h1>
                <h2>${places[1].name}</h2>
            </div>


            <div class="place">
                <h1>3</h1>
                <h2>${places[2].name}</h2>
            </div>


            <div class="place">
                <h1>4</h1>
                <h2>${places[3].name}</h2>
            </div>

            <div class="place">
                <h1>5</h1>
                <h2>${places[4].name}</h2>
            </div>

            <div class="place">
                <h1>6</h1>
                <h2>${places[5].name}</h2>
            </div>
           </div>

           <div class="sume">
               <div class="suma">
                   <h1>Suma pariata</h1>
                   <h2>${solutie.sumaPariata}</h2>
               </div>

               <div class="suma">
                   <h1>Suma castigata</h1>
                   <h2>${solutie.sumaCastigata}</h2>
               </div>
           </div>

           <button class="btn3">Reset bet</button>

    </section>
    </div>
    `

    let btn3=document.querySelector(".btn3")

    btn3.addEventListener('click',()=>{
        setHome()
    })
}