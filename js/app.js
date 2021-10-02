$(document).ready(function() {
  
  var selected = [];

  var pieces = {
    "icons":[
      {"icon":"🦇","id":0},
      {"icon":"🦇","id":0},
      {"icon":"🎃","id":1},
      {"icon":"🎃","id":1},
      {"icon":"🩸","id":2},
      {"icon":"🩸","id":2},
      {"icon":"🕷","id":3},
      {"icon":"🕷","id":3},
      {"icon":"🕸","id":4},
      {"icon":"🕸","id":4},
      {"icon":"🧛‍♀️","id":5},
      {"icon":"🧛‍♀️","id":5},
      {"icon":"💀","id":6},
      {"icon":"💀","id":6},
      {"icon":"👻","id":7},
      {"icon":"👻","id":7}
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

  let arr = pieces.icons;
  let n = arr.length;
  randomize (arr, n);

  console.log(pieces.icons);

  for(var i = 0; i < pieces.icons.length; i++) {
        $('.container-fluid').append('<div class="card"><span class="icon">'+pieces.icons[i]['icon']+'</span></div>');
    }

});