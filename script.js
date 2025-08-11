let AnimalsArr = [
    {
        question: "A large animal with a trunk, known for its intelligence and memory",
        word: "elephant",
    },
    {
        question: "A big cat with black stripes, found in jungles",
        word: "tiger",
    },
    {
        question: "A black and white bear-like animal that eats bamboo",
        word: "panda",
    },
    {
        question: "A bird that cannot fly but swims very well in icy waters",
        word: "penguin",
    },
    {
        question: "A long-necked animal that eats leaves from tall trees",
        word: "giraffe",
    },
    {
        question: "A marine animal with eight arms",
        word: "octopus",
    },
    {
        question: "A farm animal that gives us milk and says 'moo'",
        word: "cow",
    },
    {
        question: "A small, furry pet that loves to chase mice",
        word: "cat",
    },
    {
        question: "A loyal pet known as man's best friend",
        word: "dog",
    },
    {
        question: "A hopping animal with strong legs and a pouch",
        word: "kangaroo",
    },
    {
        question: "A bird known for its colorful feathers and ability to mimic speech",
        word: "parrot",
    },
    {
        question: "A sea creature with a hard shell and claws",
        word: "crab",
    },
    {
        question: "A reptile with a long body that slithers on the ground",
        word: "snake",
    },
    {
        question: "A striped horse-like animal found in Africa",
        word: "zebra",
    },
    {
        question: "A slow-moving animal with a hard shell on its back",
        word: "turtle",
    },
    {
        question: "A bird of prey with excellent vision and strong talons",
        word: "eagle",
    },
    {
        question: "A desert animal with humps on its back",
        word: "camel",
    },
    {
        question: "An animal known for building dams and having large teeth",
        word: "beaver",
    },
    {
        question: "A nocturnal bird that hoots and is wise in stories",
        word: "owl",
    },
    {
        question: "A clever mammal known for its bushy tail and sly nature",
        word: "fox",
    },
];


let FoodsArr = [
    {
        question: "A popular Italian dish made with dough, sauce, and cheese",
        word: "pizza",
    },
    {
        question: "A flat breakfast food made from batter and often served with syrup",
        word: "pancakes",
    },
    {
        question: "A round fruit with red, green, or yellow skin and a sweet taste",
        word: "apple",
    },
    {
        question: "A yellow fruit that monkeys love",
        word: "banana",
    },
    {
        question: "A spicy Indian dish usually served with rice or bread",
        word: "curry",
    },
    {
        question: "A crunchy snack made from potatoes and usually salted",
        word: "chips",
    },
    {
        question: "A sweet baked food usually eaten on birthdays",
        word: "cake",
    },
    {
        question: "A leafy green vegetable often used in salads",
        word: "lettuce",
    },
    {
        question: "A food made from flour, water, and yeast, often sliced",
        word: "bread",
    },
    {
        question: "A Mexican dish made with a folded tortilla and fillings",
        word: "taco",
    },
    {
        question: "A thick soup usually made from vegetables or meat",
        word: "stew",
    },
    {
        question: "A breakfast dish made from grains and usually eaten with milk",
        word: "cereal",
    },
    {
        question: "A Japanese dish made with vinegared rice and raw fish",
        word: "sushi",
    },
    {
        question: "A sweet treat made from cocoa beans",
        word: "chocolate",
    },
    {
        question: "A yellow dairy product often spread on bread",
        word: "butter",
    },
    {
        question: "A food made from milk, often aged and served in slices",
        word: "cheese",
    },
    {
        question: "A long, thin pasta served with sauce",
        word: "spaghetti",
    },
    {
        question: "A salty snack made by popping corn kernels",
        word: "popcorn",
    },
    {
        question: "A drink made by brewing ground coffee beans",
        word: "coffee",
    },
    {
        question: "A food made with meat between two buns",
        word: "burger",
    },
];


let SportsArr = [
    {
        question: "A sport played with a bat and ball between two teams of 11 players",
        word: "cricket",
    },
    {
        question: "A sport played on a court with a racket and shuttlecock",
        word: "badminton",
    },
    {
        question: "A team sport where players try to shoot a ball into a hoop",
        word: "basketball",
    },
    {
        question: "A game played on ice where players hit a puck with sticks",
        word: "hockey",
    },
    {
        question: "A sport that involves kicking a ball to score goals",
        word: "football",
    },
    {
        question: "A sport where players hit a ball over a net using rackets",
        word: "tennis",
    },
    {
        question: "A water sport where swimmers race in a pool",
        word: "swimming",
    },
    {
        question: "A combat sport where opponents try to throw each other on the mat",
        word: "judo",
    },
    {
        question: "A sport where players ride waves on a board",
        word: "surfing",
    },
    {
        question: "A long-distance endurance race, often 42.195 kilometers",
        word: "marathon",
    },
    {
        question: "A sport where players aim to get the ball into 18 holes",
        word: "golf",
    },
    {
        question: "A sport that involves lifting heavy weights overhead",
        word: "weightlifting",
    },
    {
        question: "A sport where gymnasts perform flips and routines",
        word: "gymnastics",
    },
    {
        question: "A sport where cyclists race on roads or tracks",
        word: "cycling",
    },
    {
        question: "A racquet sport played against a wall in a small court",
        word: "squash",
    },
    {
        question: "A sport where players slide stones on ice toward a target area",
        word: "curling",
    },
    {
        question: "A sport where horses jump over obstacles",
        word: "equestrian",
    },
    {
        question: "A fast-paced indoor game played with a small plastic ball and paddles",
        word: "table tennis",
    },
    {
        question: "A martial art where competitors strike using punches and kicks",
        word: "karate",
    },
    {
        question: "A track and field event where athletes try to jump the highest",
        word: "high jump",
    },
];


