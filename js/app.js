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

  pieces.icons.sort(() => .5 - Math.random());

  // console.log(pieces.icons);

  for(var i = 0; i < pieces.icons.length; i++) {
        $('.container-fluid .row').append('<div class="columns"><div id="'+i+'" class="card"><div class="card-body"><h2 class="text-center"><span class="icon d-none '+pieces.icons[i]['id']+'">'+pieces.icons[i]['icon']+'</span></h2></div></div></div>');
    }

  $('.card').click(function() {
    var id = $(this).attr('id');
    var icon = $('#'+id+' .icon');
    selected.push(id);

    if(selected.length > 1) {
      $('.icon').each(function() {
        if(icon.hasClass('selected')) {
          icon.removeClass('selected');
          icon.addClass('d-none');
        }
        selected.length = 0;
        console.log(selected.length);
      });
    }else {
      console.log(selected.length);
      icon.addClass('selected');
      icon.removeClass('d-none');
          
    }
  });

});