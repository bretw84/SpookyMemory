$(document).ready(function() {
  
  var selected = [];

  var pieces = {
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
    ]
  }

  // pieces.icons.sort(() => .5 - Math.random());
  // A function to generate a random
  // permutation of arr Fisher-Yates method
  let randomize = (arr, n) =>
  {
  
    // Start from the last element and swap
    // one by one. We don't need to run for
    // the first element that's why i > 0
    for (let i = n - 1; i > 0; i--)
    {

      // Pick a random index from 0 to i inclusive
      let j = Math.floor(Math.random() * (i + 1));

      // Swap arr[i] with the element
      // at random index
      [arr[i], arr[j]] = [arr[j], arr[i]];

    }

  }

  let cards = pieces.icons;
  let length = cards.length;
  let flipped = 0;
  let staged = [];
  randomize (cards, length);

  for(var i = 0; i < length; i++) {
    $('.container-fluid').append('<div data-id="'+cards[i]['id']+'" class="card"><span class="icon">'+cards[i]['icon']+'</span></div>');
  }

  $('.card').click(function() {

    if($(this).hasClass('flipped') || $(this).hasClass('solved')) {

      alert('Card already flipped or solved... Choose another card...');
      return false;

    } else {

      $(this).addClass('flipped');

      flipped++;

      switch(flipped) {
        case 1:
          staged[0] = $(this).data('id');
          console.log(staged);
        break;
        case 2:
          staged[1] = $(this).data('id');
          console.log(staged);
          compareCards(staged);
          break
      }

    }

  });

  var compareCards = function(cards) {
    if(cards[0] == cards[1]) {
      console.log('We got a match...');
    } else {
      console.log("2 cards clicked, but not a match...")
    }
  }

});