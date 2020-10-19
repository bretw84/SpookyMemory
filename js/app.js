$(document).ready(function() {

      var pieces = {
        "icons":[
          {"icon":"🦇","id":0},
          {"icon":"🎃","id":1},
          {"icon":"🧹","id":2},
          {"icon":"🕷","id":3},
          {"icon":"🕸","id":4},
          {"icon":"🧛‍♀️","id":5},
          {"icon":"💀","id":6},
          {"icon":"👻","id":7},
          {"icon":"🦇","id":0},
          {"icon":"🎃","id":1},
          {"icon":"🧹","id":2},
          {"icon":"🕷","id":3},
          {"icon":"🕸","id":4},
          {"icon":"🧛‍♀️","id":5},
          {"icon":"💀","id":6},
          {"icon":"👻","id":7}
        ]
      }
      
      pieces.icons.sort(() => .5 - Math.random());

      // console.log(pieces.icons);

      for(var i = 0; i < pieces.icons.length; i++) {
        $('.container-fluid .row').append('<div class="col-sm-3"><div id="'+i+'" class="card" style="width: 18rem;"><div class="card-body"><h2 class="text-center"><span class="icon d-none '+pieces.icons[i]['id']+'">'+pieces.icons[i]['icon']+'</span></h2></div></div></div>');
      }

      $('.card').click(function() {
       var id = $(this).attr('id');
       var icon = $('#'+id+' .icon');  
       icon.toggleClass('d-none');
       console.log(icon);
      });

});

