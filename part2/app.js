let baseURL = "http://deckofcardsapi.com/api/deck"
let drawCard = "http://deckofcardsapi.com/api/deck/new/draw/?count=1";
let shuffleCards = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

// 1.
async function request1() {
    let data = await $.getJSON(`${drawCard}`);
    let suit = data.cards[0].suit
    let value = data.cards[0].value
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }
  request1();

// 2.
async function request2() {
    let shuffleDeck = await $.getJSON(`${shuffleCards}`);
    let deck_id = shuffleDeck.deck_id
    let firstCard = await $.getJSON(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
    let secondCard = await $.getJSON(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
    [firstCard, secondCard].forEach(card => {
        let { suit, value } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
      });
    }
  request2();   


  3. 
async function setup(){
    let $btn = $('button');
    let $cardArea = $('#card-area');

    
    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    $btn.show().on('click', async function(){
        let card = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
        let cardImg = card.cards[0].image;
        
        $cardArea.append($('<img>', {
            src: cardImg,

        }))
        if (shuffleDeck.remaining === 0) $btn.remove();
    });
}
setup();