let selectedOption = "Animals",
questionCount=0,
ideaCount=true;

const gameCards =document.querySelector(".gameCards"),
allCards=document.querySelectorAll(".gameCards .cards"),
playground=document.querySelector(".playground"),
startGame=document.querySelector(".startGame"),
resetGame=document.querySelector(".resetGame"),
questionHint=document.querySelector(".questionHint"),
selectedWords=document.querySelector(".selectedWords"),
shuffleWords=document.querySelector(".shuffleWords");

allCards.forEach((card)=>{
    card.addEventListener("click",(e)=>{
        allCards.forEach((el)=>{
            el.classList.remove("active");
        });
        e.target.classList.add("active");
        selectedOption=e.target.getAttribute("data-option");
    });
});

startGame.addEventListener("click",()=> {
    if(startGame.innerText == "Start Game"){
        gameCards.style.display="none";
        playground.style.display="block";
        startGame.innerText="Back to Home";
        resetGame.style.display="inline";
        resetGame.setAttribute("disabled",true);
        startToGuessTheWord();
    } else {
        gameCards.style.display="flex";
        playground.style.display="none";
        startGame.innerText="Start Game";
        resetGame.style.display="none";
        questionCount=0;
        ideaCount=true;
    }
});

let selectedArr=[],
randomWords=[];

function startToGuessTheWord(){
    selectedWords.innerHTML="";
    shuffleWords.innerHTML="";
    ideaCount=true;

    if (selectedOption == "Animals") {
    selectedArr = shuffle([...AnimalsArr]).slice(0, 10);
} else if (selectedOption == "Foods") {
    selectedArr = shuffle([...FoodsArr]).slice(0, 10);
} else {
    selectedArr = shuffle([...SportsArr]).slice(0, 10);
}


    document.querySelector(".questionProgress").innerText = `Question ${questionCount + 1} of 10`;


    questionHint.innerHTML = selectedArr[questionCount].question +" "+
    `<i class="fa-solid fa-lightbulb" onclick="checkFirstWordIdea(this)"></i>`;
    randomWords= selectedArr[questionCount].word.split("");

    if(randomWords!=null){
        let checkRandom = randomWords.slice(); // instead of assigning by reference
shuffle(randomWords);

if (checkRandom.join('') === randomWords.join('')) {
    shuffle(randomWords); // reshuffle if identical
}


        randomWords.forEach(char=>{
            let div1=document.createElement("div");
            div1.classList.add("box");
            selectedWords.append(div1);
            div1.addEventListener("click", function () {
                if (this.innerText !== "") {
                    let letter = this.innerText;
                    this.innerText = "";

        // Return letter to the first empty box in shuffleWords
        const boxes2 = document.querySelectorAll(".shuffleWords .box");
        for (let box of boxes2) {
            if (box.innerText === "") {
                box.innerText = letter;
                box.style.background = "";
                box.style.pointerEvents = "auto";
                break;
            }
        }
    }
});


            let div2=document.createElement("div");
            div2.classList.add("box");
            div2.innerHTML=char;
            div2.addEventListener("click",(e)=>{
                if (e.target.innerText !== "") {
                chooseWordToGuess(e.target.innerText)
                e.target.innerText="";
                e.target.style.background="lightgray";
                e.target.style.pointerEvents = "none"; // disable further clicks
                }
            });
            shuffleWords.append(div2);
        });
    }
}

function chooseWordToGuess(char){
    const boxes=document.querySelectorAll(".selectedWords .box");
    let IsWordPlaced=true,
    totalWord=0,
    correctWords="";

    boxes.forEach((box)=>{
        if(IsWordPlaced && box.innerText==""){
          box.innerText=char;
          IsWordPlaced =false;
        }

        if(box.innerText!=""){
            correctWords+=box.innerText.toLowerCase();
            totalWord++;
        }
    });

    if(totalWord==randomWords.length)
        checkSelectedWord(correctWords);
}

function checkSelectedWord(correctAnswer){
    const boxes=document.querySelectorAll(".selectedWords .box");

    if(selectedArr[questionCount].word===correctAnswer){
        boxes.forEach((box)=>{
            box.classList.add("match");
        });

        setTimeout(function(){
            questionCount++;
            if( questionCount<10){
            startToGuessTheWord();
            }else{
                alert("🎉 Word Game completed!");
                startGame.click(); // Return to home

            }
        },1200)

    }else{
        boxes.forEach((box)=>{
            box.classList.add("shake");
    });
       setTimeout(() => {
            alert("❌ Wrong Guess! Game will restart.");
            startGame.click(); // Simulate going back to home
        }, 1000);
    }
}

resetGame.addEventListener("click",(e)=>{
    startToGuessTheWord();
    resetGame.setAttribute("disabled",true);
});

const shuffle=(array)=>{
    for (let i=array.length-1;i>0;i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}

function checkFirstWordIdea(bulb){
    if(ideaCount){
    const boxes1=document.querySelectorAll(".selectedWords .box");
    const boxes2=document.querySelectorAll(".shuffleWords .box");

    let nextWord=0;

    boxes1.forEach((box)=>{
        if(box.innerText!=""){
            nextWord++;
        }
    });
    
    let findIdea=selectedArr[questionCount].word.split("")[nextWord];
    console.log(findIdea);

    let found=false;
    for(let box of boxes2){
        if(box.innerText.toLowerCase()==findIdea){
            box.click();
            bulb.style.color="#edcc11ff";
            found=true;
            break;
        }
    }
        if(!found){
            bulb.style.color="red";
            resetGame.removeAttribute("disabled");
        }
    }
    ideaCount=false;
}
