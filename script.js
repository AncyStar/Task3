var griddisplay=document.querySelector("#grid");
var result=document.querySelector("#score");
var cardArray = [
    {
        name:"dial",
        img:"images/dial.svg"
    },
    {
        name:"earphone",
        img:"images/earphone.svg"
    },
    {
        name:"internet",
        img:"images/internet.svg"
    },
    {
        name:"key",
        img:"images/key.svg"
    },
    {
        name:"like",
        img:"images/like.svg"
    },
    {
        name:"menu",
        img:"images/menu.svg"
    },
    {
        name:"pen",
        img:"images/pen.svg"
    },
    {
        name:"subscription",
        img:"images/subscription.svg"
    },
    {
        name:"dial",
        img:"images/dial.svg"
    },
    {
        name:"earphone",
        img:"images/earphone.svg"
    },
    {
        name:"internet",
        img:"images/internet.svg"
    },
    {
        name:"key",
        img:"images/key.svg"
    },
    {
        name:"like",
        img:"images/like.svg"
    },
    {
        name:"menu",
        img:"images/menu.svg"
    },
    {
        name:"pen",
        img:"images/pen.svg"
    },
    {
        name:"subscription",
        img:"images/subscription.svg"
    },

]

cardArray.sort(() => 0.5 - Math.random())

gameBoard();

function gameBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/search.svg');
        //find which card clicked
        card.setAttribute('data-id',i);
        // flip card
        card.addEventListener('click',flipcard);
        griddisplay.appendChild(card);
    }
}
//flip card function

card_choose = [];
card_choose_id = [];

function flipcard(){
    const card_id = this.getAttribute("data-id");
    this.setAttribute('src',cardArray[card_id].img);
    card_choose_id.push(card_id);
    card_choose.push(cardArray[card_id].name);

    if(card_choose.length === 2){
        setTimeout(checkMatch,500);
    }
}
// checkmatch function
cardsWon = [];
function checkMatch(){
    const cards = document.querySelectorAll('img');

    if(card_choose[0] == card_choose[1]){
        alert('You have found a match');
    
        cards[card_choose_id[0]].addEventListener('click',flipcard);
        cards[card_choose_id[1]].addEventListener('click',flipcard);
        
        cardsWon.push(card_choose);
        result.innerHTML = cardsWon.length;
    }
    else{
        cards[card_choose_id[0]].setAttribute('src','images/search.svg');
        cards[card_choose_id[1]].setAttribute('src','images/search.svg')
    }

    card_choose = []; 
    card_choose_id = [];

    if (cardsWon.length == cardArray.length/2){
        result.innerHTML = "Congradulations.... You have completed the Game."
    }

}


