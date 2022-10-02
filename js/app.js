$(document).ready(function() {
  
  let pieces = {
    "icons":[
      {"icon":"🦇","id":1},
      {"icon":"🦇","id":1},
      {"icon":"🎃","id":2},
      {"icon":"🎃","id":2},
      {"icon":"🩸","id":3},
      {"icon":"🩸","id":3},
      {"icon":"🕷","id":4},
      {"icon":"🕷","id":4},
      {"icon":"🕸","id":5},
      {"icon":"🕸","id":5},
      {"icon":"🧛‍♀️","id":6},
      {"icon":"🧛‍♀️","id":6},
      {"icon":"💀","id":7},
      {"icon":"💀","id":7},
      {"icon":"👻","id":8},
      {"icon":"👻","id":8}
      // {"icon":"🧟","id":9},
      // {"icon":"🧟","id":9},
      // {"icon":"😱","id":10},
      // {"icon":"😱","id":10},
    ]
  }


  let cards = pieces.icons;
  let length = cards.length;
  let flipped = 0;
  let matches = 0;
  let matchesNeeded = length/2;
  let staged = [];

  newBoard(cards,length);

  $('.card').click(function() {

    setInterval(startTimer, 10);
    $('body').addClass('started');

    if(!$('body').hasClass('started')) {
      $('body').addClass('started');
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
     }

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

    console.log('Card Clicked...')

    if($(this).hasClass('flipped') || $(this).hasClass('solved')) {
      
      console.log('Clicked an already flipped or matched card');
      alert('Card already flipped or solved... Choose another card...');
      return false;

    } else {

      console.log('Flipped an unsolved card..')

      $(this).addClass('flipped');

      flipped++;

      switch(flipped) {
        case 1:
          staged[0] = $(this).data('id');
          console.log('1 card flipped');
          break;
        case 2:
          staged[1] = $(this).data('id');
          flipped = 0;
          console.log('2 cards flipped');
          compareCards(staged[0],staged[1]);
          break;
      }
    }

  });

});

function newBoard(cards, length) {
  console.log('newBoard fired');
  randomizeCards(cards, length);
  for(let i = 0; i < length; i++) {
    $('.container-fluid').append('<div data-id="'+cards[i]['id']+'" class="card"><span class="icon">'+cards[i]['icon']+'</span></div>');
  }
}

function randomizeCards(arr, n) {
  console.log('randomizeCards fired');
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function compareCards(card1,card2, matches) {
  console.log('compareCards fired');
  if(card1 == card2) {
    matchCards(matches);
  } else {
    noMatch();
  }
}

function matchCards() {
  console.log('matchCards Fired');
  setTimeout(function() {
    $('.flipped').each(function() {
      $(this).removeClass('flipped');
      $(this).addClass('solved');
    });
  },1000);
  matchesNeeded = $('.card').length / 2;
  currentMatches = $('.solved').length / 2 + 1;
  console.log("Number of matches: "+currentMatches);
  console.log("Number of matches needed to win: "+matchesNeeded);
  if(currentMatches >= matchesNeeded) {
    bigWinner();
    clearInterval(Interval);
  }
}

function noMatch() {
  console.log('noMatch Fired!');
  $('.flipped').each(function() {
    $(this).addClass('noMatch');
  })
  setTimeout(function() {
    $('.flipped').each(function() {
      $(this).removeClass('flipped').removeClass('noMatch');
    });
  },1000);
}

function bigWinner() {
  console.log('bigWinner fired');
  $('.bigWinner').show();
  $('.card').each(function() {
    $(this).addClass('faded');
  })
}